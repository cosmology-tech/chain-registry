import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'coreumtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.coreum.com',
  prettyName: 'Coreum',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/CoreumFoundation/coreum',
    recommendedVersion: 'v3.0.3',
    compatibleVersions: ['v3.0.3'],
    binaries: {
      "linux/amd64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-amd64?checksum=sha256:1719a32e6f8e8813d00cd86e1d8d02e893324d4f59fa7a1b8cedc5836140ecef',
      "linux/arm64": 'https://github.com/CoreumFoundation/coreum/releases/download/v3.0.3/cored-linux-arm64?checksum=sha256:cfbbad6803c0327407e4dd222a108505e6ff9e294d7c86e34b6b895b96b61bbd'
    },
    genesis: {
      name: 'v0',
      genesisUrl: 'https://raw.githubusercontent.com/CoreumFoundation/coreum/master/genesis/coreum-testnet-1.json'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47'
    },
    cosmwasm: {
      version: '0.44',
      enabled: true
    }
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
    }, {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/coreum-testnet',
      txPage: 'https://www.mintscan.io/coreum-testnet/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/coreum-testnet/accounts/${accountAddress}'
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