import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'vincechaintestnet',
  assets: [{
      description: 'Vince Chain is an Industry-Grade Blockchain For DeFi, Remote work, Gaming, Web3 and will power the new internet.',
      denomUnits: [{
          denom: 'avce',
          exponent: 0
        }, {
          denom: 'vce',
          exponent: 18
        }],
      base: 'avce',
      name: 'VinceChain',
      display: 'vce',
      symbol: 'VCE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;