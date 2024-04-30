import { CLIOptions, Inquirerer, Question } from 'inquirerer'
import { ParsedArgs } from 'minimist';

import { getUsage } from '../help';
import { commands as codegen } from './codegen';
import { commands as info } from './info';
import { commands as validate } from './validate';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {
  let command;

  if (argv._.length > 0) {
    command = argv._.shift();
  }

  if (command) {
    argv.command = command;
  }

  if (command === 'help') {
    const usage = getUsage();
    console.log(usage);
    process.exit(0);
  }

  const questions: Question[] = [
    {
      type: 'autocomplete',
      name: 'command',
      message: 'choose a command',
      options: [
        'info',
        'validate',
        'codegen'
      ]
    }
  ];

  ({ command } = await prompter.prompt(argv, questions));

  // recursive... 
  delete argv.command;

  // @ts-ignore
  prompter.exit = () => {};

  switch (command) {
    case 'info':
        argv = await info(argv, prompter, _options);
        break;
    case 'validate':
        argv = await validate(argv, prompter, _options);
        break;

    case 'codegen':
        argv = await codegen(argv, prompter, _options);
        break;

    default:
      console.log(`No recognized command provided or no command given: ${command}`);
      break;
  }

  return argv;

};