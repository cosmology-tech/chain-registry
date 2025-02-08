import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'archwaytestnet',
  assets: [{
      description: 'The native token of Archway Test Network.',
      denomUnits: [
        {
          denom: 'aconst',
          exponent: 0
        },
        {
          denom: 'uconst',
          exponent: 12
        },
        {
          denom: 'const',
          exponent: 18
        }
      ],
      base: 'aconst',
      name: 'Archway',
      display: 'const',
      symbol: 'CONST',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          provider: 'Archway Testnet'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primaryColorHex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'Wrapped CONST (Archway Testnet token)',
      typeAsset: 'cw20',
      address: 'archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
      denomUnits: [{
          denom: 'cw20:archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
          exponent: 0
        }, {
          denom: 'wARCH',
          exponent: 18
        }],
      base: 'cw20:archway1dz6h2smr432gvzruklk3lps7ak2ca7cngdge4vym93wehkkypwpqgwr2q2',
      name: 'Wrapped ARCH',
      display: 'wARCH',
      symbol: 'wARCH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'archwaytestnet',
            baseDenom: 'aconst'
          },
          provider: 'Archway'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }]
    }]
};
export default info;