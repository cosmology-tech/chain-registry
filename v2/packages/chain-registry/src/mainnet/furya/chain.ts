import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'furya',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://furya.xyz/',
  prettyName: 'furya',
  chainType: 'cosmos',
  chainId: 'furya-1',
  daemonName: 'furyad',
  nodeHome: '$HOME/.furyad',
  bech32Prefix: 'furya',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufury',
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/furysport/furya-chain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v1.0.0', 'v2.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/furysport/furya-chain/blob/main/network/mainnet/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        proposal: -1,
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        consensus: {
          type: 'tendermint',
          version: 'v0.37.2'
        },
        nextVersionName: 'v2.0.0',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.7'
        },
        cosmwasm: {
          version: 'v0.20.0',
          enabled: true
        }
      }, {
        name: 'v2.0.0',
        proposal: 3,
        height: 2839877,
        recommendedVersion: 'v2.0.0',
        compatibleVersions: ['v1.0.0'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.47.8'
        },
        cosmwasm: {
          version: 'v0.41.0',
          enabled: true
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
  },
  apis: {
    rpc: [{
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes'
      }, {
        address: 'https://furya.rpc.nodeshub.online:443',
        provider: 'nodeshub'
      }],
    rest: [{
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes'
      }, {
        address: 'https://furya.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    grpc: [{
        address: 'https://furya.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }]
  },
  explorers: [
    {
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.network/furya-1/',
      txPage: 'https://explorer.furya.network/furya-1/tx/${txHash}',
      accountPage: 'https://explorer.furya.network/furya-1/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/furya',
      txPage: 'https://staking-explorer.com/transaction.php?chain=furya&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=furya&addr=${accountAddress}'
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/furya',
      txPage: 'https://explorer.nodeshub.online/furya/txs/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/furya/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }]
};
export default info;