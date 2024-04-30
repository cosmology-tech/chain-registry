import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'babylontestnet',
  status: 'live',
  website: 'https://www.babylonchain.io',
  networkType: 'testnet',
  prettyName: 'Babylon Testnet 3',
  chainId: 'bbn-test3',
  preForkChainName: 'babylontestnet1',
  bech32Prefix: 'bbn',
  daemonName: 'babylond',
  nodeHome: '$HOME/.babylond',
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ubbn'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubbn'
      }]
  },
  codebase: {

  },
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
  },
  apis: {
    rpc: [{
        address: 'rpc.testnet3.babylonchain.io:443',
        provider: 'Babylon foundation'
      }],
    rest: [{
        address: 'lcd.testnet3.babylonchain.io:443',
        provider: 'Babylon foundation'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'babylonscan',
      url: 'https://babylonscan.io'
    }, {
      kind: 'explorers.guru',
      url: 'https://testnet.babylon.explorers.guru',
      txPage: 'https://testnet.babylon.explorers.guru/transaction/${txHash}'
    }],
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/babylontestnet/images/logo.svg'
    }],
  slip44: 118
};
export default info;