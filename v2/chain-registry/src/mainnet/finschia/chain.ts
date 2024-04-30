import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'finschia',
  chainId: 'finschia-2',
  website: 'https://www.finschia.io/',
  prettyName: 'Finschia',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'link',
  daemonName: 'fnsad',
  nodeHome: '$HOME/.finschia',
  keyAlgos: ['secp256k1'],
  slip44: 438,
  fees: {
    feeTokens: [{
        denom: 'cony',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.015,
        highGasPrice: 0.015
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'cony'
      }],
    lockDuration: {
      time: '604800s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'github.com/Finschia/finschia-sdk@v0.48.1',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'github.com/Finschia/wasmd@v0.2.0'
  },
  description: 'Finschia (formerly LINE Blockchain Mainnet) aims to build a sustainable token model and create token demand to become a blockchain with 1 billion users.',
  apis: {
    rpc: [{
        address: 'https://finschia-rpc.finschia.io'
      }],
    rest: [{
        address: 'https://finschia-api.finschia.io'
      }],
    grpc: [{
        address: 'finschia-grpc.finschia.io:443'
      }]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/finschia',
      txPage: 'https://www.mintscan.io/finschia/tx/${txHash}',
      accountPage: 'https://www.mintscan.io/finschia/address/${accountAddress}'
    }, {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/finschia',
      txPage: 'https://ezstaking.app/finschia/txs/${txHash}',
      accountPage: 'https://ezstaking.app/finschia/account/${accountAddress}'
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