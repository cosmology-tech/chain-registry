import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'nobletestnet',
  assets: [
    {
      description: 'The controlled staking asset for Noble Chain',
      denomUnits: [{
          denom: 'ustake',
          exponent: 0,
          aliases: ['microstake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ustake',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denomUnits: [{
          denom: 'ulove',
          exponent: 0,
          aliases: ['microlove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ulove',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'uusdc',
          exponent: 0,
          aliases: ['microusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'uusdc',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          provider: 'Circle'
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
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Ondo US Dollar Yield',
      denomUnits: [{
          denom: 'ausdy',
          exponent: 0,
          aliases: ['attousdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ausdy',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;