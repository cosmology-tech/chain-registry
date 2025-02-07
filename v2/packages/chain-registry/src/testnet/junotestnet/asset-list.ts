import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'junotestnet',
  assets: [
    {
      description: 'The native token of JUNO Chain',
      denomUnits: [{
          denom: 'ujunox',
          exponent: 0
        }, {
          denom: 'junox',
          exponent: 6
        }],
      base: 'ujunox',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'ujuno'
          },
          provider: 'Juno'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingeckoId: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of NEXX GEN AI',
      denomUnits: [{
          denom: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
          exponent: 0
        }, {
          denom: 'nexx',
          exponent: 6
        }],
      base: 'factory/juno12klaltyqvg2j6v034jwdxrk5n4242ttse4sdpt/NEXX',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/nexx.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      typeAsset: 'sdk.coin',
      denomUnits: [{
          denom: 'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA',
          exponent: 0
        }, {
          denom: 'arena',
          exponent: 6
        }],
      address: 'juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k',
      base: 'factory/juno12dgadj3wwv5jn0ec7tw5cgvq526nn4gnt2tujlmd57p2ra6k87esl36r9k/ARENA',
      name: 'Arena Token',
      description: 'The token for the Arena DAO',
      display: 'arena',
      symbol: 'ARENA',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'juno',
            baseDenom: 'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA'
          },
          provider: 'Arena DAO'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.svg'
      },
      images: [{
          imageSync: {
            chainName: 'juno',
            baseDenom: 'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/arena.png',
          theme: {
            primaryColorHex: '#dc6c24'
          }
        }]
    }
  ]
};
export default info;