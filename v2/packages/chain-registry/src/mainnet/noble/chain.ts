import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'noble',
  chainType: 'cosmos',
  chainId: 'noble-1',
  website: 'https://nobleassets.xyz/',
  prettyName: 'Noble',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'noble',
  daemonName: 'nobled',
  nodeHome: '$HOME/.noble',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdc',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.1,
        highGasPrice: 0.2
      }, {
        denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.02,
        highGasPrice: 0.02
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/strangelove-ventures/noble',
    recommendedVersion: 'v6.0.0',
    compatibleVersions: ['v6.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    genesis: {
      name: 'v1.0.0',
      genesisUrl: 'https://raw.githubusercontent.com/strangelove-ventures/noble-networks/main/mainnet/noble-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/noble-assets/cosmos-sdk',
      version: 'v0.45.16',
      tag: 'v0.45.16-send-restrictions'
    },
    ibc: {
      type: 'go',
      version: 'v4.6.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      enabled: false
    },
    tag: 'v6.0.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
  },
  description: 'The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.lavenderfive.com:443/noble',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://noble-rpc.owallet.io',
        provider: 'OWALLET'
      },
      {
        address: 'https://noble-rpc.polkachu.com:443',
        provider: 'Polkachu'
      }
    ],
    rest: [
      {
        address: 'https://noble-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/noble',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://noble-rest.owallet.io',
        provider: 'OWALLET'
      }
    ],
    grpc: [
      {
        address: 'noble-grpc.polkachu.com:21590',
        provider: 'Polkachu'
      },
      {
        address: 'noble.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'noble-grpc.owallet.io:9999',
        provider: 'OWALLET'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/noble',
      txPage: 'https://www.mintscan.io/noble/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/noble/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/noble',
      txPage: 'https://ezstaking.app/noble/txs/${txHash}',
      accountPage: 'https://ezstaking.app/noble/account/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/noble',
      accountPage: 'https://stakeflow.io/noble/accounts/${accountAddress}'
    },
    {
      kind: 'Valopers',
      url: 'https://noble.valopers.com/',
      txPage: 'https://noble.valopers.com/transactions/${txHash}',
      accountPage: 'https://noble.valopers.com/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
    }],
  snapshots: [{
      url: 'https://polkachu.com/tendermint_snapshots/noble',
      type: 'pruned',
      compression: 'lz4',
      checksumAvailable: false,
      provider: 'Polkachu'
    }]
};
export default info;