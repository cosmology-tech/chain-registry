import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'stargaze',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/46195BEEC4EA573166C96E93D6C296EA6B41361F65637F1CFD20F5E94AE7B941',
          exponent: 0,
          aliases: ['aacre']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      base: 'ibc/46195BEEC4EA573166C96E93D6C296EA6B41361F65637F1CFD20F5E94AE7B941',
      name: 'Acre',
      display: 'acre',
      symbol: 'ACRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      coingecko_id: 'arable-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'aacre',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-121'
          }
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/1F0051596A782B532CE9D07F18E56B3BED0467CF361C6F20F54B609B21252983',
          exponent: 0,
          aliases: ['erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      base: 'ibc/1F0051596A782B532CE9D07F18E56B3BED0467CF361C6F20F54B609B21252983',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      coingecko_id: 'arable-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'erc20/0x2Cbea61fdfDFA520Ee99700F104D5b75ADf50B0c',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-121'
          }
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/1A23BB7AF0CAFD80CC94C9C5D4C1E7D6615714F9836AE735CECCA3E8497B9788',
          exponent: 0,
          aliases: ['erc20/0xAE6D3334989a22A65228732446731438672418F2']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      base: 'ibc/1A23BB7AF0CAFD80CC94C9C5D4C1E7D6615714F9836AE735CECCA3E8497B9788',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'erc20/0xAE6D3334989a22A65228732446731438672418F2',
            chain_name: 'acrechain'
          },
          chain: {
            channel_id: 'channel-121'
          }
        }]
    },
    {
      description: 'The native token of Aura Network',
      denom_units: [{
          denom: 'ibc/7C6220A768862B54B717F6AF9E29D398B16747B79D509E777D7F2259578E3D47',
          exponent: 0,
          aliases: ['uaura']
        }, {
          denom: 'aura',
          exponent: 6
        }],
      base: 'ibc/7C6220A768862B54B717F6AF9E29D398B16747B79D509E777D7F2259578E3D47',
      name: 'Aura',
      display: 'aura',
      symbol: 'AURA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      coingecko_id: 'aura-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'uaura',
            chain_name: 'aura'
          },
          chain: {
            channel_id: 'channel-270'
          }
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/33D5AC617E1FEC507F469317A7E1392D2CA21D73E181B1E998897FF126A652BC',
          exponent: 0,
          aliases: ['swth']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/33D5AC617E1FEC507F469317A7E1392D2CA21D73E181B1E998897FF126A652BC',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      coingecko_id: 'switcheo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'swth',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'The native stablecoin of Carbon',
      denom_units: [{
          denom: 'ibc/95EB1ED03004A24C232BF5E71345D03412FFDF2EA993B41179864DA6B1E44529',
          exponent: 0,
          aliases: ['usc']
        }, {
          denom: 'dusc',
          exponent: 8,
          aliases: ['USC']
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/95EB1ED03004A24C232BF5E71345D03412FFDF2EA993B41179864DA6B1E44529',
      name: 'Carbon USD Coin',
      display: 'dusc',
      symbol: 'USC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
      },
      coingecko_id: 'carbon-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/usc.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'usc',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'BNB token on Carbon',
      denom_units: [{
          denom: 'ibc/7E1ADAF88FCEBE7B662B56F6585E2C8329AFC7058C03CA17F5721AAEE72432E4',
          exponent: 0,
          aliases: ['bnb.1.6.773edb']
        }, {
          denom: 'bnb',
          exponent: 18,
          aliases: ['BNB']
        }],
      base: 'ibc/7E1ADAF88FCEBE7B662B56F6585E2C8329AFC7058C03CA17F5721AAEE72432E4',
      name: 'Binance Coin',
      display: 'bnb',
      symbol: 'BNB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'bnb.1.6.773edb',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }]
    },
    {
      description: 'bNEO token on Carbon',
      denom_units: [{
          denom: 'ibc/F77F205312C69D5DF34EBE746F92FFC13C3A7AC2DE56D16A805F9FB7211BD9EE',
          exponent: 0,
          aliases: ['bneo.1.14.e2e5f6']
        }, {
          denom: 'bneo',
          exponent: 8,
          aliases: ['bNEO']
        }],
      base: 'ibc/F77F205312C69D5DF34EBE746F92FFC13C3A7AC2DE56D16A805F9FB7211BD9EE',
      name: 'BurgerNEO',
      display: 'bneo',
      symbol: 'bNEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'bneo.1.14.e2e5f6',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/bneo.svg'
        }]
    },
    {
      description: 'BUSD (BEP-20) token on Carbon',
      denom_units: [{
          denom: 'ibc/4476E918AA768266807AD1CE45B6EE542616F60C8E8C87CF2BAA840F208E412D',
          exponent: 0,
          aliases: ['busd.1.6.754a80']
        }, {
          denom: 'busd',
          exponent: 18,
          aliases: ['BUSD']
        }],
      base: 'ibc/4476E918AA768266807AD1CE45B6EE542616F60C8E8C87CF2BAA840F208E412D',
      name: 'BUSD (BEP-20)',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'busd.1.6.754a80',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png'
        }]
    },
    {
      description: 'Carbon Wrapped GLP on Carbon',
      denom_units: [{
          denom: 'ibc/AA3074920C15E12BEEE53CDAFFEB5197127BEAE735D74A5CC6D07D29B279565F',
          exponent: 0,
          aliases: ['cglp.1.19.1698d3']
        }, {
          denom: 'cglp',
          exponent: 18,
          aliases: ['CGLP']
        }],
      base: 'ibc/AA3074920C15E12BEEE53CDAFFEB5197127BEAE735D74A5CC6D07D29B279565F',
      name: 'Carbon Wrapped GLP',
      display: 'cglp',
      symbol: 'CGLP',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'cglp.1.19.1698d3',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/cglp.svg'
        }]
    },
    {
      description: 'Grouped USD on Carbon',
      denom_units: [{
          denom: 'ibc/E6DB9D779B4263E4A4BA18585E4A88288658D8254A1693F9C9D2BC25A7FD9A99',
          exponent: 0,
          aliases: ['cgt/1']
        }, {
          denom: 'usd',
          exponent: 18,
          aliases: ['USD']
        }],
      base: 'ibc/E6DB9D779B4263E4A4BA18585E4A88288658D8254A1693F9C9D2BC25A7FD9A99',
      name: 'Carbon Grouped USD',
      display: 'usd',
      symbol: 'USD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/carbon-grouped-usd.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'cgt/1',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }]
    },
    {
      description: 'ETH (Arbitrum) token on Carbon',
      denom_units: [{
          denom: 'ibc/A93C7184E1554A8134FCC36DAC950998A2FC880C1842ADC0E1DC89A3276AB48C',
          exponent: 0,
          aliases: ['eth.1.19.c3b805']
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'ibc/A93C7184E1554A8134FCC36DAC950998A2FC880C1842ADC0E1DC89A3276AB48C',
      name: 'Ethereum (Arbitrum)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'eth.1.19.c3b805',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'ETH (ERC20) token on Carbon',
      denom_units: [{
          denom: 'ibc/5F6CA73E15C6CC2954773F16F828EAD14B9AEB8BFB347FD30C1C741D6F5B49CE',
          exponent: 0,
          aliases: ['eth.1.2.942d87']
        }, {
          denom: 'eth',
          exponent: 18,
          aliases: ['ETH']
        }],
      base: 'ibc/5F6CA73E15C6CC2954773F16F828EAD14B9AEB8BFB347FD30C1C741D6F5B49CE',
      name: 'Ethereum (ERC20)',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'eth.1.2.942d87',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth.svg'
        }]
    },
    {
      description: 'USDC (ERC20) token on Carbon',
      denom_units: [{
          denom: 'ibc/9663AB619CEBC02E82B4C55CCBD42846EADD5FA8871572A90953FF3563998478',
          exponent: 0,
          aliases: ['usdc.1.2.343151']
        }, {
          denom: 'usdc',
          exponent: 6,
          aliases: ['USDC']
        }],
      base: 'ibc/9663AB619CEBC02E82B4C55CCBD42846EADD5FA8871572A90953FF3563998478',
      name: 'Circle USD',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'usdc.1.2.343151',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'USD Coin (BEP-20) token on Carbon',
      denom_units: [{
          denom: 'ibc/B3B52F03C6E27FB422ED4DA3D80F65C2C19A2F3BDD5085D1326872EE07EF3820',
          exponent: 0,
          aliases: ['usdc.1.6.53ff75']
        }, {
          denom: 'usdc',
          exponent: 18,
          aliases: ['USDC']
        }],
      base: 'ibc/B3B52F03C6E27FB422ED4DA3D80F65C2C19A2F3BDD5085D1326872EE07EF3820',
      name: 'USD Coin (BEP-20)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'usdc.1.6.53ff75',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'ZIL token on Carbon',
      denom_units: [{
          denom: 'ibc/0A10DA817CDAA216E7660A963C2C86AA73A7E72793C118EB9054E3DDD6678564',
          exponent: 0,
          aliases: ['zil.1.18.1a4a06']
        }, {
          denom: 'zil',
          exponent: 12,
          aliases: ['ZIL']
        }],
      base: 'ibc/0A10DA817CDAA216E7660A963C2C86AA73A7E72793C118EB9054E3DDD6678564',
      name: 'Zilliqa',
      display: 'zil',
      symbol: 'ZIL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'zil.1.18.1a4a06',
            chain_name: 'carbon'
          },
          chain: {
            channel_id: 'channel-123'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/zil.svg'
        }]
    },
    {
      description: '',
      denom_units: [{
          denom: 'ibc/14D1406D84227FDF4B055EA5CB2298095BBCA3F3BC3EF583AE6DF36F0FB179C8',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      base: 'ibc/14D1406D84227FDF4B055EA5CB2298095BBCA3F3BC3EF583AE6DF36F0FB179C8',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png'
        }],
      socials: {
        website: 'https://celestia.org/',
        twitter: 'https://twitter.com/CelestiaOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-33',
            base_denom: 'utia',
            chain_name: 'celestia'
          },
          chain: {
            channel_id: 'channel-291'
          }
        }]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [{
          denom: 'ibc/775B130CF8ED9C5FC9C5A14480AA479E091661D72F367AA64D1F5B442FCC52FE',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/775B130CF8ED9C5FC9C5A14480AA479E091661D72F367AA64D1F5B442FCC52FE',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ppica',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      socials: {
        website: 'https://www.composable.finance/',
        twitter: 'https://twitter.com/ComposableFin'
      }
    },
    {
      description: 'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [{
          denom: 'ibc/6F4D3965E55D84A53F5BABC960162B2D9B5A5D494246F67140027AA0EE596FFD',
          exponent: 0,
          aliases: ['ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/6F4D3965E55D84A53F5BABC960162B2D9B5A5D494246F67140027AA0EE596FFD',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description: 'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [{
          denom: 'ibc/BC4583E534AAD2AD181037D68224148FD6AD8FFA973D30ACBF0BD1DCFEA0D087',
          exponent: 0,
          aliases: ['ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/BC4583E534AAD2AD181037D68224148FD6AD8FFA973D30ACBF0BD1DCFEA0D087',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description: 'The native staking and governance token of Statemine parachain.',
      denom_units: [{
          denom: 'ibc/B8E4D320ECB99E4B4EB367BE0C3E1C3A9FEB84105CF02369D8DE292FEA9D7C5A',
          exponent: 0,
          aliases: ['ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B8E4D320ECB99E4B4EB367BE0C3E1C3A9FEB84105CF02369D8DE292FEA9D7C5A',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130'
          }
        }]
    },
    {
      description: 'The native fee, staking and governance token of the Tinkernet Parachain.',
      denom_units: [{
          denom: 'ibc/4466B6680D2D7410603EC2D4E1C955D70568A015B167721284237A485D2D501A',
          exponent: 0,
          aliases: ['ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/4466B6680D2D7410603EC2D4E1C955D70568A015B167721284237A485D2D501A',
      name: 'TNKR',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-184'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '2125'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-21',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-51'
          }
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/F9C792DF71F960BB9EF698493B61E29C1EBB8FCD56B1F8BB08C86871F5F497C0',
          exponent: 0,
          aliases: ['aevmos']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/F9C792DF71F960BB9EF698493B61E29C1EBB8FCD56B1F8BB08C86871F5F497C0',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingecko_id: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'aevmos',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'Tether USDt on Evmos',
      denom_units: [{
          denom: 'ibc/58F4A9E99B18C056318D6B1A8DF54F0038062F05E55A8F81F02F2596C2F767F1',
          exponent: 0,
          aliases: ['ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/58F4A9E99B18C056318D6B1A8DF54F0038062F05E55A8F81F02F2596C2F767F1',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/425F3A00B04B7F59A003909792FF5A499DCF641D1DBB19E5C068F112628DCBBD',
          exponent: 0,
          aliases: ['erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'ibc/425F3A00B04B7F59A003909792FF5A499DCF641D1DBB19E5C068F112628DCBBD',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The token of Teledisko DAO.',
      denom_units: [{
          denom: 'ibc/B14F48FDFA081C5F4F3B9CAE5AD9036DD474CEE55D169E7FEF08BB06390DDCA3',
          exponent: 0,
          aliases: ['erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280']
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      base: 'ibc/B14F48FDFA081C5F4F3B9CAE5AD9036DD474CEE55D169E7FEF08BB06390DDCA3',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      type_asset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denom_units: [{
          denom: 'ibc/24C4391A5EB3E4522E156A6C2E1B6AF41CB438864C316959D3C13CE02C4D33ED',
          exponent: 0,
          aliases: ['erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'ibc/24C4391A5EB3E4522E156A6C2E1B6AF41CB438864C316959D3C13CE02C4D33ED',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      type_asset: 'erc20',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-13',
            base_denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
            chain_name: 'evmos'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The native fee token of Gateway.',
      denom_units: [{
          denom: 'ibc/A8B0AD0A4BD2235CA616987ACF8AA7B63EF0EE9C46ED7A4C18E344820C2C1061',
          exponent: 0,
          aliases: ['utest']
        }, {
          denom: 'test',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/A8B0AD0A4BD2235CA616987ACF8AA7B63EF0EE9C46ED7A4C18E344820C2C1061',
      name: 'Test',
      display: 'test',
      symbol: 'TEST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'utest',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }]
    },
    {
      description: 'the native staking token of Gateway.',
      denom_units: [{
          denom: 'ibc/F295914EEA38E09C04A3D38B349A474B342998A23F36813A864053B1258B4791',
          exponent: 0,
          aliases: ['uworm']
        }, {
          denom: 'worm',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F295914EEA38E09C04A3D38B349A474B342998A23F36813A864053B1258B4791',
      name: 'Worm',
      display: 'worm',
      symbol: 'WORM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'uworm',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }]
    },
    {
      description: 'Sui (Wormhole), SUI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
      denom_units: [{
          denom: 'ibc/E1816D0235F37ACA78D42FB19F44A8780CC43E4388DA40BB694237DA8EE8423D',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh']
        }, {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole19hlynxzedrlqv99v6qscww7d3crhl86qtd0vprpltg5g9xx6jk9q6ya33y',
      base: 'ibc/E1816D0235F37ACA78D42FB19F44A8780CC43E4388DA40BB694237DA8EE8423D',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      name: 'Sui (Wormhole)',
      symbol: 'SUI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'sui',
            base_denom: '0x2::sui::SUI'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      }
    },
    {
      description: 'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [{
          denom: 'ibc/AD8AA9F68A25AEFA1FD929258DBA5E444ACC80326B8CED41D9E5F2814A1D1B68',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp']
        }, {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole18csycs4vm6varkp00apuqlsm7v4twg8jsljk8wfdd7cghr7g4rtslwqndm',
      base: 'ibc/AD8AA9F68A25AEFA1FD929258DBA5E444ACC80326B8CED41D9E5F2814A1D1B68',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      name: 'Wrapped Ether (Wormhole)',
      symbol: 'WETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'Wrapped liquid staked Ether 2.0 (Wormhole), wstETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
      denom_units: [{
          denom: 'ibc/014B20F036E9101AF129FC5EEB5A439D2B92A9406CAC7778FBF08B29AFADDF5C',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b']
        }, {
          denom: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1gg6f95cymcfrfzhpek7cf5wl53t5kng52cd2m0krgdlu8k58vd8qezy8pt',
      base: 'ibc/014B20F036E9101AF129FC5EEB5A439D2B92A9406CAC7778FBF08B29AFADDF5C',
      display: 'wormhole/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b/8',
      name: 'Wrapped liquid staked Ether 2.0 (Wormhole)',
      symbol: 'wstETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5TSQTEhJ5Q6r1YqCmCxTRSPiV2pGx5rZUQf6g2XH4e1b',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'Aptos Coin (Wormhole), APT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
      denom_units: [{
          denom: 'ibc/4A34C7F49ADD7F03CCCE0F55011545382693BFE3E92A25E963924F06C839819A',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r']
        }, {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1f9sxjn0qu8xylcpzlvnhrefnatndqxnrajfrnr5h97hegnmsdqhsh6juc0',
      base: 'ibc/4A34C7F49ADD7F03CCCE0F55011545382693BFE3E92A25E963924F06C839819A',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      name: 'Aptos Coin (Wormhole)',
      symbol: 'APT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'aptos',
            base_denom: '0x1::aptos_coin::AptosCoin'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      }
    },
    {
      description: 'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [{
          denom: 'ibc/8191AC03C9A53808B0CE24635D9A354D42F8FD88DBCA8E564F808685775796AF',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi']
        }, {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }],
      address: 'wormhole1w27ekqvvtzfanfxnkw4jx2f8gdfeqwd3drkee3e64xat6phwjg0savgmhw',
      base: 'ibc/8191AC03C9A53808B0CE24635D9A354D42F8FD88DBCA8E564F808685775796AF',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      name: 'Tether USD (Wormhole)',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'Wrapped SOL (Wormhole), SOL, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
      denom_units: [{
          denom: 'ibc/1BCCD8B56909F9B38B356AE149FB3FE429C2CADFE5AE38AFBF3F674372D28AE7',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA']
        }, {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sca0pvl',
      base: 'ibc/1BCCD8B56909F9B38B356AE149FB3FE429C2CADFE5AE38AFBF3F674372D28AE7',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      name: 'Wrapped SOL (Wormhole)',
      symbol: 'SOL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'So11111111111111111111111111111111111111112'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      }
    },
    {
      description: 'Bonk (Wormhole), Bonk, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
      denom_units: [{
          denom: 'ibc/70A20C000920068EFAE509B6437D2F1EEE89C4E1BCEEA4639135EA0809049074',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR']
        }, {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }],
      address: 'wormhole10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eq9mpu8u',
      base: 'ibc/70A20C000920068EFAE509B6437D2F1EEE89C4E1BCEEA4639135EA0809049074',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      name: 'Bonk (Wormhole)',
      symbol: 'Bonk',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      }
    },
    {
      description: 'Wrapped BTC (Wormhole), WBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
      denom_units: [{
          denom: 'ibc/EA6962878B63B9C6715675D474979290052FA7C31CAC3459C9CC6FF3F399F9B5',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd']
        }, {
          denom: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1nz0r0au8aj6dc00wmm3ufy4g4k86rjzlr8wkf92cktdlps5lgfcqxnx9yk',
      base: 'ibc/EA6962878B63B9C6715675D474979290052FA7C31CAC3459C9CC6FF3F399F9B5',
      display: 'wormhole/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd/8',
      name: 'Wrapped BTC (Wormhole)',
      symbol: 'WBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BGkuAcga2WArUghF8L6kt6uCAhAzrxmn1QcbQqi5r5bd',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      }
    },
    {
      description: 'tBTC v2 (Wormhole), tBTC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
      denom_units: [{
          denom: 'ibc/C50F9C89D99D2EFBC669C9151B83E7A5F127F7ACC2EF918333DE5E7E85D03835',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw']
        }, {
          denom: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1nu9wf9dw384attnpu0pwfet5fajn05w2ex4r07mghvk3xcwrt2yq5uutp5',
      base: 'ibc/C50F9C89D99D2EFBC669C9151B83E7A5F127F7ACC2EF918333DE5E7E85D03835',
      display: 'wormhole/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw/8',
      name: 'tBTC v2 (Wormhole)',
      symbol: 'tBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/BhqTYfQogyt7jX7cx7x8uHEQP1x9fdtdBZtK4Swghgpw',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x18084fba666a33d37592fa2633fd49a74dd93a88'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/tbtc.svg'
      }
    },
    {
      description: 'Dai Stablecoin (Wormhole), DAI, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
      denom_units: [{
          denom: 'ibc/D78F513EE17FCFCD80C26D83EB7DD9412CECDE6F26FF21A929CE6D2F0A673CF7',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1']
        }, {
          denom: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
          exponent: 8,
          aliases: []
        }],
      address: 'wormhole1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljqfscg87',
      base: 'ibc/D78F513EE17FCFCD80C26D83EB7DD9412CECDE6F26FF21A929CE6D2F0A673CF7',
      display: 'wormhole/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1/8',
      name: 'Dai Stablecoin (Wormhole)',
      symbol: 'DAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/EKiMEqDnPKokFGcSXDvGMk6Gt1BJ6BC7BDZzTmEpWLH1',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      }
    },
    {
      description: 'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [{
          denom: 'ibc/6A34955328B0806E630561BEF659F26548FCBDEE3EFFBE551ACF92E45EB6DA46',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt']
        }, {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }],
      address: 'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/6A34955328B0806E630561BEF659F26548FCBDEE3EFFBE551ACF92E45EB6DA46',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      name: 'USD Coin (Wormhole)',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'Avalanche USD Coin (Wormhole), Avalanche USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
      denom_units: [{
          denom: 'ibc/FF6BB9B5355BE57E4297FCA03540DE06B65289D51E458CCD4737E68B9D94D16E',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4']
        }, {
          denom: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
          exponent: 6,
          aliases: []
        }],
      address: 'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/FF6BB9B5355BE57E4297FCA03540DE06B65289D51E458CCD4737E68B9D94D16E',
      display: 'wormhole/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4/6',
      name: 'Avalanche USD Coin (Wormhole)',
      symbol: 'avalanche.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5ZLmAZpcbaP4EGyihSmpfwryzDr84h51tboV392BCjW4',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'avalanche',
            base_denom: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'Pyth Network (Wormhole), PYTH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
      denom_units: [{
          denom: 'ibc/05CF30A8193F8C0C5F5C64A6EBDFDFA36A4708F1F08E68C8F343FEF8625515D7',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy']
        }, {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }],
      address: 'wormhole1utjx3594tlvfw4375esgu72wa4sdgf0q7x4ye27husf5kvuzp5rsr72gdq',
      base: 'ibc/05CF30A8193F8C0C5F5C64A6EBDFDFA36A4708F1F08E68C8F343FEF8625515D7',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      name: 'Pyth Network',
      symbol: 'PYTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      }
    },
    {
      description: 'Solana USD Coin (Wormhole), Solana USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
      denom_units: [{
          denom: 'ibc/5F645D0380F5C21A791AB493506C8AD9E0913405D5E347FC5B6A37684B440B5A',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3']
        }, {
          denom: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/5F645D0380F5C21A791AB493506C8AD9E0913405D5E347FC5B6A37684B440B5A',
      display: 'wormhole/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3/6',
      name: 'Solana USD Coin (Wormhole)',
      symbol: 'solana.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/HJk1XMDRNUbRrpKkNZYui7SwWDMjXZAsySzqgyNcQoU3',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'Basket (Wormhole), BSKT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
      denom_units: [{
          denom: 'ibc/FECA8EC2394EE5CC5F67CF08DAE0EBE3783CE63FBAA23392331D981E259C13B8',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst']
        }, {
          denom: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
          exponent: 5,
          aliases: ['bskt']
        }],
      address: 'wormhole15rantn6k68twp4wmsljtk9uu9a0e5rt7g66fdfkvrsr24hj6je7qat93e6',
      base: 'ibc/FECA8EC2394EE5CC5F67CF08DAE0EBE3783CE63FBAA23392331D981E259C13B8',
      display: 'wormhole/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst/5',
      name: 'Basket',
      symbol: 'BSKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/bqqqpqsxzelp2hdfd4cgmxr6ekpatlj8yt2eghk52vst',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: '6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bskt.png'
      }
    },
    {
      description: 'W is the native token powering the Wormhole interoperability platform.',
      type_asset: 'sdk.coin',
      address: 'wormhole1zecpd6puhcpgqgkjtwr59cc8cj3v89c5jkx0vr26fcclhhv7pmfqsuurzm',
      denom_units: [{
          denom: 'ibc/76444461D5DA253BA161034B122FA96139C196C64AF66510ECFFAA9A26C06626',
          exponent: 0,
          aliases: ['factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos']
        }, {
          denom: 'w',
          exponent: 6
        }],
      base: 'ibc/76444461D5DA253BA161034B122FA96139C196C64AF66510ECFFAA9A26C06626',
      name: 'Wormhole Token',
      display: 'w',
      symbol: 'W',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-12',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/2Wb6ueMFc9WLc2eyYVha6qnwHKbwzUXdooXsg6XXVvos',
            chain_name: 'gateway'
          },
          chain: {
            channel_id: 'channel-278'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
      },
      coingecko_id: '',
      images: [{
          image_sync: {
            chain_name: 'solana',
            base_denom: '85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/w.png'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BE4D240465B75CB2C0168B7C1094F4FCBBD0F88DD702211192C158613182C53A',
          exponent: 0,
          aliases: ['ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BE4D240465B75CB2C0168B7C1094F4FCBBD0F88DD702211192C158613182C53A',
      name: 'ATOM on Juno',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/96401D0C2E85D0F65E6A1D6DF9A3BE15FDA08B182F4ED19E351400617D11C632',
          exponent: 0,
          aliases: ['factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX']
        }, {
          denom: 'nexx',
          exponent: 6
        }],
      address: 'juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh',
      base: 'ibc/96401D0C2E85D0F65E6A1D6DF9A3BE15FDA08B182F4ED19E351400617D11C632',
      name: 'NEXX GEN AI',
      display: 'nexx',
      symbol: 'NEXX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nexx.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'factory/juno1qly4zcmzr2gyxtze5yt9chv2srczwwunppxjfh/NEXX',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/8930702D46F5BAE6784237B62C585F2A4EC7C53AB2D05DA0F319407CD1AFFD4C',
          exponent: 0,
          aliases: ['factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL']
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      address: 'juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e',
      base: 'ibc/8930702D46F5BAE6784237B62C585F2A4EC7C53AB2D05DA0F319407CD1AFFD4C',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'factory/juno1u805lv20qc6jy7c3ttre7nct6uyl20pfky5r7e/DGL',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      type_asset: 'sdk.coin',
      denom_units: [{
          denom: 'ibc/C90D6643E7A81663DDD073AADAE8EC3B40FA33F9B3C2B34928C01AABE9259BA6',
          exponent: 0,
          aliases: ['factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA']
        }, {
          denom: 'arena',
          exponent: 6
        }],
      address: 'juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy',
      base: 'ibc/C90D6643E7A81663DDD073AADAE8EC3B40FA33F9B3C2B34928C01AABE9259BA6',
      name: 'Arena Token',
      description: 'The token for the Arena DAO',
      display: 'arena',
      symbol: 'ARENA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/arena.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'factory/juno1vwmnqk0vyxc96qgffrure4nqxupjrql0zut8s02hadgp0n79r8xq5xdsxy/ARENA',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      type_asset: 'ics20',
      description: 'USD Coin on Juno',
      denom_units: [{
          denom: 'ibc/647240E914793AE5408B369A3F6EC4219507A3D6372066020DB74C40CCEC4243',
          exponent: 0,
          aliases: ['ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/647240E914793AE5408B369A3F6EC4219507A3D6372066020DB74C40CCEC4243',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ibc/4A482FA914A4B9B05801ED81C33713899F322B24F76A06F4B8FE872485EA22FF',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/0E57658B71E9CC4BB0F6FE3E01712966713B49E6FD292E6B66E3F111B103D361',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/0E57658B71E9CC4BB0F6FE3E01712966713B49E6FD292E6B66E3F111B103D361',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [{
          denom: 'ibc/25F65C5B6990A84F7C7DE5860A9A588F8F4C7DD6FB256A21011902E75EC2295E',
          exponent: 0,
          aliases: ['factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk']
        }, {
          denom: 'usk',
          exponent: 6
        }],
      base: 'ibc/25F65C5B6990A84F7C7DE5860A9A588F8F4C7DD6FB256A21011902E75EC2295E',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      coingecko_id: 'usk',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Quark\'s auto-compounding KUJI derivative',
      denom_units: [{
          denom: 'ibc/0BA480028C03CDF772C7E56F0A25668E9371238A8856556C83B11C4211F1D862',
          exponent: 0,
          aliases: ['factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt']
        }, {
          denom: 'qcKUJI',
          exponent: 6
        }],
      base: 'ibc/0BA480028C03CDF772C7E56F0A25668E9371238A8856556C83B11C4211F1D862',
      name: 'qcKUJI',
      display: 'qcKUJI',
      symbol: 'qcKUJI',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qckuji.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'ampKUJI',
      denom_units: [{
          denom: 'ibc/5623BAE9263FD8C23096349781D23DDB4C9943156FB84FA2B6501263F5D65A3C',
          exponent: 0,
          aliases: ['factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI']
        }, {
          denom: 'ampKUJI',
          exponent: 6
        }],
      base: 'ibc/5623BAE9263FD8C23096349781D23DDB4C9943156FB84FA2B6501263F5D65A3C',
      name: 'ampKUJI',
      display: 'ampKUJI',
      symbol: 'ampKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampkuji.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [{
          denom: 'ibc/E6E74FA7BBA88C535FEF1D2BA14DE0BD3CB395FE608F6A3EE5E8D2ACDB46A97C',
          exponent: 0,
          aliases: ['factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta']
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      base: 'ibc/E6E74FA7BBA88C535FEF1D2BA14DE0BD3CB395FE608F6A3EE5E8D2ACDB46A97C',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      coingecko_id: 'mantadao',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Quark\'s auto-compounding MNTA derivative',
      denom_units: [{
          denom: 'ibc/1F0A323AFD38B9A13AEA18AAE42826C959E7A4E979E0A169F655F85D8C776AF9',
          exponent: 0,
          aliases: ['factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt']
        }, {
          denom: 'qcMNTA',
          exponent: 6
        }],
      base: 'ibc/1F0A323AFD38B9A13AEA18AAE42826C959E7A4E979E0A169F655F85D8C776AF9',
      name: 'qcMNTA',
      display: 'qcMNTA',
      symbol: 'qcMNTA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcmnta.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'ERIS Liquid Staked MNTA',
      denom_units: [{
          denom: 'ibc/B9FD997EAF8E344BF7C10321A88935F1F81AA9042D23760F86FEC632A71CEB22',
          exponent: 0,
          aliases: ['factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA']
        }, {
          denom: 'ampMNTA',
          exponent: 6
        }],
      base: 'ibc/B9FD997EAF8E344BF7C10321A88935F1F81AA9042D23760F86FEC632A71CEB22',
      name: 'ERIS Amplified MNTA',
      display: 'ampMNTA',
      symbol: 'ampMNTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/ampmnta.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The content house of Kujira',
      denom_units: [{
          denom: 'ibc/C028FE77CA255E176130B47CBA7A17AE8979A400ADFA83A6B0DEFA6AB013616F',
          exponent: 0,
          aliases: ['factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink']
        }, {
          denom: 'wink',
          exponent: 6
        }],
      base: 'ibc/C028FE77CA255E176130B47CBA7A17AE8979A400ADFA83A6B0DEFA6AB013616F',
      name: 'WINK',
      display: 'wink',
      symbol: 'WINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/wink.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Blend Token',
      denom_units: [{
          denom: 'ibc/DBAE68A5C6B1D6D7622359ED47CB37F52A6C00221EFA3D11926EFA17B0F6A83C',
          exponent: 0,
          aliases: ['factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend']
        }, {
          denom: 'blend',
          exponent: 6
        }],
      base: 'ibc/DBAE68A5C6B1D6D7622359ED47CB37F52A6C00221EFA3D11926EFA17B0F6A83C',
      name: 'BLEND',
      display: 'blend',
      symbol: 'BLEND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/blend.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Tether USDt on Kujira',
      denom_units: [{
          denom: 'ibc/25A0C0240FBF0698092F21F57435CA1D2658A4F674EFD09AF0CB6C91E1A1BE35',
          exponent: 0,
          aliases: ['ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/25A0C0240FBF0698092F21F57435CA1D2658A4F674EFD09AF0CB6C91E1A1BE35',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/20014F963CC9E6488B299622F87B60C6DE71632864859EC08B4753478DAB2BB8',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'The staking and governance token of Fuzion',
      denom_units: [{
          denom: 'ibc/BDF6FB51B01E229CCAEAB2602DC2A34F50ACA4E3A455D099D8FBB27458A3A729',
          exponent: 0,
          aliases: ['factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn']
        }, {
          denom: 'fuzn',
          exponent: 6
        }],
      base: 'ibc/BDF6FB51B01E229CCAEAB2602DC2A34F50ACA4E3A455D099D8FBB27458A3A729',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzion.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The receipt token of Fuzion',
      denom_units: [{
          denom: 'ibc/44025A63D98A40A1D4EA074609DCCA22B829A0D213BCF19645D60DC3A59B130B',
          exponent: 0,
          aliases: ['factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn']
        }, {
          denom: 'rfuzn',
          exponent: 6
        }],
      base: 'ibc/44025A63D98A40A1D4EA074609DCCA22B829A0D213BCF19645D60DC3A59B130B',
      name: 'Fuzion Receipt',
      display: 'rfuzn',
      symbol: 'rFUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuzionr.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The yield token of Fuzion',
      denom_units: [{
          denom: 'ibc/9C456B870321228105B766E2C45D24D16E6061DC485BFEB79C60601718B58E40',
          exponent: 0,
          aliases: ['factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn']
        }, {
          denom: 'yfuzn',
          exponent: 6
        }],
      base: 'ibc/9C456B870321228105B766E2C45D24D16E6061DC485BFEB79C60601718B58E40',
      name: 'Fuzion Yield',
      display: 'yfuzn',
      symbol: 'yFUZN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/fuziony.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Quark\'s auto-compounding FUZN derivative',
      denom_units: [{
          denom: 'ibc/0E3701934CAD0654915D90D9A4E3EFF2A0A94161DBA1452B890C4F2CB54BF2A0',
          exponent: 0,
          aliases: ['factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt']
        }, {
          denom: 'qcFUZN',
          exponent: 6
        }],
      base: 'ibc/0E3701934CAD0654915D90D9A4E3EFF2A0A94161DBA1452B890C4F2CB54BF2A0',
      name: 'qcFUZN',
      display: 'qcFUZN',
      symbol: 'qcFUZN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/qcfuzn.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [{
          denom: 'ibc/AFA03BBBF79AB3840169BCB43CBC1BC81C756288FAF9FA20F1655FF0DAE702FD',
          exponent: 0,
          aliases: ['factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      base: 'ibc/AFA03BBBF79AB3840169BCB43CBC1BC81C756288FAF9FA20F1655FF0DAE702FD',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      coingecko_id: 'unstake-fi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Local Money',
      denom_units: [{
          denom: 'ibc/5B48A5CD7CB8A4B47E55C97AF01D5116E2890DD139ADB3A21A6C36C9361A9719',
          exponent: 0,
          aliases: ['factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local']
        }, {
          denom: 'local',
          exponent: 6
        }],
      base: 'ibc/5B48A5CD7CB8A4B47E55C97AF01D5116E2890DD139ADB3A21A6C36C9361A9719',
      name: 'LOCAL',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/local.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'Food for whales',
      denom_units: [{
          denom: 'ibc/BB79F728E6124489C910C391EBC11491722E569428048FC7E3A3AF0C40D614B5',
          exponent: 0,
          aliases: ['factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk']
        }, {
          denom: 'PLNK',
          exponent: 6
        }],
      base: 'ibc/BB79F728E6124489C910C391EBC11491722E569428048FC7E3A3AF0C40D614B5',
      name: 'Plankton',
      display: 'PLNK',
      symbol: 'PLNK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/PLNK_drk.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BF65A83969E0E56F4F74BCD59C0D4781E6BD25E83F7F2AF87F7D4A6406746C3F',
          exponent: 0,
          aliases: ['ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3']
        }, {
          denom: 'sol',
          exponent: 8
        }],
      base: 'ibc/BF65A83969E0E56F4F74BCD59C0D4781E6BD25E83F7F2AF87F7D4A6406746C3F',
      name: 'Wormhole Solana',
      display: 'sol',
      symbol: 'whSOL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'gateway',
            base_denom: 'factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/21B389FE23ED91267992DF7E6AF12D38CB62BA0E7A210DC0A9DAA46A27511F76',
          exponent: 0,
          aliases: ['ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'ibc/21B389FE23ED91267992DF7E6AF12D38CB62BA0E7A210DC0A9DAA46A27511F76',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'evmos',
            base_denom: 'aevmos'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/0334A244BD734D490EF38B33E564C1610D6245D1B87DF69864645B9756CB2C30',
          exponent: 0,
          aliases: ['ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0334A244BD734D490EF38B33E564C1610D6245D1B87DF69864645B9756CB2C30',
      name: 'Axelar Wrapped AVAX',
      display: 'avax',
      symbol: 'wAVAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/E5BC704D48BDDEC158C17441B2FABDD3EE21C34EA4706AB251E3D8213E8EC70A',
          exponent: 0,
          aliases: ['ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E5BC704D48BDDEC158C17441B2FABDD3EE21C34EA4706AB251E3D8213E8EC70A',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/454CBC159466040669F041EF7DB897762A4771B1695385DB8819CB710127D688',
          exponent: 0,
          aliases: ['ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/454CBC159466040669F041EF7DB897762A4771B1695385DB8819CB710127D688',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/F7450C83B91FF86BCA7B541E3D18F066B8AF6BED308EC3F89785047789B3382C',
          exponent: 0,
          aliases: ['ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F7450C83B91FF86BCA7B541E3D18F066B8AF6BED308EC3F89785047789B3382C',
      name: 'Axelar USD Coin',
      display: 'usdc',
      symbol: 'axlUSDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/77C8A9EBD994BE6DF24DC303EC6A76466EEC279F9D5ED658895F36FD1A59503D',
          exponent: 0,
          aliases: ['ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/77C8A9EBD994BE6DF24DC303EC6A76466EEC279F9D5ED658895F36FD1A59503D',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'comdex',
            base_denom: 'ucmdx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/E45092707DC631933892E0C0BFC97D0EB07D9B5E35A62C935B2A28E9C6D54F35',
          exponent: 0,
          aliases: ['ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/E45092707DC631933892E0C0BFC97D0EB07D9B5E35A62C935B2A28E9C6D54F35',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'juno',
            base_denom: 'ujuno'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/6F46976C6D36E0A3036B4882020D44C5B89991AED7E5A93132B5A916AA501CEE',
          exponent: 0,
          aliases: ['ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6F46976C6D36E0A3036B4882020D44C5B89991AED7E5A93132B5A916AA501CEE',
      name: 'Axelar Wrapped Ether',
      display: 'weth',
      symbol: 'wETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/CFDAD73BCC1992E4C1A1E327080D9C4DB3405193D3CD5201685A29135FBD0DBB',
          exponent: 0,
          aliases: ['ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CFDAD73BCC1992E4C1A1E327080D9C4DB3405193D3CD5201685A29135FBD0DBB',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/D277B5D9AB37D75D09F9321E25D6E763BA3AA5DFE2BA7FAD8C3EE744A5863F84',
          exponent: 0,
          aliases: ['ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/D277B5D9AB37D75D09F9321E25D6E763BA3AA5DFE2BA7FAD8C3EE744A5863F84',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'luna',
            base_denom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/6316C656EA8A636D581C6C40DC94EE952FEB343C0D55FD24927DE0A188BE1458',
          exponent: 0,
          aliases: ['ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6316C656EA8A636D581C6C40DC94EE952FEB343C0D55FD24927DE0A188BE1458',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/5AFEBF93303C647BAF5C82C7D0288483397B125DCEA95234332E047E25474D20',
          exponent: 0,
          aliases: ['ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/5AFEBF93303C647BAF5C82C7D0288483397B125DCEA95234332E047E25474D20',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'scrt',
            base_denom: 'uscrt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/6EA7E8C84BF65F7AFF7DF0B42F5DCDEA19394F906686B9561C28F599DC58B0D0',
          exponent: 0,
          aliases: ['ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      type_asset: 'ics20',
      base: 'ibc/6EA7E8C84BF65F7AFF7DF0B42F5DCDEA19394F906686B9561C28F599DC58B0D0',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'ibc/086C1B2E9E611F23D3C9159C858D3F4C6A911D348DFB916A11AE306A865A77A8',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      }
    },
    {
      description: 'BackBone Labs Liquid Staked KUJI',
      denom_units: [{
          denom: 'ibc/9E7A1DAAD4D1CEF4FC448BB293A00BFDD0A5ADC76B66E0F58844B32F5A6909F1',
          exponent: 0,
          aliases: ['factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji']
        }, {
          denom: 'bKUJI',
          exponent: 6
        }],
      base: 'ibc/9E7A1DAAD4D1CEF4FC448BB293A00BFDD0A5ADC76B66E0F58844B32F5A6909F1',
      name: 'BackBone Labs Liquid Staked KUJI',
      display: 'bKUJI',
      symbol: 'bKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bKUJI.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/bKUJI.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'factory/kujira15e8q5wzlk5k38gjxlhse3vu6vqnafysncx2ltexd6y9gx50vuj2qpt7dgv/boneKuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-49'
          }
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [{
          denom: 'ibc/D7977B210F7506F8C3CEA70E255E9F12068E8B111CDF13261CEE310496D98133',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/D7977B210F7506F8C3CEA70E255E9F12068E8B111CDF13261CEE310496D98133',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'ampWHALE',
      denom_units: [{
          denom: 'ibc/D83E989D0A18F6E794CCCFCCD6BD72166E8DC41AFE73C67F1E1E9370F593CFBD',
          exponent: 0,
          aliases: ['factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE']
        }, {
          denom: 'ampWHALE',
          exponent: 6
        }],
      base: 'ibc/D83E989D0A18F6E794CCCFCCD6BD72166E8DC41AFE73C67F1E1E9370F593CFBD',
      name: 'ampWHALE',
      display: 'ampWHALE',
      symbol: 'ampWHALE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ampwhale.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked WHALE',
      denom_units: [{
          denom: 'ibc/8B171DB372AF3066A4060FD9872EE002EC7B9FA9DA4D30988389C28E41753179',
          exponent: 0,
          aliases: ['factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale']
        }, {
          denom: 'bWHALE',
          exponent: 6
        }],
      base: 'ibc/8B171DB372AF3066A4060FD9872EE002EC7B9FA9DA4D30988389C28E41753179',
      name: 'BackBone Labs Liquid Staked WHALE',
      display: 'bWHALE',
      symbol: 'bWHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/bWHALE.png'
        }],
      coingecko_id: 'backbone-labs-staked-whale',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'FABLE',
      denom_units: [{
          denom: 'ibc/707A99CEB0369EFCDD3D24ACF81E0BC2DD2E3229D4584773038D18EFC5D352B4',
          exponent: 0,
          aliases: ['factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable']
        }, {
          denom: 'fable',
          exponent: 6
        }],
      base: 'ibc/707A99CEB0369EFCDD3D24ACF81E0BC2DD2E3229D4584773038D18EFC5D352B4',
      name: 'FABLE',
      display: 'fable',
      symbol: 'FABLE',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/fable.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo18a9m9stu3dyvewwcq9qmp85euxqcvln5mefync/fable',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'boneLUNA are autocompounding LUNA tokens',
      denom_units: [{
          denom: 'ibc/5C8B4610BA82D8F168451BB13C1F80312FAEF8D91562FEFF31B8C9B36E64271C',
          exponent: 0,
          aliases: ['ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708']
        }, {
          denom: 'bluna',
          exponent: 6
        }],
      base: 'ibc/5C8B4610BA82D8F168451BB13C1F80312FAEF8D91562FEFF31B8C9B36E64271C',
      address: 'cw20:terra17aj4ty4sz4yhgm08na8drc0v03v2jwr3waxcqrwhajj729zhl7zqnpc0ml',
      type_asset: 'ics20',
      name: 'boneLuna',
      display: 'bluna',
      symbol: 'bLUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ibc/40C29143BF4153B365089E40E437B7AA819672646C45BB0A5F1E10915A0B6708',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/boneluna.png'
        }]
    },
    {
      description: 'RAC',
      denom_units: [{
          denom: 'ibc/5ECB1F0AFFAF3BEA01FCAD19D53EBF30DABF98717D745458BCE4EEB49A804B0E',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac']
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      base: 'ibc/5ECB1F0AFFAF3BEA01FCAD19D53EBF30DABF98717D745458BCE4EEB49A804B0E',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/urac',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'ASH',
      denom_units: [{
          denom: 'ibc/0A90395BB72A99A9A9AAF19A8F6DF0DB2739F27FEB31A71E69252F5BBA7C7239',
          exponent: 0,
          aliases: ['factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash']
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      base: 'ibc/0A90395BB72A99A9A9AAF19A8F6DF0DB2739F27FEB31A71E69252F5BBA7C7239',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1erul6xyq0gk6ws98ncj7lnq9l4jn4gnnu9we73gdz78yyl2lr7qqrvcgup/ash',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'Tether USDt on Migaloo',
      denom_units: [{
          denom: 'ibc/B7910C670595E9B03C89917E1358A02C3DFF2AF965BA99C1DF29A70A415EF1D7',
          exponent: 0,
          aliases: ['ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B7910C670595E9B03C89917E1358A02C3DFF2AF965BA99C1DF29A70A415EF1D7',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ibc/86A25A8A327164AE7C68A29B6ED745C7EEDC36E260A6666F33A6407BECEC4737',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      description: 'GUPPY',
      denom_units: [{
          denom: 'ibc/AD3B81E8B9A289CAD44DA2EF3C9A5C9B4DE7DBD091FED59572C9F08331F5DC36',
          exponent: 0,
          aliases: ['factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy']
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      base: 'ibc/AD3B81E8B9A289CAD44DA2EF3C9A5C9B4DE7DBD091FED59572C9F08331F5DC36',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1etlu2h30tjvv8rfa4fwdc43c92f6ul5w9acxzk/uguppy',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'OPHIR is a Cosmos Treasury DAO established on Migaloo.',
      denom_units: [{
          denom: 'ibc/24F64519B2224D9CD5D3FEE19C6B95B3EE9471999DF397E627C1109335FE0F2A',
          exponent: 0,
          aliases: ['factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir']
        }, {
          denom: 'OPHIR',
          exponent: 6
        }],
      base: 'ibc/24F64519B2224D9CD5D3FEE19C6B95B3EE9471999DF397E627C1109335FE0F2A',
      name: 'OPHIR',
      display: 'OPHIR',
      symbol: 'OPHIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ophir.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1t862qdu9mj5hr3j727247acypym3ej47axu22rrapm4tqlcpuseqltxwq5/ophir',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [{
          denom: 'ibc/03CC382B7805F4DE62BE1C165FDB77CC857D94F66183F0224FDA6793794AB0F4',
          exponent: 0,
          aliases: ['factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark']
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      base: 'ibc/03CC382B7805F4DE62BE1C165FDB77CC857D94F66183F0224FDA6793794AB0F4',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1eqntnl6tzcj9h86psg4y4h6hh05g2h9nj8e09l/shark',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'lsdSHARK is the liquid staking derivative of SHARK.',
      denom_units: [{
          denom: 'ibc/D1DFD2F5EDC1179157E191649A8C00FC5BE8094F80ACEDF50BDE640CE54C223E',
          exponent: 0,
          aliases: ['factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK']
        }, {
          denom: 'lsdSHARK',
          exponent: 6
        }],
      base: 'ibc/D1DFD2F5EDC1179157E191649A8C00FC5BE8094F80ACEDF50BDE640CE54C223E',
      name: 'lsdSHARK',
      display: 'lsdSHARK',
      symbol: 'lsdSHARK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1p3aj9f09d7c4jxhgue0hpdpw370j6gzc59nxxx6l8d0gc9f9rfwsdwetus/lsdSHARK',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/lsdshark.png'
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/3A13755522E6DB3BCB5B70FB0097813D2E0CFD47ED412E011E86422971983767',
          exponent: 0,
          aliases: ['ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/3A13755522E6DB3BCB5B70FB0097813D2E0CFD47ED412E011E86422971983767',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ibc/4627AD2524E3E0523047E35BB76CC90E37D9D57ACF14F0FCBCEB2480705F3CB8',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      }
    },
    {
      description: 'Rakoff Token',
      denom_units: [{
          denom: 'ibc/2AD9CCC8913E8289D80CBDF03B059E016A55669EA0A2ED438CFA84A0F5C80F4E',
          exponent: 0,
          aliases: ['ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018']
        }, {
          denom: 'Rakoff',
          exponent: 6
        }],
      base: 'ibc/2AD9CCC8913E8289D80CBDF03B059E016A55669EA0A2ED438CFA84A0F5C80F4E',
      type_asset: 'ics20',
      name: 'Rakoff',
      display: 'Rakoff',
      symbol: 'RAKOFF',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'ibc/44C29C91F202E20C8E28DFB1FA89B725C54171CD77B8948836C72E7A97E4A018',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png'
      },
      images: [{
          image_sync: {
            chain_name: 'terra',
            base_denom: 'cw20:terra1vhgq25vwuhdhn9xjll0rhl2s67jzw78a4g2t78y5kz89q9lsdskq2pxcj2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rakoff.png'
        }]
    },
    {
      description: 'GASH',
      denom_units: [{
          denom: 'ibc/E641C71CA048F4DED8FD34E3EB3AB3E218400E7B63C8FD7A53136283C50A13A0',
          exponent: 0,
          aliases: ['factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash']
        }, {
          denom: 'gash',
          exponent: 6
        }],
      base: 'ibc/E641C71CA048F4DED8FD34E3EB3AB3E218400E7B63C8FD7A53136283C50A13A0',
      name: 'GASH',
      display: 'gash',
      symbol: 'GASH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/gash.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-69',
            base_denom: 'factory/migaloo1r9x8fz4alekzr78k42rpmr9unpa7egsldpqeynmwl2nfvzexue9sn8l5rg/gash',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-269'
          }
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/0F78E9BB57967216988AAE26A301792CDBE488DDA321D6FB7337373F35BF0B20',
          exponent: 0,
          aliases: ['untrn']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'ibc/0F78E9BB57967216988AAE26A301792CDBE488DDA321D6FB7337373F35BF0B20',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'untrn',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [{
          denom: 'ibc/6F94690935F6CD59D036F65920C53E1B6B08DBBEB392895F9C887D2BEF5502F0',
          exponent: 0,
          aliases: ['ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6F94690935F6CD59D036F65920C53E1B6B08DBBEB392895F9C887D2BEF5502F0',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [{
          denom: 'ibc/20AC58EF730B472F649E035C329E5C18EC9000D6C2764D6DBEDC90E5223999D6',
          exponent: 0,
          aliases: ['ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/20AC58EF730B472F649E035C329E5C18EC9000D6C2764D6DBEDC90E5223999D6',
      name: 'IBC usdc',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      description: 'Tia on Neutron',
      denom_units: [{
          denom: 'ibc/EC10CD46515EBAE856CDA1ACCE999C81A08B452467D4835298C40DF7C458FE87',
          exponent: 0,
          aliases: ['ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EC10CD46515EBAE856CDA1ACCE999C81A08B452467D4835298C40DF7C458FE87',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [{
          denom: 'ibc/2BED009158E1877006163A0348461FFB745A163F3EC6768317062862D181FDF9',
          exponent: 0,
          aliases: ['factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe']
        }, {
          denom: 'ASTROPEPE',
          exponent: 6
        }],
      base: 'ibc/2BED009158E1877006163A0348461FFB745A163F3EC6768317062862D181FDF9',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [{
          denom: 'ibc/E655D23D7622663774BAD4A01353C7940BB3FC68A4B8DD3DCA524AD3C62CE694',
          exponent: 0,
          aliases: ['factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH']
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      base: 'ibc/E655D23D7622663774BAD4A01353C7940BB3FC68A4B8DD3DCA524AD3C62CE694',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'NBTC on Neutron',
      denom_units: [{
          denom: 'ibc/5337BC09A219FAE4013C5F805338B0FAD648644CE19D6B9FA7345F730BFC5004',
          exponent: 0,
          aliases: ['ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920']
        }, {
          denom: 'sat',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/5337BC09A219FAE4013C5F805338B0FAD648644CE19D6B9FA7345F730BFC5004',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      }
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [{
          denom: 'ibc/99F1686F85F6CDBE98AB78A2FA23DBC766C1DEDBA940E7436D1A87ACD343DE49',
          exponent: 0,
          aliases: ['ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/99F1686F85F6CDBE98AB78A2FA23DBC766C1DEDBA940E7436D1A87ACD343DE49',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [{
          denom: 'ibc/AA196F9D04AAF87CD0C205B9483710554FA827D4F02D897673D8D7C1F488E5D7',
          exponent: 0,
          aliases: ['factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      base: 'ibc/AA196F9D04AAF87CD0C205B9483710554FA827D4F02D897673D8D7C1F488E5D7',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      coingecko_id: 'newt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'ASTRO on Neutron',
      denom_units: [{
          denom: 'ibc/EA15263B0F4B1329491667896976B092E5BDB41AAEF51B90A735022452CE7ABD',
          exponent: 0,
          aliases: ['ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EA15263B0F4B1329491667896976B092E5BDB41AAEF51B90A735022452CE7ABD',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'terra2',
            base_denom: 'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
      }
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denom_units: [{
          denom: 'ibc/9EB378C0F18C9E3451C37E06A97FC5E234FE89F717B9E1C7AB16155EC2BA59CA',
          exponent: 0,
          aliases: ['factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi']
        }, {
          denom: 'corgi',
          exponent: 6
        }],
      base: 'ibc/9EB378C0F18C9E3451C37E06A97FC5E234FE89F717B9E1C7AB16155EC2BA59CA',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [{
          denom: 'ibc/70044424C45DF7F831E12787B21AD8A9636FFF9B52474DCDA7907911F33FAEF2',
          exponent: 0,
          aliases: ['factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      base: 'ibc/70044424C45DF7F831E12787B21AD8A9636FFF9B52474DCDA7907911F33FAEF2',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'Jimmy Neutron Finance',
      denom_units: [{
          denom: 'ibc/7E41BEBB5B7581DC723E92AFDAB9DBAD079B7A8A3AE0083828236B75807D9D18',
          exponent: 0,
          aliases: ['factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY']
        }, {
          denom: 'jimmy',
          exponent: 6
        }],
      base: 'ibc/7E41BEBB5B7581DC723E92AFDAB9DBAD079B7A8A3AE0083828236B75807D9D18',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [{
          denom: 'ibc/7FC1E7E7E74645C70C636BCA925C29849BAD8AE4F3D2FD1B70F9542CB9A854D4',
          exponent: 0,
          aliases: ['factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      base: 'ibc/7FC1E7E7E74645C70C636BCA925C29849BAD8AE4F3D2FD1B70F9542CB9A854D4',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [{
          denom: 'ibc/E72B90C25696EF3401D8A556200C89D790160125299619F7B84AA2E8CF36150C',
          exponent: 0,
          aliases: ['neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj']
        }, {
          denom: 'bitcosmos',
          exponent: 6
        }],
      base: 'ibc/E72B90C25696EF3401D8A556200C89D790160125299619F7B84AA2E8CF36150C',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'What the Fuck',
      denom_units: [{
          denom: 'ibc/369CCE6DC4008F5AD750AF6570A3F9CBE0CBDF57C75136A779FB0FAF10ADF140',
          exponent: 0,
          aliases: ['neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf']
        }, {
          denom: 'wtf',
          exponent: 6
        }],
      base: 'ibc/369CCE6DC4008F5AD750AF6570A3F9CBE0CBDF57C75136A779FB0FAF10ADF140',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'NLS on Neutron',
      denom_units: [{
          denom: 'ibc/255E694AA88CC50290E7A4E9221DA990D0309E0EE03DCD0FBB2B5F63B6FB4E5D',
          exponent: 0,
          aliases: ['ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/255E694AA88CC50290E7A4E9221DA990D0309E0EE03DCD0FBB2B5F63B6FB4E5D',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      }
    },
    {
      description: 'A Mechanical Canine',
      denom_units: [{
          denom: 'ibc/179BE06DC6F165E91E7BDA9218FF80BAC2870F81CDCA3A1B987E4FAF74799344',
          exponent: 0,
          aliases: ['factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard']
        }, {
          denom: 'goddard',
          exponent: 6
        }],
      base: 'ibc/179BE06DC6F165E91E7BDA9218FF80BAC2870F81CDCA3A1B987E4FAF74799344',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [{
          denom: 'ibc/8D1203C7ADC5C9976C7978F9F69357374CE9E47ED451EB43F14C69228AAF8E63',
          exponent: 0,
          aliases: ['factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      base: 'ibc/8D1203C7ADC5C9976C7978F9F69357374CE9E47ED451EB43F14C69228AAF8E63',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'NEWTROLL',
      denom_units: [{
          denom: 'ibc/76CD7981BA052EF8285580023F6668A22942BD4B6DDA2058A4F49A821D877F58',
          exponent: 0,
          aliases: ['factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll']
        }, {
          denom: 'newtroll',
          exponent: 6
        }],
      base: 'ibc/76CD7981BA052EF8285580023F6668A22942BD4B6DDA2058A4F49A821D877F58',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'Retro Game',
      denom_units: [{
          denom: 'ibc/C2220E7F328A58878ADAA977D6A42D3F976E166321C946735AA52A98405895D8',
          exponent: 0,
          aliases: ['factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro']
        }, {
          denom: 'retro',
          exponent: 6
        }],
      base: 'ibc/C2220E7F328A58878ADAA977D6A42D3F976E166321C946735AA52A98405895D8',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'THE FIRST NATIVE GODDARD MEMECOIN ON NEUTRON',
      denom_units: [{
          denom: 'ibc/26ED945DDA346961FF63FD41B8F55B7A428981E51F5684931E969AB16AD2258A',
          exponent: 0,
          aliases: ['factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD']
        }, {
          denom: 'goddard',
          exponent: 6
        }],
      base: 'ibc/26ED945DDA346961FF63FD41B8F55B7A428981E51F5684931E969AB16AD2258A',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODDARD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [{
          denom: 'ibc/38B1AAA3D4BBA13B777E842692205D6F49951026820B214877EBA9EF59825EE7',
          exponent: 0,
          aliases: ['ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958']
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/38B1AAA3D4BBA13B777E842692205D6F49951026820B214877EBA9EF59825EE7',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'Astro BOY',
      denom_units: [{
          denom: 'ibc/E8B8FF02222B78A68158BB881DEEB250CD9268D013A8B9C951540A114CB633D0',
          exponent: 0,
          aliases: ['neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv']
        }, {
          denom: 'boy',
          exponent: 6
        }],
      base: 'ibc/E8B8FF02222B78A68158BB881DEEB250CD9268D013A8B9C951540A114CB633D0',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denom_units: [{
          denom: 'ibc/41373521B7997A8ADCDCD521D5A5503422C3BE52E142A773BFAB72242CBA938F',
          exponent: 0,
          aliases: ['ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8']
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/41373521B7997A8ADCDCD521D5A5503422C3BE52E142A773BFAB72242CBA938F',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'Reflections of cartel activity on Cosmos.',
      denom_units: [{
          denom: 'ibc/1FFF315BED705DD6E8DE62E8ACD193F83AB5095F4A9374D1942F0332F78CF9F2',
          exponent: 0,
          aliases: ['factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel']
        }, {
          denom: 'cartel',
          exponent: 6
        }],
      base: 'ibc/1FFF315BED705DD6E8DE62E8ACD193F83AB5095F4A9374D1942F0332F78CF9F2',
      name: 'cartel',
      display: 'cartel',
      symbol: 'CARTEL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denom_units: [{
          denom: 'ibc/E51F80B02A33D49C903568849ED3654D9B7562B97A3A4FCFAB9511036421C78B',
          exponent: 0,
          aliases: ['factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG']
        }, {
          denom: 'ATOM1KLFG',
          exponent: 6
        }],
      base: 'ibc/E51F80B02A33D49C903568849ED3654D9B7562B97A3A4FCFAB9511036421C78B',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
            chain_name: 'neutron'
          },
          chain: {
            channel_id: 'channel-191'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/04CC6708D38018958971BD928783B4FDD0C697A2EAE5F56C306A29B66C529703',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/04CC6708D38018958971BD928783B4FDD0C697A2EAE5F56C306A29B66C529703',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/9C40A8368C0E1CAA4144DBDEBBCE2E7A5CC2D128F0A9F785ECB71ECFF575114C',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/9C40A8368C0E1CAA4144DBDEBBCE2E7A5CC2D128F0A9F785ECB71ECFF575114C',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }]
    },
    {
      description: 'ATOM token on Noble',
      denom_units: [{
          denom: 'ibc/FA9E98C8FB19F6B7BB9D9D906F95772E309D26FE1A6BF132F819D1B831F84456',
          exponent: 0,
          aliases: ['ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0']
        }, {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }],
      type_asset: 'ics20',
      base: 'ibc/FA9E98C8FB19F6B7BB9D9D906F95772E309D26FE1A6BF132F819D1B831F84456',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'USD Coin',
      denom_units: [{
          denom: 'ibc/4A1C18CA7F50544760CF306189B810CE4C1CB156C7FC870143D401FE7280E591',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      base: 'ibc/4A1C18CA7F50544760CF306189B810CE4C1CB156C7FC870143D401FE7280E591',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uusdc',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-204'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/0F181D9F5BB18A8496153C1666E934169515592C135E8E9FCCC355889858EAF9',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/0F181D9F5BB18A8496153C1666E934169515592C135E8E9FCCC355889858EAF9',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-137'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Circle\'s stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
          exponent: 0,
          aliases: ['ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7FBDBEEEBA9C50C4BCDF7BF438EAB99E64360833D240B32655C96E319559E911',
      name: 'USD Coin (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }]
    },
    {
      description: 'Ethereum (ETH) is a decentralized, open-source blockchain system featuring smart contract functionality. It\'s the native cryptocurrency of the Ethereum platform, often regarded as the second most popular digital currency after Bitcoin. Ethereum was proposed in late 2013 and development was crowdfunded in 2014, leading to its network going live on 30 July 2015.\n\nETH, as a digital currency, is used for a variety of purposes within the Ethereum ecosystem, including the execution of decentralized smart contracts and as a mode of payment. Unlike Bitcoin, Ethereum was designed to be a platform for applications that can operate without the need for intermediaries, using blockchain technology. This has made Ethereum a leading platform for various applications, including decentralized finance (DeFi), non-fungible tokens (NFTs), and more. Ethereum is constantly evolving, with a significant upgrade termed Ethereum 2.0, which aims to improve its scalability, security, and sustainability.',
      denom_units: [{
          denom: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
          exponent: 0,
          aliases: ['ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5']
        }, {
          denom: 'weth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A7C4A3FB19E88ABE60416125F9189DA680800F4CDD14E3C10C874E022BEFF04C',
      name: 'Ether',
      display: 'weth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }]
    },
    {
      description: 'Wrapped Bitcoin on Axelar',
      denom_units: [{
          denom: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
          exponent: 0,
          aliases: ['ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/84E70F4A34FB2DE135FD3A04FDDF53B7DA4206080AA785C8BAB7F8B26299A221',
      name: 'Wrapped Bitcoin (Axelar)',
      display: 'wbtc',
      symbol: 'WBTC.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.axl.svg'
        }, {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'wbtc-satoshi'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png'
        }]
    },
    {
      description: 'Tether\'s USD stablecoin on Axelar',
      denom_units: [{
          denom: 'ibc/2CB7467E9AF4AEC7EC0706269E23E11B1D50EA23C64B2EC2C3937F5EF6185CCC',
          exponent: 0,
          aliases: ['ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2CB7467E9AF4AEC7EC0706269E23E11B1D50EA23C64B2EC2C3937F5EF6185CCC',
      name: 'Tether USD (Axelar)',
      display: 'usdt',
      symbol: 'USDT.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.axl.svg'
        }]
    },
    {
      description: 'Multi-Collateral Dai, brings a lot of new and exciting features, such as support for new CDP collateral types and Dai Savings Rate.',
      denom_units: [{
          denom: 'ibc/5E1B666582442618E07B3678DB72825E9BEB85F93A4E69CFD6968614E36EB09D',
          exponent: 0,
          aliases: ['ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5E1B666582442618E07B3678DB72825E9BEB85F93A4E69CFD6968614E36EB09D',
      name: 'Dai Stablecoin',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }]
    },
    {
      description: 'Binance USD (BUSD) is a dollar-backed stablecoin issued and custodied by Paxos Trust Company, and regulated by the New York State Department of Financial Services. BUSD is available directly for sale 1:1 with USD on Paxos.com and will be listed for trading on Binance.',
      denom_units: [{
          denom: 'ibc/AD6BB6FE1EBE50CE2274D05FD0E4ACDB9B822EDF50EA4574EAB1F13823FBD7F7',
          exponent: 0,
          aliases: ['ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D']
        }, {
          denom: 'busd',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/AD6BB6FE1EBE50CE2274D05FD0E4ACDB9B822EDF50EA4574EAB1F13823FBD7F7',
      name: 'Binance USD',
      display: 'busd',
      symbol: 'BUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6329DD8CF31A334DD5BE3F68C846C9FE313281362B37686A62343BAC1EB1546D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/busd.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
          exponent: 0,
          aliases: ['ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6CDD4663F2F09CD62285E2D45891FC149A3568E316CE3EBBE201A71A78A69388',
      name: 'Cosmos Hub',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    },
    {
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denom_units: [{
          denom: 'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
          exponent: 0,
          aliases: ['ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1']
        }, {
          denom: 'cro',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/E1BCC0F7B932E654B1A930F72B76C0678D55095387E2A4D8F00E941A8F82EE48',
      name: 'Cronos POS Chain',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'cryptoorgchain',
            base_denom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }]
    },
    {
      description: 'BNB powers the BNB Chain ecosystem and is the native coin of the BNB Beacon Chain and BNB Smart Chain.',
      denom_units: [{
          denom: 'ibc/FC53995E0C27D5C89150ED03BDB5792BF065DEE2A431AA25D16B27036A1ECD5A',
          exponent: 0,
          aliases: ['ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D']
        }, {
          denom: 'wbnb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/FC53995E0C27D5C89150ED03BDB5792BF065DEE2A431AA25D16B27036A1ECD5A',
      name: 'Binance Coin',
      display: 'wbnb',
      symbol: 'BNB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F4A070A6D78496D53127EA85C094A9EC87DFC1F36071B8CCDDBD020F933D213D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/bnb.svg'
        }]
    },
    {
      description: 'Polygon (formerly Matic) Network brings massive scale to Ethereum using an adapted version of Plasma with PoS based side chains. Polygon is a well-structured, easy-to-use platform for Ethereum scaling and infrastructure development.',
      denom_units: [{
          denom: 'ibc/631B0CB59966C11892C90E71DCC88192F708FC7A153BA68AA283F3BD0E5D5F8E',
          exponent: 0,
          aliases: ['ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB']
        }, {
          denom: 'wmatic',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/631B0CB59966C11892C90E71DCC88192F708FC7A153BA68AA283F3BD0E5D5F8E',
      name: 'Polygon',
      display: 'wmatic',
      symbol: 'MATIC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/matic-purple.svg'
        }]
    },
    {
      description: 'AVAX is the native token of Avalanche. It is a hard-capped, scarce asset that is used to pay for fees, secure the platform through staking, and provide a basic unit of account between the multiple subnets created on Avalanche.',
      denom_units: [{
          denom: 'ibc/012D558C43153942D6D0926F3BFA083D9717A1D74DCCDFFFA1E1B41ED8873B73',
          exponent: 0,
          aliases: ['ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373']
        }, {
          denom: 'avax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/012D558C43153942D6D0926F3BFA083D9717A1D74DCCDFFFA1E1B41ED8873B73',
      name: 'Avalanche',
      display: 'avax',
      symbol: 'AVAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6F62F01D913E3FFE472A38C78235B8F021B511BC6596ADFF02615C8F83D3B373',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/avax.svg'
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/4128D5DDF2EF8776B5C704C3153E1CBEC5DABC04DB0CC6221EDCC342EB04779C',
          exponent: 0,
          aliases: ['ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/4128D5DDF2EF8776B5C704C3153E1CBEC5DABC04DB0CC6221EDCC342EB04779C',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
          exponent: 0,
          aliases: ['ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4F3E83AB35529435E4BFEA001F5D935E7250133347C4E1010A9C77149EF0394C',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
        }]
    },
    {
      description: 'Wrapped Polkadot on Axelar',
      denom_units: [{
          denom: 'ibc/52E919F9B5BAA17A48892BFE2B1E28D1962556E587371966A0D36E97B410C443',
          exponent: 0,
          aliases: ['ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/52E919F9B5BAA17A48892BFE2B1E28D1962556E587371966A0D36E97B410C443',
      name: 'Wrapped Polkadot (Axelar)',
      display: 'dot',
      symbol: 'DOT.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dot.axl.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [{
          denom: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
          exponent: 0,
          aliases: ['ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A']
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A59A9C955F1AB8B76671B00C1A0482C64A6590352944BB5880E5122358F7E1CE',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }]
    },
    {
      description: 'The native staking and governance token of Kava',
      denom_units: [{
          denom: 'ibc/2B94FEE34352B0065FB1F2AADD5BA27BC4C3F03E09EB292EB4B83357D6C3BB15',
          exponent: 0,
          aliases: ['ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205']
        }, {
          denom: 'kava',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2B94FEE34352B0065FB1F2AADD5BA27BC4C3F03E09EB292EB4B83357D6C3BB15',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
          exponent: 0,
          aliases: ['ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EA00FFF0335B07B5CD1530B7EB3D2C710620AE5B168C71AFF7B50532D690E107',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/312F13C9A9ECCE611FE8112B5ABCF0A14DE2C3937E38DEBF6B73F2534A83464E',
          exponent: 0,
          aliases: ['ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/312F13C9A9ECCE611FE8112B5ABCF0A14DE2C3937E38DEBF6B73F2534A83464E',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
          exponent: 0,
          aliases: ['ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/11E3CF372E065ACB1A39C531A3C7E7E03F60B5D0653AD2139D31128ACD2772B5',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [{
          denom: 'ibc/297C9DA1EB9A64082E6D79F02055BB98ECB1554FD993315447C209F74D1D2040',
          exponent: 0,
          aliases: ['ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/297C9DA1EB9A64082E6D79F02055BB98ECB1554FD993315447C209F74D1D2040',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/C8E5515A75654FECCC11BF8D412DD5D0FD4625112E9CECBB918C17D3420D1EC4',
          exponent: 0,
          aliases: ['ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C8E5515A75654FECCC11BF8D412DD5D0FD4625112E9CECBB918C17D3420D1EC4',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets. Stakers of PoS tokens can stake their assets while maintaining the liquidity of these assets. Users earn staking rewards + receive 1:1 pegged staked representative tokens which can be used to generate additional yield.',
      denom_units: [{
          denom: 'ibc/543B2D94FE9A137AB49F2E5E72B73278CEB0D58790A2B904DF94A9322BCFD95F',
          exponent: 0,
          aliases: ['ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961']
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/543B2D94FE9A137AB49F2E5E72B73278CEB0D58790A2B904DF94A9322BCFD95F',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }],
      keywords: ['canon']
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
          exponent: 0,
          aliases: ['ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/ADC63C00000CA75F909D2BE3ACB5A9980BED3A73B92746E0FCE6C67414055459',
      name: 'Akash',
      display: 'akt',
      symbol: 'AKT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }]
    },
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [{
          denom: 'ibc/D418F8D0A37E1432257C236E794CAB2F2F20D4CF55C31A5E265C38A12FA5DDDB',
          exponent: 0,
          aliases: ['ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076']
        }, {
          denom: 'regen',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D418F8D0A37E1432257C236E794CAB2F2F20D4CF55C31A5E265C38A12FA5DDDB',
      name: 'Regen',
      display: 'regen',
      symbol: 'REGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
        }]
    },
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [{
          denom: 'ibc/E22CD281FE68D946539C2CB144FF6EFD4ECE273E7D65FABB8DF971DDBDE8840C',
          exponent: 0,
          aliases: ['ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84']
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E22CD281FE68D946539C2CB144FF6EFD4ECE273E7D65FABB8DF971DDBDE8840C',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }]
    },
    {
      description: 'The IRIS token is the native governance token for the IrisNet chain.',
      denom_units: [{
          denom: 'ibc/E605FC2E6FA2ADBCD1F18A6F38A8A7B78D95E153FB264903547F7D864BAA63A3',
          exponent: 0,
          aliases: ['ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0']
        }, {
          denom: 'iris',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E605FC2E6FA2ADBCD1F18A6F38A8A7B78D95E153FB264903547F7D864BAA63A3',
      name: 'IRISnet',
      display: 'iris',
      symbol: 'IRIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
        }]
    },
    {
      description: 'IOV coin is the token for the Starname (IOV) Asset Name Service',
      denom_units: [{
          denom: 'ibc/2EE34CCEA1790C5561291891B23A7434E8CFD15D1ECC031E2AA5C76C999BBE36',
          exponent: 0,
          aliases: ['ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC']
        }, {
          denom: 'iov',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2EE34CCEA1790C5561291891B23A7434E8CFD15D1ECC031E2AA5C76C999BBE36',
      name: 'Starname',
      display: 'iov',
      symbol: 'IOV',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/F64A33B775D526E2E174F9199A2588C95524BC045AF5844C6D65D573DB181151',
          exponent: 0,
          aliases: ['ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F64A33B775D526E2E174F9199A2588C95524BC045AF5844C6D65D573DB181151',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/D293BD3B54F89DCD2DCFE7E8EE00CA3BF7FBA9495A792CB05881CAEFB8A65030',
          exponent: 0,
          aliases: ['ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D293BD3B54F89DCD2DCFE7E8EE00CA3BF7FBA9495A792CB05881CAEFB8A65030',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }]
    },
    {
      description: 'LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.',
      denom_units: [{
          denom: 'ibc/1D182135D443B4660357A43C8EFEF3DC0C6FEC9F3336724E1081526156D0F3BC',
          exponent: 0,
          aliases: ['ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525']
        }, {
          denom: 'like',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/1D182135D443B4660357A43C8EFEF3DC0C6FEC9F3336724E1081526156D0F3BC',
      name: 'LikeCoin',
      display: 'like',
      symbol: 'LIKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg'
        }]
    },
    {
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'ibc/F50F1BAEB89A5FFF662C91EC99AC69331EDAFB1901D52405D93870EB73BFB7CC',
          exponent: 0,
          aliases: ['ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B']
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F50F1BAEB89A5FFF662C91EC99AC69331EDAFB1901D52405D93870EB73BFB7CC',
      name: 'ixo',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/DE7D558D3A072554A9DFFBFFED1EA3E475CDBAF1E177FA4656F4753A84A6AEBC',
          exponent: 0,
          aliases: ['ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DE7D558D3A072554A9DFFBFFED1EA3E475CDBAF1E177FA4656F4753A84A6AEBC',
      name: 'BitCanna',
      display: 'bcna',
      symbol: 'BCNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/1176840405B310B46F80F9550D1E9040E9D3D5EF825461E8AC4076D051EA20ED',
          exponent: 0,
          aliases: ['ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1176840405B310B46F80F9550D1E9040E9D3D5EF825461E8AC4076D051EA20ED',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }]
    },
    {
      description: 'The native token of Ki Chain',
      denom_units: [{
          denom: 'ibc/9167D1164E9ADD09EE5B6EB5DB645C950EE6A7DB049C7764D14E3C8D16C8F9B0',
          exponent: 0,
          aliases: ['ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E']
        }, {
          denom: 'xki',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9167D1164E9ADD09EE5B6EB5DB645C950EE6A7DB049C7764D14E3C8D16C8F9B0',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
        }]
    },
    {
      description: 'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [{
          denom: 'ibc/6A4E8E4315ABA3D70C0B97DBC6B2BE09445FEA1E07CF5E1353EE9258AC9159DF',
          exponent: 0,
          aliases: ['ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB']
        }, {
          denom: 'med',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6A4E8E4315ABA3D70C0B97DBC6B2BE09445FEA1E07CF5E1353EE9258AC9159DF',
      name: 'Medibloc',
      display: 'med',
      symbol: 'MED',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg'
        }]
    },
    {
      description: 'The staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/99F7D89E2D319C6DD9B2CFD6D28443F08F2C8D43CD78A7EABD0478441560AE46',
          exponent: 0,
          aliases: ['ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4']
        }],
      type_asset: 'ics20',
      base: 'ibc/99F7D89E2D319C6DD9B2CFD6D28443F08F2C8D43CD78A7EABD0478441560AE46',
      name: 'bostrom',
      display: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
      symbol: 'BOOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/36F531CC3E89DF43E5C8B0F54C7DB451D683B93A3A619535DE04B1B1FF280027',
          exponent: 0,
          aliases: ['ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/36F531CC3E89DF43E5C8B0F54C7DB451D683B93A3A619535DE04B1B1FF280027',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }]
    },
    {
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ibc/BCD730EF99878074FC4B17953CFDAF00C4A90EE131C4880AA4D13AA103CC17B6',
          exponent: 0,
          aliases: ['ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA']
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/BCD730EF99878074FC4B17953CFDAF00C4A90EE131C4880AA4D13AA103CC17B6',
      name: 'Cheqd',
      display: 'cheq',
      symbol: 'CHEQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg'
        }]
    },
    {
      description: 'Native token of the Lum Network',
      denom_units: [{
          denom: 'ibc/7DE942C445BB39CDE5AD47C76BB713DA3EC3CE7D81E6A858774E87BC6AA618DD',
          exponent: 0,
          aliases: ['ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2']
        }, {
          denom: 'lum',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7DE942C445BB39CDE5AD47C76BB713DA3EC3CE7D81E6A858774E87BC6AA618DD',
      name: 'Lum Network',
      display: 'lum',
      symbol: 'LUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg'
        }]
    },
    {
      description: 'The native token of Vidulum',
      denom_units: [{
          denom: 'ibc/3E79211D9C8D5F0FB0A5FE0346739D5601A9BA688852676F19017EFD335A87A7',
          exponent: 0,
          aliases: ['ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/3E79211D9C8D5F0FB0A5FE0346739D5601A9BA688852676F19017EFD335A87A7',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }]
    },
    {
      description: 'The native token of Desmos',
      denom_units: [{
          denom: 'ibc/9008A06C6C1309016F1102D1A1C3EBD3B30694F9907F78086C43F23831CCB4F3',
          exponent: 0,
          aliases: ['ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C']
        }, {
          denom: 'dsm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9008A06C6C1309016F1102D1A1C3EBD3B30694F9907F78086C43F23831CCB4F3',
      name: 'Desmos',
      display: 'dsm',
      symbol: 'DSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [{
          denom: 'ibc/FA161FDACFFB8A4EB75393B68CE4D81E781A9E530C437A4CF581A2D954E6432D',
          exponent: 0,
          aliases: ['ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FA161FDACFFB8A4EB75393B68CE4D81E781A9E530C437A4CF581A2D954E6432D',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Somm Token (SOMM) is the native staking token of the Sommelier Chain',
      denom_units: [
        {
          denom: 'ibc/C80930149284D56D214B35E7A088944892A4F8A3E65297AD571AC5A0967D3614',
          exponent: 0,
          aliases: ['ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E']
        },
        {
          denom: 'msomm',
          exponent: 3,
          aliases: ['millisomm']
        },
        {
          denom: 'somm',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C80930149284D56D214B35E7A088944892A4F8A3E65297AD571AC5A0967D3614',
      name: 'Sommelier',
      display: 'somm',
      symbol: 'SOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
        }]
    },
    {
      description: 'The native token of BandChain',
      denom_units: [{
          denom: 'ibc/1A1DBCBEDD241F61712C3591E5694AF974926F8B5493BB3201457B9233409A66',
          exponent: 0,
          aliases: ['ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE']
        }, {
          denom: 'band',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1A1DBCBEDD241F61712C3591E5694AF974926F8B5493BB3201457B9233409A66',
      name: 'Band Protocol',
      display: 'band',
      symbol: 'BAND',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg'
        }]
    },
    {
      description: 'The native token of Konstellation Network',
      denom_units: [{
          denom: 'ibc/B7D8CF7BE4D82A74DFAC09498CF5A94984F83D3CABEE09C17642EA6F0B560E5F',
          exponent: 0,
          aliases: ['ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593']
        }, {
          denom: 'darc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B7D8CF7BE4D82A74DFAC09498CF5A94984F83D3CABEE09C17642EA6F0B560E5F',
      name: 'Konstellation',
      display: 'darc',
      symbol: 'DARC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg'
        }]
    },
    {
      description: 'The native token of Umee',
      denom_units: [{
          denom: 'ibc/D342CE2894D7B3C1082FAF18E3A670F141F1ADC989D230D5B3C8D1BBC4AE9EF2',
          exponent: 0,
          aliases: ['ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C']
        }, {
          denom: 'umee',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D342CE2894D7B3C1082FAF18E3A670F141F1ADC989D230D5B3C8D1BBC4AE9EF2',
      name: 'Umee',
      display: 'umee',
      symbol: 'UMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.svg'
        }]
    },
    {
      description: 'The native token of Gravity Bridge',
      denom_units: [{
          denom: 'ibc/8CDDBE338A09671760815DFB91F43E4E910E1E285FAD1B2A8DB62D2B0F62639A',
          exponent: 0,
          aliases: ['ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44']
        }, {
          denom: 'graviton',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8CDDBE338A09671760815DFB91F43E4E910E1E285FAD1B2A8DB62D2B0F62639A',
      name: 'Gravity Bridge',
      display: 'graviton',
      symbol: 'GRAV',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg'
        }]
    },
    {
      description: 'The native token of Decentr',
      denom_units: [{
          denom: 'ibc/6B0F37D98E7A52CDDAAD5E1EF08E50A233CF1B3D130A40FF57BAFF3273FB84DF',
          exponent: 0,
          aliases: ['ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84']
        }, {
          denom: 'dec',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6B0F37D98E7A52CDDAAD5E1EF08E50A233CF1B3D130A40FF57BAFF3273FB84DF',
      name: 'Decentr',
      display: 'dec',
      symbol: 'DEC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
        }]
    },
    {
      description: 'The native token cw20 for Marble DAO on Juno Chain',
      denom_units: [{
          denom: 'ibc/92D578E46C8D7D851230AD79A67FD0F861ACE4764ACCA84DE7F4A4011108B852',
          exponent: 0,
          aliases: ['ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6']
        }, {
          denom: 'marble',
          exponent: 3
        }],
      type_asset: 'ics20',
      base: 'ibc/92D578E46C8D7D851230AD79A67FD0F861ACE4764ACCA84DE7F4A4011108B852',
      name: 'Marble',
      display: 'marble',
      symbol: 'MARBLE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg'
        }]
    },
    {
      description: 'The native governance token of Carbon',
      denom_units: [{
          denom: 'ibc/2C6306C07778C5DA42F05B1FAC5400EEE101579DF977BA2CE5A15A8F12142B96',
          exponent: 0,
          aliases: ['ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3']
        }, {
          denom: 'dswth',
          exponent: 8,
          aliases: ['SWTH']
        }],
      type_asset: 'ics20',
      base: 'ibc/2C6306C07778C5DA42F05B1FAC5400EEE101579DF977BA2CE5A15A8F12142B96',
      name: 'Carbon',
      display: 'dswth',
      symbol: 'SWTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
        }]
    },
    {
      description: 'The native token of Cerberus Chain',
      denom_units: [{
          denom: 'ibc/71CEEB5CC09F75A3ACDC417108C14514351B6B2A540ACE9B37A80BF930845134',
          exponent: 0,
          aliases: ['ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7']
        }, {
          denom: 'crbrus',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/71CEEB5CC09F75A3ACDC417108C14514351B6B2A540ACE9B37A80BF930845134',
      name: 'Cerberus',
      display: 'crbrus',
      symbol: 'CRBRUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [{
          denom: 'ibc/3160BE7F2CD211E6E605D425E94336894C622C454BF3433274337EF71D85D98B',
          exponent: 0,
          aliases: ['ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447']
        }, {
          denom: 'fet',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/3160BE7F2CD211E6E605D425E94336894C622C454BF3433274337EF71D85D98B',
      name: 'Fetch.ai',
      display: 'fet',
      symbol: 'FET',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [{
          denom: 'ibc/792B4D7FAC332A1C35144D32754995B5C4A7D17786BD97C053E1E376FD808773',
          exponent: 0,
          aliases: ['ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/792B4D7FAC332A1C35144D32754995B5C4A7D17786BD97C053E1E376FD808773',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }]
    },
    {
      description: 'The native token cw20 for Neta on Juno Chain',
      denom_units: [{
          denom: 'ibc/ED0B535DB2F78A41628C6CE475305D7FD8AB04B6EA9ECEC3461416635133A364',
          exponent: 0,
          aliases: ['ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A']
        }, {
          denom: 'neta',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/ED0B535DB2F78A41628C6CE475305D7FD8AB04B6EA9ECEC3461416635133A364',
      name: 'Neta',
      display: 'neta',
      symbol: 'NETA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg'
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/4DE84C92C714009D07AFEA7350AB3EC383536BB0FAAD7AF9C0F1A0BEA169304E',
          exponent: 0,
          aliases: ['ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4DE84C92C714009D07AFEA7350AB3EC383536BB0FAAD7AF9C0F1A0BEA169304E',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/7B413D046BD2FC5C16012A33F584B9B478DF88AAE854CA75236D8846AF881C1F',
          exponent: 0,
          aliases: ['ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/7B413D046BD2FC5C16012A33F584B9B478DF88AAE854CA75236D8846AF881C1F',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }]
    },
    {
      description: 'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [{
          denom: 'ibc/9874E37C19E895EA202446AB8C8CB31325A36D86170840C4FF7677F4B9FD825C',
          exponent: 0,
          aliases: ['ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8']
        }, {
          denom: 'tick',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9874E37C19E895EA202446AB8C8CB31325A36D86170840C4FF7677F4B9FD825C',
      name: 'Microtick',
      display: 'tick',
      symbol: 'TICK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/6A7C79E7EF6A157202227051FBE6F75C80B00D9802CE3F09FC7F7B239330823D',
          exponent: 0,
          aliases: ['ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/6A7C79E7EF6A157202227051FBE6F75C80B00D9802CE3F09FC7F7B239330823D',
      name: 'Sifchain',
      display: 'ROWAN',
      symbol: 'ROWAN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Shentu',
      denom_units: [{
          denom: 'ibc/C411013EEC3433ADA8667B3AEE2791248A1A3052733636EC4871D253F33F7B84',
          exponent: 0,
          aliases: ['ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3']
        }, {
          denom: 'ctk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C411013EEC3433ADA8667B3AEE2791248A1A3052733636EC4871D253F33F7B84',
      name: 'Shentu',
      display: 'ctk',
      symbol: 'CTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.svg'
        }]
    },
    {
      description: 'Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.',
      denom_units: [{
          denom: 'ibc/B95974EEB526AFAFF04AC0EB1F91157EC11C3BDDFDA88BBBC2DB70EB85B1B441',
          exponent: 0,
          aliases: ['ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B']
        }, {
          denom: 'hope',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B95974EEB526AFAFF04AC0EB1F91157EC11C3BDDFDA88BBBC2DB70EB85B1B441',
      name: 'Hope Galaxy',
      display: 'hope',
      symbol: 'HOPE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg'
        }]
    },
    {
      description: 'Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem',
      denom_units: [{
          denom: 'ibc/CE4D915EC883802333CE8A326AF9D64E82F72C333B188629B4534F301C4380FA',
          exponent: 0,
          aliases: ['ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788']
        }, {
          denom: 'rac',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CE4D915EC883802333CE8A326AF9D64E82F72C333B188629B4534F301C4380FA',
      name: 'Racoon',
      display: 'rac',
      symbol: 'juno.RAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg'
        }]
    },
    {
      description: 'Frax is a fractional-algorithmic stablecoin protocol. It aims to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply assets like BTC. Additionally, FXS is the value accrual and governance token of the entire Frax ecosystem.',
      denom_units: [{
          denom: 'ibc/2DA72612DD43B6EF1256A59A571DE14DF9555C105806101B7698A79C0A9E1469',
          exponent: 0,
          aliases: ['ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/2DA72612DD43B6EF1256A59A571DE14DF9555C105806101B7698A79C0A9E1469',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }]
    },
    {
      description: 'Gravity Bridge WBTC',
      denom_units: [{
          denom: 'ibc/93588284C3DE99D3274FBFAA0CA286A367E27724CEFB4D2D3DA18CBEFD36870F',
          exponent: 0,
          aliases: ['ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796']
        }, {
          denom: 'gwbtc',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/93588284C3DE99D3274FBFAA0CA286A367E27724CEFB4D2D3DA18CBEFD36870F',
      name: 'Wrapped Bitcoin (Gravity Bridge)',
      display: 'gwbtc',
      symbol: 'WBTC.grv',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C9B0D48FD2C5B91135F118FF2484551888966590D7BDC20F6A87308DBA670796',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wbtc.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge WETH',
      denom_units: [{
          denom: 'ibc/0429A217F7AFD21E67CABA80049DD56BB0380B77E9C58C831366D6626D42F399',
          exponent: 0,
          aliases: ['ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5']
        }, {
          denom: 'gweth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0429A217F7AFD21E67CABA80049DD56BB0380B77E9C58C831366D6626D42F399',
      name: 'Ether (Gravity Bridge)',
      display: 'gweth',
      symbol: 'WETH.grv',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/65381C5F3FD21442283D56925E62EA524DED8B6927F0FF94E21E0020954C40B5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDC',
      denom_units: [{
          denom: 'ibc/BF25D70C6347C21597B23469BD91DD5E9493E973E7FC853A6DA57A6D6CFAEBDF',
          exponent: 0,
          aliases: ['ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E']
        }, {
          denom: 'gusdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BF25D70C6347C21597B23469BD91DD5E9493E973E7FC853A6DA57A6D6CFAEBDF',
      name: 'USD Coin (Gravity Bridge)',
      display: 'gusdc',
      symbol: 'USDC.grv',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9F9B07EF9AD291167CF5700628145DE1DEB777C2CFC7907553B24446515F6D0E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge DAI',
      denom_units: [{
          denom: 'ibc/4814BE3910462E6786EDC01602C516C8E98383AE2F4EF5904032B052F1D44BA3',
          exponent: 0,
          aliases: ['ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5']
        }, {
          denom: 'gdai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4814BE3910462E6786EDC01602C516C8E98383AE2F4EF5904032B052F1D44BA3',
      name: 'DAI Stablecoin (Gravity Bridge)',
      display: 'gdai',
      symbol: 'DAI.grv',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F292A17CF920E3462C816CBE6B042E779F676CAB59096904C4C1C966413E3DF5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/dai.grv.svg'
        }]
    },
    {
      description: 'Gravity Bridge USDT',
      denom_units: [{
          denom: 'ibc/BC69F5E36389A01C069251D708BEFDC427649ECC855B2488363E85D4D05AFB34',
          exponent: 0,
          aliases: ['ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805']
        }, {
          denom: 'gusdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BC69F5E36389A01C069251D708BEFDC427649ECC855B2488363E85D4D05AFB34',
      name: 'Tether USD (Gravity Bridge)',
      display: 'gusdt',
      symbol: 'USDT.grv',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/71B441E27F1BBB44DD0891BCD370C2794D404D60A4FFE5AECCD9B1E28BC89805',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.grv.svg'
        }]
    },
    {
      description: 'The native token of Marble DEX on Juno Chain',
      denom_units: [{
          denom: 'ibc/2B55B39DC09F200CE894D8ED47A75025B80810211A6B2AAAEEA1789AFA17D8A0',
          exponent: 0,
          aliases: ['ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3']
        }, {
          denom: 'block',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2B55B39DC09F200CE894D8ED47A75025B80810211A6B2AAAEEA1789AFA17D8A0',
      name: 'Block',
      display: 'block',
      symbol: 'BLOCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg'
        }]
    },
    {
      description: 'Hash is the staking token of the Provenance Blockchain',
      denom_units: [{
          denom: 'ibc/6AFD52809824034A00BE8DB40A6F5AD3DB6A5BAAB638A854CEC943FF8DAEFEC0',
          exponent: 0,
          aliases: ['ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2']
        }, {
          denom: 'hash',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/6AFD52809824034A00BE8DB40A6F5AD3DB6A5BAAB638A854CEC943FF8DAEFEC0',
      name: 'Provenance',
      display: 'hash',
      symbol: 'HASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
        }]
    },
    {
      description: 'GLX is the staking token of the Galaxy Chain',
      denom_units: [{
          denom: 'ibc/651256AB7202C0749C93F754B9FA78A8F0DD9E372A41BFE98AC0010C1DDF24FC',
          exponent: 0,
          aliases: ['ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2']
        }, {
          denom: 'glx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/651256AB7202C0749C93F754B9FA78A8F0DD9E372A41BFE98AC0010C1DDF24FC',
      name: 'Galaxy',
      display: 'glx',
      symbol: 'GLX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg'
        }]
    },
    {
      description: 'The DAO token to build consensus among Hong Kong People',
      denom_units: [{
          denom: 'ibc/D47E5B5BECCD4476EBF56F189C8752F32FEEDE221EB93D1192A96931333E3633',
          exponent: 0,
          aliases: ['ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB']
        }],
      type_asset: 'ics20',
      base: 'ibc/D47E5B5BECCD4476EBF56F189C8752F32FEEDE221EB93D1192A96931333E3633',
      name: 'DHK',
      display: 'dhk',
      symbol: 'DHK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg'
        }]
    },
    {
      description: 'Token governance for Junoswap',
      denom_units: [{
          denom: 'ibc/BB6EC5296E65C931E6A81AF3B894FB5613A7B3D9DD90884A8F675E6B7C5926A0',
          exponent: 0,
          aliases: ['ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC']
        }, {
          denom: 'raw',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BB6EC5296E65C931E6A81AF3B894FB5613A7B3D9DD90884A8F675E6B7C5926A0',
      name: 'JunoSwap',
      display: 'raw',
      symbol: 'RAW',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.svg'
        }]
    },
    {
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denom_units: [{
          denom: 'ibc/707FB5D514DFBB0BFCAF3EA1ECE070569106521140FCF372EC10E700FE9FC34E',
          exponent: 0,
          aliases: ['ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA']
        }, {
          denom: 'meme',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/707FB5D514DFBB0BFCAF3EA1ECE070569106521140FCF372EC10E700FE9FC34E',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
        }]
    },
    {
      description: 'Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!',
      denom_units: [{
          denom: 'ibc/A1A99F1B8EA91677FE4080D01F0710E892F9C0759BCC6630D2F046DCD76AB364',
          exponent: 0,
          aliases: ['ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7']
        }, {
          denom: 'asvt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A1A99F1B8EA91677FE4080D01F0710E892F9C0759BCC6630D2F046DCD76AB364',
      name: 'Another.Software Validator Token',
      display: 'asvt',
      symbol: 'ASVT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png'
        }]
    },
    {
      description: 'DAO dedicated to building tools on the Juno Network',
      denom_units: [{
          denom: 'ibc/EC81B1665A1CD41462699263688B6D6C08282BFF8296FC036A5A60D656679383',
          exponent: 0,
          aliases: ['ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484']
        }, {
          denom: 'joe',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EC81B1665A1CD41462699263688B6D6C08282BFF8296FC036A5A60D656679383',
      name: 'JoeDAO',
      display: 'joe',
      symbol: 'JOE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png'
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/2C8A3370371F5CF1F6C5F8C813E41A6ECFDE1208AFEBAB3E9271175D99470DCD',
          exponent: 0,
          aliases: ['ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2C8A3370371F5CF1F6C5F8C813E41A6ECFDE1208AFEBAB3E9271175D99470DCD',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/785AFEC6B3741100D15E7AF01374E3C4C36F24888E96479B1C33F5C71F364EF9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }]
    },
    {
      description: 'Native token of Rizon Chain',
      denom_units: [{
          denom: 'ibc/6DBF8A1D7218C88150EE7B66F9C5FD7263E77FA1CCED0664C93C7B7CE716C8B6',
          exponent: 0,
          aliases: ['ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219']
        }, {
          denom: 'atolo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6DBF8A1D7218C88150EE7B66F9C5FD7263E77FA1CCED0664C93C7B7CE716C8B6',
      name: 'Rizon',
      display: 'atolo',
      symbol: 'ATOLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
        }]
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denom_units: [{
          denom: 'ibc/7BCA9043748C23E03C19D60367659D50582E711F0FDEFE5E3CE4A7C4EC7BA634',
          exponent: 0,
          aliases: ['ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC']
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7BCA9043748C23E03C19D60367659D50582E711F0FDEFE5E3CE4A7C4EC7BA634',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
          denom: 'ibc/D045F48450C57C67C88BD24BEED657B41A1B62260F8A743E5EF847804DA2C626',
          exponent: 0,
          aliases: ['ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5']
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D045F48450C57C67C88BD24BEED657B41A1B62260F8A743E5EF847804DA2C626',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }]
    },
    {
      description: 'A blockchain-based middleware, acting as a bridge between cryptocurrency smart contracts, data feeds, APIs and traditional bank account payments.',
      denom_units: [{
          denom: 'ibc/964A3181755675A70C513814652CA230FF6710D489131600AB8D76C5238DF590',
          exponent: 0,
          aliases: ['ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049']
        }, {
          denom: 'link',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/964A3181755675A70C513814652CA230FF6710D489131600AB8D76C5238DF590',
      name: 'Chainlink',
      display: 'link',
      symbol: 'LINK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg'
        }]
    },
    {
      description: 'L1 coin is the GenesisL1 blockchain utility, governance and EVM token',
      denom_units: [{
          denom: 'ibc/78CA5588B4EBA26FA724D91968BB09500473FA920C31E06D4779BA6D1F8509F4',
          exponent: 0,
          aliases: ['ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4']
        }, {
          denom: 'l1',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/78CA5588B4EBA26FA724D91968BB09500473FA920C31E06D4779BA6D1F8509F4',
      name: 'GenesisL1',
      display: 'l1',
      symbol: 'L1',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F16FDC11A7662B86BC0B9CE61871CBACF7C20606F95E86260FD38915184B75B4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Aave is an Open Source and Non-Custodial protocol to earn interest on deposits & borrow assets. It also features access to highly innovative flash loans, which let developers borrow instantly and easily; no collateral needed. With 16 different assets, 5 of which are stablecoins.',
      denom_units: [{
          denom: 'ibc/0B7E0C27F625CE4F35769F769436BF4504D42FCF37435ABB3E85B8AD011AE049',
          exponent: 0,
          aliases: ['ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE']
        }, {
          denom: 'aave',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0B7E0C27F625CE4F35769F769436BF4504D42FCF37435ABB3E85B8AD011AE049',
      name: 'Aave',
      display: 'aave',
      symbol: 'AAVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'ApeCoin found new expression in web3 through art, gaming, entertainment, and events. APE is a token made to support what’s next, controlled, and built on by the community. It will serve as a decentralized protocol layer for community-led initiatives that drive culture forward into the metaverse.',
      denom_units: [{
          denom: 'ibc/7AD4853C2E3835ABB11FADCAEB3D0E14D8A95F3E36A945EF3C75F19BAED1736B',
          exponent: 0,
          aliases: ['ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4']
        }, {
          denom: 'ape',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/7AD4853C2E3835ABB11FADCAEB3D0E14D8A95F3E36A945EF3C75F19BAED1736B',
      name: 'ApeCoin',
      display: 'ape',
      symbol: 'APE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'Maker is a Decentralized Autonomous Organization that creates and insures the dai stablecoin on the Ethereum blockchain',
      denom_units: [{
          denom: 'ibc/4A997E39B8513DE2D4EEA875EE667A604B21B5010EA7BA5A9635AA96DF57EE7E',
          exponent: 0,
          aliases: ['ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3']
        }, {
          denom: 'mkr',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4A997E39B8513DE2D4EEA875EE667A604B21B5010EA7BA5A9635AA96DF57EE7E',
      name: 'Maker',
      display: 'mkr',
      symbol: 'MKR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg'
        }]
    },
    {
      description: 'RAI is a non-pegged, ETH-backed stable asset. It is useful as more \'stable\' collateral for other DeFi protocols (compared to ETH or BTC) or as a stable asset with an embedded interest rate.',
      denom_units: [{
          denom: 'ibc/E3A8A9DB85F92BDDDB5FB0A4BB3318E00342F2D0DEBF5D78A8CEADE3170E0003',
          exponent: 0,
          aliases: ['ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E']
        }, {
          denom: 'rai',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/E3A8A9DB85F92BDDDB5FB0A4BB3318E00342F2D0DEBF5D78A8CEADE3170E0003',
      name: 'Rai Reflex Index',
      display: 'rai',
      symbol: 'RAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'SHIBA INU is a 100% decentralized community experiment with it claims that 1/2 the tokens have been sent to Vitalik and the other half were locked to a Uniswap pool and the keys burned.',
      denom_units: [{
          denom: 'ibc/876EB9D6FDB0A70E443654F7D2B23DFBB65553BC52B7B5261DBF06D45A09B171',
          exponent: 0,
          aliases: ['ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2']
        }, {
          denom: 'shib',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/876EB9D6FDB0A70E443654F7D2B23DFBB65553BC52B7B5261DBF06D45A09B171',
      name: 'Shiba Inu',
      display: 'shib',
      symbol: 'SHIB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/338D2DB6F58921A72BD9F7B834AA9E05A3FC40D4FCCBEF3DB90EBACB230CCE96',
          exponent: 0,
          aliases: ['ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/338D2DB6F58921A72BD9F7B834AA9E05A3FC40D4FCCBEF3DB90EBACB230CCE96',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }]
    },
    {
      description: 'The native token of Tgrade',
      denom_units: [{
          denom: 'ibc/F8B149C9178E466D0C1CF4AC32095AFA3CEA6E08C2CD5A6EF260038640F9F1E3',
          exponent: 0,
          aliases: ['ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C']
        }, {
          denom: 'tgd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F8B149C9178E466D0C1CF4AC32095AFA3CEA6E08C2CD5A6EF260038640F9F1E3',
      name: 'Tgrade',
      display: 'tgd',
      symbol: 'TGD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
        }]
    },
    {
      description: 'Echelon - a scalable EVM on Cosmos, built on Proof-of-Stake with fast-finality that prioritizes interoperability and novel economics',
      denom_units: [{
          denom: 'ibc/96F304DB6E50259FF1DA6B48C152AEDEC330EA14EF3D54DC335DEEB946A23DE5',
          exponent: 0,
          aliases: ['ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D']
        }, {
          denom: 'echelon',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/96F304DB6E50259FF1DA6B48C152AEDEC330EA14EF3D54DC335DEEB946A23DE5',
      name: 'Echelon',
      display: 'echelon',
      symbol: 'ECH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/47EE224A9B33CF0ABEAC82106E52F0F6E8D8CEC5BA80B9D9A6F55172CBB0177D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/echelon/images/ech.svg'
        }]
    },
    {
      description: 'Staking and governance token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/DA8FA29AADFF7FBB343222FC46B948570C3E1988C9263F479402DCE02E93A943',
          exponent: 0,
          aliases: ['ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B']
        }, {
          denom: 'odin',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/DA8FA29AADFF7FBB343222FC46B948570C3E1988C9263F479402DCE02E93A943',
      name: 'Odin Protocol',
      display: 'odin',
      symbol: 'ODIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C360EF34A86D334F625E4CBB7DA3223AEA97174B61F35BB3758081A8160F7D9B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'GEO token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/74D90CE41A8B0A9AF1D9E81AF055E26CAB38DBCF76A9E57792E056088A13A663',
          exponent: 0,
          aliases: ['ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A']
        }, {
          denom: 'geo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/74D90CE41A8B0A9AF1D9E81AF055E26CAB38DBCF76A9E57792E056088A13A663',
      name: 'GEO',
      display: 'geo',
      symbol: 'GEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9B6FBABA36BB4A3BF127AE5E96B572A5197FD9F3111D895D8919B07BC290764A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/geo.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'O9W token for ODIN Protocol',
      denom_units: [{
          denom: 'ibc/8B3794B64868AEDE8DA9D980B088781C79FD89112865D005E766FE77F63DBE42',
          exponent: 0,
          aliases: ['ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D']
        }, {
          denom: 'O9W',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8B3794B64868AEDE8DA9D980B088781C79FD89112865D005E766FE77F63DBE42',
      name: 'O9W',
      display: 'O9W',
      symbol: 'O9W',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0CD46223FEABD2AEAAAF1F057D01E63BCA79B7D4BD6B68F1EB973A987344695D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/o9w.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'ELEVENPARIS loyalty token on KiChain',
      denom_units: [{
          denom: 'ibc/B43E055EFD682A07B8F443AC75678CC8D4B0AB6CF4F1F16CAEE860388E7FFE72',
          exponent: 0,
          aliases: ['ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121']
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B43E055EFD682A07B8F443AC75678CC8D4B0AB6CF4F1F16CAEE860388E7FFE72',
      name: 'LVN',
      display: 'lvn',
      symbol: 'kichain.LVN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
        }]
    },
    {
      description: 'Glimmer (GLMR) is the utility token of the Moonbeam Network, Moonbeam’s primary deployment on the Polkadot network that serves as a developer-friendly parachain.',
      denom_units: [{
          denom: 'ibc/7FA0C4A7E9E775DBFBBDC739EDA85A05A6142735F98C6B61779A408EAD887470',
          exponent: 0,
          aliases: ['ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49']
        }, {
          denom: 'wglmr',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/7FA0C4A7E9E775DBFBBDC739EDA85A05A6142735F98C6B61779A408EAD887470',
      name: 'Moonbeam',
      display: 'wglmr',
      symbol: 'GLMR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }]
    },
    {
      description: 'DeFi gaming platform built on Juno',
      denom_units: [{
          denom: 'ibc/F24F398502E51346EB75FC9BC4C0975E1F18F0CF065983C70954A805AF5E4E65',
          exponent: 0,
          aliases: ['ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F24F398502E51346EB75FC9BC4C0975E1F18F0CF065983C70954A805AF5E4E65',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }]
    },
    {
      description: 'Gelotto Year 1 Grand Prize Token',
      denom_units: [{
          denom: 'ibc/9671F635C00F1EF935DBA87F1C7DA67FACB934E8E58ADF40A7702BE1693CEC96',
          exponent: 0,
          aliases: ['ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8']
        }, {
          denom: 'gkey',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9671F635C00F1EF935DBA87F1C7DA67FACB934E8E58ADF40A7702BE1693CEC96',
      name: 'GKey',
      display: 'gkey',
      symbol: 'GKEY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg'
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/084AE46A6020798887118837D93C5B786B5590D16A24653E505CFE42E75A72B3',
          exponent: 0,
          aliases: ['ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/084AE46A6020798887118837D93C5B786B5590D16A24653E505CFE42E75A72B3',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }]
    },
    {
      description: 'The native token of LumenX Network',
      denom_units: [{
          denom: 'ibc/B8081613F611A50DF2007A8D35131F735D62B08806D06C714340B3D13CA63180',
          exponent: 0,
          aliases: ['ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7']
        }, {
          denom: 'lumen',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B8081613F611A50DF2007A8D35131F735D62B08806D06C714340B3D13CA63180',
      name: 'LumenX',
      display: 'lumen',
      symbol: 'LUMEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The native token of Oraichain',
      denom_units: [{
          denom: 'ibc/BAB3B24F4E860E1DD8130333B49AE14C52E5F615E4E9D91EE746D1F38D386ACC',
          exponent: 0,
          aliases: ['ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D']
        }, {
          denom: 'ORAI',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BAB3B24F4E860E1DD8130333B49AE14C52E5F615E4E9D91EE746D1F38D386ACC',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg'
        }]
    },
    {
      description: 'The native token of the Cudos blockchain',
      denom_units: [{
          denom: 'ibc/BB9810E7FE8836311126F15BE0B20E7463189751840F8C3FEF3AC8F87D8AB7C8',
          exponent: 0,
          aliases: ['ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B']
        }, {
          denom: 'cudos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/BB9810E7FE8836311126F15BE0B20E7463189751840F8C3FEF3AC8F87D8AB7C8',
      name: 'Cudos',
      display: 'cudos',
      symbol: 'CUDOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg'
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
          denom: 'ibc/7A49CE9D4CC9298DD183F53CA6E9F41E7F20E44773006ABA995448EA4DE9AEF6',
          exponent: 0,
          aliases: ['ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE']
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7A49CE9D4CC9298DD183F53CA6E9F41E7F20E44773006ABA995448EA4DE9AEF6',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }]
    },
    {
      description: 'BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.',
      denom_units: [{
          denom: 'ibc/4CB6526F0BD50F992C6AD1D3453A0DA073FBC76E71E32B070BDCFCA0CA48A3F0',
          exponent: 0,
          aliases: ['ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604']
        }, {
          denom: 'bld',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4CB6526F0BD50F992C6AD1D3453A0DA073FBC76E71E32B070BDCFCA0CA48A3F0',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
        }]
    },
    {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denom_units: [{
          denom: 'ibc/ADC31C3F69914603A120466D02432ED2821E7F3F8B8692DB201EF78BCA0D89DC',
          exponent: 0,
          aliases: ['ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5']
        }, {
          denom: 'ist',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/ADC31C3F69914603A120466D02432ED2821E7F3F8B8692DB201EF78BCA0D89DC',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
        }]
    },
    {
      description: 'Staking derivative seJUNO for staked JUNO',
      denom_units: [{
          denom: 'ibc/92FA44E38E4EEA88A776F15E12F2F59FF4F7717C46767EC51E3987C5852FE417',
          exponent: 0,
          aliases: ['ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B']
        }, {
          denom: 'sejuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/92FA44E38E4EEA88A776F15E12F2F59FF4F7717C46767EC51E3987C5852FE417',
      name: 'StakeEasy seJUNO',
      display: 'sejuno',
      symbol: 'SEJUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg'
        }]
    },
    {
      description: 'Staking derivative bJUNO for staked JUNO',
      denom_units: [{
          denom: 'ibc/427E68C90FFD68C9F3B77055E267FF9F3950AA81CE33208BA64DB5B50148730B',
          exponent: 0,
          aliases: ['ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3']
        }, {
          denom: 'bjuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/427E68C90FFD68C9F3B77055E267FF9F3950AA81CE33208BA64DB5B50148730B',
      name: 'StakeEasy bJUNO',
      display: 'bjuno',
      symbol: 'BJUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg'
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
          exponent: 0,
          aliases: ['ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/04CA9067228BB51F1C39A506DA00DF07E1496D8308DD21E8EF66AD6169FA722B',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'ustrd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
          exponent: 0,
          aliases: ['ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FCFF8B19C61677F3B78E2A5AE3B4A34A8D23858D16905F253B8438B3AFD07FF8',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/91B849CA39D9494F252ED9241E31F41CAA666A743034C612B26E938BFD85C343',
          exponent: 0,
          aliases: ['ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A']
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/91B849CA39D9494F252ED9241E31F41CAA666A743034C612B26E938BFD85C343',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }]
    },
    {
      description: 'Solarbank DAO Governance Token for speeding up the shift to renewable and green energy',
      denom_units: [{
          denom: 'ibc/FB78490E46626AFBD25E1AB64F561404F1FC73743A132E56AC71216067BC6EC8',
          exponent: 0,
          aliases: ['ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C']
        }, {
          denom: 'solar',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FB78490E46626AFBD25E1AB64F561404F1FC73743A132E56AC71216067BC6EC8',
      name: 'Solarbank DAO',
      display: 'solar',
      symbol: 'SOLAR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg'
        }]
    },
    {
      description: 'StakeEasy governance token',
      denom_units: [{
          denom: 'ibc/D83ADEB6C3489A7324B6101F94807372F6265EC5C6824216983D8CBBB323ED99',
          exponent: 0,
          aliases: ['ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6']
        }, {
          denom: 'seasy',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D83ADEB6C3489A7324B6101F94807372F6265EC5C6824216983D8CBBB323ED99',
      name: 'StakeEasy SEASY',
      display: 'seasy',
      symbol: 'SEASY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg'
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
          exponent: 0,
          aliases: ['ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1B03A71B8E6F6EF424411DC9326A8E0D25D096E4D2616425CFAF2AF06F0FE717',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }]
    },
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [{
          denom: 'ibc/4688EAC9AA3CD61D871C88C21BA80BB27E85032F9966446FCECCCC46779C9932',
          exponent: 0,
          aliases: ['ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9']
        }, {
          denom: 'rebus',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/4688EAC9AA3CD61D871C88C21BA80BB27E85032F9966446FCECCCC46779C9932',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg'
        }]
    },
    {
      description: 'The native token of Teritori',
      denom_units: [{
          denom: 'ibc/33A1871003A2DFAD3F92BC422AE086C52871413F004208FFC848CE5F89247117',
          exponent: 0,
          aliases: ['ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC']
        }, {
          denom: 'tori',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/33A1871003A2DFAD3F92BC422AE086C52871413F004208FFC848CE5F89247117',
      name: 'Teritori',
      display: 'tori',
      symbol: 'TORI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EB7FB9C8B425F289B63703413327C2051030E848CE4EAAEA2E51199D6D39D3EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'teritori',
            base_denom: 'utori'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/teritori/images/utori.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/16CF38F8C53F179370C68CE27F6D5F561E9D1571781E05A24C67EF39766710E1',
          exponent: 0,
          aliases: ['ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE']
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/16CF38F8C53F179370C68CE27F6D5F561E9D1571781E05A24C67EF39766710E1',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
          exponent: 0,
          aliases: ['ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AF5559D128329B6C753F15481BEC26E533B847A471074703FA4903E7E6F61BA1',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stuosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }]
    },
    {
      description: 'The native token cw20 for MuseDAO on Juno Chain',
      denom_units: [{
          denom: 'ibc/D13FD19B13B9CA7D5DC3229DE73F52877EADEA1A94603037F7889732E4DF0405',
          exponent: 0,
          aliases: ['ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F']
        }, {
          denom: 'muse',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D13FD19B13B9CA7D5DC3229DE73F52877EADEA1A94603037F7889732E4DF0405',
      name: 'MuseDAO',
      display: 'muse',
      symbol: 'MUSE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png'
        }]
    },
    {
      description: 'The native token of Lambda',
      denom_units: [{
          denom: 'ibc/EDE3B24885877D7BAF988C329248C94031F3415F049B480A6CCEEF3CDFBA2800',
          exponent: 0,
          aliases: ['ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB']
        }, {
          denom: 'lamb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/EDE3B24885877D7BAF988C329248C94031F3415F049B480A6CCEEF3CDFBA2800',
      name: 'Lambda',
      display: 'lamb',
      symbol: 'LAMB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.svg'
        }]
    },
    {
      description: 'The native over-collateralized stablecoin from the Kujira chain.',
      denom_units: [{
          denom: 'ibc/9651138BC1280F61D93225EFC864376220FAF1F1545CED6F2CB576D9C8158638',
          exponent: 0,
          aliases: ['ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC']
        }, {
          denom: 'usk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9651138BC1280F61D93225EFC864376220FAF1F1545CED6F2CB576D9C8158638',
      name: 'USK',
      display: 'usk',
      symbol: 'USK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/44492EAB24B72E3FB59B9FA619A22337FB74F95D8808FE6BC78CC0E6C18DC2EC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.svg'
        }]
    },
    {
      description: 'Staking and governance coin for the Unification Blockchain',
      denom_units: [{
          denom: 'ibc/ABA5A8F111DB1D4E2FBACD2299B8DA63982602C964B78EFEC5860787DCB81507',
          exponent: 0,
          aliases: ['ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC']
        }, {
          denom: 'FUND',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/ABA5A8F111DB1D4E2FBACD2299B8DA63982602C964B78EFEC5860787DCB81507',
      name: 'Unification',
      display: 'FUND',
      symbol: 'FUND',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png'
        }]
    },
    {
      description: 'The native staking and governance token of Jackal.',
      denom_units: [{
          denom: 'ibc/28F026607184B151F1F7D7F5D8AE644528550EB05203A28B6233DFA923669876',
          exponent: 0,
          aliases: ['ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA']
        }, {
          denom: 'jkl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/28F026607184B151F1F7D7F5D8AE644528550EB05203A28B6233DFA923669876',
      name: 'Jackal',
      display: 'jkl',
      symbol: 'JKL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/jackal/images/jkl.svg'
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/F1131F2B2142BFDA739982DB60ECF87A9148794A4D7F83254025CB2268151E77',
          exponent: 0,
          aliases: ['ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F1131F2B2142BFDA739982DB60ECF87A9148794A4D7F83254025CB2268151E77',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A6383B6CF5EA23E067666C06BC34E2A96869927BD9744DC0C1643E589C710AA3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/2F83F6265AD379DAED175C0915BA78B3DB31E08276B57579770CF20518F1BCA8',
          exponent: 0,
          aliases: ['ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2F83F6265AD379DAED175C0915BA78B3DB31E08276B57579770CF20518F1BCA8',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1FBA9E763B8679BEF7BAAAF2D16BCA78C3B297D226C3F31312C769D7B8F992D8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/AD706C6583FADB03FAD66DA7D5A0DE79A166D1F7B88C9E8C24C23EF9EE400794',
          exponent: 0,
          aliases: ['ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/AD706C6583FADB03FAD66DA7D5A0DE79A166D1F7B88C9E8C24C23EF9EE400794',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/71055835C7639739EAE03AACD1324FE162DBA41D09F197CB72D966D014225B1C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/0B89E06E3837BDB7C444E930A5439026F198C07B2385D842266B1A7788B07C7B',
          exponent: 0,
          aliases: ['ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0B89E06E3837BDB7C444E930A5439026F198C07B2385D842266B1A7788B07C7B',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9A8A93D04917A149C8AC7C16D3DA8F470D59E8D867499C4DA97450E1D7363213',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/714C0F970BFF25EE2C5E4DF71D345A4C0C8277DE56551539B3FEAADDE8D87C1A',
          exponent: 0,
          aliases: ['ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/714C0F970BFF25EE2C5E4DF71D345A4C0C8277DE56551539B3FEAADDE8D87C1A',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D0E5BF2940FB58D9B283A339032DE88111407AAD7D94A7F1F3EB78874F8616D4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }]
    },
    {
      description: 'BeeZee native blockchain',
      denom_units: [{
          denom: 'ibc/147924BA590A62E546294E0FEF44BDFB2C0B3FD9B2E56E257F269543400B4E8D',
          exponent: 0,
          aliases: ['ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88']
        }, {
          denom: 'bze',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/147924BA590A62E546294E0FEF44BDFB2C0B3FD9B2E56E257F269543400B4E8D',
      name: 'BeeZee',
      display: 'bze',
      symbol: 'BZE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C822645522FC3EECF817609AA38C24B64D04F5C267A23BCCF8F2E3BC5755FA88',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/bze.svg'
        }]
    },
    {
      description: 'The native token cw20 for Fanfury on Juno Chain',
      denom_units: [{
          denom: 'ibc/F20C98087A8C385AF799325F728FF476CD14172BF1A947007A450EE3C879EEA3',
          exponent: 0,
          aliases: ['ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F20C98087A8C385AF799325F728FF476CD14172BF1A947007A450EE3C879EEA3',
      name: 'Fanfury',
      display: 'fury',
      symbol: 'FURY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7CE5F388D661D82A0774E47B5129DA51CC7129BD1A70B5FA6BCEBB5B0A2FAEAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fanfury.png'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Acrechain',
      denom_units: [{
          denom: 'ibc/B6A3E484D8D24E398E02B579BE805348F0A1442A052DD42DA81B197243E1E93F',
          exponent: 0,
          aliases: ['ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06']
        }, {
          denom: 'acre',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/B6A3E484D8D24E398E02B579BE805348F0A1442A052DD42DA81B197243E1E93F',
      name: 'Acrechain',
      display: 'acre',
      symbol: 'ACRE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BB936517F7E5D77A63E0ADB05217A6608B0C4CF8FBA7EA2F4BAE4107A7238F06',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/EC106EC2773C0CD6AA6088B6B93B28F1F0E23ED06D111DDFA8195EA5DCD0A065',
          exponent: 0,
          aliases: ['ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EC106EC2773C0CD6AA6088B6B93B28F1F0E23ED06D111DDFA8195EA5DCD0A065',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/23CA6C8D1AB2145DD13EB1E089A2E3F960DC298B468CCE034E19E5A78B61136E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Imversed',
      denom_units: [{
          denom: 'ibc/67B3359A7D754A617FE8A9C727A098ECA9B51C193FD52B908386EF8A4B01C4AC',
          exponent: 0,
          aliases: ['ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4']
        }, {
          denom: 'imv',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/67B3359A7D754A617FE8A9C727A098ECA9B51C193FD52B908386EF8A4B01C4AC',
      name: 'Imversed',
      display: 'imv',
      symbol: 'IMV',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/92B223EBFA74DB99BEA92B23DEAA6050734FEEAABB84689CB8E1AE8F9C9F9AF4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/imversed/images/imversed.svg'
        }]
    },
    {
      description: 'The native token of Medas Digital Network',
      denom_units: [{
          denom: 'ibc/24E65750409812BEF0FA5A7C3C52887033C6D33CF53CBAFA55DA824913428884',
          exponent: 0,
          aliases: ['ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C']
        }, {
          denom: 'medas',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/24E65750409812BEF0FA5A7C3C52887033C6D33CF53CBAFA55DA824913428884',
      name: 'Medas Digital Network',
      display: 'medas',
      symbol: 'MEDAS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/01E94A5FF29B8DDEFC86F412CC3927F7330E9B523CC63A6194B1108F5276025C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/medasdigital/images/medas.svg'
        }],
      keywords: ['medas']
    },
    {
      description: 'The native token cw20 for PHMN on Juno Chain',
      denom_units: [{
          denom: 'ibc/24E0508083502D0F7272D4E9814FCC80CEE540F84B96FCE0ED01EA40DB6D5B0B',
          exponent: 0,
          aliases: ['ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B']
        }, {
          denom: 'phmn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/24E0508083502D0F7272D4E9814FCC80CEE540F84B96FCE0ED01EA40DB6D5B0B',
      name: 'POSTHUMAN',
      display: 'phmn',
      symbol: 'PHMN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D3B574938631B0A1BA704879020C696E514CFADAA7643CDE4BD5EB010BDE327B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/phmn.svg'
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/B3675797F19F2D08F11D1798B2BA748F9C394C04D05ED429967536DA01526AB2',
          exponent: 0,
          aliases: ['ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B3675797F19F2D08F11D1798B2BA748F9C394C04D05ED429967536DA01526AB2',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/18A1B70E3205A48DE8590C0D11030E7146CDBF1048789261D53FFFD7527F8B55',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }]
    },
    {
      description: 'The native token of Onomy Protocol',
      denom_units: [{
          denom: 'ibc/71855D735E860697FC39A14BF24D8E2A336FEF24842DE27341230C1542D56387',
          exponent: 0,
          aliases: ['ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163']
        }, {
          denom: 'nom',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/71855D735E860697FC39A14BF24D8E2A336FEF24842DE27341230C1542D56387',
      name: 'Onomy',
      display: 'nom',
      symbol: 'NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B9606D347599F0F2FDF82BA3EE339000673B7D274EA50F59494DC51EFCD42163',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg'
        }],
      keywords: [
        'dex',
        'stablecoin',
        'bridge',
        'staking'
      ]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
          exponent: 0,
          aliases: ['ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      type_asset: 'ics20',
      base: 'ibc/DAAD372DB7DD45BBCFA4DDD40CA9793E9D265D1530083AB41A8A0C53C3EBE865',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CAA179E40F0266B0B29FB5EAA288FB9212E628822265D4141EBD1C47C3CBFCBC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Dyson Protocol',
      denom_units: [{
          denom: 'ibc/42B3B278C89739653FD66A255AF4D2AADDE38B09A25C5B85911B8ABE9D962362',
          exponent: 0,
          aliases: ['ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D']
        }],
      type_asset: 'ics20',
      base: 'ibc/42B3B278C89739653FD66A255AF4D2AADDE38B09A25C5B85911B8ABE9D962362',
      name: 'Dyson Protocol',
      display: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
      symbol: 'DYS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E27CD305D33F150369AB526AEB6646A76EC3FFB1A6CA58A663B5DE657A89D55D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dys.svg'
        }]
    },
    {
      description: 'The native token cw20 for Hopers on Juno Chain',
      denom_units: [{
          denom: 'ibc/30F39EA2B994E078363C21A7360C6A5C986CEEF1E5FE8CD61A2AC9D778746EB8',
          exponent: 0,
          aliases: ['ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099']
        }, {
          denom: 'hopers',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/30F39EA2B994E078363C21A7360C6A5C986CEEF1E5FE8CD61A2AC9D778746EB8',
      name: 'Hopers',
      display: 'hopers',
      symbol: 'HOPERS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D3ADAF73F84CDF205BCB72C142FDAEEA2C612AB853CEE6D6C06F184FA38B1099',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hopers.svg'
        }]
    },
    {
      description: 'Overcollateralized stable coin for Arable derivatives v1',
      denom_units: [{
          denom: 'ibc/87F861CEB4D92D78F8923E8A56132C83D1B33BA74C8853436A693F264983E5B4',
          exponent: 0,
          aliases: ['ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F']
        }, {
          denom: 'arusd',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/87F861CEB4D92D78F8923E8A56132C83D1B33BA74C8853436A693F264983E5B4',
      name: 'Arable USD',
      display: 'arusd',
      symbol: 'arUSD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5D270A584B1078FBE07D14570ED5E88EC1FEDA8518B76C322606291E6FD8286F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.svg'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Planq Network',
      denom_units: [{
          denom: 'ibc/5BC28BFED2C371EB29B19F0CD033337DF70E1ED9161B7718641169394017C378',
          exponent: 0,
          aliases: ['ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF']
        }, {
          denom: 'planq',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/5BC28BFED2C371EB29B19F0CD033337DF70E1ED9161B7718641169394017C378',
      name: 'Planq',
      display: 'planq',
      symbol: 'PLQ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B1E0166EA0D759FDF4B207D1F5F12210D8BFE36F2345CEFC76948CE2B36DFBAF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/planq/images/planq.svg'
        }]
    },
    {
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denom_units: [{
          denom: 'ibc/A72454B86CA8B41CBC25CDF7A30237812D0230573AFA7792B028B0DE3E964EDE',
          exponent: 0,
          aliases: ['ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4']
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A72454B86CA8B41CBC25CDF7A30237812D0230573AFA7792B028B0DE3E964EDE',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5E2DFDF1734137302129EA1C1BA21A580F96F778D4F021815EA4F6DB378DA1A4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }]
    },
    {
      description: 'Canto is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/A11552A67296E769028F0D04C32EBF5C140399835D4D4B6B6DBDA85245B41EBC',
          exponent: 0,
          aliases: ['ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F']
        }, {
          denom: 'canto',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A11552A67296E769028F0D04C32EBF5C140399835D4D4B6B6DBDA85245B41EBC',
      name: 'Canto',
      display: 'canto',
      symbol: 'CANTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/47CAF2DB8C016FAC960F33BC492FD8E454593B65CC59D70FA9D9F30424F9C32F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [{
          denom: 'ibc/BCD14CF459D7F71AA618BBF8E2F31A82F572C134FED226CD662B2B5181377BC0',
          exponent: 0,
          aliases: ['ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83']
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/BCD14CF459D7F71AA618BBF8E2F31A82F572C134FED226CD662B2B5181377BC0',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/46C83BB054E12E189882B5284542DB605D94C99827E367C9192CF0579CD5BC83',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }]
    },
    {
      description: 'WYND DAO Governance Token',
      denom_units: [{
          denom: 'ibc/603AD72FD9BF12E1277ECF24DEA09B1052EA5D7013FC34B79F0A4D708735C64C',
          exponent: 0,
          aliases: ['ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3']
        }, {
          denom: 'wynd',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/603AD72FD9BF12E1277ECF24DEA09B1052EA5D7013FC34B79F0A4D708735C64C',
      name: 'Wynd DAO Governance Token',
      display: 'wynd',
      symbol: 'WYND',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2FBAC4BF296D7844796844B35978E5899984BA5A6314B2DD8F83C215550010B3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/wynd.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/170FF3B0DFE79AD56F9B496E09C6A474DEC7856BDDD212898B516DEC5F0D0007',
          exponent: 0,
          aliases: ['ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A']
        }, {
          denom: 'polygon-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/170FF3B0DFE79AD56F9B496E09C6A474DEC7856BDDD212898B516DEC5F0D0007',
      name: 'USD Coin (Polygon)',
      display: 'polygon-usdc',
      symbol: 'polygon.USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/231FD77ECCB2DB916D314019DA30FE013202833386B1908A191D16989AD80B5A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/polygon.usdc.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/AEDE64A7D01F8EF8D61FEDB03FF2865584A8027EE3DD2C75103926B8267D3FCA',
          exponent: 0,
          aliases: ['ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AEDE64A7D01F8EF8D61FEDB03FF2865584A8027EE3DD2C75103926B8267D3FCA',
      name: 'USD Coin (Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F17C9CA112815613C5B6771047A093054F837C3020CBA59DFFD9D780A8B2984C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/avalanche.usdc.svg'
        }]
    },
    {
      description: 'Mars protocol token',
      denom_units: [{
          denom: 'ibc/783F5F8F6B41874487C3B09A2306FD5E59B9B740F930A39DD55B08CF7CB8CBF0',
          exponent: 0,
          aliases: ['ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/783F5F8F6B41874487C3B09A2306FD5E59B9B740F930A39DD55B08CF7CB8CBF0',
      name: 'Mars Hub',
      display: 'mars',
      symbol: 'MARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }]
    },
    {
      description: 'Ciento Exchange Token',
      denom_units: [{
          denom: 'ibc/385A29AEAF69FE286A153AF88667959529156F7340935A4C35294148E8ED8BEC',
          exponent: 0,
          aliases: ['ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5']
        }, {
          denom: 'cnto',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/385A29AEAF69FE286A153AF88667959529156F7340935A4C35294148E8ED8BEC',
      name: 'Ciento Token',
      display: 'cnto',
      symbol: 'CNTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D38BB3DD46864694F009AF01DA5A815B3A875F8CC52FF5679BFFCC35DC7451D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/cnto.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/B4B209594018FEF867E3A614F65B7F8126CA8F9E92DF070DB36FD250C1361CFA',
          exponent: 0,
          aliases: ['ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B4B209594018FEF867E3A614F65B7F8126CA8F9E92DF070DB36FD250C1361CFA',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C491E7582E94AE921F6A029790083CDE1106C28F3F6C4AD7F1340544C13EC372',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E5D2B6D2AD60E9AE82DE37871B32A425D38607EEBB64B6B1F8DB79D8AC48497C',
          exponent: 0,
          aliases: ['ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01']
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/E5D2B6D2AD60E9AE82DE37871B32A425D38607EEBB64B6B1F8DB79D8AC48497C',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C5579A9595790017C600DD726276D978B9BF314CF82406CE342720A9C7911A01',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }]
    },
    {
      description: 'nRide Token',
      denom_units: [{
          denom: 'ibc/45EDC7B76C71D3759DB3B8A48F790EEB939320D9E365075973CDC3F7462ACDFF',
          exponent: 0,
          aliases: ['ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C']
        }, {
          denom: 'nride',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/45EDC7B76C71D3759DB3B8A48F790EEB939320D9E365075973CDC3F7462ACDFF',
      name: 'nRide Token',
      display: 'nride',
      symbol: 'NRIDE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E750D31033DC1CF4A044C3AA0A8117401316DC918FBEBC4E3D34F91B09D5F54C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/nride.svg'
        }]
    },
    {
      description: 'The native staking token of 8ball.',
      denom_units: [{
          denom: 'ibc/D350146763B00377065DA246612B0E009F07E75DC135D3669BA3BD962F252460',
          exponent: 0,
          aliases: ['ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F']
        }, {
          denom: 'ebl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D350146763B00377065DA246612B0E009F07E75DC135D3669BA3BD962F252460',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8BE73A810E22F80E5E850531A688600D63AE7392E7C2770AE758CAA4FD921B7F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [{
          denom: 'ibc/317FCA2D7554F55BBCD0019AB36F7FEA18B6D161F462AF5E565068C719A29F20',
          exponent: 0,
          aliases: ['ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC']
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/317FCA2D7554F55BBCD0019AB36F7FEA18B6D161F462AF5E565068C719A29F20',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/FA602364BEC305A696CBDF987058E99D8B479F0318E47314C49173E8838C5BAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/9BD2EA80C1608CEAE8EED38EE7F4E08D0CBE04C0BBF5368B06A71311E5EE3303',
          exponent: 0,
          aliases: ['ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9BD2EA80C1608CEAE8EED38EE7F4E08D0CBE04C0BBF5368B06A71311E5EE3303',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/AD4DEA52408EA07C0C9E19444EC8DA84A274A70AD2687A710EFDDEB28BB2986A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [{
          denom: 'ibc/3138A462429016FD5DD2E9381C59C5F431DD0102636A6929AD74A2824D6E75AC',
          exponent: 0,
          aliases: ['ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206']
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/3138A462429016FD5DD2E9381C59C5F431DD0102636A6929AD74A2824D6E75AC',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/79A676508A2ECA1021EDDC7BB9CF70CEEC9514C478DA526A5A8B3E78506C2206',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }]
    },
    {
      description: 'Inspired by Bonk. A community project to celebrate the settlers of JunoNetwork.',
      denom_units: [{
          denom: 'ibc/D6836A815D852C713267E04A4CF65B7DDC4082D969B913F70C1457FBF81ED241',
          exponent: 0,
          aliases: ['ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6']
        }, {
          denom: 'fox',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D6836A815D852C713267E04A4CF65B7DDC4082D969B913F70C1457FBF81ED241',
      name: 'Juno Fox',
      display: 'fox',
      symbol: 'FOX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4F24D904BAB5FFBD3524F2DE3EC3C7A9E687A2408D9A985E57B356D9FA9201C6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/fox.png'
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/C1646B6770C649204E9B280C63E929D95833E2B0313F82361A2C32CE60EDBA07',
          exponent: 0,
          aliases: ['ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/C1646B6770C649204E9B280C63E929D95833E2B0313F82361A2C32CE60EDBA07',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/635CB83EF1DFE598B10A3E90485306FD0D47D34217A4BE5FD9977FA010A5367D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }]
    },
    {
      description: 'The native token of Arkhadian',
      denom_units: [{
          denom: 'ibc/758B579004645CD0C05213B8755E78B0304CFF8D48898B7C87126330DCFCCBB6',
          exponent: 0,
          aliases: ['ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28']
        }, {
          denom: 'ARKH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/758B579004645CD0C05213B8755E78B0304CFF8D48898B7C87126330DCFCCBB6',
      name: 'Arkhadian',
      display: 'ARKH',
      symbol: 'ARKH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0F91EE8B98AAE3CF393D94CD7F89A10F8D7758C5EC707E721899DFE65C164C28',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/arkh/images/arkh.svg'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [{
          denom: 'ibc/B1710B9F4F41C1F1CE09543CB267C8723BA56D19CAB0AB0A8085D16BED9FBB7B',
          exponent: 0,
          aliases: ['ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC']
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/B1710B9F4F41C1F1CE09543CB267C8723BA56D19CAB0AB0A8085D16BED9FBB7B',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/42D24879D4569CE6477B7E88206ADBFE47C222C6CAD51A54083E4A72594269FC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/1CABC2B1C91836C5F007B84C6EC70023405C02C4F0AA961AEC889727EE0C4354',
          exponent: 0,
          aliases: ['ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1CABC2B1C91836C5F007B84C6EC70023405C02C4F0AA961AEC889727EE0C4354',
      name: 'Frienzies',
      display: 'frienzies',
      symbol: 'FRNZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7FA7EC64490E3BDE5A1A28CBE73CC0AD22522794957BC891C46321E3A6074DB9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [{
          denom: 'ibc/4981DCB461FDE1999A1C157D04DB09A186304B6D93129AD631A120EEFA2C489A',
          exponent: 0,
          aliases: ['ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4981DCB461FDE1999A1C157D04DB09A186304B6D93129AD631A120EEFA2C489A',
      name: 'Migaloo',
      display: 'whale',
      symbol: 'WHALE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }]
    },
    {
      description: 'Evmos Guardians governance token.',
      denom_units: [{
          denom: 'ibc/6366532F3D04835809A1B611261939F25D30E89C7F5D33861E851545427802DA',
          exponent: 0,
          aliases: ['ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA']
        }, {
          denom: 'grdn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6366532F3D04835809A1B611261939F25D30E89C7F5D33861E851545427802DA',
      name: 'Guardian',
      display: 'grdn',
      symbol: 'GRDN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BAC9C6998F1F5C316D3353622EAEDAF8BD00FAABEB374FECDF8C9BC475172CFA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/guardian.png'
        }]
    },
    {
      description: 'Mini Punks Token',
      denom_units: [{
          denom: 'ibc/50CCEA850FF84EAEA3FB3D9106ED67B4B20F58AF8DF6A6BBC4DC342ACA0AF588',
          exponent: 0,
          aliases: ['ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E']
        }, {
          denom: 'mnpu',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/50CCEA850FF84EAEA3FB3D9106ED67B4B20F58AF8DF6A6BBC4DC342ACA0AF588',
      name: 'Mini Punks',
      display: 'mnpu',
      symbol: 'MNPU',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DC0D3303BBE739E073224D0314385B88B247F56D71D726A91414CCA244FFFE7E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mnpu.svg'
        }]
    },
    {
      description: 'Shiba Cosmos',
      denom_units: [{
          denom: 'ibc/9C3B3F6483776FBA26F18EEE6847D5687AD170BEEC0548542F0E312FAE35B0F7',
          exponent: 0,
          aliases: ['ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8']
        }, {
          denom: 'shibac',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9C3B3F6483776FBA26F18EEE6847D5687AD170BEEC0548542F0E312FAE35B0F7',
      name: 'ShibaCosmos',
      display: 'shibac',
      symbol: 'SHIBAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/447A0DCE83691056289503DDAB8EB08E52E167A73629F2ACC59F056B92F51CE8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/shibacosmos.png'
        }]
    },
    {
      description: 'Sikoba Governance Token',
      denom_units: [{
          denom: 'ibc/220C0E64C8A28A180DF0004E45916A261F0375DCD04CE62547CD1A268996A305',
          exponent: 0,
          aliases: ['ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E']
        }, {
          denom: 'sikoba',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/220C0E64C8A28A180DF0004E45916A261F0375DCD04CE62547CD1A268996A305',
      name: 'Sikoba Token',
      display: 'sikoba',
      symbol: 'SKOJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/71066B030D8FC6479E638580E1BA9C44925E8C1F6E45036669D22017CFDC8C5E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sikoba.svg'
        }]
    },
    {
      description: 'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [{
          denom: 'ibc/F8382AA86546B8209DBDDB254E9F204F45CCC97372D5FB82314ED045A5CDB9B1',
          exponent: 0,
          aliases: ['ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68']
        }, {
          denom: 'nct',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F8382AA86546B8209DBDDB254E9F204F45CCC97372D5FB82314ED045A5CDB9B1',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg'
        }]
    },
    {
      description: 'Celestims',
      denom_units: [{
          denom: 'ibc/B68829915E7E4A2F8657C015537B3195B15F7199D6444A1CF3BD22E16A864166',
          exponent: 0,
          aliases: ['ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA']
        }, {
          denom: 'clst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B68829915E7E4A2F8657C015537B3195B15F7199D6444A1CF3BD22E16A864166',
      name: 'Celestims',
      display: 'clst',
      symbol: 'CLST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0E4FA664327BD40B32803EE84A77F145834C0281B7F82B65521333B3669FA0BA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/celestims.png'
        }]
    },
    {
      description: 'The First Doge on Osmosis',
      denom_units: [{
          denom: 'ibc/21730A4A560AF2B5C0BD3FEBF82C9DEFD6DFE50A0EBAD7172E750EDCEE0174ED',
          exponent: 0,
          aliases: ['ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156']
        }, {
          denom: 'osdoge',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/21730A4A560AF2B5C0BD3FEBF82C9DEFD6DFE50A0EBAD7172E750EDCEE0174ED',
      name: 'Osmosis Doge',
      display: 'osdoge',
      symbol: 'OSDOGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8AEEA9B9304392070F72611076C0E328CE3F2DECA1E18557E36F9DB4F09C0156',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/osdoge.png'
        }]
    },
    {
      description: 'Apemos',
      denom_units: [{
          denom: 'ibc/82D9D67AD8B21862DF0EE72218B029E4FB93026EB528724BDCCACC2CE44E9712',
          exponent: 0,
          aliases: ['ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D']
        }, {
          denom: 'apemos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/82D9D67AD8B21862DF0EE72218B029E4FB93026EB528724BDCCACC2CE44E9712',
      name: 'Apemos',
      display: 'apemos',
      symbol: 'APEMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1EB03F13F29FEA73444586FC4E88A8C14ACE9291501E9658E3BEF951EA4AC85D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/apemos.png'
        }]
    },
    {
      description: 'Evmos Guardians\' Invaders DAO token.',
      denom_units: [{
          denom: 'ibc/A5822D30F1C4F78CDD1C42EB819477155C9F4737D542F10600673C08B03D4BD0',
          exponent: 0,
          aliases: ['ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54']
        }, {
          denom: 'invdrs',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A5822D30F1C4F78CDD1C42EB819477155C9F4737D542F10600673C08B03D4BD0',
      name: 'Invaders',
      display: 'invdrs',
      symbol: 'INVDRS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/3DB1721541C94AD19D7735FECED74C227E13F925BDB814392980B40A19C1ED54',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/invdrs.png'
        }]
    },
    {
      description: 'Doge Apr',
      denom_units: [{
          denom: 'ibc/6157FBF71441EF6217ED02D0487BC240DA30ECF9B19362BC7F227D98AFF16DED',
          exponent: 0,
          aliases: ['ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250']
        }, {
          denom: 'doga',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6157FBF71441EF6217ED02D0487BC240DA30ECF9B19362BC7F227D98AFF16DED',
      name: 'Doge Apr',
      display: 'doga',
      symbol: 'DOGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/04BE4E9C825ED781F9684A1226114BB49607500CAD855F1E3FEEC18532297250',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/doga.png'
        }]
    },
    {
      description: 'Catmos',
      denom_units: [{
          denom: 'ibc/0E4E74FAEC49B571A8D249C5BF9B70BB12862C06B6F0094BC734B3A8E2A55FB1',
          exponent: 0,
          aliases: ['ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835']
        }, {
          denom: 'catmos',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0E4E74FAEC49B571A8D249C5BF9B70BB12862C06B6F0094BC734B3A8E2A55FB1',
      name: 'Catmos',
      display: 'catmos',
      symbol: 'CATMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F4A07138CAEF0BFB4889E03C44C57956A48631061F1C8AB80421C1F229C1B835',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/catmos.png'
        }]
    },
    {
      description: 'Social Impact DAO providing showers, meals, and vehicles to the homeless',
      denom_units: [{
          denom: 'ibc/9ED9F6E456B078FDE0E4A4695052968BF1A774C5D1D37FC5C00886E435270AD8',
          exponent: 0,
          aliases: ['ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A']
        }, {
          denom: 'summit',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9ED9F6E456B078FDE0E4A4695052968BF1A774C5D1D37FC5C00886E435270AD8',
      name: 'Summit',
      display: 'summit',
      symbol: 'SUMMIT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/56B988C4D934FB7503F5EA9B440C75D489C8AD5D193715B477BEC4F84B8BBA2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/summit.png'
        }]
    },
    {
      description: 'The native staking token of OmniFlix Hub.',
      denom_units: [{
          denom: 'ibc/8E6A8D16955CB537E98C2D6EE1885AB00AE2D4279A169F945EBD0593DB633D4C',
          exponent: 0,
          aliases: ['ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F']
        }, {
          denom: 'flix',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8E6A8D16955CB537E98C2D6EE1885AB00AE2D4279A169F945EBD0593DB633D4C',
      name: 'OmniFlix',
      display: 'flix',
      symbol: 'FLIX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CEE970BB3D26F4B907097B6B660489F13F3B0DA765B83CC7D9A0BC0CE220FA6F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
        }]
    },
    {
      description: 'Spacer',
      denom_units: [{
          denom: 'ibc/587FF396AF07560DDE5D57FB589BC248AEDCA361ADF2A01C252317CB07591912',
          exponent: 0,
          aliases: ['ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C']
        }, {
          denom: 'spacer',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/587FF396AF07560DDE5D57FB589BC248AEDCA361ADF2A01C252317CB07591912',
      name: 'Spacer',
      display: 'spacer',
      symbol: 'SPACER',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/7A496DB7C2277D4B74EC4428DDB5AC8A62816FBD0DEBE1CFE094935D746BE19C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/spacer.png'
        }]
    },
    {
      description: 'Light: LumenX community DAO treasury token',
      denom_units: [{
          denom: 'ibc/251B1F7E6625E8EAABA5E34C1C05242EE800CEB78AAFD1F39CC4AF00B07B1F59',
          exponent: 0,
          aliases: ['ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29']
        }, {
          denom: 'light',
          exponent: 9
        }],
      type_asset: 'ics20',
      base: 'ibc/251B1F7E6625E8EAABA5E34C1C05242EE800CEB78AAFD1F39CC4AF00B07B1F59',
      name: 'LIGHT',
      display: 'light',
      symbol: 'LIGHT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/3DC08BDF2689978DBCEE28C7ADC2932AA658B2F64B372760FBC5A0058669AD29',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/light.png'
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/045BC322F3A7F453E10747B6EE6EF55403D62C9E60FAE8FF06B16B9B4DB84F22',
          exponent: 0,
          aliases: ['ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/045BC322F3A7F453E10747B6EE6EF55403D62C9E60FAE8FF06B16B9B4DB84F22',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8A025A1E70101E39DE0C0F153E582A30806D3DA16795F6D868A3AA247D2DEDF7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }]
    },
    {
      description: 'Mille: the 1000th token on osmosis',
      denom_units: [{
          denom: 'ibc/479D812EC62518DE5E3A70669EE65C3323F26CD1D37D458133A904E23D6799A2',
          exponent: 0,
          aliases: ['ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF']
        }, {
          denom: 'mile',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/479D812EC62518DE5E3A70669EE65C3323F26CD1D37D458133A904E23D6799A2',
      name: 'Mille',
      display: 'mile',
      symbol: 'MILE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/912275A63A565BFD80734AEDFFB540132C51E446EAC41483B26EDE8A557C71CF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/mille.png'
        }]
    },
    {
      description: 'Social Impact DAO dedicated to combatting food insecurity and malnutrition',
      denom_units: [{
          denom: 'ibc/9AAF68194CB973F020C9532EDC5054F53D414BB75517EBC35CF940806D9B87C9',
          exponent: 0,
          aliases: ['ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B']
        }, {
          denom: 'manna',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9AAF68194CB973F020C9532EDC5054F53D414BB75517EBC35CF940806D9B87C9',
      name: 'Manna',
      display: 'manna',
      symbol: 'MANNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/980A2748F37C938AD129B92A51E2ABA8CFFC6862ADD61EC1B291125535DBE30B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/manna.png'
        }]
    },
    {
      description: 'Filecoin is a decentralized storage network designed to turn cloud storage into an algorithmic market. The network facilitates open markets for storing and retrieving data, where users pay to store their files on storage miners. Filecoin is built on top of the InterPlanetary File System (IPFS), a peer-to-peer storage network. Filecoin aims to store data in a decentralized manner, unlike traditional cloud storage providers.\n\nParticipants in the Filecoin network are incentivized to act honestly and store as much data as possible because they earn the Filecoin cryptocurrency (FIL) in exchange for their storage services. This setup ensures the integrity and accessibility of data stored. Filecoin\'s model allows for a variety of storage options, including long-term archival storage and more rapid retrieval services, making it a versatile solution for decentralized data storage. The project, developed by Protocol Labs, also focuses on ensuring that data is stored reliably and efficiently.',
      denom_units: [{
          denom: 'ibc/7CF99187D9BBAE58EFCFA53610DF0692B54DCA17729EEEA14703BE47887131D5',
          exponent: 0,
          aliases: ['ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D']
        }, {
          denom: 'fil',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/7CF99187D9BBAE58EFCFA53610DF0692B54DCA17729EEEA14703BE47887131D5',
      name: 'Filecoin',
      display: 'fil',
      symbol: 'FIL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/18FB5C09D9D2371F659D4846A956FA56225E377EE3C3652A2BF3542BF809159D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/filecoin/images/fil.svg'
        }]
    },
    {
      description: 'Void',
      denom_units: [{
          denom: 'ibc/BF2CDA6310DE8ECC2A2A24204CCA2006F87D4514095BDA3ABFC9F4CC1BD123DF',
          exponent: 0,
          aliases: ['ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960']
        }, {
          denom: 'void',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BF2CDA6310DE8ECC2A2A24204CCA2006F87D4514095BDA3ABFC9F4CC1BD123DF',
      name: 'Void',
      display: 'void',
      symbol: 'VOID',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/593F820ECE676A3E0890C734EC4F3A8DE16EC10A54EEDFA8BDFEB40EEA903960',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/void.png'
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/144DCC7AC46BED47BB85ACA24F9574B2ED8381255ACC82B7763E58D12399DB8D',
          exponent: 0,
          aliases: ['ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/144DCC7AC46BED47BB85ACA24F9574B2ED8381255ACC82B7763E58D12399DB8D',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0B3D528E74E3DEAADF8A68F393887AC7E06028904D02173561B0D27F6E751D0A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }]
    },
    {
      description: 'The native token of Bluzelle',
      denom_units: [{
          denom: 'ibc/6BCA4B94ADBA067F03A0E247FDA807B9F844377C4E949FFE6896D48BFCFA6956',
          exponent: 0,
          aliases: ['ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8']
        }, {
          denom: 'bnt',
          exponent: 6,
          aliases: ['blz']
        }],
      type_asset: 'ics20',
      base: 'ibc/6BCA4B94ADBA067F03A0E247FDA807B9F844377C4E949FFE6896D48BFCFA6956',
      name: 'Bluzelle',
      display: 'bnt',
      symbol: 'BLZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/63CDD51098FD99E04E5F5610A3882CBE7614C441607BA6FCD7F3A3C1CD5325F8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluzelle/images/bluzelle.svg'
        }],
      keywords: ['bluzelle', 'game']
    },
    {
      description: 'Native token of Arbitrum',
      denom_units: [{
          denom: 'ibc/46EC70B4A280010A377C0A43E0B23077C38E029EF8FF06A0BE5304FFBEF89A01',
          exponent: 0,
          aliases: ['ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/46EC70B4A280010A377C0A43E0B23077C38E029EF8FF06A0BE5304FFBEF89A01',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/10E5E5B06D78FFBB61FD9F89209DEE5FD4446ED0550CBB8E3747DA79E10D9DC6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }]
    },
    {
      description: 'Silica',
      denom_units: [{
          denom: 'ibc/AEE05B46A93C558A8234306B23019F4BEAD6360518417E6329264BA3D8656D81',
          exponent: 0,
          aliases: ['ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07']
        }, {
          denom: 'silica',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AEE05B46A93C558A8234306B23019F4BEAD6360518417E6329264BA3D8656D81',
      name: 'Silica',
      display: 'silica',
      symbol: 'SLCA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5164ECF584AD7DC27DA9E6A89E75DAB0F7C4FCB0A624B69215B8BC6A2C40CD07',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/silica.png'
        }]
    },
    {
      description: 'Pepec',
      denom_units: [{
          denom: 'ibc/D04BEB1E3E0B70FD8699ACA336F41A11F413B1BF7CFE2F3D19FD0B5682A7B043',
          exponent: 0,
          aliases: ['ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93']
        }, {
          denom: 'pepec',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D04BEB1E3E0B70FD8699ACA336F41A11F413B1BF7CFE2F3D19FD0B5682A7B043',
      name: 'Pepec',
      display: 'pepec',
      symbol: 'PEPEC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/C00B17F74C94449A62935B4C886E6F0F643249A270DEF269D53CE6741ECCDB93',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/pepec.png'
        }]
    },
    {
      description: '',
      denom_units: [{
          denom: 'ibc/0613D71275C11E6671CEDDF660B63EBEF73FC51F09DAEE84A153597BD993A947',
          exponent: 0,
          aliases: ['ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0613D71275C11E6671CEDDF660B63EBEF73FC51F09DAEE84A153597BD993A947',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E47F4E97C534C95B942729E1B25DBDE111EA791411CFF100515050BEA0AC0C6B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/3616134E71F4F7C0AFD22C439567E8C514BE88955903834F4580D9E3E4E3470F',
          exponent: 0,
          aliases: ['factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx']
        }, {
          denom: 'ibcx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm',
      base: 'ibc/3616134E71F4F7C0AFD22C439567E8C514BE88955903834F4580D9E3E4E3470F',
      name: 'IBC Index',
      display: 'ibcx',
      symbol: 'IBCX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibcx.svg'
        }],
      coingecko_id: 'ibc-index',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Coinbase Wrapped Staked ETH (“cbETH”) is a utility token and liquid representation of ETH staked through Coinbase. cbETH gives customers the option to sell, transfer, or otherwise use their staked ETH in dapps while it remains locked by the Ethereum protocol.',
      denom_units: [{
          denom: 'ibc/01BD65F089F7706769395DEB6C86EB32752BEE66C926D772E93F5E7C79688BA6',
          exponent: 0,
          aliases: ['ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A']
        }, {
          denom: 'cbeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/01BD65F089F7706769395DEB6C86EB32752BEE66C926D772E93F5E7C79688BA6',
      name: 'Coinbase Wrapped Staked ETH',
      display: 'cbeth',
      symbol: 'cbETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4D7A6F2A7744B1534C984A21F9EDFFF8809FC71A9E9243FFB702073E7FCA513A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/cbeth.png'
        }]
    },
    {
      description: 'Rocket Pool is a decentralised Ethereum Proof of Stake pool.',
      denom_units: [{
          denom: 'ibc/CE36678C64EFCE5920D37C4CBE3D30D1EDC52E180BB509E37315602FDBA77BDB',
          exponent: 0,
          aliases: ['ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/CE36678C64EFCE5920D37C4CBE3D30D1EDC52E180BB509E37315602FDBA77BDB',
      name: 'Rocket Pool Ether',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E610B83FD5544E00A8A1967A2EB3BEF25F1A8CFE8650FE247A8BD4ECA9DC9222',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
        }]
    },
    {
      description: 'sfrxETH is the version of frxETH which accrues staking yield. All profit generated from Frax Ether validators is distributed to sfrxETH holders. By exchanging frxETH for sfrxETH, one become\'s eligible for staking yield, which is redeemed upon converting sfrxETH back to frxETH.',
      denom_units: [{
          denom: 'ibc/A8E36DC320EE5B9B2633E853057F436CC11189D3667AE6B84B4C854951352FBA',
          exponent: 0,
          aliases: ['ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A8E36DC320EE5B9B2633E853057F436CC11189D3667AE6B84B4C854951352FBA',
      name: 'Staked Frax Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/81F578C39006EB4B27FFFA9460954527910D73390991B379C03B18934D272F46',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C5923DCDD92C2D738A8548B0878FD5060A15B189AA4C0C8C3DAF55B0B5D52208',
          exponent: 0,
          aliases: ['ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C']
        }, {
          denom: 'wsteth',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/C5923DCDD92C2D738A8548B0878FD5060A15B189AA4C0C8C3DAF55B0B5D52208',
      name: 'Wrapped Lido Staked Ether (Axelar)',
      display: 'wsteth',
      symbol: 'wstETH.axl',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B2BD584CD2A0A9CE53D4449667E26160C7D44A9C41AF50F602C201E5B3CCA46C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wstETH.axl.svg'
        }]
    },
    {
      description: 'The native token of Gitopia',
      denom_units: [{
          denom: 'ibc/2E39FF9B7A8495794A830420E71BF79D2F635C65AFE389A8E96F9B11D479BCF1',
          exponent: 0,
          aliases: ['ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3']
        }, {
          denom: 'LORE',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2E39FF9B7A8495794A830420E71BF79D2F635C65AFE389A8E96F9B11D479BCF1',
      name: 'Gitopia',
      display: 'LORE',
      symbol: 'LORE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B1C1806A540B3E165A2D42222C59946FB85BA325596FC85662D7047649F419F3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/lore.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gitopia/images/gitopia.png'
        }]
    },
    {
      description: 'Lion DAO is a community DAO that lives on the Terra blockchain with the mission to reactivate the LUNAtic community and showcase Terra protocols & tooling',
      denom_units: [{
          denom: 'ibc/96889B20952DB974D80CB1DF021BD943064013519DD15545B55CEEEAC5EA2BF6',
          exponent: 0,
          aliases: ['ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0']
        }, {
          denom: 'roar',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/96889B20952DB974D80CB1DF021BD943064013519DD15545B55CEEEAC5EA2BF6',
      name: 'Lion DAO',
      display: 'roar',
      symbol: 'ROAR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/98BCD43F190C6960D0005BC46BB765C827403A361C9C03C2FF694150A30284B0',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/roar.png'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2278FCFE83B9477FC1E44C906764BE0F6844B24F8FE503C083B0CDE8D69D7FEC',
          exponent: 0,
          aliases: ['ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F']
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2278FCFE83B9477FC1E44C906764BE0F6844B24F8FE503C083B0CDE8D69D7FEC',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/02F196DA6FD0917DD5FEA249EE61880F4D941EE9059E7964C5C9B50AF103800F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/D4A5AE8E8DD0D49F559F9D85EDF17643E3444BD424FFE7158A8187A5BAFDD463',
          exponent: 0,
          aliases: ['factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx']
        }, {
          denom: 'stibcx',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k',
      base: 'ibc/D4A5AE8E8DD0D49F559F9D85EDF17643E3444BD424FFE7158A8187A5BAFDD463',
      name: 'Staked IBCX',
      display: 'stibcx',
      symbol: 'stIBCX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/stibcx.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/989DF9B673551127FB0176F748F43E6CF67BAF429535DBC8CA1644B5FAF80453',
          exponent: 0,
          aliases: ['ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/989DF9B673551127FB0176F748F43E6CF67BAF429535DBC8CA1644B5FAF80453',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }]
    },
    {
      description: 'Lion Cub DAO is a useless meme community DAO on Terra',
      denom_units: [{
          denom: 'ibc/66877CDE787A7DF5EC1B6A14DDB32EB728CB5DAC77ACF7CE64B985CFCD9CA922',
          exponent: 0,
          aliases: ['ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3']
        }, {
          denom: 'cub',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/66877CDE787A7DF5EC1B6A14DDB32EB728CB5DAC77ACF7CE64B985CFCD9CA922',
      name: 'Lion Cub DAO',
      display: 'cub',
      symbol: 'CUB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6F18EFEBF1688AA77F7EAC17065609494DC1BA12AFC78E9AEC832AF70A11BEF3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/cub.png'
        }]
    },
    {
      description: 'BLUE CUB DAO is a community DAO on Terra',
      denom_units: [{
          denom: 'ibc/E5C145FDC1F7B1749892A2D6211055C5535FA11CAFD2D14328B7E0899D723D6A',
          exponent: 0,
          aliases: ['ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E']
        }, {
          denom: 'blue',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E5C145FDC1F7B1749892A2D6211055C5535FA11CAFD2D14328B7E0899D723D6A',
      name: 'BLUE CUB DAO',
      display: 'blue',
      symbol: 'BLUE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DA961FE314B009C38595FFE3AF41225D8894D663B8C3F6650DCB5B6F8435592E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/blue.png'
        }]
    },
    {
      description: 'The native token of Neutron chain.',
      denom_units: [{
          denom: 'ibc/2618B5E5370860FDA9E5745C0C8866DEE8077422B91EF52FC6E3926411FED81C',
          exponent: 0,
          aliases: ['ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682']
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/2618B5E5370860FDA9E5745C0C8866DEE8077422B91EF52FC6E3926411FED81C',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/126DA09104B71B164883842B769C0E9EC1486C0887D27A9999E395C2C8FB5682',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }]
    },
    {
      description: 'An innovative DAO dedicated to housing the most vulnerable',
      denom_units: [{
          denom: 'ibc/35B5517BE99B2CECDFEEA830E1EF32868A462097781D9DC6629DF158755C2C83',
          exponent: 0,
          aliases: ['ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE']
        }, {
          denom: 'casa',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/35B5517BE99B2CECDFEEA830E1EF32868A462097781D9DC6629DF158755C2C83',
      name: 'Casa',
      display: 'casa',
      symbol: 'CASA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2F5C084037D951B24D100F15CC013A131DF786DCE1B1DBDC48F018A9B9A138DE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/casa.png'
        }]
    },
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [{
          denom: 'ibc/7F2DC2A595EDCAEC1C03D607C6DC3C79EDDC029A53D16C0788835C1A9AA06306',
          exponent: 0,
          aliases: ['ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/7F2DC2A595EDCAEC1C03D607C6DC3C79EDDC029A53D16C0788835C1A9AA06306',
      name: 'Composable',
      display: 'pica',
      symbol: 'PICA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [{
          denom: 'ibc/4859E46FF89C3A8D361A2F69CB04A2F5CD9D2CB01171E9D91B9E36405B89318A',
          exponent: 0,
          aliases: ['ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/4859E46FF89C3A8D361A2F69CB04A2F5CD9D2CB01171E9D91B9E36405B89318A',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6727B2F071643B3841BD535ECDD4ED9CAE52ABDD0DCD07C3630811A7A37B215C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }]
    },
    {
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denom_units: [{
          denom: 'ibc/7280849251B84B8656D2D58DFF52406D4066E75192A8C3EDBF617ED9A64ECF9F',
          exponent: 0,
          aliases: ['ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/7280849251B84B8656D2D58DFF52406D4066E75192A8C3EDBF617ED9A64ECF9F',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }]
    },
    {
      description: 'The native token of Quasar',
      denom_units: [{
          denom: 'ibc/FF456FD21AA44251D2122BF19B20C5FE717A1EBD054A59FA1CA4B21742048CA0',
          exponent: 0,
          aliases: ['ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477']
        }, {
          denom: 'qsr',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/FF456FD21AA44251D2122BF19B20C5FE717A1EBD054A59FA1CA4B21742048CA0',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1B708808D372E959CD4839C594960309283424C775F4A038AAEBE7F83A988477',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
      },
      images: [{
          image_sync: {
            chain_name: 'quasar',
            base_denom: 'uqsr'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png'
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/3A963B6128F23E6C155FFEE2D4772084483E384082E144A5669533F9C9D3236D',
          exponent: 0,
          aliases: ['ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85']
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/3A963B6128F23E6C155FFEE2D4772084483E384082E144A5669533F9C9D3236D',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/23AB778D694C1ECFC59B91D8C399C115CC53B0BD1C61020D8E19519F002BDD85',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }]
    },
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [{
          denom: 'ibc/34F81A1D01956BB2B2D3C586ED63B21E6139CE3182D41C7826CA019E69CA57E3',
          exponent: 0,
          aliases: ['ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38']
        }, {
          denom: 'mpwr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/34F81A1D01956BB2B2D3C586ED63B21E6139CE3182D41C7826CA019E69CA57E3',
      name: 'EmpowerChain',
      display: 'mpwr',
      symbol: 'MPWR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DD3938D8131F41994C1F01F4EB5233DEE9A0A5B787545B9A07A321925655BF38',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg'
        }]
    },
    {
      description: 'A revolutionary DAO created to bring clean drinking water to men, women, and children worldwide. We hope you join us on our journey!',
      denom_units: [{
          denom: 'ibc/80D1EF62ECD2AC85085B8A9834538EDD816B38245DA926012EC3E9ABCAC513E8',
          exponent: 0,
          aliases: ['ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E']
        }, {
          denom: 'watr',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/80D1EF62ECD2AC85085B8A9834538EDD816B38245DA926012EC3E9ABCAC513E8',
      name: 'WATR',
      display: 'watr',
      symbol: 'WATR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/AABCB14ACAFD53A5C455BAC01EA0CA5AE18714895846681A52BFF1E3B960B44E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/watr.png'
        }]
    },
    {
      description: 'The native utility token of the KYVE network.',
      denom_units: [{
          denom: 'ibc/FB22202BC0731E18BBD8B15802A7DA5DBBD3472EBDF2FF878CD99FAB9C1AE1F8',
          exponent: 0,
          aliases: ['ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13']
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FB22202BC0731E18BBD8B15802A7DA5DBBD3472EBDF2FF878CD99FAB9C1AE1F8',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/613BF0BF2F2146AE9941E923725745E931676B2C14E9768CD609FA0849B2AE13',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }]
    },
    {
      description: 'Tether gives you the joint benefits of open blockchain technology and traditional currency by converting your cash into a stable digital currency equivalent.',
      denom_units: [{
          denom: 'ibc/A291356F2AE84BEB344DEA335F837AAFBA43C873009D0AC9333E6E3B04AB1AA9',
          exponent: 0,
          aliases: ['ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A291356F2AE84BEB344DEA335F837AAFBA43C873009D0AC9333E6E3B04AB1AA9',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }]
    },
    {
      description: 'ERIS liquid staked OSMO',
      denom_units: [{
          denom: 'ibc/AA054FD00F476B91C63F27F591B410CCC8F9DB1FC829B51353C51458E2817434',
          exponent: 0,
          aliases: ['factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO']
        }, {
          denom: 'ampOSMO',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9',
      base: 'ibc/AA054FD00F476B91C63F27F591B410CCC8F9DB1FC829B51353C51458E2817434',
      name: 'ERIS Amplified OSMO',
      display: 'ampOSMO',
      symbol: 'ampOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/amposmo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native staking token of Sei.',
      denom_units: [{
          denom: 'ibc/FBBF48C3095F71AC3AEE7179DD5DC506BBCC1B6D8626F1ACF7779C6D13F15E57',
          exponent: 0,
          aliases: ['ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D']
        }, {
          denom: 'sei',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FBBF48C3095F71AC3AEE7179DD5DC506BBCC1B6D8626F1ACF7779C6D13F15E57',
      name: 'Sei',
      display: 'sei',
      symbol: 'SEI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/71F11BC0AF8E526B80E44172EBA9D3F0A8E03950BB882325435691EBC9450B1D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [{
          denom: 'ibc/2B54CBC5D1F2DED4CED074202E3D2A092CDA9F77C6F019B0549F263035AF44AA',
          exponent: 0,
          aliases: ['ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208']
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/2B54CBC5D1F2DED4CED074202E3D2A092CDA9F77C6F019B0549F263035AF44AA',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/EAF76AD1EEF7B16D167D87711FB26ABE881AC7D9F7E6D0CF313D5FA530417208',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Passage chain.',
      denom_units: [{
          denom: 'ibc/FA7A1FB4024F20C5E6EAAD0D8FFE7CC17B5AE9D7E05B810359EBAE2C1D1AD37B',
          exponent: 0,
          aliases: ['ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FA7A1FB4024F20C5E6EAAD0D8FFE7CC17B5AE9D7E05B810359EBAE2C1D1AD37B',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/208B2F137CDE510B44C41947C045CFDC27F996A9D990EA64460BDD5B3DBEB2ED',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7A3709D7BF6BEB01F1AB4E91D14C9CA54FA19C7EE34CA0CB3FD7A571A07307A1',
          exponent: 0,
          aliases: ['ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B']
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7A3709D7BF6BEB01F1AB4E91D14C9CA54FA19C7EE34CA0CB3FD7A571A07307A1',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5A0060579D24FBE5268BEA74C3281E7FE533D361C41A99307B4998FEC611E46B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }]
    },
    {
      description: 'Solana (SOL) is the native asset of the Solana blockchain.',
      denom_units: [{
          denom: 'ibc/9F0B3A7B9DD7648B446F63EA04BA22D86B9D502EE32641D24827CF1622160035',
          exponent: 0,
          aliases: ['ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA']
        }, {
          denom: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/9F0B3A7B9DD7648B446F63EA04BA22D86B9D502EE32641D24827CF1622160035',
      name: 'Solana',
      display: 'wormhole/8sYgCzLRJC3J7qPn2bNbx6PiGcarhyx8rBhVaNnfvHCA/8',
      symbol: 'SOL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1E43D59E565D41FB4E54CA639B838FFD5BCFC20003D330A56CB1396231AA1CBA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol.svg'
        }]
    },
    {
      description: 'The Official Bonk Inu token',
      denom_units: [{
          denom: 'ibc/8CA53D657D63BA837E890FC8F56C693039C0DBD411BA6910F54DBE77F63E63BB',
          exponent: 0,
          aliases: ['ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E']
        }, {
          denom: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
          exponent: 5,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/8CA53D657D63BA837E890FC8F56C693039C0DBD411BA6910F54DBE77F63E63BB',
      name: 'Bonk',
      display: 'wormhole/95mnwzvJZJ3fKz77xfGN2nR5to9pZmH8YNvaxgLgw5AR/5',
      symbol: 'BONK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CA3733CB0071F480FAE8EF0D9C3D47A49C6589144620A642BBE0D59A293D110E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bonk.png'
        }]
    },
    {
      description: 'Tether USD (Wormhole), USDT, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi',
      denom_units: [{
          denom: 'ibc/CE65E650FECD0D5CE4E6CF67A0BB75007E1C5F7E3F7D3561FB6CE6AB53671BEE',
          exponent: 0,
          aliases: ['ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C']
        }, {
          denom: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/CE65E650FECD0D5CE4E6CF67A0BB75007E1C5F7E3F7D3561FB6CE6AB53671BEE',
      name: 'Tether USD (Wormhole)',
      display: 'wormhole/8iuAc6DSeLvi2JDUtwJxLytsZT8R19itXebZsNReLLNi/6',
      symbol: 'USDT.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2108F2D81CBE328F371AD0CEF56691B18A86E08C3651504E42487D9EE92DDE9C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdt.hole.svg'
        }]
    },
    {
      description: 'Sui’s native asset is called SUI.',
      denom_units: [{
          denom: 'ibc/421CC0B3437C5A738FE09B6B74282CBBE790B8BE8DD353873308ECB1CBDB66FA',
          exponent: 0,
          aliases: ['ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5']
        }, {
          denom: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/421CC0B3437C5A738FE09B6B74282CBBE790B8BE8DD353873308ECB1CBDB66FA',
      name: 'Sui',
      display: 'wormhole/46YEtoSN1AcwgGSRoWruoS6bnVh8XpMp5aQTpKohCJYh/8',
      symbol: 'SUI',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B1C287C2701774522570010EEBCD864BCB7AB714711B3AA218699FDD75E832F5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/sui/images/sui.svg'
        }]
    },
    {
      description: 'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denom_units: [{
          denom: 'ibc/5444DD7A51F088492E4C9C67858AB02ECA739D49800108247C5FBACEE2573EF8',
          exponent: 0,
          aliases: ['ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE']
        }, {
          denom: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/5444DD7A51F088492E4C9C67858AB02ECA739D49800108247C5FBACEE2573EF8',
      name: 'Aptos Coin',
      display: 'wormhole/5wS2fGojbL9RhGEAeQBdkHPUAciYDxjDTMYvdf9aDn2r/8',
      symbol: 'APT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A4D176906C1646949574B48C1928D475F2DF56DE0AC04E1C99B08F90BC21ABDE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            dark_mode: true
          }
        }]
    },
    {
      description: 'MantaDAO Governance Token',
      denom_units: [{
          denom: 'ibc/4B96A07E670A62278FD687DE1DA1E598EC3EBA3DE498930768CCA0C9F742EC61',
          exponent: 0,
          aliases: ['ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B']
        }, {
          denom: 'mnta',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4B96A07E670A62278FD687DE1DA1E598EC3EBA3DE498930768CCA0C9F742EC61',
      name: 'MantaDAO',
      display: 'mnta',
      symbol: 'MNTA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/51D893F870B7675E507E91DA8DB0B22EA66333207E4F5C0708757F08EE059B0B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/mnta.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E9EB71DC00D5B3B33DA4BFC541AB8E76E1EA89B90B39E2140F6625C4C25DC21B',
          exponent: 0,
          aliases: ['ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9']
        }, {
          denom: 'dgl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E9EB71DC00D5B3B33DA4BFC541AB8E76E1EA89B90B39E2140F6625C4C25DC21B',
      name: 'Licorice',
      display: 'dgl',
      symbol: 'DGL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D69F6D787EC649F4E998161A9F0646F4C2DCC64748A2AB982F14CAFBA7CC0EC9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dgl.png'
        }]
    },
    {
      description: 'USD Coin (Wormhole), USDC, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt',
      denom_units: [{
          denom: 'ibc/30676FA5BB1C3595A4BEAF35FF17D03F7E4CE6AA71862CF5BE17C43446A4765C',
          exponent: 0,
          aliases: ['ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695']
        }, {
          denom: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/30676FA5BB1C3595A4BEAF35FF17D03F7E4CE6AA71862CF5BE17C43446A4765C',
      name: 'USD Coin (Wormhole)',
      display: 'wormhole/GGh9Ufn1SeDGrhzEkMyRKt5568VbbxZK2yvWNsd6PbXt/6',
      symbol: 'USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6B99DB46AA9FF47162148C1726866919E44A6A5E0274B90912FD17E19A337695',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }]
    },
    {
      description: 'Wrapped Ether (Wormhole), WETH, factory/wormhole14ejqjyq8um4p3xfqj74yld5waqljf88fz25yxnma0cngspxe3les00fpjx/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp',
      denom_units: [{
          denom: 'ibc/A412629140CA9ED8E9BC8B01B831FAF67A97DA155D54B48F8D89AAA5F925AC1F',
          exponent: 0,
          aliases: ['ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC']
        }, {
          denom: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
          exponent: 8,
          aliases: []
        }],
      type_asset: 'ics20',
      base: 'ibc/A412629140CA9ED8E9BC8B01B831FAF67A97DA155D54B48F8D89AAA5F925AC1F',
      name: 'Wrapped Ether (Wormhole)',
      display: 'wormhole/5BWqpR48Lubd55szM5i62zK7TFkddckhbT48yy6mNbDp/8',
      symbol: 'wETH.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/62F82550D0B96522361C89B0DA1119DE262FBDFB25E5502BC5101B5C0D0DBAAC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/weth.hole.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
          exponent: 0,
          aliases: ['ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'Maximize ETH yield through leveraged staking across Aave, Compound and Morpho and liquidity provision of ETH liquid staking tokens on Uniswap V3.',
      denom_units: [{
          denom: 'ibc/9F4C0779B5198070691EA6E6630FFD9C714092FD7F8DEB595A9F8B4421A940AC',
          exponent: 0,
          aliases: ['ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668']
        }, {
          denom: 'YieldETH',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/9F4C0779B5198070691EA6E6630FFD9C714092FD7F8DEB595A9F8B4421A940AC',
      name: 'Real Yield ETH',
      display: 'YieldETH',
      symbol: 'YieldETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/FBB3FEF80ED2344D821D4F95C31DBFD33E4E31D5324CAD94EF756E67B749F668',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'yieldeth-wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/yieldeth.svg'
        }]
    },
    {
      description: 'The native staking token of XPLA.',
      denom_units: [{
          denom: 'ibc/3B844A69AF499DB2BF2651C85C00AD7581F3BFB707F598C413E585A7B2086187',
          exponent: 0,
          aliases: ['ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8']
        }, {
          denom: 'xpla',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/3B844A69AF499DB2BF2651C85C00AD7581F3BFB707F598C413E585A7B2086187',
      name: 'XPLA',
      display: 'xpla',
      symbol: 'XPLA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/95C9B5870F95E21A242E6AF9ADCB1F212EE4A8855087226C36FBE43FC41A77B8',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
        }]
    },
    {
      description: 'OIN Token ($OIN) is a groundbreaking digital asset developed on the $SEI Blockchain. It transcends being merely a cryptocurrency; $OIN stands as a robust store of value, symbolizing the future of decentralized finance and its potential to reshape the crypto landscape.',
      denom_units: [{
          denom: 'ibc/275934A2D45D422101E08E0373AC6E0963719607FE45A76304E98C062A52CCA0',
          exponent: 0,
          aliases: ['ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6']
        }, {
          denom: 'oin',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/275934A2D45D422101E08E0373AC6E0963719607FE45A76304E98C062A52CCA0',
      name: 'OIN STORE OF VALUE',
      display: 'oin',
      symbol: 'OIN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/98B3DBF1FA79C4C14CC5F08F62ACD5498560FCB515F677526FD200D54EA048B6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/oin.png'
        }]
    },
    {
      description: 'The token of Neokingdom DAO.',
      denom_units: [{
          denom: 'ibc/A0DA39D0777B656AAE6CCD6B775D9708A253104C51633EA5E19C53598F1D096B',
          exponent: 0,
          aliases: ['ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71']
        }, {
          denom: 'neok',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/A0DA39D0777B656AAE6CCD6B775D9708A253104C51633EA5E19C53598F1D096B',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DEE262653B9DE39BCEF0493D47E0DFC4FE62F7F046CF38B9FDEFEBE98D149A71',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }]
    },
    {
      description: 'The native currency of the Realio Network.',
      denom_units: [{
          denom: 'ibc/0DF5D25E9DAC6C51503D38826E36CF811D594C48C700AED5BE1FC890DE1AF5D9',
          exponent: 0,
          aliases: ['ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF']
        }, {
          denom: 'rio',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0DF5D25E9DAC6C51503D38826E36CF811D594C48C700AED5BE1FC890DE1AF5D9',
      name: 'Realio Network',
      display: 'rio',
      symbol: 'RIO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1CDF9C7D073DD59ED06F15DB08CC0901F2A24759BE70463570E8896F9A444ADF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/realio/images/rio.svg'
        }]
    },
    {
      description: 'Membrane\'s CDP-style stablecoin called CDT',
      denom_units: [{
          denom: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
          exponent: 0,
          aliases: ['factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt']
        }, {
          denom: 'cdt',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
      name: 'CDT Stablecoin',
      display: 'cdt',
      symbol: 'CDT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg'
        }],
      coingecko_id: 'collateralized-debt-token',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Membrane\'s protocol token',
      denom_units: [{
          denom: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
          exponent: 0,
          aliases: ['factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn']
        }, {
          denom: 'mbrn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
      name: 'Membrane',
      display: 'mbrn',
      symbol: 'MBRN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg'
        }],
      coingecko_id: 'membrane',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native token of SGE Network',
      denom_units: [{
          denom: 'ibc/56FB4B78D9DA3AF7CB439A342FF5F5EA8370E20E7160AC78433AF90DD84E7E35',
          exponent: 0,
          aliases: ['ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA']
        }, {
          denom: 'sge',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/56FB4B78D9DA3AF7CB439A342FF5F5EA8370E20E7160AC78433AF90DD84E7E35',
      name: 'SGE',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/A1830DECC0B742F0B2044FF74BE727B5CF92C9A28A9235C3BACE4D24A23504FA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denom_units: [{
          denom: 'ibc/F1B6F69DDBC5F1EF95EFECF72D16CF1FACBB55D4608F2F5AA5ED39901782209D',
          exponent: 0,
          aliases: ['ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862']
        }, {
          denom: 'fis',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F1B6F69DDBC5F1EF95EFECF72D16CF1FACBB55D4608F2F5AA5ED39901782209D',
      name: 'StaFi Hub',
      display: 'fis',
      symbol: 'FIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/01D2F0C4739C871BFBEE7E786709E6904A55559DC1483DD92ED392EF12247862',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }]
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denom_units: [{
          denom: 'ibc/EFC26034450406E3FC3F8130777A4FB1E0D46A75E04EB658623581376C6AF430',
          exponent: 0,
          aliases: ['ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7']
        }, {
          denom: 'ratom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/EFC26034450406E3FC3F8130777A4FB1E0D46A75E04EB658623581376C6AF430',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/B66CE615C600ED0A8B5AF425ECFE0D57BE2377587F66C45934A76886F34DC9B7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }]
    },
    {
      description: 'The native token of ohhNFT.',
      denom_units: [{
          denom: 'ibc/AAFF4B5CCC7B4F0E5F7618CE838F5E48151C5D67E8D4380D733DD77C23D1E016',
          exponent: 0,
          aliases: ['ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B']
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AAFF4B5CCC7B4F0E5F7618CE838F5E48151C5D67E8D4380D733DD77C23D1E016',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/CFF40564FDA3E958D9904B8B479124987901168494655D9CC6B7C0EC0416020B',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
        }]
    },
    {
      description: 'The native staking and governance token of the Theta testnet version of the Dora Vota.',
      denom_units: [{
          denom: 'ibc/0FDC7450039F4F09178C326EAD002568FAC580211DF32763EE2A00622C68C71F',
          exponent: 0,
          aliases: ['ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A']
        }, {
          denom: 'DORA',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0FDC7450039F4F09178C326EAD002568FAC580211DF32763EE2A00622C68C71F',
      name: 'Dora Vota',
      display: 'DORA',
      symbol: 'DORA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/672406ADE4EDFD8C5EA7A0D0DD0C37E431DA7BD8393A15CD2CFDE3364917EB2A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/dora.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/doravota/images/doravota.png'
        }]
    },
    {
      description: 'The native token of Coreum',
      denom_units: [{
          denom: 'ibc/FD5A6797C56591BB28100F8A36FBC809B4452DDD60AFA0E9166EAB5EB8D3AEC9',
          exponent: 0,
          aliases: ['ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65']
        }, {
          denom: 'core',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/FD5A6797C56591BB28100F8A36FBC809B4452DDD60AFA0E9166EAB5EB8D3AEC9',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F3166F4D31D6BA1EC6C9F5536F5DDDD4CC93DBA430F7419E7CDC41C497944A65',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
        }],
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft'
      ]
    },
    {
      description: '',
      denom_units: [{
          denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }]
    },
    {
      description: 'The native staking token of dYdX Protocol.',
      denom_units: [{
          denom: 'ibc/64C2F728722DA2B30083372FD2DDDC86B976F963F5BC18122B86E571E91D6BA3',
          exponent: 0,
          aliases: ['ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/64C2F728722DA2B30083372FD2DDDC86B976F963F5BC18122B86E571E91D6BA3',
      name: 'dYdX Protocol',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/831F0B1BBB1D08A2B75311892876D71565478C532967545476DF4C2D7492E48C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg'
        }]
    },
    {
      description: 'The native staking token of the Function X',
      denom_units: [{
          denom: 'ibc/FEBD6D8837F4D0817BF05966B92220FEE367DB949DAB037A89242BDE088087F2',
          exponent: 0,
          aliases: ['ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9']
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/FEBD6D8837F4D0817BF05966B92220FEE367DB949DAB037A89242BDE088087F2',
      name: 'f(x)Core',
      display: 'WFX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2B30802A0B03F91E4E16D6175C9B70F2911377C1CAE9E50FF011C821465463F9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }]
    },
    {
      description: 'Bitcoin. On Cosmos.',
      denom_units: [{
          denom: 'ibc/05F447D15EE51344959C2EFBCE22B14DA3CB55FB4C56EA71F09CCC54E0BF9678',
          exponent: 0,
          aliases: ['ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F']
        }, {
          denom: 'nbtc',
          exponent: 14
        }],
      type_asset: 'ics20',
      base: 'ibc/05F447D15EE51344959C2EFBCE22B14DA3CB55FB4C56EA71F09CCC54E0BF9678',
      name: 'Nomic Bitcoin',
      display: 'nbtc',
      symbol: 'nBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/75345531D87BD90BF108BE7240BD721CB2CB0A1F16D4EBA71B09EC3C43E15C8F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/B4D30D3FC770F58F0FAC4C593D18DED847844942A2B8D15E0ABDDBF110AE7A6E',
          exponent: 0,
          aliases: ['ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/B4D30D3FC770F58F0FAC4C593D18DED847844942A2B8D15E0ABDDBF110AE7A6E',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6928AFA9EA721938FED13B051F9DBF1272B16393D20C49EA5E4901BB76D94A90',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'nois',
            base_denom: 'unois'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ]
    },
    {
      description: 'Margined Power Token sqOSMO',
      denom_units: [{
          denom: 'ibc/A5BA3F1C38ADAA11F941D66B19A7CD67B127F25DE2EA581BCD2DC4D8D50BEED9',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo']
        }, {
          denom: 'sqosmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/A5BA3F1C38ADAA11F941D66B19A7CD67B127F25DE2EA581BCD2DC4D8D50BEED9',
      name: 'OSMO Squared',
      display: 'sqosmo',
      symbol: 'sqOSMO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqosmo.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The Revenue & Governance token of Unstake.fi',
      denom_units: [{
          denom: 'ibc/ACFE6C03CAD8AB0F9F227D4E8051D4185D36E53934574346B0C43DF7257973CA',
          exponent: 0,
          aliases: ['ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7']
        }, {
          denom: 'nstk',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/ACFE6C03CAD8AB0F9F227D4E8051D4185D36E53934574346B0C43DF7257973CA',
      name: 'Unstake Fi',
      display: 'nstk',
      symbol: 'NSTK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/690EB0A0CA0DA2DC1E9CF62FB23C935AE5C7E9F57919CF89690521D5D70948A7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/nstk.svg'
        }]
    },
    {
      description: 'ohhNFT LP token.',
      denom_units: [{
          denom: 'ibc/808AC8A945D838434DFEEEC7B24DC64C0E78F0C2B8924E5ED9D109D0CE733C6F',
          exponent: 0,
          aliases: ['ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02']
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/808AC8A945D838434DFEEEC7B24DC64C0E78F0C2B8924E5ED9D109D0CE733C6F',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/71DAA4CAFA4FE2F9803ABA0696BA5FC0EFC14305A2EA8B4E01880DB851B1EC02',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
        }]
    },
    {
      description: 'wstETH is a wrapped version of stETH. As some DeFi protocols require a constant balance mechanism for tokens, wstETH keeps your balance of stETH fixed and uses an underlying share system to reflect your earned staking rewards.',
      denom_units: [{
          denom: 'ibc/F80414CE40A173D5D4C17968415E5E0B2562EA1167D6F82188F5E167EC7F8D51',
          exponent: 0,
          aliases: ['ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5']
        }, {
          denom: 'wstETH',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/F80414CE40A173D5D4C17968415E5E0B2562EA1167D6F82188F5E167EC7F8D51',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2F21E6D4271DE3F561F20A02CD541DAF7405B1E9CB3B9B07E3C2AC7D8A4338A5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }]
    },
    {
      description: 'Margined Power Token sqATOM',
      denom_units: [{
          denom: 'ibc/92CA10D8AD5DFA69918E5860570A33922EC9181F013328034D9423D7A3A95C89',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom']
        }, {
          denom: 'sqatom',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/92CA10D8AD5DFA69918E5860570A33922EC9181F013328034D9423D7A3A95C89',
      name: 'ATOM Squared',
      display: 'sqatom',
      symbol: 'sqATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqatom.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Margined Power Token sqBTC',
      denom_units: [{
          denom: 'ibc/8361A05D7FEB200168AD58B4BE8B9A4F4EC3386FED621B94026B925EFBD2DD88',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc']
        }, {
          denom: 'sqbtc',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/8361A05D7FEB200168AD58B4BE8B9A4F4EC3386FED621B94026B925EFBD2DD88',
      name: 'BTC Squared',
      display: 'sqbtc',
      symbol: 'sqBTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqbtc.svg'
        }],
      keywords: ['osmosis_unlisted'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'QWOYN is the native governance token for Qwoyn Network',
      denom_units: [{
          denom: 'ibc/230D8AAC66A6BC62C627C68F3D3E037FE86E518669447A2EDF281A76AAF4F67B',
          exponent: 0,
          aliases: ['ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D']
        }, {
          denom: 'qwoyn',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/230D8AAC66A6BC62C627C68F3D3E037FE86E518669447A2EDF281A76AAF4F67B',
      name: 'Qwoyn',
      display: 'qwoyn',
      symbol: 'QWOYN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/09FAF1E04435E14C68DE7AB0D03C521C92975C792DB12B2EA390BAA2E06B3F3D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qwoyn/images/qwoyn.png'
        }]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denom_units: [{
          denom: 'ibc/350C0539DC4D777E71CB6E0C8DCECD314F0FD2F306E6E72155D87A8F91218C63',
          exponent: 0,
          aliases: ['ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20']
        }],
      type_asset: 'ics20',
      base: 'ibc/350C0539DC4D777E71CB6E0C8DCECD314F0FD2F306E6E72155D87A8F91218C63',
      name: 'Bostrom Hydrogen',
      display: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
      symbol: 'HYDROGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4F3B0EC2FE2D370D10C3671A1B7B06D2A964C721470C305CBB846ED60E6CAA20',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }]
    },
    {
      description: 'The staking token of Cyber',
      denom_units: [{
          denom: 'ibc/8767F3C802E015E0E991811566D0A5745E510A0DBDDAC080A33C58F7B60059D1',
          exponent: 0,
          aliases: ['ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761']
        }],
      type_asset: 'ics20',
      base: 'ibc/8767F3C802E015E0E991811566D0A5745E510A0DBDDAC080A33C58F7B60059D1',
      name: 'Bostrom Tocyb',
      display: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
      symbol: 'TOCYB',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BCDB35B7390806F35E716D275E1E017999F8281A81B6F128F087EF34D1DFA761',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/14EC8627D5E65B5CEB09C805FC5AAFCDB8C2F4D7B32EB74275543FC4C9300E3B',
          exponent: 0,
          aliases: ['ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      type_asset: 'ics20',
      base: 'ibc/14EC8627D5E65B5CEB09C805FC5AAFCDB8C2F4D7B32EB74275543FC4C9300E3B',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D3A1900B2B520E45608B5671ADA461E1109628E89B4289099557C6D3996F7DAA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denom_units: [{
          denom: 'ibc/6C3F74A2CDD8CDB448356A9549A67D75EAB930826B65574095E7C89CD0D828F1',
          exponent: 0,
          aliases: ['ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      type_asset: 'ics20',
      base: 'ibc/6C3F74A2CDD8CDB448356A9549A67D75EAB930826B65574095E7C89CD0D828F1',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/020F5162B7BC40656FC5432622647091F00D53E82EE8D21757B43D3282F25424',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }]
    },
    {
      description: 'The native token of SOURCE Chain',
      denom_units: [{
          denom: 'ibc/CFBAD6BAAAD4D1E91C1875D3A41531671750208354049CA55C46E4701C67BDF5',
          exponent: 0,
          aliases: ['ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7']
        }, {
          denom: 'source',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/CFBAD6BAAAD4D1E91C1875D3A41531671750208354049CA55C46E4701C67BDF5',
      name: 'Source',
      display: 'source',
      symbol: 'SOURCE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E7905742CE2EA4EA5D592527DC89220C59B617DE803939FE7293805A64B484D7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/source/images/source.svg'
        }]
    },
    {
      description: 'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use. The protocol is an interaction between three parties:\n-Publishers submit pricing information to Pyth\'s oracle program. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system.\n-Pyth\'s oracle program combines publishers\' data to produce a single aggregate price and confidence interval.\nConsumers read the price information produced by the oracle program.\n\nPyth\'s oracle program runs simultaneously on both Solana mainnet and Pythnet. Each instance of the program is responsible for its own set of price feeds. Solana Price Feeds are available for use by Solana protocols. In this case, since the oracle program itself runs on Solana, the resulting prices are immediately available to consumers without requiring any additional work. Pythnet Price Feeds are available on 12+ blockchains. The prices constructed on Pythnet are transferred cross-chain to reach consumers on these blockchains.\n\nIn both cases, the critical component of the system is the oracle program that combines the data from each individual publisher. This program maintains a number of different Solana accounts that list the products on Pyth and their current price data. Publishers publish their price and confidence by interacting with the oracle program on every slot. The program stores this information in its accounts. The first price update in a slot additionally triggers price aggregation, which combines the price data from the previous slot into a single aggregate price and confidence interval. This aggregate price is written to the Solana account where it is readable by other on-chain programs and available for transmission to other blockchains.',
      denom_units: [{
          denom: 'ibc/67534FB288920B0EBBC712A55685CF6D718FF2D72262BA6452ACD819D78D4A60',
          exponent: 0,
          aliases: ['ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5']
        }, {
          denom: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
          exponent: 6,
          aliases: ['pyth']
        }],
      type_asset: 'ics20',
      base: 'ibc/67534FB288920B0EBBC712A55685CF6D718FF2D72262BA6452ACD819D78D4A60',
      name: 'Pyth Network',
      display: 'wormhole/B8ohBnfisop27exk2gtNABJyYjLwQA7ogrp5uNzvZCoy/6',
      symbol: 'PYTH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/E42006ED917C769EDE1B474650EEA6BFE3F97958912B9206DD7010A28D01D9D5',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/pyth.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/4E19777F57A46073C673FDAB58A4C6BA85208DCBD5E2948107DE0B7248F0D3B0',
          exponent: 0,
          aliases: ['ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      type_asset: 'ics20',
      base: 'ibc/4E19777F57A46073C673FDAB58A4C6BA85208DCBD5E2948107DE0B7248F0D3B0',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/ECBE78BF7677320A93E7BA1761D144BCBF0CBC247C290C049655E106FE5DC68E',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'persistence',
            base_denom: 'stk/uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }]
    },
    {
      description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts.',
      extended_description: 'Levana Well-funded Perps is a protocol for perpetual swaps, which are leveraged trading contracts. It aims to manage risk and provide benefits to both traders and liquidity providers.\n\nFor traders, Levana\'s solution is to make all positions "well-funded," meaning that the maximum profit for each position is locked in advance. This eliminates the possibility of bad debt and insolvency, providing greater security.\n\nLiquidity providers, on the other hand, receive a yield for taking on the risk of market instability. They supply funds that act as collateral, and in return, they earn a fee with a risk premium.\n\nThe protocol addresses the issues with existing perpetual swap models, such as the virtual AMM. These models rely on complex mechanisms to maintain price stability, but they have limitations and can be risky in volatile markets.\n\nBy separating different trading pairs and creating a decentralized market for liquidity, Levana reduces the risk of contagion between different markets. This also makes it easier to expand to other blockchain networks.\n\nOverall, Levana\'s perpetual swaps protocol offers a reliable and secure platform for traders and liquidity providers. It ensures fair settlement, minimizes risks, and allows for the development of additional financial protocols on top of tokenized positions.',
      denom_units: [{
          denom: 'ibc/4786BEBBFDD989C467C4552AD73065D8B2578230B8428B3B9275D540EB04C851',
          exponent: 0,
          aliases: ['factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn']
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/4786BEBBFDD989C467C4552AD73065D8B2578230B8428B3B9275D540EB04C851',
      name: 'Levana',
      display: 'lvn',
      symbol: 'LVN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/levana.png'
        }],
      coingecko_id: 'levana-protocol',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Puppy',
      denom_units: [{
          denom: 'ibc/03CB6D5502207C9087EB9EDAB988EEE02870C925908F6B6CB59087F9B6ADC532',
          exponent: 0,
          aliases: ['ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963']
        }, {
          denom: 'puppy',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/03CB6D5502207C9087EB9EDAB988EEE02870C925908F6B6CB59087F9B6ADC532',
      name: 'Puppy',
      display: 'puppy',
      symbol: 'PUPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/46AC07DBFF1352EC94AF5BD4D23740D92D9803A6B41F6E213E77F3A1143FB963',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/puppyhuahua_logo.png'
        }],
      keywords: ['osmosis_unstable']
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [{
          denom: 'ibc/C04AAA6561062090CB8F1747EBE5F6A7A0F6E9CC5B9B39F8A18803BED9DBB64A',
          exponent: 0,
          aliases: ['ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD']
        }, {
          denom: 'newt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C04AAA6561062090CB8F1747EBE5F6A7A0F6E9CC5B9B39F8A18803BED9DBB64A',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/BF685448E564B5A4AC8F6E0493A0B979D0E0BF5EC11F7E15D25A0A2160C944DD',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
          exponent: 0,
          aliases: ['factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA']
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/milktia.svg'
        }],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'ASH',
      denom_units: [{
          denom: 'ibc/57B520FC8D0E3B4B490D714CE37273BA68AECEF698D0772D71DF1168365A6F77',
          exponent: 0,
          aliases: ['ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC']
        }, {
          denom: 'ASH',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/57B520FC8D0E3B4B490D714CE37273BA68AECEF698D0772D71DF1168365A6F77',
      name: 'ASH',
      display: 'ASH',
      symbol: 'ASH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4976049456D261659D0EC499CC9C2391D3C7D1128A0B9FB0BBF2842D1B2BC7BC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/ash.svg'
        }]
    },
    {
      description: 'RAC',
      denom_units: [{
          denom: 'ibc/92B013CE0BE2CED39AA023444DA32C9D0FD95FE6E75FC7647A926AE9D0D33C9D',
          exponent: 0,
          aliases: ['ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493']
        }, {
          denom: 'RAC',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/92B013CE0BE2CED39AA023444DA32C9D0FD95FE6E75FC7647A926AE9D0D33C9D',
      name: 'RAC',
      display: 'RAC',
      symbol: 'RAC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/DDF1CD4CDC14AE2D6A3060193624605FF12DEE71CF1F8C19EEF35E9447653493',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/rac.svg'
        }]
    },
    {
      description: 'GUPPY',
      denom_units: [{
          denom: 'ibc/75F34830AC3D4317FF98BA1F8DDBCA31BEAF6A2054C3A3983B3180CDCD0C21D2',
          exponent: 0,
          aliases: ['ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D']
        }, {
          denom: 'GUPPY',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/75F34830AC3D4317FF98BA1F8DDBCA31BEAF6A2054C3A3983B3180CDCD0C21D2',
      name: 'GUPPY',
      display: 'GUPPY',
      symbol: 'GUPPY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/42A9553A7770F3D7B62F3A82AF04E7719B4FD6EAF31BE5645092AAC4A6C2201D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/guppy.png'
        }]
    },
    {
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'ibc/AB5CFD87197980A6D66D9F7FC5D5EC36247529E2722204AEBCD5C185738860B6',
          exponent: 0,
          aliases: ['ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA']
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/AB5CFD87197980A6D66D9F7FC5D5EC36247529E2722204AEBCD5C185738860B6',
      name: 'Haqq Network',
      display: 'ISLM',
      symbol: 'ISLM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/69110FF673D70B39904FF056CFDFD58A90BEC3194303F45C32CB91B8B0A738EA',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
        }]
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denom_units: [{
          denom: 'ibc/35065FCFC0E3F13EE449D9C02E79ECB91CFAD36F56DF5299CBFD442578ED826E',
          exponent: 0,
          aliases: ['ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D']
        }, {
          denom: 'autism',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/35065FCFC0E3F13EE449D9C02E79ECB91CFAD36F56DF5299CBFD442578ED826E',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9DDF52A334F92BC57A9E0D59DFF9984EAC61D2A14E5162605DF601AA58FDFC6D',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      images: [{
          image_sync: {
            chain_name: 'injective',
            base_denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The PAGE token is used for actions in the PageDAO NFT literary ecosystem and for DAO governance.',
      denom_units: [{
          denom: 'ibc/0CF037066FF97B432EAECDDB191DC92EB695E30180821981BACCDFFFD57C7930',
          exponent: 0,
          aliases: ['ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99']
        }, {
          denom: 'page',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/0CF037066FF97B432EAECDDB191DC92EB695E30180821981BACCDFFFD57C7930',
      name: 'Page',
      display: 'page',
      symbol: 'PAGE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/23A62409E4AD8133116C249B1FA38EED30E500A115D7B153109462CD82C1CD99',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0x60e683C6514Edd5F758A55b6f393BeBBAfaA8d5e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/page.svg'
        }]
    },
    {
      description: 'PURSE Token',
      denom_units: [{
          denom: 'ibc/DA0B7D938A23718A5545216D41FCC6CBCA2810DCD392FE2DCEF6BE6DB38112D5',
          exponent: 0,
          aliases: ['ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519']
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/DA0B7D938A23718A5545216D41FCC6CBCA2810DCD392FE2DCEF6BE6DB38112D5',
      name: 'PURSE Token (Function X)',
      display: 'PURSE',
      symbol: 'PURSE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/6FD2938076A4C1BB3A324A676E76B0150A4443DAE0E002FB62AC0E6B604B1519',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'binancesmartchain',
            base_denom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      denom_units: [{
          denom: 'ibc/BD357209E257B9D0717110A8BC13FBE099934B8222017DC16E38C63BF41E961C',
          exponent: 0,
          aliases: ['ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3']
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/BD357209E257B9D0717110A8BC13FBE099934B8222017DC16E38C63BF41E961C',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/183C0BB962D2F57C957E0B134CFA0AC9D6F755C02DE9DC2A59089BA23009DEC3',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
        }]
    },
    {
      description: 'Kleomedes Token',
      denom_units: [{
          denom: 'ibc/F6C65735497E98477E3BCDC89E888A7208ECDD1ED4EE447949E01672B1E3F9EE',
          exponent: 0,
          aliases: ['ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF']
        }, {
          denom: 'kleo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F6C65735497E98477E3BCDC89E888A7208ECDD1ED4EE447949E01672B1E3F9EE',
      name: 'Kleomedes',
      display: 'kleo',
      symbol: 'KLEO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/5F5B7DA5ECC80F6C7A8702D525BB0B74279B1F7B8EFAE36E423D68788F7F39FF',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/kleomedes.png'
        }]
    },
    {
      description: 'NYX Token (NYX) is the Nym Network\'s native token.',
      denom_units: [{
          denom: 'ibc/7AF8239CC68079D79B1959CE7898BED398D203C202A775F74A60A9A4A029E8B7',
          exponent: 0,
          aliases: ['ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317']
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/7AF8239CC68079D79B1959CE7898BED398D203C202A775F74A60A9A4A029E8B7',
      name: 'Nym',
      display: 'nyx',
      symbol: 'NYX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/1A611E8A3E4248106A1A5A80A64BFA812739435E8B9888EB3F652A21F029F317',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denom_units: [{
          denom: 'ibc/4817DC6308A5DDC89BE6A1671B9125175F8A985454AD77EADA20D39F8BB25C07',
          exponent: 0,
          aliases: ['ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539']
        }, {
          denom: 'nym',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4817DC6308A5DDC89BE6A1671B9125175F8A985454AD77EADA20D39F8BB25C07',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/37CB3078432510EE57B9AFA8DBE028B33AE3280A144826FEAC5F2334CF2C5539',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym.png'
        }]
    },
    {
      description: 'has a hat',
      denom_units: [{
          denom: 'ibc/9DE1CEEB32514C5A9F6C49E92C03FA3B70ADCE30D9E553A9218868743D49BDF3',
          exponent: 0,
          aliases: ['ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7']
        }, {
          denom: 'achihuahuawifhat',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/9DE1CEEB32514C5A9F6C49E92C03FA3B70ADCE30D9E553A9218868743D49BDF3',
      name: 'Chihuahuawifhat',
      display: 'achihuahuawifhat',
      symbol: 'BADDOG',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/2FFE07C4B4EFC0DDA099A16C6AF3C9CCA653CC56077E87217A585D48794B0BC7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/baddog.png'
        }]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [{
          denom: 'ibc/1489D6507CFA8420F8618A6957DEAA3F486F4307CAD591E76CA5BC5DE77B81BC',
          exponent: 0,
          aliases: ['ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C']
        }, {
          denom: 'circus',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/1489D6507CFA8420F8618A6957DEAA3F486F4307CAD591E76CA5BC5DE77B81BC',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/8C8F6349F656C943543C6B040377BE44123D01F712277815C3C13098BB98818C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }]
    },
    {
      description: 'Governance and utility token for the Junø Apes NFT platform on Juno',
      denom_units: [{
          denom: 'ibc/C8E992A506329A58B73AF2EB54AB065CAB93E7FA133F46933939A4611D84FDDE',
          exponent: 0,
          aliases: ['ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE']
        }, {
          denom: 'jape',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/C8E992A506329A58B73AF2EB54AB065CAB93E7FA133F46933939A4611D84FDDE',
      name: 'Junø Apes',
      display: 'jape',
      symbol: 'JAPE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/176DD560277BB0BD676260BE02EBAB697725CA85144D8A2BF286C6B5323DB5FE',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/jape.png'
        }]
    },
    {
      description: 'Woof',
      denom_units: [{
          denom: 'ibc/A5E921253495F2A8827BAF18DA3BF18F72E88D7EC9DF047D262915783EA2B272',
          exponent: 0,
          aliases: ['ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53']
        }, {
          denom: 'WOOF',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/A5E921253495F2A8827BAF18DA3BF18F72E88D7EC9DF047D262915783EA2B272',
      name: 'WOOF',
      display: 'WOOF',
      symbol: 'WOOF',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9B8EC667B6DF55387DC0F3ACC4F187DA6921B0806ED35DE6B04DE96F5AB81F53',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/woof.png'
        }]
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denom_units: [{
          denom: 'ibc/E890CC919F2CF9442F0A6C5ED8D3375D8A4121D99CA0B97513089AE58BD95336',
          exponent: 0,
          aliases: ['ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F']
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/E890CC919F2CF9442F0A6C5ED8D3375D8A4121D99CA0B97513089AE58BD95336',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/94ED1F172BC633DFC56D7E26551D8B101ADCCC69052AC44FED89F97FF658138F',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/CE99B4D2A172275C064595B750827855E04D5E068FB7C642C8469CA9B5DB0EE1',
          exponent: 0,
          aliases: ['factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc']
        }, {
          denom: 'wbtc',
          exponent: 8
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743',
      base: 'ibc/CE99B4D2A172275C064595B750827855E04D5E068FB7C642C8469CA9B5DB0EE1',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'WBTC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
        }]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [{
          denom: 'ibc/AE15BA03C8398EF410DEED0AE8F26533B6C668C9B607B4AFE06BD7CA7C4A6252',
          exponent: 0,
          aliases: ['ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23']
        }, {
          denom: 'bad',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AE15BA03C8398EF410DEED0AE8F26533B6C668C9B607B4AFE06BD7CA7C4A6252',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/442A08C33AE9875DF90792FFA73B5728E1CAECE87AB4F26AE9B422F1E682ED23',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }]
    },
    {
      description: 'Signal Art and Gaming on Juno',
      denom_units: [{
          denom: 'ibc/D564D2049476D81B452660B61FBBB844603B160A11104843E0C72DA462C1ECAF',
          exponent: 0,
          aliases: ['ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A']
        }, {
          denom: 'sgnl',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/D564D2049476D81B452660B61FBBB844603B160A11104843E0C72DA462C1ECAF',
      name: 'Signal',
      display: 'sgnl',
      symbol: 'SGNL',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/4BDADBEDA31899036AB286E9901116496A9D85FB87B35A408C9D67C0DCAC660A',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sgnl.png'
        }]
    },
    {
      description: 'The first native memecoin on Osmosis. Crafted by the deftest of hands in the lab of lunacy. It\'s scientifically anarchic, professionally foolish, and your ticket to the madhouse.',
      denom_units: [{
          denom: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
          exponent: 0,
          aliases: ['factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO']
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3',
      base: 'ibc/AB7C92666DE8C7A977666B8080CABF0127B652B9D40F7251E6914DE942D9942B',
      name: 'WOSMO',
      display: 'WOSMO',
      symbol: 'WOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Margined Power Token sqTIA',
      denom_units: [{
          denom: 'ibc/0A15AC1985AFEA902D4EBE897DABBD28100894D2ECE76E081963145EFC1C5BFF',
          exponent: 0,
          aliases: ['factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia']
        }, {
          denom: 'sqtia',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/0A15AC1985AFEA902D4EBE897DABBD28100894D2ECE76E081963145EFC1C5BFF',
      name: 'TIA Squared',
      display: 'sqtia',
      symbol: 'sqTIA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sqtia.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [{
          denom: 'ibc/29F179E964E3171DB3507A72C5EC0F0C41D52011A4558F4EF82DE08E40FA6CAE',
          exponent: 0,
          aliases: ['ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1']
        }, {
          denom: 'apollo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/29F179E964E3171DB3507A72C5EC0F0C41D52011A4558F4EF82DE08E40FA6CAE',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/73BB20AF857D1FE6E061D01CA13870872AD0C979497CAF71BEA25B1CBF6879F1',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denom_units: [{
          denom: 'ibc/AE7F9CEB8DDED2EF7BD9891B0EDD69B6B56622E5BB5A7E8475E289CECC3C8EBB',
          exponent: 0,
          aliases: ['ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/AE7F9CEB8DDED2EF7BD9891B0EDD69B6B56622E5BB5A7E8475E289CECC3C8EBB',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/980E82A9F8E7CA8CD480F4577E73682A6D3855A267D1831485D7EBEF0E7A6C2C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
          exponent: 0,
          aliases: ['ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    },
    {
      description: 'GLTO-ERC20 on injective',
      denom_units: [{
          denom: 'ibc/46CF35A6C81B756755EA0FEB1B8E782693AD68CBC32BF2AB760AF148CD1FDE6E',
          exponent: 0,
          aliases: ['ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7']
        }, {
          denom: 'glto',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/46CF35A6C81B756755EA0FEB1B8E782693AD68CBC32BF2AB760AF148CD1FDE6E',
      name: 'Gelotto (Injective)',
      display: 'glto',
      symbol: 'injective.GLTO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/072E5B3D6F278B3E6A9C51D7EAD1A737148609512C5EBE8CBCB5663264A0DDB7',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg'
        }],
      keywords: ['osmosis_unlisted']
    },
    {
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'ibc/9C7F70E92CCBA0F2DC94796B0682955E090676EA7A2F8E0A4611956B79CB4406',
          exponent: 0,
          aliases: ['ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110']
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/9C7F70E92CCBA0F2DC94796B0682955E090676EA7A2F8E0A4611956B79CB4406',
      name: 'Dymension Hub',
      display: 'dym',
      symbol: 'DYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/9A76CDF0CBCEF37923F32518FA15E5DC92B9F56128292BC4D63C4AEA76CBB110',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }]
    },
    {
      description: 'Rapture insurance is the first ever P2P insurance platform on $OSMO. Get rewarded to take care of peoples loved ones after the Rapture.',
      denom_units: [{
          denom: 'ibc/E28A6527195C08FF0D713EE0547DEB57F72716B41421F2D2E3859E57EA7CD806',
          exponent: 0,
          aliases: ['factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR']
        }, {
          denom: 'RAPTR',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1279xudevmf5cw83vkhglct7jededp86k90k2le',
      base: 'ibc/E28A6527195C08FF0D713EE0547DEB57F72716B41421F2D2E3859E57EA7CD806',
      name: 'RAPTR',
      display: 'RAPTR',
      symbol: 'RAPTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/RAPTR.png'
        }],
      keywords: ['osmosis_unlisted'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1279xudevmf5cw83vkhglct7jededp86k90k2le/RAPTR',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/18624EAC27898C0DD81951E6638AA8F32B35C626A93142A37E2B17D3F4527B0A',
          exponent: 0,
          aliases: ['ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43']
        }, {
          denom: 'avalanche-usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/18624EAC27898C0DD81951E6638AA8F32B35C626A93142A37E2B17D3F4527B0A',
      name: 'Wormhole USDC(Avalanche)',
      display: 'avalanche-usdc',
      symbol: 'avalanche.USDC.wh',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/0B3C3D06228578334B66B57FBFBA4033216CEB8119B27ACDEE18D92DA5B28D43',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/usdc.hole.svg'
      }
    },
    {
      description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains.',
      extended_description: 'Sail DAO is a liquidity deployment and management DAO built as a collaboration between the Osmosis and Migaloo Blockchains. Seeded by both the Osmosis Community Pool and the Migaloo Foundation, Sail DAO is open to hear offers from cosmos based projects that hope to seed liquidity for their token on the Osmosis blockchain. Along with the creation of this DAO the White Whale DEX is deployed on Osmosis, being the first DEX apart from Osmosis to deploy on the chain, it is a great step towards Osmosis becoming an ecosystem from an appchain. Migaloo incubated projects are encouraged to participate in OTC deals with Sail DAO in order to seed or enhance liquidity on WW\'s Osmosis DEX. However, offers are not limited to Migaloo projects and liquidity is not limitied to being deployed on WW DEX. The treasury of this DAO can be deployed however it wishes at the discretion of the Sail DAO voters. The Osmosis CP has been given veto authorization over any props introduced in this DAO and has also been given clawback rights if this venture ever gets off track.',
      denom_units: [{
          denom: 'ibc/7577185E42939EE57EF73E2DE57A28BBE7693EDC0766C506E570C5D6B7636B33',
          exponent: 0,
          aliases: ['factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail']
        }, {
          denom: 'sail',
          exponent: 6
        }],
      base: 'ibc/7577185E42939EE57EF73E2DE57A28BBE7693EDC0766C506E570C5D6B7636B33',
      name: 'Sail',
      display: 'sail',
      symbol: 'SAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/sail.png'
        }],
      socials: {
        website: 'https://daodao.zone/dao/osmo106tvcj58rvdn9k36m9m3xcmcwk2c3fgft3ldcst9lgy05gcmjanqexru3h/home',
        twitter: 'https://twitter.com/Sail_DAO_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Nomic\'s native token.',
      denom_units: [{
          denom: 'ibc/AD1095193A389090566F66B9F9E1DE8F10D81F7B787717E7EC231369046D0ABF',
          exponent: 0,
          aliases: ['ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C']
        }, {
          denom: 'nom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/AD1095193A389090566F66B9F9E1DE8F10D81F7B787717E7EC231369046D0ABF',
      name: 'Nomic',
      display: 'nom',
      symbol: 'nomic.NOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/F49DFB3BC8105C57EE7F17EC2402438825B31212CFDD81681EB87911E934F32C',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'unom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nom.svg'
      }
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denom_units: [{
          denom: 'ibc/9AF5D20C6D978F658BA0DC56FFCB336C697642C4E04A37CEBC1C732BFAE80BCC',
          exponent: 0,
          aliases: ['factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID']
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8',
      base: 'ibc/9AF5D20C6D978F658BA0DC56FFCB336C697642C4E04A37CEBC1C732BFAE80BCC',
      name: 'BADKID',
      display: 'BADKID',
      symbol: 'BADKID',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The governance and utility token of Yieldmos, the Interchain Automation Protocol',
      denom_units: [{
          denom: 'ibc/B067445FBCAA97BF3486024639F73F5CF4D7C9FBD173E2E5144EB50851E11AD2',
          exponent: 0,
          aliases: ['factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos']
        }, {
          denom: 'ymos',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy',
      base: 'ibc/B067445FBCAA97BF3486024639F73F5CF4D7C9FBD173E2E5144EB50851E11AD2',
      name: 'Yieldmos Coin',
      display: 'ymos',
      symbol: 'YMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ymos.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1vdvnznwg597qngrq9mnfcfk0am9jdc9y446jewhcqdreqz4r75xq5j5zvy/ymos',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The memecoin built for the Celestia community',
      denom_units: [{
          denom: 'ibc/0B9F987599FE8F3C065CDFC66BF81166354EB78F247B72A4A4AEAFFD775726F5',
          exponent: 0,
          aliases: ['factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro']
        }, {
          denom: 'toro',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      address: 'osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z',
      base: 'ibc/0B9F987599FE8F3C065CDFC66BF81166354EB78F247B72A4A4AEAFFD775726F5',
      name: 'TORO',
      display: 'toro',
      symbol: 'TORO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/toro.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1nr8zfakf6jauye3uqa9lrmr5xumee5n42lv92z/toro',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'SHARK is the apex price prediction market within Cosmos.',
      denom_units: [{
          denom: 'ibc/96894C019DD4080673621D4FB3F6C3A1A1B0354956B3472C1037FBE951B5CCDE',
          exponent: 0,
          aliases: ['ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834']
        }, {
          denom: 'SHARK',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/96894C019DD4080673621D4FB3F6C3A1A1B0354956B3472C1037FBE951B5CCDE',
      name: 'SHARK',
      display: 'SHARK',
      symbol: 'SHARK',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/64D56DF9EC69BE554F49EBCE0199611062FF1137EF105E2F645C1997344F3834',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/shark.png'
        }]
    },
    {
      description: 'BackBone Labs Liquid Staked OSMO',
      denom_units: [{
          denom: 'ibc/E79A31185D5A8A9B22E7AE3D96421EAC7A3E8A54B3A793B6DFAD93898C63C669',
          exponent: 0,
          aliases: ['factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo']
        }, {
          denom: 'bOSMO',
          exponent: 6
        }],
      address: 'osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv',
      base: 'ibc/E79A31185D5A8A9B22E7AE3D96421EAC7A3E8A54B3A793B6DFAD93898C63C669',
      name: 'BackBone Labs Liquid Staked OSMO',
      display: 'bOSMO',
      symbol: 'bOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/bOSMO.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1s3l0lcqc7tu0vpj6wdjz9wqpxv8nk6eraevje4fuwkyjnwuy82qsx3lduv/boneOsmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Memecoin for The International Brane Wave',
      denom_units: [{
          denom: 'ibc/7C8E2FA8DD064E33C6DE3F4BADD9A7D450BB4EC97249EEB9A8CD4782B8ABF499',
          exponent: 0,
          aliases: ['factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz']
        }],
      base: 'ibc/7C8E2FA8DD064E33C6DE3F4BADD9A7D450BB4EC97249EEB9A8CD4782B8ABF499',
      name: 'Branez',
      display: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
      symbol: 'BRNZ',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/BRNZ.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo13gu58hzw3e9aqpj25h67m7snwcjuccd7v4p55w/brnz',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'Cvn is a Layer-1 blockchain built to deliver on the promise of DeFi',
      denom_units: [{
          denom: 'ibc/12B2E54356E93E686AC569DEEFD7BA846ED2CB049ECE84F6E9EEC120A4B539FE',
          exponent: 0,
          aliases: ['ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480']
        }, {
          denom: 'cvnt',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/12B2E54356E93E686AC569DEEFD7BA846ED2CB049ECE84F6E9EEC120A4B539FE',
      name: 'CVN',
      display: 'cvnt',
      symbol: 'CVN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/D3FAF77F5DE21C18413B164751239BA7D521A9D8EA53BFE553AADF338A721480',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/conscious/images/cvn.svg'
        }]
    },
    {
      description: 'LAB - Everything is an Experiment',
      extended_description: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denom_units: [{
          denom: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
          exponent: 0,
          aliases: ['factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB']
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      address: 'osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n',
      base: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'OnE mEmEcOiN tO cOnNeCt oL ImBeCiles - aNd in Da Cosmos BiNd DeM',
      denom_units: [{
          denom: 'ibc/2C4FD60294AFF7A773489DDA68B91F190CB4E36F7BD7B1D6DBB65372856EC6C2',
          exponent: 0,
          aliases: ['factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC']
        }, {
          denom: 'IBC',
          exponent: 6
        }],
      base: 'ibc/2C4FD60294AFF7A773489DDA68B91F190CB4E36F7BD7B1D6DBB65372856EC6C2',
      name: 'IBC',
      display: 'IBC',
      symbol: 'IBC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ibc.png'
      },
      coingecko_id: '',
      keywords: ['memecoin'],
      socials: {
        webiste: 'https://www.ibcmeme.wtf',
        twitter: 'https://twitter.com/IBCmemecoin'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'factory/osmo1kqdw6pvn0xww6tyfv2sqvkkencdz0qw406x54r/IBC',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      denom_units: [{
          denom: 'ibc/607C7EAB1F95A87ED83A7CCA4D7573107BDDF02A7308CB7F620BD21CD5FF1465',
          exponent: 0,
          aliases: ['ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/607C7EAB1F95A87ED83A7CCA4D7573107BDDF02A7308CB7F620BD21CD5FF1465',
      name: 'Tinkernet',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-75',
            base_denom: 'ibc/3A0A392E610A8D477851ABFEA74F3D828F36C015AB8E93B0FBB7566A6D13C4D6',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/B0DD091AE8F4DF06E155C0328B5098206A756766466F101CDC2F7D196C3AA572',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/B0DD091AE8F4DF06E155C0328B5098206A756766466F101CDC2F7D196C3AA572',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [{
          denom: 'ibc/B72FE6CF3A688C7041B573126872368EAF241CA607AC52902845CB1F00AC1D79',
          exponent: 0,
          aliases: ['stk/uatom']
        }, {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom']
        }],
      base: 'ibc/B72FE6CF3A688C7041B573126872368EAF241CA607AC52902845CB1F00AC1D79',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'stk/uatom',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
      },
      coingecko_id: 'stkatom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg'
        }]
    },
    {
      description: 'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [{
          denom: 'ibc/3D794C5A2143187D1E7C2AE2ED7632C2129806BBCD399F344D1109B6D6046D31',
          exponent: 0,
          aliases: ['ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444']
        }, {
          denom: 'pstake',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/3D794C5A2143187D1E7C2AE2ED7632C2129806BBCD399F344D1109B6D6046D31',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
      },
      keywords: ['canon'],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/30A13CC6A9F0BE97EA568660CF29413BEBB29EDB702A9DF94134CB9773D256FF',
          exponent: 0,
          aliases: ['ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/30A13CC6A9F0BE97EA568660CF29413BEBB29EDB702A9DF94134CB9773D256FF',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'Tether USDT on Persistence',
      denom_units: [{
          denom: 'ibc/99D9C0416A2B4F0184EA68CCD5B365F3FBEBC1D819986D1121100C31E350C83F',
          exponent: 0,
          aliases: ['ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/99D9C0416A2B4F0184EA68CCD5B365F3FBEBC1D819986D1121100C31E350C83F',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/76F8EF7737DA9DE4C1943E00553C669650D71D435ED7D5546C174D26FD448E9C',
          exponent: 0,
          aliases: ['ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/76F8EF7737DA9DE4C1943E00553C669650D71D435ED7D5546C174D26FD448E9C',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      description: 'dydx staking token',
      denom_units: [{
          denom: 'ibc/78D66445EAEE4BC5A5D13D7C44C294EB213403FCE659361069EDDAF85D00D2B0',
          exponent: 0,
          aliases: ['ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/78D66445EAEE4BC5A5D13D7C44C294EB213403FCE659361069EDDAF85D00D2B0',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [{
          denom: 'ibc/1766E5264A3E23D3DDFC81C500319491310BC53268D6BCAACC2C95B23DB9CA19',
          exponent: 0,
          aliases: ['stk/uosmo']
        }, {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo']
        }],
      base: 'ibc/1766E5264A3E23D3DDFC81C500319491310BC53268D6BCAACC2C95B23DB9CA19',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'stk/uosmo',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
      },
      coingecko_id: 'pstake-staked-osmo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked DYDX',
      denom_units: [{
          denom: 'ibc/7BEBE59AB8614A85EF2F2DA6A5336083FE05A7B618B2AE685B12385DFEEB7E62',
          exponent: 0,
          aliases: ['stk/adydx']
        }, {
          denom: 'stkdydx',
          exponent: 18,
          aliases: ['stk/dydx']
        }],
      base: 'ibc/7BEBE59AB8614A85EF2F2DA6A5336083FE05A7B618B2AE685B12385DFEEB7E62',
      name: 'PSTAKE staked DYDX',
      display: 'stkdydx',
      symbol: 'stkDYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'stk/adydx',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkdydx.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked STARS',
      denom_units: [{
          denom: 'ibc/FD3B4530AC2B3504ED3CD9F7A7D19224D4D7CBB4F2A849FE26153E69B2CD260F',
          exponent: 0,
          aliases: ['stk/ustars']
        }, {
          denom: 'stkstars',
          exponent: 6,
          aliases: ['stk/stars']
        }],
      base: 'ibc/FD3B4530AC2B3504ED3CD9F7A7D19224D4D7CBB4F2A849FE26153E69B2CD260F',
      name: 'PSTAKE staked STARS',
      display: 'stkstars',
      symbol: 'stkSTARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'stk/ustars',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkstars.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0B46AC0E5E40F0C779E0B435E4CD46F24865958399EDCD6DC186BC5D0DD0295B',
          exponent: 0,
          aliases: ['ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/0B46AC0E5E40F0C779E0B435E4CD46F24865958399EDCD6DC186BC5D0DD0295B',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/AD8E1D4AC4EA8FC79CC46E33319A3791477D4DEBFC30D5D874074B993422B41B',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'stargaze',
            base_denom: 'ustars'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      }
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/1C52596E4BD1298DEEF94989DF824B6A2D29DEB389243EA17E47B3693C739A66',
          exponent: 0,
          aliases: ['ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'ics20',
      base: 'ibc/1C52596E4BD1298DEEF94989DF824B6A2D29DEB389243EA17E47B3693C739A66',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/5D3B6445EA1D7064C4B1CCB588638589529556E1BCBADF13475021B42EA8C73B',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'secretnetwork',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }]
    },
    {
      description: 'PSTAKE Liquid-Staked HUAHUA',
      denom_units: [{
          denom: 'ibc/9E2B6FAD07F795BD0B0F5EFA284CDA1167138860E00CEE026DEEAD0F91B7CFD1',
          exponent: 0,
          aliases: ['stk/uhuahua']
        }, {
          denom: 'stkhuahua',
          exponent: 6,
          aliases: ['stk/huahua']
        }],
      base: 'ibc/9E2B6FAD07F795BD0B0F5EFA284CDA1167138860E00CEE026DEEAD0F91B7CFD1',
      name: 'PSTAKE staked HUAHUA',
      display: 'stkhuahua',
      symbol: 'stkHUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'stk/uhuahua',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkhuahua.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/088EAE0029500A0638FEB304844993C05094A5F3820CB68CB2A1C5991CD62DB7',
          exponent: 0,
          aliases: ['ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/088EAE0029500A0638FEB304844993C05094A5F3820CB68CB2A1C5991CD62DB7',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-197',
            base_denom: 'ibc/B597D779FCDD9021263C98A48F1AFA9D2BCCCE980F397CDE5681CCEDE7DEE1A4',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-287'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'chihuahua',
            base_denom: 'uhuahua'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      }
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/CC72D1ABD9FDC68DA3797BE4FD7C7CAEB5BB186AF1D5E072D91FA71F13097FCF',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/CC72D1ABD9FDC68DA3797BE4FD7C7CAEB5BB186AF1D5E072D91FA71F13097FCF',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }]
    },
    {
      description: 'Quicksilver Liquid Staked STARS',
      denom_units: [{
          denom: 'ibc/46E27FBBC56A14AD0029678BB34A4164F650AA3711EEDEA0D05E08DB41D13BF0',
          exponent: 0,
          aliases: ['uqstars']
        }, {
          denom: 'qstars',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/46E27FBBC56A14AD0029678BB34A4164F650AA3711EEDEA0D05E08DB41D13BF0',
      name: 'Quicksilver Liquid Staked STARS',
      display: 'qstars',
      symbol: 'qSTARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqstars',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qstars.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked ATOM',
      denom_units: [{
          denom: 'ibc/C1D3200D8DC5D2002B41A9E541AB0D62078480A791BE5FDC7ADF2C543021AA78',
          exponent: 0,
          aliases: ['uqatom']
        }, {
          denom: 'qatom',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/C1D3200D8DC5D2002B41A9E541AB0D62078480A791BE5FDC7ADF2C543021AA78',
      name: 'Quicksilver Liquid Staked ATOM',
      display: 'qatom',
      symbol: 'qATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqatom',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qatom.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked REGEN',
      denom_units: [{
          denom: 'ibc/A3EB430EE617EBFC7D3B61BA69C2246030B40BF8CD6CCE1440CCAF4C46F7F975',
          exponent: 0,
          aliases: ['uqregen']
        }, {
          denom: 'qregen',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/A3EB430EE617EBFC7D3B61BA69C2246030B40BF8CD6CCE1440CCAF4C46F7F975',
      name: 'Quicksilver Liquid Staked Regen',
      display: 'qregen',
      symbol: 'qREGEN',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqregen',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qregen.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked OSMO',
      denom_units: [{
          denom: 'ibc/C0B0A67B548DDC9D22DB52697DADB7707D76CB659C58E34222CDF8F9D6B0FDCA',
          exponent: 0,
          aliases: ['uqosmo']
        }, {
          denom: 'qosmo',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/C0B0A67B548DDC9D22DB52697DADB7707D76CB659C58E34222CDF8F9D6B0FDCA',
      name: 'Quicksilver Liquid Staked OSMO',
      display: 'qosmo',
      symbol: 'qOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqosmo',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qosmo.svg'
        }]
    },
    {
      description: 'Quicksilver Liquid Staked SOMM',
      denom_units: [{
          denom: 'ibc/69C80DFC1F375D16BCB37BF6A3A767999937DB416429FF10D84E8C84EF35356A',
          exponent: 0,
          aliases: ['uqsomm']
        }, {
          denom: 'qsomm',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/69C80DFC1F375D16BCB37BF6A3A767999937DB416429FF10D84E8C84EF35356A',
      name: 'Quicksilver Liquid Staked SOMM',
      display: 'qsomm',
      symbol: 'qSOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-0',
            base_denom: 'uqsomm',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-124'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qsomm.svg'
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651',
          exponent: 0,
          aliases: ['stuatom']
        }, {
          denom: 'statom',
          exponent: 6
        }],
      base: 'ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651',
      name: 'Stride Staked ATOM',
      display: 'statom',
      symbol: 'stATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuatom',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
      },
      coingecko_id: 'stride-staked-atom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676',
          exponent: 0,
          aliases: ['stustars']
        }, {
          denom: 'ststars',
          exponent: 6
        }],
      base: 'ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676',
      name: 'Stride Staked STARS',
      display: 'ststars',
      symbol: 'stSTARS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stustars',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
      },
      coingecko_id: 'stride-staked-stars',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1',
          exponent: 0,
          aliases: ['stuosmo']
        }, {
          denom: 'stosmo',
          exponent: 6
        }],
      base: 'ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1',
      name: 'Stride Staked OSMO',
      display: 'stosmo',
      symbol: 'stOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuosmo',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
      },
      coingecko_id: 'stride-staked-osmo',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6',
          exponent: 0,
          aliases: ['stujuno']
        }, {
          denom: 'stjuno',
          exponent: 6
        }],
      base: 'ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6',
      name: 'Stride Staked JUNO',
      display: 'stjuno',
      symbol: 'stJUNO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stujuno',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
      },
      coingecko_id: 'stride-staked-juno',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/21D55624A6EDF43BDA29C5C300A72C122C03D340D74D1959746A53A4301DC97A',
          exponent: 0,
          aliases: ['stuluna']
        }, {
          denom: 'stluna',
          exponent: 6
        }],
      base: 'ibc/21D55624A6EDF43BDA29C5C300A72C122C03D340D74D1959746A53A4301DC97A',
      name: 'Stride Staked LUNA',
      display: 'stluna',
      symbol: 'stLUNA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuluna',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
      },
      coingecko_id: 'stride-staked-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stluna.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/E4E65562573F4F9299486AB591B8C36B2C56FCA071DFDBCBB82F7A5F56672768',
          exponent: 0,
          aliases: ['stinj']
        }, {
          denom: 'stINJ',
          exponent: 18
        }],
      base: 'ibc/E4E65562573F4F9299486AB591B8C36B2C56FCA071DFDBCBB82F7A5F56672768',
      name: 'Stride Staked INJ',
      display: 'stINJ',
      symbol: 'stINJ',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stinj',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stinj.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BFA32A30D0D49F507E9AC2C645307A2A9775F6CF34DFD990927C5EA0F7AB1AB3',
          exponent: 0,
          aliases: ['staevmos']
        }, {
          denom: 'stevmos',
          exponent: 18
        }],
      base: 'ibc/BFA32A30D0D49F507E9AC2C645307A2A9775F6CF34DFD990927C5EA0F7AB1AB3',
      name: 'Stride Staked EVMOS',
      display: 'stevmos',
      symbol: 'stEVMOS',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'staevmos',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
      },
      coingecko_id: 'stride-staked-evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stevmos.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denom_units: [{
          denom: 'ibc/99993D3A7F4297101C31A54714F8CBEE868A3EA3FF2CF7DDC72570E5B997FA08',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      base: 'ibc/99993D3A7F4297101C31A54714F8CBEE868A3EA3FF2CF7DDC72570E5B997FA08',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stadydx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/B08883296A6C979C20336DA95A9D782C15695774F4626A85D716B6C9DA119EC0',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      base: 'ibc/B08883296A6C979C20336DA95A9D782C15695774F4626A85D716B6C9DA119EC0',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stutia',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked DYM',
      denom_units: [{
          denom: 'ibc/7A6474A09D600A464C15C85FF46DD5B77705F34C13DC2D3D351F6CC16634ECBF',
          exponent: 0,
          aliases: ['stadym']
        }, {
          denom: 'stDYM',
          exponent: 18
        }],
      base: 'ibc/7A6474A09D600A464C15C85FF46DD5B77705F34C13DC2D3D351F6CC16634ECBF',
      name: 'Stride Staked DYM',
      display: 'stDYM',
      symbol: 'stDYM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stadym',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdym.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/24CD178401C9D155AC8B27FF1CCB7E2DDE33C42855230F072928891A2E16C7F1',
          exponent: 0,
          aliases: ['stuumee']
        }, {
          denom: 'stumee',
          exponent: 6
        }],
      base: 'ibc/24CD178401C9D155AC8B27FF1CCB7E2DDE33C42855230F072928891A2E16C7F1',
      name: 'Stride Staked UMEE',
      display: 'stumee',
      symbol: 'stUMEE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stuumee',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
      },
      coingecko_id: 'stride-staked-umee',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stumee.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/78FC45E2986501FE2D3F251D7FAE0C81C85741A0A5941BA5C0ED7600BB967A87',
          exponent: 0,
          aliases: ['stucmdx']
        }, {
          denom: 'stcmdx',
          exponent: 6
        }],
      base: 'ibc/78FC45E2986501FE2D3F251D7FAE0C81C85741A0A5941BA5C0ED7600BB967A87',
      name: 'Stride Staked CMDX',
      display: 'stcmdx',
      symbol: 'stCMDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stucmdx',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stcmdx.svg'
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/BEDB702CC04A17B987B4F22AEA5590A387B89CD534AE5E8673417A3BD99D8D4E',
          exponent: 0,
          aliases: ['stusomm']
        }, {
          denom: 'stsomm',
          exponent: 6
        }],
      base: 'ibc/BEDB702CC04A17B987B4F22AEA5590A387B89CD534AE5E8673417A3BD99D8D4E',
      name: 'Stride Staked SOMM',
      display: 'stsomm',
      symbol: 'stSOMM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stusomm',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
      },
      coingecko_id: 'stride-staked-sommelier',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsomm.svg'
        }]
    },
    {
      description: 'Stride\'s liquid staked SAGA',
      denom_units: [{
          denom: 'ibc/F7005C2AA2C193C7413D3FFC8EB2215CD7C6E22880DCCF5C0AE7633C183DE13E',
          exponent: 0,
          aliases: ['stusaga']
        }, {
          denom: 'stSAGA',
          exponent: 6
        }],
      base: 'ibc/F7005C2AA2C193C7413D3FFC8EB2215CD7C6E22880DCCF5C0AE7633C183DE13E',
      name: 'Stride Staked SAGA',
      display: 'stSAGA',
      symbol: 'stSAGA',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-19',
            base_denom: 'stusaga',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-106'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stsaga.svg'
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/33B679C576A22B5D2CA314D8801155881C62037C34DBC3B32537FA5DBAB91080',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/33B679C576A22B5D2CA314D8801155881C62037C34DBC3B32537FA5DBAB91080',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }]
    },
    {
      description: 'ERIS Alliance Staked ampWHALE on Terra',
      denom_units: [{
          denom: 'ibc/C35027DEFA6BC913D3336E01577D7C838DF766CCDA5C0857E3E042BE6EC04BFD',
          exponent: 0,
          aliases: ['factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt']
        }, {
          denom: 'ampWHALEt',
          exponent: 6
        }],
      base: 'ibc/C35027DEFA6BC913D3336E01577D7C838DF766CCDA5C0857E3E042BE6EC04BFD',
      name: 'ERIS Alliance Staked ampWHALE',
      display: 'ampWHALEt',
      symbol: 'ampWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/ampwhalet.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'factory/terra1j35ta0llaxcf55auv2cjqau5a7aee6g8fz7md7my7005cvh23jfsaw83dy/ampWHALEt',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }]
    },
    {
      description: 'ERIS Alliance Staked boneWHALE on Terra',
      denom_units: [{
          denom: 'ibc/D407EE5B21439F4533AF96376F1225012C91443E1232006709CB7C44C4216759',
          exponent: 0,
          aliases: ['factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt']
        }, {
          denom: 'boneWHALEt',
          exponent: 6
        }],
      base: 'ibc/D407EE5B21439F4533AF96376F1225012C91443E1232006709CB7C44C4216759',
      name: 'ERIS Alliance Staked boneWHALE',
      display: 'boneWHALEt',
      symbol: 'boneWHALEt',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/bonewhalet.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'factory/terra10j3zrymfrkta2pxe0gklc79gu06tqyuy8c3kh6tqdsrrprsjqkrqzfl4df/boneWHALEt',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }]
    },
    {
      description: 'ERIS Liquid Enterprise Staked ROAR',
      denom_units: [{
          denom: 'ibc/91197E48552966F1D1E3EC82B5049E07569EF0F08BD678B2220CF870CE336132',
          exponent: 0,
          aliases: ['factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR']
        }, {
          denom: 'ampROAR',
          exponent: 6
        }],
      base: 'ibc/91197E48552966F1D1E3EC82B5049E07569EF0F08BD678B2220CF870CE336132',
      name: 'ERIS Amplified ROAR',
      display: 'ampROAR',
      symbol: 'ampROAR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/amproar.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'factory/terra1vklefn7n6cchn0u962w3gaszr4vf52wjvd4y95t2sydwpmpdtszsqvk9wy/ampROAR',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/0315FBDA98918E28B20080EF324075DA03C91B4E70996FE0C2DD7074725F4002',
          exponent: 0,
          aliases: ['ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C']
        }, {
          denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/0315FBDA98918E28B20080EF324075DA03C91B4E70996FE0C2DD7074725F4002',
      name: 'Wrapped Lido Staked Ether',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'ibc/A356EC90DC3AE43D485514DA7260EDC7ABB5CFAA0654CE2524C739392975AD3C',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [{
          denom: 'ibc/64919EF89EE4456B0843465A137C12D3346205DD243CEDF497107FE936A8F4B0',
          exponent: 0,
          aliases: ['ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278']
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/64919EF89EE4456B0843465A137C12D3346205DD243CEDF497107FE936A8F4B0',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-324',
            base_denom: 'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-266'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    }
  ]
};
export default assets;
    