import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'xiontestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [
        {
          denom:
            'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
          exponent: 0,
          aliases: ['uaxl']
        },
        {
          denom: 'axl',
          exponent: 6
        }
      ],
      base: 'ibc/D934516FBE457F3A98AFABD87E0EFF7F95A15325C191EA8CDD7763C702FDDEC2',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ]
    },
    {
      description: "Circle's stablecoin on Axelar",
      denom_units: [
        {
          denom:
            'ibc/035BDC396AA81E38271D2FA5E4799AE159044B90BCF02CCA218EB364829C869E',
          exponent: 0,
          aliases: ['uausdc']
        },
        {
          denom: 'ausdc',
          exponent: 6
        }
      ],
      base: 'ibc/035BDC396AA81E38271D2FA5E4799AE159044B90BCF02CCA218EB364829C869E',
      name: 'USD Coin',
      display: 'ausdc',
      symbol: 'aUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'uausdc',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0x254d06f33bDc5b8ee05b2ea472107E300226659A'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    },
    {
      description: 'Wrapped Ether on Axelar',
      denom_units: [
        {
          denom:
            'ibc/75C575824692FA642ED57B7B5CB1C11807E8B5D80027095DDA724DC98C6C018A',
          exponent: 0,
          aliases: ['eth-wei']
        },
        {
          denom: 'weth',
          exponent: 18
        }
      ],
      base: 'ibc/75C575824692FA642ED57B7B5CB1C11807E8B5D80027095DDA724DC98C6C018A',
      name: 'Wrapped Ether',
      display: 'weth',
      symbol: 'axlWETH',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'eth-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereumtestnet',
            base_denom: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg'
      }
    },
    {
      description: 'Wrapped Moonbeam on Axelar',
      denom_units: [
        {
          denom:
            'ibc/F1E05BAE0613BE43D98BD89DDA6937F04B1D34178668BA7800FC70F2FFB42BDD',
          exponent: 0,
          aliases: ['wglmr-wei']
        },
        {
          denom: 'wglmr',
          exponent: 18
        }
      ],
      base: 'ibc/F1E05BAE0613BE43D98BD89DDA6937F04B1D34178668BA7800FC70F2FFB42BDD',
      name: 'Wrapped Moonbeam',
      display: 'wglmr',
      symbol: 'WDEV',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'wglmr-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'moonbeamtestnet',
            base_denom: '0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg'
      }
    },
    {
      description: 'Wrapped Matic on Axelar',
      denom_units: [
        {
          denom:
            'ibc/E97CB9081D7EB7CAEAE022E448FDEF6D1D0781B63DA4112CAE50285594B2B32C',
          exponent: 0,
          aliases: ['wmatic-wei']
        },
        {
          denom: 'wmatic',
          exponent: 18
        }
      ],
      base: 'ibc/E97CB9081D7EB7CAEAE022E448FDEF6D1D0781B63DA4112CAE50285594B2B32C',
      name: 'Wrapped Matic',
      display: 'wmatic',
      symbol: 'WMATIC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'wmatic-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'polygontestnet',
            base_denom: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg'
      }
    },
    {
      description: 'Wrapped BNB on Axelar',
      denom_units: [
        {
          denom:
            'ibc/A0D7A4D3545AAF4C23FE0C432503D3EFB13A796B852AEF9B1B92D39AD80BD471',
          exponent: 0,
          aliases: ['wbnb-wei']
        },
        {
          denom: 'wbnb',
          exponent: 18
        }
      ],
      base: 'ibc/A0D7A4D3545AAF4C23FE0C432503D3EFB13A796B852AEF9B1B92D39AD80BD471',
      name: 'Wrapped BNB',
      display: 'wbnb',
      symbol: 'WBNB',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'wbnb-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'binancesmartchaintestnet',
            base_denom: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg'
      }
    },
    {
      description: 'Wrapped AVAX on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/2991B858634D22E4637F772FA5A5F5BFCE3F30EA3ED208E36DD8DC07330490A9',
          exponent: 0,
          aliases: ['wavax-wei']
        },
        {
          denom: 'avax',
          exponent: 18
        }
      ],
      base: 'ibc/2991B858634D22E4637F772FA5A5F5BFCE3F30EA3ED208E36DD8DC07330490A9',
      name: 'Wrapped AVAX',
      display: 'avax',
      symbol: 'WAVAX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'wavax-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'avalanchetestnet',
            base_denom: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg'
      }
    },
    {
      description: 'Wrapped FTM on Axelar.',
      denom_units: [
        {
          denom:
            'ibc/BB68A322BA69ED1661EA38363B6A6D06D27AD205896875E78EA225AAF3A65CA6',
          exponent: 0,
          aliases: ['wftm-wei']
        },
        {
          denom: 'ftm',
          exponent: 18
        }
      ],
      base: 'ibc/BB68A322BA69ED1661EA38363B6A6D06D27AD205896875E78EA225AAF3A65CA6',
      name: 'Wrapped FTM',
      display: 'ftm',
      symbol: 'WFTM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-283',
            base_denom: 'wftm-wei',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'fantomtestnet',
            base_denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      }
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [
        {
          denom:
            'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
          exponent: 0,
          aliases: ['ustake']
        },
        {
          denom: 'stake',
          exponent: 6
        }
      ],
      base: 'ibc/64332FEC2E9CD57D3289247C3AE47D5CB0F517A8247963F5025F31F32E3AA501',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ]
    },
    {
      description:
        'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [
        {
          denom:
            'ibc/3960120CE93CEA8FEA2CDA063D3BADA5954E9F0113DA7FBA288592F8C4DABF5B',
          exponent: 0,
          aliases: ['ulove']
        },
        {
          denom: 'love',
          exponent: 6
        }
      ],
      base: 'ibc/3960120CE93CEA8FEA2CDA063D3BADA5954E9F0113DA7FBA288592F8C4DABF5B',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ]
    },
    {
      description: 'USD Coin',
      denom_units: [
        {
          denom:
            'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      base: 'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F',
      display: 'usdc',
      name: 'USD Coin',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uusdc',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }
      ]
    },
    {
      description:
        'USDLR is a fiat-backed stablecoin issued by Stable. Stable pays DeFi protocols who distribute USDLR.',
      denom_units: [
        {
          denom:
            'ibc/354F0E3DFE72D47BCEF36D159BD354EA2557D5479B835D0AE2867AE7B2696AD1',
          exponent: 0,
          aliases: ['uusdlr']
        },
        {
          denom: 'usdlr',
          exponent: 6
        }
      ],
      base: 'ibc/354F0E3DFE72D47BCEF36D159BD354EA2557D5479B835D0AE2867AE7B2696AD1',
      display: 'usdlr',
      name: 'USDLR by Stable',
      symbol: 'USDLR',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-17',
            base_denom: 'uusdlr',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdlr.svg'
        }
      ]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [
        {
          denom:
            'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
          exponent: 0,
          aliases: ['uosmo']
        },
        {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }
      ],
      base: 'ibc/6AE2756AA7EAA8FA06E11472EA05CA681BD8D3FBC1AAA9F06C79D1EC1C90DC9B',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4410',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
          exponent: 0,
          aliases: ['uion']
        },
        {
          denom: 'ion',
          exponent: 6
        }
      ],
      base: 'ibc/FBA36393A0FF23EAAD5B1A99E06F66128F20E7A78B3FD58632F0FC247167DA17',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4410',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    },
    {
      denom_units: [
        {
          denom:
            'ibc/AB2FB1E06C1D202211CC6C1871FD9467F56887396562EE39456C123DC6BCC2FB',
          exponent: 0,
          aliases: [
            'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz'
          ]
        },
        {
          denom: 'willyz',
          exponent: 6
        }
      ],
      base: 'ibc/AB2FB1E06C1D202211CC6C1871FD9467F56887396562EE39456C123DC6BCC2FB',
      name: 'Willyz',
      display: 'willyz',
      symbol: 'WILLYZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
      },
      keywords: ['memecoin'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg'
        }
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4410',
            base_denom:
              'factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-12'
          }
        }
      ]
    }
  ]
};
export default assets;
