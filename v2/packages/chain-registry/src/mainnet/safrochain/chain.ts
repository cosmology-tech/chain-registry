import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'safrochain',
  chainType: 'cosmos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://safrochain.com',
  prettyName: 'Safrochain',
  chainId: 'safrochain-1',
  bech32Prefix: 'addr_safro',
  bech32Config: {
    bech32PrefixAccAddr: 'addr_safro',
    bech32PrefixAccPub: 'addr_safropub',
    bech32PrefixValAddr: 'addr_safrovaloper',
    bech32PrefixValPub: 'addr_safrovaloperpub',
    bech32PrefixConsAddr: 'addr_safrovalcons',
    bech32PrefixConsPub: 'addr_safrovalconspub'
  },
  daemonName: 'safrochaind',
  nodeHome: '$HOME/.safrochain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usaf',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.0625,
        highGasPrice: 0.075
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usaf'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Safrochain-Org/safrochain-node',
    recommendedVersion: 'v0.2.2',
    compatibleVersions: ['v0.2.2'],
    tag: 'v0.2.2',
    language: {
      type: 'go',
      version: '1.25.8'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.14'
    },
    consensus: {
      type: 'cometbft',
      version: '0.38.21'
    },
    ibc: {
      type: 'go',
      version: '8.7.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    genesis: {
      name: 'genesis',
      genesisUrl: 'https://raw.githubusercontent.com/Safrochain-Org/mainnet-genesis/main/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/safrochain/images/saf.svg'
    }],
  description: 'Safrochain is building a mobile-first, mobile-money-powered blockchain that connects blockchain infrastructure to mobile money networks—turning mobile wallets into gateways to stablecoins, programmable finance, cross-border settlement, and lower-cost interoperable transfers across operators and borders.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.safrochain.network',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://rpc1.safrochain.network',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://rpc2.safrochain.network',
        provider: 'Safrochain Foundation',
        archive: true
      },
      {
        address: 'https://rpc.nodesafe-app.xyz/safro/',
        provider: 'NodeSafe'
      }
    ],
    rest: [
      {
        address: 'https://api.safrochain.network',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://api1.safrochain.network',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://api2.safrochain.network',
        provider: 'Safrochain Foundation',
        archive: true
      },
      {
        address: 'https://api.nodesafe-app.xyz/safro',
        provider: 'NodeSafe'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.safrochain.network:443',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://grpc1.safrochain.network:443',
        provider: 'Safrochain Foundation'
      },
      {
        address: 'https://grpc2.safrochain.network:443',
        provider: 'Safrochain Foundation',
        archive: true
      },
      {
        address: 'https://grpc-safro.nodesafe-app.xyz:443',
        provider: 'NodeSafe'
      }
    ],
    grpcWeb: [{
        address: 'https://grpc-web.safrochain.network',
        provider: 'Safrochain Foundation'
      }],
    wss: [{
        address: 'wss://rpc.safrochain.network/websocket',
        provider: 'Safrochain Foundation'
      }, {
        address: 'wss://rpc1.safrochain.network/websocket',
        provider: 'Safrochain Foundation'
      }]
  },
  snapshots: [{
      provider: 'Safrochain Foundation',
      url: 'https://snapshots.safrochain.network',
      type: 'archive'
    }],
  explorers: [{
      kind: 'safroexplorer',
      url: 'https://explorer.safrochain.com/',
      txPage: 'https://explorer.safrochain.com/tx/${txHash}',
      accountPage: 'https://explorer.safrochain.com/address/${accountAddress}',
      validatorPage: 'https://explorer.safrochain.com/validator/${validatorAddress}'
    }, {
      kind: 'NodeSafe',
      url: 'https://explorer.nodesafe-app.xyz/safrochain/staking',
      txPage: 'https://explorer.nodesafe-app.xyz/safrochain/tx/${txHash}',
      accountPage: 'https://explorer.nodesafe-app.xyz/safrochain/account/${accountAddress}',
      validatorPage: 'https://explorer.nodesafe-app.xyz/safrochain/staking/${validatorAddress}'
    }],
  keywords: [
    'safrochain',
    'saf',
    'cosmos',
    'ibc',
    'payments'
  ]
};
export default info;