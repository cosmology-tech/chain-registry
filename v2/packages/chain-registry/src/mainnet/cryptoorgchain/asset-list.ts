import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cryptoorgchain',
  assets: [{
      description: 'CRO is the native token of the Crypto.org Chain, referred to as Native CRO.',
      denomUnits: [{
          denom: 'basecro',
          exponent: 0
        }, {
          denom: 'cro',
          exponent: 8
        }],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      },
      coingeckoId: 'crypto-com-chain',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }, {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
          theme: {
            primaryColorHex: '#0c2c71'
          }
        }],
      socials: {
        website: 'https://cronos.org/',
        twitter: 'https://twitter.com/cronos_chain'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'Synthetic XLM pegged 1:1 by Crypto.com',
      denomUnits: [{
          denom: 'baseXLM',
          exponent: 0,
          aliases: ['stroop']
        }, {
          denom: 'lumen',
          exponent: 7
        }],
      base: 'baseXLM',
      name: 'Lumen (XLM) pegged token',
      display: 'lumen',
      symbol: 'XLM',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'stellar',
            baseDenom: 'stroop'
          },
          provider: 'Crypto.com'
        }],
      images: [{
          imageSync: {
            chainName: 'stellar',
            baseDenom: 'stroop'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.svg',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/stellar/images/xlm.svg'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;