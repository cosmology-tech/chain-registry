import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'xrpl',
  assets: [{
      description: 'Native token of Ripple XRP Ledger',
      extendedDescription: 'The XRP Ledger: The Blockchain Built for Business\n\nThe XRP Ledger (XRPL) is a decentralized, public blockchain led by a global community of businesses and developers looking to solve problems and create value.\n\nProven reliable over more than a decade of error-free functioning, the XRPL offers streamlined development, low transaction costs, high performance, and sustainability. So you can build with confidence–and move your most critical projects forward.',
      denomUnits: [{
          denom: 'drop',
          exponent: 0
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      typeAsset: 'unknown',
      base: 'drop',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      coingeckoId: 'ripple',
      socials: {
        website: 'https://xrpl.org/',
        twitter: 'https://twitter.com/Ripple'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      }
    }]
};
export default info;