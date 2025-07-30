#!/usr/bin/env node

/**
 * Enhanced Build Script for Anime History Website
 * Handles production builds with optimization and validation
 */

const { spawn, exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

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
  outputDir: '.next',
  publicDir: 'public',
  srcDir: 'src',
  nodeModulesDir: 'node_modules',
  packageJsonPath: 'package.json',
  nextConfigPath: 'next.config.js'
};

class AnimeHistoryBuilder {
  constructor() {
    this.startTime = Date.now();
    this.errors = [];
    this.warnings = [];
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

  async checkPrerequisites() {
    this.logStep('🔍', 'Checking build prerequisites...');

    try {
      // Check if package.json exists
      await fs.access(config.packageJsonPath);
      this.logSuccess('package.json found');

      // Check if node_modules exists
      await fs.access(config.nodeModulesDir);
      this.logSuccess('node_modules directory found');

      // Check if src directory exists
      await fs.access(config.srcDir);
      this.logSuccess('src directory found');

      // Check if Next.js config exists
      try {
        await fs.access(config.nextConfigPath);
        this.logSuccess('next.config.js found');
      } catch (error) {
        this.logWarning('next.config.js not found - using defaults');
      }

      // Check Node.js version
      const nodeVersion = process.version;
      const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
      
      if (majorVersion < 18) {
        this.logError(`Node.js ${majorVersion} detected. Minimum required: Node.js 18`);
        return false;
      } else {
        this.logSuccess(`Node.js ${nodeVersion} ✓`);
      }

      return true;
    } catch (error) {
      this.logError(`Prerequisites check failed: ${error.message}`);
      return false;
    }
  }

  async cleanBuildDirectory() {
    this.logStep('🧹', 'Cleaning previous build...');
    
    try {
      await fs.access(config.outputDir);
      await fs.rm(config.outputDir, { recursive: true, force: true });
      this.logSuccess('Previous build cleaned');
    } catch (error) {
      // Directory doesn't exist, which is fine
      this.logSuccess('No previous build to clean');
    }
  }

  async validateAssets() {
    this.logStep('🖼️', 'Validating assets...');
    
    try {
      const publicStats = await fs.stat(config.publicDir);
      if (publicStats.isDirectory()) {
        this.logSuccess('Public directory structure validated');
      }

      // Check for critical assets
      const criticalAssets = [
        'public/images',
        'public/fonts',
        'src/styles',
        'src/components'
      ];

      for (const asset of criticalAssets) {
        try {
          await fs.access(asset);
          this.logSuccess(`${asset} ✓`);
        } catch (error) {
          this.logWarning(`${asset} not found - may affect build`);
        }
      }
    } catch (error) {
      this.logError(`Asset validation failed: ${error.message}`);
    }
  }

  async runTypeCheck() {
    this.logStep('📝', 'Running TypeScript type check...');
    
    return new Promise((resolve) => {
      const typeCheck = spawn('npx', ['tsc', '--noEmit'], {
        stdio: 'pipe',
        shell: true
      });

      let output = '';
      let errorOutput = '';

      typeCheck.stdout.on('data', (data) => {
        output += data.toString();
      });

      typeCheck.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });

      typeCheck.on('close', (code) => {
        if (code === 0) {
          this.logSuccess('TypeScript type check passed');
          resolve(true);
        } else {
          this.logError('TypeScript type check failed');
          if (errorOutput) {
            console.log(colors.red + errorOutput + colors.reset);
          }
          resolve(false);
        }
      });
    });
  }

  async runLinting() {
    this.logStep('🔍', 'Running ESLint check...');
    
    return new Promise((resolve) => {
      const linter = spawn('npx', ['eslint', 'src/', '--ext', '.ts,.tsx,.js,.jsx'], {
        stdio: 'pipe',
        shell: true
      });

      let output = '';
      let errorOutput = '';

      linter.stdout.on('data', (data) => {
        output += data.toString();
      });

      linter.stderr.on('data', (data) => {
        errorOutput += data.toString();
      });

      linter.on('close', (code) => {
        if (code === 0) {
          this.logSuccess('ESLint check passed');
          resolve(true);
        } else {
          this.logWarning('ESLint found issues (build will continue)');
          if (output) {
            console.log(colors.yellow + output + colors.reset);
          }
          resolve(true); // Continue build even with linting issues
        }
      });
    });
  }

  async runNextBuild() {
    this.logStep('🏗️', 'Running Next.js build...');
    
    return new Promise((resolve) => {
      const nextBuild = spawn('npx', ['next', 'build'], {
        stdio: 'inherit',
        shell: true,
        env: {
          ...process.env,
          NODE_ENV: 'production'
        }
      });

      nextBuild.on('close', (code) => {
        if (code === 0) {
          this.logSuccess('Next.js build completed successfully');
          resolve(true);
        } else {
          this.logError('Next.js build failed');
          resolve(false);
        }
      });
    });
  }

  async analyzeBundleSize() {
    this.logStep('📊', 'Analyzing bundle size...');
    
    try {
      const buildManifestPath = path.join(config.outputDir, 'build-manifest.json');
      await fs.access(buildManifestPath);
      
      const manifest = JSON.parse(await fs.readFile(buildManifestPath, 'utf-8'));
      
      this.logSuccess('Bundle analysis available in .next directory');
      this.log('💡 Run "npx @next/bundle-analyzer" for detailed analysis', 'blue');
      
    } catch (error) {
      this.logWarning('Bundle analysis not available');
    }
  }

  async generateBuildReport() {
    this.logStep('📋', 'Generating build report...');
    
    const endTime = Date.now();
    const buildTime = ((endTime - this.startTime) / 1000).toFixed(2);
    
    const report = {
      timestamp: new Date().toISOString(),
      buildTime: `${buildTime}s`,
      nodeVersion: process.version,
      errors: this.errors,
      warnings: this.warnings,
      success: this.errors.length === 0
    };

    try {
      await fs.writeFile('.next/build-report.json', JSON.stringify(report, null, 2));
      this.logSuccess('Build report saved to .next/build-report.json');
    } catch (error) {
      this.logWarning('Could not save build report');
    }

    return report;
  }

  async run() {
    console.log(`
${colors.magenta}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                  🎬 ANIME HISTORY WEBSITE                    ║
║                     Production Build                          ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
    `);

    try {
      // Step 1: Check prerequisites
      const prereqsPassed = await this.checkPrerequisites();
      if (!prereqsPassed) {
        process.exit(1);
      }

      // Step 2: Clean previous build
      await this.cleanBuildDirectory();

      // Step 3: Validate assets
      await this.validateAssets();

      // Step 4: Run type check
      const typeCheckPassed = await this.runTypeCheck();
      if (!typeCheckPassed) {
        this.logError('Build stopped due to TypeScript errors');
        process.exit(1);
      }

      // Step 5: Run linting
      await this.runLinting();

      // Step 6: Run Next.js build
      const buildPassed = await this.runNextBuild();
      if (!buildPassed) {
        process.exit(1);
      }

      // Step 7: Analyze bundle
      await this.analyzeBundleSize();

      // Step 8: Generate report
      const report = await this.generateBuildReport();

      // Final status
      console.log(`
${colors.green}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                     ✅ BUILD SUCCESSFUL                      ║
║                                                               ║
║  Build Time: ${report.buildTime.padEnd(20)} Errors: ${String(this.errors.length).padEnd(10)}     ║
║  Warnings: ${String(this.warnings.length).padEnd(22)} Node: ${process.version.padEnd(12)}    ║
║                                                               ║
║  🚀 Ready for deployment!                                    ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
      `);

      this.log('💡 Next steps:', 'blue');
      this.log('   • Run "npm start" to test production build locally', 'blue');
      this.log('   • Deploy .next directory to your hosting platform', 'blue');
      this.log('   • Check .next/build-report.json for detailed metrics', 'blue');

    } catch (error) {
      this.logError(`Build process failed: ${error.message}`);
      console.log(`
${colors.red}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                     ❌ BUILD FAILED                          ║
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
const builder = new AnimeHistoryBuilder();

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.cyan}Anime History Website - Build Script${colors.reset}

Usage: node scripts/build.js [options]

Options:
  --help, -h     Show this help message
  --verbose, -v  Enable verbose output

Environment Variables:
  NODE_ENV       Set to 'production' (automatically set)
  ANALYZE        Set to 'true' to run bundle analyzer

Examples:
  node scripts/build.js
  ANALYZE=true node scripts/build.js
  npm run build
  `);
  process.exit(0);
}

// Run the build
builder.run().catch((error) => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});