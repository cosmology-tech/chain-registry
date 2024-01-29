import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../../assetlist.schema.json",
  "chain_name": "elystestnet",
  "assets": [
    {
      "description": "The native token of Elys Network",
      "denom_units": [
        {
          "denom": "uelys",
          "exponent": 0,
          "aliases": [
            "microelys"
          ]
        },
        {
          "denom": "melys",
          "exponent": 3,
          "aliases": [
            "millielys"
          ]
        },
        {
          "denom": "elys",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "uelys",
      "name": "Elys Network",
      "display": "elys",
      "symbol": "ELYS",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png"
      },
      "coingecko_id": "elys",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/elys.png"
        }
      ]
    },
    {
      "description": "Eden token definition",
      "denom_units": [
        {
          "denom": "ueden",
          "exponent": 0,
          "aliases": [
            "microeden"
          ]
        },
        {
          "denom": "meden",
          "exponent": 3,
          "aliases": [
            "millieden"
          ]
        },
        {
          "denom": "eden",
          "exponent": 6,
          "aliases": []
        }
      ],
      "base": "ueden",
      "name": "Eden",
      "display": "eden",
      "symbol": "EDEN",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/elystestnet/images/eden.png"
        }
      ]
    }
  ]
};
export default info;