import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kichain',
  assets: [{
      description: 'The native token of Ki Chain',
      denomUnits: [{
          denom: 'uxki',
          exponent: 0
        }, {
          denom: 'xki',
          exponent: 6
        }],
      base: 'uxki',
      name: 'Ki',
      display: 'xki',
      symbol: 'XKI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
      },
      coingeckoId: 'ki',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
          theme: {
            primaryColorHex: '#1c04fc'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'ELEVENPARIS loyalty token on KiChain',
      typeAsset: 'cw20',
      address: 'ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      denomUnits: [{
          denom: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
          exponent: 0
        }, {
          denom: 'lvn',
          exponent: 6
        }],
      base: 'cw20:ki1dt3lk455ed360pna38fkhqn0p8y44qndsr77qu73ghyaz2zv4whq83mwdy',
      name: 'LVN',
      display: 'lvn',
      symbol: 'LVN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/lvn.png',
          theme: {
            primaryColorHex: '#683480'
          }
        }]
    }]
};
export default info;