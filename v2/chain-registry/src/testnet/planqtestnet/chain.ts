import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'planqtestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Planq Atlas Testnet',
  chainId: 'planq_7077-1',
  bech32Prefix: 'plq',
  daemonName: 'planqd',
  nodeHome: '$HOME/.planqd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'atplanq',
        fixedMinGasPrice: 20000000000,
        lowGasPrice: 30000000000,
        averageGasPrice: 35000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atplanq'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.46.3'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_rpc.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }],
    rest: [{
        address: 'https://rest-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_api.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }],
    grpc: [{
        address: 'https://grpc-atlas.planq.network',
        provider: 'Planq Network'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc-atlas.planq.network',
        provider: 'Planq Network'
      }, {
        address: 'https://planq_testnet_evm.chain.whenmoonwhenlambo.money',
        provider: 'WMWL'
      }]
  },
  explorers: [
    {
      kind: 'EVM',
      url: 'https://evm-atlas.planq.network',
      txPage: 'https://evm-atlas.planq.network/tx/${txHash}'
    },
    {
      kind: 'Konsortech',
      url: 'https://testnet-explorer.konsortech.xyz/planq',
      txPage: 'https://testnet-explorer.konsortech.xyz/planq/tx/${txHash}'
    },
    {
      kind: 'WMWL',
      url: 'https://explorer.whenmoonwhenlambo.money/planq-testnet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/planq-testnet/tx/${txHash}'
    }
  ]
};
export default info;