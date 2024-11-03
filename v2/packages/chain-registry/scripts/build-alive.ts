// strip out status: killed chains from build
// To resolve the issue: https://github.com/cosmology-tech/chain-registry/issues/161
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

const srcDir = path.join(__dirname, '../src');
const srcTempDir = path.join(__dirname, '../tempDir')
const outDir = path.join(__dirname, '../dist');

// Create the target directory if it does not exist
if (!fs.existsSync(srcTempDir)) {
  fs.mkdirSync(srcTempDir, { recursive: true });
}
// Recursive copy function
function copyFiles(src: string, dest: string) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // If it's a folder, recursively call itself
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath);
      }
      copyFiles(srcPath, destPath);
    } else {
      // If it's a file, copy the file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Start copying
copyFiles(srcDir, srcTempDir);
console.log('All files and folders copied successfully!');

// Create the dist directory if it does not exist
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Check if the chains.ts file in a module directory contains "status: 'killed'"
function isModuleKilled(modulePath: string): boolean {
  const chainFilePath = path.join(modulePath, 'chain.ts');
  if (fs.existsSync(chainFilePath)) {
    const content = fs.readFileSync(chainFilePath, 'utf-8');
    return content.includes(`status: 'killed'`);
  }
  return false;
}


// Update the chains.ts, asset-list.ts, ibc-data.ts files in the specified category directory
function updateCategoryFiles(categoryPath: string): void {
  const modules = fs.readdirSync(categoryPath).filter(module => fs.statSync(path.join(categoryPath, module)).isDirectory());
  // const killedModules = modules.filter(module => isModuleKilled(path.join(categoryPath, module)));
  const killedModules = [] as string[]
  modules.forEach(module => {
    if (isModuleKilled(path.join(categoryPath, module))) {
      killedModules.push(module)
      fs.rmSync(path.join(categoryPath, module), { recursive: true });
    }
  })

  // Update the contents of chains.ts
  const chainsFilePath = path.join(categoryPath, 'chains.ts');
  if (fs.existsSync(chainsFilePath)) {
    let content = fs.readFileSync(chainsFilePath, 'utf-8');
    killedModules.forEach(module => {
        // Remove imports for modules that do not meet the conditions
        const regex = new RegExp(`import \\* as _${module} from '\\.${path.sep}${module}';[\\s\\S]*?\\n`);
        content = content.replace(regex, ''); // Remove import statement
        // content = content.replace(new RegExp(`_\\${module}\\.chain(\\s*,?\\s*)`, 'g'), ''); // Remove chains array reference
        const regex2 = new RegExp(`\\s*_(${module}).chain,?\\s*`, 'g');
        content = content.replace(regex2, '');
    });
    fs.writeFileSync(chainsFilePath, content, 'utf-8');
  }

  // Update the contents of asset-list.ts
  const assetListFilePath = path.join(categoryPath, 'asset-lists.ts');
  if (fs.existsSync(assetListFilePath)) {
    let content = fs.readFileSync(assetListFilePath, 'utf-8');
    killedModules.forEach(module => {
      // Remove imports for modules that do not meet the conditions
      const regex = new RegExp(`import \\* as _${module} from '\\.${path.sep}${module}';[\\s\\S]*?\\n`);
      content = content.replace(regex, ''); // Remove import statement
      // content = content.replace(new RegExp(`_\\${module}\\.assetList(\\s*,?\\s*)`, 'g'), ''); // Remove assetList array reference
      const regex2 = new RegExp(`\\s*_(${module}).assetList,?\\s*`, 'g');
      content = content.replace(regex2, '');
    });
    fs.writeFileSync(assetListFilePath, content, 'utf-8');
  }

  // Update the contents of ibc-data.ts
  const ibcDataFilePath = path.join(categoryPath, 'ibc-data.ts');
  if (fs.existsSync(ibcDataFilePath)) {
    let content = fs.readFileSync(ibcDataFilePath, 'utf-8');
    killedModules.forEach(module => {
      // Remove imports for modules that do not meet the conditions
      const regex = new RegExp(`import \\* as _${module} from '\\.${path.sep}${module}';[\\s\\S]*?\\n`);
      content = content.replace(regex, ''); // Remove import statement
      // content = content.replace(new RegExp(`\\.{3}_\\${module}\\.ibcData(\\s*,?\\s*)`, 'g'), ''); // Remove ibcData array reference
      const regex2 = new RegExp(`\\s*..._(${module}).ibcData,?\\s*`, 'g');
      content = content.replace(regex2, '');
    });
    fs.writeFileSync(ibcDataFilePath, content, 'utf-8');
  }
}

// Get all files to be compiled
function getFilesToCompile(dir: string): string[] {
    const filesToCompile: string[] = [];

    // Add independent .ts files in the src directory
    const rootFiles = fs.readdirSync(dir)
      .filter(file => file.endsWith('.ts'))
      .map(file => path.join(dir, file));
    filesToCompile.push(...rootFiles);

    // Traverse each category directory in the src directory
    const categories = fs.readdirSync(dir).filter(category => fs.statSync(path.join(dir, category)).isDirectory());
    categories.forEach(category => {
      const categoryPath = path.join(dir, category);

      // Update files in the category directory
      updateCategoryFiles(categoryPath);

      // Get all .ts files in this category directory
      const tsFiles = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.ts'))
        .map(file => path.join(categoryPath, file));
      filesToCompile.push(...tsFiles);
    });

    return filesToCompile;
}

// Collect all files to be compiled
const filesToCompile = getFilesToCompile(srcTempDir);
// If there are files to compile, run the tsc command and specify the output directory and generate declaration files
if (filesToCompile.length > 0) {
  // npm run clean; tsc; tsc -p tsconfig.esm.json; npm run copy
  // const command = `tsc --outDir ${outDir} --declaration ${filesToCompile.join(' ')}`;
  const command = `npm run clean;tsc --outDir ${outDir} --declaration ${filesToCompile.join(' ')};tsc --outDir ${outDir}/esm --declaration false ${filesToCompile.join(' ')}`
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`Compilation successful! Output files and .d.ts files are in the 'dist' directory.`);
    fs.rmSync(srcTempDir, { recursive: true })
  });
} else {
  console.log("No eligible modules need to be compiled.");
}

