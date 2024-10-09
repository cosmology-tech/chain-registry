import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: '8ball',
  assets: [{
      description: 'The native staking token of 8ball.',
      denomUnits: [{
          denom: 'uebl',
          exponent: 0
        }, {
          denom: 'ebl',
          exponent: 6
        }],
      base: 'uebl',
      name: '8ball',
      display: 'ebl',
      symbol: 'EBL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
      },
      coingeckoId: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
        }]
    }]
};
export default info;