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
