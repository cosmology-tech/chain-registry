import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'archwaytestnet',
  chainId: 'constantine-3',
  prettyName: 'Archway Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://archway.io',
  bech32Prefix: 'archway',
  daemonName: 'archwayd',
  nodeHome: '$HOME/.archway',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aconst',
        lowGasPrice: 1000000000000,
        averageGasPrice: 1500000000000,
        highGasPrice: 2000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aconst'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.constantine.archway.tech',
        provider: 'Archway'
      }, {
        address: 'https://archway-testnet-rpc.polkachu.com',
        provider: 'Polkachu'
      }],
    rest: [{
        address: 'https://api.constantine.archway.tech',
        provider: 'Archway'
      }]
  },
  explorers: [{
      kind: 'archwayscan',
      url: 'https://testnet.archway.explorers.guru',
      txPage: 'https://testnet.archway.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/archwaytestnet/images/ArchwayBrandmark.svg'
    }]
};
export default info;