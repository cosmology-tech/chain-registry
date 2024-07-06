import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'desmos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://desmos.network/',
  pretty_name: 'Desmos',
  chain_id: 'desmos-mainnet',
  bech32_prefix: 'desmos',
  daemon_name: 'desmos',
  node_home: '$HOME/.desmos',
  key_algos: ['secp256k1'],
  slip44: 852,
  fees: {
    fee_tokens: [{
        denom: 'udsm',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.03,
        high_gas_price: 0.05
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udsm'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'desmos-labs/cosmos-sdk v0.47.10-desmos',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.45.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://rpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://desmos.declab.pro:26613',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api.mainnet.desmos.network',
        provider: 'desmos'
      },
      {
        address: 'https://desmos-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://desmos-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://rest.desmos.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://lcd.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://desmos-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-desmos.explorer.co.id',
        provider: 'Nodine.ID'
      },
      {
        address: 'services.staketab.com:9043',
        provider: 'Staketab'
      },
      {
        address: 'desmos.grpc.nodersteam.com:9121',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://grpc-desmos.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://grpc.desmos.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://vidulum.declab.pro:9009',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'desmos-grpc.noders.services:27090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/desmos',
      tx_page: 'https://ezstaking.app/desmos/txs/${txHash}',
      account_page: 'https://ezstaking.app/desmos/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/desmos',
      tx_page: 'https://bigdipper.live/desmos/transactions/${txHash}',
      account_page: 'https://bigdipper.live/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/desmos',
      tx_page: 'https://www.mintscan.io/desmos/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/desmos/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/desmos',
      tx_page: 'https://ping.pub/desmos/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/desmos',
      tx_page: 'https://atomscan.com/desmos/transactions/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/desmos',
      tx_page: 'https://explorer.tcnetwork.io/desmos/transaction/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Desmos',
      tx_page: 'https://explorer.declab.pro/Desmos/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/desmos/images/dsm.svg',
      theme: {
        primary_color_hex: '#fb804e'
      }
    }]
};
export default info;