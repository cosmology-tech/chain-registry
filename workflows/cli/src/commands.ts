import { AssetList, Chain,IBCInfo } from '@chain-registry/types'
import { assetLists, chains, FilePathInfo, ibcInfo, JSONSchema,registryDir, schemas } from '@chain-registry/workflows';
import { existsSync, readFileSync } from 'fs';
import { CLIOptions, Inquirerer } from 'inquirerer'
import { ParsedArgs } from 'minimist';
import { join, resolve } from 'path';

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
  let command = argv._[0] as string; // Safely assume command is a string

  if (!command) {
    ({ command } = await prompter.prompt(argv, [
      {
        type: 'autocomplete',
        name: 'command',
        message: 'choose a command',
        options: [
          'chains',
          'asset-lists',
          'ibc-data',
          'schemas'
        ]
      }
    ]));

  }

  argv = await prompter.prompt(argv, [
    {
      type: 'text',
      name: 'registryDir',
      message: 'provide a registryDir:',
      // default: relative(process.cwd(), registryDir)
      default: registryDir,
      useDefault: true // remove later
    }
  ]);

  if (!existsSync(argv.registryDir)) {
    prompter.close();
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
    case 'chains':
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chainName',
          message: 'Select a chain:',
          options: registry.chains.map(chain => chain.content.chain_name),
          maxDisplayLines: 15
        }
      ]);
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
            .flatMap(list=>list.content.assets)
            .map(asset => ({
              name: `${asset.symbol} | ${asset.base}`,
              value: asset
            })),
          maxDisplayLines: 15
        }
      ]);

      console.log(JSON.stringify(argv.asset,null,2))
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
          options: registry.ibcInfo.map(info => info.content.chain_1 + ' <> ' + info.content.chain_2),
          maxDisplayLines: 5
        }
      ]);
      
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'chain-2',
          message: 'Select an IBC chain:',
          options: registry.ibcInfo.map(info => info.content.chain_1 + ' <> ' + info.content.chain_2),
          maxDisplayLines: 5
        }
      ]);

      console.log(argv);

      break;
    case 'schemas':
      argv = await prompter.prompt(argv, [
        {
          type: 'autocomplete',
          name: 'schemaName',
          message: 'Select a schema:',
          options: registry.schemas.map(schema => schema.content.title),
          maxDisplayLines: 5
        }
      ]);
      break;

    default:
      console.log("No recognized command provided or no command given.");
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