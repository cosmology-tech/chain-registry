import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lavatestnet1',
  status: 'killed',
  networkType: 'testnet',
  website: 'https://www.lavanet.xyz/',
  prettyName: 'Lava',
  chainType: 'cosmos',
  chainId: 'lava-testnet-1',
  bech32Prefix: 'lava@',
  daemonName: 'lavad',
  nodeHome: '$HOME/.lava',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulava',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulava'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/lavanet/lava',
    recommendedVersion: 'v0.12.1',
    compatibleVersions: ['v0.12.1'],
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v0.3.0',
      genesisUrl: 'https://raw.githubusercontent.com/lavanet/lava-config/main/testnet-1/genesis_json/genesis.json'
    },
    versions: [
      {
        name: 'v0.4.0',
        tag: 'v0.4.0',
        height: 838,
        nextVersionName: 'v0.4.3'
      },
      {
        name: 'v0.4.3',
        tag: 'v0.4.3',
        height: 22300,
        nextVersionName: 'v0.4.4'
      },
      {
        name: 'v0.4.4',
        tag: 'v0.4.4',
        height: 41735,
        nextVersionName: 'v0.5.2'
      },
      {
        name: 'v0.5.2',
        tag: 'v0.5.2',
        height: 63760,
        nextVersionName: 'v0.6.0-RC3'
      },
      {
        name: 'v0.6.0-RC3',
        tag: 'v0.6.0-RC3',
        height: 82570,
        nextVersionName: 'v0.7.0'
      },
      {
        name: 'v0.7.0',
        tag: 'v0.7.0',
        height: 102800,
        nextVersionName: 'v0.8.1'
      },
      {
        name: 'v0.8.1',
        tag: 'v0.8.1',
        height: 133100,
        nextVersionName: 'v0.9.8'
      },
      {
        name: 'v0.9.8',
        tag: 'v0.9.8',
        height: 163960,
        nextVersionName: 'v0.10.1'
      },
      {
        name: 'v0.10.1',
        tag: 'v0.10.1',
        height: 184620,
        nextVersionName: 'v0.11.2'
      },
      {
        name: 'v0.11.2',
        tag: 'v0.11.2',
        height: 208115,
        nextVersionName: 'v0.12.1',
        binaries: {
          "linux/amd64": 'https://github.com/lavanet/lava/releases/download/v0.11.2/lavad-v0.11.2-linux-amd64'
        }
      },
      {
        name: 'v0.12.1',
        tag: 'v0.12.1',
        height: 227130,
        recommendedVersion: 'v0.12.1',
        compatibleVersions: ['v0.12.1'],
        consensus: {
          type: 'tendermint',
          version: '0.34'
        },
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          enabled: false
        },
        ibc: {
          type: 'go',
          version: 'v7.2.0',
          icsEnabled: ['ics20-1']
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: 'v7.2.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: '0.30',
      enabled: false
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primaryColorHex: '#D7001F'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png'
  },
  apis: {
    rpc: [{
        address: 'https://public-rpc-testnet2.lavanet.xyz/',
        provider: 'Lava'
      }, {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥'
      }],
    rest: [{
        address: 'https://public-rpc-testnet2.lavanet.xyz/rest/',
        provider: 'Lava'
      }, {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      txPage: 'https://lava.explorers.guru//transaction/${txHash}',
      accountPage: 'https://lava.explorers.guru//account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      txPage: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      txPage: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}'
    }
  ],
  keywords: ['rpc', 'api']
};
export default info;