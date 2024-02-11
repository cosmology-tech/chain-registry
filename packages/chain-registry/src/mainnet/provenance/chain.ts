import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'provenance',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://provenance.io/',
  pretty_name: 'Provenance',
  chain_id: 'pio-mainnet-1',
  bech32_prefix: 'pb',
  daemon_name: 'provenanced',
  node_home: '$HOME/Provenance',
  key_algos: ['secp256k1'],
  slip44: 505,
  fees: {
    fee_tokens: [
      {
        denom: 'nhash',
        fixed_min_gas_price: 1905,
        low_gas_price: 1905,
        average_gas_price: 2100,
        high_gas_price: 2500
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'nhash'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.13',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30'
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
        address: 'https://provenance-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.provenance.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
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
        address: 'https://api-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://api.provenance.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
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
      tx_page:
        'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
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
      account_page:
        'https://www.mintscan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/provenance',
      tx_page: 'https://atomscan.com/provenance/transactions/${txHash}',
      account_page: 'https://atomscan.com/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/provenance',
      tx_page: 'https://bigdipper.live/provenance/transactions/${txHash}',
      account_page:
        'https://bigdipper.live/provenance/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
    }
  ]
};
export default info;
