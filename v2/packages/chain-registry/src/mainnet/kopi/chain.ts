import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kopi',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://app.kopi.money',
  prettyName: 'Kopi',
  chainType: 'cosmos',
  chainId: 'luwak-1',
  daemonName: 'kopid',
  nodeHome: '$HOME/.kopid',
  bech32Prefix: 'kopi',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ukopi',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ukopi'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/kopi-money/kopi',
    recommendedVersion: 'v0.6.5.1',
    genesis: {
      genesisUrl: 'https://data.kopi.money/genesis.json'
    }
  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://rpc.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rpc.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rpc.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi-rpc.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://rpc-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-rpc.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-rpc.bluestake.net:443',
        provider: 'Bluestake'
      },
      {
        address: 'https://rpc-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi-rpc.node9x.com/',
        provider: 'Node9x'
      },
      {
        address: 'https://kopi.rpc.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc.kopi.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://rest.kopi.money',
        provider: 'Kopi Foundation'
      },
      {
        address: 'https://rpc.kopi.chaintools.tech',
        provider: 'Chaintools'
      },
      {
        address: 'https://kopi-rest.cosmoscan.com',
        provider: 'Cosmoscan'
      },
      {
        address: 'https://kopi-rest.stakerhouse.com',
        provider: 'Stakerhouse'
      },
      {
        address: 'https://kopi-api.moonbridge.org',
        provider: 'Moonbridge'
      },
      {
        address: 'https://api-kopid.vinjan.xyz/',
        provider: 'Vinjan'
      },
      {
        address: 'https://kopi-mainnet-api.bonynode.online',
        provider: 'Bony'
      },
      {
        address: 'https://kopi-api.bluestake.net',
        provider: 'Bluestake'
      },
      {
        address: 'https://api-kopi.sychonix.com',
        provider: 'Sychonix'
      },
      {
        address: 'https://kopi.api.nodeshub.online/',
        provider: 'NodesHub'
      },
      {
        address: 'https://kopi-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api.kopi.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'https://kopi.grpc.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'kopi-mainnet-grpc.bonynode.online:443',
        provider: 'Bony'
      },
      {
        address: 'kopi-grpc.stakerhouse.com:443',
        provider: 'Stakerhouse'
      },
      {
        address: 'kopi-grpc.moonbridge.org:443',
        provider: 'Moonbridge'
      },
      {
        address: 'kopi-grpc.node9x.com:443',
        provider: 'Node9x'
      },
      {
        address: 'kopi-grpc.polkachu.com:27690',
        provider: 'Polkachu'
      },
      {
        address: 'https://grpc.kopi.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'Kopi Foundation Explorer',
      url: 'https://explorer.kopi.money/',
      txPage: 'https://explorer.kopi.money/luwak-1/tx/${txHash}',
      accountPage: 'https://explorer.kopi.money/luwak-1/account/${accountAddress}'
    },
    {
      kind: 'CzCryptoman Explorer',
      url: 'https://explorer.czcryptoman.com/kopi-mainnet',
      txPage: 'https://explorer.czcryptoman.com/kopi-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.czcryptoman.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Sychonix Explorer',
      url: 'https://explorer.sychonix.com/kopi-mainnet',
      txPage: 'https://explorer.sychonix.com/kopi-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.sychonix.com/kopi-mainnet/account/${accountAddress}'
    },
    {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/Kopi',
      txPage: 'https://explorer.nodeshub.online/Kopi/txs/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/Kopi/account/${accountAddress}'
    },
    {
      kind: 'Bony Explorer',
      url: 'https://explorer.bonynode.online/kopi/',
      txPage: 'https://explorer.bonynode.online/kopi/txs/${txHash}',
      accountPage: 'https://explorer.bonynode.online/kopi/account/${accountAddress}'
    },
    {
      kind: 'Moonbridge Explorer',
      url: 'https://explorer.moonbridge.org/kopi',
      txPage: 'https://explorer.moonbridge.org/kopi/txs/${txHash}',
      accountPage: 'https://explorer.moonbridge.org/kopi/account/${accountAddress}'
    },
    {
      kind: 'Cosmoscan Explorer',
      url: 'https://cosmoscan.com/kopi',
      txPage: 'https://cosmoscan.com/kopi/txs/${txHash}',
      accountPage: 'https://cosmoscan.com/kopi/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/kopi/',
      txPage: 'https://explorer.nodestake.org/kopi/txs/${txHash}',
      accountPage: 'https://explorer.nodestake.org/kopi/account/${accountAddress}'
    }
  ],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
    }]
};
export default info;