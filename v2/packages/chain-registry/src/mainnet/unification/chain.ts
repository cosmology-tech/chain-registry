import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'unification',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://unification.com/',
  prettyName: 'Unification',
  chainId: 'FUND-MainNet-2',
  bech32Prefix: 'und',
  daemonName: 'und',
  nodeHome: '$HOME/.und_mainchain',
  keyAlgos: ['secp256k1'],
  slip44: 5555,
  fees: {
    feeTokens: [{
        denom: 'nund',
        fixedMinGasPrice: 25,
        lowGasPrice: 100,
        averageGasPrice: 200,
        highGasPrice: 300
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nund'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.46.15',
    cosmwasmEnabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
    }],
  apis: {
    rpc: [{
        address: 'https://rpc1.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'https://rpc.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    rest: [{
        address: 'https://rest.unification.io',
        provider: 'Unification'
      }, {
        address: 'https://rest.unification.chainmasters.ninja/',
        provider: 'Chainmasters'
      }],
    grpc: [{
        address: 'grpc.unification.io:443',
        provider: 'Unification'
      }, {
        address: 'grpc.unification.chainmasters.info',
        provider: 'Chainmasters'
      }]
  },
  explorers: [
    {
      kind: 'bigdipper',
      url: 'https://explorer.unification.io/',
      txPage: 'https://explorer.unification.io/transactions/${txHash}',
      accountPage: 'https://explorer.unification.io/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.unification.chainmasters.ninja/unification',
      txPage: 'https://explorer.unification.chainmasters.ninja/unification/tx/${txHash}',
      accountPage: 'https://explorer.unification.chainmasters.ninja/Unification/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/unification',
      txPage: 'https://atomscan.com/unification/transactions/${txHash}',
      accountPage: 'https://atomscan.com/unification/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unification/images/fund.svg'
  }
};
export default info;