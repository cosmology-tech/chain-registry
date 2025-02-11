import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sidechain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://side.one/',
  prettyName: 'Side Chain',
  chainType: 'cosmos',
  chainId: 'sidechain-1',
  bech32Prefix: 'side',
  daemonName: 'sided',
  nodeHome: '$HOME/.side',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uside',
        fixedMinGasPrice: 0.0006,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.0008,
        highGasPrice: 0.001
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uside'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/sideprotocol/side',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesisUrl: 'https://github.com/sideprotocol/networks/raw/main/mainnet/sidechain-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    ibc: {
      type: 'go',
      version: 'v8.4.0'
    },
    cosmwasm: {
      version: 'v0.53.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg'
  },
  description: 'The other side of Bitcoin, a fully Bitcoin-Compatible L1 blockchain for the BTCFi',
  apis: {
    rpc: [
      {
        address: 'https://rpc.side.one',
        provider: 'Side Protocol'
      },
      {
        address: 'https://rpc.side.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://side-rpc.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://side.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://side.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://side-mainnet-rpc.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc.side.bh.rocks',
        provider: 'BlockHunters'
      }
    ],
    rest: [
      {
        address: 'https://rest.side.one',
        provider: 'Side Protocol'
      },
      {
        address: 'https://api.side.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://side-api.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://side-rest.publicnode.com',
        provider: 'Allnodes'
      },
      {
        address: 'https://side.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://side-mainnet-api.itrocket.net',
        provider: 'ITRocket'
      },
      {
        address: 'https://api.side.bh.rocks',
        provider: 'BlockHunters'
      }
    ],
    grpc: [
      {
        address: 'grpc.side.one:443',
        provider: 'Side Protocol'
      },
      {
        address: 'grpc.sided.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'side-grpc.synergynodes.com:443',
        provider: 'Synergy Nodes'
      },
      {
        address: 'side-grpc.publicnode.com:443',
        provider: 'Allnodes'
      },
      {
        address: 'side.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'side-mainnet-grpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.side.bh.rocks:443',
        provider: 'BlockHunters'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping Pub',
      url: 'https://ping.pub/side',
      txPage: 'https://ping.pub/side/tx/${txHash}',
      accountPage: 'https://ping.pub/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.nodestake.org/side',
      txPage: 'https://explorer.nodestake.org/side/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://cosmosrun.info/side',
      txPage: 'https://cosmosrun.info/side/tx/${txHash}',
      accountPage: 'https://cosmosrun.info/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://explorer.kjnodes.com/side',
      txPage: 'https://explorer.kjnodes.com/side/tx/${txHash}',
      accountPage: 'https://explorer.kjnodes.com/side/account/${accountAddress}'
    },
    {
      kind: 'Ping Pub',
      url: 'https://bh.rocks/side',
      txPage: 'https://bh.rocks/side/tx/${txHash}',
      accountPage: 'https://bh.rocks/side/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sidechain/images/side.svg',
      theme: {
        primaryColorHex: '#f7771a'
      }
    }]
};
export default info;