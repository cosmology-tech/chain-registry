import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'lava',
  assets: [{
      description: 'The native token of Lava',
      denomUnits: [{
          denom: 'ulava',
          exponent: 0
        }, {
          denom: 'lava',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ulava',
      name: 'Lava',
      display: 'lava',
      symbol: 'LAVA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png'
        }],
      keywords: [
        'modular',
        'data',
        'data access',
        'rpc',
        'staking',
        'dual staking',
        'indexing',
        'incentivized public rpc'
      ],
      socials: {
        website: 'https://lavanet.xyz',
        twitter: 'https://twitter.com/lavanetxyz'
      }
    }]
};
export default info;