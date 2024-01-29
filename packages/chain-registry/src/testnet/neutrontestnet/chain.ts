import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'neutrontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Neutron Testnet',
  chain_id: 'pion-1',
  bech32_prefix: 'neutron',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.02,
        average_gas_price: 0.02,
        high_gas_price: 0.02
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.47',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.45'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://neutron-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://rest-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://api.pion.remedy.tm.p2p.org',
        provider: 'P2P.ORG'
      },
      {
        address: 'https://rest.baryon-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      }
    ],
    grpc: [
      {
        address: 'grpc-falcron.pion-1.ntrn.tech:80',
        provider: 'Neutron'
      },
      {
        address: 'grpc.baryon.remedy.tm.p2p.org:443',
        provider: 'P2P.ORG'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping.pub Explorer from Hypha',
      url: 'https://explorer.rs-testnet.polypore.xyz/pion-1',
      tx_page: 'https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}',
      account_page:
        'https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/neutron-testnet',
      tx_page: 'https://testnet.mintscan.io/neutron-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/neutron-testnet/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
    }
  ]
};
export default info;
