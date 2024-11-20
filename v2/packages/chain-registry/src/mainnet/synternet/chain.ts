import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'synternet',
  chainType: 'cosmos',
  chainId: 'synternet-1',
  website: 'https://www.synternet.com/',
  prettyName: 'Synternet',
  status: 'live',
  networkType: 'mainnet',
  slip44: 118,
  bech32Prefix: 'synt',
  daemonName: 'syntd',
  nodeHome: '$HOME/.amber',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'usynt',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usynt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Synternet/synternet-chain-releases',
    recommendedVersion: 'v0.14.0',
    compatibleVersions: ['v0.14.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://github.com/Synternet/synternet-chain-releases/blob/main/networks/mainnet/genesis.json'
    },
    versions: [{
        name: 'v11',
        tag: 'v0.11.0',
        recommendedVersion: 'v0.11.0',
        compatibleVersions: ['v0.11.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        height: 1,
        nextVersionName: 'v14',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11'
        },
        ibc: {
          type: 'go',
          version: 'v7.1.0'
        }
      }, {
        name: 'v14',
        tag: 'v0.14.0',
        proposal: 1,
        height: 505094,
        recommendedVersion: 'v0.14.0',
        compatibleVersions: ['v0.14.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.11'
        },
        ibc: {
          type: 'go',
          version: 'v7.1.0'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.47.11'
    },
    ibc: {
      type: 'go',
      version: 'v7.1.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg'
  },
  description: 'Synternet is the backbone of the Data Layer, a protocol serving as the customizable execution layer between all blockchains. It enables builders to See, Interpret and Act on any data from any chain, supercharging their applications.',
  apis: {
    rpc: [{
        address: 'https://rpc.synternet.com/',
        provider: 'Synternet'
      }],
    rest: [{
        address: 'https://api.synternet.com/',
        provider: 'Synternet'
      }]
  },
  explorers: [{
      kind: 'Big Dipper',
      url: 'https://explorer.synternet.com/',
      txPage: 'https://explorer.synternet.com/transactions/${txHash}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/synternet',
      txPage: 'https://staking-explorer.com/transaction.php?chain=synternet&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=synternet&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/synternet/images/synt.svg',
      theme: {
        primaryColorHex: '#272d45'
      }
    }]
};
export default info;