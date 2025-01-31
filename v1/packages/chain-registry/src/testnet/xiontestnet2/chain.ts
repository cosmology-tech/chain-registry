import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xiontestnet2',
  chain_type: 'cosmos',
  chain_id: 'xion-testnet-2',
  pretty_name: 'Xion Testnet 2',
  website: 'https://xion.burnt.com',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'xion',
  bech32_config: {
    bech32PrefixAccAddr: 'xion',
    bech32PrefixAccPub: 'xionpub',
    bech32PrefixValAddr: 'xionvaloper',
    bech32PrefixValPub: 'xionvaloperpub',
    bech32PrefixConsAddr: 'xionvalcons',
    bech32PrefixConsPub: 'xionvalconspub'
  },
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxion',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.001,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/burnt-labs/xion',
    tag: 'v14.1.1',
    recommended_version: 'v14.1.1',
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
      genesis_url: 'https://raw.githubusercontent.com/burnt-labs/xion-testnet-2/config/genesis.json'
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
      tx_page: 'https://explorer.burnt.com/xion-testnet-2/tx/${txHash}',
      account_page: 'https://explorer.burnt.com/xion-testnet-2/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logo_URIs: {
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