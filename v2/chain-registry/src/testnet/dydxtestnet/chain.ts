import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dydxtestnet',
  status: 'live',
  website: 'https://dydx.trade/',
  networkType: 'testnet',
  prettyName: 'dYdX Protocol',
  chainId: 'dydx-testnet-4',
  bech32Prefix: 'dydx',
  daemonName: 'dydxprotocold',
  nodeHome: '$HOME/.dydxprotocol',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'adv4tnt',
        fixedMinGasPrice: 12500000000,
        lowGasPrice: 12500000000,
        averageGasPrice: 12500000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'adv4tnt'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.4',
    cosmwasmEnabled: false
  },
  description: 'Our goal is to build open source code that can power a first class product and trading experience.',
  apis: {
    rpc: [
      {
        address: 'https://dydx-rpc-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://test-dydx-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://dydx-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://dydx-lcd-testnet.enigma-validator.com',
        provider: 'Enigma'
      },
      {
        address: 'https://testnet-dydx-api.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://dydx-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'https://testnet-dydx-rpc.lavenderfive.com',
        provider: 'Lavender Five'
      },
      {
        address: 'https://dydx-testnet-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'dydx-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/dydx-testnet',
      txPage: 'https://www.mintscan.io/dydx-testnet/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/dydx-testnet/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
  },
  images: [{
      imageSync: {
        chainName: 'dydx'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
    }]
};
export default info;