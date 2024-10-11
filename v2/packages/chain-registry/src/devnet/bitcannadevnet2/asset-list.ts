import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bitcannadevnet2',
  assets: [{
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ubcna',
          exponent: 0
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
      },
      coingeckoId: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;