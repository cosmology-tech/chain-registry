import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'meme',
  assets: [{
      description: 'MEME Token (MEME) is the native staking token of the MEME Chain',
      denomUnits: [{
          denom: 'umeme',
          exponent: 0
        }, {
          denom: 'meme',
          exponent: 6
        }],
      base: 'umeme',
      name: 'MEME',
      display: 'meme',
      symbol: 'MEME',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
      },
      coingeckoId: 'meme-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
          theme: {
            primaryColorHex: '#b7dcd8'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;