import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "dydxtestnet",
  "assets": [
    {
      "description": "The native token of Axelar",
      "denom_units": [
        {
          "denom": "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
          "exponent": 0,
          "aliases": [
            "uaxl"
          ]
        },
        {
          "denom": "axl",
          "exponent": 6
        }
      ],
      "base": "ibc/0634D0993744740D675AD01E81156EAC945AEAAE17C074918DC7FF52F41B263E",
      "name": "Axelar",
      "display": "axl",
      "symbol": "AXL",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
      },
      "coingecko_id": "axelar",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "uaxl",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ]
    },
    {
      "description": "Circle's stablecoin on Axelar",
      "denom_units": [
        {
          "denom": "ibc/3D3E77333E4AAE1BCE0F03BEDA9A538166D113AF1B60EB1C35365D03506F07F4",
          "exponent": 0,
          "aliases": [
            "uausdc"
          ]
        },
        {
          "denom": "ausdc",
          "exponent": 6
        }
      ],
      "base": "ibc/3D3E77333E4AAE1BCE0F03BEDA9A538166D113AF1B60EB1C35365D03506F07F4",
      "name": "USD Coin",
      "display": "ausdc",
      "symbol": "aUSDC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "uausdc",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereumtestnet",
            "base_denom": "0x254d06f33bDc5b8ee05b2ea472107E300226659A"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg"
      }
    },
    {
      "description": "Wrapped Ether on Axelar",
      "denom_units": [
        {
          "denom": "ibc/9BE75CAB3126DA45896BBA7CC269199120F7E7B256E6EA07A57D20007042AD50",
          "exponent": 0,
          "aliases": [
            "eth-wei"
          ]
        },
        {
          "denom": "weth",
          "exponent": 18
        }
      ],
      "base": "ibc/9BE75CAB3126DA45896BBA7CC269199120F7E7B256E6EA07A57D20007042AD50",
      "name": "Wrapped Ether",
      "display": "weth",
      "symbol": "axlWETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "eth-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "ethereumtestnet",
            "base_denom": "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/weth.svg"
      }
    },
    {
      "description": "Wrapped Moonbeam on Axelar",
      "denom_units": [
        {
          "denom": "ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673",
          "exponent": 0,
          "aliases": [
            "wglmr-wei"
          ]
        },
        {
          "denom": "wglmr",
          "exponent": 18
        }
      ],
      "base": "ibc/A7C06A800850847DBCC36213185EC5AAD3C719D42D1F0623F9C1F9EFF456F673",
      "name": "Wrapped Moonbeam",
      "display": "wglmr",
      "symbol": "WDEV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "wglmr-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "moonbeamtestnet",
            "base_denom": "0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg"
      }
    },
    {
      "description": "Wrapped Matic on Axelar",
      "denom_units": [
        {
          "denom": "ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950",
          "exponent": 0,
          "aliases": [
            "wmatic-wei"
          ]
        },
        {
          "denom": "wmatic",
          "exponent": 18
        }
      ],
      "base": "ibc/C322C7D0867CC3EE6FA3495DC9685E5A0F49B506369341287FDA1E110841A950",
      "name": "Wrapped Matic",
      "display": "wmatic",
      "symbol": "WMATIC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "wmatic-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "polygontestnet",
            "base_denom": "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
      }
    },
    {
      "description": "Wrapped BNB on Axelar",
      "denom_units": [
        {
          "denom": "ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391",
          "exponent": 0,
          "aliases": [
            "wbnb-wei"
          ]
        },
        {
          "denom": "wbnb",
          "exponent": 18
        }
      ],
      "base": "ibc/3D4499D811B055223D0EFB06D2211F84772CAEF0FB987F71BAE716191714B391",
      "name": "Wrapped BNB",
      "display": "wbnb",
      "symbol": "WBNB",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "wbnb-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "binancesmartchaintestnet",
            "base_denom": "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/binancesmartchain/images/wbnb.svg"
      }
    },
    {
      "description": "Wrapped AVAX on Axelar.",
      "denom_units": [
        {
          "denom": "ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453",
          "exponent": 0,
          "aliases": [
            "wavax-wei"
          ]
        },
        {
          "denom": "avax",
          "exponent": 18
        }
      ],
      "base": "ibc/0886E3462B7DD438353781848DBDF90E58BB7DE90266E3F95E41B3FA8ED1B453",
      "name": "Wrapped AVAX",
      "display": "avax",
      "symbol": "WAVAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "wavax-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "avalanchetestnet",
            "base_denom": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/avalanche/images/wavax.svg"
      }
    },
    {
      "description": "Wrapped FTM on Axelar.",
      "denom_units": [
        {
          "denom": "ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B",
          "exponent": 0,
          "aliases": [
            "wftm-wei"
          ]
        },
        {
          "denom": "ftm",
          "exponent": 18
        }
      ],
      "base": "ibc/23B62EFD1B9444733889B42362570C774801430A1C656A0A3F8D6D69AE93ED8B",
      "name": "Wrapped FTM",
      "display": "ftm",
      "symbol": "WFTM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-297",
            "base_denom": "wftm-wei",
            "chain_name": "axelartestnet"
          },
          "chain": {
            "channel_id": "channel-4"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "fantomtestnet",
            "base_denom": "0x812666209b90344Ec8e528375298ab9045c2Bd08"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
        }
      ],
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png"
      }
    }
  ]
};
export default assets;
    