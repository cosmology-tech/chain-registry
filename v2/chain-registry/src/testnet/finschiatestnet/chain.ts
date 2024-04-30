import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'finschiatestnet',
  chainId: 'ebony-2',
  website: 'https://www.finschia.io/',
  prettyName: 'Ebony',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'tlink',
  daemonName: 'fnsad',
  nodeHome: '$HOME/.finschia',
  keyAlgos: ['secp256k1'],
  slip44: 438,
  fees: {
    feeTokens: [{
        denom: 'tcony',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.015
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tcony'
      }],
    lockDuration: {
      time: '86400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'github.com/Finschia/finschia-sdk@v0.48.1',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'github.com/Finschia/wasmd@v0.2.0'
  },
  apis: {
    rpc: [{
        address: 'https://ebony-rpc.finschia.io'
      }],
    rest: [{
        address: 'https://ebony-api.finschia.io'
      }],
    grpc: [{
        address: 'ebony-grpc.finschia.io:443'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia-testnet',
      txPage: 'https://www.mintscan.io/finschia-testnet/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/finschia-testnet/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/finschia/images/fnsa.svg'
  }
};
export default info;