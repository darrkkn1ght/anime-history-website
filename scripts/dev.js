#!/usr/bin/env node

/**
 * Enhanced Development Script for Anime History Website
 * Provides optimized development server with hot reload and debugging
 */

const { spawn, exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const http = require('http');

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
  defaultPort: 3000,
  srcDir: 'src',
  publicDir: 'public',
  packageJsonPath: 'package.json',
  nextConfigPath: 'next.config.js',
  tailwindConfigPath: 'tailwind.config.js',
  tsconfigPath: 'tsconfig.json'
};

class AnimeHistoryDevServer {
  constructor() {
    this.startTime = Date.now();
    this.devServer = null;
    this.port = config.defaultPort;
    this.watchMode = true;
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
  }

  logWarning(message) {
    this.log(`⚠️  ${message}`, 'yellow');
  }

  logInfo(message) {
    this.log(`ℹ️  ${message}`, 'blue');
  }

  async checkPort(port) {
    return new Promise((resolve) => {
      const server = http.createServer();
      
      server.listen(port, () => {
        server.close(() => resolve(true));
      });
      
      server.on('error', () => resolve(false));
    });
  }

  async findAvailablePort() {
    this.logStep('🔍', 'Checking port availability...');
    
    let port = config.defaultPort;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
      const isAvailable = await this.checkPort(port);
      
      if (isAvailable) {
        this.port = port;
        this.logSuccess(`Port ${port} is available`);
        return port;
      } else {
        this.logWarning(`Port ${port} is busy, trying ${port + 1}...`);
        port++;
        attempts++;
      }
    }

