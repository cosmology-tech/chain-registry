export default {
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
      "ibc": {
        "counterparty": {
          "channel": "channel-35",
          "denom": "uakt",
          "chain_name": "akash"
        },
        "chain": {
          "channel": "channel-29"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-2",
          "denom": "umntl",
          "chain_name": "assetmantle"
        },
        "chain": {
          "channel": "channel-83"
        }
      }
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
      "coingecko_id": "axelar-network",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "uaxl",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png"
      },
      "coingecko_id": "usd-coin",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "uusdc",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/frax.png"
      },
      "coingecko_id": "frax",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "frax-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.png"
      },
      "coingecko_id": "dai",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "dai-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdt.png"
      },
      "coingecko_id": "tether",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "uusdt",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/weth.png"
      },
      "coingecko_id": "weth",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "weth-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/wbtc.png"
      },
      "coingecko_id": "wrapped-bitcoin",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "wbtc-satoshi",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/aave.svg"
      },
      "coingecko_id": "aave",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "aave-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ape.svg"
      },
      "coingecko_id": "apecoin",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "ape-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
    },
    {
      "description": "Axie Infinity Shard on Axelar",
      "type_asset": "erc20",
      "address": "0xbb0e17ef65f82ab018d8edd776e8dd940327b28b",
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/axs.svg"
      },
      "coingecko_id": "axie-infinity",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "axs-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/link.svg"
      },
      "coingecko_id": "chainlink",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "link-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/mkr.svg"
      },
      "coingecko_id": "maker",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "mkr-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/rai.svg"
      },
      "coingecko_id": "rai",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "rai-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/shib.svg"
      },
      "coingecko_id": "shiba-inu",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "shib-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
      },
      "coingecko_id": "staked-ether",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "steth-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/uni.svg"
      },
      "coingecko_id": "uniswap",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "uni-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/xcn.svg"
      },
      "coingecko_id": "chain-2",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "xcn-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png"
      },
      "coingecko_id": "polkadot",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "dot-planck",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.svg",
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/moonbeam/images/glmr.png"
      },
      "coingecko_id": "wrapped-moonbeam",
      "ibc": {
        "counterparty": {
          "channel": "channel-4",
          "denom": "wglmr-wei",
          "chain_name": "axelar"
        },
        "chain": {
          "channel": "channel-71"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-10",
          "denom": "ubcna",
          "chain_name": "bitcanna"
        },
        "chain": {
          "channel": "channel-50"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ubtsg",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft2D8E7041556CE93E1EFD66C07C45D551A6AAAE09",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft25B30C386CDDEBD1413D5AE1180956AE9EB3B9F7",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft575B10B0CEE2C164D9ED6A96313496F164A9607C",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft56664FC98A2CF5F4FBAC3566D1A11D891AD88305",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft52EEB0EE509AC546ED92EAC8591F731F213DDD16",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ftE4903ECC861CA45F2C2BC7EAB8255D2E6E87A33A",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft85AE1716C5E39EA6D64BBD7898C3899A7B500626",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft99091610CCC66F4277C66D14AF2BC4C5EE52E27A",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft387C1C279D962ED80C09C1D592A92C4275FD7C5D",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft24C9FA4F10B0F235F4A815B15FC774E046A2B2EB",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft7020C2A8E984EEBCBB383E91CD6FBB067BB2272B",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft2DD67F5D99E9A141142B48474FA7B6B3FF00A3FE",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ft4B030260D99E3ABE2B604EA2B33BAF3C085CDA12",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ftD4B6290EDEE1EC7B97AB5A1DC6C177EFD08ADCC3",
          "chain_name": "bitsong"
        },
        "chain": {
          "channel": "channel-17"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-11",
          "denom": "uhuahua",
          "chain_name": "chihuahua"
        },
        "chain": {
          "channel": "channel-28"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-18",
          "denom": "ucmdx",
          "chain_name": "comdex"
        },
        "chain": {
          "channel": "channel-36"
        }
      }
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
      "name": "Cosmos",
      "display": "atom",
      "symbol": "ATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "coingecko_id": "cosmos",
      "ibc": {
        "counterparty": {
          "channel": "channel-207",
          "denom": "uatom",
          "chain_name": "cosmoshub"
        },
        "chain": {
          "channel": "channel-1"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-2",
          "denom": "udig",
          "chain_name": "dig"
        },
        "chain": {
          "channel": "channel-37"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-15",
          "denom": "ungm",
          "chain_name": "emoney"
        },
        "chain": {
          "channel": "channel-9"
        }
      }
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
          "denom": "EUR",
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
      "ibc": {
        "counterparty": {
          "channel": "channel-15",
          "denom": "eeur",
          "chain_name": "emoney"
        },
        "chain": {
          "channel": "channel-9"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-42",
          "denom": "uosmo",
          "chain_name": "osmosis"
        },
        "chain": {
          "channel": "channel-0"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-42",
          "denom": "uion",
          "chain_name": "osmosis"
        },
        "chain": {
          "channel": "channel-0"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-37",
          "denom": "uxprt",
          "chain_name": "persistence"
        },
        "chain": {
          "channel": "channel-33"
        }
      }
    },
    {
      "description": "pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.",
      "denom_units": [
        {
          "denom": "ibc/0E13238C0508440A981BD9E876E89E0C0CCA70E2FE21930B0D4F2633673561AC",
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
      "base": "ibc/0E13238C0508440A981BD9E876E89E0C0CCA70E2FE21930B0D4F2633673561AC",
      "name": "pSTAKE Finance",
      "display": "pstake",
      "symbol": "PSTAKE",
      "ibc": {
        "counterparty": {
          "channel": "channel-37",
          "denom": "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
          "chain_name": "persistence"
        },
        "chain": {
          "channel": "channel-33"
        }
      },
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
      "ibc": {
        "counterparty": {
          "channel": "channel-8",
          "denom": "uscrt",
          "chain_name": "secretnetwork"
        },
        "chain": {
          "channel": "channel-48"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-14",
          "denom": "rowan",
          "chain_name": "sifchain"
        },
        "chain": {
          "channel": "channel-5"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-5",
          "denom": "ustars",
          "chain_name": "stargaze"
        },
        "chain": {
          "channel": "channel-20"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uluna",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uusd",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ukrw",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uaud",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ucad",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uchf",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ucny",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "udkk",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ueur",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ugbp",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uhkd",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uidr",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uinr",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "ujpy",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "umnt",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "umyr",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "unok",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uphp",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "usdr",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "usek",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "usgd",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "uthb",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
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
      "ibc": {
        "counterparty": {
          "channel": "channel-20",
          "denom": "utwd",
          "chain_name": "terra"
        },
        "chain": {
          "channel": "channel-27"
        }
      }
    }
  ]
};