import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'soarchaintestnet',
  chainType: 'cosmos',
  chainId: 'soarchaintestnet',
  prettyName: 'Soarchain Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'soar',
  daemonName: 'soarchaind',
  nodeHome: '$HOME/.soarchaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utsoar',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.01,
        averageGasPrice: 0.02,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utsoar'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/soar-robotics/soarchain-core',
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/soar-robotics/testnet-validator-onboard/main/release/genesis.json'
    },
    recommendedVersion: 'v0.2.10',
    compatibleVersions: ['v0.2.10'],
    consensus: {
      type: 'tendermint',
      version: '0.34.19'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45.5'
    },
    ibc: {
      type: 'go',
      version: '3.0.1'
    },
    cosmwasm: {
      version: '0.27',
      enabled: true
    }
  },
  keywords: ['DePin'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.svg'
    }],
  apis: {
    rpc: [
      {
        address: 'https://rpc1.testnet.soarchain.com',
        provider: 'soarchain'
      },
      {
        address: 'https://rpc2.testnet.soarchain.com/',
        provider: 'soarchain'
      },
      {
        address: 'https://soarchain-testnet-rpc.tienthuattoan.com',
        provider: 'tienthuattoan'
      },
      {
        address: 'https://soarchain-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-t.soarchain.nodestake.org',
        provider: 'nodeStake'
      },
      {
        address: 'https://soarchain-testnet-rpc.stakerhouse.com',
        provider: 'stakerHouse'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.soarchain.com/',
        provider: 'soarchain'
      },
      {
        address: 'https://soarchain-testnet-api.tienthuattoan.com',
        provider: 'tienthuattoan'
      },
      {
        address: 'https://soarchain-testnet-rest.stakerhouse.com',
        provider: 'stakerHouse'
      },
      {
        address: 'https://api-t.soarchain.nodestake.org',
        provider: 'nodeStake'
      }
    ],
    grpc: [
      {
        address: 'soarchain-testnet-grpc.polkachu.com:25290',
        provider: 'Polkachu'
      },
      {
        address: 'https://grpc-t.soarchain.nodestake.org:443',
        provider: 'nodeStake'
      },
      {
        address: 'soarchain-testnet-grpc.stakerhouse.com:443',
        provider: 'stakerHouse'
      }
    ]
  },
  explorers: [{
      kind: 'Soarchain Explorer',
      url: 'https://explorer.soarchain.com/soarchain',
      txPage: 'https://explorer.soarchain.com/soarchain/tx/${txHash}'
    }, {
      kind: 'Kjnodes Explorer',
      url: 'https://explorer.kjnodes.com/soarchain-testnet',
      txPage: 'https://explorer.kjnodes.com/soarchain-testnet/tx/${txHash}'
    }]
};
export default info;