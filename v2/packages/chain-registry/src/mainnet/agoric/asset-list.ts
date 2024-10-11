import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'agoric',
  assets: [{
      description: 'Agoric is a smart contract platform that uses JavaScript to enable developers to build secure and scalable decentralized applications (dApps) easily.',
      extendedDescription: 'Agoric leverages the popular JavaScript programming language to provide a secure and scalable platform for building decentralized applications (dApps). By using a familiar language, Agoric aims to lower the entry barriers for developers and promote the widespread adoption of blockchain technology. The platform\'s native token, BLD, is used for staking, securing the network, and governance. Agoric\'s innovative approach focuses on enabling rapid development and deployment of dApps, fostering a robust ecosystem of interoperable blockchain applications.',
      denomUnits: [{
          denom: 'ubld',
          exponent: 0
        }, {
          denom: 'bld',
          exponent: 6
        }],
      base: 'ubld',
      name: 'Agoric',
      display: 'bld',
      symbol: 'BLD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg'
      },
      coingeckoId: 'agoric',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/bld.svg',
          theme: {
            primaryColorHex: '#c42b44'
          }
        }],
      socials: {
        website: 'https://agoric.com/',
        twitter: 'https://twitter.com/agoric'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'IST is the stable token used by the Agoric chain for execution fees and commerce.',
      denomUnits: [{
          denom: 'uist',
          exponent: 0
        }, {
          denom: 'ist',
          exponent: 6
        }],
      base: 'uist',
      name: 'Inter Stable Token',
      display: 'ist',
      symbol: 'IST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg'
      },
      coingeckoId: 'inter-stable-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/agoric/images/ist.svg',
          theme: {
            primaryColorHex: '#d485e2'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;