import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'airchainstestnet',
  status: 'live',
  website: 'https://airchains.io/',
  network_type: 'testnet',
  pretty_name: 'Airchains Switchyard Testnet',
  chain_type: 'cosmos',
  chain_id: 'junction',
  bech32_prefix: 'air',
  daemon_name: 'junctiond',
  node_home: '$HOME/.junctiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'amf',
        fixed_min_gas_price: 0,
        low_gas_price: 0.00025,
        average_gas_price: 0.005,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'amf'
      }]
  },
  codebase: {

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
      tx_page: 'https://testnet.airchains.io/transaction/${txHash}',
      account_page: 'https://testnet.airchains.io/address/${accountAddress}'
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.junction.explorers.guru/',
      tx_page: 'https://testnet.junction.explorers.guru/transaction/${txHash}',
      account_page: 'https://testnet.junction.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'Nodejumper',
      url: 'https://app.nodejumper.io/airchains-testnet/'
    },
    {
      kind: 'UTSA',
      url: 'https://exp.utsa.tech/airchains-test/',
      tx_page: 'https://exp.utsa.tech/airchains-test/tx/${txHash}',
      account_page: 'https://exp.utsa.tech/airchains-test/account/${accountAddress}'
    },
    {
      kind: 'Stavr Tech',
      url: 'https://explorer.stavr.tech/Airchains-Testnet',
      tx_page: 'https://explorer.stavr.tech/Airchains-Testnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Airchains-Testnet/${accountAddress}'
    },
    {
      kind: 'CoinHunters',
      url: 'https://explorer.coinhunterstr.com/Airchains',
      tx_page: 'https://explorer.coinhunterstr.com/Airchains/tx/${txHash}',
      account_page: 'https://explorer.coinhunterstr.com/Airchains/account/${accountAddress}'
    },
    {
      kind: 'KZVN',
      url: 'https://explorer.kzvn.xyz/airchains',
      tx_page: 'https://explorer.kzvn.xyz/airchains/tx/${txHash}',
      account_page: 'https://explorer.kzvn.xyz/airchains/account/${accountAddress}'
    },
    {
      kind: 'Elessar Nodes',
      url: 'https://explorer.elessarnodes.xyz/Airchains',
      tx_page: 'https://explorer.elessarnodes.xyz/Airchains/tx/${txHash}',
      account_page: 'https://explorer.elessarnodes.xyz/Airchains/account/${accountAddress}'
    },
    {
      kind: 'Apollo Sync',
      url: 'https://explorer.apollo-sync.com/',
      tx_page: 'https://explorer.apollo-sync.com/tx/${txHash}',
      account_page: 'https://explorer.apollo-sync.com/account/${accountAddress}'
    },
    {
      kind: 'Stakeme',
      url: 'https://airchains.exploreme.pro/',
      tx_page: 'https://airchains.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'StakerHouse',
      url: 'https://cosmotracker.com/airchains',
      tx_page: 'https://cosmotracker.com/airchains/tx/${txHash}',
      account_page: 'https://cosmotracker.com/airchains/account/${accountAddress}'
    },
    {
      kind: 'IT Rocket',
      url: 'https://testnet.itrocket.net/airchains/',
      tx_page: 'https://testnet.itrocket.net/airchains//tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/airchains/account/${accountAddress}'
    },
    {
      kind: 'Validator VN ',
      url: 'https://explorer.validatorvn.com/Airchains-Testnet',
      tx_page: 'https://explorer.validatorvn.com/Airchains-Testnet/tx/${txHash}',
      account_page: 'https://explorer.validatorvn.com/Airchains-Testnet/account/${accountAddress}'
    }
  ]
};
export default info;