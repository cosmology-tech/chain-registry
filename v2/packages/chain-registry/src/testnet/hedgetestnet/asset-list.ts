import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'hedgetestnet',
  assets: [{
      description: 'The native staking token of the Hedge blockchain.',
      denomUnits: [{
          denom: 'uhedge',
          exponent: 0
        }, {
          denom: 'hedge',
          exponent: 6
        }],
      base: 'uhedge',
      name: 'Berberis HEDGE',
      display: 'hedge',
      symbol: 'HEDGE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
        }]
    }]
};
export default info;