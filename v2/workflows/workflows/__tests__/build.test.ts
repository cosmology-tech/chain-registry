import { Asset, AssetList } from '@chain-registry/interfaces';
import { isValidIdentifierCamelized,toCamelCase } from '@interweb/casing';
import { sync as globSync } from 'glob';
import { join } from 'path';
import { JSStringifySetterOptions } from 'strfy-js';

import { Registry, RegistryBuilder, RegistryBuilderOptions, SchemaTypeGenerator } from '../src';
import { fixtureOutputDir, getRegistry } from '../test-utils';

const outputDir = join(fixtureOutputDir, 'builder');
const outputDir2 = join(fixtureOutputDir, 'builder-schemata');

const registry = getRegistry();

const options: RegistryBuilderOptions = {
  assetList: {
    camelCase: true,
    space: 2,
    propertyRenameMap: {
      '/assets/*/type_asset': 'asset_type'
    },
    defaultValuesSetter: {
      '/assets/*/type_asset': function (options: JSStringifySetterOptions<Asset, AssetList>): any {
        const asset = options.obj;
        const chain = registry.chains.find(chain=>chain.chain_name === options.root.chain_name);

        switch (true) {
        case asset.base.startsWith('factory/'):
          return 'sdk.Factory';

        case asset.base.startsWith('ft') && options.root.chain_name === 'bitsong':
          return 'bitsong';

        case asset.base.startsWith('erc20/'):
          return 'erc20';

        case asset.base.startsWith('ibc/'):
          return 'ics20';

        case asset.base.startsWith('cw20:'):
          return 'cw20';

        default: 
          if (chain?.slip44 === 118 || (chain?.codebase?.sdk?.version || chain?.codebase?.cosmos_sdk_version)) {
            return 'sdk.Coin';
          }
          return 'unknown';
        }
      }
    },
    include: [
      '/$schema',
      '/chain_name',
      '/assets/*/description',
      '/assets/*/base',
      '/assets/*/name',
      '/assets/*/display',
      '/assets/*/symbol',
      '/assets/*/coingecko_id',
      '/assets/*/type_asset',
      '/assets/*/address',
      '/assets/*/denom_units',
      '/assets/*/traces'
    ],
    exclude: [ ]
  },
  chain: {
    camelCase: true,
    space: 2,
    propertyRenameMap: {
      // '/logo_URIs': 'logos'
    },
    include: [
      '/$schema',
      '/apis/*/*/address',
      '/bech32_prefix',
      '/chain_id',
      '/chain_type',
      '/chain_name',
      '/codebase/cosmos_sdk_version',
      '/codebase/cosmwasm_enabled',
      '/codebase/cosmwasm_version',
      '/description',
      '/explorers',
      '/extra_codecs',
      '/fee_token',
      '/staking_token',
      '/fees',
      '/images',
      '/key_algos',
      '/network_type',
      '/pretty_name',
      '/slip44',
      '/staking',
      '/website',
    ],
    exclude: []
  },
  ibcData: {
    camelCase: true,
    space: 2
  },
  ops: {
    assetList: [
      {
        op: 'removeProperty',
        path: '/$defs/asset',
        value: 'extended_description'
      },
      {
        op: 'removeProperty',
        path: '/$defs/asset',
        value: 'ibc'
      },
      {
        op: 'removeProperty',
        path: '/$defs/asset',
        value: 'logo_URIs'
      },
      {
        op: 'removeProperty',
        path: '/$defs/asset',
        value: 'socials'
      },
      {
        op: 'remove',
        path: '/$defs/asset/properties/images/items/properties/image_sync'
      },
      {
        op: 'remove',
        path: '/$defs/pointer'
      },
      {
        op: 'remove',
        path: '/$defs/asset/if'
      },
      {
        op: 'remove',
        path: '/$defs/asset/then'
      },
      {
        op: 'add',
        path: '/$defs/asset/properties/type_asset/enum/-',
        value: 'sdk.factory'
      }

    ],
    chain: [
      ...[
        'alternative_slip44s',
        'bech32_config',
        'daemon_name',
        'pre_fork_name',
        'update_link',
        'status',
        'logo_URIs',
        'peers',
      ].map(value=>({
        op: 'removeProperty',
        path: '/',
        value
      })) as any,


      // codebase
      ...[
        'binaries',
        'compatible_versions',
        'consensus',
        'cosmwasm_path',
        'genesis',
        'git_repo',
        'go_version',
        'recommended_version',
        'versions',
      ].map(value=>({
        op: 'removeProperty',
        path: '/properties/codebase',
        value
      })) as any,

      {
        op: 'removeDefinition',
        path: 'peer', // TODO fix upstream, use value
      },

      {
        op: 'removeProperty',
        path: '/$defs/endpoint',
        value: 'provider'
      },
      {
        op: 'removeProperty',
        path: '/$defs/endpoint',
        value: 'archive'
      },

      {
        op: 'remove',
        path: '/properties/images/items/if'
      },
      {
        op: 'remove',
        path: '/properties/images/items/then'
      }
    ],
    ibcData: []
  }
};

it('types', () => {

  const builder = new RegistryBuilder(registry, options);
  builder.buildSchemas(outputDir, toCamelCase, isValidIdentifierCamelized);

  const registry2 = new Registry(outputDir);

  const generator = new SchemaTypeGenerator({
    outputDir: outputDir2,
    supportedSchemas: [
      'chain.schema.json',
      'assetlist.schema.json',
      'ibc_data.schema.json'
    ],
    registry: registry2,
    schemaTSOptions: {
      strictTypeSafety: true,
      // NO NEED TO DO CAMEL HERE! just use the schema ;) 
      // camelCase: true,
      useSingleQuotes: true
    }
  });
  generator.generateTypes();

  const outFiles = globSync(`${outputDir}/*.ts`).map(a => a.split(outputDir)[1]);
  expect(outFiles).toMatchSnapshot();

});