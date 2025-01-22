import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'fxcore',
  chain_type: 'cosmos',
  chain_id: 'fxcore',
  website: 'https://functionx.io',
  pretty_name: 'f(x)Core',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'fx',
  daemon_name: 'fxcored',
  node_home: '$HOME/.fxcore',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'FX',
        fixed_min_gas_price: 4000000000000,
        low_gas_price: 4000000000000,
        average_gas_price: 4200000000000,
        high_gas_price: 5000000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'FX'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/functionx/fx-core',
    recommended_version: 'v7.5.0',
    compatible_versions: ['v7.5.0'],
    binaries: {
      "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-amd64',
      "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-arm64',
      "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-windows-amd64.exe'
    },
    genesis: {
      name: 'fxv1',
      genesis_url: 'https://github.com/functionx/fx-core/raw/main/public/mainnet/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.9'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.13',
      tag: 'v0.47.13'
    },
    ibc: {
      type: 'go',
      version: 'v7.6.0'
    }
  },
  apis: {
    rpc: [{
        address: 'https://fx-json.functionx.io',
        provider: 'Function X'
      }, {
        address: 'https://functionx.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    rest: [{
        address: 'https://fx-rest.functionx.io',
        provider: 'Function X'
      }, {
        address: 'https://functionx.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }],
    grpc: [
      {
        address: 'https://fx-grpc.functionx.io',
        provider: 'Function X'
      },
      {
        address: 'https://fx-grpc.portfolio-x.xyz:9090',
        provider: 'Portfolio X'
      },
      {
        address: 'functionx.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ],
    "evm-http-jsonrpc": [{
        address: 'https://fx-web3.functionx.io',
        provider: 'Function X'
      }]
  },
  explorers: [
    {
      kind: 'starscan',
      url: 'https://starscan.io',
      tx_page: 'https://starscan.io/fxcore/tx/${txHash}',
      account_page: 'https://starscan.io/fxcore/address/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/fx',
      tx_page: 'https://explorer.tcnetwork.io/fx/transaction/${txHash}',
      account_page: 'https://explorer.tcnetwork.io/fx/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fxcore',
      tx_page: 'https://ping.pub/fxcore/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fxcore/',
      tx_page: 'https://explorer.nodeshub.online/fxcore/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/fxcore/accounts/${accountAddress}'
    }
  ]
};
export default info;