import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'empowertestnet',
  chain_type: 'cosmos',
  chain_id: 'circulus-1',
  pretty_name: 'Empower Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'empower',
  daemon_name: 'empowerd',
  node_home: '$HOME/.empowerchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umpwr',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://empower-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://empower.rpc.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://rpc-t.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-empower.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://empower-testnet.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://empower-testnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc.circulus-1.empower.aviaone.com:443',
        provider: 'AviaOne'
      }
    ],
    rest: [
      {
        address: 'https://empower-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://empower.api.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://empw.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-t.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-empower.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://empower-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://empower-testnet-api.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://api.circulus-1.empower.aviaone.com',
        provider: 'AviaOne'
      }
    ],
    grpc: [
      {
        address: 'empower-testnet-grpc.polkachu.com:17490',
        provider: 'Polkachu'
      },
      {
        address: 'empower.grpc.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'grpc-t.empower.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'empower-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'empower-testnet-grpc.itrocket.net:16090',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.circulus-1.empower.aviaone.com:443',
        provider: 'AviaOne'
      }
    ]
  },
  explorers: [
    {
      kind: 'exploreme',
      url: 'https://empowerchain.exploreme.pro',
      tx_page: 'https://empowerchain.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.nodeist.net/Empower',
      tx_page: 'https://exp.nodeist.net/Empower/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Empower',
      tx_page: 'https://explorer.stavr.tech/Empower/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top/empower-testnet',
      tx_page: 'https://explorer.nodestake.top/empower-testnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.itrocket.net/empower/staking',
      tx_page: 'https://testnet.itrocket.net/empower/staking/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.stavr.tech/empower',
      tx_page: 'https://explorer.stavr.tech/empower/tx/${txHash}'
    }
  ]
};
export default info;