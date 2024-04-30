import chalk from 'chalk';

import { readAndParsePackageJson } from "./package";

// Function to display the version information
export function displayVersion(): void {
  const pkg = readAndParsePackageJson();
  console.log(chalk.green(`Name: ${pkg.name}`));
  console.log(chalk.blue(`Version: ${pkg.version}`));
}

export function getVersion(): string {
  const pkg = readAndParsePackageJson();
  return pkg.version;
}

// MARKED AS NOT DRY
export function toCamelCase(key: string) {
  return key
      // First, remove all leading non-alphabet characters except $
      .replace(/^[^a-zA-Z$]+/, '')
      // Convert what follows a separator into upper case
      .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
      // Ensure the first character of the result is always lowercase
      .replace(/^./, (c) => c.toLowerCase());
}
