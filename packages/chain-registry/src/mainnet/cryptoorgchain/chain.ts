import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'cryptoorgchain',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Cronos POS Chain',
  chain_type: 'cosmos',
  chain_id: 'crypto-org-chain-mainnet-1',
  bech32_prefix: 'cro',
  website: 'https://cronos-pos.org/',
  daemon_name: 'chain-maind',
  node_home: '$HOME/.chain-maind',
  slip44: 394,
  alternative_slip44s: [118],
  fees: {
    fee_tokens: [{
        denom: 'basecro',
        low_gas_price: 0.025,
        average_gas_price: 0.03,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'basecro'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png'
  },
  description: 'Cronos PoS Chain is a public, open-source and permissionless blockchain - a fully decentralized network with high speed and low fees, designed to be a public good that helps drive mass adoption of blockchain technology through use cases like Payments, DeFi and NFTs.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.crypto.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-cryptoorgchain.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://cryptocom-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://cryptocom-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cro-chain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://rest.mainnet.crypto.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://api-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cryptocom-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest-cryptoorgchain.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://cryptocom-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cro-chain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.mainnet.crypto.org:443',
        provider: 'cronos.org'
      },
      {
        address: 'grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'cryptocom-grpc.polkachu.com:20290',
        provider: 'Polkachu'
      },
      {
        address: 'cryptocom-grpc.w3coins.io:20290',
        provider: 'w3coins'
      },
      {
        address: 'grpc-cryptoorg.cosmos-spaces.cloud:1160',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'cro-chain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/crypto-org',
      tx_page: 'https://www.mintscan.io/crypto-org/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/crypto-org/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/crypto-org',
      tx_page: 'https://ezstaking.app/crypto-org/txs/${txHash}',
      account_page: 'https://ezstaking.app/crypto-org/account/${accountAddress}'
    },
    {
      kind: 'cronos.org',
      url: 'https://cronos-pos.org/explorer',
      tx_page: 'https://cronos-pos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/crypto-com-chain',
      tx_page: 'https://ping.pub/crypto-com-chain/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png',
      theme: {
        primary_color_hex: '#0c2c71'
      }
    },
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/Cronos_POS_Chain_Colour.svg'
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      theme: {
        primary_color_hex: '#0c2c71'
      }
    }
  ]
} as const satisfies Chain;
export default info;