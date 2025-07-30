const fs = require('fs');
const path = require('path');

// Function to normalize file paths and resolve case sensitivity issues
function normalizePaths() {
  console.log('🔧 Fixing case sensitivity issues...');
  
  // Get the current working directory and normalize it
  const cwd = process.cwd();
  const normalizedCwd = path.resolve(cwd);
  
  console.log(`Current directory: ${cwd}`);
  console.log(`Normalized directory: ${normalizedCwd}`);
  
  // Check if there are any case sensitivity issues in the path
  if (cwd !== normalizedCwd) {
    console.log('⚠️  Case sensitivity issue detected in project path');
    console.log('💡 Consider moving the project to a path with consistent casing');
  }
  
  // Check for common problematic files
  const problematicFiles = [
    'src/app/favicon.ico',
    'public/favicon.ico'
  ];
  
  problematicFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ Found: ${file}`);
    } else {
      console.log(`❌ Missing: ${file}`);
    }
  });

  // Check for .next directory and clear it if it exists
  const nextDir = path.join(cwd, '.next');
  if (fs.existsSync(nextDir)) {
    console.log('🗑️  Removing .next directory to clear cached modules...');
    try {
      fs.rmSync(nextDir, { recursive: true, force: true });
      console.log('✅ .next directory removed');
    } catch (error) {
      console.log('❌ Failed to remove .next directory:', error.message);
    }
  }

  // Check for node_modules and suggest reinstall if needed
  const nodeModulesDir = path.join(cwd, 'node_modules');
  if (fs.existsSync(nodeModulesDir)) {
    console.log('📦 node_modules found');
    console.log('💡 If issues persist, try: npm ci');
  }

  console.log('✅ Path normalization complete');
  console.log('🚀 Next steps:');
  console.log('   1. Run: npm run dev:clean');
  console.log('   2. If issues persist: rm -rf node_modules && npm install');
}

// Run the normalization
normalizePaths(); 