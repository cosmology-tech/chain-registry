import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'self',
  assets: [{
      description: 'The native staking token of Self Chain.',
      denomUnits: [{
          denom: 'uslf',
          exponent: 0
        }, {
          denom: 'slf',
          exponent: 6
        }],
      base: 'uslf',
      name: 'Self',
      display: 'slf',
      symbol: 'SLF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
      },
      coingeckoId: 'self-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
          theme: {
            primaryColorHex: '#9454f1'
          }
        }],
      socials: {
        website: 'https://selfchain.xyz',
        twitter: 'https://x.com/selfchainxyz'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;