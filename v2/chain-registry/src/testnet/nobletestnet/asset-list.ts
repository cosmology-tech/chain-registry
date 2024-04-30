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
      symbol: 'STAKE'
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
      symbol: 'LOVE'
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
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'USDLR is a fiat-backed stablecoin issued by Stable. Stable pays DeFi protocols who distribute USDLR.',
      denomUnits: [{
          denom: 'uusdlr',
          exponent: 0,
          aliases: ['microusdlr']
        }, {
          denom: 'usdlr',
          exponent: 6
        }],
      base: 'uusdlr',
      display: 'usdlr',
      name: 'USDLR by Stable',
      symbol: 'USDLR',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdlr'
          },
          provider: 'Stable'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
        }]
    }
  ]
};
export default info;