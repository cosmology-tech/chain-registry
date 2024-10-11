import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'crescent',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Crescent',
  chainType: 'cosmos',
  chainId: 'crescent-1',
  bech32Prefix: 'cre',
  daemonName: 'crescentd',
  nodeHome: '$HOME/.crescent',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucre',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ucre'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/crescent-network/crescent',
    recommendedVersion: 'v4.2.0',
    compatibleVersions: ['v4.2.0'],
    binaries: {
      "linux/amd64": 'https://github.com/crescent-network/crescent/releases/download/v4.2.0/crescentd-v4.2.0-linux-amd64',
      "darwin/arm64": 'https://github.com/crescent-network/crescent/releases/download/v4.2.0/crescentd-v4.2.0-darwin-arm64'
    },
    genesis: {
      genesisUrl: 'https://github.com/crescent-network/launch/raw/main/mainnet/crescent-1/genesis.json.tar.gz'
    },
    versions: [
      {
        name: 'v1',
        tag: 'v1.0.0',
        height: 0,
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0']
      },
      {
        name: 'v1.1',
        tag: 'v1.1.0',
        height: 48000,
        recommendedVersion: '1.1.0',
        compatibleVersions: ['v1.1.0']
      },
      {
        name: 'v2',
        tag: 'v2.3.0',
        height: 1384100,
        proposal: 12,
        recommendedVersion: 'v2.3.0',
        compatibleVersions: [
          'v2.3.0',
          'v2.2.0',
          'v2.1.1',
          'v2.1.0'
        ]
      },
      {
        name: 'v3',
        tag: 'v3.0.0',
        height: 3932000,
        proposal: 29,
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0']
      },
      {
        name: 'v4',
        tag: 'v4.0.0',
        height: 4415902,
        proposal: 35,
        recommendedVersion: 'v4.0.0',
        compatibleVersions: ['v4.0.0'],
        nextVersionName: 'v4.1'
      },
      {
        name: 'v4.1',
        tag: 'v4.1.1',
        height: 6500000,
        recommendedVersion: 'v4.1.1',
        compatibleVersions: ['v4.1.1', 'v4.1.0'],
        nextVersionName: 'v4.2'
      },
      {
        name: 'v4.2',
        tag: 'v4.2.0',
        height: 6915000,
        recommendedVersion: 'v4.2.0',
        compatibleVersions: ['v4.2.0'],
        binaries: {
          "linux/amd64": 'https://github.com/crescent-network/crescent/releases/download/v4.2.0/crescentd-v4.2.0-linux-amd64',
          "darwin/arm64": 'https://github.com/crescent-network/crescent/releases/download/v4.2.0/crescentd-v4.2.0-darwin-arm64'
        }
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet.crescent.network:26657',
        provider: 'crescent'
      },
      {
        address: 'https://crescent-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-crescent.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://crescent.rpc.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://crescent-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-crescent.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://rpc-crescent-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://crescent-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://mainnet.crescent.network:1317',
        provider: 'crescent'
      },
      {
        address: 'https://api-crescent.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://crescent-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://crescent.rest.stakin-nodes.com',
        provider: 'Stakin'
      },
      {
        address: 'https://api-crescent.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://crescent-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-crescent-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://crescent-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://lcd.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [
      {
        address: 'crescent-grpc.polkachu.com:14590',
        provider: 'Polkachu'
      },
      {
        address: 'crescent.grpc.stakin-nodes.com:443',
        provider: 'Stakin'
      },
      {
        address: 'crescent-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-crescent.cosmos-spaces.cloud:2270',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc-crescent-01.stakeflow.io:1402',
        provider: 'Stakeflow'
      },
      {
        address: 'crescent-grpc.w3coins.io:14590',
        provider: 'w3coins'
      },
      {
        address: 'https://grpc.crescent.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/crescent',
      txPage: 'https://ezstaking.app/crescent/txs/${txHash}',
      accountPage: 'https://ezstaking.app/crescent/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/crescent',
      txPage: 'https://ping.pub/crescent/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://crescent.explorers.guru',
      txPage: 'https://crescent.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/crescent',
      txPage: 'https://atomscan.com/crescent/transactions/${txHash}',
      accountPage: 'https://atomscan.com/crescent/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/crescent',
      accountPage: 'https://stakeflow.io/crescent/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
      theme: {
        primaryColorHex: '#3c2832'
      }
    }]
};
export default info;