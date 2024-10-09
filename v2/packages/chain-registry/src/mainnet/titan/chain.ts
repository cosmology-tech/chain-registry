import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'titan',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://titanlab.io/',
  prettyName: 'Titan',
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
    cosmosSdkVersion: '0.47.6-titan.4',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.45.0'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/titan/images/chain.svg'
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
        address: 'https://titan-rpc-1.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-2.titanlab.io:443',
        provider: 'Titanlab.io'
      },
      {
        address: 'https://titan-rpc-full-1.titanlab.io:443',
        provider: 'Titanlab.io'
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