import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'aioz',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://aioz.network/',
  pretty_name: 'AIOZ Network',
  chain_id: 'aioz_168-1',
  bech32_prefix: 'aioz',
  daemon_name: 'aiozd',
  node_home: '$HOME/.aioz',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'attoaioz',
        fixed_min_gas_price: 1000000000,
        low_gas_price: 1000000000,
        average_gas_price: 1000000000,
        high_gas_price: 1500000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'attoaioz'
      }
    ],
    lock_duration: {
      time: '2419200s'
    }
  },
  codebase: {},
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
  },
  description:
    'AIOZ Network is a DePIN for Web3 AI, Storage and Streaming.\n\nAIOZ empowers a faster, secure and decentralized future.\n\nPowered by a global network of DePINs, AIOZ rewards you for sharing your computational resources for storing, transcoding, and streaming digital media content and powering decentralized AI computation.',
  apis: {
    'evm-http-jsonrpc': [
      {
        address: 'https://eth-dataseed.aioz.network',
        provider: 'AIOZ Network'
      }
    ],
    rpc: [
      {
        address: 'https://rpc-dataseed.aioz.network:443',
        provider: 'AIOZ Network'
      }
    ],
    rest: [
      {
        address: 'https://lcd-dataseed.aioz.network',
        provider: 'AIOZ Network'
      }
    ],
    grpc: [
      {
        address: 'grpc-dataseed.aioz.network:443',
        provider: 'AIOZ Network'
      }
    ]
  },
  explorers: [
    {
      kind: 'aioz',
      url: 'https://explorer.aioz.network',
      tx_page: 'https://explorer.aioz.network/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aioz/images/aioz.svg'
    }
  ]
};
export default info;
