import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'nibirutestnet',
  assets: [{
      description: 'The native token of Nibiru network',
      extendedDescription: 'Nibiru hosts a variety of ecosystem partners in a wide variety of consumer sectors. From RWAs (Coded Estate) to DeFi (Constella, NOM) to Gaming (Blockchain Game Alliance, IntoTheVerse), Nibiru is advancing multiple emerging blockchain narratives that will onboard the next billion users.',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denomUnits: [
        {
          denom: 'unibi',
          exponent: 0
        },
        {
          denom: 'nibi',
          exponent: 6
        },
        {
          denom: 'attonibi',
          exponent: 18
        }
      ],
      base: 'unibi',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Liquid Staked Nibiru (Eris)',
      extendedDescription: 'Liquid Staked Nibiru, powered by Eris Protocol\'s amplifier contracts. Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi/docs/learn/liquid-stake/',
        twitter: 'https://x.com/eris_protocol'
      },
      denomUnits: [{
          denom: 'tf/nibi1xsvylys33m0y3dpyz6he3xuv2rcdwtk843wg2xdvqhdty8wmr0wq9au5px/ampNIBIT',
          exponent: 0
        }, {
          denom: 'stNIBI',
          exponent: 6
        }],
      base: 'tf/nibi1xsvylys33m0y3dpyz6he3xuv2rcdwtk843wg2xdvqhdty8wmr0wq9au5px/ampNIBIT',
      name: 'Liquid Staked Nibiru (Eris)',
      display: 'stNIBI',
      symbol: 'stNIBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'nibiru',
            baseDenom: 'unibi'
          },
          provider: 'Eris Protocol'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;