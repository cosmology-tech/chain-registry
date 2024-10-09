import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cronos',
  assets: [{
      description: 'Cronos Chain - Get Instant DApp Portability with EVM Support',
      denomUnits: [{
          denom: 'basecro',
          exponent: 0
        }, {
          denom: 'cro',
          exponent: 18
        }],
      base: 'basecro',
      name: 'Cronos',
      display: 'cro',
      symbol: 'CRO',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro'
          },
          provider: 'Cronos'
        }],
      images: [{
          imageSync: {
            chainName: 'cryptoorgchain',
            baseDenom: 'basecro'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
      }
    }, {
      description: 'Tether USDt on Cronos',
      denomUnits: [{
          denom: 'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9106F2626880DF7FAD30621F355423B2A7523D8E2274475F009644D708A90682',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-125'
          },
          chain: {
            channelId: 'channel-11',
            path: 'transfer/channel-11/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    }]
};
export default info;