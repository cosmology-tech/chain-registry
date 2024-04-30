import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'entrypointtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'EntryPoint Testnet',
  chainId: 'entrypoint-pubtest-2',
  bech32Prefix: 'entrypoint',
  daemonName: 'entrypointd',
  nodeHome: '$HOME/.entrypointd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
        lowGasPrice: 0.01,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uentry'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47.4'
  },
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.entrypoint.zone',
        provider: 'Simply Staking'
      }],
    rest: [{
        address: 'https://entry.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }, {
        address: 'https://testnet-rest.entrypoint.zone',
        provider: 'Simply Staking'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.entrypoint.zone/entrypoint',
      txPage: 'https://explorer.entrypoint.zone/entrypoint/tx/${txHash}',
      accountPage: 'https://explorer.entrypoint.zone/entrypoint/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Entrypoint-Testnet',
      txPage: 'https://explorer.stavr.tech/Entrypoint-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Entrypoint-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/entrypoint',
      txPage: 'https://testnet.ping.pub/entrypoint/tx/${txHash}',
      accountPage: 'https://testnet.ping.pub/entrypoint/account/${accountAddress}'
    }
  ],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entrypoint-chain-logo.svg'
    }]
};
export default info;