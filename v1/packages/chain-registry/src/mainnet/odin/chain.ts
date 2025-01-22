import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'odin',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://odinprotocol.io/',
  pretty_name: 'Odin Protocol',
  chain_type: 'cosmos',
  chain_id: 'odin-mainnet-freya',
  pre_fork_chain_name: 'odin1',
  bech32_prefix: 'odin',
  daemon_name: 'odind',
  node_home: '$HOME/.odin',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'loki',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.06
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'loki'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/ODIN-PROTOCOL/odin-core',
    recommended_version: 'v0.10.2',
    compatible_versions: [
      'v0.10.0',
      'v0.10.1',
      'v0.10.2'
    ],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.10'
    },
    genesis: {
      genesis_url: 'https://snapshots.polkachu.com/genesis/odin/genesis.json'
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
  logo_URIs: {
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
      tx_page: 'https://runa.odinprotocol.io/transactions/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Odin-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Odin-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/odin',
      tx_page: 'https://ping.pub/odin/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
    }]
};
export default info;