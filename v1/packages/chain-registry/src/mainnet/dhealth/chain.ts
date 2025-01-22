import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dhealth',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://dhealth.com/',
  pretty_name: 'dHealth',
  chain_type: 'cosmos',
  chain_id: 'dhealth',
  bech32_prefix: 'dh',
  daemon_name: 'dhealthd',
  node_home: '$HOME/.dhealth',
  key_algos: ['secp256k1'],
  slip44: 10111,
  fees: {
    fee_tokens: [{
        denom: 'udhp',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.035
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udhp'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/dhealthproject/dhealth',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/dhealthproject/dhealth/releases/download/v1.0.0/dhealthd-1.0.0-linux-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/dhealthproject/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/cosmos/cosmos-sdk',
      version: 'v0.47.4'
    },
    ibc: {
      type: 'go',
      version: 'v7.2.0'
    },
    cosmwasm: {
      version: 'v0.41.0',
      path: '$HOME/.dhealth/wasm',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.dhealth.com',
        provider: 'dhealth'
      },
      {
        address: 'https://rpc.dhealth.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://dhealth.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      }
    ],
    rest: [
      {
        address: 'https://lcd.dhealth.com',
        provider: 'dhealth'
      },
      {
        address: 'https://api.dhealth.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://dhealth.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.dhealth.com:443',
        provider: 'dhealth'
      },
      {
        address: 'https://grpc.dhealth.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'dhealth.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/dhealth',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=dhealth&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=dhealth&addr=${accountAddress}'
    },
    {
      kind: 'nodestake',
      url: 'https://explorer.nodestake.org/dhealth',
      tx_page: 'https://explorer.nodestake.org/dhealth/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/dhealth/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/dhealth/',
      tx_page: 'https://explorer.nodeshub.online/dhealth/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/dhealth/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dhealth/images/dhp.svg',
      theme: {
        primary_color_hex: '#140c7c'
      }
    }]
};
export default info;