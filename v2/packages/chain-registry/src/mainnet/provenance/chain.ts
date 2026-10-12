import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'provenance',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://provenance.io/',
  prettyName: 'Provenance',
  chainType: 'cosmos',
  chainId: 'pio-mainnet-1',
  bech32Prefix: 'pb',
  daemonName: 'provenanced',
  nodeHome: '$HOME/Provenance',
  keyAlgos: ['secp256k1'],
  slip44: 505,
  fees: {
    feeTokens: [{
        denom: 'nhash',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/provenance-io/provenance',
    recommendedVersion: 'v1.31.0',
    compatibleVersions: ['v1.31.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.23'
    },
    binaries: {
      "linux/amd64": 'https://github.com/provenance-io/provenance/releases/download/v1.31.0/provenance-linux-amd64-v1.31.0.zip'
    },
    genesis: {
      name: 'v1.0.1',
      genesisUrl: 'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.53.8'
    },
    ibc: {
      type: 'go',
      version: '10.7.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.61.15',
      enabled: true
    },
    tag: 'v1.31.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.provenance.io/',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.ibs.team:443/rpc',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://provenance-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-rpc.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    rest: [
      {
        address: 'https://api.provenance.io',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://provenance.ibs.team:443/api',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance.api.pocket.network',
        provider: 'Pocket Network'
      },
      {
        address: 'https://provenance-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'provenance-grpc.panthea.eu:16780',
        provider: 'Panthea EU'
      },
      {
        address: 'provenance-grpc.polkachu.com:27090',
        provider: 'Polkachu'
      },
      {
        address: 'https://provenance-grpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      }
    ]
  },
  explorers: [
    {
      kind: 'Zonescan',
      url: 'https://zonescan.io/provenance',
      txPage: 'https://zonescan.io/provenance/transactions/${txHash}',
      accountPage: 'https://zonescan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/provenance',
      txPage: 'https://www.mintscan.io/provenance/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/provenance/address/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Provenance',
      txPage: 'https://explorer.stavr.tech/Provenance/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Provenance/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/provenance',
      txPage: 'https://ezstaking.app/provenance/txs/${txHash}',
      accountPage: 'https://ezstaking.app/provenance/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/provenance',
      txPage: 'https://atomscan.com/provenance/transactions/${txHash}',
      accountPage: 'https://atomscan.com/provenance/accounts/${accountAddress}'
    },
    {
      kind: 'moon-runners',
      url: 'https://moon-runners.net/provenance/mainnet',
      txPage: 'https://moon-runners.net/provenance/mainnet/finder?search=${txHash}',
      accountPage: 'https://moon-runners.net/provenance/mainnet/finder?search=${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
    }],
  snapshots: [
    {
      provider: 'High Stakes 🇨🇭',
      url: 'https://tools.highstakes.ch/snapshots/provenance',
      latestUrl: 'https://tools.highstakes.ch/files/provenance_goleveldb.tar.gz',
      type: 'pruned',
      dbBackend: 'goleveldb',
      frequency: 'every 3h',
      compression: 'tar',
      checksumAvailable: true
    },
    {
      url: 'https://polkachu.com/tendermint_snapshots/provenance',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    },
    {
      url: 'https://kleomedes.cloud/chains/provenance',
      latestUrl: 'https://api.kleomedes.network/api/v2/snapshots/provenance/latest',
      type: 'pruned',
      compression: 'zstd',
      provider: 'Kleomedes'
    }
  ]
};
export default info;