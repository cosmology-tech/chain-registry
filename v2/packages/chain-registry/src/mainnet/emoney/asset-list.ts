import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'emoney',
  assets: [
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denomUnits: [{
          denom: 'ungm',
          exponent: 0
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ungm',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingeckoId: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
          theme: {
            primaryColorHex: '#caf2ea'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denomUnits: [{
          denom: 'eeur',
          exponent: 0
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'eeur',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingeckoId: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg',
          theme: {
            primaryColorHex: '#f4c808'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denomUnits: [{
          denom: 'echf',
          exponent: 0
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'echf',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg',
          theme: {
            primaryColorHex: '#db2b1c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denomUnits: [{
          denom: 'enok',
          exponent: 0
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'enok',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg',
          theme: {
            primaryColorHex: '#cb142d'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denomUnits: [{
          denom: 'edkk',
          exponent: 0
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'edkk',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg',
          theme: {
            primaryColorHex: '#ac0c34'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denomUnits: [{
          denom: 'esek',
          exponent: 0
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'esek',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg',
          theme: {
            primaryColorHex: '#045493'
          }
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;