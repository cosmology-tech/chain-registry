import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  "chain_name": "entrypointtestnet",
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
            "channel_id": "channel-1543",
            "base_denom": "uosmo",
            "chain_name": "osmosistestnet"
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
            "channel_id": "channel-1543",
            "base_denom": "uion",
            "chain_name": "osmosistestnet"
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
          "denom": "ibc/BB012F1C95C818F6C959D638595984F4D3916F89E1C159FF73F6B130E0ADFD33",
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
      "base": "ibc/BB012F1C95C818F6C959D638595984F4D3916F89E1C159FF73F6B130E0ADFD33",
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
            "channel_id": "channel-1543",
            "base_denom": "factory/osmo1zlkzu72774ynac53necz46u4ycqtp36wedrar0/willyz",
            "chain_name": "osmosistestnet"
          },
          "chain": {
            "channel_id": "channel-0"
          }
        }
      ]
    }
  ]
};
export default assets;
    