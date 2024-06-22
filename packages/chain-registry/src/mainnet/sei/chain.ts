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
    fee_tokens: [{
        denom: 'usei',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.02,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'usei'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'sei-cosmos v0.3.19',
    cosmwasm_enabled: true,
    cosmwasm_version: 'sei-wasmd v0.1.5'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
  },
  description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
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
      },
      {
        address: 'https://sei-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
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
      },
      {
        address: 'https://sei-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
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
        address: 'grpc-sei.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'sei.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'sei-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://evm-rpc.sei-apis.com',
        provider: 'Rhino'
      },
      {
        address: 'https://seievm-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sei-jsonrpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes'
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
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sei',
      tx_page: 'https://ezstaking.app/sei/txs/${txHash}',
      account_page: 'https://ezstaking.app/sei/account/${accountAddress}'
    },
    {
      kind: 'seiscan',
      url: 'https://www.seiscan.app/pacific-1',
      tx_page: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
      account_page: 'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/sei',
      tx_page: 'https://mainnet.whispernode.com/sei/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/sei/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
    }]
};
export default info;