import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'coolcattestnet',
  assets: [{
      description: 'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denomUnits: [{
          denom: 'uccat',
          exponent: 0
        }, {
          denom: 'ccat',
          exponent: 6
        }],
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
      },
      keywords: [
        'nft',
        'staking',
        'games'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg'
        }]
    }]
};
export default info;