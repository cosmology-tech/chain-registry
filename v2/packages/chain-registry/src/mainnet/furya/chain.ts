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
    compatibleVersions: ['v2.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/furysport/furya-chain/blob/main/network/mainnet/genesis.json'
    }
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