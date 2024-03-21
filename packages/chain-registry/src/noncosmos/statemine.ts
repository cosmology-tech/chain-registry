import type { Chain, AssetList, ChainVersions } from '@chain-registry/types'

export const statemineAssetList: AssetList = {
  "$schema": "../assetlist.schema.json",
  "chain_name": "statemine",
  "assets": [
    {
      "denom_units": [
        {
          "denom": "130",
          "exponent": 0
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "base": "130",
      "name": "Statemine",
      "display": "usdt",
      "symbol": "USDT",
      "coingecko_id": "tether"
    }
  ]
}

