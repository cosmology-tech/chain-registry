import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'vincechaintestnet',
  status: 'killed',
  networkType: 'testnet',
  prettyName: 'VinceChain Testnet',
  chainId: 'vince_1903-1',
  bech32Prefix: 'vce',
  nodeHome: '$HOME/.vinced',
  slip44: 60,
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  fees: {
    feeTokens: [{
        denom: 'avce',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'avce'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
  },
  apis: {
    rpc: [{
        address: 'http://api-testnet.vincechain.com/:26657/',
        provider: 'vincescan.com'
      }],
    rest: [{
        address: 'http://lcd-testnet.vincechain.com/:1317/',
        provider: 'vincescan.com'
      }],
    grpc: [],
    evmHttpJsonrpc: [{
        address: 'http://rpc-testnet.vincechain.com',
        provider: 'vincescan.com'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://scan-testnet.vincechain.com',
      txPage: 'https://scan-testnet.vincechain.com/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/vincechaintestnet/images/vince.png'
    }]
};
export default info;