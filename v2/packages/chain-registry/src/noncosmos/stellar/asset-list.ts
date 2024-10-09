import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stellar',
  assets: [{
      description: 'Native token of Stellar network',
      extendedDescription: 'The Stellar network is an open-sourced, public blockchain powered by the Stellar Consensus protocol (SCP), a proof-of-agreement (PoA) consensus mechanism. Thanks to PoA, the Stellar network is faster, cheaper, and far more energy-efficient than many other blockchains.\n\nIts core design makes it easy to create and issue digital assets that enable rapid payments at low-cost around the world. The Stellar network allows you to create your own currency or token within the network and distribute it digitally on a large scale. On the Stellar blockchain, you can create, send, and trade digital representations of almost any form of value such as – US dollars, Argentine pesos, gold, and real estate. Then, the network acts as a bridge that connects financial systems and makes global interoperability a reality.',
      denomUnits: [{
          denom: 'stroop',
          exponent: 0
        }, {
          denom: 'lumen',
          exponent: 7
        }],
      typeAsset: 'evm-base',
      base: 'stroop',
      name: 'Lumen',
      display: 'lumen',
      symbol: 'XLM',
      coingeckoId: 'stellar',
      socials: {
        website: 'https://stellar.org/',
        twitter: 'https://twitter.com/StellarOrg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.svg'
      }
    }]
};
export default info;