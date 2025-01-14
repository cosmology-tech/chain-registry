import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'pelltestnet',
  chainType: 'cosmos',
  chainId: 'ignite_186-1',
  prettyName: 'Pell Ignite Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'pell',
  daemonName: 'pellcored',
  nodeHome: '$HOME/.pellcored',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'apell',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/0xPellNetwork/network-config',
    recommendedVersion: 'v1.1.6',
    compatibleVersions: ['v1.1.6'],
    genesis: {
      genesisUrl: 'https://pell-testnet-rpc.cosmonautstakes.com/genesis'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://pell-testnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://pell-testnet-rpc.hibunode.com',
        provider: 'HibuNode'
      },
      {
        address: 'https://rpc-t.pell.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://pell-testnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://pell-testnet-api.hibunode.com',
        provider: 'HibuNode'
      },
      {
        address: 'https://api-t.pell.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [{
        address: 'pell-testnet-grpc.cosmonautstakes.com:15290',
        provider: 'Cosmonaut Stakes'
      }, {
        address: 'https://grpc-t.pell.nodestake.org:443',
        provider: 'NodeStake'
      }],
    evmHttpJsonrpc: [{
        address: 'pell-testnet-evm.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      }, {
        address: 'https://evmrpc-t.pell.nodestake.org',
        provider: 'NodeStake'
      }]
  },
  explorers: [{
      kind: 'testnet.pell.explorers.guru',
      url: 'https://testnet.pell.explorers.guru/',
      txPage: 'https://testnet.pell.explorers.guru/transaction/${txHash}'
    }, {
      kind: 'explorer.hibunode.com',
      url: 'https://explorer.hibunode.com/pell',
      txPage: 'https://explorer.hibunode.com/pell/tx/${txHash}'
    }]
};
export default info;