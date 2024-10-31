import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sommelier',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sommelier.finance/',
  prettyName: 'Sommelier',
  chainType: 'cosmos',
  chainId: 'sommelier-3',
  bech32Prefix: 'somm',
  daemonName: 'sommelier',
  nodeHome: '$HOME/.sommelier',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usomm',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usomm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/PeggyJV/sommelier',
    recommendedVersion: 'v7.0.1',
    compatibleVersions: ['v7.0.0', 'v7.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_windows_amd64.tar.gz'
    },
    cosmosSdkVersion: 'v0.46.14',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-3/genesis.json'
    },
    versions: [
      {
        name: 'v5.0.0',
        recommendedVersion: 'v5.0.0',
        compatibleVersions: ['v5.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v5.0.0/sommelier_5.0.0_windows_amd64.tar.gz'
        }
      },
      {
        name: 'v6.0.0',
        recommendedVersion: 'v6.0.0',
        compatibleVersions: ['v6.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v6.0.0/sommelier_6.0.0_windows_amd64.tar.gz'
        },
        nextVersionName: 'v7'
      },
      {
        name: 'v7',
        proposal: 119,
        height: 13010200,
        recommendedVersion: 'v7.0.1',
        compatibleVersions: ['v7.0.0', 'v7.0.1'],
        binaries: {
          "linux/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_amd64.tar.gz',
          "linux/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_linux_arm64.tar.gz',
          "darwin/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_amd64.tar.gz',
          "darwin/arm64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_darwin_arm64.tar.gz',
          "windows/amd64": 'https://github.com/PeggyJV/sommelier/releases/download/v7.0.1/sommelier_7.0.1_windows_amd64.tar.gz'
        },
        cosmosSdkVersion: 'v0.46.14',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.28'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.46.14'
        },
        ibc: {
          type: 'go',
          version: 'v6.2.0'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.46.14'
    },
    ibc: {
      type: 'go',
      version: 'v6.2.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
  },
  description: 'Automated vaults find best-in-class yields while mitigating risk.',
  apis: {
    rpc: [
      {
        address: 'https://sommelier-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://somm.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/sommelier',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://sommelier-rpc.w3coins.io',
        provider: 'w3coins'
      }
    ],
    rest: [
      {
        address: 'https://api-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://sommelier-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://som.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rest.lavenderfive.com:443/sommelier',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'sommelier-grpc.polkachu.com:14190',
        provider: 'Polkachu'
      },
      {
        address: 'somm.grpc.m.stavr.tech:114',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sommelier.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'sommelier-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.sommelier.nodexcapital.com',
        provider: '⚡NodeX Validator⚡'
      },
      {
        address: 'sommelier-grpc.w3coins.io:14190',
        provider: 'w3coins'
      },
      {
        address: 'grpc.sommelier.validatus.com',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'sommscan',
      url: 'https://sommscan.io',
      txPage: 'https://sommscan.io'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sommelier',
      txPage: 'https://www.mintscan.io/sommelier/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/sommelier/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sommelier',
      txPage: 'https://ezstaking.app/sommelier/txs/${txHash}',
      accountPage: 'https://ezstaking.app/sommelier/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/sommelier',
      txPage: 'https://staking-explorer.com/transaction.php?chain=sommelier&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=sommelier&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sommelier-Mainnet',
      txPage: 'https://explorer.stavr.tech/Sommelier-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Sommelier-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/sommelier',
      txPage: 'https://explorer.nodexcapital.com/sommelier/tx/${txHash}',
      accountPage: 'https://explorer.nodexcapital.com/sommelier/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sommelier',
      txPage: 'https://atomscan.com/sommelier/transactions/${txHash}',
      accountPage: 'https://atomscan.com/sommelier/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg',
      theme: {
        primaryColorHex: '#f36353'
      }
    }]
};
export default info;