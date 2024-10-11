import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cronos',
  assets: [{
      description: 'Cronos is a blockchain platform developed by Crypto.com, designed to support DeFi, NFTs, and decentralized applications with fast and low-cost transactions.',
      extendedDescription: 'Cronos is a blockchain platform developed by Crypto.com to facilitate the creation and operation of decentralized applications (dApps), decentralized finance (DeFi) protocols, and non-fungible tokens (NFTs). By utilizing the Tendermint consensus engine and the Cosmos SDK, Cronos offers fast and low-cost transactions while ensuring high security and scalability. The platform is EVM-compatible, allowing developers to easily port their Ethereum-based dApps to Cronos. The native token, CRO, is used for transaction fees, staking, and governance, providing incentives for users to contribute to the network\'s security and participate in its governance. Cronos aims to accelerate the adoption of DeFi and NFTs by providing a robust and efficient blockchain infrastructure.',
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
      },
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    }]
};
export default info;