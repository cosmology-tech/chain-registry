import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cosmoshubtestnet',
  chainId: 'theta-testnet-001',
  prettyName: 'Cosmos Hub Public Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'cosmos',
  daemonName: 'gaiad',
  nodeHome: '$HOME/.gaia',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatom',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatom'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://rpc-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    rest: [
      {
        address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://public-cosmos-theta.w3node.com/rest/',
        provider: 'Interchain.FM'
      },
      {
        address: 'https://lcd-theta.osmotest5.osmosis.zone/',
        provider: 'Osmosis'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ]
  },
  explorers: [{
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/cosmoshub-testnet',
      txPage: 'https://testnet.mintscan.io/cosmoshub-testnet/txs/${txHash}'
    }, {
      kind: 'Big Dipper',
      url: 'https://explorer.theta-testnet.polypore.xyz/',
      txPage: 'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}'
    }]
};
export default info;