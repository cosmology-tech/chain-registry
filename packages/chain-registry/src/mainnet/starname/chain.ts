import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'starname',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.starname.me/',
  pretty_name: 'Starname',
  chain_id: 'iov-mainnet-ibc',
  bech32_prefix: 'star',
  slip44: 234,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [
      {
        denom: 'uiov',
        low_gas_price: 1,
        average_gas_price: 2,
        high_gas_price: 3
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uiov'
      }
    ]
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
  },
  description:
    'Starname is the best way to claim your part of the blockchain. You can use it for decentralized identification, payments, ownership and applications. Starname can be integrated into digital wallets, dapps and exchanges.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.starname.app',
        provider: 'Chainmasters'
      }
    ],
    rest: [
      {
        address: 'https://api-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rest.starname.app',
        provider: 'Chainmasters'
      }
    ],
    grpc: [
      {
        address: 'grpc-starname-ia.cosmosia.notional.ventures:443',
        provider: 'starname'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/starname',
      tx_page: 'https://ping.pub/starname/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/starname',
      tx_page: 'https://atomscan.com/starname/transactions/${txHash}',
      account_page: 'https://atomscan.com/starname/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
    }
  ]
};
export default info;
