import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'neutron',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Neutron',
  chainType: 'cosmos',
  chainId: 'neutron-1',
  bech32Prefix: 'neutron',
  website: 'https://neutron.org/',
  daemonName: 'neutrond',
  nodeHome: '$HOME/.neutrond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'untrn',
        lowGasPrice: 0.0053,
        averageGasPrice: 0.0053,
        highGasPrice: 0.0053
      },
      {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        lowGasPrice: 0.0008,
        averageGasPrice: 0.0008,
        highGasPrice: 0.0008
      },
      {
        denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        lowGasPrice: 0.008,
        averageGasPrice: 0.008,
        highGasPrice: 0.008
      },
      {
        denom: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        lowGasPrice: 2903231.6597,
        averageGasPrice: 2903231.6597,
        highGasPrice: 2903231.6597
      },
      {
        denom: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
        lowGasPrice: 2564102564.1026,
        averageGasPrice: 2564102564.1026,
        highGasPrice: 2564102564.1026
      },
      {
        denom: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
        lowGasPrice: 0.0004,
        averageGasPrice: 0.0004,
        highGasPrice: 0.0004
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'untrn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/neutron-org/neutron',
    recommendedVersion: 'v5.0.2',
    compatibleVersions: ['v5.0.2'],
    binaries: {
      "linux/amd64": 'https://github.com/neutron-org/neutron/releases/download/v5.0.2/neutrond-linux-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.15'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/neutron-org/cosmos-sdk',
      version: 'v0.50.10',
      tag: 'v0.50.10-neutron'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.2'
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/neutron-org/wasmd',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.svg'
  },
  description: 'The most secure CosmWasm platform in Cosmos, Neutron lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-voidara.neutron-1.neutron.org',
        provider: 'Neutron'
      },
      {
        address: 'https://rpc-pulsarix.neutron-1.neutron.org',
        provider: 'Neutron'
      },
      {
        address: 'https://rpc.novel.remedy.tm.p2p.org',
        provider: 'P2P'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/neutron',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-neutron.whispernode.com',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://rpc.neutron.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://neutron-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://rpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://rpc.neutron.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://neutron.drpc.org',
        provider: 'dRPC'
      },
      {
        address: 'https://neutron-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api.novel.remedy.tm.p2p.org',
        provider: 'P2P'
      },
      {
        address: 'https://rest.lavenderfive.com:443/neutron',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-neutron.whispernode.com',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'http://api.neutron.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://neutron-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://lcd.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://api.neutron.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://neutron-api.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron'
      },
      {
        address: 'neutron-grpc-pub.rpc.p2p.world:3001',
        provider: 'P2P'
      },
      {
        address: 'neutron.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-neutron.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'grpc-neutron.cosmos-spaces.cloud:3090',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc.neutron.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'neutron-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://grpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'rpc.neutron.quokkastake.io:9090',
        provider: '🐹 Quokka Stake'
      }
    ]
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      txPage: 'https://www.mintscan.io/neutron/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/neutron/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/neutron',
      txPage: 'https://ezstaking.app/neutron/txs/${txHash}',
      accountPage: 'https://ezstaking.app/neutron/account/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/neutron',
      txPage: 'https://mainnet.whispernode.com/neutron/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/neutron/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.svg',
      theme: {
        primaryColorHex: '#000000',
        backgroundColorHex: '#00000000',
        circle: false
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
      theme: {
        primaryColorHex: '#040404',
        backgroundColorHex: '#000000',
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg'
    }
  ]
};
export default info;