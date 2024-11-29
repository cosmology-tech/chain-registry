import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'cosmoshub',
  assets: [
    {
      description: 'ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.',
      extendedDescription: 'ATOM, the native cryptocurrency of the Cosmos network, is essential for achieving the project\'s goal of creating an \'Internet of Blockchains.\' Launched in 2019, Cosmos aims to solve the scalability, usability, and interoperability issues prevalent in existing blockchain ecosystems. The Cosmos Hub, the central blockchain of the network, uses ATOM for transaction fees, staking, and governance. By staking ATOM, users can earn rewards and participate in governance, influencing decisions on network upgrades and changes.\n\nCosmos leverages the Tendermint consensus algorithm to achieve high transaction throughput and fast finality. Its Inter-Blockchain Communication (IBC) protocol enables seamless data and value transfer between different blockchains, fostering a highly interconnected and collaborative ecosystem. The flexibility and scalability offered by Cosmos have attracted numerous projects, enhancing its utility and adoption. ATOM\'s role in securing the network and facilitating governance underscores its importance in the broader blockchain landscape.',
      denomUnits: [{
          denom: 'uatom',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'uatom',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingeckoId: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F04D72CF9B5D9C849BB278B691CDFA2241813327430EC9CDC83F8F4CA4CDC2B0',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-277',
            path: 'transfer/channel-277/erc20/tether/usdt'
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
    },
    {
      description: 'FX on Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
          exponent: 0,
          aliases: ['FX']
        }],
      typeAsset: 'ics20',
      base: 'ibc/4925E6ABA571A44D2BE0286D2D29AF42A294D0FF2BB16490149A1B26EAD33729',
      name: 'Function X',
      display: 'FX',
      symbol: 'FX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'FX',
            channelId: 'channel-10'
          },
          chain: {
            channelId: 'channel-585',
            path: 'transfer/channel-585/FX'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'fxcore',
            baseDenom: 'FX'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      }
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/74C4FE1EC3BDD66B02C691496371DDBB86DDE512C5BC072D76262C6C9B4B20D1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-3'
          },
          chain: {
            channelId: 'channel-292',
            path: 'transfer/channel-292/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primaryColorHex: '#04fbfb'
          }
        }]
    }
  ]
};
export default info;