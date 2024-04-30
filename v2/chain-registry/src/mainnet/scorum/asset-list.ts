import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'scorum',
  assets: [
    {
      description: 'The native token of Scorum',
      extendedDescription: 'Scorum is a dynamic Layer-1 blockchain powered by Cosmos, designed to redefine the gaming and entertainment industries. Currently, it supports Aviatrix, a compelling crash game that not only leverages blockchain technology for secure and transparent gaming outcomes but also utilizes it for the integration of Non-Fungible Tokens (NFTs). Central to Scorum’s ecosystem is the SCR token, which supports both Aviatrix and future applications set to expand the platform’s offerings. The adoption of the Inter-Blockchain Communication protocol significantly enhances Scorum’s interoperability and scalability, paving the way for its ongoing expansion and the development of innovative, blockchain-powered entertainment solutions.',
      denomUnits: [{
          denom: 'nscr',
          exponent: 0
        }, {
          denom: 'scr',
          exponent: 9
        }],
      base: 'nscr',
      name: 'Scorum',
      display: 'scr',
      symbol: 'SCR',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
        }],
      socials: {
        website: 'https://scorum.network',
        twitter: 'https://twitter.com/scorum_en'
      }
    },
    {
      description: 'Scorum Power used for internal mechanics and staking',
      denomUnits: [{
          denom: 'nsp',
          exponent: 0
        }, {
          denom: 'sp',
          exponent: 9
        }],
      base: 'nsp',
      name: 'Scorum Power',
      display: 'sp',
      symbol: 'SP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/sp.svg'
        }]
    },
    {
      description: 'Virtual(non-transferable) coin used to pay gas',
      denomUnits: [{
          denom: 'gas',
          exponent: 0
        }],
      base: 'gas',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg'
        }]
    }
  ]
};
export default info;