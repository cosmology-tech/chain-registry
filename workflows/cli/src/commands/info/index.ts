import { Registry } from '@chain-registry/workflows';
import { existsSync } from 'fs';
import { CLIOptions, Inquirerer, Question } from 'inquirerer'
import { ParsedArgs } from 'minimist';

import { displayAsset } from './asset';
import { displayAssetList } from './asset-list';
import { displayChain } from './chain';

export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {
  let command;

  if (argv._.length > 0) {
    command = argv._.shift();
  }

  if (command) {
    argv.command = command;
  }

  const questions: Question[] = [
    {
      type: 'autocomplete',
      name: 'command',
      message: 'choose a command',
      options: [
        'chain',
        'asset-list',
        'asset'
      ]
    }
  ];

  ({ command } = await prompter.prompt(argv, questions));

  argv = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:'
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  const registry: Registry = new Registry(argv.registryDir);

  switch (command) {
  case 'chain':
    argv = await prompter.prompt(argv, [
      {
        type: 'autocomplete',
        name: 'chain',
        message: 'Select a chain:',
        options: registry.chains.map(chain => ({ name: chain.chain_name, value: chain })),
        maxDisplayLines: 15
      }
    ]);
    displayChain(argv.chain);
    break;

  case 'asset-list':
    argv = await prompter.prompt(argv, [
      {
        type: 'autocomplete',
        name: 'chain',
        message: 'Select a chain:',
        options: registry.chains.map(chain => chain.chain_name),
        maxDisplayLines: 15
      }
    ]);

    const assetList = registry.assetLists.find(a => a.chain_name === argv.chain);
    displayAssetList(assetList);
    break;

  case 'asset':
    argv = await prompter.prompt(argv, [
      {
        type: 'autocomplete',
        name: 'chain',
        message: 'Select a chain:',
        options: registry.chains.map(chain => chain.chain_name),
        maxDisplayLines: 15
      }
    ]);

    argv = await prompter.prompt(argv, [
      {
        type: 'autocomplete',
        name: 'asset',
        message: 'Select an asset:',
        options: registry.assetLists
          .filter(list => list.chain_name === argv.chain)
          .flatMap(list => list.assets)
          .map(asset => ({
            name: asset.base,
            value: asset
          })),
        maxDisplayLines: 15
      }
    ]);

    displayAsset(argv.asset);
    break;

  default:
    console.log(`No recognized command provided or no command given: ${command}`);
    break;
  }

  return argv;

};