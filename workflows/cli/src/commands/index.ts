import { AssetList, Chain, IBCInfo } from '@chain-registry/types'
import { assetLists, chains, FilePathInfo, ibcInfo, JSONSchema, registryDir, schemas } from '@chain-registry/workflows';
import { existsSync, readFileSync } from 'fs';
import { CLIOptions, Inquirerer, Question } from 'inquirerer'
import { ParsedArgs } from 'minimist';
import { join, relative, resolve } from 'path';

interface RegistryPaths {
  chains: ResolvedPath[];
  assetLists: ResolvedPath[];
  ibcInfo: ResolvedPath[];
  schemas: ResolvedPath[];
}

interface Registry {
  chains: {
    filepath: string;
    content: Chain
  }[];
  assetLists: {
    filepath: string;
    content: AssetList
  }[];
  ibcInfo: {
    filepath: string;
    content: IBCInfo
  }[];
  schemas: {
    filepath: string;
    content: JSONSchema
  }[];
}


export const commands = async (argv: Partial<ParsedArgs>, prompter: Inquirerer, _options: CLIOptions) => {
  let command;

  if (argv._.length > 0) {
    command = argv._[0];
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
        'asset-lists',
        'ibc-data',
        'schemas'
      ]
    }
  ];

  ({ command } = await prompter.prompt(argv, questions));

  argv = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:',
      default: relative(process.cwd(), registryDir),
      useDefault: true // remove later
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.exit();
    throw new Error('bad registry path!');
  }

  // Resolve paths for each item using the helper function
  const registryPaths: RegistryPaths = {
    chains: resolvePaths(chains, argv.registryDir),
    assetLists: resolvePaths(assetLists, argv.registryDir),
    ibcInfo: resolvePaths(ibcInfo, argv.registryDir),
    schemas: resolvePaths(schemas, argv.registryDir)  // schemas are just strings
  };

  const registry: Registry = parseRegistryFiles(registryPaths);

  switch (command) {
    case 'chain':
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chain',
          message: 'Select a chain:',
          options: registry.chains.map(chain => ({ name: chain.content.chain_name, value: chain.content })),
          maxDisplayLines: 15
        }
      ]);
      const chain: Chain = argv.chain;
      console.log(chain.chain_id);
      chain.codebase.cosmos_sdk_version && console.log(chain.codebase.cosmos_sdk_version);
      chain.codebase.cosmwasm_version && console.log(chain.codebase.cosmwasm_version);
      chain.codebase.ibc_go_version && console.log(chain.codebase.ibc_go_version);
      break;
    case 'asset-lists':
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chain',
          message: 'Select a chain:',
          options: registry.chains.map(chain => chain.content.chain_name),
          maxDisplayLines: 15
        }
      ]);

      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'asset',
          message: 'Select an asset:',
          options: registry.assetLists
            .filter(list => list.content.chain_name === argv.chainName)
            .flatMap(list => list.content.assets)
            .map(asset => ({
              name: `${asset.symbol} | ${asset.base}`,
              value: asset
            })),
          maxDisplayLines: 15
        }
      ]);

      console.log(JSON.stringify(argv.asset, null, 2))
      break;
    case 'ibc-data':
      console.log(argv);

      if (Array.isArray(argv.chain)) {
        argv['chain-1'] = argv.chain[0];
        argv['chain-2'] = argv.chain[1];
      } else if (typeof argv.chain === 'string') {
        argv['chain-1'] = argv.chain;
      }

      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chain-1',
          message: 'Select an IBC chain:',
          options: registry.chains.map(chain => chain.content.chain_name),
          maxDisplayLines: 15
        }
      ]);

      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chain-2',
          message: 'Select an IBC chain:',
          options: registry.chains.map(chain => chain.content.chain_name),
          maxDisplayLines: 15
        }
      ]);

      const chain1 = argv['chain-1'];
      const chain2 = argv['chain-2'];

      // Create an array of the chain names, sort them alphabetically, and then join them with a hyphen
      const sortedChainNames = [chain1, chain2].sort();
      const chainNameString = sortedChainNames.join('-');

      const i = registry.ibcInfo.find(ibc => ibc.filepath.endsWith(chainNameString + '.json'));

      if (i) {
        console.log(i.content.channels);
      }

      break;
    case 'schemas':
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'schemaName',
          message: 'Select a schema:',
          options: registry.schemas.map(schema => null),
          maxDisplayLines: 5
        }
      ]);
      break;

    default:
      console.log(`No recognized command provided or no command given: ${command}`);
      break;
  }

  return argv;

};


type ResolvedPath = FilePathInfo & {
  resolvedPath: string;
}

function resolvePaths(items: FilePathInfo[], baseDir: string): ResolvedPath[] {
  return items.map(item => {
    return { ...item, resolvedPath: resolve(join(baseDir, item.filepath)) };
  });
}

function parseRegistryFiles(registryPaths: RegistryPaths): Registry {
  const keys = Object.keys(registryPaths);
  const parsedRegistry: any = {};

  keys.forEach(key => {
    // @ts-ignore
    parsedRegistry[key] = registryPaths[key].map((resolvedInfo: ResolvedPath) => {
      const content = readFileSync(resolvedInfo.resolvedPath, 'utf-8');
      return { filepath: resolvedInfo.resolvedPath, content: JSON.parse(content) };
    });
  });

  return parsedRegistry;
} 