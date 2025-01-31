import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xiontestnet2',
  chainType: 'cosmos',
  chainId: 'xion-testnet-2',
  prettyName: 'Xion Testnet 2',
  website: 'https://xion.burnt.com',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'xion',
  bech32Config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemonName: 'xiond',
  nodeHome: '$HOME/.xiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxion',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.001,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/burnt-labs/xion',
    tag: 'v14.1.1',
    recommendedVersion: 'v14.1.1',
    language: {
      type: 'go',
      version: 'v1.22'
    },
    binaries: {
      "darwin/amd64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-darwin-amd64?checksum=sha256:aac923cc23a7a41e4bca0f12bfc66dcc9e76932f952a8c6908ab7e92be87082b',
      "darwin/arm64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-darwin-arm64?checksum=sha256:fbeb44762e35d9eacc4b4c31bae08da200a4ffa22c6c09b258ed4930e41d5e2b',
      "linux/amd64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-linux-amd64?checksum=sha256:37f0dcd4625948014b51035c9086914cee2bb9a2b011fd23ba4d1fb5375bca6c',
      "linux/arm64": 'https://github.com/burnt-labs/xion/releases/download/v14.1.1/xiond-linux-arm64?checksum=sha256:7f92664f6de2eaf278559f5f2bb3d2855a723ffa49dd076bc98618a82036adcb'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.11'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/burnt-labs/xion-testnet-2/config/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }],
    rest: [{
        address: 'https://api.xion-testnet-2.burnt.com',
        provider: '🔥BurntLabs🔥'
      }],
    grpc: [{
        address: 'grpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }]
  },
  explorers: [{
      url: 'https://explorer.burnt.com/xion-testnet-2',
      txPage: 'https://explorer.burnt.com/xion-testnet-2/tx/${txHash}',
      accountPage: 'https://explorer.burnt.com/xion-testnet-2/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ]
};
export default info;