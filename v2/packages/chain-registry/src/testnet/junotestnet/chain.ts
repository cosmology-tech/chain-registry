import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'junotestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Juno Testnet',
  chainType: 'cosmos',
  chainId: 'uni-6',
  bech32Prefix: 'juno',
  daemonName: 'junod',
  nodeHome: '$HOME/.juno',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ujunox',
        lowGasPrice: 0.003,
        averageGasPrice: 0.0045,
        highGasPrice: 0.006
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ujunox'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/CosmosContracts/juno',
    recommendedVersion: 'v15.0.0-alpha.2',
    compatibleVersions: ['v15.0.0', 'v15.0.0-alpha.2'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/CosmosContracts/testnets/main/uni-6/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '4.3.1'
    },
    cosmwasm: {
      version: '0.31',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://juno-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://juno-testnet-api.polkachu.com',
        provider: 'Polkachu'
      }, {
        address: 'https://juno.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }],
    grpc: [{
        address: 'juno-testnet-grpc.polkachu.com:12690',
        provider: 'Polkachu'
      }]
  },
  explorers: [{
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Juno-Testnet',
      txPage: 'https://explorer.stavr.tech/Juno-Testnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Juno-Testnet/account/${accountAddress}'
    }]
};
export default info;