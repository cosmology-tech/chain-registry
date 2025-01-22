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
        fixed_min_gas_price: 1905,
        low_gas_price: 1905,
        average_gas_price: 2100,
        high_gas_price: 2500
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/provenance-io/provenance',
    recommended_version: 'v1.17.0',
    compatible_versions: ['v1.17.0'],
    consensus: {
      type: 'tendermint',
      version: '0.34.29'
    },
    binaries: {
      "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.17.0/provenance-linux-amd64-v1.17.0.zip'
    },
    genesis: {
      name: 'v1.0.1',
      genesis_url: 'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46.13'
    },
    ibc: {
      type: 'go',
      version: '6.2.0',
      ics_enabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-provenance.takeshi.team/',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc.provenance.io/',
        provider: 'Figure'
      },
      {
        address: 'https://rpc-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://provenance-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.provenance.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://rpc.pio-mainnet-1.provenance.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-provenance.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://provenance-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.provenance.io',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://api.provenance.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://api.pio-mainnet-1.provenance.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    grpc: [
      {
        address: 'grpc-provenance.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'provenance-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-provenance-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.provenance.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'provenance-grpc.panthea.eu:16780',
        provider: 'Panthea EU'
      },
      {
        address: 'grpc.pio-mainnet-1.provenance.aviaone.com:9231',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'Provenance',
      url: 'https://explorer.provenance.io',
      tx_page: 'https://explorer.provenance.io/tx/${txHash}'
    },
    {
      kind: 'hubble',
      url: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1',
      tx_page: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/provenance',
      tx_page: 'https://ping.pub/provenance/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/provenance',
      tx_page: 'https://www.mintscan.io/provenance/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Provenance',
      tx_page: 'https://explorer.stavr.tech/Provenance/txs/${txHash}',
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/provenance',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=provenance&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=provenance&addr=${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/provenance',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/provenance/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/provenance/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE 🟢',
      url: 'https://mainnet.explorer.aviaone.com/provenance',
      tx_page: 'https://mainnet.explorer.aviaone.com/provenance/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/provenance/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg',
      theme: {
        primary_color_hex: '#4c7cdc'
      }
    }]
};
export default info;