import chalk from 'chalk';

export function getUsage(): string {
  const header = chalk.white.bold;
  const command = chalk.blue.bold;
  const option = chalk.gray.italic;
  const description = chalk.white;
  const normal = chalk.white;

  return `
${header('NAME')}
    ${command('chain-registry')} - command line interface for interacting with the Chain Registry

${header('SYNOPSIS')}
    ${command('chain-registry')} ${option('[command]')} ${option('[options]')}

${header('DESCRIPTION')}
    ${description('The chain-registry CLI is designed to interact with the Chain Registry, allowing users to fetch information, validate data, and generate TypeScript interfaces directly from JSON schemas.')}

${header('COMMANDS')}
    ${command('info')}
        ${normal('Fetch and display information about entities in the chain registry.')}
        ${option('--registryDir <path>')}
            ${normal('Specifies the path to the chain registry directory.')}
    ${command('validate')}
        ${normal('Validate the data in the registry against the provided JSON schemas.')}
        ${option('--registryDir <path>')}
            ${normal('Specifies the path to the chain registry directory.')}
        ${option('--useStrict')}
            ${normal('Enables strict mode in the schema validation process.')}
        ${option('--allErrors')}
            ${normal('Return all errors found during validation.')}
        ${option('--useDefaults')}
            ${normal('Applies default values during validation.')}
    ${command('codegen')}
        ${normal('Generate TypeScript interfaces for the registry.')}
        ${option('--outputDir <path>')}
            ${normal('Specifies the directory to output the generated TypeScript files.')}
        ${option('--registryDir <path>')}
            ${normal('Specifies the path to the chain registry directory.')}
        ${option('--strictTypeSafety')}
            ${normal('Enables strict TypeScript type definitions.')}
        ${option('--camelCase')}
            ${normal('Converts JSON schema properties to camelCase in the generated TypeScript files.')}

${header('EXAMPLES')}
    ${command('chain-registry info --registryDir /path/to/registry')}
        ${normal('Displays information about the chains in the specified registry directory.')}
    ${command('chain-registry validate --registryDir /path/to/registry --useStrict')}
        ${normal('Validates the registry data located in the specified directory with strict schema checks.')}
    ${command('chain-registry codegen --outputDir ./src --registryDir /path/to/registry')}
        ${normal('Generates TypeScript interfaces in the ./src directory based on the schemas in the specified registry directory.')}

${header('SEE ALSO')}
    ${command('@chain-registry/workflows,')}
    ${command('chain-registry')}

${header('AUTHOR')}
    ${normal('Written by Dan Lynch.')}

${header('REPORTING BUGS')}
    ${normal('Report bugs at')} ${chalk.underline('https://github.com/hyperweb-io/chain-registry/issues')}

${header('COPYRIGHT')}
    ${normal('Copyright 2024 Interweb, Inc. Licensed under MIT.')}
`.trim();
}
