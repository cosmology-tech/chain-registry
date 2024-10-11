import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'okp4testnet',
  chainType: 'cosmos',
  chainId: 'okp4-nemeton-1',
  website: 'https://okp4.network/',
  prettyName: 'OKP4 Nemeton',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'okp4',
  daemonName: 'okp4d',
  nodeHome: '$HOME/.okp4',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uknow',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uknow'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/okp4/okp4d',
    recommendedVersion: 'v4.1.0',
    compatibleVersions: ['v4.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/okp4/okp4d/releases/download/v4.1.0/okp4d-4.1.0-linux-amd64',
      "linux/arm64": 'https://github.com/okp4/okp4d/releases/download/v4.1.0/okp4d-4.1.0-linux-arm64'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/okp4/networks/main/chains/nemeton-1/genesis.json'
    },
    versions: [{
        name: 'v4.1.0',
        tag: 'v4.1.0',
        recommendedVersion: 'v4.1.0',
        compatibleVersions: ['v4.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/okp4/okp4d/releases/download/v4.1.0/okp4d-4.1.0-linux-amd64',
          "linux/arm64": 'https://github.com/okp4/okp4d/releases/download/v4.1.0/okp4d-4.1.0-linux-arm64'
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://api.testnet.okp4.network/rpc',
        provider: 'OKP4'
      },
      {
        address: 'https://okptest-rpc.quickapi.com',
        provider: 'Chainlayer'
      },
      {
        address: 'http://okp.rpc.t.stavr.tech:10097',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://okp4-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://okptest-lcd.quickapi.com',
        provider: 'Chainlayer'
      },
      {
        address: 'https://okp4.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://okp4-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    grpc: [
      {
        address: 'okp4-testnet-grpc.polkachu.com:17690',
        provider: 'Polkachu'
      },
      {
        address: 'http://okp.grpc.t.stavr.tech:8029',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc.testnet.okp4.network:443',
        provider: 'OKP4'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/OKP4%20testnet',
      txPage: 'https://testnet.ping.pub/OKP4%20testnet/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/OKP4-Testnet',
      txPage: 'https://explorer.stavr.tech/OKP4-Testnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explore.okp4.network/OKP4%20testnet',
      txPage: 'https://explore.okp4.network/OKP4%20testnet/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png'
    }]
};
export default info;