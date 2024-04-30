import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'evmos',
  assets: [
    {
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denomUnits: [{
          denom: 'aevmos',
          exponent: 0
        }, {
          denom: 'evmos',
          exponent: 18
        }],
      base: 'aevmos',
      name: 'Evmos',
      display: 'evmos',
      symbol: 'EVMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
      },
      coingeckoId: 'evmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg'
        }],
      socials: {
        website: 'https://evmos.org/',
        twitter: 'https://twitter.com/EvmosOrg'
      }
    },
    {
      description: 'Tether USDt on Evmos',
      denomUnits: [{
          denom: 'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/95F4898F70B1E3765715808C57E955034419200A7BB6DDECBEAA5FD3AA3DF7D5',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-117'
          },
          chain: {
            channelId: 'channel-83',
            path: 'transfer/channel-83/erc20/tether/usdt'
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
    },
    {
      description: 'The token of Neokingdom DAO.',
      extendedDescription: 'Neokingdom DAO wants to make employment fairer, by facilitating both web3 and real-world businesses to operate as Decentralized Autonomous Organizations (DAOs).',
      denomUnits: [{
          denom: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
          exponent: 0
        }, {
          denom: 'neok',
          exponent: 18
        }],
      base: 'erc20/0x655ecB57432CC1370f65e5dc2309588b71b473A9',
      name: 'Neokingdom DAO',
      display: 'neok',
      symbol: 'NEOK',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/neok.svg'
        }],
      socials: {
        website: 'https://www.neokingdom.org/',
        twitter: 'https://twitter.com/NEOKingdomDAO'
      }
    },
    {
      description: 'The token of Teledisko DAO.',
      denomUnits: [{
          denom: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
          exponent: 0
        }, {
          denom: 'berlin',
          exponent: 18
        }],
      base: 'erc20/0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      name: 'Teledisko DAO',
      display: 'berlin',
      symbol: 'BERLIN',
      typeAsset: 'erc20',
      address: '0x1cFc8f1FE8D5668BAFF2724547EcDbd6f013a280',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/berlin.svg'
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
          exponent: 0
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      base: 'erc20/0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      address: '0xfbf4318d24a93753f11d365a6dcf8b830e98ab0f',
      symbol: 'CROWDP',
      typeAsset: 'erc20',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
        }]
    }
  ]
};
export default info;