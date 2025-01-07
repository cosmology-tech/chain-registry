import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'akash',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://akash.network/',
  prettyName: 'Akash',
  chainType: 'cosmos',
  chainId: 'akashnet-2',
  bech32Prefix: 'akash',
  daemonName: 'akash',
  nodeHome: '$HOME/.akash',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uakt',
        fixedMinGasPrice: 0.00025,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uakt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/akash-network/node/',
    recommendedVersion: 'v0.36.0',
    compatibleVersions: ['v0.36.0'],
    binaries: {
      "linux/amd64": 'https://github.com/akash-network/node/releases/download/v0.36.0/akash_linux_amd64.zip',
      "linux/arm64": 'https://github.com/akash-network/node/releases/download/v0.36.0/akash_linux_arm64.zip'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27',
      repo: 'https://github.com/akash-network/cometbft',
      tag: 'v0.34.27-akash'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/akash-network/net/master/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    ibc: {
      type: 'go',
      version: 'v4.6.0'
    }
  },
  logoURIs: {
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
        address: 'http://akash.c29r3.xyz:80/rpc',
        provider: 'c29r3'
      },
      {
        address: 'https://akash-rpc.kleomedes.network',
        provider: 'Kleomedes'
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
        address: 'https://akash.declab.pro:26601',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://rpc.akash.bronbro.io:443',
        provider: 'Bro_n_Bro'
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
      },
      {
        address: 'https://lcd.akash.bronbro.io:443',
        provider: 'Bro_n_Bro'
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
      },
      {
        address: 'https://grpc.akash.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'akash-mainnet-grpc.cosmonautstakes.com:14090',
        provider: 'Cosmonaut Stakes'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/akash',
      txPage: 'https://ezstaking.app/akash/txs/${txHash}',
      accountPage: 'https://ezstaking.app/akash/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/akash',
      txPage: 'https://www.mintscan.io/akash/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/akash-network',
      txPage: 'https://ping.pub/akash-network/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/akash',
      txPage: 'https://staking-explorer.com/transaction.php?chain=akash&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=akash&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/akash',
      txPage: 'https://atomscan.com/akash/transactions/${txHash}',
      accountPage: 'https://atomscan.com/akash/accounts/${accountAddress}'
    },
    {
      kind: 'cloudmos',
      url: 'https://cloudmos.io/blocks',
      txPage: 'https://cloudmos.io/transactions/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/akash',
      accountPage: 'https://stakeflow.io/akash/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/akash-network',
      txPage: 'https://explorer.validatornode.com/akash-network/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Akash',
      txPage: 'https://explorer.declab.pro/Akash/tx/${txHash}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/akash',
      txPage: 'https://mainnet.whispernode.com/akash/tx/${txHash}',
      accountPage: 'https://mainnet.whispernode.com/akash/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
      theme: {
        primaryColorHex: '#bc342c'
      }
    }]
};
export default info;