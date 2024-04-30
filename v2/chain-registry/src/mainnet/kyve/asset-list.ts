import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kyve',
  assets: [{
      description: 'The native utility token of the KYVE network.',
      denomUnits: [{
          denom: 'ukyve',
          exponent: 0
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'ukyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      coingeckoId: 'kyve-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
        }],
      socials: {
        website: 'https://www.kyve.network/',
        twitter: 'https://twitter.com/KYVENetwork'
      }
    }]
};
export default info;