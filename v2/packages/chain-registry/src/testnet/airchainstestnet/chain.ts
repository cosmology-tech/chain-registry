import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'airchainstestnet',
  status: 'live',
  website: 'https://airchains.io/',
  networkType: 'testnet',
  prettyName: 'Airchains Switchyard Testnet',
  chainType: 'cosmos',
  chainId: 'junction',
  bech32Prefix: 'air',
  daemonName: 'junctiond',
  nodeHome: '$HOME/.junctiond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'amf',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.005,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'amf'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/airchains-network/junction',
    recommendedVersion: 'v0.1.0',
    genesis: {
      genesisUrl: 'https://github.com/airchains-network/junction/releases/download/v0.1.0/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.3'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/airchainstestnet/images/airchains-logo.svg'
    }],
  description: 'Airchains',
  apis: {
    rpc: [
      {
        address: 'https://junction-rpc.validatorvn.com/',
        provider: 'Validator VN'
      },
      {
        address: 'https://airchains-testnet-rpc.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      },
      {
        address: 'https://junction-testnet-rpc.synergynodes.com/',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://airchains-rpc.anonid.top/',
        provider: 'Anonid Top'
      },
      {
        address: 'https://airchains-test.rpc.moonbridge.team/',
        provider: 'Moonbridge Team'
      },
      {
        address: 'https://airchains-rpc.chainad.org/',
        provider: 'Coin Hunterstr'
      },
      {
        address: 'https://airchains.rpc.t.stavr.tech/',
        provider: 'Stavr Tech'
      },
      {
        address: 'https://rpc.nodejumper.io/airchainstestnet',
        provider: 'Nodejumper'
      },
      {
        address: 'https://t-airchains.rpc.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://junction-rpc.kzvn.xyz/',
        provider: 'KZVN'
      },
      {
        address: 'https://airchains-rpc.elessarnodes.xyz/',
        provider: 'Elessar Nodes'
      },
      {
        address: 'https://junction-rpc.apollo-sync.com/',
        provider: 'Apollo Sync'
      },
      {
        address: 'https://rpc-airchain.danggia.xyz/',
        provider: 'DANGGIA'
      },
      {
        address: 'https://airchains-rpc.stakeme.pro/',
        provider: 'Stakeme'
      },
      {
        address: 'https://airchains-testnet-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://airchains-testnet-rpc.crouton.digital/',
        provider: 'Crouton Digital'
      },
      {
        address: 'https://airchains-testnet-rpc.itrocket.net/',
        provider: 'IT Rocket'
      },
      {
        address: 'https://rpc1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      }
    ],
    rest: [
      {
        address: 'https://rest.nodejumper.io/airchainstestnet',
        provider: 'Nodejumper'
      },
      {
        address: 'https://t-airchains.api.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://airchains.api.t.stavr.tech/',
        provider: 'Stavr Tech'
      },
      {
        address: 'https://airchains-api.chainad.org/',
        provider: 'Coin Hunterstr '
      },
      {
        address: 'https://junction-api.kzvn.xyz/',
        provider: 'KZVN'
      },
      {
        address: 'https://airchains-api.elessarnodes.xyz/',
        provider: 'Elessar Nodes'
      },
      {
        address: 'https://junction-api.apollo-sync.com/',
        provider: 'Apollo Sync'
      },
      {
        address: 'https://api-airchain.danggia.xyz/',
        provider: 'DANGGIA'
      },
      {
        address: 'https://airchains-rest.stakeme.pro/',
        provider: 'Stakeme'
      },
      {
        address: 'https://airchains-testnet-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://airchains-testnet-api.crouton.digital/',
        provider: 'Crouton Digital'
      },
      {
        address: 'https://airchains-testnet-api.itrocket.net/',
        provider: 'IT Rocket'
      },
      {
        address: 'https://rest1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      },
      {
        address: 'https://airchains-testnet-rest.cosmonautstakes.com/',
        provider: 'Cosmonaut Stakes'
      }
    ],
    grpc: [
      {
        address: 'airchains.grpc.t.stavr.tech:152',
        provider: 'Stavr Tech'
      },
      {
        address: 'airchains-testnet-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'airchains-testnet-grpc.crouton.digital:28190',
        provider: 'Crouton Digital'
      },
      {
        address: 'airchains-testnet-grpc.itrocket.net:443',
        provider: 'IT Rocket'
      },
      {
        address: 'http://grpc1.airchains.t.cosmostaking.com/',
        provider: 'Cosmostaking'
      },
      {
        address: 'airchains-testnet-grpc.cosmonautstakes.com:14190',
        provider: 'Cosmonaut Stakes'
      }
    ]
  },
  explorers: [
    {
      kind: 'Airchains',
      url: 'https://testnet.airchains.io',
      txPage: 'https://testnet.airchains.io/transaction/${txHash}',
      accountPage: 'https://testnet.airchains.io/address/${accountAddress}'
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.junction.explorers.guru/',
      txPage: 'https://testnet.junction.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.junction.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'Nodejumper',
      url: 'https://app.nodejumper.io/airchains-testnet/'
    },
    {
      kind: 'UTSA',
      url: 'https://exp.utsa.tech/airchains-test/',
      txPage: 'https://exp.utsa.tech/airchains-test/tx/${txHash}',
      accountPage: 'https://exp.utsa.tech/airchains-test/account/${accountAddress}'
    },
    {
      kind: 'Stavr Tech',
      url: 'https://explorer.stavr.tech/Airchains-Testnet',
      txPage: 'https://explorer.stavr.tech/Airchains-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Airchains-Testnet/${accountAddress}'
    },
    {
      kind: 'CoinHunters',
      url: 'https://explorer.coinhunterstr.com/Airchains',
      txPage: 'https://explorer.coinhunterstr.com/Airchains/tx/${txHash}',
      accountPage: 'https://explorer.coinhunterstr.com/Airchains/account/${accountAddress}'
    },
    {
      kind: 'KZVN',
      url: 'https://explorer.kzvn.xyz/airchains',
      txPage: 'https://explorer.kzvn.xyz/airchains/tx/${txHash}',
      accountPage: 'https://explorer.kzvn.xyz/airchains/account/${accountAddress}'
    },
    {
      kind: 'Elessar Nodes',
      url: 'https://explorer.elessarnodes.xyz/Airchains',
      txPage: 'https://explorer.elessarnodes.xyz/Airchains/tx/${txHash}',
      accountPage: 'https://explorer.elessarnodes.xyz/Airchains/account/${accountAddress}'
    },
    {
      kind: 'Apollo Sync',
      url: 'https://explorer.apollo-sync.com/',
      txPage: 'https://explorer.apollo-sync.com/tx/${txHash}',
      accountPage: 'https://explorer.apollo-sync.com/account/${accountAddress}'
    },
    {
      kind: 'Stakeme',
      url: 'https://airchains.exploreme.pro/',
      txPage: 'https://airchains.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'StakerHouse',
      url: 'https://cosmotracker.com/airchains',
      txPage: 'https://cosmotracker.com/airchains/tx/${txHash}',
      accountPage: 'https://cosmotracker.com/airchains/account/${accountAddress}'
    },
    {
      kind: 'IT Rocket',
      url: 'https://testnet.itrocket.net/airchains/',
      txPage: 'https://testnet.itrocket.net/airchains//tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/airchains/account/${accountAddress}'
    },
    {
      kind: 'Validator VN ',
      url: 'https://explorer.validatorvn.com/Airchains-Testnet',
      txPage: 'https://explorer.validatorvn.com/Airchains-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.validatorvn.com/Airchains-Testnet/account/${accountAddress}'
    }
  ]
};
export default info;