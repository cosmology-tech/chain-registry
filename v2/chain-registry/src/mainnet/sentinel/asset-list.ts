import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sentinel',
  assets: [{
      description: 'DVPN is the native token of the Sentinel Hub.',
      denomUnits: [{
          denom: 'udvpn',
          exponent: 0
        }, {
          denom: 'dvpn',
          exponent: 6
        }],
      base: 'udvpn',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
      },
      coingeckoId: 'sentinel',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://twitter.com/SentinelVPN'
      }
    }]
};
export default info;