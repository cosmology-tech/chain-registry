import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'bostrom',
  assets: [
    {
      description: 'The staking token of Bostrom',
      denomUnits: [{
          denom: 'boot',
          exponent: 0,
          aliases: ['boot']
        }],
      base: 'boot',
      name: 'Bostrom',
      display: 'boot',
      symbol: 'BOOT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
      },
      coingeckoId: 'bostrom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
        }]
    },
    {
      description: 'The liquid staking token of Bostrom',
      denomUnits: [{
          denom: 'hydrogen',
          exponent: 0,
          aliases: ['hydrogen']
        }],
      base: 'hydrogen',
      name: 'Bostrom Hydrogen',
      display: 'hydrogen',
      symbol: 'HYDROGEN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/hydrogen.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'milliampere',
          exponent: 0,
          aliases: ['milliampere']
        }, {
          denom: 'ampere',
          exponent: 3,
          aliases: ['ampere']
        }],
      base: 'milliampere',
      name: 'Bostrom Ampere',
      display: 'ampere',
      symbol: 'A',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/ampere.svg'
        }]
    },
    {
      description: 'The resource token of Bostrom',
      denomUnits: [{
          denom: 'millivolt',
          exponent: 0,
          aliases: ['millivolt']
        }, {
          denom: 'volt',
          exponent: 3,
          aliases: ['volt']
        }],
      base: 'millivolt',
      name: 'Bostrom Volt',
      display: 'volt',
      symbol: 'V',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/volt.svg'
        }]
    },
    {
      description: 'The staking token of Cyber',
      denomUnits: [{
          denom: 'tocyb',
          exponent: 0,
          aliases: ['tocyb']
        }],
      base: 'tocyb',
      name: 'Bostrom Tocyb',
      display: 'tocyb',
      symbol: 'TOCYB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/tocyb.svg'
        }]
    }
  ]
};
export default info;