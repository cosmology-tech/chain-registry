import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'lavatestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/3D3E77333E4AAE1BCE0F03BEDA9A538166D113AF1B60EB1C35365D03506F07F4',
          exponent: 0,
          aliases: ['uausdc']
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      base: 'ibc/3D3E77333E4AAE1BCE0F03BEDA9A538166D113AF1B60EB1C35365D03506F07F4',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'uausdc',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [{
          denom: 'ibc/9BE75CAB3126DA45896BBA7CC269199120F7E7B256E6EA07A57D20007042AD50',
          exponent: 0,
          aliases: ['eth-wei']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      base: 'ibc/9BE75CAB3126DA45896BBA7CC269199120F7E7B256E6EA07A57D20007042AD50',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'eth-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      }
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [{
          denom: 'ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673',
          exponent: 0,
          aliases: ['wglmr-wei']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      base: 'ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'wglmr-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'moonbeamtestnet',
            base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      }
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [{
          denom: 'ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950',
          exponent: 0,
          aliases: ['wmatic-wei']
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      base: 'ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'wmatic-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'polygontestnet',
            base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      }
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [{
          denom: 'ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391',
          exponent: 0,
          aliases: ['wbnb-wei']
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      base: 'ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'wbnb-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'binancesmartchaintestnet',
            base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      }
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [{
          denom: 'ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453',
          exponent: 0,
          aliases: ['wavax-wei']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      base: 'ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'wavax-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'avalanchetestnet',
            base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [{
          denom: 'ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B',
          exponent: 0,
          aliases: ['wftm-wei']
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      base: 'ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-444',
            base_denom: 'wftm-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-4'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'fantomtestnet',
            base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      }
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6092',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      base: 'ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6092',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2AF7705A55E0F95B225AEFEEE2178AD8AA078B12F2A75DA3D49175C0B80BD99F',
          exponent: 0,
          aliases: ['factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz']
        }, {
          denom: 'willyz',
          exponent: 6
        }],
      base: 'ibc/2AF7705A55E0F95B225AEFEEE2178AD8AA078B12F2A75DA3D49175C0B80BD99F',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6092',
            base_denom: 'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Titan Chain',
      denom_units: [
        {
          denom: 'ibc/D9876BE0B909BD4E05CFB8100868110A81E45C162BAE719B1E1F647DF7164426',
          exponent: 0,
          aliases: ['ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6']
        },
        {
          denom: 'utkx',
          exponent: 12,
          aliases: ['microtkx']
        },
        {
          denom: 'mtkx',
          exponent: 15,
          aliases: ['millitkx']
        },
        {
          denom: 'tkx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/D9876BE0B909BD4E05CFB8100868110A81E45C162BAE719B1E1F647DF7164426',
      name: 'tkx',
      display: 'tkx',
      symbol: 'TKX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6092',
            base_denom: 'ibc/28EEF762052DB8C3D27A7BF625E9F86A1B3B689CC8D80C818CEDF2EB6CBA02A6',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titantestnet/images/tkx.png'
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/85E497413C92605462CC76325F2AC3E757FFF4E2F5854BF577B9AFE250C76A2A',
          exponent: 0,
          aliases: ['ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0']
        }, {
          denom: 'ausdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/85E497413C92605462CC76325F2AC3E757FFF4E2F5854BF577B9AFE250C76A2A',
      name: 'USD Coin (Axelar)',
      display: 'ausdc',
      symbol: 'aUSDC.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6092',
            base_denom: 'ibc/2164BDB48DE5501430E71286448D87C6D2240EC0E078CF113CAB85E21A352BB0',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }
  ]
};
export default assets;
    