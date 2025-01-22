import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nilliontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Nillion Testnet',
  chainType: 'cosmos',
  chainId: 'nillion-chain-testnet-1',
  bech32Prefix: 'nillion',
  daemonName: 'nilchaind',
  nodeHome: '$HOME/.nillionapp',
  keyAlgos: ['ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unil',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unil'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/NillionNetwork/nilchain',
    recommendedVersion: 'v0.1.1',
    compatibleVersions: ['v0.1.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/NillionNetwork/networks/main/nillion-chain-testnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.6'
    },
    ibc: {
      type: 'go',
      version: '8.2.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://nillion-testnet-rpc.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-nillion-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.rpc.nodex.one',
        provider: 'NodeX Emperor'
      }
    ],
    rest: [
      {
        address: 'https://nillion-testnet-api.polkachu.com/',
        provider: 'polkachu'
      },
      {
        address: 'https://testnet-nillion-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.api.nodex.one',
        provider: 'NodeX Emperor'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-nillion-grpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://nillion-testnet.grpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nillion-testnet.grpc.nodex.one',
        provider: 'NodeX Emperor'
      }
    ]
  },
  explorers: [{
      url: 'https://testnet.nillion.explorers.guru',
      txPage: 'https://testnet.nillion.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.nillion.explorers.guru/account/${accountAddress}'
    }, {
      url: 'https://testnet.ping.pub/nillion',
      txPage: 'https://testnet.ping.pub/nillion/tx/${txHash}',
      accountPage: 'https://testnet.ping.pub/nillion/account/${accountAddress}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nilliontestnet/images/nil.png'
    }]
};
export default info;