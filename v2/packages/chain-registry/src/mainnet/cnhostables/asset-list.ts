import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cnhostables',
  assets: [{
      description: 'CNHO Stables Network is designed to facilitate the real world asset in Cosmos ecosystem. Starting from non USD stablecoins and  stocks to real estates, the goal is to provide a new tool for the under development regions to invest in the future and pay globally. The native token is CNHO, pegged 1:1 on CNH.',
      denomUnits: [{
          denom: 'ucnho',
          exponent: 0
        }, {
          denom: 'CNHO',
          exponent: 6
        }],
      base: 'ucnho',
      name: 'CNHO Stables',
      display: 'CNHO',
      symbol: 'CNHO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.svg'
      },
      keywords: ['CNHO'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cnhostables/images/chain.svg',
          theme: {
            primaryColorHex: '#708ffc'
          }
        }],
      socials: {
        website: 'https://cnho.io/',
        twitter: 'https://twitter.com/cnho_io'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;