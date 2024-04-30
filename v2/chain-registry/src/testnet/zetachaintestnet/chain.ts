import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'zetachaintestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'ZetaChain Testnet',
  chainId: 'athens_7001-1',
  bech32Prefix: 'zeta',
  daemonName: 'zetacored',
  nodeHome: '$HOME/.zetacored',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'azeta',
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'azeta'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  apis: {
    rpc: [{
        address: 'https://zetachain-athens.blockpi.network/rpc/v1/public',
        provider: 'BlockPI'
      }, {
        address: 'https://zetachain-testnet-archive.allthatnode.com:26657',
        provider: 'All That Node'
      }],
    rest: [{
        address: 'https://zetachain-athens.blockpi.network/lcd/v1/public',
        provider: 'BlockPI'
      }, {
        address: 'https://zetachain-testnet-archive.allthatnode.com:1317',
        provider: 'All That Node'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ZetaScan',
      url: 'https://athens.explorer.zetachain.com/',
      txPage: 'https://athens.explorer.zetachain.com/cc/tx/${txHash}'
    }, {
      kind: 'BlockScout',
      url: 'https://zetachain-athens-3.blockscout.com/',
      txPage: 'https://zetachain-athens-3.blockscout.com/tx/${txHash}'
    }]
};
export default info;