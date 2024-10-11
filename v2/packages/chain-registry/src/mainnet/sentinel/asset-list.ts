import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'sentinel',
  assets: [{
      description: 'Sentinel is a decentralized VPN (dVPN) network that provides private and secure internet access by leveraging blockchain technology.',
      extendedDescription: 'Sentinel is a blockchain platform designed to offer decentralized, censorship-resistant internet access via a global network of autonomous dVPN applications. The Sentinel ecosystem includes a decentralized bandwidth marketplace, where users can monetize their unused bandwidth by sharing it with others. This decentralized approach enhances privacy and security, protecting users from traditional centralized VPN vulnerabilities. Sentinel\'s native token, DVPN, is used for transactions within the network, staking, and governance. By leveraging blockchain technology, Sentinel ensures that internet access remains private, secure, and resilient against censorship.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
          theme: {
            primaryColorHex: '#10a7ef'
          }
        }],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://x.com/SentinelDVPN'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;