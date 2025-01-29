import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'axelartestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denomUnits: [{
          denom: 'uaxl',
          exponent: 0
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'uaxl',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingeckoId: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denomUnits: [{
          denom: 'uausdc',
          exponent: 0
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: 'uausdc',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Ether on Axelar',
      denomUnits: [{
          denom: 'eth-wei',
          exponent: 0
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: 'eth-wei',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereumtestnet',
            baseDenom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denomUnits: [{
          denom: 'wglmr-wei',
          exponent: 0
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: 'wglmr-wei',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'moonbeamtestnet',
            baseDenom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped Matic on Axelar',
      denomUnits: [{
          denom: 'wmatic-wei',
          exponent: 0
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      base: 'wmatic-wei',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'polygontestnet',
            baseDenom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped BNB on Axelar',
      denomUnits: [{
          denom: 'wbnb-wei',
          exponent: 0
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: 'wbnb-wei',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchaintestnet',
            baseDenom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denomUnits: [{
          denom: 'wavax-wei',
          exponent: 0
        }, {
          denom: 'avax',
          exponent: 18
        }],
      base: 'wavax-wei',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'avalanchetestnet',
            baseDenom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denomUnits: [{
          denom: 'wftm-wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      base: 'wftm-wei',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          provider: 'Axelar'
        }],
      images: [{
          imageSync: {
            chainName: 'fantomtestnet',
            baseDenom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of Manifest Ledger',
      denomUnits: [{
          denom: 'ibc/EAC654CC560CC03D82AE4BAA808BD0B6E06E9F29F62194B46C0502D967349E24',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EAC654CC560CC03D82AE4BAA808BD0B6E06E9F29F62194B46C0502D967349E24',
      name: 'Manifest',
      display: 'mfx',
      symbol: 'MFX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-590',
            path: 'transfer/channel-590/umfx'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'manifesttestnet',
            baseDenom: 'umfx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      }
    }
  ]
};
export default info;