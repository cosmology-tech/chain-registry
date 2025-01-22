import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'fxcore',
  chainType: 'cosmos',
  chainId: 'fxcore',
  website: 'https://functionx.io',
  prettyName: 'f(x)Core',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'fx',
  daemonName: 'fxcored',
  nodeHome: '$HOME/.fxcore',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'FX',
        fixedMinGasPrice: 4000000000000,
        lowGasPrice: 4000000000000,
        averageGasPrice: 4200000000000,
        highGasPrice: 5000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'FX'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/functionx/fx-core',
    recommendedVersion: 'v7.5.0',
    compatibleVersions: ['v7.5.0'],
    binaries: {
      "linux/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-amd64',
      "linux/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-linux-arm64',
      "darwin/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-darwin-amd64',
      "windows/amd64": 'https://github.com/FunctionX/fx-core/releases/download/v7.5.0/fxcored-v7.5.0-windows-amd64.exe'
    },
    genesis: {
      name: 'fxv1',
      genesisUrl: 'https://github.com/functionx/fx-core/raw/main/public/mainnet/genesis.json'
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
    evmHttpJsonrpc: [{
        address: 'https://fx-web3.functionx.io',
        provider: 'Function X'
      }]
  },
  explorers: [
    {
      kind: 'starscan',
      url: 'https://starscan.io',
      txPage: 'https://starscan.io/fxcore/tx/${txHash}',
      accountPage: 'https://starscan.io/fxcore/address/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/fx',
      txPage: 'https://explorer.tcnetwork.io/fx/transaction/${txHash}',
      accountPage: 'https://explorer.tcnetwork.io/fx/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/fxcore',
      txPage: 'https://ping.pub/fxcore/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/fxcore/',
      txPage: 'https://explorer.nodeshub.online/fxcore/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/fxcore/accounts/${accountAddress}'
    }
  ]
};
export default info;