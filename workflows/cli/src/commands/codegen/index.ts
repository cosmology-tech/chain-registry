import { Registry, SchemaTypeGenerator } from '@chain-registry/workflows';
import { existsSync } from 'fs';
import { CLIOptions, Inquirerer } from 'inquirerer';
import { ParsedArgs } from 'minimist';

import { toCamelCase } from '../../utils';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {

  const {
    registryDir,
    outputDir,
    strictTypeSafety,
    camelCase
  } = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:'
    },
    {
      type: 'text',
      name: 'outputDir',
      message: 'provide a outputDir:'
    },
    {
      type: 'confirm',
      name: 'strictTypeSafety',
      default: true,
      useDefault: true
    },
    {
      type: 'confirm',
      name: 'camelCase',
      default: true,
      useDefault: false
    }
  ]);

  if (!existsSync(registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  const registry: Registry = new Registry(registryDir);
  const generator = new SchemaTypeGenerator({
    outputDir,
    registry,
    schemaTSOptions: {
      strictTypeSafety,
      camelCase,
      camelCaseFn: toCamelCase
    }
  });

  generator.generateTypes();

  return argv;
};