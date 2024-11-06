import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'prysmdevnet',
  status: 'live',
  network_type: 'devnet',
  website: 'https://www.prysm.network/',
  pretty_name: 'Prysm Devnet',
  chain_type: 'cosmos',
  chain_id: 'prysm-devnet-1',
  bech32_prefix: 'prysm',
  daemon_name: 'prysm',
  node_home: '$HOME/.prysm',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uprysm',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uprysm'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg'
  },
  description: 'Network layer blockchain providing foundational infrastructure, enhanced connectivity, and scalability.',
  apis: {
    wss: [
      {
        address: 'wss://prysm-testnet-rpc.cogwheel.zone/websocket',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'wss://prysm-testnet-rpc.mictonode.com/websocket',
        provider: 'MictoNode'
      },
      {
        address: 'wss://prysm-testnet-rpc.itrocket.net/websocket',
        provider: 'ITRocket'
      }
    ],
    rpc: [
      {
        address: 'https://prysm-rpc-devnet.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://prysm-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://prysm-testnet-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://prysm-rpc.validatorvn.com/',
        provider: 'ValidatorVN'
      },
      {
        address: 'https://prysm-testnet-rpc.validator247.com/',
        provider: 'Validator247'
      },
      {
        address: 'https://rpc-prysm.vinjan.xyz/',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://prysm-testnet-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://prysm-testnet-rpc.mictonode.com/',
        provider: 'MictoNode'
      },
      {
        address: 'https://rpc-prysm.josephtran.xyz/',
        provider: 'JosephTran'
      },
      {
        address: 'https://prysm-testnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc-prysm-t.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://rpc-prysm.coha05.com/',
        provider: 'Coha05 | Spider Node'
      }
    ],
    rest: [
      {
        address: 'https://prysm-api-devnet.kleomedes.network/',
        provider: 'Kleomedes'
      },
      {
        address: 'https://prysm-testnet-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://prysm-testnet-api.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://prysm-api.validatorvn.com/',
        provider: 'ValidatorVN'
      },
      {
        address: 'https://api-prysm.vinjan.xyz/',
        provider: 'Vinjan.Inc'
      },
      {
        address: 'https://prysm-testnet-api.validator247.com/',
        provider: 'Validator247'
      },
      {
        address: 'https://prysm-testnet-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://prysm-testnet-api.mictonode.com/',
        provider: 'MictoNode'
      },
      {
        address: 'https://api-prysm.josephtran.xyz/',
        provider: 'JosephTran'
      },
      {
        address: 'https://prysm-testnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://api-prysm-t.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://api-prysm.coha05.com',
        provider: 'Coha05 | Spider Node'
      }
    ],
    grpc: [
      {
        address: 'prysm-testnet-grpc.polkachu.com:29890',
        provider: 'Polkachu'
      },
      {
        address: 'http://144.76.70.103:32090/',
        provider: 'Validator247'
      },
      {
        address: 'https://prysm-testnet-grpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'prysm-grpc.validatorvn.com:44090',
        provider: 'ValidatorVN'
      },
      {
        address: 'prysm-testnet-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'prysm-testnet-grpc.mictonode.com:33090',
        provider: 'MictoNode'
      },
      {
        address: 'https://grpc-prysm.josephtran.xyz/',
        provider: 'JosephTran'
      },
      {
        address: 'prysm-testnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      }
    ]
  },
  explorers: [
    {
      kind: 'PingPub',
      url: 'https://explorer.kleomedes.network/prysm',
      tx_page: 'https://explorer.kleomedes.network/prysm/tx/${txHash}',
      account_page: 'https://explorer.kleomedes.network/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.cogwheel.zone/prysm',
      tx_page: 'https://explorer.cogwheel.zone/prysm/tx/${txHash}',
      account_page: 'https://explorer.cogwheel.zone/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.mictonode.com/Prysm-Testnet',
      tx_page: 'https://explorer.mictonode.com/Prysm-Testnet/tx/${txHash}',
      account_page: 'https://explorer.mictonode.com/Prysm-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/prysm',
      tx_page: 'https://testnet.itrocket.net/prysm/tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.sychonix.com/prysm-testnet',
      tx_page: 'https://explorer.sychonix.com/prysm-testnet/tx/${txHash}',
      account_page: 'https://explorer.sychonix.com/prysm-testnet/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.tech-coha05.xyz/Prysm',
      tx_page: 'https://explorer.tech-coha05.xyz/Prysm/tx/${txHash}',
      account_page: 'https://explorer.tech-coha05.xyz/Prysm/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
      theme: {
        primary_color_hex: '#cf654f'
      }
    }]
};
export default info;