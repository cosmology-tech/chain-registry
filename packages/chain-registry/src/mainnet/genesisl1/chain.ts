import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'genesisl1',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'GenesisL1',
  chain_id: 'genesis_29-2',
  bech32_prefix: 'genesis',
  daemon_name: 'genesisd',
  node_home: '$HOME/.genesis',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'el1',
        low_gas_price: 51000000000,
        average_gas_price: 52000000000,
        high_gas_price: 53000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'el1'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46.15'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1'
      }
    ],
    rest: [
      {
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1'
      },
      {
        address: 'https://1317.genesisl1.org',
        provider: 'GenesisL1'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      tx_page: 'https://ping.pub/genesisL1/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      tx_page: 'https://exp.utsa.tech/genesis/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      tx_page: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      account_page: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
    }
  ]
};
export default info;
