import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'prysmdevnet',
  status: 'live',
  networkType: 'devnet',
  website: 'https://www.prysm.network/',
  prettyName: 'Prysm Devnet',
  chainType: 'cosmos',
  chainId: 'prysm-devnet-1',
  bech32Prefix: 'prysm',
  daemonName: 'prysm',
  nodeHome: '$HOME/.prysm',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uprysm',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uprysm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/kleomedes/prysm',
    recommendedVersion: 'v0.1.0-devnet',
    compatibleVersions: ['v0.1.0-devnet'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.10'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/kleomedes/prysm/refs/heads/main/network/prysm-devnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.8'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    }
  },
  logoURIs: {
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
      },
      {
        address: 'wss://prysm-testnet-rpc.ibs.team/websocket',
        provider: 'Inter Blockchain Services'
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
      },
      {
        address: 'https://prysm-testnet-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
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
      },
      {
        address: 'https://prysm-testnet-api.ibs.team',
        provider: 'Inter Blockchain Services'
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
      txPage: 'https://explorer.kleomedes.network/prysm/tx/${txHash}',
      accountPage: 'https://explorer.kleomedes.network/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.cogwheel.zone/prysm',
      txPage: 'https://explorer.cogwheel.zone/prysm/tx/${txHash}',
      accountPage: 'https://explorer.cogwheel.zone/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.mictonode.com/Prysm-Testnet',
      txPage: 'https://explorer.mictonode.com/Prysm-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.mictonode.com/Prysm-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ITRocket',
      url: 'https://testnet.itrocket.net/prysm',
      txPage: 'https://testnet.itrocket.net/prysm/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/prysm/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.sychonix.com/prysm-testnet',
      txPage: 'https://explorer.sychonix.com/prysm-testnet/tx/${txHash}',
      accountPage: 'https://explorer.sychonix.com/prysm-testnet/account/${accountAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://explorer.tech-coha05.xyz/Prysm',
      txPage: 'https://explorer.tech-coha05.xyz/Prysm/tx/${txHash}',
      accountPage: 'https://explorer.tech-coha05.xyz/Prysm/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
      theme: {
        primaryColorHex: '#cf654f'
      }
    }]
};
export default info;