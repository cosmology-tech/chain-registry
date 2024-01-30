import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sei',
  status: 'live',
  website: 'https://www.sei.io/',
  network_type: 'mainnet',
  pretty_name: 'Sei',
  chain_id: 'pacific-1',
  bech32_prefix: 'sei',
  daemon_name: 'seid',
  node_home: '$HOME/.sei',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usei',
        fixed_min_gas_price: 0.1,
        low_gas_price: 0.1,
        average_gas_price: 0.1,
        high_gas_price: 0.25
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'usei'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'sei-cosmos v0.2.63',
    cosmwasm_enabled: true,
    cosmwasm_version: 'sei-wasmd v0.0.4'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description:
    'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
  apis: {
    rpc: [
      {
        address: 'https://sei-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-rpc.polkachu.com/',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rpc.brocha.in/',
        provider: 'Brochain'
      },
      {
        address: 'https://rpc-sei.stingray.plus/',
        provider: 'StingRay'
      },
      {
        address: 'https://rpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.rpc.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    rest: [
      {
        address: 'https://sei-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-api.polkachu.com/',
        provider: 'polkachu.com'
      },
      {
        address: 'https://sei-rest.brocha.in/',
        provider: 'Brochain'
      },
      {
        address: 'https://api-sei.stingray.plus/',
        provider: 'StingRay'
      },
      {
        address: 'https://lcd-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://sei.api.kjnodes.com',
        provider: 'kjnodes'
      }
    ],
    grpc: [
      {
        address: 'https://sei-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sei-grpc.polkachu.com:11990/',
        provider: 'polkachu.com'
      },
      {
        address: 'sei-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'sei.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sei',
      tx_page: 'https://ping.pub/sei/tx/${txHash}',
      account_page: 'https://ping.pub/sei/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sei',
      tx_page: 'https://www.mintscan.io/sei/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/sei/accounts/${accountAddress}'
    },
    {
      kind: 'seiscan',
      url: 'https://www.seiscan.app/pacific-1',
      tx_page: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      account_page:
        'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
    }
  ]
};
export default info;
