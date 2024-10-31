import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stafihub',
  chainType: 'cosmos',
  chainId: 'stafihub-1',
  website: 'https://stafihub.io/',
  prettyName: 'StaFi Hub',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'stafi',
  daemonName: 'stafihubd',
  nodeHome: '$HOME/.stafihub',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufis',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufis'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/stafihub/stafihub',
    recommendedVersion: 'v0.5.0',
    compatibleVersions: ['v0.5.0'],
    cosmosSdkVersion: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/stafihub/network/main/mainnets/stafihub-1(dragonberry)/genesis.json'
    },
    versions: [
      {
        name: 'v020',
        tag: 'v0.2.3',
        height: 0,
        nextVersionName: 'v030'
      },
      {
        name: 'v030',
        tag: 'v0.3.0',
        height: 2626590,
        proposal: 1,
        nextVersionName: 'v040'
      },
      {
        name: 'v040',
        tag: 'v0.4.0',
        height: 3766566,
        proposal: 2,
        nextVersionName: 'v050'
      },
      {
        name: 'v050',
        tag: 'v0.5.0',
        height: 5868372,
        proposal: 4,
        recommendedVersion: 'v0.5.0',
        compatibleVersions: ['v0.5.0'],
        cosmosSdkVersion: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        nextVersionName: 'v060',
        sdk: {
          type: 'cosmos',
          version: '0.46'
        },
        ibc: {
          type: 'go',
          version: '5.2.1',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.46'
    },
    ibc: {
      type: 'go',
      version: '5.2.1',
      icsEnabled: ['ics20-1']
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://rpc.stafihub.nodestake.top:443',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://public-rest-rpc1.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rest-rpc2.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://api.stafihub.nodestake.top',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'public-grpc-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'public-grpc-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'grpc.stafihub.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'stafihub.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stafi',
      txPage: 'https://www.mintscan.io/stafi/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/stafi/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stafihub',
      txPage: 'https://ezstaking.app/stafihub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/stafihub/account/${accountAddress}'
    },
    {
      kind: 'ping-pub',
      url: 'https://ping.pub/stafihub',
      txPage: 'https://ping.pub/stafihub/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/stafihub',
      txPage: 'https://staking-explorer.com/transaction.php?chain=stafihub&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=stafihub&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stafihub',
      txPage: 'https://atomscan.com/stafihub/transactions/${txHash}',
      accountPage: 'https://atomscan.com/stafihub/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png'
  },
  keywords: ['liquid staking'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png',
      theme: {
        primaryColorHex: '#100d10'
      }
    }]
};
export default info;