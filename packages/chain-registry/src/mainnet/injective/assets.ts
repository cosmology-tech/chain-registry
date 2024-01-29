import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "injective",
  "assets": [
    {
      "description": "The INJ token is the native governance token for the Injective chain.",
      "denom_units": [
        {
          "denom": "inj",
          "exponent": 0
        },
        {
          "denom": "INJ",
          "exponent": 18
        }
      ],
      "base": "inj",
      "name": "Injective",
      "display": "INJ",
      "symbol": "INJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
      },
      "coingecko_id": "injective-protocol",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png",
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg"
        }
      ]
    },
    {
      "description": "Tether USDt on Injective",
      "denom_units": [
        {
          "denom": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "type_asset": "ics20",
      "base": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
      "name": "Tether USDt",
      "display": "usdt",
      "symbol": "USDt",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt",
            "channel_id": "channel-122"
          },
          "chain": {
            "channel_id": "channel-143",
            "path": "transfer/channel-143/erc20/tether/usdt"
          }
        }
      ],
      "images": [
        {
          "image_sync": {
            "chain_name": "kava",
            "base_denom": "erc20/tether/usdt"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
        }
      ],
      "logo_URIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      }
    },
    {
      "description": "ERIS liquid staked INJ",
      "denom_units": [
        {
          "denom": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
          "exponent": 0
        },
        {
          "denom": "ampINJ",
          "exponent": 6
        }
      ],
      "base": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
      "name": "ERIS Amplified INJ",
      "display": "ampINJ",
      "symbol": "ampINJ",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png"
        }
      ]
    },
    {
      "description": "$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world",
      "denom_units": [
        {
          "denom": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
          "exponent": 0
        },
        {
          "denom": "autism",
          "exponent": 6
        }
      ],
      "base": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
      "name": "Autism",
      "display": "autism",
      "symbol": "AUTISM",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
      },
      "coingecko_id": "autism",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png"
        }
      ]
    },
    {
      "description": "The first meme coin on Injective. It’s a dog, but he has nunchucks",
      "denom_units": [
        {
          "denom": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
          "exponent": 0
        },
        {
          "denom": "NINJA",
          "exponent": 6
        }
      ],
      "base": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
      "name": "Dog wif nunchucks",
      "display": "NINJA",
      "symbol": "NINJA",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
      },
      "coingecko_id": "dog-wif-nuchucks",
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png"
        }
      ]
    },
    {
      "description": "The $WGMI Token - We Gonna Make It. Are you ready?",
      "denom_units": [
        {
          "denom": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
          "exponent": 0
        },
        {
          "denom": "WGMI",
          "exponent": 6
        }
      ],
      "base": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
      "name": "WGMI",
      "display": "WGMI",
      "symbol": "WGMI",
      "logo_URIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
      },
      "images": [
        {
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png"
        }
      ]
    }
  ]
};
export default info;