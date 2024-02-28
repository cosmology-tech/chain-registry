import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "celestiatestnet3",
  "assets": [
    {
      "description": "The native staking and governance token of the Theta testnet version of the Cosmos Hub.",
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
      "name": "Cosmos",
      "display": "atom",
      "symbol": "ATOM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-3152",
            "base_denom": "uatom",
            "chain_name": "cosmoshubtestnet"
          },
          "chain": {
            "channel_id": "channel-0"
          }
        }
      ]
    },
    {
      "description": "The native token of Neutron chain",
      "denom_units": [
        {
          "denom": "ibc/4E41ED8F3DCAEA15F4D6ADC6EDD7C04A676160735C9710B904B7BF53525B56D6",
          "exponent": 0,
          "aliases": [
            "untrn"
          ]
        },
        {
          "denom": "ntrn",
          "exponent": 6
        }
      ],
      "base": "ibc/4E41ED8F3DCAEA15F4D6ADC6EDD7C04A676160735C9710B904B7BF53525B56D6",
      "name": "Neutron Testnet",
      "display": "ntrn",
      "symbol": "NTRN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-160",
            "base_denom": "untrn",
            "chain_name": "neutrontestnet"
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
          "denom": "ibc/57358392CD709883E95F5E572EA7BB3D7F8EF6621745F736988BE00D7EA8B611",
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
      "base": "ibc/57358392CD709883E95F5E572EA7BB3D7F8EF6621745F736988BE00D7EA8B611",
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
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4370",
            "base_denom": "uosmo",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-25"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/42B036F5EA1A1A96DA3F48DAF008B7A533EF3F7014BB7A2A9844782040152A09",
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
      "base": "ibc/42B036F5EA1A1A96DA3F48DAF008B7A533EF3F7014BB7A2A9844782040152A09",
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
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4370",
            "base_denom": "uion",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-25"
          }
        }
      ]
    },
    {
      "denom_units": [
        {
          "denom": "ibc/7A6B40CBBF55049F9D43CC2C7856AEABC4E7E2A56CC773AA28393AD49B83E1D8",
          "exponent": 0,
          "aliases": [
            "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz"
          ]
        },
        {
          "denom": "willyz",
          "exponent": 6
        }
      ],
      "base": "ibc/7A6B40CBBF55049F9D43CC2C7856AEABC4E7E2A56CC773AA28393AD49B83E1D8",
      "name": "Willyz",
      "display": "willyz",
      "symbol": "WILLYZ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
      },
      "keywords": [
        "memecoin"
      ],
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/osmosistestnet/images/willyz.svg"
        }
      ],
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channel_id": "channel-4370",
            "base_denom": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-25"
          }
        }
      ]
    }
  ]
};
export default assets;
    