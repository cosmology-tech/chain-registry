import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'titan',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://titanlab.io/',
  prettyName: 'Titan',
  chainType: 'cosmos',
  chainId: 'titan_18888-1',
  bech32Prefix: 'titan',
  nodeHome: '$HOME/.titand',
  daemonName: 'titand',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atkx',
        fixedMinGasPrice: 100000000000,
        lowGasPrice: 100000000000,
        averageGasPrice: 110000000000,
        highGasPrice: 200000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atkx'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/titantkx/titan',
    recommendedVersion: 'v2.0.1',
    compatibleVersions: ['v2.0.1'],
    consensus: {
      type: 'cometbft',
      version: '0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/titantkx/titan-mainnet/main/public/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.6',
      tag: '0.47.6-titan.4'
    },
    ibc: {
      type: 'go',
      version: '7.3.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.45.0',
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg',
      theme: {
        primaryColorHex: '#fc641c'
      }
    }],
  apis: {
    rpc: [
      {
        address: 'https://titan-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc.ibs.team',
        provider: 'ibs.team'
      }
    ],
    rest: [
      {
        address: 'https://titan-lcd.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-lcd-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-api.ibs.team',
        provider: 'ibs.team'
      }
    ],
    grpc: [
      {
        address: 'titan-grpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'titan-grpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://titan-json-rpc.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-tokyo.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-seoul.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-json-rpc-hongkong.titanlab.io:443',
        provider: 'Titanlab.io'
      }
    ]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://tkxscan.io',
      txPage: 'https://tkxscan.io/Titan/tx/${txHash}',
      accountPage: 'https://tkxscan.io/Titan/account/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg'
  }
};
export default info;