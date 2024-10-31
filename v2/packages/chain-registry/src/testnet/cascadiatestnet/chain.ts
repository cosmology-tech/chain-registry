import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'cascadiatestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://cascadia.foundation/',
  prettyName: 'Cascadia',
  chainType: 'cosmos',
  chainId: 'cascadia_6102-1',
  bech32Prefix: 'cascadia',
  daemonName: 'cascadiad',
  nodeHome: '$HOME/.cascadiad',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aCC',
        fixedMinGasPrice: 0,
        lowGasPrice: 7,
        averageGasPrice: 10,
        highGasPrice: 15
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aCC'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/CascadiaFoundation/cascadia',
    recommendedVersion: 'v0.1.2',
    compatibleVersions: ['v0.1.1'],
    cosmosSdkVersion: '0.46.10',
    consensus: {
      type: 'tendermint',
      version: 'v0.34.26'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/CascadiaFoundation/chain-configuration/master/testnet/genesis.json'
    },
    versions: [],
    sdk: {
      type: 'cosmos',
      version: '0.46.10'
    },
    cosmwasm: {
      version: '0.30',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png',
      theme: {
        primaryColorHex: '#004A96'
      }
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cascadiatestnet/images/cascadia.png'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cascadia.foundation:443',
        provider: 'cascadia'
      },
      {
        address: 'https://cscd-rpc.systemd.run:443',
        provider: 'systemd'
      },
      {
        address: 'https://api.cascadia-t.indonode.net:443',
        provider: 'Indonode'
      },
      {
        address: 'https://rpc-test.cascadia.hexnodes.co:443',
        provider: 'Hexnodes'
      }
    ],
    grpc: [
      {
        address: 'grpc.cascadia.foundation:443',
        provider: 'cascadia'
      },
      {
        address: 'cscd-grpc.systemd.run:443',
        provider: 'systemd'
      },
      {
        address: 'grpc.cascadia-t.indonode.net:43090',
        provider: 'Indonode'
      },
      {
        address: 'grpc-test.cascadia.hexnodes.co:19090',
        provider: 'Hexnodes'
      }
    ],
    rest: [
      {
        address: 'https://lcd.cascadia.foundation',
        provider: 'cascadia'
      },
      {
        address: 'https://cscd-api.systemd.run',
        provider: 'systemd'
      },
      {
        address: 'https://api.cascadia-t.indonode.net/',
        provider: 'Indonode'
      },
      {
        address: 'https://lcd-test.cascadia.hexnodes.co',
        provider: 'Hexnodes'
      }
    ]
  },
  explorers: [{
      kind: 'validator_explorer',
      url: 'https://validator.cascadia.foundation/',
      txPage: 'https://validator.cascadia.foundation/transactions/${txHash}',
      accountPage: 'https://validator.cascadia.foundation/accounts/${accountAddress}'
    }, {
      kind: 'block_explorer',
      url: 'https://explorer.cascadia.foundation/',
      txPage: 'https://explorer.cascadia.foundation/tx/${txHash}',
      accountPage: 'https://explorer.cascadia.foundation/address/${accountAddress}'
    }],
  keywords: [
    'cascadia',
    'cosmos',
    'evm',
    'cybernetic'
  ]
};
export default info;