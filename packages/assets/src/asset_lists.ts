import { AssetList } from '@chain-registry/types';
const asset_lists: AssetList[] = [
  {
    "chain_name": "agoric",
    "assets": [
      {
        "description": "The native token of Axelar",
        "denom_units": [
          {
            "denom": "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F",
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
        "base": "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F",
        "name": "Axelar",
        "display": "axl",
        "symbol": "AXL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        },
        "coingecko_id": "axelar",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "uaxl",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "Circle's stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "usdc",
            "exponent": 6
          }
        ],
        "base": "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F",
        "name": "USD Coin",
        "display": "usdc",
        "symbol": "USDC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "uusdc",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "frax",
            "exponent": 18
          }
        ],
        "base": "ibc/7B11FE7D6385B46B9F3598B298B81A773CB20A8BA12001D87A78580314218364",
        "name": "Frax",
        "display": "frax",
        "symbol": "FRAX",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "frax-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "dai",
            "exponent": 18
          }
        ],
        "base": "ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242",
        "name": "Dai Stablecoin",
        "display": "dai",
        "symbol": "DAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "dai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "usdt",
            "exponent": 6
          }
        ],
        "base": "ibc/F2331645B9683116188EF36FC04A809C28BD36B54555E8705A37146D0182F045",
        "name": "Tether USD",
        "display": "usdt",
        "symbol": "USDT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "uusdt",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "weth",
            "exponent": 18
          }
        ],
        "base": "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7",
        "name": "Wrapped Ether",
        "display": "weth",
        "symbol": "WETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "weth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "wbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC",
        "name": "Wrapped Bitcoin",
        "display": "wbtc",
        "symbol": "WBTC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "wbtc-satoshi",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Aave on Axelar",
        "denom_units": [
          {
            "denom": "ibc/5E6061C9FE6FC8E5E4E0B7A9313561D28BA6D2A246877DF0FB6636EEEA055131",
            "exponent": 0,
            "aliases": [
              "aave-wei"
            ]
          },
          {
            "denom": "aave",
            "exponent": 18
          }
        ],
        "base": "ibc/5E6061C9FE6FC8E5E4E0B7A9313561D28BA6D2A246877DF0FB6636EEEA055131",
        "name": "Aave",
        "display": "aave",
        "symbol": "AAVE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "aave-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        },
        "coingecko_id": "aave"
      },
      {
        "description": "ApeCoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1C9CC36F8E961719EAF52D4A2ECAB84538D0425C63CAC77D516BF07FFAF931D5",
            "exponent": 0,
            "aliases": [
              "ape-wei"
            ]
          },
          {
            "denom": "ape",
            "exponent": 18
          }
        ],
        "base": "ibc/1C9CC36F8E961719EAF52D4A2ECAB84538D0425C63CAC77D516BF07FFAF931D5",
        "name": "ApeCoin",
        "display": "ape",
        "symbol": "APE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "ape-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        },
        "coingecko_id": "apecoin"
      },
      {
        "description": "Axie Infinity Shard on Axelar",
        "denom_units": [
          {
            "denom": "ibc/5181AFC5D9858E80212EE5C9F35D52DAE4E26AD5F55B19DD633206C51DECB6AF",
            "exponent": 0,
            "aliases": [
              "axs-wei"
            ]
          },
          {
            "denom": "axs",
            "exponent": 18
          }
        ],
        "base": "ibc/5181AFC5D9858E80212EE5C9F35D52DAE4E26AD5F55B19DD633206C51DECB6AF",
        "name": "Axie Infinity Shard",
        "display": "axs",
        "symbol": "AXS",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "axs-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        },
        "coingecko_id": "axie-infinity"
      },
      {
        "description": "Chainlink on Axelar",
        "denom_units": [
          {
            "denom": "ibc/FC59D6840A41252352263CEA2B832BB86D68D03CBA194263CB9F3C15946796FB",
            "exponent": 0,
            "aliases": [
              "link-wei"
            ]
          },
          {
            "denom": "link",
            "exponent": 18
          }
        ],
        "base": "ibc/FC59D6840A41252352263CEA2B832BB86D68D03CBA194263CB9F3C15946796FB",
        "name": "Chainlink",
        "display": "link",
        "symbol": "LINK",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "link-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        },
        "coingecko_id": "chainlink"
      },
      {
        "description": "Maker on Axelar",
        "denom_units": [
          {
            "denom": "ibc/31A4E6623063E702FB9CF2E7B616DFCCDE319CA2FC4775CDFF26F29F628E7ACF",
            "exponent": 0,
            "aliases": [
              "mkr-wei"
            ]
          },
          {
            "denom": "mkr",
            "exponent": 18
          }
        ],
        "base": "ibc/31A4E6623063E702FB9CF2E7B616DFCCDE319CA2FC4775CDFF26F29F628E7ACF",
        "name": "Maker",
        "display": "mkr",
        "symbol": "MKR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "mkr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        },
        "coingecko_id": "maker"
      },
      {
        "description": "Rai Reflex Index on Axelar",
        "denom_units": [
          {
            "denom": "ibc/4CA23432A78B272A9EB7010CB72A15A199066D239F1B13BB583F3945EB8A315C",
            "exponent": 0,
            "aliases": [
              "rai-wei"
            ]
          },
          {
            "denom": "rai",
            "exponent": 18
          }
        ],
        "base": "ibc/4CA23432A78B272A9EB7010CB72A15A199066D239F1B13BB583F3945EB8A315C",
        "name": "Rai Reflex Index",
        "display": "rai",
        "symbol": "RAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "rai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        },
        "coingecko_id": "rai"
      },
      {
        "description": "Shiba Inu on Axelar",
        "denom_units": [
          {
            "denom": "ibc/43BF3152103ED706E207005E7C433AB3440572C1D444FFE49321A0EF6A8EFC82",
            "exponent": 0,
            "aliases": [
              "shib-wei"
            ]
          },
          {
            "denom": "shib",
            "exponent": 18
          }
        ],
        "base": "ibc/43BF3152103ED706E207005E7C433AB3440572C1D444FFE49321A0EF6A8EFC82",
        "name": "Shiba Inu",
        "display": "shib",
        "symbol": "SHIB",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "shib-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        },
        "coingecko_id": "shiba-inu"
      },
      {
        "description": "Lido Staked Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/CA856BEC686F1F2DCFA410D282B1325D98B8AB81436A626F4214B7BF441AAA98",
            "exponent": 0,
            "aliases": [
              "steth-wei"
            ]
          },
          {
            "denom": "steth",
            "exponent": 18
          }
        ],
        "base": "ibc/CA856BEC686F1F2DCFA410D282B1325D98B8AB81436A626F4214B7BF441AAA98",
        "name": "Lido Staked Ether",
        "display": "steth",
        "symbol": "stETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "steth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        },
        "coingecko_id": "staked-ether"
      },
      {
        "description": "Uniswap on Axelar",
        "denom_units": [
          {
            "denom": "ibc/0A88A08F3E9573DB9D8CB74AA3746F6D23C41C3EE7B6CC5AA4695A1DD74FF86B",
            "exponent": 0,
            "aliases": [
              "uni-wei"
            ]
          },
          {
            "denom": "uni",
            "exponent": 18
          }
        ],
        "base": "ibc/0A88A08F3E9573DB9D8CB74AA3746F6D23C41C3EE7B6CC5AA4695A1DD74FF86B",
        "name": "Uniswap",
        "display": "uni",
        "symbol": "UNI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "uni-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        },
        "coingecko_id": "uniswap"
      },
      {
        "description": "Chain on Axelar",
        "denom_units": [
          {
            "denom": "ibc/7558FFC9B72318EC0510FC99970F079AA28CE1D96B3C34A775A0CCDBE5A2D500",
            "exponent": 0,
            "aliases": [
              "xcn-wei"
            ]
          },
          {
            "denom": "xcn",
            "exponent": 18
          }
        ],
        "base": "ibc/7558FFC9B72318EC0510FC99970F079AA28CE1D96B3C34A775A0CCDBE5A2D500",
        "name": "Chain",
        "display": "xcn",
        "symbol": "XCN",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "xcn-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        },
        "coingecko_id": "chain-2"
      },
      {
        "description": "Wrapped Polkadot on Axelar",
        "denom_units": [
          {
            "denom": "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539",
            "exponent": 0,
            "aliases": [
              "dot-planck"
            ]
          },
          {
            "denom": "dot",
            "exponent": 10
          }
        ],
        "base": "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539",
        "name": "Wrapped Polkadot",
        "display": "dot",
        "symbol": "DOT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "dot-planck",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
        },
        "coingecko_id": "polkadot"
      },
      {
        "description": "Wrapped Moonbeam on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1",
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
        "base": "ibc/C8D63703F5805CE6A2B20555139CF6ED9CDFA870389648EB08D688B94B0AE2C1",
        "name": "Wrapped Moonbeam",
        "display": "wglmr",
        "symbol": "WGLMR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "wglmr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
        },
        "coingecko_id": "wrapped-moonbeam"
      },
      {
        "description": "Wrapped Matic on Axelar",
        "denom_units": [
          {
            "denom": "ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6",
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
        "base": "ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6",
        "name": "Wrapped Matic",
        "display": "wmatic",
        "symbol": "WMATIC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-41",
              "base_denom": "wmatic-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        },
        "coingecko_id": "matic-network"
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/BA313C4A19DFBF943586C0387E6B11286F9E416B4DD27574E6909CABE0E342FA",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/BA313C4A19DFBF943586C0387E6B11286F9E416B4DD27574E6909CABE0E342FA",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-405",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/7A0FAE01EB4FD6930A0111759B22BB631BB089C75F7186E4F9ACC0E139DE678C",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/7A0FAE01EB4FD6930A0111759B22BB631BB089C75F7186E4F9ACC0E139DE678C",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/8EA29200F7BBF4941DDCE468340077B206D13078BF146D70F7D798E08C4A172F",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/8EA29200F7BBF4941DDCE468340077B206D13078BF146D70F7D798E08C4A172F",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/64B3EFE08A6A3EF5D2A7F1D3AF033DDC951DA51F92E06CC31D3F9AF8E8368860",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/64B3EFE08A6A3EF5D2A7F1D3AF033DDC951DA51F92E06CC31D3F9AF8E8368860",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "coingecko_id": "graviton",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-91",
              "base_denom": "ugraviton",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/E96596EC750E62E4FFEF17600260AD95EE5F073FB5CA103FC35F3816EED2F8DA",
            "exponent": 0,
            "aliases": [
              "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/E96596EC750E62E4FFEF17600260AD95EE5F073FB5CA103FC35F3816EED2F8DA",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-91",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-320",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-320",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "akash",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/2E5D0AC026AC1AFA65A23023BA4F24BB8DDF94F118EDC0BAD6F625BFC557CDED",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-184",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/19D81397DF4DE38D195614D6E37528012B3BB3EC6A92D68F83FAC6C2E91F7673",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/19D81397DF4DE38D195614D6E37528012B3BB3EC6A92D68F83FAC6C2E91F7673",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/D3B29CFA1D8935DB99D71C6542BC38127EC4E7CE402755B774B8E1CC588E58BF",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/D3B29CFA1D8935DB99D71C6542BC38127EC4E7CE402755B774B8E1CC588E58BF",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/1849A429022CBAAB619074CA4412D0016F262218BE6DD828BA8A3DD97D6B52BB",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/1849A429022CBAAB619074CA4412D0016F262218BE6DD828BA8A3DD97D6B52BB",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-29",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-35"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/0B054D42379E33FACC21B7F8DBF952512A3E769E43CC777D63B47A021935D5C6",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/0B054D42379E33FACC21B7F8DBF952512A3E769E43CC777D63B47A021935D5C6",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-29",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-35"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/B4F8297D4C270E82BDF11D51FD51A9FD23B0958B98B1E08346477452119E7D70",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/B4F8297D4C270E82BDF11D51FD51A9FD23B0958B98B1E08346477452119E7D70",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/AAFAD8AC1A29CDA9985742B9DE3C32C1163798919C0B3A4C339A70D5F49D1E15",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/AAFAD8AC1A29CDA9985742B9DE3C32C1163798919C0B3A4C339A70D5F49D1E15",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/268814152066040B21D1617B04A1617CC0C2264A65179318B1624BE72735A733",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/268814152066040B21D1617B04A1617CC0C2264A65179318B1624BE72735A733",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/3B3D6D224E3B1BD8BEE2B2763966F4E8784EFD871C7F26CA3305D6B2C4E3BC7E",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/3B3D6D224E3B1BD8BEE2B2763966F4E8784EFD871C7F26CA3305D6B2C4E3BC7E",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/A59E9BD579F40D893D05583FBD8400B3AC7D97C758BAD9D409E0FB4619C4EE34",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/A59E9BD579F40D893D05583FBD8400B3AC7D97C758BAD9D409E0FB4619C4EE34",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/13BD0905CFB705ABF84B60209C44071878C9F07A0A2CAC5EDBE315AD3CFD1DF2",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/13BD0905CFB705ABF84B60209C44071878C9F07A0A2CAC5EDBE315AD3CFD1DF2",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-43"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/0FD5103C7353F0C68F33B60ED7F99B3B5DF90CA947263FFC85BB5A9BEE3060E5",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/0FD5103C7353F0C68F33B60ED7F99B3B5DF90CA947263FFC85BB5A9BEE3060E5",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-12"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/8DF58513AF8A608CD13929F5300EBCBD034FAFBA284691E8FC414A193F57529C",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/8DF58513AF8A608CD13929F5300EBCBD034FAFBA284691E8FC414A193F57529C",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/8F3A3EA80C9AC9FD36776FBD828767CD77D03F3205CE3773DF02F14925758CE3",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/8F3A3EA80C9AC9FD36776FBD828767CD77D03F3205CE3773DF02F14925758CE3",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "assetmantle",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-83",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/95AA8D9F68C2681A4E1DE71FDE32B2216E9916B194CE0DB4E8297DD4A40C9D85",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/95AA8D9F68C2681A4E1DE71FDE32B2216E9916B194CE0DB4E8297DD4A40C9D85",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-83",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of OKExChain",
        "denom_units": [
          {
            "denom": "ibc/45FFEE350E790699F48BB53C35CBB71722246D54D5B08731A736B0C4376E5FF7",
            "exponent": 0,
            "aliases": [
              "wei"
            ]
          },
          {
            "denom": "okt",
            "exponent": 18
          }
        ],
        "base": "ibc/45FFEE350E790699F48BB53C35CBB71722246D54D5B08731A736B0C4376E5FF7",
        "name": "OKExChain",
        "display": "okt",
        "symbol": "OKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
        },
        "coingecko_id": "okc-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-23",
              "base_denom": "wei",
              "chain_name": "okexchain"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-232",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-232",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "axelar",
    "assets": [
      {
        "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
        "denom_units": [
          {
            "denom": "ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93",
            "exponent": 0,
            "aliases": [
              "ubld"
            ]
          },
          {
            "denom": "bld",
            "exponent": 6
          }
        ],
        "base": "ibc/AD211FEDD6DF0EDA18873D4E2A49972759BD761D96C3BBD9D6731FDC3F948F93",
        "name": "Agoric",
        "display": "bld",
        "symbol": "BLD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png"
        },
        "coingecko_id": "agoric",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "ubld",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-41"
            }
          }
        ]
      },
      {
        "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
        "denom_units": [
          {
            "denom": "ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38",
            "exponent": 0,
            "aliases": [
              "uist"
            ]
          },
          {
            "denom": "ist",
            "exponent": 6
          }
        ],
        "base": "ibc/17F12F5F038242355C41E838BCC72781276D68302DF7DD09DAB8E6C2832D8F38",
        "name": "Inter Stable Token",
        "display": "ist",
        "symbol": "IST",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "uist",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-41"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/B090DC21658BD57698522880590CA53947B8B09355764131AA94EC75517D46A5",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/FC48493C53C0A6EF28A191F42A65500643DDF8A0B5B89ADF3FC5FCB60AA6D92A",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/9E3EB38E5E157AEBFF4A8EAC66E654BC8ECFCB1F758F4D1C0F2D65945E9E2935",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-71",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/FB36818FECAFC60E1207AEE7A446F3D53BDEA9697ABE303844C436C2981A73BC",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/FB36818FECAFC60E1207AEE7A446F3D53BDEA9697ABE303844C436C2981A73BC",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-71",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-208",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-208",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/5B0968D76C6250F0824BD0BB4317DB34E884A14B345C83FB8256809855AC7CA7",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-12"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "bandchain",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/6B8531505147C9FF2AC90BC096AEC5D8E77EE3582874640FA5FE4E4FB382D2AC",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/6B8531505147C9FF2AC90BC096AEC5D8E77EE3582874640FA5FE4E4FB382D2AC",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-148",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-83"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/1005CD468908E4EB83A7E3D4A68E90128D073E3A85611B8B424320F306C508E1",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/1005CD468908E4EB83A7E3D4A68E90128D073E3A85611B8B424320F306C508E1",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-148",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-83"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "bitcanna",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/8D9262E35CAE362FA74AE05E430550757CF8D842EC1B241F645D3CB7179AFD10",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/8D9262E35CAE362FA74AE05E430550757CF8D842EC1B241F645D3CB7179AFD10",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-50",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/D73741E34A3D275329B07690BEB851D02C251CE074BFF690AFC4ABA49013A854",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/D73741E34A3D275329B07690BEB851D02C251CE074BFF690AFC4ABA49013A854",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-50",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-51",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-51",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "bitsong",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-73",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-73",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "bostrom",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-95",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-95",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "carbon",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-188",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-188",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "cerberus",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-212",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-212",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "cheqd",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-108",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-108",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "chihuahua",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/89C79BD28DCCF300B9EE87740B061011AD870EC480777FAB95D85B3ED36BC06C",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-28",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/B3E5A9E20ACBC8C380169AD8FF9A1DA38F64610C82C0412FABFBCF5FF9D29E4F",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/B3E5A9E20ACBC8C380169AD8FF9A1DA38F64610C82C0412FABFBCF5FF9D29E4F",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-28",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token of OKExChain",
        "denom_units": [
          {
            "denom": "ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB",
            "exponent": 0,
            "aliases": [
              "wei"
            ]
          },
          {
            "denom": "okt",
            "exponent": 18
          }
        ],
        "base": "ibc/9F63977F17AB8106AAFD8E336F5114F76F08B170B120119C8B62F27B0346A9FB",
        "name": "OKExChain",
        "display": "okt",
        "symbol": "OKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
        },
        "coingecko_id": "okc-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "wei",
              "chain_name": "okexchain"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-113",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-113",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "comdex",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/167E3D88D71B7D2F6308D3EF93FC3DD51932B2D9672D72B71418F61CBC5F5717",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/167E3D88D71B7D2F6308D3EF93FC3DD51932B2D9672D72B71418F61CBC5F5717",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-36",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-18"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/3F9C47BCEB0E3A9F6DE537C4BEAA461240D85BAA6E5125B52EBB7A3B2EE39C27",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/3F9C47BCEB0E3A9F6DE537C4BEAA461240D85BAA6E5125B52EBB7A3B2EE39C27",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-36",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-18"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-87",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-87",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "cosmoshub",
    "assets": [
      {
        "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
        "denom_units": [
          {
            "denom": "ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7",
            "exponent": 0,
            "aliases": [
              "ubld"
            ]
          },
          {
            "denom": "bld",
            "exponent": 6
          }
        ],
        "base": "ibc/26D5710650B26F38CD59EDDC2E85830BC47BD727F23747EB41F350263F08DCF7",
        "name": "Agoric",
        "display": "bld",
        "symbol": "BLD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png"
        },
        "coingecko_id": "agoric",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ubld",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-405"
            }
          }
        ]
      },
      {
        "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
        "denom_units": [
          {
            "denom": "ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA",
            "exponent": 0,
            "aliases": [
              "uist"
            ]
          },
          {
            "denom": "ist",
            "exponent": 6
          }
        ],
        "base": "ibc/9EA9BCC30570DC3198317BB6B5561AB41DDC17AFC342087022C128C57EFE19BA",
        "name": "Inter Stable Token",
        "display": "ist",
        "symbol": "IST",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "uist",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-405"
            }
          }
        ]
      },
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/2181AAB0218EAC24BC9F86BD1364FBBFA3E6E3FCC25E88E3E68C15DC6E752D86",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-184"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/3F18D520CE791A40357D061FAD657CED6B21D023F229EAF131D7FE7CE6F488BD",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/835EE9D00C35D72128F195B50F8A89EB83E5011C43EA0AA00D16348E2208FEBB",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/C932ADFE2B4216397A4F17458B6E4468499B86C3BC8116180F85D799D6F5CC1B",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-27",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-187"
            }
          }
        ]
      },
      {
        "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
        "denom_units": [
          {
            "denom": "ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB",
            "exponent": 0,
            "aliases": [
              "ungm"
            ]
          },
          {
            "denom": "ngm",
            "exponent": 6
          }
        ],
        "base": "ibc/E070CE91CC4BD15AEC9B5788C0826755AAD35052A3037E9AC62BE70B4C9A7DBB",
        "name": "e-Money",
        "display": "ngm",
        "symbol": "NGM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png"
        },
        "coingecko_id": "e-money",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ungm",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C",
            "exponent": 0,
            "aliases": [
              "eeur"
            ]
          },
          {
            "denom": "eur",
            "exponent": 6
          }
        ],
        "base": "ibc/B93F321238F7BB15AB5B882660AAE72286C8E9035DE34E2B30F60E54C623C63C",
        "name": "e-Money EUR",
        "display": "eur",
        "symbol": "EEUR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png"
        },
        "coingecko_id": "e-money-eur",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "eeur",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB",
            "exponent": 0,
            "aliases": [
              "echf"
            ]
          },
          {
            "denom": "ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB",
            "exponent": 6,
            "aliases": [
              "echf"
            ]
          }
        ],
        "base": "ibc/96344D426100A0885D84F1C588E3C2C2A8CB2A82B446FC8F63B91E4B70BF33EB",
        "name": "e-Money CHF",
        "display": "chf",
        "symbol": "ECHF",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "echf",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6",
            "exponent": 0,
            "aliases": [
              "enok"
            ]
          },
          {
            "denom": "ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6",
            "exponent": 6,
            "aliases": [
              "enok"
            ]
          }
        ],
        "base": "ibc/F998631ADCB33376AB66126D8BF5212314F15A960C215180D06ECFA9FA7F48E6",
        "name": "e-Money NOK",
        "display": "nok",
        "symbol": "ENOK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "enok",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00",
            "exponent": 0,
            "aliases": [
              "edkk"
            ]
          },
          {
            "denom": "ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00",
            "exponent": 6,
            "aliases": [
              "edkk"
            ]
          }
        ],
        "base": "ibc/6EC3B085692C4507A2365E88E82CBCB32DD58E0099056CBC16824D2EE99C5E00",
        "name": "e-Money DKK",
        "display": "dkk",
        "symbol": "EDKK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "edkk",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2",
            "exponent": 0,
            "aliases": [
              "esek"
            ]
          },
          {
            "denom": "ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2",
            "exponent": 6,
            "aliases": [
              "esek"
            ]
          }
        ],
        "base": "ibc/178B678FFA6991C1064332FBA0C9A4FC954E3DD66DD5B692761172DB5559F6D2",
        "name": "e-Money SEK",
        "display": "sek",
        "symbol": "ESEK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "esek",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-202"
            }
          }
        ]
      },
      {
        "description": "The native token of IXO Chain",
        "denom_units": [
          {
            "denom": "ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7",
            "exponent": 0,
            "aliases": [
              "uixo"
            ]
          },
          {
            "denom": "ixo",
            "exponent": 6
          }
        ],
        "base": "ibc/B2B5AEE174062FA7804AC95223D8169852F8F58962C51C66391C272C838258B7",
        "name": "IXO",
        "display": "ixo",
        "symbol": "IXO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png"
        },
        "coingecko_id": "ixo",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uixo",
              "chain_name": "impacthub"
            },
            "chain": {
              "channel_id": "channel-204"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/12DA42304EE1CE96071F712AA4D58186AD11C3165C0DCDA71E017A54F3935E66",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-182"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/CDAB23DA5495290063363BD1C3499E26189036302DC689985A7E23F8DF8D8DB0",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-207"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/AB0F0423607049304D701996895606C1EC3094B91CFB58BEE508967CA96EF565",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/AB0F0423607049304D701996895606C1EC3094B91CFB58BEE508967CA96EF565",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-207"
            }
          }
        ]
      },
      {
        "description": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.",
        "denom_units": [
          {
            "denom": "ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F",
            "exponent": 0,
            "aliases": [
              "nanolike"
            ]
          },
          {
            "denom": "like",
            "exponent": 9
          }
        ],
        "base": "ibc/1D5826F7EDE6E3B13009FEF994DC9CAAF15CC24CA7A9FF436FFB2E56FD72F54F",
        "name": "LikeCoin",
        "display": "like",
        "symbol": "LIKE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg"
        },
        "coingecko_id": "likecoin",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "nanolike",
              "chain_name": "likecoin"
            },
            "chain": {
              "channel_id": "channel-217"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-141"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/5BB694D466CCF099EF73F165F88472AF51D9C4991EAA42BD1168C5304712CC0D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-141"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/81D08BC39FB520EBD948CF017910DD69702D34BF5AC160F76D3B5CFC444EBCE0",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-190"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/560D0E725FEDF81B11B89FCA67CB18460AFB9D355B136CF9880259ADD0B3341A",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/560D0E725FEDF81B11B89FCA67CB18460AFB9D355B136CF9880259ADD0B3341A",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-190"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native governance and staking token of the Point network",
        "denom_units": [
          {
            "denom": "ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9",
            "exponent": 0,
            "aliases": [
              "apoint"
            ]
          },
          {
            "denom": "point",
            "exponent": 18
          }
        ],
        "base": "ibc/72132A48050500C99EDE86468719A5CE729A295F5F785E8E40049ACE6DA4F8B9",
        "name": "Point",
        "display": "point",
        "symbol": "POINT",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/point/images/point-logo.png"
        },
        "coingecko_id": "point-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "apoint",
              "chain_name": "point"
            },
            "chain": {
              "channel_id": "channel-404"
            }
          }
        ]
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/1FBDD58D438B4D04D26CBFB2E722C18984A0F1A52468C4F42F37D102F3D3F399",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-185"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/1542F8DC70E7999691E991E1EDEB1B47E65E3A217B1649D347098EE48ACB580F",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-235"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/42E47A5BA708EBE6E0C227006254F2784E209F4DBD3C6BB77EDC4B29EF875E8E",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-186"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/F5ED5F3DC6F0EF73FA455337C027FE91ABCB375116BF51A228E44C493E020A09",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-192"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/68A333688E5B07451F95555F8FE510E43EF9D3D44DF0909964F92081EF9BE5A7",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-158"
            }
          }
        ]
      },
      {
        "description": "The native token of Stride",
        "denom_units": [
          {
            "denom": "ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89",
            "exponent": 0,
            "aliases": [
              "ustrd"
            ]
          },
          {
            "denom": "strd",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/6B8A3F5C2AD51CD6171FA41A7E8C35AD594AB69226438DB94450436EA57B3A89",
        "name": "Stride",
        "display": "strd",
        "symbol": "STRD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        },
        "coingecko_id": "stride",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ustrd",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-391"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/B05539B66B72E2739B986B86391E5D08F12B8D5D2C2A7F8F8CF9ADF674DFA231",
            "exponent": 0,
            "aliases": [
              "stuatom"
            ]
          },
          {
            "denom": "statom",
            "exponent": 6
          }
        ],
        "base": "ibc/B05539B66B72E2739B986B86391E5D08F12B8D5D2C2A7F8F8CF9ADF674DFA231",
        "name": "stATOM",
        "display": "statom",
        "symbol": "stATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        },
        "coingecko_id": "stride-staked-atom",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "stuatom",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-391"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/715BD634CF4D914C3EE93B0F8A9D2514B743F6FE36BC80263D1BC5EE4B3C5D40",
            "exponent": 0,
            "aliases": [
              "stustars"
            ]
          },
          {
            "denom": "ststars",
            "exponent": 6
          }
        ],
        "base": "ibc/715BD634CF4D914C3EE93B0F8A9D2514B743F6FE36BC80263D1BC5EE4B3C5D40",
        "name": "stSTARS",
        "display": "ststars",
        "symbol": "stSTARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "stustars",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-391"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/054892D6BB43AF8B93AAC28AA5FD7019D2C59A15DAFD6F45C1FA2BF9BDA22454",
            "exponent": 0,
            "aliases": [
              "stuosmo"
            ]
          },
          {
            "denom": "stosmo",
            "exponent": 6
          }
        ],
        "base": "ibc/054892D6BB43AF8B93AAC28AA5FD7019D2C59A15DAFD6F45C1FA2BF9BDA22454",
        "name": "stOSMO",
        "display": "stosmo",
        "symbol": "stOSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "stuosmo",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-391"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/88DCAA43A9CD099E1F9BBB80B9A90F64782EBA115A84B2CD8398757ADA4F4B40",
            "exponent": 0,
            "aliases": [
              "stujuno"
            ]
          },
          {
            "denom": "stjuno",
            "exponent": 6
          }
        ],
        "base": "ibc/88DCAA43A9CD099E1F9BBB80B9A90F64782EBA115A84B2CD8398757ADA4F4B40",
        "name": "stJUNO",
        "display": "stjuno",
        "symbol": "stJUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "stujuno",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-391"
            }
          }
        ]
      },
      {
        "description": "The native token of Umee",
        "denom_units": [
          {
            "denom": "ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3",
            "exponent": 0,
            "aliases": [
              "uumee"
            ]
          },
          {
            "denom": "umee",
            "exponent": 6
          }
        ],
        "base": "ibc/DEC41A02E47658D40FC71E5A35A9C807111F5A6662A3FB5DA84C4E6F53E616B3",
        "name": "Umee",
        "display": "umee",
        "symbol": "UMEE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png"
        },
        "coingecko_id": "umee",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uumee",
              "chain_name": "umee"
            },
            "chain": {
              "channel_id": "channel-288"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "crescent",
    "assets": [
      {
        "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
        "denom_units": [
          {
            "denom": "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
            "exponent": 0,
            "aliases": [
              "ubld"
            ]
          },
          {
            "denom": "bld",
            "exponent": 6
          }
        ],
        "base": "ibc/11F940BCDFD7CFBFD7EDA13F25DA95D308286D441209D780C9863FD4271514EB",
        "name": "Agoric",
        "display": "bld",
        "symbol": "BLD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png"
        },
        "coingecko_id": "agoric",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "ubld",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
        "denom_units": [
          {
            "denom": "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
            "exponent": 0,
            "aliases": [
              "uist"
            ]
          },
          {
            "denom": "ist",
            "exponent": 6
          }
        ],
        "base": "ibc/CA1261224952DF089EFD363D8DBB30A8AB6D8CD181E60EE9E68E432F8DE14FE3",
        "name": "Inter Stable Token",
        "display": "ist",
        "symbol": "IST",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uist",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
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
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uaxl",
              "chain_name": "axelar"
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
            "denom": "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "usdc",
            "exponent": 6
          }
        ],
        "base": "ibc/BFF0D3805B50D93E2FA5C0B2DDF7E0B30A631076CD80BC12A48C0E95404B4A41",
        "name": "USD Coin",
        "display": "usdc",
        "symbol": "USDC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uusdc",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/21DB3093824F38A29399E7466B5870559AEC683D0D09D746F9EC47BB8505CBF7",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "frax",
            "exponent": 18
          }
        ],
        "base": "ibc/21DB3093824F38A29399E7466B5870559AEC683D0D09D746F9EC47BB8505CBF7",
        "name": "Frax",
        "display": "frax",
        "symbol": "FRAX",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "frax-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/2017AFA149C1C42DBF54EC910DA168E9E4F928DF0D3A8E841189994A9339FED9",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "dai",
            "exponent": 18
          }
        ],
        "base": "ibc/2017AFA149C1C42DBF54EC910DA168E9E4F928DF0D3A8E841189994A9339FED9",
        "name": "Dai Stablecoin",
        "display": "dai",
        "symbol": "DAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "dai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/11FB4C0BC2FCCFF2B01976C0070F468D82DAE8D1F565F80E64063BFDBEE4A5BD",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "usdt",
            "exponent": 6
          }
        ],
        "base": "ibc/11FB4C0BC2FCCFF2B01976C0070F468D82DAE8D1F565F80E64063BFDBEE4A5BD",
        "name": "Tether USD",
        "display": "usdt",
        "symbol": "USDT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uusdt",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "weth",
            "exponent": 18
          }
        ],
        "base": "ibc/F1806958CA98757B91C3FA1573ECECD24F6FA3804F074A6977658914A49E65A3",
        "name": "Wrapped Ether",
        "display": "weth",
        "symbol": "WETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "weth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/7FFC60524C4513A3A8E0A407CC89BFF5A861EC624209D72EB26FC10ADAEBA70E",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "wbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/7FFC60524C4513A3A8E0A407CC89BFF5A861EC624209D72EB26FC10ADAEBA70E",
        "name": "Wrapped Bitcoin",
        "display": "wbtc",
        "symbol": "WBTC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "wbtc-satoshi",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Aave on Axelar",
        "denom_units": [
          {
            "denom": "ibc/84303A70A7808C9FE1F53CC7480CBD42D888F8643671E6E7C43701B1D866D04A",
            "exponent": 0,
            "aliases": [
              "aave-wei"
            ]
          },
          {
            "denom": "aave",
            "exponent": 18
          }
        ],
        "base": "ibc/84303A70A7808C9FE1F53CC7480CBD42D888F8643671E6E7C43701B1D866D04A",
        "name": "Aave",
        "display": "aave",
        "symbol": "AAVE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "aave-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        },
        "coingecko_id": "aave"
      },
      {
        "description": "ApeCoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/F5B57795805E9F11B06F0B12BF016980093A97F0782A5700EFE4DAE89A0DB9B7",
            "exponent": 0,
            "aliases": [
              "ape-wei"
            ]
          },
          {
            "denom": "ape",
            "exponent": 18
          }
        ],
        "base": "ibc/F5B57795805E9F11B06F0B12BF016980093A97F0782A5700EFE4DAE89A0DB9B7",
        "name": "ApeCoin",
        "display": "ape",
        "symbol": "APE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "ape-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        },
        "coingecko_id": "apecoin"
      },
      {
        "description": "Axie Infinity Shard on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D34DC22F291BC5E508968530D0E5DA46A694C1515FA940533858CB9470E8A846",
            "exponent": 0,
            "aliases": [
              "axs-wei"
            ]
          },
          {
            "denom": "axs",
            "exponent": 18
          }
        ],
        "base": "ibc/D34DC22F291BC5E508968530D0E5DA46A694C1515FA940533858CB9470E8A846",
        "name": "Axie Infinity Shard",
        "display": "axs",
        "symbol": "AXS",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "axs-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        },
        "coingecko_id": "axie-infinity"
      },
      {
        "description": "Chainlink on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1AD2DD08D1AADAE7F667F82767425FEC119BAFEA5F514FCEA22E6E4E446BEADA",
            "exponent": 0,
            "aliases": [
              "link-wei"
            ]
          },
          {
            "denom": "link",
            "exponent": 18
          }
        ],
        "base": "ibc/1AD2DD08D1AADAE7F667F82767425FEC119BAFEA5F514FCEA22E6E4E446BEADA",
        "name": "Chainlink",
        "display": "link",
        "symbol": "LINK",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "link-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        },
        "coingecko_id": "chainlink"
      },
      {
        "description": "Maker on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1E8149AC74041CF61448A57858887B2D2C221B9B194509120BD3AD6E4278AAB0",
            "exponent": 0,
            "aliases": [
              "mkr-wei"
            ]
          },
          {
            "denom": "mkr",
            "exponent": 18
          }
        ],
        "base": "ibc/1E8149AC74041CF61448A57858887B2D2C221B9B194509120BD3AD6E4278AAB0",
        "name": "Maker",
        "display": "mkr",
        "symbol": "MKR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "mkr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        },
        "coingecko_id": "maker"
      },
      {
        "description": "Rai Reflex Index on Axelar",
        "denom_units": [
          {
            "denom": "ibc/A1F1BAE8D0CF9F8080C22FE2B0C60DFD25E96F4F985AC27C7E11F5A597CEE83D",
            "exponent": 0,
            "aliases": [
              "rai-wei"
            ]
          },
          {
            "denom": "rai",
            "exponent": 18
          }
        ],
        "base": "ibc/A1F1BAE8D0CF9F8080C22FE2B0C60DFD25E96F4F985AC27C7E11F5A597CEE83D",
        "name": "Rai Reflex Index",
        "display": "rai",
        "symbol": "RAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "rai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        },
        "coingecko_id": "rai"
      },
      {
        "description": "Shiba Inu on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D1F6A3A1A3C2E25A7039B4537E8D1B08490B6A3F57D758AB8C08AA512CE3E51A",
            "exponent": 0,
            "aliases": [
              "shib-wei"
            ]
          },
          {
            "denom": "shib",
            "exponent": 18
          }
        ],
        "base": "ibc/D1F6A3A1A3C2E25A7039B4537E8D1B08490B6A3F57D758AB8C08AA512CE3E51A",
        "name": "Shiba Inu",
        "display": "shib",
        "symbol": "SHIB",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "shib-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        },
        "coingecko_id": "shiba-inu"
      },
      {
        "description": "Lido Staked Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/B74E78325EB51CABBA812618947F04941B564F137C6A9C19E2626CE3EB5E1F8D",
            "exponent": 0,
            "aliases": [
              "steth-wei"
            ]
          },
          {
            "denom": "steth",
            "exponent": 18
          }
        ],
        "base": "ibc/B74E78325EB51CABBA812618947F04941B564F137C6A9C19E2626CE3EB5E1F8D",
        "name": "Lido Staked Ether",
        "display": "steth",
        "symbol": "stETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "steth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        },
        "coingecko_id": "staked-ether"
      },
      {
        "description": "Uniswap on Axelar",
        "denom_units": [
          {
            "denom": "ibc/392F7936508B675F7F794504F4829D6F459C0E7488EDE6B2C4E9192037E3F03F",
            "exponent": 0,
            "aliases": [
              "uni-wei"
            ]
          },
          {
            "denom": "uni",
            "exponent": 18
          }
        ],
        "base": "ibc/392F7936508B675F7F794504F4829D6F459C0E7488EDE6B2C4E9192037E3F03F",
        "name": "Uniswap",
        "display": "uni",
        "symbol": "UNI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uni-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        },
        "coingecko_id": "uniswap"
      },
      {
        "description": "Chain on Axelar",
        "denom_units": [
          {
            "denom": "ibc/40EDD0D8ECA8053AAEA9FCE600817E701F9BD7DB429DF99CD3C49B12F691DB03",
            "exponent": 0,
            "aliases": [
              "xcn-wei"
            ]
          },
          {
            "denom": "xcn",
            "exponent": 18
          }
        ],
        "base": "ibc/40EDD0D8ECA8053AAEA9FCE600817E701F9BD7DB429DF99CD3C49B12F691DB03",
        "name": "Chain",
        "display": "xcn",
        "symbol": "XCN",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "xcn-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        },
        "coingecko_id": "chain-2"
      },
      {
        "description": "Wrapped Polkadot on Axelar",
        "denom_units": [
          {
            "denom": "ibc/3208C8E45C27903988E437162134A172880BE112C0530B86117FB5DA7A5DF8B9",
            "exponent": 0,
            "aliases": [
              "dot-planck"
            ]
          },
          {
            "denom": "dot",
            "exponent": 10
          }
        ],
        "base": "ibc/3208C8E45C27903988E437162134A172880BE112C0530B86117FB5DA7A5DF8B9",
        "name": "Wrapped Polkadot",
        "display": "dot",
        "symbol": "DOT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "dot-planck",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
        },
        "coingecko_id": "polkadot"
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
        "symbol": "WGLMR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "wglmr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
        },
        "coingecko_id": "wrapped-moonbeam"
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
              "channel_id": "channel-7",
              "base_denom": "wmatic-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        },
        "coingecko_id": "matic-network"
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-326",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/C950356239AD2A205DE09FDF066B1F9FF19A7CA7145EA48A5B19B76EE47E52F7",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "coingecko_id": "graviton",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-62",
              "base_denom": "ugraviton",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/5F999C145B3800DC8215811064A8E209829F0DEF6B82E1BFBEE39A03C2DD09AB",
            "exponent": 0,
            "aliases": [
              "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/5F999C145B3800DC8215811064A8E209829F0DEF6B82E1BFBEE39A03C2DD09AB",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-62",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/B4F8297D4C270E82BDF11D51FD51A9FD23B0958B98B1E08346477452119E7D70",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/B4F8297D4C270E82BDF11D51FD51A9FD23B0958B98B1E08346477452119E7D70",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-297",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/AAFAD8AC1A29CDA9985742B9DE3C32C1163798919C0B3A4C339A70D5F49D1E15",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/AAFAD8AC1A29CDA9985742B9DE3C32C1163798919C0B3A4C339A70D5F49D1E15",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-297",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/8541877AC9CBC962B57532D445B57AF815C6BEF66C610F8D16F546EF65DF4B5C",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/8541877AC9CBC962B57532D445B57AF815C6BEF66C610F8D16F546EF65DF4B5C",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-51",
              "base_denom": "ustars",
              "chain_name": "stargaze"
            },
            "chain": {
              "channel_id": "channel-21"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "cryptoorgchain",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-14",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-21"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/B5919B1B65A79F595F71D2E8306FD1FB70B969A268230E745A6DBE86F1060D58",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/B5919B1B65A79F595F71D2E8306FD1FB70B969A268230E745A6DBE86F1060D58",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-187",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The native EVM, governance and staking token of the Evmos Hub",
        "denom_units": [
          {
            "denom": "ibc/80D5E86278CE910A7A9653CCA7DEB62C817E07AF9C0C657B43191C43DE60B107",
            "exponent": 0,
            "aliases": [
              "aevmos"
            ]
          },
          {
            "denom": "evmos",
            "exponent": 18
          }
        ],
        "base": "ibc/80D5E86278CE910A7A9653CCA7DEB62C817E07AF9C0C657B43191C43DE60B107",
        "name": "Evmos",
        "display": "evmos",
        "symbol": "EVMOS",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png"
        },
        "coingecko_id": "evmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-31",
              "base_denom": "aevmos",
              "chain_name": "evmos"
            },
            "chain": {
              "channel_id": "channel-57"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/9E7B7E495831F4E64D5E9105059EEF61FB8DFFB9CE28E2AD7C4B50192DE491B0",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/9E7B7E495831F4E64D5E9105059EEF61FB8DFFB9CE28E2AD7C4B50192DE491B0",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-13",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/B3CC9901DF8BA5F6154EDA69B3016EE16A795B6C422216AE08307FBBEAC22575",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/B3CC9901DF8BA5F6154EDA69B3016EE16A795B6C422216AE08307FBBEAC22575",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/008701C2C16FAC15372A91612C5D4F032E22C48455978BC6A51B8C8267E67A8C",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/008701C2C16FAC15372A91612C5D4F032E22C48455978BC6A51B8C8267E67A8C",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/3FB46732B9C1F6867ADF6F0BE4FAFFA1271BB2B7E5A4A14E2DAACBAE05BD0A0E",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/3FB46732B9C1F6867ADF6F0BE4FAFFA1271BB2B7E5A4A14E2DAACBAE05BD0A0E",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-25"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/EA3EE13F2D2A4085922BE6AF07F2DC7009A80D9461A37BB4C4F76B2A5817D23A",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/EA3EE13F2D2A4085922BE6AF07F2DC7009A80D9461A37BB4C4F76B2A5817D23A",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-19"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/67E8B26BE190FB3F191DA72D6A390DB7DFA6E92C99CB37644DECBEBD2A075C41",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/67E8B26BE190FB3F191DA72D6A390DB7DFA6E92C99CB37644DECBEBD2A075C41",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-33"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/CF2716DD1EA5866263E47C980D78F0810953B7DA1AFF4BACF663DC3B49B37389",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/CF2716DD1EA5866263E47C980D78F0810953B7DA1AFF4BACF663DC3B49B37389",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-22"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "cudos",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-298",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-298",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "decentr",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-181",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-181",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "desmos",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-135",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-135",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "dig",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/4CD525F166D32B0132C095F353F4C6F033B0FF5C49141470D1EFDA1D63303D04",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/95AA8D9F68C2681A4E1DE71FDE32B2216E9916B194CE0DB4E8297DD4A40C9D85",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/95AA8D9F68C2681A4E1DE71FDE32B2216E9916B194CE0DB4E8297DD4A40C9D85",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-128",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-128",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "emoney",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-202",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/D5460C6C5B9D46389463C65201200F602490933DF1A2FFFE76C2FD234E811986",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/D5460C6C5B9D46389463C65201200F602490933DF1A2FFFE76C2FD234E811986",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-23",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/3BEA25F3A13A9C17476C821CCF8ECCC84351DDB7B1B06B98654C3B4427F785CC",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/C98B2A0A286432E3B637925ECED1EC1BF378C74ABC1D5780C7DAF7483D4C87FF",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/C98B2A0A286432E3B637925ECED1EC1BF378C74ABC1D5780C7DAF7483D4C87FF",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "evmos",
    "assets": [
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/1FA2E811AA853A2AE028D82D490B1E967312DB871C9A40B19684FACB1DDD7881",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/1FA2E811AA853A2AE028D82D490B1E967312DB871C9A40B19684FACB1DDD7881",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-57",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-31"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-204",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-204",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/DC74BE775F57FF32C3C6E14ACD86339DB50632246F6482C81CF5FCE64C0AC5C7",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/DC74BE775F57FF32C3C6E14ACD86339DB50632246F6482C81CF5FCE64C0AC5C7",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-18",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The native token of Tgrade",
        "denom_units": [
          {
            "denom": "ibc/46AB1362B4446BCE0FD7D2F247FFCA8CC39BC6CA7AEAD03C77CABBD1CB41E5C9",
            "exponent": 0,
            "aliases": [
              "utgd"
            ]
          },
          {
            "denom": "tgd",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/46AB1362B4446BCE0FD7D2F247FFCA8CC39BC6CA7AEAD03C77CABBD1CB41E5C9",
        "name": "Tgrade",
        "display": "tgd",
        "symbol": "TGD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
        },
        "coingecko_id": "tgrade",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "utgd",
              "chain_name": "tgrade"
            },
            "chain": {
              "channel_id": "channel-34"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "fetchhub",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-229",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-229",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "galaxy",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-236",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-236",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "genesisl1",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-235",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-235",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "gravitybridge",
    "assets": [
      {
        "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
        "denom_units": [
          {
            "denom": "ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50",
            "exponent": 0,
            "aliases": [
              "ubld"
            ]
          },
          {
            "denom": "bld",
            "exponent": 6
          }
        ],
        "base": "ibc/25DC7FDF5A05ED9F66FB17FCD9F659D97EC609B8C15A184E6258EE8E91322E50",
        "name": "Agoric",
        "display": "bld",
        "symbol": "BLD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png"
        },
        "coingecko_id": "agoric",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "ubld",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-91"
            }
          }
        ]
      },
      {
        "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
        "denom_units": [
          {
            "denom": "ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3",
            "exponent": 0,
            "aliases": [
              "uist"
            ]
          },
          {
            "denom": "ist",
            "exponent": 6
          }
        ],
        "base": "ibc/AC68952014518ECAAB8672B5393A008276E9C0295C513725BF9E492A54F525F3",
        "name": "Inter Stable Token",
        "display": "ist",
        "symbol": "IST",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uist",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-91"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/4CD51DA94425EB1C8D1983832E46F410528DB2AAFBFC0C646845DAC2DB7D97AE",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-62"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/5AEBA89C7BEEF2C56EE23AC2138661C2EE7AB33C48CDE4C3C1E2E3218C4A2C41",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-62"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/376222D6D9DAE23092E29740E56B758580935A6D77C24C2ABD57A6A78A1F3955",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-144",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/0433997003A2CFE10E483B93743BEC37F2F13B89854FD69599482E6DB8E6CE22",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-144",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/74A48437840E981DD7789856D97EE5E3751DF474D22EDCD66DB046AF0B725A64",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-38",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/924514243A6167C144A0CA38E38F0BA269292961780265D5D4089D39144FFD49",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/924514243A6167C144A0CA38E38F0BA269292961780265D5D4089D39144FFD49",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-38",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/7907EA1A11FD4FC2A815FCAA54948C42F08E3F3C874EE48861386286FEB80160",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-79"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "impacthub",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-204",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/05AC4BBA78C5951339A47DD1BC1E7FC922A9311DF81C85745B1C162F516FF2F1",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-38",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/B1468D7420773B5D59561CC0E91D6A5F75415E216DCF2966D657E23B97322B36",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-38",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/517C29263DC4D9BAAB20D69D396736DD7AD7E1706D1519635CE516CF4D74A36F",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "injective",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-122",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-122",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/3C38B741DF7CD6CAC484343A4994CFC74BC002D1840AAFD5416D9DAC61E37F10",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/3C38B741DF7CD6CAC484343A4994CFC74BC002D1840AAFD5416D9DAC61E37F10",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-74"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "irisnet",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/ED3433FEFECE0B9EC584F0EBAB31E8AB6A7A187537F3E5B1D8A80998986E7ACF",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/ED3433FEFECE0B9EC584F0EBAB31E8AB6A7A187537F3E5B1D8A80998986E7ACF",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-182",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-12"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/F5252D10648436F46AD3D6CDA3B6F67486633B94A8BA024155D5F4891A32D3AF",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/F5252D10648436F46AD3D6CDA3B6F67486633B94A8BA024155D5F4891A32D3AF",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-23",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      },
      {
        "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
        "denom_units": [
          {
            "denom": "ibc/9085726C53DAE8603258E0664A0C00F9F3CE03CA8C0E9AF785F32EC42368DE94",
            "exponent": 0,
            "aliases": [
              "ungm"
            ]
          },
          {
            "denom": "ngm",
            "exponent": 6
          }
        ],
        "base": "ibc/9085726C53DAE8603258E0664A0C00F9F3CE03CA8C0E9AF785F32EC42368DE94",
        "name": "e-Money",
        "display": "ngm",
        "symbol": "NGM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png"
        },
        "coingecko_id": "e-money",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "ungm",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/7061990F2866DDB4938844BEF6054195DECDAF6F7E2C12C422C684D2BEEA787D",
            "exponent": 0,
            "aliases": [
              "eeur"
            ]
          },
          {
            "denom": "eur",
            "exponent": 6
          }
        ],
        "base": "ibc/7061990F2866DDB4938844BEF6054195DECDAF6F7E2C12C422C684D2BEEA787D",
        "name": "e-Money EUR",
        "display": "eur",
        "symbol": "EEUR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png"
        },
        "coingecko_id": "e-money-eur",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "eeur",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/BE78EE32683CB0BEDE19D69B4BB5E2CC33F06EF4AACFE6E92F51AA3C57BF202F",
            "exponent": 0,
            "aliases": [
              "echf"
            ]
          },
          {
            "denom": "ibc/BE78EE32683CB0BEDE19D69B4BB5E2CC33F06EF4AACFE6E92F51AA3C57BF202F",
            "exponent": 6,
            "aliases": [
              "echf"
            ]
          }
        ],
        "base": "ibc/BE78EE32683CB0BEDE19D69B4BB5E2CC33F06EF4AACFE6E92F51AA3C57BF202F",
        "name": "e-Money CHF",
        "display": "chf",
        "symbol": "ECHF",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "echf",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/38F5900BB9FC9282646216BF233B3974F7B8F1A85411FC45675BE4258BBCEED7",
            "exponent": 0,
            "aliases": [
              "enok"
            ]
          },
          {
            "denom": "ibc/38F5900BB9FC9282646216BF233B3974F7B8F1A85411FC45675BE4258BBCEED7",
            "exponent": 6,
            "aliases": [
              "enok"
            ]
          }
        ],
        "base": "ibc/38F5900BB9FC9282646216BF233B3974F7B8F1A85411FC45675BE4258BBCEED7",
        "name": "e-Money NOK",
        "display": "nok",
        "symbol": "ENOK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "enok",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/0A3E6D8B433B3BEE6BA21ED81A21106E764EAB3799627C2E4711EAD9AB476D2F",
            "exponent": 0,
            "aliases": [
              "edkk"
            ]
          },
          {
            "denom": "ibc/0A3E6D8B433B3BEE6BA21ED81A21106E764EAB3799627C2E4711EAD9AB476D2F",
            "exponent": 6,
            "aliases": [
              "edkk"
            ]
          }
        ],
        "base": "ibc/0A3E6D8B433B3BEE6BA21ED81A21106E764EAB3799627C2E4711EAD9AB476D2F",
        "name": "e-Money DKK",
        "display": "dkk",
        "symbol": "EDKK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "edkk",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/B994C93E89A89B6005E92BCB56E8E8977F87A5DD3ABEB48F016850580C77CADB",
            "exponent": 0,
            "aliases": [
              "esek"
            ]
          },
          {
            "denom": "ibc/B994C93E89A89B6005E92BCB56E8E8977F87A5DD3ABEB48F016850580C77CADB",
            "exponent": 6,
            "aliases": [
              "esek"
            ]
          }
        ],
        "base": "ibc/B994C93E89A89B6005E92BCB56E8E8977F87A5DD3ABEB48F016850580C77CADB",
        "name": "e-Money SEK",
        "display": "sek",
        "symbol": "ESEK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "esek",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/2915CCA550DA6840CB2D4F5BC95A067A7924A767B2EBEB3227DD66124AA8A626",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/2915CCA550DA6840CB2D4F5BC95A067A7924A767B2EBEB3227DD66124AA8A626",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/28FD914945B402E6471DD4E31DD8EDFB42B3810DA367967F4E941E85D0AD53DE",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/28FD914945B402E6471DD4E31DD8EDFB42B3810DA367967F4E941E85D0AD53DE",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/2BCCECAE49E981163B887FECCAF38B952915D10BD56D5B55B525DF1ECE804764",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/2BCCECAE49E981163B887FECCAF38B952915D10BD56D5B55B525DF1ECE804764",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/1EC0D41FED64D7C9C0D87E059F478965BE3962841BA14EFBF8C5A75F4458143A",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/1EC0D41FED64D7C9C0D87E059F478965BE3962841BA14EFBF8C5A75F4458143A",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/D722F048B816E0E36F20D9CF82CF3C4707DCE37F47583A6DA7829A69EF5175F4",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/D722F048B816E0E36F20D9CF82CF3C4707DCE37F47583A6DA7829A69EF5175F4",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-19"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/5F53F29B6E8DA52864B946771572957EFF91EFD4BE2C8F29258B89C55D41808A",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/5F53F29B6E8DA52864B946771572957EFF91EFD4BE2C8F29258B89C55D41808A",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-21"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "juno",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-35",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-29"
            }
          }
        ]
      },
      {
        "description": "The native token of Asset Mantle",
        "denom_units": [
          {
            "denom": "ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F",
            "exponent": 0,
            "aliases": [
              "umntl"
            ]
          },
          {
            "denom": "mntl",
            "exponent": 6
          }
        ],
        "base": "ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F",
        "name": "AssetMantle",
        "display": "mntl",
        "symbol": "MNTL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png"
        },
        "coingecko_id": "assetmantle",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "umntl",
              "chain_name": "assetmantle"
            },
            "chain": {
              "channel_id": "channel-83"
            }
          }
        ]
      },
      {
        "description": "The native token of Axelar",
        "denom_units": [
          {
            "denom": "ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990",
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
        "base": "ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990",
        "name": "Axelar",
        "display": "axl",
        "symbol": "AXL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        },
        "coingecko_id": "axelar",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uaxl",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ]
      },
      {
        "description": "Circle's stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "usdc",
            "exponent": 6
          }
        ],
        "base": "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
        "name": "USD Coin",
        "display": "usdc",
        "symbol": "USDC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uusdc",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "frax",
            "exponent": 18
          }
        ],
        "base": "ibc/1CE15165C83F70C7DB18B19C417321B02512A85BCB9FB8E553FC10070D122036",
        "name": "Frax",
        "display": "frax",
        "symbol": "FRAX",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "frax-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "dai",
            "exponent": 18
          }
        ],
        "base": "ibc/171E8F6687D290D378678310F9F15D367DCD245BF06184532B703A92054A8A4F",
        "name": "Dai Stablecoin",
        "display": "dai",
        "symbol": "DAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "dai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "usdt",
            "exponent": 6
          }
        ],
        "base": "ibc/B22D08F0E3D08968FB3CBEE2C1E993581A99AAAA60D0490C1AF7DCE567D5FDDA",
        "name": "Tether USD",
        "display": "usdt",
        "symbol": "USDT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uusdt",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "weth",
            "exponent": 18
          }
        ],
        "base": "ibc/95A45A81521EAFDBEDAEEB6DA975C02E55B414C95AD3CE50709272366A90CA17",
        "name": "Wrapped Ether",
        "display": "weth",
        "symbol": "WETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "weth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "wbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/5EF597EA4E863132BFD3E051AC6BAA0175F00913D3256A41F11DC425C39527D6",
        "name": "Wrapped Bitcoin",
        "display": "wbtc",
        "symbol": "WBTC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "wbtc-satoshi",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Aave on Axelar",
        "denom_units": [
          {
            "denom": "ibc/686AF664CCC44119B3DED5267CCA02CE6FA877A4C3EF71408FCA7B30EBD505C4",
            "exponent": 0,
            "aliases": [
              "aave-wei"
            ]
          },
          {
            "denom": "aave",
            "exponent": 18
          }
        ],
        "base": "ibc/686AF664CCC44119B3DED5267CCA02CE6FA877A4C3EF71408FCA7B30EBD505C4",
        "name": "Aave",
        "display": "aave",
        "symbol": "AAVE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "aave-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        },
        "coingecko_id": "aave"
      },
      {
        "description": "ApeCoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/9D4421F8337456349864798C4928500797AF09C002A288041F1748F7846EFA19",
            "exponent": 0,
            "aliases": [
              "ape-wei"
            ]
          },
          {
            "denom": "ape",
            "exponent": 18
          }
        ],
        "base": "ibc/9D4421F8337456349864798C4928500797AF09C002A288041F1748F7846EFA19",
        "name": "ApeCoin",
        "display": "ape",
        "symbol": "APE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "ape-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        },
        "coingecko_id": "apecoin"
      },
      {
        "description": "Axie Infinity Shard on Axelar",
        "denom_units": [
          {
            "denom": "ibc/424DD4BE67F6ADD52BA9A810B0B4157694A962B96BC676E4A22EB1E50679677F",
            "exponent": 0,
            "aliases": [
              "axs-wei"
            ]
          },
          {
            "denom": "axs",
            "exponent": 18
          }
        ],
        "base": "ibc/424DD4BE67F6ADD52BA9A810B0B4157694A962B96BC676E4A22EB1E50679677F",
        "name": "Axie Infinity Shard",
        "display": "axs",
        "symbol": "AXS",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "axs-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        },
        "coingecko_id": "axie-infinity"
      },
      {
        "description": "Chainlink on Axelar",
        "denom_units": [
          {
            "denom": "ibc/0409596DFE559E1B05D821CA3A5F8E290A7C2C3408B4872595CA0E22F13A09FE",
            "exponent": 0,
            "aliases": [
              "link-wei"
            ]
          },
          {
            "denom": "link",
            "exponent": 18
          }
        ],
        "base": "ibc/0409596DFE559E1B05D821CA3A5F8E290A7C2C3408B4872595CA0E22F13A09FE",
        "name": "Chainlink",
        "display": "link",
        "symbol": "LINK",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "link-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        },
        "coingecko_id": "chainlink"
      },
      {
        "description": "Maker on Axelar",
        "denom_units": [
          {
            "denom": "ibc/4A59932EAD8A140F66554E8E2B5CB80DCA5314A75A889F0AA2E648D96B69847F",
            "exponent": 0,
            "aliases": [
              "mkr-wei"
            ]
          },
          {
            "denom": "mkr",
            "exponent": 18
          }
        ],
        "base": "ibc/4A59932EAD8A140F66554E8E2B5CB80DCA5314A75A889F0AA2E648D96B69847F",
        "name": "Maker",
        "display": "mkr",
        "symbol": "MKR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "mkr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        },
        "coingecko_id": "maker"
      },
      {
        "description": "Rai Reflex Index on Axelar",
        "denom_units": [
          {
            "denom": "ibc/4AA19294AE89888CE7DB64CA76781EE2FE9A0B703B8A5F156AD258428F7A77C4",
            "exponent": 0,
            "aliases": [
              "rai-wei"
            ]
          },
          {
            "denom": "rai",
            "exponent": 18
          }
        ],
        "base": "ibc/4AA19294AE89888CE7DB64CA76781EE2FE9A0B703B8A5F156AD258428F7A77C4",
        "name": "Rai Reflex Index",
        "display": "rai",
        "symbol": "RAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "rai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        },
        "coingecko_id": "rai"
      },
      {
        "description": "Shiba Inu on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D66D0A82177FF29CBB8A83705C26C28D45A14678579E350B10493D359ECFD851",
            "exponent": 0,
            "aliases": [
              "shib-wei"
            ]
          },
          {
            "denom": "shib",
            "exponent": 18
          }
        ],
        "base": "ibc/D66D0A82177FF29CBB8A83705C26C28D45A14678579E350B10493D359ECFD851",
        "name": "Shiba Inu",
        "display": "shib",
        "symbol": "SHIB",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "shib-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        },
        "coingecko_id": "shiba-inu"
      },
      {
        "description": "Lido Staked Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C740EF04C154165820688D9438AD90EA1E6B59BFF3715197AA570E928A44A937",
            "exponent": 0,
            "aliases": [
              "steth-wei"
            ]
          },
          {
            "denom": "steth",
            "exponent": 18
          }
        ],
        "base": "ibc/C740EF04C154165820688D9438AD90EA1E6B59BFF3715197AA570E928A44A937",
        "name": "Lido Staked Ether",
        "display": "steth",
        "symbol": "stETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "steth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        },
        "coingecko_id": "staked-ether"
      },
      {
        "description": "Uniswap on Axelar",
        "denom_units": [
          {
            "denom": "ibc/0313AD311FA169EC5A130DB2EF0840CBA4B300ADB6B85A79FBA952FBD3E7B107",
            "exponent": 0,
            "aliases": [
              "uni-wei"
            ]
          },
          {
            "denom": "uni",
            "exponent": 18
          }
        ],
        "base": "ibc/0313AD311FA169EC5A130DB2EF0840CBA4B300ADB6B85A79FBA952FBD3E7B107",
        "name": "Uniswap",
        "display": "uni",
        "symbol": "UNI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uni-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        },
        "coingecko_id": "uniswap"
      },
      {
        "description": "Chain on Axelar",
        "denom_units": [
          {
            "denom": "ibc/30B50C044D1074F0DC1916D9DA79B9F26434632609C3ED0158E22A5D40890D81",
            "exponent": 0,
            "aliases": [
              "xcn-wei"
            ]
          },
          {
            "denom": "xcn",
            "exponent": 18
          }
        ],
        "base": "ibc/30B50C044D1074F0DC1916D9DA79B9F26434632609C3ED0158E22A5D40890D81",
        "name": "Chain",
        "display": "xcn",
        "symbol": "XCN",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "xcn-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        },
        "coingecko_id": "chain-2"
      },
      {
        "description": "Wrapped Polkadot on Axelar",
        "denom_units": [
          {
            "denom": "ibc/5D681936B803C055E34687752EE1AA3117EACCA98260F98CC1706E040DCBAC4D",
            "exponent": 0,
            "aliases": [
              "dot-planck"
            ]
          },
          {
            "denom": "dot",
            "exponent": 10
          }
        ],
        "base": "ibc/5D681936B803C055E34687752EE1AA3117EACCA98260F98CC1706E040DCBAC4D",
        "name": "Wrapped Polkadot",
        "display": "dot",
        "symbol": "DOT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "dot-planck",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
        },
        "coingecko_id": "polkadot"
      },
      {
        "description": "Wrapped Moonbeam on Axelar",
        "denom_units": [
          {
            "denom": "ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1",
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
        "base": "ibc/5539E7CB6FF8FDA12AE6BF20E8862513D787BF1712296EB4AA06DD86920FFBC1",
        "name": "Wrapped Moonbeam",
        "display": "wglmr",
        "symbol": "WGLMR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "wglmr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
        },
        "coingecko_id": "wrapped-moonbeam"
      },
      {
        "description": "Wrapped Matic on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14",
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
        "base": "ibc/C3A8C0BA97F3CD808F828E422CCBB39A5206644DF0A65FA79160E4413684EE14",
        "name": "Wrapped Matic",
        "display": "wmatic",
        "symbol": "WMATIC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "wmatic-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-71"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        },
        "coingecko_id": "matic-network"
      },
      {
        "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
        "denom_units": [
          {
            "denom": "ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9",
            "exponent": 0,
            "aliases": [
              "ubcna"
            ]
          },
          {
            "denom": "bcna",
            "exponent": 6
          }
        ],
        "base": "ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9",
        "display": "bcna",
        "name": "BitCanna",
        "symbol": "BCNA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
        },
        "coingecko_id": "bitcanna",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "ubcna",
              "chain_name": "bitcanna"
            },
            "chain": {
              "channel_id": "channel-50"
            }
          }
        ]
      },
      {
        "description": "BitSong Native Token",
        "denom_units": [
          {
            "denom": "ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B",
            "exponent": 0,
            "aliases": [
              "ubtsg"
            ]
          },
          {
            "denom": "btsg",
            "exponent": 6
          }
        ],
        "base": "ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B",
        "name": "BitSong",
        "display": "btsg",
        "symbol": "BTSG",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
        },
        "type_asset": "sdk.coin",
        "coingecko_id": "bitsong",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ubtsg",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Adam Clay a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/FA6CFD7006CF117B671ABAC04A793F76E414A26A5C04EA53AE09640C6E31A647",
            "exponent": 0,
            "aliases": [
              "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09"
            ]
          },
          {
            "denom": "clay",
            "exponent": 6
          }
        ],
        "base": "ibc/FA6CFD7006CF117B671ABAC04A793F76E414A26A5C04EA53AE09640C6E31A647",
        "name": "Adam Clay FanToken",
        "display": "clay",
        "symbol": "CLAY",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Nicola Fasano a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/E43D26D4E10EAC2EA3C84233CE745A7764E84C76D05BC5E2521E864374C72C05",
            "exponent": 0,
            "aliases": [
              "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7"
            ]
          },
          {
            "denom": "fasano",
            "exponent": 6
          }
        ],
        "base": "ibc/E43D26D4E10EAC2EA3C84233CE745A7764E84C76D05BC5E2521E864374C72C05",
        "name": "Nicola Fasano Fantoken",
        "display": "fasano",
        "symbol": "FASANO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Delta 9 a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/E21E8AC479AC7A7ED6075AC67F6BE30A80035476E63A4BE62811AC8F996D9A9C",
            "exponent": 0,
            "aliases": [
              "ft575B10B0CEE2C164D9ED6A96313496F164A9607C"
            ]
          },
          {
            "denom": "d9x",
            "exponent": 6
          }
        ],
        "base": "ibc/E21E8AC479AC7A7ED6075AC67F6BE30A80035476E63A4BE62811AC8F996D9A9C",
        "name": "Delta 9 Fantoken",
        "display": "d9x",
        "symbol": "D9X",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "FONTI a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/40F1DDC85C13E9B0ACE9142A369E13E205C82E3DB13B5926B6647BB3EA740AB8",
            "exponent": 0,
            "aliases": [
              "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305"
            ]
          },
          {
            "denom": "fonti",
            "exponent": 6
          }
        ],
        "base": "ibc/40F1DDC85C13E9B0ACE9142A369E13E205C82E3DB13B5926B6647BB3EA740AB8",
        "name": "FONTI Fantoken",
        "display": "fonti",
        "symbol": "FONTI",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "BlackJack a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/7AA7E31096BE94321E240B1C107DBAB48BADBED2460F5BB0D49884F9881EEAFC",
            "exponent": 0,
            "aliases": [
              "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16"
            ]
          },
          {
            "denom": "bjks",
            "exponent": 6
          }
        ],
        "base": "ibc/7AA7E31096BE94321E240B1C107DBAB48BADBED2460F5BB0D49884F9881EEAFC",
        "name": "BlackJack Fantoken",
        "display": "bjks",
        "symbol": "BJKS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Rawanne a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/B7DF1BF0322E000392E8EE2EA4AA66E77D73A275C08370086F01D659AD9CC669",
            "exponent": 0,
            "aliases": [
              "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A"
            ]
          },
          {
            "denom": "rwne",
            "exponent": 6
          }
        ],
        "base": "ibc/B7DF1BF0322E000392E8EE2EA4AA66E77D73A275C08370086F01D659AD9CC669",
        "name": "Rawanne Fantoken",
        "display": "rwne",
        "symbol": "RWNE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Enmoda a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/ECCD9807D20166417567FD0ABE9ADDB20BD55EA8C27A994DF343D437B430E8B0",
            "exponent": 0,
            "aliases": [
              "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626"
            ]
          },
          {
            "denom": "enmoda",
            "exponent": 6
          }
        ],
        "base": "ibc/ECCD9807D20166417567FD0ABE9ADDB20BD55EA8C27A994DF343D437B430E8B0",
        "name": "Enmoda Fantoken",
        "display": "enmoda",
        "symbol": "ENMODA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "404Deep Records a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/4E2AB358B9691EBBFEBFC8AA72A8DE55351A5695C579F18AB2438B2B99E4DFB1",
            "exponent": 0,
            "aliases": [
              "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A"
            ]
          },
          {
            "denom": "404dr",
            "exponent": 6
          }
        ],
        "base": "ibc/4E2AB358B9691EBBFEBFC8AA72A8DE55351A5695C579F18AB2438B2B99E4DFB1",
        "name": "404Deep Records Fantoken",
        "display": "404dr",
        "symbol": "404DR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "N43 a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/0678E1B0A5535B49F8DEDFE85E77C0FB733A04F81B53B580A176D57699889C0A",
            "exponent": 0,
            "aliases": [
              "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D"
            ]
          },
          {
            "denom": "n43",
            "exponent": 6
          }
        ],
        "base": "ibc/0678E1B0A5535B49F8DEDFE85E77C0FB733A04F81B53B580A176D57699889C0A",
        "name": "N43 Fantoken",
        "display": "n43",
        "symbol": "N43",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Puro Lobo a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/F413DA1C7902686B64FFB0094A6473FABDE421DC8A4B72082535599143E66AAE",
            "exponent": 0,
            "aliases": [
              "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB"
            ]
          },
          {
            "denom": "lobo",
            "exponent": 6
          }
        ],
        "base": "ibc/F413DA1C7902686B64FFB0094A6473FABDE421DC8A4B72082535599143E66AAE",
        "name": "Puro Lobo Fantoken",
        "display": "lobo",
        "symbol": "LOBO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Vibranium a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/1507C239F92834EEB80B8BD2508E98D5FA24F4272AD6A6E214255C7E445C1025",
            "exponent": 0,
            "aliases": [
              "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B"
            ]
          },
          {
            "denom": "vibra",
            "exponent": 6
          }
        ],
        "base": "ibc/1507C239F92834EEB80B8BD2508E98D5FA24F4272AD6A6E214255C7E445C1025",
        "name": "Vibranium Fantoken",
        "display": "vibra",
        "symbol": "VIBRA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Karina a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/5DE20120602E89CB89E4948521092DAB1D8B75E70DE77DEC35B3D527CAF445E6",
            "exponent": 0,
            "aliases": [
              "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE"
            ]
          },
          {
            "denom": "karina",
            "exponent": 6
          }
        ],
        "base": "ibc/5DE20120602E89CB89E4948521092DAB1D8B75E70DE77DEC35B3D527CAF445E6",
        "name": "Karina Fantoken",
        "display": "karina",
        "symbol": "KARINA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Luca Testa a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/915E8D0A4C82F7D910810C3956530FDA3BBB2161D406390146D0F357A3922B97",
            "exponent": 0,
            "aliases": [
              "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12"
            ]
          },
          {
            "denom": "testa",
            "exponent": 6
          }
        ],
        "base": "ibc/915E8D0A4C82F7D910810C3956530FDA3BBB2161D406390146D0F357A3922B97",
        "name": "Luca Testa Fantoken",
        "display": "testa",
        "symbol": "TESTA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "Carolina Marquez a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/75A06513054A2C0CB4555918E789357BD36634FF6EE4678FD0B803557DBC666A",
            "exponent": 0,
            "aliases": [
              "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3"
            ]
          },
          {
            "denom": "cmqz",
            "exponent": 6
          }
        ],
        "base": "ibc/75A06513054A2C0CB4555918E789357BD36634FF6EE4678FD0B803557DBC666A",
        "name": "Carolina Marquez Fantoken",
        "display": "cmqz",
        "symbol": "CMQZ",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "The native token of Chihuahua Chain",
        "denom_units": [
          {
            "denom": "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
            "exponent": 0,
            "aliases": [
              "uhuahua"
            ]
          },
          {
            "denom": "huahua",
            "exponent": 6
          }
        ],
        "base": "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
        "name": "Chihuahua",
        "display": "huahua",
        "symbol": "HUAHUA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png"
        },
        "coingecko_id": "chihuahua-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uhuahua",
              "chain_name": "chihuahua"
            },
            "chain": {
              "channel_id": "channel-28"
            }
          }
        ]
      },
      {
        "description": "Native Token of Comdex Protocol",
        "denom_units": [
          {
            "denom": "ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0",
            "exponent": 0,
            "aliases": [
              "ucmdx"
            ]
          },
          {
            "denom": "cmdx",
            "exponent": 6
          }
        ],
        "base": "ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0",
        "name": "Comdex",
        "display": "cmdx",
        "symbol": "CMDX",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png"
        },
        "coingecko_id": "comdex",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-18",
              "base_denom": "ucmdx",
              "chain_name": "comdex"
            },
            "chain": {
              "channel_id": "channel-36"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-207",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "Native token of Dig Chain",
        "denom_units": [
          {
            "denom": "ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A",
            "exponent": 0,
            "aliases": [
              "udig"
            ]
          },
          {
            "denom": "dig",
            "exponent": 6
          }
        ],
        "base": "ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A",
        "name": "Dig Chain",
        "display": "dig",
        "symbol": "DIG",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
        },
        "coingecko_id": "dig-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "udig",
              "chain_name": "dig"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
        "denom_units": [
          {
            "denom": "ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196",
            "exponent": 0,
            "aliases": [
              "ungm"
            ]
          },
          {
            "denom": "ngm",
            "exponent": 6
          }
        ],
        "base": "ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196",
        "name": "e-Money",
        "display": "ngm",
        "symbol": "NGM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png"
        },
        "coingecko_id": "e-money",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "ungm",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C",
            "exponent": 0,
            "aliases": [
              "eeur"
            ]
          },
          {
            "denom": "eur",
            "exponent": 6
          }
        ],
        "base": "ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C",
        "name": "e-Money EUR",
        "display": "eur",
        "symbol": "EEUR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png"
        },
        "coingecko_id": "e-money-eur",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "eeur",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90",
            "exponent": 0,
            "aliases": [
              "echf"
            ]
          },
          {
            "denom": "ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90",
            "exponent": 6,
            "aliases": [
              "echf"
            ]
          }
        ],
        "base": "ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90",
        "name": "e-Money CHF",
        "display": "chf",
        "symbol": "ECHF",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "echf",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5",
            "exponent": 0,
            "aliases": [
              "enok"
            ]
          },
          {
            "denom": "ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5",
            "exponent": 6,
            "aliases": [
              "enok"
            ]
          }
        ],
        "base": "ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5",
        "name": "e-Money NOK",
        "display": "nok",
        "symbol": "ENOK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "enok",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D",
            "exponent": 0,
            "aliases": [
              "edkk"
            ]
          },
          {
            "denom": "ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D",
            "exponent": 6,
            "aliases": [
              "edkk"
            ]
          }
        ],
        "base": "ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D",
        "name": "e-Money DKK",
        "display": "dkk",
        "symbol": "EDKK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "edkk",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08",
            "exponent": 0,
            "aliases": [
              "esek"
            ]
          },
          {
            "denom": "ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08",
            "exponent": 6,
            "aliases": [
              "esek"
            ]
          }
        ],
        "base": "ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08",
        "name": "e-Money SEK",
        "display": "sek",
        "symbol": "ESEK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "esek",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-42",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-42",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-33"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/BA3EB643F46DD1CB95246A5419CCB3A4BA9BB1A85C589C49F27B4A6BB11AACD1",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/BA3EB643F46DD1CB95246A5419CCB3A4BA9BB1A85C589C49F27B4A6BB11AACD1",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-37",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-33"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-48"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-14",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ustars",
              "chain_name": "stargaze"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ]
      },
      {
        "description": "The native staking token of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
            "exponent": 0,
            "aliases": [
              "uluna"
            ]
          },
          {
            "denom": "mluna",
            "exponent": 3,
            "aliases": [
              "milliluna"
            ]
          },
          {
            "denom": "luna",
            "exponent": 6,
            "aliases": [
              "lunc"
            ]
          }
        ],
        "base": "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
        "name": "Luna Classic",
        "display": "luna",
        "symbol": "LUNC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png"
        },
        "coingecko_id": "terra-luna",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uluna",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The USD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27",
            "exponent": 0,
            "aliases": [
              "uusd"
            ]
          },
          {
            "denom": "musd",
            "exponent": 3,
            "aliases": [
              "milliusd"
            ]
          },
          {
            "denom": "ust",
            "exponent": 6,
            "aliases": [
              "ustc"
            ]
          }
        ],
        "base": "ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27",
        "name": "TerraClassicUSD",
        "display": "ust",
        "symbol": "USTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png"
        },
        "coingecko_id": "terrausd",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uusd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The KRW stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF",
            "exponent": 0,
            "aliases": [
              "ukrw"
            ]
          },
          {
            "denom": "mkrw",
            "exponent": 3,
            "aliases": [
              "millikrw"
            ]
          },
          {
            "denom": "krt",
            "exponent": 6,
            "aliases": [
              "krtc"
            ]
          }
        ],
        "base": "ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF",
        "name": "TerraClassicKRW",
        "display": "krt",
        "symbol": "KRTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png"
        },
        "coingecko_id": "terrakrw",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ukrw",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The AUD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66",
            "exponent": 0,
            "aliases": [
              "uaud"
            ]
          },
          {
            "denom": "maud",
            "exponent": 3,
            "aliases": [
              "milliaud"
            ]
          },
          {
            "denom": "aut",
            "exponent": 6,
            "aliases": [
              "autc"
            ]
          }
        ],
        "base": "ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66",
        "display": "aut",
        "name": "TerraClassicAUD",
        "symbol": "AUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uaud",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The CAD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375",
            "exponent": 0,
            "aliases": [
              "ucad"
            ]
          },
          {
            "denom": "mcad",
            "exponent": 3,
            "aliases": [
              "millicad"
            ]
          },
          {
            "denom": "cat",
            "exponent": 6,
            "aliases": [
              "catc"
            ]
          }
        ],
        "base": "ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375",
        "display": "cat",
        "name": "TerraClassicCAD",
        "symbol": "CATC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ucad",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The CHF stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F",
            "exponent": 0,
            "aliases": [
              "uchf"
            ]
          },
          {
            "denom": "mchf",
            "exponent": 3,
            "aliases": [
              "millichf"
            ]
          },
          {
            "denom": "cht",
            "exponent": 6,
            "aliases": [
              "chtc"
            ]
          }
        ],
        "base": "ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F",
        "display": "cht",
        "name": "TerraClassicCHF",
        "symbol": "CHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uchf",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The CNY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8",
            "exponent": 0,
            "aliases": [
              "ucny"
            ]
          },
          {
            "denom": "mcny",
            "exponent": 3,
            "aliases": [
              "millicny"
            ]
          },
          {
            "denom": "cnt",
            "exponent": 6,
            "aliases": [
              "cntc"
            ]
          }
        ],
        "base": "ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8",
        "display": "cnt",
        "name": "TerraClassicCNY",
        "symbol": "CNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ucny",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The DKK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C",
            "exponent": 0,
            "aliases": [
              "udkk"
            ]
          },
          {
            "denom": "mdkk",
            "exponent": 3,
            "aliases": [
              "millidkk"
            ]
          },
          {
            "denom": "dkt",
            "exponent": 6,
            "aliases": [
              "dktc"
            ]
          }
        ],
        "base": "ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C",
        "display": "dkt",
        "name": "TerraClassicDKK",
        "symbol": "DKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "udkk",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The EUR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE",
            "exponent": 0,
            "aliases": [
              "ueur"
            ]
          },
          {
            "denom": "meur",
            "exponent": 3,
            "aliases": [
              "millieur"
            ]
          },
          {
            "denom": "eut",
            "exponent": 6,
            "aliases": [
              "eutc"
            ]
          }
        ],
        "base": "ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE",
        "display": "eut",
        "name": "TerraClassicEUR",
        "symbol": "EUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ueur",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The GBP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99",
            "exponent": 0,
            "aliases": [
              "ugbp"
            ]
          },
          {
            "denom": "mgbp",
            "exponent": 3,
            "aliases": [
              "milligbp"
            ]
          },
          {
            "denom": "gbt",
            "exponent": 6,
            "aliases": [
              "gbtc"
            ]
          }
        ],
        "base": "ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99",
        "display": "gbt",
        "name": "TerraClassicGBP",
        "symbol": "GBTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ugbp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The HKD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258",
            "exponent": 0,
            "aliases": [
              "uhkd"
            ]
          },
          {
            "denom": "mhkd",
            "exponent": 3,
            "aliases": [
              "millihkd"
            ]
          },
          {
            "denom": "hkt",
            "exponent": 6,
            "aliases": [
              "hktc"
            ]
          }
        ],
        "base": "ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258",
        "display": "hkt",
        "name": "TerraClassicHKD",
        "symbol": "HKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uhkd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The IDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051",
            "exponent": 0,
            "aliases": [
              "uidr"
            ]
          },
          {
            "denom": "midr",
            "exponent": 3,
            "aliases": [
              "milliidr"
            ]
          },
          {
            "denom": "idt",
            "exponent": 6,
            "aliases": [
              "idtc"
            ]
          }
        ],
        "base": "ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051",
        "display": "idt",
        "name": "TerraClassicIDR",
        "symbol": "IDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uidr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The INR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B",
            "exponent": 0,
            "aliases": [
              "uinr"
            ]
          },
          {
            "denom": "minr",
            "exponent": 3,
            "aliases": [
              "milliinr"
            ]
          },
          {
            "denom": "int",
            "exponent": 6,
            "aliases": [
              "intc"
            ]
          }
        ],
        "base": "ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B",
        "display": "int",
        "name": "TerraClassicINR",
        "symbol": "INTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uinr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The JPY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F",
            "exponent": 0,
            "aliases": [
              "ujpy"
            ]
          },
          {
            "denom": "mjpy",
            "exponent": 3,
            "aliases": [
              "millijpy"
            ]
          },
          {
            "denom": "jpt",
            "exponent": 6,
            "aliases": [
              "jptc"
            ]
          }
        ],
        "base": "ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F",
        "display": "jpt",
        "name": "TerraClassicJPY",
        "symbol": "JPTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ujpy",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The MNT stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93",
            "exponent": 0,
            "aliases": [
              "umnt"
            ]
          },
          {
            "denom": "mmnt",
            "exponent": 3,
            "aliases": [
              "millimnt"
            ]
          },
          {
            "denom": "mnt",
            "exponent": 6,
            "aliases": [
              "mntc"
            ]
          }
        ],
        "base": "ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93",
        "display": "mnt",
        "name": "TerraClassicMNT",
        "symbol": "MNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "umnt",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The MYR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2",
            "exponent": 0,
            "aliases": [
              "umyr"
            ]
          },
          {
            "denom": "mmyr",
            "exponent": 3,
            "aliases": [
              "millimyr"
            ]
          },
          {
            "denom": "myt",
            "exponent": 6,
            "aliases": [
              "mytc"
            ]
          }
        ],
        "base": "ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2",
        "display": "myt",
        "name": "TerraClassicMYR",
        "symbol": "MYTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "umyr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The NOK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634",
            "exponent": 0,
            "aliases": [
              "unok"
            ]
          },
          {
            "denom": "mnok",
            "exponent": 3,
            "aliases": [
              "millinok"
            ]
          },
          {
            "denom": "not",
            "exponent": 6,
            "aliases": [
              "notc"
            ]
          }
        ],
        "base": "ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634",
        "display": "not",
        "name": "TerraClassicNOK",
        "symbol": "NOTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "unok",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The PHP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E",
            "exponent": 0,
            "aliases": [
              "uphp"
            ]
          },
          {
            "denom": "mphp",
            "exponent": 3,
            "aliases": [
              "milliphp"
            ]
          },
          {
            "denom": "pht",
            "exponent": 6,
            "aliases": [
              "phtc"
            ]
          }
        ],
        "base": "ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E",
        "display": "pht",
        "name": "TerraClassicPHP",
        "symbol": "PHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uphp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The SDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92",
            "exponent": 0,
            "aliases": [
              "usdr"
            ]
          },
          {
            "denom": "msdr",
            "exponent": 3,
            "aliases": [
              "millisdr"
            ]
          },
          {
            "denom": "sdt",
            "exponent": 6,
            "aliases": [
              "sdtc"
            ]
          }
        ],
        "base": "ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92",
        "display": "sdt",
        "name": "TerraClassicSDR",
        "symbol": "SDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "usdr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The SEK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804",
            "exponent": 0,
            "aliases": [
              "usek"
            ]
          },
          {
            "denom": "msek",
            "exponent": 3,
            "aliases": [
              "millisek"
            ]
          },
          {
            "denom": "set",
            "exponent": 6,
            "aliases": [
              "setc"
            ]
          }
        ],
        "base": "ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804",
        "display": "set",
        "name": "TerraClassicSEK",
        "symbol": "SETC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "usek",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The SGD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16",
            "exponent": 0,
            "aliases": [
              "usgd"
            ]
          },
          {
            "denom": "msgd",
            "exponent": 3,
            "aliases": [
              "millisgd"
            ]
          },
          {
            "denom": "sgt",
            "exponent": 6,
            "aliases": [
              "sgtc"
            ]
          }
        ],
        "base": "ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16",
        "display": "sgt",
        "name": "TerraClassicSGD",
        "symbol": "SGTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "usgd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The THB stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36",
            "exponent": 0,
            "aliases": [
              "uthb"
            ]
          },
          {
            "denom": "mthb",
            "exponent": 3,
            "aliases": [
              "millithb"
            ]
          },
          {
            "denom": "tht",
            "exponent": 6,
            "aliases": [
              "thtc"
            ]
          }
        ],
        "base": "ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36",
        "display": "tht",
        "name": "TerraClassicTHB",
        "symbol": "THTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "uthb",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      },
      {
        "description": "The TWD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7",
            "exponent": 0,
            "aliases": [
              "utwd"
            ]
          },
          {
            "denom": "mtwd",
            "exponent": 3,
            "aliases": [
              "millitwd"
            ]
          },
          {
            "denom": "twt",
            "exponent": 6,
            "aliases": [
              "twtc"
            ]
          }
        ],
        "base": "ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7",
        "display": "twt",
        "name": "TerraClassicTWD",
        "symbol": "TWTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "utwd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "kava",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-143",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-143",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "kichain",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-77",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-77",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "konstellation",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-171",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-171",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "kujira",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-259",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-259",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "lambda",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-378",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-378",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "likecoin",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/BA313C4A19DFBF943586C0387E6B11286F9E416B4DD27574E6909CABE0E342FA",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/BA313C4A19DFBF943586C0387E6B11286F9E416B4DD27574E6909CABE0E342FA",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-217",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-53",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-53",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "lumenx",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-286",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-286",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "lumnetwork",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-115",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6CDA7F7E4DDB86FD275A986E78F13DF2FC500E3FEC2149E2215061FA51BB8C5D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-115",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "meme",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-238",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-238",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "microtick",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/4A3AAD07BC4EBEBC10FC2560EAA3B7A1D3B541B5264ED8E5E13E6B74AC76127B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/4A3AAD07BC4EBEBC10FC2560EAA3B7A1D3B541B5264ED8E5E13E6B74AC76127B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-39",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/65F2AFA2F7AC0FC1ACA0EC1710A5AB381BF87B25CB74E903C5847ED86CAE213A",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/65F2AFA2F7AC0FC1ACA0EC1710A5AB381BF87B25CB74E903C5847ED86CAE213A",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-39",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "okexchain",
    "assets": [
      {
        "description": "The native token of Asset Mantle",
        "denom_units": [
          {
            "denom": "ibc/7E3492CD5C2BC8F4C1E936E8AFB8BDD1B45526F8D716BB00B3A4465089E616F5",
            "exponent": 0,
            "aliases": [
              "umntl"
            ]
          },
          {
            "denom": "mntl",
            "exponent": 6
          }
        ],
        "base": "ibc/7E3492CD5C2BC8F4C1E936E8AFB8BDD1B45526F8D716BB00B3A4465089E616F5",
        "name": "AssetMantle",
        "display": "mntl",
        "symbol": "MNTL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png"
        },
        "coingecko_id": "assetmantle",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-13",
              "base_denom": "umntl",
              "chain_name": "assetmantle"
            },
            "chain": {
              "channel_id": "channel-23"
            }
          }
        ]
      },
      {
        "description": "The native token of Chihuahua Chain",
        "denom_units": [
          {
            "denom": "ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5",
            "exponent": 0,
            "aliases": [
              "uhuahua"
            ]
          },
          {
            "denom": "huahua",
            "exponent": 6
          }
        ],
        "base": "ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5",
        "name": "Chihuahua",
        "display": "huahua",
        "symbol": "HUAHUA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png"
        },
        "coingecko_id": "chihuahua-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "uhuahua",
              "chain_name": "chihuahua"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Vidulum",
        "denom_units": [
          {
            "denom": "ibc/4E6D9522071342A241945D26EC2964D91CF7583ADE0522CA14D507F5E2A6A4FD",
            "exponent": 0,
            "aliases": [
              "uvdl"
            ]
          },
          {
            "denom": "vdl",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/4E6D9522071342A241945D26EC2964D91CF7583ADE0522CA14D507F5E2A6A4FD",
        "name": "Vidulum",
        "display": "vdl",
        "symbol": "VDL",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png"
        },
        "coingecko_id": "vidulum",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uvdl",
              "chain_name": "vidulum"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "oraichain",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/9C4DCD21B48231D0BC2AC3D1B74A864746B37E4292694C93C617324250D002FC",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-216",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/63B6BB8FB34ABD2470085A982B42BA30F24484287E48426805C0174DE213A22F",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/63B6BB8FB34ABD2470085A982B42BA30F24484287E48426805C0174DE213A22F",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-216",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "osmosis",
    "assets": [
      {
        "description": "BLD is the token used to secure the Agoric chain through staking and to backstop Inter Protocol.",
        "denom_units": [
          {
            "denom": "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
            "exponent": 0,
            "aliases": [
              "ubld"
            ]
          },
          {
            "denom": "bld",
            "exponent": 6
          }
        ],
        "base": "ibc/2DA9C149E9AD2BD27FEFA635458FB37093C256C1A940392634A16BEA45262604",
        "name": "Agoric",
        "display": "bld",
        "symbol": "BLD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png"
        },
        "coingecko_id": "agoric",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ubld",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-320"
            }
          }
        ]
      },
      {
        "description": "IST is the stable token used by the Agoric chain for execution fees and commerce.",
        "denom_units": [
          {
            "denom": "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
            "exponent": 0,
            "aliases": [
              "uist"
            ]
          },
          {
            "denom": "ist",
            "exponent": 6
          }
        ],
        "base": "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
        "name": "Inter Stable Token",
        "display": "ist",
        "symbol": "IST",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uist",
              "chain_name": "agoric"
            },
            "chain": {
              "channel_id": "channel-320"
            }
          }
        ]
      },
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The native token of Asset Mantle",
        "denom_units": [
          {
            "denom": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
            "exponent": 0,
            "aliases": [
              "umntl"
            ]
          },
          {
            "denom": "mntl",
            "exponent": 6
          }
        ],
        "base": "ibc/CBA34207E969623D95D057D9B11B0C8B32B89A71F170577D982FDDE623813FFC",
        "name": "AssetMantle",
        "display": "mntl",
        "symbol": "MNTL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png"
        },
        "coingecko_id": "assetmantle",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "umntl",
              "chain_name": "assetmantle"
            },
            "chain": {
              "channel_id": "channel-232"
            }
          }
        ]
      },
      {
        "description": "The native token of Axelar",
        "denom_units": [
          {
            "denom": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
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
        "base": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
        "name": "Axelar",
        "display": "axl",
        "symbol": "AXL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        },
        "coingecko_id": "axelar",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uaxl",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ]
      },
      {
        "description": "Circle's stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "usdc",
            "exponent": 6
          }
        ],
        "base": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
        "name": "USD Coin",
        "display": "usdc",
        "symbol": "USDC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uusdc",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "frax",
            "exponent": 18
          }
        ],
        "base": "ibc/0E43EDE2E2A3AFA36D0CD38BDDC0B49FECA64FA426A82E102F304E430ECF46EE",
        "name": "Frax",
        "display": "frax",
        "symbol": "FRAX",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "frax-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "dai",
            "exponent": 18
          }
        ],
        "base": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
        "name": "Dai Stablecoin",
        "display": "dai",
        "symbol": "DAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "dai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "usdt",
            "exponent": 6
          }
        ],
        "base": "ibc/8242AD24008032E457D2E12D46588FD39FB54FB29680C6C7663D296B383C37C4",
        "name": "Tether USD",
        "display": "usdt",
        "symbol": "USDT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uusdt",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "weth",
            "exponent": 18
          }
        ],
        "base": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
        "name": "Wrapped Ether",
        "display": "weth",
        "symbol": "WETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "weth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "wbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
        "name": "Wrapped Bitcoin",
        "display": "wbtc",
        "symbol": "WBTC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "wbtc-satoshi",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Aave on Axelar",
        "denom_units": [
          {
            "denom": "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
            "exponent": 0,
            "aliases": [
              "aave-wei"
            ]
          },
          {
            "denom": "aave",
            "exponent": 18
          }
        ],
        "base": "ibc/384E5DD50BDE042E1AAF51F312B55F08F95BC985C503880189258B4D9374CBBE",
        "name": "Aave",
        "display": "aave",
        "symbol": "AAVE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "aave-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        },
        "coingecko_id": "aave"
      },
      {
        "description": "ApeCoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
            "exponent": 0,
            "aliases": [
              "ape-wei"
            ]
          },
          {
            "denom": "ape",
            "exponent": 18
          }
        ],
        "base": "ibc/F83CC6471DA4D4B508F437244F10B9E4C68975344E551A2DEB6B8617AB08F0D4",
        "name": "ApeCoin",
        "display": "ape",
        "symbol": "APE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "ape-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        },
        "coingecko_id": "apecoin"
      },
      {
        "description": "Axie Infinity Shard on Axelar",
        "denom_units": [
          {
            "denom": "ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24",
            "exponent": 0,
            "aliases": [
              "axs-wei"
            ]
          },
          {
            "denom": "axs",
            "exponent": 18
          }
        ],
        "base": "ibc/6C0CB8653012DC2BC1820FD0B6B3AFF8A07D18630BDAEE066FEFB2D92F477C24",
        "name": "Axie Infinity Shard",
        "display": "axs",
        "symbol": "AXS",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "axs-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        },
        "coingecko_id": "axie-infinity"
      },
      {
        "description": "Chainlink on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
            "exponent": 0,
            "aliases": [
              "link-wei"
            ]
          },
          {
            "denom": "link",
            "exponent": 18
          }
        ],
        "base": "ibc/D3327A763C23F01EC43D1F0DB3CEFEC390C362569B6FD191F40A5192F8960049",
        "name": "Chainlink",
        "display": "link",
        "symbol": "LINK",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "link-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        },
        "coingecko_id": "chainlink"
      },
      {
        "description": "Maker on Axelar",
        "denom_units": [
          {
            "denom": "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
            "exponent": 0,
            "aliases": [
              "mkr-wei"
            ]
          },
          {
            "denom": "mkr",
            "exponent": 18
          }
        ],
        "base": "ibc/D27DDDF34BB47E5D5A570742CC667DE53277867116CCCA341F27785E899A70F3",
        "name": "Maker",
        "display": "mkr",
        "symbol": "MKR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "mkr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        },
        "coingecko_id": "maker"
      },
      {
        "description": "Rai Reflex Index on Axelar",
        "denom_units": [
          {
            "denom": "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
            "exponent": 0,
            "aliases": [
              "rai-wei"
            ]
          },
          {
            "denom": "rai",
            "exponent": 18
          }
        ],
        "base": "ibc/BD796662F8825327D41C96355DF62045A5BA225BAE31C0A86289B9D88ED3F44E",
        "name": "Rai Reflex Index",
        "display": "rai",
        "symbol": "RAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "rai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        },
        "coingecko_id": "rai"
      },
      {
        "description": "Shiba Inu on Axelar",
        "denom_units": [
          {
            "denom": "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
            "exponent": 0,
            "aliases": [
              "shib-wei"
            ]
          },
          {
            "denom": "shib",
            "exponent": 18
          }
        ],
        "base": "ibc/19305E20681911F14D1FB275E538CDE524C3BF88CF9AE5D5F78F4D4DA05E85B2",
        "name": "Shiba Inu",
        "display": "shib",
        "symbol": "SHIB",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "shib-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        },
        "coingecko_id": "shiba-inu"
      },
      {
        "description": "Lido Staked Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/129F401C84FCD5B0183472ED83745193B0B3A69855635A56B9056EEF8D3C241C",
            "exponent": 0,
            "aliases": [
              "steth-wei"
            ]
          },
          {
            "denom": "steth",
            "exponent": 18
          }
        ],
        "base": "ibc/129F401C84FCD5B0183472ED83745193B0B3A69855635A56B9056EEF8D3C241C",
        "name": "Lido Staked Ether",
        "display": "steth",
        "symbol": "stETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "steth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        },
        "coingecko_id": "staked-ether"
      },
      {
        "description": "Uniswap on Axelar",
        "denom_units": [
          {
            "denom": "ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161",
            "exponent": 0,
            "aliases": [
              "uni-wei"
            ]
          },
          {
            "denom": "uni",
            "exponent": 18
          }
        ],
        "base": "ibc/AE2719773D6FCDD05AC17B1ED63F672F5F9D84144A61965F348C86C2A83AD161",
        "name": "Uniswap",
        "display": "uni",
        "symbol": "UNI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uni-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        },
        "coingecko_id": "uniswap"
      },
      {
        "description": "Chain on Axelar",
        "denom_units": [
          {
            "denom": "ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC",
            "exponent": 0,
            "aliases": [
              "xcn-wei"
            ]
          },
          {
            "denom": "xcn",
            "exponent": 18
          }
        ],
        "base": "ibc/B901BEC1B71D0573E6EE874FEC39E2DF4C2BDB1DB74CB3DA0A9CACC4A435B0EC",
        "name": "Chain",
        "display": "xcn",
        "symbol": "XCN",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "xcn-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        },
        "coingecko_id": "chain-2"
      },
      {
        "description": "Wrapped Polkadot on Axelar",
        "denom_units": [
          {
            "denom": "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
            "exponent": 0,
            "aliases": [
              "dot-planck"
            ]
          },
          {
            "denom": "dot",
            "exponent": 10
          }
        ],
        "base": "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
        "name": "Wrapped Polkadot",
        "display": "dot",
        "symbol": "DOT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "dot-planck",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
        },
        "coingecko_id": "polkadot"
      },
      {
        "description": "Wrapped Moonbeam on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
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
        "base": "ibc/1E26DB0E5122AED464D98462BD384FCCB595732A66B3970AE6CE0B58BAE0FC49",
        "name": "Wrapped Moonbeam",
        "display": "wglmr",
        "symbol": "WGLMR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "wglmr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
        },
        "coingecko_id": "wrapped-moonbeam"
      },
      {
        "description": "Wrapped Matic on Axelar",
        "denom_units": [
          {
            "denom": "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
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
        "base": "ibc/AB589511ED0DD5FA56171A39978AFBF1371DB986EC1C3526CE138A16377E39BB",
        "name": "Wrapped Matic",
        "display": "wmatic",
        "symbol": "WMATIC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "wmatic-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-208"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        },
        "coingecko_id": "matic-network"
      },
      {
        "description": "The native token of BandChain",
        "denom_units": [
          {
            "denom": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
            "exponent": 0,
            "aliases": [
              "uband"
            ]
          },
          {
            "denom": "band",
            "exponent": 6
          }
        ],
        "base": "ibc/F867AE2112EFE646EC71A25CD2DFABB8927126AC1E19F1BBF0FF693A4ECA05DE",
        "display": "band",
        "name": "Band Protocol",
        "symbol": "BAND",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bandchain/images/band.svg"
        },
        "coingecko_id": "band-protocol",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-83",
              "base_denom": "uband",
              "chain_name": "bandchain"
            },
            "chain": {
              "channel_id": "channel-148"
            }
          }
        ]
      },
      {
        "description": "The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.",
        "denom_units": [
          {
            "denom": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
            "exponent": 0,
            "aliases": [
              "ubcna"
            ]
          },
          {
            "denom": "bcna",
            "exponent": 6
          }
        ],
        "base": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
        "display": "bcna",
        "name": "BitCanna",
        "symbol": "BCNA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg"
        },
        "coingecko_id": "bitcanna",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ubcna",
              "chain_name": "bitcanna"
            },
            "chain": {
              "channel_id": "channel-51"
            }
          }
        ]
      },
      {
        "description": "BitSong Native Token",
        "denom_units": [
          {
            "denom": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
            "exponent": 0,
            "aliases": [
              "ubtsg"
            ]
          },
          {
            "denom": "btsg",
            "exponent": 6
          }
        ],
        "base": "ibc/4E5444C35610CC76FC94E7F7886B93121175C28262DDFDDE6F84E82BF2425452",
        "name": "BitSong",
        "display": "btsg",
        "symbol": "BTSG",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg"
        },
        "type_asset": "sdk.coin",
        "coingecko_id": "bitsong",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ubtsg",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Adam Clay a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
            "exponent": 0,
            "aliases": [
              "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09"
            ]
          },
          {
            "denom": "clay",
            "exponent": 6
          }
        ],
        "base": "ibc/7ABF696369EFB3387DF22B6A24204459FE5EFD010220E8E5618DC49DB877047B",
        "name": "Adam Clay FanToken",
        "display": "clay",
        "symbol": "CLAY",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Nicola Fasano a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07",
            "exponent": 0,
            "aliases": [
              "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7"
            ]
          },
          {
            "denom": "fasano",
            "exponent": 6
          }
        ],
        "base": "ibc/423967B46B1A51D78619085105B04FCFA14F7CBC0BE7539A316B2DCDFC7D8C07",
        "name": "Nicola Fasano Fantoken",
        "display": "fasano",
        "symbol": "FASANO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Delta 9 a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A",
            "exponent": 0,
            "aliases": [
              "ft575B10B0CEE2C164D9ED6A96313496F164A9607C"
            ]
          },
          {
            "denom": "d9x",
            "exponent": 6
          }
        ],
        "base": "ibc/1DE9A32D603EE05E9B8619DF24D90FD518C932AE0B5B3209A986B7262DBADE2A",
        "name": "Delta 9 Fantoken",
        "display": "d9x",
        "symbol": "D9X",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft575B10B0CEE2C164D9ED6A96313496F164A9607C.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "FONTI a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1",
            "exponent": 0,
            "aliases": [
              "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305"
            ]
          },
          {
            "denom": "fonti",
            "exponent": 6
          }
        ],
        "base": "ibc/239A507997222805E441956EBE8087D7E2D05D6535C6D4C75EF8DCF83B3DE1A1",
        "name": "FONTI Fantoken",
        "display": "fonti",
        "symbol": "FONTI",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "BlackJack a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853",
            "exponent": 0,
            "aliases": [
              "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16"
            ]
          },
          {
            "denom": "bjks",
            "exponent": 6
          }
        ],
        "base": "ibc/B3FB7128CE957DE1ADB687A919AA0786C77C62FB1280C07CDD78AEA032D56853",
        "name": "BlackJack Fantoken",
        "display": "bjks",
        "symbol": "BJKS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft52EEB0EE509AC546ED92EAC8591F731F213DDD16.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Rawanne a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867",
            "exponent": 0,
            "aliases": [
              "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A"
            ]
          },
          {
            "denom": "rwne",
            "exponent": 6
          }
        ],
        "base": "ibc/56C276FC136E239449DCE664292DBEEF5795C4EF4B5B35DB98BD1C0948274867",
        "name": "Rawanne Fantoken",
        "display": "rwne",
        "symbol": "RWNE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Enmoda a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1",
            "exponent": 0,
            "aliases": [
              "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626"
            ]
          },
          {
            "denom": "enmoda",
            "exponent": 6
          }
        ],
        "base": "ibc/051A38BBEF92B9D8293AFBE1FA293E704359E9CB28297A0FD5DBA3E9CCEE9AB1",
        "name": "Enmoda Fantoken",
        "display": "enmoda",
        "symbol": "ENMODA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft85AE1716C5E39EA6D64BBD7898C3899A7B500626.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "404Deep Records a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
            "exponent": 0,
            "aliases": [
              "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A"
            ]
          },
          {
            "denom": "404dr",
            "exponent": 6
          }
        ],
        "base": "ibc/B797E4F42CD33C50511B341E50C5CC0E8EF0D93B1E1247ABAA071583B8619202",
        "name": "404Deep Records Fantoken",
        "display": "404dr",
        "symbol": "404DR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "N43 a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
            "exponent": 0,
            "aliases": [
              "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D"
            ]
          },
          {
            "denom": "n43",
            "exponent": 6
          }
        ],
        "base": "ibc/E4FFAACCDB7D55CE2D257DF637C00158CB841F11D0013B2D03E31FF7800A2C58",
        "name": "N43 Fantoken",
        "display": "n43",
        "symbol": "N43",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft387C1C279D962ED80C09C1D592A92C4275FD7C5D.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Puro Lobo a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5",
            "exponent": 0,
            "aliases": [
              "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB"
            ]
          },
          {
            "denom": "lobo",
            "exponent": 6
          }
        ],
        "base": "ibc/C9864D1B9623F703C75BBF72B7FF8A7317E1535C96538D21467A4311246DC3B5",
        "name": "Puro Lobo Fantoken",
        "display": "lobo",
        "symbol": "LOBO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Vibranium a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C",
            "exponent": 0,
            "aliases": [
              "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B"
            ]
          },
          {
            "denom": "vibra",
            "exponent": 6
          }
        ],
        "base": "ibc/8A07D4BD40E0F44ECFDF360F7EA7008B288926FB87C54489FE54DB81A5340E0C",
        "name": "Vibranium Fantoken",
        "display": "vibra",
        "symbol": "VIBRA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Karina a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58",
            "exponent": 0,
            "aliases": [
              "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE"
            ]
          },
          {
            "denom": "karina",
            "exponent": 6
          }
        ],
        "base": "ibc/6A6174468758D207DD2D880363BF699C6568A29E87651337AEDAFD9E69EA7E58",
        "name": "Karina Fantoken",
        "display": "karina",
        "symbol": "KARINA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Luca Testa a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF",
            "exponent": 0,
            "aliases": [
              "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12"
            ]
          },
          {
            "denom": "testa",
            "exponent": 6
          }
        ],
        "base": "ibc/022A879A5301CBCACF96216C967805F15C33C615B74DC7236027C1BA1BF664FF",
        "name": "Luca Testa Fantoken",
        "display": "testa",
        "symbol": "TESTA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "Carolina Marquez a BitSong Music FanToken",
        "denom_units": [
          {
            "denom": "ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D",
            "exponent": 0,
            "aliases": [
              "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3"
            ]
          },
          {
            "denom": "cmqz",
            "exponent": 6
          }
        ],
        "base": "ibc/C1CEF00F016FE89EA6E5B07DA895AACD91B0AAD69A991033D846B988AD4FB69D",
        "name": "Carolina Marquez Fantoken",
        "display": "cmqz",
        "symbol": "CMQZ",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
              "chain_name": "bitsong"
            },
            "chain": {
              "channel_id": "channel-73"
            }
          }
        ]
      },
      {
        "description": "The staking token of Bostrom",
        "denom_units": [
          {
            "denom": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
            "exponent": 0,
            "aliases": [
              "boot"
            ]
          }
        ],
        "base": "ibc/FE2CD1E6828EC0FAB8AF39BAC45BC25B965BA67CCBC50C13A14BD610B0D1E2C4",
        "name": "Bostrom",
        "display": "boot",
        "symbol": "BOOT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png"
        },
        "coingecko_id": "bostrom",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "boot",
              "chain_name": "bostrom"
            },
            "chain": {
              "channel_id": "channel-95"
            }
          }
        ]
      },
      {
        "description": "The native token of Carbon",
        "denom_units": [
          {
            "denom": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
            "exponent": 0,
            "aliases": [
              "swth"
            ]
          },
          {
            "denom": "dswth",
            "exponent": 8,
            "aliases": [
              "SWTH"
            ]
          }
        ],
        "base": "ibc/8FEFAE6AECF6E2A255585617F781F35A8D5709A545A804482A261C0C9548A9D3",
        "name": "Carbon",
        "display": "dswth",
        "symbol": "SWTH",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg"
        },
        "coingecko_id": "switcheo",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "swth",
              "chain_name": "carbon"
            },
            "chain": {
              "channel_id": "channel-188"
            }
          }
        ]
      },
      {
        "description": "The native token of Cerberus Chain",
        "denom_units": [
          {
            "denom": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
            "exponent": 0,
            "aliases": [
              "ucrbrus"
            ]
          },
          {
            "denom": "crbrus",
            "exponent": 6
          }
        ],
        "base": "ibc/41999DF04D9441DAC0DF5D8291DF4333FBCBA810FFD63FDCE34FDF41EF37B6F7",
        "name": "Cerberus",
        "display": "crbrus",
        "symbol": "CRBRUS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cerberus/images/crbrus.png"
        },
        "coingecko_id": "cerberus-2",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ucrbrus",
              "chain_name": "cerberus"
            },
            "chain": {
              "channel_id": "channel-212"
            }
          }
        ]
      },
      {
        "description": "Native token for the cheqd network",
        "denom_units": [
          {
            "denom": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
            "exponent": 0,
            "aliases": [
              "ncheq"
            ]
          },
          {
            "denom": "cheq",
            "exponent": 9
          }
        ],
        "base": "ibc/7A08C6F11EF0F59EB841B9F788A87EC9F2361C7D9703157EC13D940DC53031FA",
        "display": "cheq",
        "name": "cheqd",
        "symbol": "CHEQ",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg"
        },
        "coingecko_id": "cheqd-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ncheq",
              "chain_name": "cheqd"
            },
            "chain": {
              "channel_id": "channel-108"
            }
          }
        ]
      },
      {
        "description": "The native token of Chihuahua Chain",
        "denom_units": [
          {
            "denom": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
            "exponent": 0,
            "aliases": [
              "uhuahua"
            ]
          },
          {
            "denom": "huahua",
            "exponent": 6
          }
        ],
        "base": "ibc/B9E0A1A524E98BB407D3CED8720EFEFD186002F90C1B1B7964811DD0CCC12228",
        "name": "Chihuahua",
        "display": "huahua",
        "symbol": "HUAHUA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png"
        },
        "coingecko_id": "chihuahua-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "uhuahua",
              "chain_name": "chihuahua"
            },
            "chain": {
              "channel_id": "channel-113"
            }
          }
        ]
      },
      {
        "description": "Native Token of Comdex Protocol",
        "denom_units": [
          {
            "denom": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
            "exponent": 0,
            "aliases": [
              "ucmdx"
            ]
          },
          {
            "denom": "cmdx",
            "exponent": 6
          }
        ],
        "base": "ibc/EA3E1640F9B1532AB129A571203A0B9F789A7F14BB66E350DCBFA18E1A1931F0",
        "name": "Comdex",
        "display": "cmdx",
        "symbol": "CMDX",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png"
        },
        "coingecko_id": "comdex",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ucmdx",
              "chain_name": "comdex"
            },
            "chain": {
              "channel_id": "channel-87"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-141",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/5A7C219BA5F7582B99629BA3B2A01A61BFDA0F6FD1FE95B5366F7334C4BC0580",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-297"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/61365041DAC5A57B92D60A3EBEB5143E209F86CECDBDD7326A6E7F8351352119",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/61365041DAC5A57B92D60A3EBEB5143E209F86CECDBDD7326A6E7F8351352119",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-9",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-297"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of the Cudos blockchain",
        "denom_units": [
          {
            "denom": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
            "exponent": 0,
            "aliases": [
              "acudos"
            ]
          },
          {
            "denom": "cudos",
            "exponent": 18,
            "aliases": []
          }
        ],
        "base": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
        "name": "Cudos",
        "display": "cudos",
        "symbol": "CUDOS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cudos/images/cudos.svg"
        },
        "coingecko_id": "cudos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "acudos",
              "chain_name": "cudos"
            },
            "chain": {
              "channel_id": "channel-298"
            }
          }
        ]
      },
      {
        "description": "The native token of Decentr",
        "denom_units": [
          {
            "denom": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
            "exponent": 0,
            "aliases": [
              "udec"
            ]
          },
          {
            "denom": "dec",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/9BCB27203424535B6230D594553F1659C77EC173E36D9CF4759E7186EE747E84",
        "name": "Decentr",
        "display": "dec",
        "symbol": "DEC",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg"
        },
        "coingecko_id": "decentr",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "udec",
              "chain_name": "decentr"
            },
            "chain": {
              "channel_id": "channel-181"
            }
          }
        ]
      },
      {
        "description": "The native token of Desmos",
        "denom_units": [
          {
            "denom": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
            "exponent": 0,
            "aliases": [
              "udsm"
            ]
          },
          {
            "denom": "dsm",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/EA4C0A9F72E2CEDF10D0E7A9A6A22954DB3444910DB5BE980DF59B05A46DAD1C",
        "name": "Desmos",
        "display": "dsm",
        "symbol": "DSM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg"
        },
        "coingecko_id": "desmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "udsm",
              "chain_name": "desmos"
            },
            "chain": {
              "channel_id": "channel-135"
            }
          }
        ]
      },
      {
        "description": "Native token of Dig Chain",
        "denom_units": [
          {
            "denom": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
            "exponent": 0,
            "aliases": [
              "udig"
            ]
          },
          {
            "denom": "dig",
            "exponent": 6
          }
        ],
        "base": "ibc/307E5C96C8F60D1CBEE269A9A86C0834E1DB06F2B3788AE4F716EDB97A48B97D",
        "name": "Dig Chain",
        "display": "dig",
        "symbol": "DIG",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png"
        },
        "coingecko_id": "dig-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "udig",
              "chain_name": "dig"
            },
            "chain": {
              "channel_id": "channel-128"
            }
          }
        ]
      },
      {
        "description": "e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.",
        "denom_units": [
          {
            "denom": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
            "exponent": 0,
            "aliases": [
              "ungm"
            ]
          },
          {
            "denom": "ngm",
            "exponent": 6
          }
        ],
        "base": "ibc/1DC495FCEFDA068A3820F903EDBD78B942FBD204D7E93D3BA2B432E9669D1A59",
        "name": "e-Money",
        "display": "ngm",
        "symbol": "NGM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png"
        },
        "coingecko_id": "e-money",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ungm",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
            "exponent": 0,
            "aliases": [
              "eeur"
            ]
          },
          {
            "denom": "eur",
            "exponent": 6
          }
        ],
        "base": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
        "name": "e-Money EUR",
        "display": "eur",
        "symbol": "EEUR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png"
        },
        "coingecko_id": "e-money-eur",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "eeur",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B",
            "exponent": 0,
            "aliases": [
              "echf"
            ]
          },
          {
            "denom": "ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B",
            "exponent": 6,
            "aliases": [
              "echf"
            ]
          }
        ],
        "base": "ibc/9BC783D73D46226BC948F34BC9136C081B89144E646DB5E4C1E8A6A4E777DC1B",
        "name": "e-Money CHF",
        "display": "chf",
        "symbol": "ECHF",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "echf",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC",
            "exponent": 0,
            "aliases": [
              "enok"
            ]
          },
          {
            "denom": "ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC",
            "exponent": 6,
            "aliases": [
              "enok"
            ]
          }
        ],
        "base": "ibc/1733402CBEA1D9D9D13DEA1EF1A76A116B51F5FF252A4DBBE6240DBFF8758EFC",
        "name": "e-Money NOK",
        "display": "nok",
        "symbol": "ENOK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "enok",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2",
            "exponent": 0,
            "aliases": [
              "edkk"
            ]
          },
          {
            "denom": "ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2",
            "exponent": 6,
            "aliases": [
              "edkk"
            ]
          }
        ],
        "base": "ibc/737BA149DE0967CA64C7A6FFCF5026EC7C6210F4BA1A3B1429E4FEBDEB4940F2",
        "name": "e-Money DKK",
        "display": "dkk",
        "symbol": "EDKK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "edkk",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.",
        "denom_units": [
          {
            "denom": "ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A",
            "exponent": 0,
            "aliases": [
              "esek"
            ]
          },
          {
            "denom": "ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A",
            "exponent": 6,
            "aliases": [
              "esek"
            ]
          }
        ],
        "base": "ibc/686B4FE801A81ED9B46CC2E24FF3A7EA2E6A1E1A2A4D73BD7F2BC2866007AB0A",
        "name": "e-Money SEK",
        "display": "sek",
        "symbol": "ESEK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "esek",
              "chain_name": "emoney"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "The native EVM, governance and staking token of the Evmos Hub",
        "denom_units": [
          {
            "denom": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            "exponent": 0,
            "aliases": [
              "aevmos"
            ]
          },
          {
            "denom": "evmos",
            "exponent": 18
          }
        ],
        "base": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
        "name": "Evmos",
        "display": "evmos",
        "symbol": "EVMOS",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png"
        },
        "coingecko_id": "evmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "aevmos",
              "chain_name": "evmos"
            },
            "chain": {
              "channel_id": "channel-204"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Fetch Hub.",
        "denom_units": [
          {
            "denom": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
            "exponent": 0,
            "aliases": [
              "afet"
            ]
          },
          {
            "denom": "fet",
            "exponent": 18
          }
        ],
        "base": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
        "name": "fetch-ai",
        "display": "fet",
        "symbol": "FET",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg"
        },
        "coingecko_id": "fetch-ai",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "afet",
              "chain_name": "fetchhub"
            },
            "chain": {
              "channel_id": "channel-229"
            }
          }
        ]
      },
      {
        "description": "The MOBX coin rewards the use of eco-friendly micromobility transportation.",
        "denom_units": [
          {
            "denom": "ibc/CD20AC50CE57F1CF2EA680D7D47733DA9213641D2D116C5806A880F508609A7A",
            "exponent": 0,
            "aliases": [
              "nanomobx"
            ]
          },
          {
            "denom": "mobx",
            "exponent": 9
          }
        ],
        "base": "ibc/CD20AC50CE57F1CF2EA680D7D47733DA9213641D2D116C5806A880F508609A7A",
        "name": "MOBIX",
        "display": "mobx",
        "symbol": "MOBX",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "nanomobx",
              "chain_name": "fetchhub"
            },
            "chain": {
              "channel_id": "channel-229"
            }
          }
        ]
      },
      {
        "description": "GLX is the staking token of the Galaxy Chain",
        "denom_units": [
          {
            "denom": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
            "exponent": 0,
            "aliases": [
              "uglx"
            ]
          },
          {
            "denom": "glx",
            "exponent": 6
          }
        ],
        "base": "ibc/F49DE040EBA5AB2FAD5F660C2A1DDF98A68470FAE82229818BE775EBF3EE79F2",
        "name": "Galaxy",
        "display": "glx",
        "symbol": "GLX",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/galaxy/images/glx.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uglx",
              "chain_name": "galaxy"
            },
            "chain": {
              "channel_id": "channel-236"
            }
          }
        ]
      },
      {
        "description": "L1 coin is the GenesisL1 blockchain utility, governance and EVM token",
        "denom_units": [
          {
            "denom": "ibc/DABCB5B2232B630C196330AC2A8010C9DBDE8B783FDFF3FB105540939BE27775",
            "exponent": 0,
            "aliases": [
              "el1"
            ]
          },
          {
            "denom": "l1",
            "exponent": 18
          }
        ],
        "base": "ibc/DABCB5B2232B630C196330AC2A8010C9DBDE8B783FDFF3FB105540939BE27775",
        "name": "GenesisL1",
        "display": "l1",
        "symbol": "L1",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "el1",
              "chain_name": "genesisl1"
            },
            "chain": {
              "channel_id": "channel-235"
            }
          }
        ]
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/E97634A40119F1898989C2A23224ED83FDD0A57EA46B3A094E287288D1672B44",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "coingecko_id": "graviton",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "ugraviton",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-144"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/CBC60FC96BD21708D3B60B2E4AD949E0DA07C67EFE6A8D463298806CD507A9CF",
            "exponent": 0,
            "aliases": [
              "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/CBC60FC96BD21708D3B60B2E4AD949E0DA07C67EFE6A8D463298806CD507A9CF",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-144"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The native token of IXO Chain",
        "denom_units": [
          {
            "denom": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
            "exponent": 0,
            "aliases": [
              "uixo"
            ]
          },
          {
            "denom": "ixo",
            "exponent": 6
          }
        ],
        "base": "ibc/F3FF7A84A73B62921538642F9797C423D2B4C4ACB3C7FCFFCE7F12AA69909C4B",
        "name": "IXO",
        "display": "ixo",
        "symbol": "IXO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png"
        },
        "coingecko_id": "ixo",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uixo",
              "chain_name": "impacthub"
            },
            "chain": {
              "channel_id": "channel-38"
            }
          }
        ]
      },
      {
        "description": "The INJ token is the native governance token for the Injective chain.",
        "denom_units": [
          {
            "denom": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
            "exponent": 0,
            "aliases": [
              "inj"
            ]
          },
          {
            "denom": "INJ",
            "exponent": 18
          }
        ],
        "base": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
        "name": "Injective",
        "display": "INJ",
        "symbol": "INJ",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        },
        "coingecko_id": "injective-protocol",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "inj",
              "chain_name": "injective"
            },
            "chain": {
              "channel_id": "channel-122"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/7C4D60AA95E5A7558B0A364860979CA34B7FF8AAF255B87AF9E879374470CEC0",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-42"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/9743372F617A980BCAAA791C386221AFAA42CD4C5E69A29BD47DF0743078909D",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/9743372F617A980BCAAA791C386221AFAA42CD4C5E69A29BD47DF0743078909D",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-42"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of Kava",
        "denom_units": [
          {
            "denom": "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
            "exponent": 0,
            "aliases": [
              "ukava"
            ]
          },
          {
            "denom": "kava",
            "exponent": 6
          }
        ],
        "base": "ibc/57AA1A70A4BC9769C525EBF6386F7A21536E04A79D62E1981EFCEF9428EBB205",
        "name": "Kava",
        "display": "kava",
        "symbol": "KAVA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png"
        },
        "coingecko_id": "kava",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ukava",
              "chain_name": "kava"
            },
            "chain": {
              "channel_id": "channel-143"
            }
          }
        ]
      },
      {
        "description": "Governance token of Kava Lend Protocol",
        "denom_units": [
          {
            "denom": "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
            "exponent": 0,
            "aliases": [
              "hard"
            ]
          },
          {
            "denom": "HARD",
            "exponent": 6
          }
        ],
        "base": "ibc/D6C28E07F7343360AC41E15DDD44D79701DDCA2E0C2C41279739C8D4AE5264BC",
        "name": "Hard",
        "display": "HARD",
        "symbol": "HARD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg"
        },
        "coingecko_id": "kava-lend",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "hard",
              "chain_name": "kava"
            },
            "chain": {
              "channel_id": "channel-143"
            }
          }
        ]
      },
      {
        "description": "Governance token of Kava Swap Protocol",
        "denom_units": [
          {
            "denom": "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
            "exponent": 0,
            "aliases": [
              "swp"
            ]
          },
          {
            "denom": "SWP",
            "exponent": 6
          }
        ],
        "base": "ibc/70CF1A54E23EA4E480DEDA9E12082D3FD5684C3483CBDCE190C5C807227688C5",
        "name": "Swap",
        "display": "SWP",
        "symbol": "SWP",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg"
        },
        "coingecko_id": "kava-swap",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "swp",
              "chain_name": "kava"
            },
            "chain": {
              "channel_id": "channel-143"
            }
          }
        ]
      },
      {
        "description": "The native stablecoin of Kava",
        "denom_units": [
          {
            "denom": "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
            "exponent": 0,
            "aliases": [
              "usdx"
            ]
          },
          {
            "denom": "USDX",
            "exponent": 6
          }
        ],
        "base": "ibc/C78F65E1648A3DFE0BAEB6C4CDA69CC2A75437F1793C0E6386DFDA26393790AE",
        "name": "USDX",
        "display": "USDX",
        "symbol": "USDX",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png"
        },
        "coingecko_id": "usdx",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "usdx",
              "chain_name": "kava"
            },
            "chain": {
              "channel_id": "channel-143"
            }
          }
        ]
      },
      {
        "description": "The native token of Ki Chain",
        "denom_units": [
          {
            "denom": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
            "exponent": 0,
            "aliases": [
              "uxki"
            ]
          },
          {
            "denom": "xki",
            "exponent": 6
          }
        ],
        "base": "ibc/B547DC9B897E7C3AA5B824696110B8E3D2C31E3ED3F02FF363DCBAD82457E07E",
        "name": "Ki",
        "display": "xki",
        "symbol": "XKI",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg"
        },
        "coingecko_id": "ki",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uxki",
              "chain_name": "kichain"
            },
            "chain": {
              "channel_id": "channel-77"
            }
          }
        ]
      },
      {
        "description": "The native token of Konstellation Network",
        "denom_units": [
          {
            "denom": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
            "exponent": 0,
            "aliases": [
              "udarc"
            ]
          },
          {
            "denom": "darc",
            "exponent": 6
          }
        ],
        "base": "ibc/346786EA82F41FE55FAD14BF69AD8BA9B36985406E43F3CB23E6C45A285A9593",
        "name": "DARC",
        "display": "darc",
        "symbol": "DARC",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/konstellation/images/darc.svg"
        },
        "coingecko_id": "darcmatter-coin",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "udarc",
              "chain_name": "konstellation"
            },
            "chain": {
              "channel_id": "channel-171"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Kujira chain.",
        "denom_units": [
          {
            "denom": "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
            "exponent": 0,
            "aliases": [
              "ukuji"
            ]
          },
          {
            "denom": "kuji",
            "exponent": 6
          }
        ],
        "base": "ibc/BB6BCDB515050BAE97516111873CCD7BCF1FD0CCB723CC12F3C4F704D6C646CE",
        "name": "Kuji",
        "display": "kuji",
        "symbol": "KUJI",
        "coingecko_id": "kujira",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "ukuji",
              "chain_name": "kujira"
            },
            "chain": {
              "channel_id": "channel-259"
            }
          }
        ]
      },
      {
        "description": "The native over-collateralized stablecoin from the Kujira chain.",
        "denom_units": [
          {
            "denom": "ibc/AADDBDAF45AA220B627662682B48E14F1F830BD46D5A4C4FFEFCCEB9D6050854",
            "exponent": 0,
            "aliases": [
              "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk"
            ]
          },
          {
            "denom": "usk",
            "exponent": 6
          }
        ],
        "base": "ibc/AADDBDAF45AA220B627662682B48E14F1F830BD46D5A4C4FFEFCCEB9D6050854",
        "name": "USK",
        "display": "USK",
        "symbol": "USK",
        "coingecko_id": "usk",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/usk.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
              "chain_name": "kujira"
            },
            "chain": {
              "channel_id": "channel-259"
            }
          }
        ]
      },
      {
        "description": "The native token of Lambda",
        "denom_units": [
          {
            "denom": "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
            "exponent": 0,
            "aliases": [
              "ulamb"
            ]
          },
          {
            "denom": "lamb",
            "exponent": 18
          }
        ],
        "base": "ibc/80825E8F04B12D914ABEADB1F4D39C04755B12C8402F6876EE3168450C0A90BB",
        "name": "Lambda",
        "display": "lamb",
        "symbol": "LAMB",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lambda/images/lambda.png"
        },
        "coingecko_id": "lambda",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "ulamb",
              "chain_name": "lambda"
            },
            "chain": {
              "channel_id": "channel-378"
            }
          }
        ]
      },
      {
        "description": "LIKE is the native staking and governance token of LikeCoin chain, a Decentralized Publishing Infrastructure to empower content ownership, authenticity, and provenance.",
        "denom_units": [
          {
            "denom": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
            "exponent": 0,
            "aliases": [
              "nanolike"
            ]
          },
          {
            "denom": "like",
            "exponent": 9
          }
        ],
        "base": "ibc/9989AD6CCA39D1131523DB0617B50F6442081162294B4795E26746292467B525",
        "name": "LikeCoin",
        "display": "like",
        "symbol": "LIKE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/likecoin/images/like.svg"
        },
        "coingecko_id": "likecoin",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "nanolike",
              "chain_name": "likecoin"
            },
            "chain": {
              "channel_id": "channel-53"
            }
          }
        ]
      },
      {
        "description": "The native token of Lumen Network",
        "denom_units": [
          {
            "denom": "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
            "exponent": 0,
            "aliases": [
              "ulumen"
            ]
          },
          {
            "denom": "lumen",
            "exponent": 6
          }
        ],
        "base": "ibc/FFA652599C77E853F017193E36B5AB2D4D9AFC4B54721A74904F80C9236BF3B7",
        "name": "LUMEN",
        "display": "lumen",
        "symbol": "LUMEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumenx/images/lumen.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "ulumen",
              "chain_name": "lumenx"
            },
            "chain": {
              "channel_id": "channel-286"
            }
          }
        ]
      },
      {
        "description": "Native token of the Lum Network",
        "denom_units": [
          {
            "denom": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
            "exponent": 0,
            "aliases": [
              "ulum"
            ]
          },
          {
            "denom": "lum",
            "exponent": 6
          }
        ],
        "base": "ibc/8A34AF0C1943FD0DFCDE9ADBF0B2C9959C45E87E6088EA2FC6ADACD59261B8A2",
        "name": "Lum",
        "display": "lum",
        "symbol": "LUM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/lumnetwork/images/lum.svg"
        },
        "coingecko_id": "lum-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "ulum",
              "chain_name": "lumnetwork"
            },
            "chain": {
              "channel_id": "channel-115"
            }
          }
        ]
      },
      {
        "description": "MEME Token (MEME) is the native staking token of the MEME Chain",
        "denom_units": [
          {
            "denom": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
            "exponent": 0,
            "aliases": [
              "umeme"
            ]
          },
          {
            "denom": "meme",
            "exponent": 6
          }
        ],
        "base": "ibc/67C89B8B0A70C08F093C909A4DD996DD10E0494C87E28FD9A551697BF173D4CA",
        "name": "MEME",
        "display": "meme",
        "symbol": "MEME",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "umeme",
              "chain_name": "meme"
            },
            "chain": {
              "channel_id": "channel-238"
            }
          }
        ]
      },
      {
        "description": "TICK coin is the token for the Microtick Price Discovery & Oracle App",
        "denom_units": [
          {
            "denom": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
            "exponent": 0,
            "aliases": [
              "utick"
            ]
          },
          {
            "denom": "tick",
            "exponent": 6
          }
        ],
        "base": "ibc/655BCEF3CDEBE32863FF281DBBE3B06160339E9897DC9C9C9821932A5F8BA6F8",
        "display": "tick",
        "name": "Microtick",
        "symbol": "TICK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "utick",
              "chain_name": "microtick"
            },
            "chain": {
              "channel_id": "channel-39"
            }
          }
        ]
      },
      {
        "description": "The native token of Oraichain",
        "denom_units": [
          {
            "denom": "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
            "exponent": 0,
            "aliases": [
              "orai"
            ]
          },
          {
            "denom": "ORAI",
            "exponent": 6
          }
        ],
        "base": "ibc/161D7D62BAB3B9C39003334F1671208F43C06B643CC9EDBBE82B64793C857F1D",
        "name": "Oraichain",
        "display": "ORAI",
        "symbol": "ORAI",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg"
        },
        "coingecko_id": "oraichain-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-13",
              "base_denom": "orai",
              "chain_name": "oraichain"
            },
            "chain": {
              "channel_id": "channel-216"
            }
          }
        ]
      },
      {
        "description": "Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem",
        "denom_units": [
          {
            "denom": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
            "exponent": 0,
            "aliases": [
              "umed"
            ]
          },
          {
            "denom": "med",
            "exponent": 6
          }
        ],
        "base": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
        "name": "MediBloc",
        "display": "med",
        "symbol": "MED",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png"
        },
        "coingecko_id": "medibloc",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "umed",
              "chain_name": "panacea"
            },
            "chain": {
              "channel_id": "channel-82"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-4"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "Hash is the staking token of the Provenance Blockchain",
        "denom_units": [
          {
            "denom": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
            "exponent": 0,
            "aliases": [
              "nhash"
            ]
          },
          {
            "denom": "hash",
            "exponent": 9,
            "aliases": []
          }
        ],
        "base": "ibc/CE5BFF1D9BADA03BB5CCA5F56939392A761B53A10FBD03B37506669C3218D3B2",
        "name": "Hash",
        "display": "hash",
        "symbol": "HASH",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/hash.svg"
        },
        "coingecko_id": "provenance-blockchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "nhash",
              "chain_name": "provenance"
            },
            "chain": {
              "channel_id": "channel-222"
            }
          }
        ]
      },
      {
        "description": "REBUS, the native coin of the Rebus chain.",
        "denom_units": [
          {
            "denom": "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
            "exponent": 0,
            "aliases": [
              "arebus"
            ]
          },
          {
            "denom": "rebus",
            "exponent": 18
          }
        ],
        "base": "ibc/A1AC7F9EE2F643A68E3A35BCEB22040120BEA4059773BB56985C76BDFEBC71D9",
        "name": "Rebus",
        "display": "rebus",
        "symbol": "REBUS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "arebus",
              "chain_name": "rebus"
            },
            "chain": {
              "channel_id": "channel-355"
            }
          }
        ]
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "description": "Native token of Rizon Chain",
        "denom_units": [
          {
            "denom": "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
            "exponent": 0,
            "aliases": [
              "uatolo"
            ]
          },
          {
            "denom": "atolo",
            "exponent": 6
          }
        ],
        "base": "ibc/2716E3F2E146664BEFA9217F1A03BFCEDBCD5178B3C71CACB1A0D7584451D219",
        "name": "Rizon Chain",
        "display": "atolo",
        "symbol": "ATOLO",
        "coingecko_id": "rizon",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uatolo",
              "chain_name": "rizon"
            },
            "chain": {
              "channel_id": "channel-221"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-88"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/9712DBB13B9631EDFA9BF61B55F1B2D290B2ADB67E3A4EB3A875F3B6081B3B84",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of Shentu",
        "denom_units": [
          {
            "denom": "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
            "exponent": 0,
            "aliases": [
              "uctk"
            ]
          },
          {
            "denom": "ctk",
            "exponent": 6
          }
        ],
        "base": "ibc/7ED954CFFFC06EE8419387F3FC688837FF64EF264DE14219935F724EEEDBF8D3",
        "name": "Shentu",
        "display": "ctk",
        "symbol": "CTK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/shentu/images/ctk.png"
        },
        "coingecko_id": "certik",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "uctk",
              "chain_name": "shentu"
            },
            "chain": {
              "channel_id": "channel-146"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/8318FD63C42203D16DDCAF49FE10E8590669B3219A3E87676AC9DA50722687FB",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-47"
            }
          }
        ]
      },
      {
        "description": "Somm Token (SOMM) is the native staking token of the Sommelier Chain",
        "denom_units": [
          {
            "denom": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
            "exponent": 0,
            "aliases": [
              "usomm"
            ]
          },
          {
            "denom": "msomm",
            "exponent": 3,
            "aliases": [
              "millisomm"
            ]
          },
          {
            "denom": "somm",
            "exponent": 6
          }
        ],
        "base": "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E",
        "name": "Somm",
        "display": "somm",
        "symbol": "SOMM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg"
        },
        "coingecko_id": "sommelier",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "usomm",
              "chain_name": "sommelier"
            },
            "chain": {
              "channel_id": "channel-165"
            }
          }
        ]
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "ustars",
              "chain_name": "stargaze"
            },
            "chain": {
              "channel_id": "channel-75"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/52B1AA623B34EB78FD767CEA69E8D7FA6C9CFE1FBF49C5406268FD325E2CC2AC",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The native token of Stride",
        "denom_units": [
          {
            "denom": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            "exponent": 0,
            "aliases": [
              "ustrd"
            ]
          },
          {
            "denom": "strd",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
        "name": "Stride",
        "display": "strd",
        "symbol": "STRD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        },
        "coingecko_id": "stride",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ustrd",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            "exponent": 0,
            "aliases": [
              "stuatom"
            ]
          },
          {
            "denom": "statom",
            "exponent": 6
          }
        ],
        "base": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
        "name": "stATOM",
        "display": "statom",
        "symbol": "stATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        },
        "coingecko_id": "stride-staked-atom",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "stuatom",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
            "exponent": 0,
            "aliases": [
              "stustars"
            ]
          },
          {
            "denom": "ststars",
            "exponent": 6
          }
        ],
        "base": "ibc/5DD1F95ED336014D00CE2520977EC71566D282F9749170ADC83A392E0EA7426A",
        "name": "stSTARS",
        "display": "ststars",
        "symbol": "stSTARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "stustars",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            "exponent": 0,
            "aliases": [
              "stuosmo"
            ]
          },
          {
            "denom": "stosmo",
            "exponent": 6
          }
        ],
        "base": "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
        "name": "stOSMO",
        "display": "stosmo",
        "symbol": "stOSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "stuosmo",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
            "exponent": 0,
            "aliases": [
              "stujuno"
            ]
          },
          {
            "denom": "stjuno",
            "exponent": 6
          }
        ],
        "base": "ibc/84502A75BCA4A5F68D464C00B3F610CE2585847D59B52E5FFB7C3C9D2DDCD3FE",
        "name": "stJUNO",
        "display": "stjuno",
        "symbol": "stJUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "stujuno",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-326"
            }
          }
        ]
      },
      {
        "description": "The native staking token of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
            "exponent": 0,
            "aliases": [
              "uluna"
            ]
          },
          {
            "denom": "mluna",
            "exponent": 3,
            "aliases": [
              "milliluna"
            ]
          },
          {
            "denom": "luna",
            "exponent": 6,
            "aliases": [
              "lunc"
            ]
          }
        ],
        "base": "ibc/0EF15DF2F02480ADE0BB6E85D9EBB5DAEA2836D3860E9F97F9AADE4F57A31AA0",
        "name": "Luna Classic",
        "display": "luna",
        "symbol": "LUNC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png"
        },
        "coingecko_id": "terra-luna",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uluna",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The USD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
            "exponent": 0,
            "aliases": [
              "uusd"
            ]
          },
          {
            "denom": "musd",
            "exponent": 3,
            "aliases": [
              "milliusd"
            ]
          },
          {
            "denom": "ust",
            "exponent": 6,
            "aliases": [
              "ustc"
            ]
          }
        ],
        "base": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
        "name": "TerraClassicUSD",
        "display": "ust",
        "symbol": "USTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png"
        },
        "coingecko_id": "terrausd",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uusd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The KRW stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
            "exponent": 0,
            "aliases": [
              "ukrw"
            ]
          },
          {
            "denom": "mkrw",
            "exponent": 3,
            "aliases": [
              "millikrw"
            ]
          },
          {
            "denom": "krt",
            "exponent": 6,
            "aliases": [
              "krtc"
            ]
          }
        ],
        "base": "ibc/204A582244FC241613DBB50B04D1D454116C58C4AF7866C186AA0D6EEAD42780",
        "name": "TerraClassicKRW",
        "display": "krt",
        "symbol": "KRTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png"
        },
        "coingecko_id": "terrakrw",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ukrw",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The AUD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/AF5CF6B225B1C03E7F9C2A1AE80CB3BED4E2E7D7F79D5B85679EC2E6925C7289",
            "exponent": 0,
            "aliases": [
              "uaud"
            ]
          },
          {
            "denom": "maud",
            "exponent": 3,
            "aliases": [
              "milliaud"
            ]
          },
          {
            "denom": "aut",
            "exponent": 6,
            "aliases": [
              "autc"
            ]
          }
        ],
        "base": "ibc/AF5CF6B225B1C03E7F9C2A1AE80CB3BED4E2E7D7F79D5B85679EC2E6925C7289",
        "display": "aut",
        "name": "TerraClassicAUD",
        "symbol": "AUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uaud",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The CAD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/4D4C6199EDADACC046B17FCC39C9060EBA1CDF71B4692BE309AE71BA992F792B",
            "exponent": 0,
            "aliases": [
              "ucad"
            ]
          },
          {
            "denom": "mcad",
            "exponent": 3,
            "aliases": [
              "millicad"
            ]
          },
          {
            "denom": "cat",
            "exponent": 6,
            "aliases": [
              "catc"
            ]
          }
        ],
        "base": "ibc/4D4C6199EDADACC046B17FCC39C9060EBA1CDF71B4692BE309AE71BA992F792B",
        "display": "cat",
        "name": "TerraClassicCAD",
        "symbol": "CATC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ucad",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The CHF stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0863B7BFD46942F07AA55B3C7138C50F26D9A8168A47767897B04DBF41B7DF37",
            "exponent": 0,
            "aliases": [
              "uchf"
            ]
          },
          {
            "denom": "mchf",
            "exponent": 3,
            "aliases": [
              "millichf"
            ]
          },
          {
            "denom": "cht",
            "exponent": 6,
            "aliases": [
              "chtc"
            ]
          }
        ],
        "base": "ibc/0863B7BFD46942F07AA55B3C7138C50F26D9A8168A47767897B04DBF41B7DF37",
        "display": "cht",
        "name": "TerraClassicCHF",
        "symbol": "CHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uchf",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The CNY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/C4A85672EAF4C51D865A76483AB8CEFD7BC37C3B6F1A1610721D97A1734F382D",
            "exponent": 0,
            "aliases": [
              "ucny"
            ]
          },
          {
            "denom": "mcny",
            "exponent": 3,
            "aliases": [
              "millicny"
            ]
          },
          {
            "denom": "cnt",
            "exponent": 6,
            "aliases": [
              "cntc"
            ]
          }
        ],
        "base": "ibc/C4A85672EAF4C51D865A76483AB8CEFD7BC37C3B6F1A1610721D97A1734F382D",
        "display": "cnt",
        "name": "TerraClassicCNY",
        "symbol": "CNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ucny",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The DKK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/52013CBC332B65408E0E8D30AA364612FC56820315926B33E2295275BC12A9B7",
            "exponent": 0,
            "aliases": [
              "udkk"
            ]
          },
          {
            "denom": "mdkk",
            "exponent": 3,
            "aliases": [
              "millidkk"
            ]
          },
          {
            "denom": "dkt",
            "exponent": 6,
            "aliases": [
              "dktc"
            ]
          }
        ],
        "base": "ibc/52013CBC332B65408E0E8D30AA364612FC56820315926B33E2295275BC12A9B7",
        "display": "dkt",
        "name": "TerraClassicDKK",
        "symbol": "DKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "udkk",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The EUR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/5035A2B603841B19A40A060B9F6693F09C8F1E038C2A42589F781929A253148E",
            "exponent": 0,
            "aliases": [
              "ueur"
            ]
          },
          {
            "denom": "meur",
            "exponent": 3,
            "aliases": [
              "millieur"
            ]
          },
          {
            "denom": "eut",
            "exponent": 6,
            "aliases": [
              "eutc"
            ]
          }
        ],
        "base": "ibc/5035A2B603841B19A40A060B9F6693F09C8F1E038C2A42589F781929A253148E",
        "display": "eut",
        "name": "TerraClassicEUR",
        "symbol": "EUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ueur",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The GBP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/2A5C04E2BBB24046A98162896D6237CE56ACE8C3CD907F8070E8348A30A6376E",
            "exponent": 0,
            "aliases": [
              "ugbp"
            ]
          },
          {
            "denom": "mgbp",
            "exponent": 3,
            "aliases": [
              "milligbp"
            ]
          },
          {
            "denom": "gbt",
            "exponent": 6,
            "aliases": [
              "gbtc"
            ]
          }
        ],
        "base": "ibc/2A5C04E2BBB24046A98162896D6237CE56ACE8C3CD907F8070E8348A30A6376E",
        "display": "gbt",
        "name": "TerraClassicGBP",
        "symbol": "GBTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ugbp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The HKD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/95608E3B5D8E5C31EE272E09A04AB8E6638A858F564E5B8F5A5C05CEFC33B434",
            "exponent": 0,
            "aliases": [
              "uhkd"
            ]
          },
          {
            "denom": "mhkd",
            "exponent": 3,
            "aliases": [
              "millihkd"
            ]
          },
          {
            "denom": "hkt",
            "exponent": 6,
            "aliases": [
              "hktc"
            ]
          }
        ],
        "base": "ibc/95608E3B5D8E5C31EE272E09A04AB8E6638A858F564E5B8F5A5C05CEFC33B434",
        "display": "hkt",
        "name": "TerraClassicHKD",
        "symbol": "HKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uhkd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The IDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/BF55329AEA7E79B0AAB320C41A76AC8B9E4E9E07EEED8643AB57440C0978F402",
            "exponent": 0,
            "aliases": [
              "uidr"
            ]
          },
          {
            "denom": "midr",
            "exponent": 3,
            "aliases": [
              "milliidr"
            ]
          },
          {
            "denom": "idt",
            "exponent": 6,
            "aliases": [
              "idtc"
            ]
          }
        ],
        "base": "ibc/BF55329AEA7E79B0AAB320C41A76AC8B9E4E9E07EEED8643AB57440C0978F402",
        "display": "idt",
        "name": "TerraClassicIDR",
        "symbol": "IDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uidr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The INR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/C9B27B2F497CD3A3C7EE07556FA40AE234EE346A1EC269E7DE59C9CB52A0A0A6",
            "exponent": 0,
            "aliases": [
              "uinr"
            ]
          },
          {
            "denom": "minr",
            "exponent": 3,
            "aliases": [
              "milliinr"
            ]
          },
          {
            "denom": "int",
            "exponent": 6,
            "aliases": [
              "intc"
            ]
          }
        ],
        "base": "ibc/C9B27B2F497CD3A3C7EE07556FA40AE234EE346A1EC269E7DE59C9CB52A0A0A6",
        "display": "int",
        "name": "TerraClassicINR",
        "symbol": "INTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uinr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The JPY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/E33EB14BFC9274B7A9C349BB519A78B33C782DA682708EC91A85359FFAA6357A",
            "exponent": 0,
            "aliases": [
              "ujpy"
            ]
          },
          {
            "denom": "mjpy",
            "exponent": 3,
            "aliases": [
              "millijpy"
            ]
          },
          {
            "denom": "jpt",
            "exponent": 6,
            "aliases": [
              "jptc"
            ]
          }
        ],
        "base": "ibc/E33EB14BFC9274B7A9C349BB519A78B33C782DA682708EC91A85359FFAA6357A",
        "display": "jpt",
        "name": "TerraClassicJPY",
        "symbol": "JPTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "ujpy",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The MNT stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0AA77B8ECAAD61A09437BA40B9EAEA3A80D9CF3EF1933309895BF3C2FC699DA6",
            "exponent": 0,
            "aliases": [
              "umnt"
            ]
          },
          {
            "denom": "mmnt",
            "exponent": 3,
            "aliases": [
              "millimnt"
            ]
          },
          {
            "denom": "mnt",
            "exponent": 6,
            "aliases": [
              "mntc"
            ]
          }
        ],
        "base": "ibc/0AA77B8ECAAD61A09437BA40B9EAEA3A80D9CF3EF1933309895BF3C2FC699DA6",
        "display": "mnt",
        "name": "TerraClassicMNT",
        "symbol": "MNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "umnt",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The MYR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/12FEFB6E8AD852D23474DB1664D6F1B1C965506492B85E34F3496A9AF7B3F6C8",
            "exponent": 0,
            "aliases": [
              "umyr"
            ]
          },
          {
            "denom": "mmyr",
            "exponent": 3,
            "aliases": [
              "millimyr"
            ]
          },
          {
            "denom": "myt",
            "exponent": 6,
            "aliases": [
              "mytc"
            ]
          }
        ],
        "base": "ibc/12FEFB6E8AD852D23474DB1664D6F1B1C965506492B85E34F3496A9AF7B3F6C8",
        "display": "myt",
        "name": "TerraClassicMYR",
        "symbol": "MYTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "umyr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The NOK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/2E4ECFFBCDD77D42E6A1DD2D866C11FECCD4EB65B695253A610F2882B654731F",
            "exponent": 0,
            "aliases": [
              "unok"
            ]
          },
          {
            "denom": "mnok",
            "exponent": 3,
            "aliases": [
              "millinok"
            ]
          },
          {
            "denom": "not",
            "exponent": 6,
            "aliases": [
              "notc"
            ]
          }
        ],
        "base": "ibc/2E4ECFFBCDD77D42E6A1DD2D866C11FECCD4EB65B695253A610F2882B654731F",
        "display": "not",
        "name": "TerraClassicNOK",
        "symbol": "NOTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "unok",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The PHP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/559B4D308D13DFD4CF535B417C97740E99516B6EF4E0C66AD54CCAD2F46C55E5",
            "exponent": 0,
            "aliases": [
              "uphp"
            ]
          },
          {
            "denom": "mphp",
            "exponent": 3,
            "aliases": [
              "milliphp"
            ]
          },
          {
            "denom": "pht",
            "exponent": 6,
            "aliases": [
              "phtc"
            ]
          }
        ],
        "base": "ibc/559B4D308D13DFD4CF535B417C97740E99516B6EF4E0C66AD54CCAD2F46C55E5",
        "display": "pht",
        "name": "TerraClassicPHP",
        "symbol": "PHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uphp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The SDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/92BF104008D75F9E9A602F948C824E75271A62EAB940D381AF7B1A6D95BF6021",
            "exponent": 0,
            "aliases": [
              "usdr"
            ]
          },
          {
            "denom": "msdr",
            "exponent": 3,
            "aliases": [
              "millisdr"
            ]
          },
          {
            "denom": "sdt",
            "exponent": 6,
            "aliases": [
              "sdtc"
            ]
          }
        ],
        "base": "ibc/92BF104008D75F9E9A602F948C824E75271A62EAB940D381AF7B1A6D95BF6021",
        "display": "sdt",
        "name": "TerraClassicSDR",
        "symbol": "SDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "usdr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The SEK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/227794C5A63E0A61F49839817288C6582E0BB3D9A082D261542F56684DC6F47D",
            "exponent": 0,
            "aliases": [
              "usek"
            ]
          },
          {
            "denom": "msek",
            "exponent": 3,
            "aliases": [
              "millisek"
            ]
          },
          {
            "denom": "set",
            "exponent": 6,
            "aliases": [
              "setc"
            ]
          }
        ],
        "base": "ibc/227794C5A63E0A61F49839817288C6582E0BB3D9A082D261542F56684DC6F47D",
        "display": "set",
        "name": "TerraClassicSEK",
        "symbol": "SETC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "usek",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The SGD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/2FB96E4667FBBE51C86E534017E6787F5B15377AF16815955DC97692CB237208",
            "exponent": 0,
            "aliases": [
              "usgd"
            ]
          },
          {
            "denom": "msgd",
            "exponent": 3,
            "aliases": [
              "millisgd"
            ]
          },
          {
            "denom": "sgt",
            "exponent": 6,
            "aliases": [
              "sgtc"
            ]
          }
        ],
        "base": "ibc/2FB96E4667FBBE51C86E534017E6787F5B15377AF16815955DC97692CB237208",
        "display": "sgt",
        "name": "TerraClassicSGD",
        "symbol": "SGTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "usgd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The THB stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/1370B7C0100924E0310D7A9F71701109F86CF2A7E13B86A1D3B425E618167DBF",
            "exponent": 0,
            "aliases": [
              "uthb"
            ]
          },
          {
            "denom": "mthb",
            "exponent": 3,
            "aliases": [
              "millithb"
            ]
          },
          {
            "denom": "tht",
            "exponent": 6,
            "aliases": [
              "thtc"
            ]
          }
        ],
        "base": "ibc/1370B7C0100924E0310D7A9F71701109F86CF2A7E13B86A1D3B425E618167DBF",
        "display": "tht",
        "name": "TerraClassicTHB",
        "symbol": "THTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "uthb",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The TWD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/93B9AA28AF48E1601399BA808B09A3EE59299B48D70A1E1BCD04D9DB84E246F3",
            "exponent": 0,
            "aliases": [
              "utwd"
            ]
          },
          {
            "denom": "mtwd",
            "exponent": 3,
            "aliases": [
              "millitwd"
            ]
          },
          {
            "denom": "twt",
            "exponent": 6,
            "aliases": [
              "twtc"
            ]
          }
        ],
        "base": "ibc/93B9AA28AF48E1601399BA808B09A3EE59299B48D70A1E1BCD04D9DB84E246F3",
        "display": "twt",
        "name": "TerraClassicTWD",
        "symbol": "TWTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "utwd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-72"
            }
          }
        ]
      },
      {
        "description": "The native token of Tgrade",
        "denom_units": [
          {
            "denom": "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
            "exponent": 0,
            "aliases": [
              "utgd"
            ]
          },
          {
            "denom": "tgd",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
        "name": "Tgrade",
        "display": "tgd",
        "symbol": "TGD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg"
        },
        "coingecko_id": "tgrade",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "utgd",
              "chain_name": "tgrade"
            },
            "chain": {
              "channel_id": "channel-263"
            }
          }
        ]
      },
      {
        "description": "The native token of Umee",
        "denom_units": [
          {
            "denom": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
            "exponent": 0,
            "aliases": [
              "uumee"
            ]
          },
          {
            "denom": "umee",
            "exponent": 6
          }
        ],
        "base": "ibc/67795E528DF67C5606FC20F824EA39A6EF55BA133F4DC79C90A8C47A0901E17C",
        "name": "Umee",
        "display": "umee",
        "symbol": "UMEE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/umee/images/umee.png"
        },
        "coingecko_id": "umee",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uumee",
              "chain_name": "umee"
            },
            "chain": {
              "channel_id": "channel-184"
            }
          }
        ]
      },
      {
        "description": "Staking and governance coin for the Unification Blockchain",
        "denom_units": [
          {
            "denom": "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
            "exponent": 0,
            "aliases": [
              "nund"
            ]
          },
          {
            "denom": "FUND",
            "exponent": 9
          }
        ],
        "base": "ibc/608EF5C0CE64FEA097500DB39657BDD36CA708CC5DCC2E250A024B6981DD36BC",
        "name": "Unification Network",
        "display": "FUND",
        "symbol": "FUND",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png"
        },
        "coingecko_id": "unification",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "nund",
              "chain_name": "unification"
            },
            "chain": {
              "channel_id": "channel-382"
            }
          }
        ]
      },
      {
        "description": "The native token of Vidulum",
        "denom_units": [
          {
            "denom": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
            "exponent": 0,
            "aliases": [
              "uvdl"
            ]
          },
          {
            "denom": "vdl",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/E7B35499CFBEB0FF5778127ABA4FB2C4B79A6B8D3D831D4379C4048C238796BD",
        "name": "Vidulum",
        "display": "vdl",
        "symbol": "VDL",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png"
        },
        "coingecko_id": "vidulum",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-0",
              "base_denom": "uvdl",
              "chain_name": "vidulum"
            },
            "chain": {
              "channel_id": "channel-124"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
            "exponent": 0,
            "aliases": [
              "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/neta.svg"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Marble DAO on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
        "denom_units": [
          {
            "denom": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
            "exponent": 0,
            "aliases": [
              "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl"
            ]
          },
          {
            "denom": "marble",
            "exponent": 3
          }
        ],
        "base": "ibc/F6B691D5F7126579DDC87357B09D653B47FDCE0A3383FF33C8D8B544FE29A8A6",
        "name": "Marble",
        "display": "marble",
        "symbol": "MARBLE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/marble.svg"
        },
        "coingecko_id": "marble",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Hope Galaxy is an NFT collection based on its own native Token $HOPE, a cw20 token on Juno chain.",
        "type_asset": "cw20",
        "address": "juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
        "denom_units": [
          {
            "denom": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
            "exponent": 0,
            "aliases": [
              "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z"
            ]
          },
          {
            "denom": "hope",
            "exponent": 6
          }
        ],
        "base": "ibc/C2A2E9CA95DDD4828B75124B5E27B8401C7D8493BC48353D418CBFC04565899B",
        "name": "Hope Galaxy",
        "display": "hope",
        "symbol": "HOPE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hope.svg"
        },
        "coingecko_id": "hope-galaxy",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Racoon aims to simplify accessibility to AI, NFTs and Gambling on the Cosmos Ecosystem",
        "type_asset": "cw20",
        "address": "juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
        "denom_units": [
          {
            "denom": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
            "exponent": 0,
            "aliases": [
              "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa"
            ]
          },
          {
            "denom": "rac",
            "exponent": 6
          }
        ],
        "base": "ibc/6BDB4C8CCD45033F9604E4B93ED395008A753E01EECD6992E7D1EA23D9D3B788",
        "name": "Racoon",
        "display": "rac",
        "symbol": "RAC",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/rac.svg"
        },
        "coingecko_id": "racoon",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The native token of Marble DEX on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
        "denom_units": [
          {
            "denom": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
            "exponent": 0,
            "aliases": [
              "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq"
            ]
          },
          {
            "denom": "block",
            "exponent": 6
          }
        ],
        "base": "ibc/DB9755CB6FE55192948AE074D18FA815E1429D3D374D5BDA8D89623C6CF235C3",
        "name": "Block",
        "display": "block",
        "symbol": "BLOCK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/block.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The DAO token to build consensus among Hong Kong People",
        "type_asset": "cw20",
        "address": "juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
        "denom_units": [
          {
            "denom": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
            "exponent": 0,
            "aliases": [
              "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49"
            ]
          }
        ],
        "base": "ibc/52E12CF5CA2BB903D84F5298B4BFD725D66CAB95E09AA4FC75B2904CA5485FEB",
        "name": "DHK",
        "display": "dhk",
        "symbol": "DHK",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dhk.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1tdjwrqmnztn2j3sj2ln9xnyps5hs48q3ddwjrz7jpv6mskappjys5czd49",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Token governance for Junoswap",
        "type_asset": "cw20",
        "address": "juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
        "denom_units": [
          {
            "denom": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
            "exponent": 0,
            "aliases": [
              "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g"
            ]
          },
          {
            "denom": "raw",
            "exponent": 6
          }
        ],
        "base": "ibc/00B6E60AD3D65CBEF5579AC8AF609527C0B57535B6E32D96C80A735344FD9DCC",
        "name": "JunoSwap",
        "display": "raw",
        "symbol": "RAW",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/raw.png"
        },
        "coingecko_id": "junoswap-raw-dao",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Profit sharing token for Another.Software validator. Hold and receive dividends from Another.Software validator commissions!",
        "type_asset": "cw20",
        "address": "juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
        "denom_units": [
          {
            "denom": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
            "exponent": 0,
            "aliases": [
              "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w"
            ]
          },
          {
            "denom": "asvt",
            "exponent": 6
          }
        ],
        "base": "ibc/AA1C80225BCA7B32ED1FC6ABF8B8E899BEB48ECDB4B417FD69873C6D715F97E7",
        "name": "Another.Software Validator Token",
        "display": "asvt",
        "symbol": "ASVT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/asvt.png"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno17wzaxtfdw5em7lc94yed4ylgjme63eh73lm3lutp2rhcxttyvpwsypjm4w",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "IBC HNS is HNS, coin of Handshake, decentralized root namesystem, but wrapped to cosmos for IBC support by Another.Software through Juno netowrk.",
        "type_asset": "cw20",
        "address": "juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
        "denom_units": [
          {
            "denom": "ibc/D53609853919635406B7F9B83BADE77BF480F7030215B49E932A1EF0A193E49A",
            "exponent": 0,
            "aliases": [
              "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k"
            ]
          },
          {
            "denom": "hns",
            "exponent": 6
          }
        ],
        "base": "ibc/D53609853919635406B7F9B83BADE77BF480F7030215B49E932A1EF0A193E49A",
        "name": "IBC HNS (Handshake)",
        "display": "hns",
        "symbol": "HNS",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hns.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1ur4jx0sxchdevahep7fwq28yk4tqsrhshdtylz46yka3uf6kky5qllqp4k",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "DAO dedicated to building tools on the Juno Network",
        "type_asset": "cw20",
        "address": "juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
        "denom_units": [
          {
            "denom": "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
            "exponent": 0,
            "aliases": [
              "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3"
            ]
          },
          {
            "denom": "joe",
            "exponent": 6
          }
        ],
        "base": "ibc/0CB9DB3441D0D50F35699DEE22B9C965487E83FB2D9F483D1CC5CA34E856C484",
        "name": "JoeDAO",
        "display": "joe",
        "symbol": "JOE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/joe.png"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Governance Token for Digital Land Acquisition DAO",
        "type_asset": "cw20",
        "address": "juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
        "denom_units": [
          {
            "denom": "ibc/500F3E928AB5F2E9ACB113F4F879A44BDB42CCDCDC51254222D742A240A526F8",
            "exponent": 0,
            "aliases": [
              "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr"
            ]
          },
          {
            "denom": "dla",
            "exponent": 6
          }
        ],
        "base": "ibc/500F3E928AB5F2E9ACB113F4F879A44BDB42CCDCDC51254222D742A240A526F8",
        "name": "Digital Land Acquisition DAO",
        "display": "dla",
        "symbol": "DLA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/dla.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1sfwye65qxcfsc837gu5qcprcz7w49gkv3wnat04764ld76hy3arqs779tr",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "DeFi gaming platform built on Juno",
        "type_asset": "cw20",
        "address": "juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
        "denom_units": [
          {
            "denom": "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
            "exponent": 0,
            "aliases": [
              "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se"
            ]
          },
          {
            "denom": "glto",
            "exponent": 6
          }
        ],
        "base": "ibc/52C57FCA7D6854AA178E7A183DDBE4EF322B904B1D719FC485F6FFBC1F72A19E",
        "name": "Gelotto",
        "display": "glto",
        "symbol": "GLTO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/glto.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Gelotto Year 1 Grand Prize Token",
        "type_asset": "cw20",
        "address": "juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
        "denom_units": [
          {
            "denom": "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
            "exponent": 0,
            "aliases": [
              "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh"
            ]
          },
          {
            "denom": "gkey",
            "exponent": 6
          }
        ],
        "base": "ibc/7C781B4C2082CD62129A972D47486D78EC17155C299270E3C89348EA026BEAF8",
        "name": "GKey",
        "display": "gkey",
        "symbol": "GKEY",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/gkey.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1gz8cf86zr4vw9cjcyyv432vgdaecvr9n254d3uwwkx9rermekddsxzageh",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for BlackHole on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
        "denom_units": [
          {
            "denom": "ibc/A9A73A9FEAF97112CC70F5D5E96D598398F2D015D4BD7DFE8804CE7AE8794D9D",
            "exponent": 0,
            "aliases": [
              "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m"
            ]
          },
          {
            "denom": "hole",
            "exponent": 6
          }
        ],
        "base": "ibc/A9A73A9FEAF97112CC70F5D5E96D598398F2D015D4BD7DFE8804CE7AE8794D9D",
        "name": "BlackHole",
        "display": "hole",
        "symbol": "HOLE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/hole.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1t46z6hg8vvsena7sue0vg6w85ljar3cundplkre9sz0skeqkap9sxyyy6m",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Staking derivative seJUNO for staked JUNO",
        "type_asset": "cw20",
        "address": "juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
        "denom_units": [
          {
            "denom": "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
            "exponent": 0,
            "aliases": [
              "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv"
            ]
          },
          {
            "denom": "sejuno",
            "exponent": 6
          }
        ],
        "base": "ibc/C6B6BFCB6EE49A7CAB1A7E7B021DE35B99D525AC660844952F0F6C78DCB2A57B",
        "name": "StakeEasy seJUNO",
        "display": "sejuno",
        "symbol": "SEJUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/sejuno.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Staking derivative bJUNO for staked JUNO",
        "type_asset": "cw20",
        "address": "juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
        "denom_units": [
          {
            "denom": "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
            "exponent": 0,
            "aliases": [
              "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3"
            ]
          },
          {
            "denom": "bjuno",
            "exponent": 6
          }
        ],
        "base": "ibc/C2DF5C3949CA835B221C575625991F09BAB4E48FB9C11A4EE357194F736111E3",
        "name": "StakeEasy bJUNO",
        "display": "bjuno",
        "symbol": "BJUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/bjuno.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "Solarbank DAO Governance Token for speeding up the shift to renewable and green energy",
        "type_asset": "cw20",
        "address": "juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
        "denom_units": [
          {
            "denom": "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
            "exponent": 0,
            "aliases": [
              "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse"
            ]
          },
          {
            "denom": "solar",
            "exponent": 6
          }
        ],
        "base": "ibc/C3FC4DED273E7D1DD2E7BAA3317EC9A53CD3252B577AA33DC00D9DF2BDF3ED5C",
        "name": "Solarbank DAO",
        "display": "solar",
        "symbol": "SOLAR",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/solar.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno159q8t5g02744lxq8lfmcn6f78qqulq9wn3y9w7lxjgkz4e0a6kvsfvapse",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "StakeEasy governance token",
        "type_asset": "cw20",
        "address": "juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
        "denom_units": [
          {
            "denom": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
            "exponent": 0,
            "aliases": [
              "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf"
            ]
          },
          {
            "denom": "seasy",
            "exponent": 6
          }
        ],
        "base": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
        "name": "StakeEasy SEASY",
        "display": "seasy",
        "symbol": "SEASY",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/seasy.svg"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for MuseDAO on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
        "denom_units": [
          {
            "denom": "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
            "exponent": 0,
            "aliases": [
              "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3"
            ]
          },
          {
            "denom": "muse",
            "exponent": 6
          }
        ],
        "base": "ibc/6B982170CE024689E8DD0E7555B129B488005130D4EDA426733D552D10B36D8F",
        "name": "MuseDAO",
        "display": "muse",
        "symbol": "MUSE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/muse.png"
        },
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Loop Finance on Juno Chain",
        "type_asset": "cw20",
        "address": "juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
        "denom_units": [
          {
            "denom": "ibc/8D8F96DFFD16F5D079EED73C5110E937B37FBDA817F3E5680DB69E51FFBB4B7D",
            "exponent": 0,
            "aliases": [
              "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup"
            ]
          },
          {
            "denom": "loop",
            "exponent": 6
          }
        ],
        "base": "ibc/8D8F96DFFD16F5D079EED73C5110E937B37FBDA817F3E5680DB69E51FFBB4B7D",
        "name": "Loop Finance",
        "display": "loop",
        "symbol": "LOOP",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/loop.png"
        },
        "coingecko_id": "loop",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn",
              "channel_id": "channel-47",
              "base_denom": "cw20:juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup",
              "chain_name": "juno"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-169"
            }
          }
        ]
      },
      {
        "description": "ELEVENPARIS loyalty token on KiChain",
        "type_asset": "cw20",
        "address": "ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy",
        "denom_units": [
          {
            "denom": "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
            "exponent": 0,
            "aliases": [
              "cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy"
            ]
          },
          {
            "denom": "lvn",
            "exponent": 6
          }
        ],
        "base": "ibc/AD185F62399F770CCCE8A36A180A77879FF6C26A0398BD3D2A74E087B0BFA121",
        "name": "LVN",
        "display": "lvn",
        "symbol": "LVN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png"
        },
        "coingecko_id": "lvn",
        "traces": [
          {
            "type": "ibc-cw20",
            "counterparty": {
              "port": "wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha",
              "channel_id": "channel-18",
              "base_denom": "cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy",
              "chain_name": "kichain"
            },
            "chain": {
              "port": "transfer",
              "channel_id": "channel-261"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "panacea",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-82",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-82",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "persistence",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/799FDD409719A1122586A629AE8FCA17380351A51C1F47A80A1B8E7F2A491098",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-6",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-190",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/F53B622B0117ECCD0908C1F33ED71B846D9B0C888BE8A16C58098C0AB9497B0A",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/31D711D31CD5D83D98E76B1486EEDA1A38CD1F7D6FCBD03521FE51323115AECA",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "coingecko_id": "graviton",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "ugraviton",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-38"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
            "exponent": 0,
            "aliases": [
              "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-38"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/5709B8339F05C7E37D27FCFEC18CEDBB0747309144C8B3C4A49C122F0F30B96B",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-19"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/CA687302422C075B26948BEC7143F6D47BACAB53421D57DF30741F91D4DFCA1F",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-33",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/F41168F3687219CC7D83965B601BAAB30E61A6B4E268A5DE0C88522C700E6EB3",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/F41168F3687219CC7D83965B601BAAB30E61A6B4E268A5DE0C88522C700E6EB3",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-33",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-37"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/69B4810E989B56FC6CA41F395228236FA7E7F59B9A3B7AF3FB0A344361C38389",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-4",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/7D053E5CF515235C2C8A923840D6D5352F19B08722B774355AC97C596C729D5C",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-14",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-21"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/4F03563F9E504B0C147FD395DBCF0A41A45E9A1134DFEC83A94B5E11D43EAA04",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-22"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/BA51309DEEE69EF9159FADDCD9F566C372157A1F4E559076D201B255C27F484A",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-7",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-26"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/43F1FDAC4E552DD8194B3FFD35EE16957BC39AFF5CA57545DB71161FA66E7DC0",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-13",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-27"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "point",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-404",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "provenance",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/FAC1BAAA6ECDCB88408A6EEEA13AD4736DA687F85ACD22B5BBD00D36754AC0FA",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-222",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/C1A2C4681159048DD4A116652D8594EC5CD1C30D9FD282A9DAEAD6328CF3CDCA",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-222",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "rebus",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-355",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-355",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "regen",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/95762EB27E57BC8916A4EB9C37E20919C8B61025461CED7CA6EF71A38FD51C4E",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-13",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/5FEB332D2B121921C792F1A0DBF7C3163FF205337B4AFE6E14F69E8E49545F49",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-185",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/DF0C9DDE8ECD399ABD80A39B2562837CDA1C49777F514355CA16E194EBAAB3D7",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-25",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-12"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-8",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/AAA241B0C1B237AA252F939C7CB7AB4C21A46BAA97464DDB8B5C92D4AF635E29",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/225BA4054768997F835DC4F32F3C82C4930D8884A02FDB67D43D9EB32A057BC3",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/225BA4054768997F835DC4F32F3C82C4930D8884A02FDB67D43D9EB32A057BC3",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/47646582AF7C3412762CE77704DDC6C233DF7C5A78850CD293787D03B339CC1F",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-28"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/F03BD5742985639DE77F85D961525508CE630352100F459211671DFB79850F56",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-14",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-29"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "rizon",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-221",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-221",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "secretnetwork",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/448B29AB9766D29CC09944EDF6A08573B45A37C55746A45FA3CF53F1B58DF98D",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-43",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-21"
            }
          }
        ]
      },
      {
        "description": "The native token of Axelar",
        "denom_units": [
          {
            "denom": "ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E",
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
        "base": "ibc/A7CBAF118AC24A896DC46A098FE9FA2A588A36A2F0239913229D3A11D92E7B2E",
        "name": "Axelar",
        "display": "axl",
        "symbol": "AXL",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg"
        },
        "coingecko_id": "axelar",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uaxl",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ]
      },
      {
        "description": "Circle's stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/CD7B6B7D85FDF5F72A78E806BCFB8060B561EEF27677B111E0A610626056451E",
            "exponent": 0,
            "aliases": [
              "uusdc"
            ]
          },
          {
            "denom": "usdc",
            "exponent": 6
          }
        ],
        "base": "ibc/CD7B6B7D85FDF5F72A78E806BCFB8060B561EEF27677B111E0A610626056451E",
        "name": "USD Coin",
        "display": "usdc",
        "symbol": "USDC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uusdc",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
        },
        "coingecko_id": "usd-coin"
      },
      {
        "description": "Frax's fractional-algorithmic stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C22245B8F7F154020A352A2721421218CD251B013B21954FBB6A5D7B655D88F6",
            "exponent": 0,
            "aliases": [
              "frax-wei"
            ]
          },
          {
            "denom": "frax",
            "exponent": 18
          }
        ],
        "base": "ibc/C22245B8F7F154020A352A2721421218CD251B013B21954FBB6A5D7B655D88F6",
        "name": "Frax",
        "display": "frax",
        "symbol": "FRAX",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "frax-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
        },
        "coingecko_id": "frax"
      },
      {
        "description": "Dai stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/8161CB553A9AF7494CA20237CD7A52027409AA1A3B55A37F968CCE99C7C5BDF2",
            "exponent": 0,
            "aliases": [
              "dai-wei"
            ]
          },
          {
            "denom": "dai",
            "exponent": 18
          }
        ],
        "base": "ibc/8161CB553A9AF7494CA20237CD7A52027409AA1A3B55A37F968CCE99C7C5BDF2",
        "name": "Dai Stablecoin",
        "display": "dai",
        "symbol": "DAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "dai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
        },
        "coingecko_id": "dai"
      },
      {
        "description": "Tether's USD stablecoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/BFB5BBB93D43AC6458BA9C8871B3F3FE5D4B81301A1BEA2BDA2297C1D6A5D47F",
            "exponent": 0,
            "aliases": [
              "uusdt"
            ]
          },
          {
            "denom": "usdt",
            "exponent": 6
          }
        ],
        "base": "ibc/BFB5BBB93D43AC6458BA9C8871B3F3FE5D4B81301A1BEA2BDA2297C1D6A5D47F",
        "name": "Tether USD",
        "display": "usdt",
        "symbol": "USDT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uusdt",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
        },
        "coingecko_id": "tether"
      },
      {
        "description": "Wrapped Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/3665ACBA97B115133C35F060DB67E9671035E9ED48B2FC9140260C122D0C4E03",
            "exponent": 0,
            "aliases": [
              "weth-wei"
            ]
          },
          {
            "denom": "weth",
            "exponent": 18
          }
        ],
        "base": "ibc/3665ACBA97B115133C35F060DB67E9671035E9ED48B2FC9140260C122D0C4E03",
        "name": "Wrapped Ether",
        "display": "weth",
        "symbol": "WETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "weth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
        },
        "coingecko_id": "weth"
      },
      {
        "description": "Wrapped Bitcoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/1B26C5CEE7509C05EDFB4AED90997C84A4F9E8DCED7E544C8D2C630486686405",
            "exponent": 0,
            "aliases": [
              "wbtc-satoshi"
            ]
          },
          {
            "denom": "wbtc",
            "exponent": 8
          }
        ],
        "base": "ibc/1B26C5CEE7509C05EDFB4AED90997C84A4F9E8DCED7E544C8D2C630486686405",
        "name": "Wrapped Bitcoin",
        "display": "wbtc",
        "symbol": "WBTC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "wbtc-satoshi",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
        },
        "coingecko_id": "wrapped-bitcoin"
      },
      {
        "description": "Aave on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C59C40DF5B210194B7E6E0652978967975374A0849DD30583006BDEFFB59312B",
            "exponent": 0,
            "aliases": [
              "aave-wei"
            ]
          },
          {
            "denom": "aave",
            "exponent": 18
          }
        ],
        "base": "ibc/C59C40DF5B210194B7E6E0652978967975374A0849DD30583006BDEFFB59312B",
        "name": "Aave",
        "display": "aave",
        "symbol": "AAVE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "aave-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
        },
        "coingecko_id": "aave"
      },
      {
        "description": "ApeCoin on Axelar",
        "denom_units": [
          {
            "denom": "ibc/DFE7E0AE42D8D58D7D06D9D6538C66F4090B793CC3766B69A6A0F0DE25F00413",
            "exponent": 0,
            "aliases": [
              "ape-wei"
            ]
          },
          {
            "denom": "ape",
            "exponent": 18
          }
        ],
        "base": "ibc/DFE7E0AE42D8D58D7D06D9D6538C66F4090B793CC3766B69A6A0F0DE25F00413",
        "name": "ApeCoin",
        "display": "ape",
        "symbol": "APE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "ape-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
        },
        "coingecko_id": "apecoin"
      },
      {
        "description": "Axie Infinity Shard on Axelar",
        "denom_units": [
          {
            "denom": "ibc/7A90E412F1C37262762E7BF61342FA206A1A6F7D226181CCD0507782C61C4A9A",
            "exponent": 0,
            "aliases": [
              "axs-wei"
            ]
          },
          {
            "denom": "axs",
            "exponent": 18
          }
        ],
        "base": "ibc/7A90E412F1C37262762E7BF61342FA206A1A6F7D226181CCD0507782C61C4A9A",
        "name": "Axie Infinity Shard",
        "display": "axs",
        "symbol": "AXS",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "axs-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
        },
        "coingecko_id": "axie-infinity"
      },
      {
        "description": "Chainlink on Axelar",
        "denom_units": [
          {
            "denom": "ibc/E7B98666AD9E785812DE11447FBA1FF2BDE74CDB49BBBB6D150A7DCD971A502E",
            "exponent": 0,
            "aliases": [
              "link-wei"
            ]
          },
          {
            "denom": "link",
            "exponent": 18
          }
        ],
        "base": "ibc/E7B98666AD9E785812DE11447FBA1FF2BDE74CDB49BBBB6D150A7DCD971A502E",
        "name": "Chainlink",
        "display": "link",
        "symbol": "LINK",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "link-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
        },
        "coingecko_id": "chainlink"
      },
      {
        "description": "Maker on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C37FA4F2EE90032E5648573E6C56511B1DBC9936BD9FA27DBD673E9E9D7728CF",
            "exponent": 0,
            "aliases": [
              "mkr-wei"
            ]
          },
          {
            "denom": "mkr",
            "exponent": 18
          }
        ],
        "base": "ibc/C37FA4F2EE90032E5648573E6C56511B1DBC9936BD9FA27DBD673E9E9D7728CF",
        "name": "Maker",
        "display": "mkr",
        "symbol": "MKR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "mkr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
        },
        "coingecko_id": "maker"
      },
      {
        "description": "Rai Reflex Index on Axelar",
        "denom_units": [
          {
            "denom": "ibc/18EF59597C5230BFAE79EBEE4248556298A4FDB5B0DA8AAAD54C247B0011998B",
            "exponent": 0,
            "aliases": [
              "rai-wei"
            ]
          },
          {
            "denom": "rai",
            "exponent": 18
          }
        ],
        "base": "ibc/18EF59597C5230BFAE79EBEE4248556298A4FDB5B0DA8AAAD54C247B0011998B",
        "name": "Rai Reflex Index",
        "display": "rai",
        "symbol": "RAI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "rai-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
        },
        "coingecko_id": "rai"
      },
      {
        "description": "Shiba Inu on Axelar",
        "denom_units": [
          {
            "denom": "ibc/32D4AEE974D7B47A96BC539C796A38AA6CF65B3B2C36FDA621A326DC08E736D5",
            "exponent": 0,
            "aliases": [
              "shib-wei"
            ]
          },
          {
            "denom": "shib",
            "exponent": 18
          }
        ],
        "base": "ibc/32D4AEE974D7B47A96BC539C796A38AA6CF65B3B2C36FDA621A326DC08E736D5",
        "name": "Shiba Inu",
        "display": "shib",
        "symbol": "SHIB",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "shib-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
        },
        "coingecko_id": "shiba-inu"
      },
      {
        "description": "Lido Staked Ether on Axelar",
        "denom_units": [
          {
            "denom": "ibc/25FE726817716360DC551E7BB648D3BE44F4130C710C1BC68C4B777A9A3EEDD0",
            "exponent": 0,
            "aliases": [
              "steth-wei"
            ]
          },
          {
            "denom": "steth",
            "exponent": 18
          }
        ],
        "base": "ibc/25FE726817716360DC551E7BB648D3BE44F4130C710C1BC68C4B777A9A3EEDD0",
        "name": "Lido Staked Ether",
        "display": "steth",
        "symbol": "stETH",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "steth-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        },
        "coingecko_id": "staked-ether"
      },
      {
        "description": "Uniswap on Axelar",
        "denom_units": [
          {
            "denom": "ibc/A68DABF68FD9B27FA921C984DFB9B646478C68C0A8DF6E19AA2C0DD3CF2469F8",
            "exponent": 0,
            "aliases": [
              "uni-wei"
            ]
          },
          {
            "denom": "uni",
            "exponent": 18
          }
        ],
        "base": "ibc/A68DABF68FD9B27FA921C984DFB9B646478C68C0A8DF6E19AA2C0DD3CF2469F8",
        "name": "Uniswap",
        "display": "uni",
        "symbol": "UNI",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uni-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
        },
        "coingecko_id": "uniswap"
      },
      {
        "description": "Chain on Axelar",
        "denom_units": [
          {
            "denom": "ibc/8EEF67E351D187781488147142FE79C947E28715CB659038F4071F3D5D483354",
            "exponent": 0,
            "aliases": [
              "xcn-wei"
            ]
          },
          {
            "denom": "xcn",
            "exponent": 18
          }
        ],
        "base": "ibc/8EEF67E351D187781488147142FE79C947E28715CB659038F4071F3D5D483354",
        "name": "Chain",
        "display": "xcn",
        "symbol": "XCN",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "xcn-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
        },
        "coingecko_id": "chain-2"
      },
      {
        "description": "Wrapped Polkadot on Axelar",
        "denom_units": [
          {
            "denom": "ibc/C1B6DD96E2344095412DE3CD11FF0DE78572C671AC7EBFEFC18D54EBF2D7DCA7",
            "exponent": 0,
            "aliases": [
              "dot-planck"
            ]
          },
          {
            "denom": "dot",
            "exponent": 10
          }
        ],
        "base": "ibc/C1B6DD96E2344095412DE3CD11FF0DE78572C671AC7EBFEFC18D54EBF2D7DCA7",
        "name": "Wrapped Polkadot",
        "display": "dot",
        "symbol": "DOT",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "dot-planck",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
        },
        "coingecko_id": "polkadot"
      },
      {
        "description": "Wrapped Moonbeam on Axelar",
        "denom_units": [
          {
            "denom": "ibc/A79A703A34F0F6F3316FBF80D31F2D1070C0B61F0945DA91D89D0F0923243B60",
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
        "base": "ibc/A79A703A34F0F6F3316FBF80D31F2D1070C0B61F0945DA91D89D0F0923243B60",
        "name": "Wrapped Moonbeam",
        "display": "wglmr",
        "symbol": "WGLMR",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "wglmr-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
        },
        "coingecko_id": "wrapped-moonbeam"
      },
      {
        "description": "Wrapped Matic on Axelar",
        "denom_units": [
          {
            "denom": "ibc/044FB7DDE7236498107023152F9F235E5DB50D9E999761CB3D4CF8C217F938F6",
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
        "base": "ibc/044FB7DDE7236498107023152F9F235E5DB50D9E999761CB3D4CF8C217F938F6",
        "name": "Wrapped Matic",
        "display": "wmatic",
        "symbol": "WMATIC",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "wmatic-wei",
              "chain_name": "axelar"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polygon/images/wmatic.svg"
        },
        "coingecko_id": "matic-network"
      },
      {
        "description": "The native token of Chihuahua Chain",
        "denom_units": [
          {
            "denom": "ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E",
            "exponent": 0,
            "aliases": [
              "uhuahua"
            ]
          },
          {
            "denom": "huahua",
            "exponent": 6
          }
        ],
        "base": "ibc/630E7B10690ADEC9E9CEEE904CE78C522BBCDDC6A081B23FA26A55F6EF40E41E",
        "name": "Chihuahua",
        "display": "huahua",
        "symbol": "HUAHUA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png"
        },
        "coingecko_id": "chihuahua-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uhuahua",
              "chain_name": "chihuahua"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-235",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/34BFFD88FD2A4ED8C4D227A7A3CE966A4D514F5F07823FFABC4CC3DBC9D8CCDE",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/844916627EA6C8421B2A3F5948A7B450A4F5A983568B8A1381774249CD12ABF5",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-10",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-24"
            }
          }
        ]
      },
      {
        "description": "The native EVM, governance and staking token of the Evmos Hub",
        "denom_units": [
          {
            "denom": "ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59",
            "exponent": 0,
            "aliases": [
              "aevmos"
            ]
          },
          {
            "denom": "evmos",
            "exponent": 18
          }
        ],
        "base": "ibc/23A8E16C655512DD4AA83769BA695FB8CCA4D1CA220652B894FAB44E53462C59",
        "name": "Evmos",
        "display": "evmos",
        "symbol": "EVMOS",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png"
        },
        "coingecko_id": "evmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "aevmos",
              "chain_name": "evmos"
            },
            "chain": {
              "channel_id": "channel-18"
            }
          }
        ]
      },
      {
        "description": "The native token of Gravity Bridge",
        "denom_units": [
          {
            "denom": "ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67",
            "exponent": 0,
            "aliases": [
              "ugraviton"
            ]
          },
          {
            "denom": "graviton",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/DEEF987757F80419CC651C8323ACD21D6C3D664E51B5E5A29B2663F5AD132A67",
        "name": "Graviton",
        "display": "graviton",
        "symbol": "GRAV",
        "coingecko_id": "graviton",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/gravitybridge/images/grav.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-79",
              "base_denom": "ugraviton",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/48B753EAF5C3CB2D780EB596DB4391DBB0CD8E15B99E8846A9A9D75F140B8043",
            "exponent": 0,
            "aliases": [
              "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/48B753EAF5C3CB2D780EB596DB4391DBB0CD8E15B99E8846A9A9D75F140B8043",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-79",
              "base_denom": "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
              "chain_name": "gravitybridge"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "The INJ token is the native governance token for the Injective chain.",
        "denom_units": [
          {
            "denom": "ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19",
            "exponent": 0,
            "aliases": [
              "inj"
            ]
          },
          {
            "denom": "INJ",
            "exponent": 18
          }
        ],
        "base": "ibc/A39D6D491ED6349F67505000586546E68ECE05C486F07BE831871AF88A50CD19",
        "name": "Injective",
        "display": "INJ",
        "symbol": "INJ",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        },
        "coingecko_id": "injective-protocol",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-74",
              "base_denom": "inj",
              "chain_name": "injective"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/DF8D00B4B31B55AFCA9BAF192BC36C67AA06D9987DCB96490661BCAB63C27006",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-48",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/231A031117EA5C6479DAF84D87A8454729991E5FDF4D25EDEB441DCB3B0C1059",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/231A031117EA5C6479DAF84D87A8454729991E5FDF4D25EDEB441DCB3B0C1059",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-48",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-88",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-88",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/E83107E876FF194B54E9AC3099E49DBB7728156F250ABD3E997D2B7E89E0810B",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-50",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/901E9F1199A9EB947C83F2903B0B062888758D5853C6B762CD15B9FFD55FF1BC",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-65",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-48",
              "base_denom": "ustars",
              "chain_name": "stargaze"
            },
            "chain": {
              "channel_id": "channel-19"
            }
          }
        ]
      },
      {
        "description": "The native staking token of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
            "exponent": 0,
            "aliases": [
              "uluna"
            ]
          },
          {
            "denom": "mluna",
            "exponent": 3,
            "aliases": [
              "milliluna"
            ]
          },
          {
            "denom": "luna",
            "exponent": 6,
            "aliases": [
              "lunc"
            ]
          }
        ],
        "base": "ibc/D70B0FBF97AEB04491E9ABF4467A7F66CD6250F4382CE5192D856114B83738D2",
        "name": "Luna Classic",
        "display": "luna",
        "symbol": "LUNC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png"
        },
        "coingecko_id": "terra-luna",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uluna",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The USD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E",
            "exponent": 0,
            "aliases": [
              "uusd"
            ]
          },
          {
            "denom": "musd",
            "exponent": 3,
            "aliases": [
              "milliusd"
            ]
          },
          {
            "denom": "ust",
            "exponent": 6,
            "aliases": [
              "ustc"
            ]
          }
        ],
        "base": "ibc/4294C3DB67564CF4A0B2BFACC8415A59B38243F6FF9E288FBA34F9B4823BA16E",
        "name": "TerraClassicUSD",
        "display": "ust",
        "symbol": "USTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png"
        },
        "coingecko_id": "terrausd",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uusd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The KRW stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5",
            "exponent": 0,
            "aliases": [
              "ukrw"
            ]
          },
          {
            "denom": "mkrw",
            "exponent": 3,
            "aliases": [
              "millikrw"
            ]
          },
          {
            "denom": "krt",
            "exponent": 6,
            "aliases": [
              "krtc"
            ]
          }
        ],
        "base": "ibc/F341E5FD11E5A747A62A1BA11D13D25AF9708D1C63944E1E4762ADA883BC46F5",
        "name": "TerraClassicKRW",
        "display": "krt",
        "symbol": "KRTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png"
        },
        "coingecko_id": "terrakrw",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ukrw",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The AUD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C",
            "exponent": 0,
            "aliases": [
              "uaud"
            ]
          },
          {
            "denom": "maud",
            "exponent": 3,
            "aliases": [
              "milliaud"
            ]
          },
          {
            "denom": "aut",
            "exponent": 6,
            "aliases": [
              "autc"
            ]
          }
        ],
        "base": "ibc/D5DCF5E149C09446D37F344333E08631EF6EC0E647752B2F1886A52926A8919C",
        "display": "aut",
        "name": "TerraClassicAUD",
        "symbol": "AUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uaud",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The CAD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3",
            "exponent": 0,
            "aliases": [
              "ucad"
            ]
          },
          {
            "denom": "mcad",
            "exponent": 3,
            "aliases": [
              "millicad"
            ]
          },
          {
            "denom": "cat",
            "exponent": 6,
            "aliases": [
              "catc"
            ]
          }
        ],
        "base": "ibc/C4BAEF150EB365F0A93BF2B6A3826EA7622D934280A43E3A7ED755DD81CCA6E3",
        "display": "cat",
        "name": "TerraClassicCAD",
        "symbol": "CATC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ucad",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The CHF stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8",
            "exponent": 0,
            "aliases": [
              "uchf"
            ]
          },
          {
            "denom": "mchf",
            "exponent": 3,
            "aliases": [
              "millichf"
            ]
          },
          {
            "denom": "cht",
            "exponent": 6,
            "aliases": [
              "chtc"
            ]
          }
        ],
        "base": "ibc/30FA2C42446A4D7BCC31084EED4F69A706282C7FB3580CA19DE55514990E8AF8",
        "display": "cht",
        "name": "TerraClassicCHF",
        "symbol": "CHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uchf",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The CNY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB",
            "exponent": 0,
            "aliases": [
              "ucny"
            ]
          },
          {
            "denom": "mcny",
            "exponent": 3,
            "aliases": [
              "millicny"
            ]
          },
          {
            "denom": "cnt",
            "exponent": 6,
            "aliases": [
              "cntc"
            ]
          }
        ],
        "base": "ibc/F60269C50DD6B775E4B360B3B98EA9A8897ABC0DF016C9A22F5A820D32D3CCDB",
        "display": "cnt",
        "name": "TerraClassicCNY",
        "symbol": "CNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ucny",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The DKK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D",
            "exponent": 0,
            "aliases": [
              "udkk"
            ]
          },
          {
            "denom": "mdkk",
            "exponent": 3,
            "aliases": [
              "millidkk"
            ]
          },
          {
            "denom": "dkt",
            "exponent": 6,
            "aliases": [
              "dktc"
            ]
          }
        ],
        "base": "ibc/A0B065D9E464B5B6DE8BA03D0C72389B3993B2564A4255FF7753C5925BC7450D",
        "display": "dkt",
        "name": "TerraClassicDKK",
        "symbol": "DKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "udkk",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The EUR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39",
            "exponent": 0,
            "aliases": [
              "ueur"
            ]
          },
          {
            "denom": "meur",
            "exponent": 3,
            "aliases": [
              "millieur"
            ]
          },
          {
            "denom": "eut",
            "exponent": 6,
            "aliases": [
              "eutc"
            ]
          }
        ],
        "base": "ibc/E64FDA6D195B7EB3DE1C65ED557F6AEA1917FC245A7A765BAD2D1EF0090DBE39",
        "display": "eut",
        "name": "TerraClassicEUR",
        "symbol": "EUTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ueur",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The GBP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570",
            "exponent": 0,
            "aliases": [
              "ugbp"
            ]
          },
          {
            "denom": "mgbp",
            "exponent": 3,
            "aliases": [
              "milligbp"
            ]
          },
          {
            "denom": "gbt",
            "exponent": 6,
            "aliases": [
              "gbtc"
            ]
          }
        ],
        "base": "ibc/BDD9C206ACDEE5612C651E52AF1C1CC093E71BF303521538F0854AF77CC91570",
        "display": "gbt",
        "name": "TerraClassicGBP",
        "symbol": "GBTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ugbp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The HKD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E",
            "exponent": 0,
            "aliases": [
              "uhkd"
            ]
          },
          {
            "denom": "mhkd",
            "exponent": 3,
            "aliases": [
              "millihkd"
            ]
          },
          {
            "denom": "hkt",
            "exponent": 6,
            "aliases": [
              "hktc"
            ]
          }
        ],
        "base": "ibc/E8586F23B4D4131338AC124186911E03B427061681A5AD75F2EF552F27BF297E",
        "display": "hkt",
        "name": "TerraClassicHKD",
        "symbol": "HKTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uhkd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The IDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F",
            "exponent": 0,
            "aliases": [
              "uidr"
            ]
          },
          {
            "denom": "midr",
            "exponent": 3,
            "aliases": [
              "milliidr"
            ]
          },
          {
            "denom": "idt",
            "exponent": 6,
            "aliases": [
              "idtc"
            ]
          }
        ],
        "base": "ibc/3263CA410F8FE83300CEB6E60E3BA696B5B1C7374B1705498BE9BA423CF9808F",
        "display": "idt",
        "name": "TerraClassicIDR",
        "symbol": "IDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uidr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The INR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633",
            "exponent": 0,
            "aliases": [
              "uinr"
            ]
          },
          {
            "denom": "minr",
            "exponent": 3,
            "aliases": [
              "milliinr"
            ]
          },
          {
            "denom": "int",
            "exponent": 6,
            "aliases": [
              "intc"
            ]
          }
        ],
        "base": "ibc/2507EF0A0E239A7952B59437773C7AD1A7BC9E3C0F76DDD54526B7C4E3AFE633",
        "display": "int",
        "name": "TerraClassicINR",
        "symbol": "INTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uinr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The JPY stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB",
            "exponent": 0,
            "aliases": [
              "ujpy"
            ]
          },
          {
            "denom": "mjpy",
            "exponent": 3,
            "aliases": [
              "millijpy"
            ]
          },
          {
            "denom": "jpt",
            "exponent": 6,
            "aliases": [
              "jptc"
            ]
          }
        ],
        "base": "ibc/55D4151978AFEEF1AAAB232E220931CA05F93D20328108F691A37F42BC6476DB",
        "display": "jpt",
        "name": "TerraClassicJPY",
        "symbol": "JPTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "ujpy",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The MNT stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04",
            "exponent": 0,
            "aliases": [
              "umnt"
            ]
          },
          {
            "denom": "mmnt",
            "exponent": 3,
            "aliases": [
              "millimnt"
            ]
          },
          {
            "denom": "mnt",
            "exponent": 6,
            "aliases": [
              "mntc"
            ]
          }
        ],
        "base": "ibc/6DF0B65089BF26975F3365DD60CBD0C9D680E5E714DA7D50F784A87A39F58A04",
        "display": "mnt",
        "name": "TerraClassicMNT",
        "symbol": "MNTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "umnt",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The MYR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834",
            "exponent": 0,
            "aliases": [
              "umyr"
            ]
          },
          {
            "denom": "mmyr",
            "exponent": 3,
            "aliases": [
              "millimyr"
            ]
          },
          {
            "denom": "myt",
            "exponent": 6,
            "aliases": [
              "mytc"
            ]
          }
        ],
        "base": "ibc/0A3E5BC285A042C02ACE462CE155F2BC98BD3DEC2F69D61F7ABC0DC3554C6834",
        "display": "myt",
        "name": "TerraClassicMYR",
        "symbol": "MYTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "umyr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The NOK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63",
            "exponent": 0,
            "aliases": [
              "unok"
            ]
          },
          {
            "denom": "mnok",
            "exponent": 3,
            "aliases": [
              "millinok"
            ]
          },
          {
            "denom": "not",
            "exponent": 6,
            "aliases": [
              "notc"
            ]
          }
        ],
        "base": "ibc/A11E616929F4A8E1AB7A342710DE00A268BF99A1BF988BA20DE061F05CE0BE63",
        "display": "not",
        "name": "TerraClassicNOK",
        "symbol": "NOTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "unok",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The PHP stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840",
            "exponent": 0,
            "aliases": [
              "uphp"
            ]
          },
          {
            "denom": "mphp",
            "exponent": 3,
            "aliases": [
              "milliphp"
            ]
          },
          {
            "denom": "pht",
            "exponent": 6,
            "aliases": [
              "phtc"
            ]
          }
        ],
        "base": "ibc/270A3E6DC34F4D3ED4688FE4679D713811D26EB44CB1FFDA40413CE5EEBB0840",
        "display": "pht",
        "name": "TerraClassicPHP",
        "symbol": "PHTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uphp",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The SDR stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B",
            "exponent": 0,
            "aliases": [
              "usdr"
            ]
          },
          {
            "denom": "msdr",
            "exponent": 3,
            "aliases": [
              "millisdr"
            ]
          },
          {
            "denom": "sdt",
            "exponent": 6,
            "aliases": [
              "sdtc"
            ]
          }
        ],
        "base": "ibc/6DCB3F809DC21752DA3ACA8E9C4282A21F7953143EDDEDD793378CC2057CB69B",
        "display": "sdt",
        "name": "TerraClassicSDR",
        "symbol": "SDTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "usdr",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The SEK stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17",
            "exponent": 0,
            "aliases": [
              "usek"
            ]
          },
          {
            "denom": "msek",
            "exponent": 3,
            "aliases": [
              "millisek"
            ]
          },
          {
            "denom": "set",
            "exponent": 6,
            "aliases": [
              "setc"
            ]
          }
        ],
        "base": "ibc/A87E93DAE1F5C36538288747814F57FB7D202C580AB427B99088EF1DF6111D17",
        "display": "set",
        "name": "TerraClassicSEK",
        "symbol": "SETC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "usek",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The SGD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482",
            "exponent": 0,
            "aliases": [
              "usgd"
            ]
          },
          {
            "denom": "msgd",
            "exponent": 3,
            "aliases": [
              "millisgd"
            ]
          },
          {
            "denom": "sgt",
            "exponent": 6,
            "aliases": [
              "sgtc"
            ]
          }
        ],
        "base": "ibc/1A354A2E6D9E8A7B5A314241D5E3FE3F156BAB8BF6CA1C7B9BD0E2B0D4068482",
        "display": "sgt",
        "name": "TerraClassicSGD",
        "symbol": "SGTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "usgd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The THB stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435",
            "exponent": 0,
            "aliases": [
              "uthb"
            ]
          },
          {
            "denom": "mthb",
            "exponent": 3,
            "aliases": [
              "millithb"
            ]
          },
          {
            "denom": "tht",
            "exponent": 6,
            "aliases": [
              "thtc"
            ]
          }
        ],
        "base": "ibc/F88DA77C46D2F325B996E83A70E55BC4163C3042A2CA38189798ABCE8F7FC435",
        "display": "tht",
        "name": "TerraClassicTHB",
        "symbol": "THTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uthb",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The TWD stablecoin of Terra Classic.",
        "denom_units": [
          {
            "denom": "ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5",
            "exponent": 0,
            "aliases": [
              "utwd"
            ]
          },
          {
            "denom": "mtwd",
            "exponent": 3,
            "aliases": [
              "millitwd"
            ]
          },
          {
            "denom": "twt",
            "exponent": 6,
            "aliases": [
              "twtc"
            ]
          }
        ],
        "base": "ibc/E7DF6598D244E74049B4AF67D56145D8A2A53F164ED7AB0DD3A357DFCBBE2EB5",
        "display": "twt",
        "name": "TerraClassicTWD",
        "symbol": "TWTC",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png"
        },
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "utwd",
              "chain_name": "terra"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native staking token of Terra.",
        "denom_units": [
          {
            "denom": "ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5",
            "exponent": 0,
            "aliases": [
              "uluna"
            ]
          },
          {
            "denom": "luna",
            "exponent": 6
          }
        ],
        "base": "ibc/28DECFA7FB7E3AB58DC3B3AEA9B11C6C6B6E46356DCC26505205DAD3379984F5",
        "name": "Luna",
        "display": "luna",
        "symbol": "LUNA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png"
        },
        "coingecko_id": "terra-luna-2",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uluna",
              "chain_name": "terra2"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "sentinel",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/2E4CF68617591638A6CBD7DA3E8CAF8C9C0B34AAB4878775A0B16ADDC56E4389",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/2E4CF68617591638A6CBD7DA3E8CAF8C9C0B34AAB4878775A0B16ADDC56E4389",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-12",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-186",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-12"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/1037D0483A4AF3316DE9BB2C3542DF049AC8E4306B1C337F57005A8518B72D96",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/1037D0483A4AF3316DE9BB2C3542DF049AC8E4306B1C337F57005A8518B72D96",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/AC23F67B4F1EB50F6E0AC67BFAEA442505A601FDA51182C9E821FD6CDB110F23",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-17",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/2915CCA550DA6840CB2D4F5BC95A067A7924A767B2EBEB3227DD66124AA8A626",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/2915CCA550DA6840CB2D4F5BC95A067A7924A767B2EBEB3227DD66124AA8A626",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-22",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/28FD914945B402E6471DD4E31DD8EDFB42B3810DA367967F4E941E85D0AD53DE",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/28FD914945B402E6471DD4E31DD8EDFB42B3810DA367967F4E941E85D0AD53DE",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-22",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/317155D838F33DD07E07CDAEF5309AC3038A8F14629CD169E47C39F5A784D9B3",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/317155D838F33DD07E07CDAEF5309AC3038A8F14629CD169E47C39F5A784D9B3",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/31FEE1A2A9F9C01113F90BD0BBCCE8FD6BBB8585FAF109A2101827DD1D5B95B8",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-3",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-50"
            }
          }
        ]
      },
      {
        "description": "Rowan Token (ROWAN) is the Sifchain Network's native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/4540773B0B2F62935EB4329B91F6D256F29A2F9FFD119D3B25C54513477751A7",
            "exponent": 18,
            "aliases": [
              "rowan"
            ]
          }
        ],
        "base": "ibc/4540773B0B2F62935EB4329B91F6D256F29A2F9FFD119D3B25C54513477751A7",
        "name": "Sifchain Rowan",
        "display": "rowan",
        "symbol": "ROWAN",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png"
        },
        "coingecko_id": "sifchain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-1",
              "base_denom": "rowan",
              "chain_name": "sifchain"
            },
            "chain": {
              "channel_id": "channel-36"
            }
          }
        ]
      },
      {
        "description": "IOV coin is the token for the Starname (IOV) Asset Name Service",
        "denom_units": [
          {
            "denom": "ibc/3D545A106B82CC4D4AD4D928D2602E1890EC50D32456901576F1ACB9E37C0BC4",
            "exponent": 0,
            "aliases": [
              "uiov"
            ]
          },
          {
            "denom": "iov",
            "exponent": 6
          }
        ],
        "base": "ibc/3D545A106B82CC4D4AD4D928D2602E1890EC50D32456901576F1ACB9E37C0BC4",
        "name": "Starname",
        "display": "iov",
        "symbol": "IOV",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg"
        },
        "coingecko_id": "starname",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uiov",
              "chain_name": "starname"
            },
            "chain": {
              "channel_id": "channel-40"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "shentu",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/92E0120F15D037353CFB73C14651FC8930ADC05B93100FD7754D3A689E53B333",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-146",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/1B2D7E4261A7E2130E8E3506058E3081D3154998413F0DB2F82B04035B3FE676",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-146",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "sifchain",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/6D717BFF5537D129035BAB39F593D638BA258A9F8D86FB7ECCEAB05B6950CC3E",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/6D717BFF5537D129035BAB39F593D638BA258A9F8D86FB7ECCEAB05B6950CC3E",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-24",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-192",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/B21954812E6E642ADC0B5ACB233E02A634BF137C572575BF80F7C0CC3DB2E74D",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/B21954812E6E642ADC0B5ACB233E02A634BF137C572575BF80F7C0CC3DB2E74D",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-33",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of IXO Chain",
        "denom_units": [
          {
            "denom": "ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459",
            "exponent": 0,
            "aliases": [
              "uixo"
            ]
          },
          {
            "denom": "ixo",
            "exponent": 6
          }
        ],
        "base": "ibc/C5C8682EB9AA1313EF1B12C991ADCDA465B80C05733BFB2972E2005E01BCE459",
        "name": "IXO",
        "display": "ixo",
        "symbol": "IXO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png"
        },
        "coingecko_id": "ixo",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-11",
              "base_denom": "uixo",
              "chain_name": "impacthub"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/11DFDFADE34DCE439BA732EBA5CD8AA804A544BA1ECC0882856289FAF01FE53F",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/11DFDFADE34DCE439BA732EBA5CD8AA804A544BA1ECC0882856289FAF01FE53F",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-8"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/F279AB967042CAC10BFF70FAECB179DCE37AAAE4CD4C1BC4565C2BBC383BC0FA",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/F279AB967042CAC10BFF70FAECB179DCE37AAAE4CD4C1BC4565C2BBC383BC0FA",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/D83B6CC93418EE4B9149D80A307450B2EA4065884E868C66824C8F2A5030B089",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/D83B6CC93418EE4B9149D80A307450B2EA4065884E868C66824C8F2A5030B089",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-5",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/B4314D0E670CB43C88A5DCA09F76E5E812BD831CC2FEC6E434C9E5A9D1F57953",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/B4314D0E670CB43C88A5DCA09F76E5E812BD831CC2FEC6E434C9E5A9D1F57953",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-47",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/FF03988A22CDAB8C0AFD760DE5A612767165B2B6B73BDB6F4CCD1D0359D7CEAD",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/FF03988A22CDAB8C0AFD760DE5A612767165B2B6B73BDB6F4CCD1D0359D7CEAD",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-47",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-17"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/D87BC708A791246AA683D514C273736F07579CBD56C9CA79B7823F9A01C16270",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/D87BC708A791246AA683D514C273736F07579CBD56C9CA79B7823F9A01C16270",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-26",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/6A77936D4B8F4AB96038F17C528C60BB55C19E3458DE1F10A1BC2F6C15A7729D",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/6A77936D4B8F4AB96038F17C528C60BB55C19E3458DE1F10A1BC2F6C15A7729D",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-26",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-7"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/2CC6F10253D563A7C238096BA63D060F7F356E37D5176E517034B8F730DB4AB6",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/2CC6F10253D563A7C238096BA63D060F7F356E37D5176E517034B8F730DB4AB6",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-28",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-10"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/345D30E8ED06B47FC538ED131D99D16126F07CD6F8B35DE96AAF4C1E445AF466",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/345D30E8ED06B47FC538ED131D99D16126F07CD6F8B35DE96AAF4C1E445AF466",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-65"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/21CB41565FCA19AB6613EE06B0D56E588E0DC3E53FF94BA499BB9635794A1A35",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/21CB41565FCA19AB6613EE06B0D56E588E0DC3E53FF94BA499BB9635794A1A35",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-36",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "sommelier",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-165",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-165",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "stargaze",
    "assets": [
      {
        "description": "The native token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837",
            "exponent": 0,
            "aliases": [
              "ucre"
            ]
          },
          {
            "denom": "cre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/892B184DE49984FEA412E6BB8B9F2FA35E707E29DD5E9ADB515EB99B11E40837",
        "name": "Crescent",
        "display": "cre",
        "symbol": "CRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "ucre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-51"
            }
          }
        ]
      },
      {
        "description": "The bonded token of Crescent",
        "denom_units": [
          {
            "denom": "ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31",
            "exponent": 0,
            "aliases": [
              "ubcre"
            ]
          },
          {
            "denom": "bcre",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/7811A811C1EBD001CA3DB637DDD7F9254E6FC0D5EFCC26163C94FBA299F77D31",
        "name": "Bonded Crescent",
        "display": "bcre",
        "symbol": "bCRE",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg"
        },
        "coingecko_id": "crescent-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "ubcre",
              "chain_name": "crescent"
            },
            "chain": {
              "channel_id": "channel-51"
            }
          }
        ]
      },
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/412A9178A4064AB3F656493544C6EE7235C5237610311754ABC9AC001CB07D83",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-20",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-75",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-75",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-48"
            }
          }
        ]
      },
      {
        "description": "The native token of Stride",
        "denom_units": [
          {
            "denom": "ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4",
            "exponent": 0,
            "aliases": [
              "ustrd"
            ]
          },
          {
            "denom": "strd",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/55967CD055E19BF374A2556456C5760DAFDCF1D86DD85FAD08DBA806964DB2C4",
        "name": "Stride",
        "display": "strd",
        "symbol": "STRD",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg"
        },
        "coingecko_id": "stride",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "ustrd",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-106"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651",
            "exponent": 0,
            "aliases": [
              "stuatom"
            ]
          },
          {
            "denom": "statom",
            "exponent": 6
          }
        ],
        "base": "ibc/FED316EA6AA1F52581F61D5D4B38F2A09042D5EA1DABA07B8A23C1EE3C0C4651",
        "name": "stATOM",
        "display": "statom",
        "symbol": "stATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/statom.svg"
        },
        "coingecko_id": "stride-staked-atom",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "stuatom",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-106"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676",
            "exponent": 0,
            "aliases": [
              "stustars"
            ]
          },
          {
            "denom": "ststars",
            "exponent": 6
          }
        ],
        "base": "ibc/7A58490427EF0092E2BFFB4BEEBA38E29B09E9B98557DFC78335B43F15CF2676",
        "name": "stSTARS",
        "display": "ststars",
        "symbol": "stSTARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/ststars.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "stustars",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-106"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1",
            "exponent": 0,
            "aliases": [
              "stuosmo"
            ]
          },
          {
            "denom": "stosmo",
            "exponent": 6
          }
        ],
        "base": "ibc/0AA9207D732AC65D17EF3081AE8EB96CABE26D9E8FBE27EC96BC4E3FEBD255C1",
        "name": "stOSMO",
        "display": "stosmo",
        "symbol": "stOSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stosmo.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "stuosmo",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-106"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6",
            "exponent": 0,
            "aliases": [
              "stujuno"
            ]
          },
          {
            "denom": "stjuno",
            "exponent": 6
          }
        ],
        "base": "ibc/2D4AEA83CAECDA73C09D0FA6A5A76CAE68873C36A744212687E5A495B36BD8C6",
        "name": "stJUNO",
        "display": "stjuno",
        "symbol": "stJUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stjuno.svg"
        },
        "coingecko_id": "",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-19",
              "base_denom": "stujuno",
              "chain_name": "stride"
            },
            "chain": {
              "channel_id": "channel-106"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "starname",
    "assets": [
      {
        "description": "Akash Token (AKT) is the Akash Network's native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.",
        "denom_units": [
          {
            "denom": "ibc/2E4CF68617591638A6CBD7DA3E8CAF8C9C0B34AAB4878775A0B16ADDC56E4389",
            "exponent": 0,
            "aliases": [
              "uakt"
            ]
          },
          {
            "denom": "akt",
            "exponent": 6
          }
        ],
        "base": "ibc/2E4CF68617591638A6CBD7DA3E8CAF8C9C0B34AAB4878775A0B16ADDC56E4389",
        "name": "Akash Network",
        "display": "akt",
        "symbol": "AKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg"
        },
        "coingecko_id": "akash-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-23",
              "base_denom": "uakt",
              "chain_name": "akash"
            },
            "chain": {
              "channel_id": "channel-6"
            }
          }
        ]
      },
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-158",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "CRO coin is the token for the Crypto.com platform.",
        "denom_units": [
          {
            "denom": "ibc/129B5C2D6EED1248184B7E83A5B16165855A3398898985B821CD77D753BC2D19",
            "exponent": 0,
            "aliases": [
              "basecro"
            ]
          },
          {
            "denom": "cro",
            "exponent": 8
          }
        ],
        "base": "ibc/129B5C2D6EED1248184B7E83A5B16165855A3398898985B821CD77D753BC2D19",
        "name": "Cronos",
        "display": "cro",
        "symbol": "CRO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png"
        },
        "coingecko_id": "crypto-com-chain",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-22",
              "base_denom": "basecro",
              "chain_name": "cryptoorgchain"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      },
      {
        "description": "The IRIS token is the native governance token for the IrisNet chain.",
        "denom_units": [
          {
            "denom": "ibc/D3B29CFA1D8935DB99D71C6542BC38127EC4E7CE402755B774B8E1CC588E58BF",
            "exponent": 0,
            "aliases": [
              "uiris"
            ]
          },
          {
            "denom": "iris",
            "exponent": 6
          }
        ],
        "base": "ibc/D3B29CFA1D8935DB99D71C6542BC38127EC4E7CE402755B774B8E1CC588E58BF",
        "name": "IRISnet",
        "display": "iris",
        "symbol": "IRIS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg"
        },
        "coingecko_id": "iris-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-21",
              "base_denom": "uiris",
              "chain_name": "irisnet"
            },
            "chain": {
              "channel_id": "channel-11"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/6FA7B62692FBCA2E51F567947035DE3C5D7333D49D13B85A25F358E80DF4E991",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-15",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The XPRT token is primarily a governance token for the Persistence chain.",
        "denom_units": [
          {
            "denom": "ibc/8FFD1A8310A79306649A44DB0DABC6AC95B979B8AF8846F7D6B807B7E88B7AFF",
            "exponent": 0,
            "aliases": [
              "uxprt"
            ]
          },
          {
            "denom": "xprt",
            "exponent": 6
          }
        ],
        "base": "ibc/8FFD1A8310A79306649A44DB0DABC6AC95B979B8AF8846F7D6B807B7E88B7AFF",
        "name": "Persistence",
        "display": "xprt",
        "symbol": "XPRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg"
        },
        "coingecko_id": "persistence",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-27",
              "base_denom": "uxprt",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ]
      },
      {
        "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
        "denom_units": [
          {
            "denom": "ibc/BCAA9BB335AEC5008235213759DFA2ABDF2DA96F0A6E5C1079F21D0826B831B6",
            "exponent": 0,
            "aliases": [
              "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444"
            ]
          },
          {
            "denom": "pstake",
            "exponent": 18
          }
        ],
        "base": "ibc/BCAA9BB335AEC5008235213759DFA2ABDF2DA96F0A6E5C1079F21D0826B831B6",
        "name": "pSTAKE Finance",
        "display": "pstake",
        "symbol": "PSTAKE",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-27",
              "base_denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
              "chain_name": "persistence"
            },
            "chain": {
              "channel_id": "channel-13"
            }
          }
        ],
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg"
        },
        "coingecko_id": "pstake-finance"
      },
      {
        "description": "REGEN coin is the token for the Regen Network Platform",
        "denom_units": [
          {
            "denom": "ibc/1B2F7017663D3C8A7AA73025AB7D4A35B9CDB841C1616C664A487D32344C4422",
            "exponent": 0,
            "aliases": [
              "uregen"
            ]
          },
          {
            "denom": "regen",
            "exponent": 6
          }
        ],
        "base": "ibc/1B2F7017663D3C8A7AA73025AB7D4A35B9CDB841C1616C664A487D32344C4422",
        "name": "Regen Network",
        "display": "regen",
        "symbol": "REGEN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png"
        },
        "coingecko_id": "regen",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-29",
              "base_denom": "uregen",
              "chain_name": "regen"
            },
            "chain": {
              "channel_id": "channel-14"
            }
          }
        ]
      },
      {
        "description": "DVPN is the native token of the Sentinel Hub.",
        "denom_units": [
          {
            "denom": "ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D",
            "exponent": 0,
            "aliases": [
              "udvpn"
            ]
          },
          {
            "denom": "dvpn",
            "exponent": 6
          }
        ],
        "base": "ibc/6E2A72B5B5C2143E65069C2F8521094391330144DD85691DD443508BAFF9081D",
        "name": "Sentinel",
        "display": "dvpn",
        "symbol": "DVPN",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png"
        },
        "coingecko_id": "sentinel",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-40",
              "base_denom": "udvpn",
              "chain_name": "sentinel"
            },
            "chain": {
              "channel_id": "channel-15"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "stride",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-391",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/D24B4564BCD51D3D02D9987D92571EAC5915676A9BD6D9B0C1D0254CB8A5EA34",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-326",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/07F71BEE7FA84450268B4F6895417F12FBCD1792B57C98431F5210E42117B206",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-326",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-5"
            }
          }
        ]
      },
      {
        "description": "The native token of Stargaze",
        "denom_units": [
          {
            "denom": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
            "exponent": 0,
            "aliases": [
              "ustars"
            ]
          },
          {
            "denom": "stars",
            "exponent": 6
          }
        ],
        "base": "ibc/7EAE5BEF3A26B64AFBD89828AFDDB1DC7024A0276D22745201632C40E6E634D0",
        "name": "Stargaze",
        "display": "stars",
        "symbol": "STARS",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"
        },
        "coingecko_id": "stargaze",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-106",
              "base_denom": "ustars",
              "chain_name": "stargaze"
            },
            "chain": {
              "channel_id": "channel-19"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "terra",
    "assets": [
      {
        "description": "The native token of JUNO Chain",
        "denom_units": [
          {
            "denom": "ibc/F951C98B3D08879376970DD39F74907896391810FD40AF9B2357A02E9E82BBA5",
            "exponent": 0,
            "aliases": [
              "ujuno"
            ]
          },
          {
            "denom": "juno",
            "exponent": 6
          }
        ],
        "base": "ibc/F951C98B3D08879376970DD39F74907896391810FD40AF9B2357A02E9E82BBA5",
        "name": "Juno",
        "display": "juno",
        "symbol": "JUNO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg"
        },
        "coingecko_id": "juno-network",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-27",
              "base_denom": "ujuno",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ]
      },
      {
        "description": "The native token cw20 for Neta on Juno Chain",
        "type_asset": "cw20",
        "address": "juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr",
        "denom_units": [
          {
            "denom": "ibc/CDF7CEA3C13CD330FFC54F1CF36F8DF6B7BAF7B83C3DAFDFFA7948B5CCFD42EB",
            "exponent": 0,
            "aliases": [
              "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A"
            ]
          },
          {
            "denom": "neta",
            "exponent": 6
          }
        ],
        "base": "ibc/CDF7CEA3C13CD330FFC54F1CF36F8DF6B7BAF7B83C3DAFDFFA7948B5CCFD42EB",
        "name": "Neta",
        "display": "neta",
        "symbol": "NETA",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/neta.png"
        },
        "coingecko_id": "neta",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-27",
              "base_denom": "ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A",
              "chain_name": "juno"
            },
            "chain": {
              "channel_id": "channel-20"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/0471F1C4E7AFD3F07702BEF6DC365268D64570F7C1FDC98EA6098DD6DE59817B",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-72",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/EA7DF7F779C7F14E07172E5713E07356B55F01496CA649DDE46CF8FBF1A8466D",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-72",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/EB2CED20AB0466F18BE49285E56B31306D4C60438A022EA995BA65D5E3CF7E09",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-2",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-16"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "terra2",
    "assets": [
      {
        "description": "The native token of Secret Network",
        "denom_units": [
          {
            "denom": "ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD",
            "exponent": 0,
            "aliases": [
              "uscrt"
            ]
          },
          {
            "denom": "scrt",
            "exponent": 6
          }
        ],
        "base": "ibc/10BD6ED30BA132AB96F146D71A23B46B2FC19E7D79F52707DC91F2F3A45040AD",
        "name": "Secret Network",
        "display": "scrt",
        "symbol": "SCRT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg"
        },
        "coingecko_id": "secret",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-16",
              "base_denom": "uscrt",
              "chain_name": "secretnetwork"
            },
            "chain": {
              "channel_id": "channel-3"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "tgrade",
    "assets": [
      {
        "description": "The native EVM, governance and staking token of the Evmos Hub",
        "denom_units": [
          {
            "denom": "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72",
            "exponent": 0,
            "aliases": [
              "aevmos"
            ]
          },
          {
            "denom": "evmos",
            "exponent": 18
          }
        ],
        "base": "ibc/4B322204B4F59D770680FE4D7A565DDC3F37BFF035474B717476C66A4F83DD72",
        "name": "Evmos",
        "display": "evmos",
        "symbol": "EVMOS",
        "logo_URIs": {
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png"
        },
        "coingecko_id": "evmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-34",
              "base_denom": "aevmos",
              "chain_name": "evmos"
            },
            "chain": {
              "channel_id": "channel-9"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-263",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-263",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "umee",
    "assets": [
      {
        "description": "The native staking and governance token of the Cosmos Hub.",
        "denom_units": [
          {
            "denom": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            "exponent": 0,
            "aliases": [
              "uatom"
            ]
          },
          {
            "denom": "atom",
            "exponent": 6
          }
        ],
        "base": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
        "name": "Cosmos Hub Atom",
        "display": "atom",
        "symbol": "ATOM",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        },
        "coingecko_id": "cosmos",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-288",
              "base_denom": "uatom",
              "chain_name": "cosmoshub"
            },
            "chain": {
              "channel_id": "channel-1"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-184",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-184",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "unification",
    "assets": [
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-382",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-382",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  },
  {
    "chain_name": "vidulum",
    "assets": [
      {
        "description": "The native token of OKExChain",
        "denom_units": [
          {
            "denom": "ibc/6BCB31DF5429E8CA9DB008FFA69AE8EDD3E4EF7F33FB57C016E4E7060FDE0BE8",
            "exponent": 0,
            "aliases": [
              "wei"
            ]
          },
          {
            "denom": "okt",
            "exponent": 18
          }
        ],
        "base": "ibc/6BCB31DF5429E8CA9DB008FFA69AE8EDD3E4EF7F33FB57C016E4E7060FDE0BE8",
        "name": "OKExChain",
        "display": "okt",
        "symbol": "OKT",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png"
        },
        "coingecko_id": "okc-token",
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-14",
              "base_denom": "wei",
              "chain_name": "okexchain"
            },
            "chain": {
              "channel_id": "channel-2"
            }
          }
        ]
      },
      {
        "description": "The native token of Osmosis",
        "denom_units": [
          {
            "denom": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
            "exponent": 0,
            "aliases": [
              "uosmo"
            ]
          },
          {
            "denom": "osmo",
            "exponent": 6,
            "aliases": []
          }
        ],
        "base": "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
        "name": "Osmosis",
        "display": "osmo",
        "symbol": "OSMO",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        },
        "coingecko_id": "osmosis",
        "keywords": [
          "dex",
          "staking"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-124",
              "base_denom": "uosmo",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      },
      {
        "denom_units": [
          {
            "denom": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
            "exponent": 0,
            "aliases": [
              "uion"
            ]
          },
          {
            "denom": "ion",
            "exponent": 6
          }
        ],
        "base": "ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16",
        "name": "Ion",
        "display": "ion",
        "symbol": "ION",
        "logo_URIs": {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        },
        "coingecko_id": "ion",
        "keywords": [
          "memecoin"
        ],
        "traces": [
          {
            "type": "ibc",
            "counterparty": {
              "channel_id": "channel-124",
              "base_denom": "uion",
              "chain_name": "osmosis"
            },
            "chain": {
              "channel_id": "channel-0"
            }
          }
        ]
      }
    ]
  }
];
export default asset_lists;
    