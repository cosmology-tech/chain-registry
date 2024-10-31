import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'haqq',
  assets: [{
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denomUnits: [{
          denom: 'aISLM',
          exponent: 0
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'aISLM',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingeckoId: 'islamic-coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      socials: {
        website: 'https://islamiccoin.net',
        twitter: 'https://x.com/islamic_coin'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primaryColorHex: '#04cd80'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Deenar gold-backed stablecoin',
      extendedDescription: 'Deenar Gold (DEEN) is a 1:1 gold-backed halal stablecoin with the ability to physically deliver gold. 1 DEEN = 1 gram of gold.',
      denomUnits: [{
          denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
          exponent: 0
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      typeAsset: 'erc20',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'comex',
            baseDenom: 'XAU'
          },
          provider: 'Deenar'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      coingeckoId: 'deenar-gold',
      socials: {
        website: 'https://deenar.com',
        twitter: 'https://x.com/DeenarGold'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primaryColorHex: '#ffbc05',
            circle: true
          }
        }]
    }]
};
export default info;