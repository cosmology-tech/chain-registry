import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'moonbeamtestnet',
  assets: [
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denomUnits: [{
          denom: 'Wei',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'GLMR',
          exponent: 18,
          aliases: ['glmr']
        }],
      typeAsset: 'substrate',
      base: 'Wei',
      name: 'Glimmer',
      display: 'GLMR',
      symbol: 'GLMR',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      coingeckoId: 'moonbeam',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }]
    },
    {
      description: 'An ERC-20 representation of GLMR, the native token of Moonbeam.',
      typeAsset: 'erc20',
      address: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
      denomUnits: [{
          denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WGLMR',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'moonbeamtestnet',
            baseDenom: 'Wei'
          },
          provider: 'Moonbeam'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      coingeckoId: 'wrapped-moonbeam',
      images: [{
          imageSync: {
            chainName: 'moonbeamtestnet',
            baseDenom: 'Wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      typeAsset: 'erc20',
      address: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
      denomUnits: [{
          denom: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'axlusdc',
          exponent: 6
        }],
      base: '0xD1633F7Fb3d716643125d6415d4177bC36b7186b',
      name: 'Axelar Wrapped USD Coin',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          provider: 'Axelar'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelartestnet',
            baseDenom: 'uausdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    }
  ]
};
export default info;