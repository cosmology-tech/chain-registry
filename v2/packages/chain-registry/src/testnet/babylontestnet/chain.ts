import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'babylontestnet',
  status: 'live',
  website: 'https://babylonlabs.io/',
  networkType: 'testnet',
  prettyName: 'Babylon Testnet',
  chainType: 'cosmos',
  chainId: 'bbn-test-5',
  preForkChainName: 'babylontestnet1',
  bech32Prefix: 'bbn',
  slip44: 118,
  daemonName: 'babylond',
  nodeHome: '$HOME/.babylond',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ubbn'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/babylonlabs-io/babylon',
    recommendedVersion: 'v1.0.0-rc.4',
    compatibleVersions: ['v1.0.0-rc.4'],
    genesis: {
      genesisUrl: 'https://github.com/babylonlabs-io/networks/raw/main/bbn-test-5/network-artifacts/genesis.json'
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://babylon-testnet-rpc.nodes.guru',
        provider: 'NodesGuru'
      }],
    rest: [{
        address: 'https://babylon-testnet-api.nodes.guru',
        provider: 'NodesGuru'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'babylonscan',
      url: 'https://babylon-testnet.l2scan.co',
      txPage: 'https://babylon-testnet.l2scan.co/tx/${txHash}'
    }, {
      kind: 'explorers.guru',
      url: 'https://testnet.babylon.explorers.guru',
      txPage: 'https://testnet.babylon.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
    }]
};
export default info;