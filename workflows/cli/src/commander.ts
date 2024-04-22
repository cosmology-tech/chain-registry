import deepmerge from 'deepmerge';
import { Inquirerer } from 'inquirerer';
import minimist, { Opts, ParsedArgs } from 'minimist';
import { Readable, Writable } from 'stream';

import { getVersion } from './utils';

// Define the type for the command handler function
export type CommandHandler = (argv: ParsedArgs, prompter: Inquirerer, options: CLIOptions) => void;

export interface CLIOptions {
  noTty: boolean;
  input: Readable;
  output: Writable;
  minimistOpts: Opts;
  version: string;
}

export const defaultCLIOptions: CLIOptions = {
  version: `inquirerer@${getVersion()}`,
  noTty: false,
  input: process.stdin,
  output: process.stdout,
  minimistOpts: {
    alias: {
      v: 'version'
    }
  }
};

export class CLI {
  private argv: ParsedArgs;
  private prompter: Inquirerer;
  private commandHandler: CommandHandler;
  private options: CLIOptions;

  constructor(
    commandHandler: CommandHandler,
    options: Partial<CLIOptions>,
    argv?: any
  ) {
    const { input, output, ...optionsWithoutIO } = options;
    const { input: defaultInput, output: defaultOutput, ...defaultOptionsWithoutIO } = defaultCLIOptions;
    const mergedOptions: Partial<CLIOptions> = deepmerge(defaultOptionsWithoutIO, optionsWithoutIO);
    mergedOptions.input = input || defaultInput;
    mergedOptions.output = output || defaultOutput;
    this.options = mergedOptions as CLIOptions;

    this.argv = argv ? argv : minimist(process.argv.slice(2), this.options.minimistOpts);
    this.prompter = new Inquirerer({
      noTty: this.options.noTty,
      input: this.options.input,
      output: this.options.output
    });
    this.commandHandler = commandHandler;

  }

  public async run(): Promise<void> {
    if (!('tty' in this.argv)) {
      this.argv.tty = true;
    }

    if (this.argv.version) {
      console.log(this.options.version);
      process.exit(0);
    }

    const args = await this.commandHandler(this.argv, this.prompter, this.options);
    this.prompter.close();
    return args;
  }
}

export default CLI;
