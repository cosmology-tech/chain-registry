import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'canto',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://canto.io/',
  prettyName: 'Canto',
  chainType: 'cosmos',
  chainId: 'canto_7700-1',
  bech32Prefix: 'canto',
  nodeHome: '$HOME/.cantod',
  daemonName: 'cantod',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'acanto',
        fixedMinGasPrice: 1000000000000,
        lowGasPrice: 1000000000000,
        averageGasPrice: 2000000000000,
        highGasPrice: 3000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'acanto'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Canto-Network/Canto',
    recommendedVersion: 'v7.0.0',
    compatibleVersions: ['v7.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Canto-Network/Canto/genesis/Networks/Mainnet/genesis.json'
    },
    versions: [
      {
        name: 'v5.0.0',
        recommendedVersion: 'v5.0.0',
        compatibleVersions: ['v5.0.0'],
        nextVersionName: 'v6.0.0'
      },
      {
        name: 'v6.0.0',
        recommendedVersion: 'v6.0.0',
        compatibleVersions: ['v6.0.0'],
        nextVersionName: 'v7.0.0'
      },
      {
        name: 'v7.0.0',
        recommendedVersion: 'v7.0.0',
        compatibleVersions: ['v7.0.0'],
        proposal: 113,
        height: 6055770,
        nextVersionName: ''
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://canto-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:26657',
        provider: 'Althea'
      },
      {
        address: 'https://canto-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-canto.kewrnode.com',
        provider: 'Kewr Node'
      }
    ],
    rest: [
      {
        address: 'https://api.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://canto-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-canto.kewrnode.com',
        provider: 'Kewr Node'
      }
    ],
    grpc: [
      {
        address: 'canto-grpc.polkachu.com:15590',
        provider: 'Polkachu'
      },
      {
        address: 'grpc.canto.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://grpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:9090',
        provider: 'Althea'
      },
      {
        address: 'canto-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://canto.neobase.one/',
        provider: 'NeoBase'
      },
      {
        address: 'https://canto.evm.chandrastation.com',
        provider: 'Chandra Station'
      },
      {
        address: 'https://canto.slingshot.finance',
        provider: 'Slingshot'
      },
      {
        address: 'https://jsonrpc.canto.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://evm-rpc.canto.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://canto.gravitychain.io:8545',
        provider: 'althea'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://cosmos-explorers.neobase.one/canto',
      txPage: 'https://cosmos-explorers.neobase.one/canto/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/canto',
      txPage: 'https://explorer.tcnetwork.io/canto/transaction/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/canto',
      txPage: 'https://ezstaking.app/canto/txs/${txHash}',
      accountPage: 'https://ezstaking.app/canto/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Canto-Mainnet',
      txPage: 'https://explorer.stavr.tech/Canto-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Canto-Mainnet/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/canto/images/canto.svg',
      theme: {
        primaryColorHex: '#1c1f1f'
      }
    }]
};
export default info;