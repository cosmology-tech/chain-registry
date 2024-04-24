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
      type: 'confirm',
      name: 'useDefaults',
      required: true,
      useDefault: true,
      default: true
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  const registry = new Registry(argv.registryDir)
  const {
    allErrors,
    useDefaults,
    useStrict
  } = argv;
  const validator = new SchemaValidator(registry, {
    allErrors,
    useDefaults,
    useStrict
  });

  validator.validateAllData(true);

  return argv;
};