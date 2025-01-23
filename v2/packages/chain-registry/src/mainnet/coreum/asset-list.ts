import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'coreum',
  assets: [
    {
      description: 'The native token of Coreum',
      denomUnits: [{
          denom: 'ucore',
          exponent: 0
        }, {
          denom: 'core',
          exponent: 6
        }],
      base: 'ucore',
      name: 'Coreum',
      display: 'core',
      symbol: 'COREUM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg'
      },
      coingeckoId: 'coreum',
      keywords: [
        'dex',
        'staking',
        'wasm',
        'assets',
        'nft',
        'XRPL'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.svg',
          theme: {
            primaryColorHex: '#24d494'
          }
        }],
      socials: {
        website: 'https://www.coreum.com/',
        twitter: 'https://twitter.com/CoreumOfficial'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'XRP bridged from XRPL',
      denomUnits: [{
          denom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
          exponent: 0,
          aliases: ['drop']
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      base: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          provider: 'Coreum'
        }],
      images: [{
          imageSync: {
            chainName: 'xrpl',
            baseDenom: 'drop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'SOLO bridged from XRPL',
      denomUnits: [{
          denom: 'xrpl11278ecf9e-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
          exponent: 0,
          aliases: ['xrpl11278ecf9e']
        }, {
          denom: 'solo',
          exponent: 15
        }],
      base: 'xrpl11278ecf9e-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      name: 'Solo',
      display: 'solo',
      symbol: 'SOLO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'xrpl11278ecf9e'
          },
          provider: 'Coreum'
        }],
      images: [{
          imageSync: {
            chainName: 'xrpl',
            baseDenom: 'xrpl11278ecf9e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.svg',
          theme: {
            primaryColorHex: '#ffffff'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'RLUSD bridged from XRPL',
      denomUnits: [{
          denom: 'xrpl570c00a604-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
          exponent: 0,
          aliases: ['xrpl570c00a604']
        }, {
          denom: 'rlusd',
          exponent: 15
        }],
      base: 'xrpl570c00a604-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      name: 'RLUSD',
      display: 'rlusd',
      symbol: 'RLUSD',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'xrpl',
            baseDenom: 'xrpl570c00a604'
          },
          provider: 'Coreum'
        }],
      coingeckoId: 'ripple-usd',
      images: [{
          imageSync: {
            chainName: 'xrpl',
            baseDenom: 'xrpl570c00a604'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.svg',
          theme: {
            primaryColorHex: '#1b90f7'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.svg'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'SARA is the utility native token of the Pulsara ecosystem. The burn or mint of the $SARA token will be decided by the community through proposals and voting.',
      denomUnits: [{
          denom: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
          exponent: 0
        }, {
          denom: 'sara',
          exponent: 6
        }],
      base: 'usara-core1r9gc0rnxnzpq33u82f44aufgdwvyxv4wyepyck98m9v2pxua6naqr8h03z',
      name: 'Sara',
      display: 'sara',
      symbol: 'SARA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg'
      },
      coingeckoId: 'pulsara',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/sara.svg',
          theme: {
            primaryColorHex: '#0517b1'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Liquid staking asset for COREUM, by Pulsara',
      denomUnits: [{
          denom: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
          exponent: 0
        }, {
          denom: 'licore',
          exponent: 6
        }],
      base: 'ulicore-core13gza3msdh8hegqxhgezll9quucsr63s0gp43k274xwt66k4e8pmq5zpnm9',
      name: 'liCORE',
      display: 'licore',
      symbol: 'LICORE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg'
      },
      coingeckoId: 'licore',
      keywords: [
        'dex',
        'staking',
        'assets'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/licore.svg',
          theme: {
            primaryColorHex: '#ea00c5'
          }
        }],
      socials: {
        website: 'https://www.pulsara.io',
        twitter: 'https://twitter.com/pulsara_io'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;