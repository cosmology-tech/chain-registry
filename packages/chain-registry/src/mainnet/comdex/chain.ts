import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'comdex',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://comdex.one/',
  pretty_name: 'Comdex',
  chain_id: 'comdex-1',
  bech32_prefix: 'comdex',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'ucmdx',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'ucmdx'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.5',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.41.0'
  },
  daemon_name: 'comdex',
  node_home: '$HOME/.comdex',
  key_algos: ['secp256k1'],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://comdex-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.comdex.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://comdex-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://comdex-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://comdex-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-rpc.validatornode.com',
        provider: 'ValidatorNode'
      }
    ],
    rest: [
      {
        address: 'https://rest.comdex.one',
        provider: 'comdex'
      },
      {
        address: 'https://api.comdex.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://comdex-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://comdex.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://comdex-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-comdex.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://lcd-comdex.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://comdex-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://comdex-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://comdex-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api-comdex-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://comdex-api.validatornode.com',
        provider: 'ValidatorNode'
      }
    ],
    grpc: [
      {
        address: 'grpc-comdex-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'comdex.grpcui.chaintools.host:443',
        provider: 'ChainTools'
      },
      {
        address: 'comdex-grpc.polkachu.com:13190',
        provider: 'Polkachu'
      },
      {
        address: 'comdex.grpc.m.stavr.tech:104',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-comdex.cosmos-spaces.cloud:2300',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'comdex-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'comdex-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'comdex-grpc.w3coins.io:13190',
        provider: 'w3coins'
      },
      {
        address: 'comdex-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc-comdex-01.stakeflow.io:10002',
        provider: 'Stakeflow'
      },
      {
        address: 'comdex-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/comdex',
      tx_page: 'https://ezstaking.app/comdex/txs/${txHash}',
      account_page: 'https://ezstaking.app/comdex/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/comdex',
      tx_page: 'https://www.mintscan.io/comdex/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Comdex-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Comdex-Mainnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Comdex-Mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'aneka',
      url: 'https://comdex.aneka.io/',
      tx_page: 'https://comdex.aneka.io/txs/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/comdex',
      tx_page: 'https://ping.pub/comdex/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/comdex',
      tx_page: 'https://atomscan.com/comdex/transactions/${txHash}',
      account_page: 'https://atomscan.com/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/comdex',
      account_page: 'https://stakeflow.io/comdex/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/comdex',
      tx_page: 'https://explorer.validatornode.com/comdex/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
    }
  ]
};
export default info;
