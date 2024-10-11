import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cryptoorgchain',
  assets: [
    {
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
    },
    {
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
    },
    {
      description: 'The native token of Stellar network, transferred via Solo Machine.',
      denomUnits: [{
          denom: 'ibc/34A1D4BF5FFCDB912F64FE71D54426D56970F873F1279983B69C713B3A62D10D',
          exponent: 0,
          aliases: ['stroop']
        }, {
          denom: 'lumen',
          exponent: 7
        }],
      typeAsset: 'ics20',
      base: 'ibc/34A1D4BF5FFCDB912F64FE71D54426D56970F873F1279983B69C713B3A62D10D',
      name: 'Lumen (Solo Machine)',
      display: 'lumen',
      symbol: 'XLM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cryptoorgchain',
            baseDenom: 'baseXLM',
            channelId: 'channel-JEnb'
          },
          chain: {
            channelId: 'channel-46',
            path: 'transfer/channel-46/baseXLM'
          }
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
      }
    }
  ]
};
export default info;