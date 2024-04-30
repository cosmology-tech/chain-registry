import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'furya',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://furya.xyz/',
  prettyName: 'furya',
  chainId: 'furya-1',
  daemonName: 'furyad',
  nodeHome: '$HOME/.furyad',
  bech32Prefix: 'furya',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufury',
        lowGasPrice: 0,
        averageGasPrice: 0.25,
        highGasPrice: 0.5
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufury'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.furya.xyz',
        provider: 'Furya Genesis Validator'
      },
      {
        address: 'https://furya-rpc.synergynodes.com',
        provider: 'synergynodes'
      },
      {
        address: 'https://furya.rpc.nodeshub.online:443',
        provider: 'nodeshub'
      }
    ],
    rest: [
      {
        address: 'https://api.furya.xyz',
        provider: 'Furya Genesis Validator'
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'synergynodes'
      },
      {
        address: 'https://furya.api.nodeshub.online',
        provider: 'Furya Genesis Validator'
      },
      {
        address: 'https://furya.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    grpc: [{
        address: 'grpc.furya.xyz:443',
        provider: 'Furya Genesis Validator'
      }, {
        address: 'https://furya.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }]
  },
  explorers: [{
      kind: 'Furya Explorer',
      url: 'https://explorer.furya.xyz/',
      txPage: 'https://explorer.furya.xyz/furya/tx/${txHash}',
      accountPage: 'https://explorer.furya.xyz/furya/account/${accountAddress}'
    }, {
      kind: 'Nodeshub Explorer',
      url: 'https://explorer.nodeshub.online/furya',
      txPage: 'https://explorer.nodeshub.online/furya/txs/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/furya/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/chain.svg'
    }]
};
export default info;