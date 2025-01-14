import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'ggezchain',
  assets: [{
      description: 'The Governance Coin of the GGEZ1 Network.',
      denomUnits: [
        {
          denom: 'uggez1',
          exponent: 0
        },
        {
          denom: 'mggez1',
          exponent: 3
        },
        {
          denom: 'ggez1',
          exponent: 6
        }
      ],
      base: 'uggez1',
      name: 'GGEZ1',
      display: 'ggez1',
      symbol: 'GGEZ1',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggez1.svg',
          theme: {
            primaryColorHex: '#039abf'
          }
        }],
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'The ReFi Coin of the GGEZ1 Network.',
      denomUnits: [
        {
          denom: 'uggz',
          exponent: 0
        },
        {
          denom: 'mggz',
          exponent: 3
        },
        {
          denom: 'ggz',
          exponent: 6
        }
      ],
      typeAsset: 'sdk.coin',
      base: 'uggz',
      name: 'GGZ',
      display: 'uggz',
      symbol: 'GGZ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.svg',
          theme: {
            primaryColorHex: '#8400cd'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/ggz.svg'
      },
      socials: {
        website: 'https://ggez.one',
        twitter: 'https://x.com/ggez_one'
      }
    }]
};
export default info;