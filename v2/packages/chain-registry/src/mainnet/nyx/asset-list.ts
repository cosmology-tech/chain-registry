import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nyx',
  assets: [{
      description: 'NYX Token (NYX) is the Nym Network\'s native staking and governance token.',
      denomUnits: [{
          denom: 'unyx',
          exponent: 0
        }, {
          denom: 'nyx',
          exponent: 6
        }],
      base: 'unyx',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nyx.png',
          theme: {
            primaryColorHex: '#f45135'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'NYM Token (NYM) is the Nym Network\'s native utility token, used as the primary means to incentivize mixnet node operators.',
      denomUnits: [{
          denom: 'unym',
          exponent: 0
        }, {
          denom: 'nym',
          exponent: 6
        }],
      base: 'unym',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg'
      },
      coingeckoId: 'nym',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_light.svg',
          theme: {
            darkMode: false,
            circle: true,
            primaryColorHex: '#151525'
          }
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyx/images/nym_token_dark.svg',
          theme: {
            darkMode: true,
            circle: true,
            primaryColorHex: '#141424'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;