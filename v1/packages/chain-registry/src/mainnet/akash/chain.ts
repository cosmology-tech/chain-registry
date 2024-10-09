import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'akash',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://akash.network/',
  pretty_name: 'Akash',
  chain_type: 'cosmos',
  chain_id: 'akashnet-2',
  bech32_prefix: 'akash',
  daemon_name: 'akash',
  node_home: '$HOME/.akash',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uakt',
        fixed_min_gas_price: 0.00025,
        low_gas_price: 0.00025,
        average_gas_price: 0.0025,
        high_gas_price: 0.025
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uakt'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.16'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
  },
  description: 'Akash is open-source Supercloud that lets users buy and sell computing resources securely and efficiently. Purpose-built for public utility.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.akash.forbole.com:443',
        provider: 'forbole'
      },
      {
        address: 'https://rpc-akash.ecostake.com:443',
        provider: 'ecostake'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/akash',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://akash-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-akash.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-akash-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'http://akash.c29r3.xyz:80/rpc',
        provider: 'c29r3'
      },
      {
        address: 'https://akash-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://akash-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-akash-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://akash-mainnet-rpc.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://akash-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://akash-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://akash-rpc.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://rpc-akash.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/akash/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://akash.declab.pro:26601',
        provider: 'Decloud Nodes Lab'
      }
    ],
    rest: [
      {
        address: 'https://api.akash.forbole.com:443',
        provider: 'forbole'
      },
      {
        address: 'https://rest-akash.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://rest.lavenderfive.com:443/akash',
        provider: 'Lavender.Five Nodes'
      },
      {
        address: 'https://akash-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-akash.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api-akash-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://akash.c29r3.xyz:443/api',
        provider: 'c29r3'
      },
      {
        address: 'https://akash-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://akash-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api-akash-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://akash-mainnet-rest.cosmonautstakes.com:443',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://akash-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://akash-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://akash-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://api-akash.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/akash/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://akash.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      }
    ],
    grpc: [
      {
        address: 'grpc-akash-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'akash.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'akash-grpc.polkachu.com:12890',
        provider: 'Polkachu'
      },
      {
        address: 'akash-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-akash.cosmos-spaces.cloud:1110',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-akash-01.stakeflow.io:1502',
        provider: 'Stakeflow'
      },
      {
        address: 'akash-grpc.w3coins.io:12890',
        provider: 'w3coins'
      },
      {
        address: 'akash-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://akash.declab.pro:9001',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'grpc-akash.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/akash',
      tx_page: 'https://ezstaking.app/akash/txs/${txHash}',
      account_page: 'https://ezstaking.app/akash/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/akash',
      tx_page: 'https://www.mintscan.io/akash/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/akash-network',
      tx_page: 'https://ping.pub/akash-network/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/akash',
      tx_page: 'https://atomscan.com/akash/transactions/${txHash}',
      account_page: 'https://atomscan.com/akash/accounts/${accountAddress}'
    },
    {
      kind: 'cloudmos',
      url: 'https://cloudmos.io/blocks',
      tx_page: 'https://cloudmos.io/transactions/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/akash',
      account_page: 'https://stakeflow.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/akash-network',
      tx_page: 'https://explorer.validatornode.com/akash-network/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Akash',
      tx_page: 'https://explorer.declab.pro/Akash/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/akash',
      tx_page: 'https://mainnet.whispernode.com/akash/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/akash/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
      theme: {
        primary_color_hex: '#bc342c'
      }
    }]
};
export default info;