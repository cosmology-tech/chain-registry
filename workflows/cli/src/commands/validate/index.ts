import { Registry, SchemaValidator } from '@chain-registry/workflows';
import { existsSync } from 'fs';
import { CLIOptions, Inquirerer } from 'inquirerer'
import { ParsedArgs } from 'minimist';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {

  argv = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:',
      required: true,
    },
    {
      type: 'confirm',
      name: 'useStrict',
      required: true,
      useDefault: true,
      default: false
    },
    {
      type: 'confirm',
      name: 'allErrors',
      required: true,
      useDefault: true,
      default: true
    },
    {
      type: 'text',
      name: 'draft',
      required: true,
      useDefault: true,
      default: '2019-09'
    },
    {
      type: 'confirm',
      name: 'useDefaults',
      required: true,
      useDefault: true,
      default: true
    },
    {
      type: 'text',
      name: 'logLevel',
      required: true,
      useDefault: true,
      default: 'info'
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  const registry = new Registry(argv.registryDir)
  
  const {
    draft,
    allErrors,
    useDefaults,
    useStrict,
    logLevel
  } = argv;

  const validator = new SchemaValidator(registry, {
    draft,
    allErrors,
    useDefaults,
    useStrict,
    logLevel
  });

  validator.validateAllData(true);

  return argv;
};