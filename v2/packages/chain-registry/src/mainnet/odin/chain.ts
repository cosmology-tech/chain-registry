import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'odin',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://odinprotocol.io/',
  prettyName: 'Odin Protocol',
  chainType: 'cosmos',
  chainId: 'odin-mainnet-freya',
  preForkChainName: 'odin1',
  bech32Prefix: 'odin',
  daemonName: 'odind',
  nodeHome: '$HOME/.odin',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'loki',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.025,
        averageGasPrice: 0.05,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'loki'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ODIN-PROTOCOL/odin-core',
    recommendedVersion: 'v0.10.2',
    compatibleVersions: [
      'v0.10.0',
      'v0.10.1',
      'v0.10.2'
    ],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.10'
    },
    genesis: {
      genesisUrl: 'https://snapshots.polkachu.com/genesis/odin/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.7'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.odinprotocol.io',
        provider: 'Heimdall Gateway'
      },
      {
        address: 'https://odin.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/odin',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://api.odinprotocol.io',
        provider: 'Heimdall Gateway'
      },
      {
        address: 'https://odin.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/odin',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'odin.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'odin.grpc.m.stavr.tech:122',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'odin-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [
    {
      kind: 'Runa',
      url: 'https://runa.odinprotocol.io/',
      txPage: 'https://runa.odinprotocol.io/transactions/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Odin-Mainnet',
      txPage: 'https://explorer.stavr.tech/Odin-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/odin',
      txPage: 'https://ping.pub/odin/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
    }]
};
export default info;