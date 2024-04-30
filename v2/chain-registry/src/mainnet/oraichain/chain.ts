import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'oraichain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://orai.io/',
  pretty_name: 'Oraichain',
  chain_id: 'Oraichain',
  bech32_prefix: 'orai',
  daemon_name: 'oraid',
  node_home: '$WORKSPACE/.oraid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'orai',
        fixed_min_gas_price: 0,
        low_gas_price: 0.003,
        average_gas_price: 0.005,
        high_gas_price: 0.007
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'orai'
      }]
  },
  codebase: {
    cosmwasm_enabled: true,
    cosmwasm_version: '0.30.2'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://rpc.orai.pfc.zone/',
        provider: 'PFC'
      },
      {
        address: 'https://rpc-orai.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://oraichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-orai.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.orai.mortysnode.nl',
        provider: 'Morty\'s Nodes'
      }
    ],
    rest: [
      {
        address: 'http://lcd.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://oraichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-orai.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-api.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    grpc: [
      {
        address: 'grpc-oraichain.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc.orai.pfc.zone:443',
        provider: 'PFC'
      },
      {
        address: 'oraichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-orai.blockval.io:9390',
        provider: 'Blockval'
      },
      {
        address: 'mainnet-orai.konsortech.xyz:33090',
        provider: 'KonsorTech'
      }
    ]
  },
  explorers: [
    {
      kind: 'oraiscan',
      url: 'https://scan.orai.io',
      tx_page: 'https://scan.orai.io/txs/${txHash}'
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/orai',
      tx_page: 'https://explorer.co.id/orai/tx/${txHash}'
    },
    {
      kind: 'Blockval Explorer',
      url: 'https://explorer.blockval.io/oraichain',
      tx_page: 'https://explorer.blockval.io/oraichain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/orai',
      tx_page: 'https://atomscan.com/orai/transactions/${txHash}',
      account_page: 'https://atomscan.com/orai/accounts/${accountAddress}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/oraichain',
      tx_page: 'https://explorer.konsortech.xyz/oraichain/transactions/${txHash}',
      account_page: 'https://explorer.konsortech.xyz/oraichain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg'
    }]
};
export default info;