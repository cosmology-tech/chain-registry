import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'provenance',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://provenance.io/',
  pretty_name: 'Provenance',
  chain_type: 'cosmos',
  chain_id: 'pio-mainnet-1',
  bech32_prefix: 'pb',
  daemon_name: 'provenanced',
  node_home: '$HOME/Provenance',
  key_algos: ['secp256k1'],
  slip44: 505,
  fees: {
    fee_tokens: [{
        denom: 'nhash',
        fixed_min_gas_price: 1,
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/provenance-io/provenance',
    recommended_version: 'v1.31.0',
    compatible_versions: ['v1.31.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.23'
    },
    binaries: {
      "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.31.0/provenance-linux-amd64-v1.31.0.zip'
    },
    genesis: {
      name: 'v1.0.1',
      genesis_url: 'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.8'
    },
    ibc: {
      type: 'go',
      version: '10.7.0',
      ics_enabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.61.15',
      enabled: true
    },
    tag: 'v1.31.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provenance.io/',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.ibs.team:443/rpc',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://provenance-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://api.provenance.io',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://provenance.ibs.team:443/api',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://provenance-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'provenance-grpc.panthea.eu:16780',
        provider: 'Panthea EU'
      },
      {
        address: 'provenance-grpc.polkachu.com:27090',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-grpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      }
    ]
  },
  explorers: [
    {
      kind: 'Zonescan',
      url: 'https://zonescan.io/provenance',
      tx_page: 'https://zonescan.io/provenance/transactions/${txHash}',
      account_page: 'https://zonescan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/provenance',
      tx_page: 'https://www.mintscan.io/provenance/tx/${txHash}',
      account_page: 'https://www.mintscan.io/provenance/address/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Provenance',
      tx_page: 'https://explorer.stavr.tech/Provenance/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Provenance/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/provenance',
      tx_page: 'https://ezstaking.app/provenance/txs/${txHash}',
      account_page: 'https://ezstaking.app/provenance/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/provenance',
      tx_page: 'https://atomscan.com/provenance/transactions/${txHash}',
      account_page: 'https://atomscan.com/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/provenance/mainnet',
      tx_page: 'https://moon-runners.net/provenance/mainnet/finder?search=${txHash}',
      account_page: 'https://moon-runners.net/provenance/mainnet/finder?search=${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
    }],
  snapshots: [
    {
      provider: 'High Stakes 🇨🇭',
      url: 'https://tools.highstakes.ch/snapshots/provenance',
      latest_url: 'https://tools.highstakes.ch/files/provenance_goleveldb.tar.gz',
      type: 'pruned',
      db_backend: 'goleveldb',
      frequency: 'every 3h',
      compression: 'tar',
      checksum_available: true
    },
    {
      url: 'https://polkachu.com/tendermint_snapshots/provenance',
      type: 'pruned',
      compression: 'lz4',
      checksum_available: false,
      provider: 'Polkachu'
    },
    {
      url: 'https://kleomedes.cloud/chains/provenance',
      latest_url: 'https://api.kleomedes.network/api/v2/snapshots/provenance/latest',
      type: 'pruned',
      compression: 'zstd',
      provider: 'Kleomedes'
    }
  ]
};
export default info;