    this.logError('Could not find an available port');
    throw new Error('No available ports found');
  }

  async checkDevelopmentPrerequisites() {
    this.logStep('🔍', 'Checking development prerequisites...');

    const checks = [
      { file: config.packageJsonPath, name: 'package.json' },
      { file: config.srcDir, name: 'src directory' },
      { file: config.publicDir, name: 'public directory' },
      { file: 'node_modules', name: 'node_modules' }
    ];

    let allPassed = true;

    for (const check of checks) {
      try {
        await fs.access(check.file);
        this.logSuccess(`${check.name} ✓`);
      } catch (error) {
        this.logError(`${check.name} not found`);
        allPassed = false;
      }
    }

    // Check optional config files
    const optionalChecks = [
      { file: config.nextConfigPath, name: 'Next.js config' },
      { file: config.tailwindConfigPath, name: 'Tailwind config' },
      { file: config.tsconfigPath, name: 'TypeScript config' }
    ];

    for (const check of optionalChecks) {
      try {
        await fs.access(check.file);
        this.logSuccess(`${check.name} ✓`);
      } catch (error) {
        this.logWarning(`${check.name} not found - using defaults`);
      }
    }

    // Check Node.js version
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    
    if (majorVersion < 18) {
      this.logError(`Node.js ${majorVersion} detected. Minimum required: Node.js 18`);
      allPassed = false;
    } else {
      this.logSuccess(`Node.js ${nodeVersion} ✓`);
    }

    return allPassed;
  }

  async clearNextCache() {
    this.logStep('🧹', 'Clearing Next.js cache...');
    
    try {
      await fs.rm('.next', { recursive: true, force: true });
      this.logSuccess('Next.js cache cleared');
    } catch (error) {
      this.logInfo('No cache to clear');
    }
  }

  async validateProjectStructure() {
    this.logStep('🏗️', 'Validating project structure...');

    const criticalDirs = [
      'src/app',
      'src/components',
      'src/styles',
      'public/images'
    ];

    let structureValid = true;

    for (const dir of criticalDirs) {
      try {
        const stats = await fs.stat(dir);
        if (stats.isDirectory()) {
          this.logSuccess(`${dir}/ ✓`);
        }
      } catch (error) {
        this.logWarning(`${dir}/ not found - may cause issues`);
        structureValid = false;
      }
    }

    // Check for essential files
    const essentialFiles = [
      'src/app/layout.tsx',
      'src/app/page.tsx',
      'src/app/globals.css'
    ];

    for (const file of essentialFiles) {
      try {
        await fs.access(file);
        this.logSuccess(`${file} ✓`);
      } catch (error) {
        this.logWarning(`${file} not found`);
      }
    }

    return structureValid;
  }

  async startDevelopmentServer() {
    this.logStep('🚀', 'Starting Next.js development server...');

    return new Promise((resolve, reject) => {
      const env = {
        ...process.env,
        NODE_ENV: 'development',
        PORT: this.port.toString(),
        NEXT_TELEMETRY_DISABLED: '1' // Disable telemetry for faster startup
      };

      this.devServer = spawn('npx', ['next', 'dev', '-p', this.port.toString()], {
        stdio: ['inherit', 'pipe', 'pipe'],
        shell: true,
        env
      });

      let serverReady = false;
      let output = '';

      this.devServer.stdout.on('data', (data) => {
        const chunk = data.toString();
        output += chunk;
        
        // Check for server ready indicators
        if (chunk.includes('Ready in') || chunk.includes('Local:')) {
          if (!serverReady) {
            serverReady = true;
            this.logSuccess('Development server started successfully');
            resolve(true);
          }
        }
        
        // Forward output with custom formatting
        const lines = chunk.split('\n').filter(line => line.trim());
        lines.forEach(line => {
          if (line.includes('Ready in')) {
            this.log(`🎉 ${line}`, 'green');
          } else if (line.includes('Local:')) {
            this.log(`🌐 ${line}`, 'cyan');
          } else if (line.includes('error') || line.includes('Error')) {
            this.log(`🚨 ${line}`, 'red');
          } else if (line.includes('warn') || line.includes('Warning')) {
            this.log(`⚠️  ${line}`, 'yellow');
          } else if (line.trim()) {
            this.log(`📝 ${line}`, 'reset');
          }
        });
      });

      this.devServer.stderr.on('data', (data) => {
        const chunk = data.toString();
        
        // Filter out common non-error messages
        if (!chunk.includes('Attention:') && !chunk.includes('npm notice')) {
          const lines = chunk.split('\n').filter(line => line.trim());
          lines.forEach(line => {
            if (line.trim()) {
              this.log(`🚨 ${line}`, 'red');
            }
          });
        }
      });

      this.devServer.on('error', (error) => {
        this.logError(`Failed to start development server: ${error.message}`);
        reject(error);
      });

      this.devServer.on('close', (code) => {
        if (code !== 0 && code !== null) {
          this.logError(`Development server exited with code ${code}`);
          reject(new Error(`Server process exited with code ${code}`));
        }
      });

      // Timeout for server startup
      setTimeout(() => {
        if (!serverReady) {
          this.logWarning('Server is taking longer than expected to start...');
        }
      }, 10000);
    });
  }

  displayDevServerInfo() {
    console.log(`
${colors.green}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                    🎬 DEVELOPMENT SERVER                     ║
║                     Anime History Website                     ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}

${colors.cyan}🌐 Local:${colors.reset}            http://localhost:${this.port}
${colors.cyan}🔗 Network:${colors.reset}          http://0.0.0.0:${this.port}

${colors.yellow}Development Features:${colors.reset}
  • Hot Module Replacement (HMR) ✓
  • TypeScript Support ✓
  • Tailwind CSS Hot Reload ✓
  • Error Overlay ✓
  • Fast Refresh ✓

${colors.blue}Useful Commands:${colors.reset}
  • Press ${colors.bright}Ctrl+C${colors.reset} to stop the server
  • Press ${colors.bright}r${colors.reset} + Enter to restart
  • Press ${colors.bright}o${colors.reset} + Enter to open in browser

${colors.magenta}File Watching:${colors.reset}
  • src/ directory changes trigger hot reload
  • public/ directory changes require manual refresh
  • Config changes require server restart

${colors.green}Happy coding! 🚀${colors.reset}
    `);
  }

  setupProcessHandlers() {
    // Handle Ctrl+C
    process.on('SIGINT', () => {
      this.log('\n🛑 Shutting down development server...', 'yellow');
      if (this.devServer) {
        this.devServer.kill('SIGTERM');
      }
      process.exit(0);
    });

    // Handle terminal resize
    process.on('SIGWINCH', () => {
      if (this.devServer && this.devServer.stdout) {
        this.devServer.stdout.columns = process.stdout.columns;
        this.devServer.stdout.rows = process.stdout.rows;
      }
    });

    // Handle unexpected errors
    process.on('uncaughtException', (error) => {
      this.logError(`Uncaught exception: ${error.message}`);
      process.exit(1);
    });

    process.on('unhandledRejection', (reason, promise) => {
      this.logError(`Unhandled rejection at ${promise}: ${reason}`);
      process.exit(1);
    });
  }

  async run() {
    console.log(`
${colors.magenta}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                  🎬 ANIME HISTORY WEBSITE                    ║
║                   Development Environment                     ║
╚═══════════════════════════════════════════════════════════════╝
${colors.reset}
    `);

    try {
      // Setup process handlers
      this.setupProcessHandlers();

      // Step 1: Check prerequisites
      const prereqsPassed = await this.checkDevelopmentPrerequisites();
      if (!prereqsPassed) {
        this.logError('Prerequisites check failed. Please install missing dependencies.');
        process.exit(1);
      }

      // Step 2: Find available port
      await this.findAvailablePort();

      // Step 3: Clear cache if requested
      if (process.argv.includes('--fresh') || process.argv.includes('-f')) {
        await this.clearNextCache();
      }

      // Step 4: Validate project structure
      await this.validateProjectStructure();

      // Step 5: Start development server
      await this.startDevelopmentServer();

      // Step 6: Display server info
      this.displayDevServerInfo();

      // Keep the process running
      process.stdin.setRawMode(true);
      process.stdin.resume();
      process.stdin.on('data', (key) => {
        const keyStr = key.toString();
        
        if (keyStr === 'r\n' || keyStr === 'r\r') {
          this.log('🔄 Restarting development server...', 'yellow');
          if (this.devServer) {
            this.devServer.kill('SIGTERM');
            setTimeout(() => {
              this.startDevelopmentServer();
            }, 1000);
          }
        } else if (keyStr === 'o\n' || keyStr === 'o\r') {
          const url = `http://localhost:${this.port}`;
          this.log(`🌐 Opening ${url} in browser...`, 'blue');
          exec(`open "${url}" || xdg-open "${url}" || start "${url}"`);
        } else if (keyStr === '\u0003') { // Ctrl+C
          process.exit(0);
        }
      });

    } catch (error) {
      this.logError(`Development server startup failed: ${error.message}`);
      console.log(`
${colors.red}${colors.bright}
╔═══════════════════════════════════════════════════════════════╗
║                   ❌ STARTUP FAILED                          ║
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
${colors.cyan}Anime History Website - Development Script${colors.reset}

Usage: node scripts/dev.js [options]

Options:
  --help, -h     Show this help message
  --fresh, -f    Clear Next.js cache before starting
  --port, -p     Specify port number (default: 3000)
  --verbose, -v  Enable verbose output

Environment Variables:
  PORT           Override default port
  NODE_ENV       Set to 'development' (automatically set)

Examples:
  node scripts/dev.js
  node scripts/dev.js --fresh
  node scripts/dev.js --port 3001
  PORT=3001 node scripts/dev.js
  npm run dev
  
Interactive Commands (while running):
  r + Enter      Restart the server
  o + Enter      Open in browser
  Ctrl+C         Stop the server
  `);
  process.exit(0);
}

// Parse port argument
const portIndex = args.findIndex(arg => arg === '--port' || arg === '-p');
if (portIndex !== -1 && args[portIndex + 1]) {
  config.defaultPort = parseInt(args[portIndex + 1]) || config.defaultPort;
}

// Override with environment variable
if (process.env.PORT) {
  config.defaultPort = parseInt(process.env.PORT) || config.defaultPort;
}

// Run the development server
const devServer = new AnimeHistoryDevServer();
devServer.run().catch((error) => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});