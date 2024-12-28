import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'titannettestnet',
  assets: [{
      description: 'TTNT is the native token of the Titan Network testnet, serving as a medium of value, staking token, and transparency mechanism for the ecosystem.',
      extended_description: 'TTNT plays three essential roles in the Titan Network testnet ecosystem. As a medium of value, it enables customers to access network resources (computing, storage, and bandwidth) and allows resource providers to monetize their infrastructure, with all network transactions conducted in TTNT.\n\nThrough its staking mechanism based on Cosmos SDK, TTNT implements Delegated Proof of Stake for network security and consensus, rewarding participants who contribute to network stability.\n\nThe public chain architecture ensures transparency by recording all resource rentals and rewards, creating trust between resource providers and customers.',
      denom_units: [{
          denom: 'uttnt',
          exponent: 0
        }, {
          denom: 'ttnt',
          exponent: 6
        }],
      base: 'uttnt',
      name: 'Titan Testnet TTNT',
      display: 'ttnt',
      symbol: 'TTNT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'TNT4 is the incentive token of the Titan Network\'s Galileo testnet, rewarding contributors who provide bandwidth resources for commercial use.',
      extended_description: 'TNT4 serves as the reward mechanism in the Titan Network\'s Galileo testnet phase. Node operators earn TNT4 when their contributed bandwidth resources are utilized by commercial clients. This incentive structure validates both resource provision and real business usage in the test environment.\n\nTNT4 holders will be able to exchange their tokens for native TNT tokens upon mainnet launch, ensuring early contributors are rewarded for supporting the network\'s development and commercial adoption.',
      denom_units: [{
          denom: 'utnt4',
          exponent: 0
        }, {
          denom: 'tnt4',
          exponent: 2
        }],
      base: 'utnt4',
      name: 'Titan Testnet TNT4',
      display: 'tnt4',
      symbol: 'TNT4',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/tnt4.svg',
          theme: {
            primary_color_hex: '#272d45'
          }
        }],
      socials: {
        website: 'https://titannet.io',
        twitter: 'https://twitter.com/Titannet_dao'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;