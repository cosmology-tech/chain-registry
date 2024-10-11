import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'archwaytestnet',
  assets: [
    {
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
    },
    {
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
    },
    {
      description: 'Circle\'s USDC Noble Testnet (Grand) on Archway Testnet',
      denomUnits: [{
          denom: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F',
      name: 'USDC (Noble)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'nobletestnet',
            baseDenom: 'uusdc',
            channelId: 'channel-215'
          },
          chain: {
            channelId: 'channel-500',
            path: 'transfer/channel-500/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Wrapped USDC (Noble Testnet Grand)',
      typeAsset: 'cw20',
      address: 'archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
      denomUnits: [{
          denom: 'cw20:archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
          exponent: 0
        }, {
          denom: 'wUSDC',
          exponent: 6
        }],
      base: 'cw20:archway172vetupqnkgdc7dp3gwqpvk5ljmgzyj2gs4ag2fdmp0s2rucxxsqh0nqeu',
      name: 'Wrapped USDC',
      display: 'wUSDC',
      symbol: 'wUSDC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'archwaytestnet',
            baseDenom: 'ibc/34F8D3402273FFA5278AE5757D81CE151ACFD4B19C494C0EE372A7229714824F'
          },
          provider: 'Archway'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg'
      },
      images: [{
          imageSync: {
            chainName: 'archway',
            baseDenom: 'cw20:archway1gaf9nw7n8v5lpjz9caxjpps006kxfcrzcuc8y5qp4clslhven2ns2g0ule'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }]
    }
  ]
};
export default info;