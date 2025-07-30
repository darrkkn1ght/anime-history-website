#!/usr/bin/env node

/**
 * Image Optimization Script for Anime History Website
 * Optimizes images for web delivery with multiple formats and sizes
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Configuration
const config = {
  inputDir: 'public/images',
  outputDir: 'public/images/optimized',
  backupDir: 'public/images/backup',
  supportedFormats: ['.jpg', '.jpeg', '.png', '.webp', '.avif'],
  outputFormats: {
    webp: { quality: 85, effort: 4 },
    avif: { quality: 80, effort: 4 },
    jpeg: { quality: 90, progressive: true },
    png: { compressionLevel: 8 }
  },
  responsiveSizes: [320, 640, 768, 1024, 1280, 1920],
  maxFileSize: 500 * 1024, // 500KB
  directories: {
    eras: ['origins', 'foundation', 'expansion', 'golden-age', 'digital-age', 'current-era'],
    ui: ['backgrounds', 'icons', 'logos'],
    timeline: ['timeline-bg.svg', 'era-markers.svg', 'progress-bar.svg']
  }
};

class AnimeImageOptimizer {
  constructor() {
    this.startTime = Date.now();
    this.processedFiles = 0;
    this.savedBytes = 0;
    this.errors = [];
    this.warnings = [];
    this.imageStats = {
      original: { count: 0, size: 0 },
      optimized: { count: 0, size: 0 }
    };
  }

  log(message, color = 'reset') {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${colors[color]}[${timestamp}] ${message}${colors.reset}`);
  }

  logStep(step, message) {
    this.log(`${step} ${message}`, 'cyan');
  }

  logSuccess(message) {
    this.log(`✅ ${message}`, 'green');
  }

  logError(message) {
    this.log(`❌ ${message}`, 'red');
    this.errors.push(message);
  }

  logWarning(message) {
    this.log(`⚠️  ${message}`, 'yellow');
    this.warnings.push(message);
  }

  logInfo(message) {
    this.log(`ℹ️  ${message}`, 'blue');
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async checkDependencies() {
    this.logStep('🔍', 'Checking image optimization dependencies...');

    const dependencies = [
      { command: 'sharp', name: 'Sharp (Node.js image library)' },
      { command: 'imagemin', name: 'ImageMin' }
    ];

    let allAvailable = true;

    for (const dep of dependencies) {
      try {
        await this.runCommand('node', ['-e', `require('${dep.command}')`]);
        this.logSuccess(`${dep.name} ✓`);
      } catch (error) {
        this.logWarning(`${dep.name} not available - using fallback methods`);
        allAvailable = false;
      }
    }

    // Check for system image tools
    const systemTools = [
      { command: 'cwebp', name: 'WebP encoder' },
      { command: 'avifenc', name: 'AVIF encoder' },
      { command: 'jpegoptim', name: 'JPEG optimizer' },
      { command: 'optipng', name: 'PNG optimizer' }
    ];

    for (const tool of systemTools) {
      try {
        await this.runCommand(tool.command, ['--version']);
        this.logSuccess(`${tool.name} ✓`);
      } catch (error) {
        this.logInfo(`${tool.name} not available (optional)`);
      }
    }

    return allAvailable;
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      const process = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
        ...options
      });

      let stdout = '';
      let stderr = '';

      process.stdout?.on('data', (data) => {
        stdout += data.toString();
      });

      process.stderr?.on('data', (data) => {
        stderr += data.toString();
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr });
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      process.on('error', (error) => {
        reject(error);
      });
    });
  }

  async createDirectories() {
    this.logStep('📁', 'Creating output directories...');

    const dirsToCreate = [
      config.outputDir,
      config.backupDir,
      path.join(config.outputDir, 'eras'),
      path.join(config.outputDir, 'ui'),
      path.join(config.outputDir, 'timeline')
    ];

    // Create era subdirectories
    for (const era of config.directories.eras) {
      dirsToCreate.push(path.join(config.outputDir, 'eras', era));
      dirsToCreate.push(path.join(config.backupDir, 'eras', era));
    }

    // Create UI subdirectories
    for (const uiDir of config.directories.ui) {
      dirsToCreate.push(path.join(config.outputDir, 'ui', uiDir));
      dirsToCreate.push(path.join(config.backupDir, 'ui', uiDir));
    }

    for (const dir of dirsToCreate) {
      try {
        await fs.mkdir(dir, { recursive: true });
        this.logSuccess(`Created ${dir}`);
      } catch (error) {
        if (error.code !== 'EEXIST') {
          this.logError(`Failed to create ${dir}: ${error.message}`);
        }
      }
    }
  }

  async scanImages() {
    this.logStep('🔍', 'Scanning for images...');

    const imageFiles = [];

    async function scanDirectory(dir, relativePath = '') {
      try {
        const files = await fs.readdir(dir);

        for (const file of files) {
          const fullPath = path.join(dir, file);
          const stats = await fs.stat(fullPath);

          if (stats.isDirectory()) {
            await scanDirectory(fullPath, path.join(relativePath, file));
          } else {
            const ext = path.extname(file).toLowerCase();
            if (config.supportedFormats.includes(ext)) {
              imageFiles.push({
                fullPath,
                relativePath: path.join(relativePath, file),
                filename: file,
                extension: ext,
                size: stats.size,
                stats
              });
            }
          }
        }
      } catch (error) {
        // Directory might not exist, skip silently
      }
    }

    await scanDirectory(config.inputDir);

    this.logSuccess(`Found ${imageFiles.length} images to process`);
    return imageFiles;
  }

  async backupOriginal(imagePath, relativePath) {
    const backupPath = path.join(config.backupDir, relativePath);
    const backupDir = path.dirname(backupPath);

    try {
      await fs.mkdir(backupDir, { recursive: true });
      await fs.copyFile(imagePath, backupPath);
      return true;
    } catch (error) {
      this.logWarning(`Failed to backup ${relativePath}: ${error.message}`);
      return false;
    }
  }

  async optimizeWithSharp(inputPath, outputPath, format, options = {}) {
    try {
      const sharp = require('sharp');
      let pipeline = sharp(inputPath);

      // Apply format-specific optimizations
      switch (format) {
        case 'webp':
          pipeline = pipeline.webp({
            quality: options.quality || 85,
            effort: options.effort || 4
          });
          break;
        case 'avif':
          pipeline = pipeline.avif({
            quality: options.quality || 80,
            effort: options.effort || 4
          });
          break;
        case 'jpeg':
          pipeline = pipeline.jpeg({
            quality: options.quality || 90,
            progressive: options.progressive || true
          });
          break;
        case 'png':
          pipeline = pipeline.png({
            compressionLevel: options.compressionLevel || 8
          });
          break;
      }

      await pipeline.toFile(outputPath);
      return true;
    } catch (error) {
      throw new Error(`Sharp optimization failed: ${error.message}`);
    }
  }

  async generateResponsiveVariants(inputPath, outputBasePath, format) {
    const variants = [];

    for (const width of config.responsiveSizes) {
      try {
        const variantPath = outputBasePath.replace(
          `.${format}`,
          `_${width}w.${format}`
        );

        const sharp = require('sharp');
        await sharp(inputPath)
          .resize(width, null, { withoutEnlargement: true })
          .toFormat(format, config.outputFormats[format] || {})
          .toFile(variantPath);

        const stats = await fs.stat(variantPath);
        variants.push({
          width,
          path: variantPath,
          size: stats.size
        });

      } catch (error) {
        this.logWarning(`Failed to create ${width}w variant: ${error.message}`);
      }
    }

    return variants;
  }

  async optimizeImage(imageInfo) {
    const { fullPath, relativePath, extension, size } = imageInfo;
    
    this.logInfo(`Processing ${relativePath}...`);

    try {
      // Backup original
      await this.backupOriginal(fullPath, relativePath);

      const baseName = path.basename(relativePath, extension);
      const dirName = path.dirname(relativePath);
      const outputDir = path.join(config.outputDir, dirName);

      await fs.mkdir(outputDir, { recursive: true });

      let totalSaved = 0;
      const optimizedFiles = [];

      // Generate optimized versions in different formats
      for (const [format, options] of Object.entries(config.outputFormats)) {
        if (extension.slice(1) === format) continue; // Skip same format for now

        const outputPath = path.join(outputDir, `${baseName}.${format}`);

        try {
          await this.optimizeWithSharp(fullPath, outputPath, format, options);
          const optimizedStats = await fs.stat(outputPath);
          
          optimizedFiles.push({
            format,
            path: outputPath,
            size: optimizedStats.size,
            savings: size - optimizedStats.size
          });

          totalSaved += size - optimizedStats.size;

          // Generate responsive variants for web formats
          if (['webp', 'avif', 'jpeg'].includes(format)) {
            const variants = await this.generateResponsiveVariants(
              fullPath, 
              outputPath, 
              format
            );
            optimizedFiles.push(...variants.map(v => ({
              format: `${format}-${v.width}w`,
              path: v.path,
              size: v.size,
              savings: 0 // Already accounted for in main file
            })));
          }

        } catch (error) {
          this.logWarning(`Failed to optimize ${relativePath} to ${format}: ${error.message}`);
        }
      }

      // Optimize original format
      const originalOutputPath = path.join(outputDir, `${baseName}_optimized${extension}`);
      try {
        const originalFormat = extension.slice(1);
        if (config.outputFormats[originalFormat]) {
          await this.optimizeWithSharp(
            fullPath, 
            originalOutputPath, 
            originalFormat, 
            config.outputFormats[originalFormat]
          );

          const optimizedStats = await fs.stat(originalOutputPath);
          const savings = size - optimizedStats.size;
          
          optimizedFiles.push({
            format: `${originalFormat}-optimized`,
            path: originalOutputPath,
            size: optimizedStats.size,
            savings
          });

          totalSaved += savings;
        }
      } catch (error) {
        this.logWarning(`Failed to optimize original format for ${relativePath}: ${error.message}`);
      }

      this.processedFiles++;
      this.savedBytes += totalSaved;
      this.imageStats.original.count++;
      this.imageStats.original.size += size;
      this.imageStats.optimized.count += optimizedFiles.length;
      this.imageStats.optimized.size += optimizedFiles.reduce((acc, f) => acc + f.size, 0);

      const savingsPercent = totalSaved > 0 ? ((totalSaved / size) * 100).toFixed(1) : '0';
      this.logSuccess(`${relativePath} → ${optimizedFiles.length} variants (${savingsPercent}% savings)`);

      return {
        original: imageInfo,
        optimized: optimizedFiles,
        totalSavings: totalSaved
      };

    } catch (error) {
      this.logError(`Failed to process ${relativePath}: ${error.message}`);
      return null;
    }
  }

  async installMissingDependencies() {
    this.logStep('📦', 'Installing image optimization dependencies...');

    const requiredPackages = ['sharp', 'imagemin', 'imagemin-webp', 'imagemin-avif'];
    
    try {
      this.logInfo('Installing Sharp and ImageMin packages...');
      await this.runCommand('npm', ['install', '--save-dev', ...requiredPackages]);
      this.logSuccess('Dependencies installed successfully');
      return true;
    } catch (error) {
      this.logError(`Failed to install dependencies: ${error.message}`);
      this.logInfo('Please install manually: npm install --save-dev sharp imagemin imagemin-webp imagemin-avif');
      return false;
    }
  }

  async generateOptimizationReport() {
    this.logStep('📊', 'Generating optimization report...');

    const endTime = Date.now();
    const processingTime = ((endTime - this.startTime) / 1000).toFixed(2);

    const report = {
      timestamp: new Date().toISOString(),
      processingTime: `${processingTime}s`,
      summary: {
        filesProcessed: this.processedFiles,
        totalSavings: this.formatBytes(this.savedBytes),
        averageSavings: this.processedFiles > 0 ? 
          this.formatBytes(this.savedBytes / this.processedFiles) : '0 Bytes'
      },
      statistics: {
        original: {
          count: this.imageStats.original.count,
          totalSize: this.formatBytes(this.imageStats.original.size),
          averageSize: this.imageStats.original.count > 0 ?
            this.formatBytes(this.imageStats.original.size / this.imageStats.original.count) : '0 Bytes'
        },
        optimized: {
          count: this.imageStats.optimized.count,
          totalSize: this.formatBytes(this.imageStats.optimized.size),
          averageSize: this.imageStats.optimized.count > 0 ?
            this.formatBytes(this.imageStats.optimized.size / this.imageStats.optimized.count) : '0 Bytes'
        }
      },
      formats: Object.keys(config.outputFormats),
      responsiveSizes: config.responsiveSizes,
      errors: this.errors,
      warnings: this.warnings
    };

    try {
      const reportPath = path.join(config.outputDir, 'optimization-report.json');
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      this.logSuccess(`Report saved to ${reportPath}`);
    } catch (error) {
      this.logWarning('Could not save optimization report');
    }

    return report;
  }

  async run() {
    console.log(`
${colors.magenta}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                  🎬 ANIME HISTORY WEBSITE                    ║
║                    Image Optimization                         ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
    `);

    try {
      // Step 1: Check dependencies
      const depsAvailable = await this.checkDependencies();
      if (!depsAvailable) {
        const shouldInstall = process.argv.includes('--install') || process.argv.includes('-i');
        if (shouldInstall) {
          const installed = await this.installMissingDependencies();
          if (!installed) {
            throw new Error('Required dependencies not available');
          }
        } else {
          this.logWarning('Some dependencies missing. Run with --install to auto-install');
        }
      }

      // Step 2: Create directories
      await this.createDirectories();

      // Step 3: Scan for images
      const images = await this.scanImages();
      if (images.length === 0) {
        this.logWarning('No images found to optimize');
        return;
      }

      // Step 4: Process images
      this.logStep('🎨', `Processing ${images.length} images...`);
      
      const results = [];
      for (const image of images) {
        const result = await this.optimizeImage(image);
        if (result) {
          results.push(result);
        }
      }

      // Step 5: Generate report
      const report = await this.generateOptimizationReport();

      // Final summary
      console.log(`
${colors.green}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                  ✅ OPTIMIZATION COMPLETE                   ║
║                                                               ║
║  Files Processed: ${String(this.processedFiles).padEnd(15)} Time: ${report.processingTime.padEnd(15)}      ║
║  Total Savings: ${report.summary.totalSavings.padEnd(17)} Errors: ${String(this.errors.length).padEnd(13)}      ║
║  Formats Generated: WebP, AVIF, JPEG, PNG                   ║
║  Responsive Sizes: ${config.responsiveSizes.join(', ')}px                      ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
      `);

      this.log('💡 Next steps:', 'blue');
      this.log(`   • Optimized images available in ${config.outputDir}`, 'blue');
      this.log(`   • Original images backed up in ${config.backupDir}`, 'blue');
      this.log('   • Update your Next.js Image components to use optimized versions', 'blue');
      this.log('   • Consider using responsive image sets for better performance', 'blue');

      if (this.errors.length > 0) {
        this.log(`⚠️  ${this.errors.length} errors occurred during processing`, 'yellow');
      }

    } catch (error) {
      this.logError(`Image optimization failed: ${error.message}`);
      console.log(`
${colors.red}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                  ❌ OPTIMIZATION FAILED                      ║
║                                                               ║
║  Check the error messages above for details                  ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
      `);
      process.exit(1);
    }
  }
}

// Handle CLI arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.cyan}Anime History Website - Image Optimization Script${colors.reset}

Usage: node scripts/optimize-images.js [options]

Options:
  --help, -h        Show this help message
  --install, -i     Auto-install missing dependencies
  --backup, -b      Create backups before optimization (default)
  --no-backup       Skip creating backups
  --quality, -q     Set quality level (1-100, default: 85 for WebP, 80 for AVIF)
  --sizes, -s       Custom responsive sizes (comma-separated)

Environment Variables:
  IMAGE_QUALITY     Override default quality settings
  OUTPUT_DIR        Override output directory

Examples:
  node scripts/optimize-images.js
  node scripts/optimize-images.js --install
  node scripts/optimize-images.js --quality 90
  node scripts/optimize-images.js --sizes 320,640,1024,1920
  npm run optimize:images

Supported Formats:
  Input:  JPEG, PNG, WebP, AVIF
  Output: WebP, AVIF, JPEG (optimized), PNG (optimized)

Features:
  • Multi-format conversion (WebP, AVIF)
  • Responsive image generation
  • Lossless PNG optimization
  • Progressive JPEG encoding
  • Automatic backup creation
  • Detailed optimization reports
  `);
  process.exit(0);
}

// Parse custom quality
const qualityIndex = args.findIndex(arg => arg === '--quality' || arg === '-q');
if (qualityIndex !== -1 && args[qualityIndex + 1]) {
  const quality = parseInt(args[qualityIndex + 1]);
  if (quality >= 1 && quality <= 100) {
    config.outputFormats.webp.quality = quality;
    config.outputFormats.avif.quality = Math.max(1, quality - 5); // AVIF typically 5% lower
    config.outputFormats.jpeg.quality = quality;
  }
}

// Parse custom sizes
const sizesIndex = args.findIndex(arg => arg === '--sizes' || arg === '-s');
if (sizesIndex !== -1 && args[sizesIndex + 1]) {
  const sizes = args[sizesIndex + 1].split(',').map(s => parseInt(s.trim())).filter(s => !isNaN(s));
  if (sizes.length > 0) {
    config.responsiveSizes = sizes.sort((a, b) => a - b);
  }
}

// Environment variable overrides
if (process.env.IMAGE_QUALITY) {
  const quality = parseInt(process.env.IMAGE_QUALITY);
  if (quality >= 1 && quality <= 100) {
    config.outputFormats.webp.quality = quality;
    config.outputFormats.avif.quality = Math.max(1, quality - 5);
    config.outputFormats.jpeg.quality = quality;
  }
}

if (process.env.OUTPUT_DIR) {
  config.outputDir = process.env.OUTPUT_DIR;
}

// Run the optimizer
const optimizer = new AnimeImageOptimizer();
optimizer.run().catch((error) => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});