import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'coreumtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.coreum.com',
  prettyName: 'Coreum',
  chainId: 'coreum-testnet-1',
  bech32Prefix: 'testcore',
  daemonName: 'cored',
  nodeHome: '$HOME/.core/coreum-testnet-1',
  keyAlgos: ['secp256k1'],
  slip44: 990,
  fees: {
    feeTokens: [{
        denom: 'utestcore',
        fixedMinGasPrice: 0.03125,
        lowGasPrice: 0.0625,
        averageGasPrice: 0.0625,
        highGasPrice: 62.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utestcore'
      }],
    lockDuration: {
      time: '168h'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png',
      theme: {
        primaryColorHex: '#25d695'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/coreum/images/coreum.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://full-node.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://full-node-eris.testnet-1.coreum.dev:26657',
        provider: 'Coreum Foundation'
      },
      {
        address: 'https://coreum-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'https://full-node.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      }, {
        address: 'https://full-node-eris.testnet-1.coreum.dev:9090',
        provider: 'Coreum Foundation'
      }],
    rest: [{
        address: 'https://full-node.testnet-1.coreum.dev:1317',
        provider: 'Coreum'
      }, {
        address: 'https://coreum-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }]
  },
  explorers: [{
      kind: 'Coreum',
      url: 'https://explorer.testnet-1.coreum.dev/coreum',
      txPage: 'https://explorer.testnet-1.coreum.dev/coreum/transactions/${txHash}',
      accountPage: 'https://explorer.testnet-1.coreum.dev/coreum/account/${accountAddress}'
    }],
  keywords: [
    'dex',
    'staking',
    'wasm',
    'assets',
    'nft'
  ]
};
export default info;