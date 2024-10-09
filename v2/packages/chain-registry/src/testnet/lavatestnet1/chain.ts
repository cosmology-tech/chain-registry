import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'lavatestnet1',
  status: 'killed',
  networkType: 'testnet',
  website: 'https://www.lavanet.xyz/',
  prettyName: 'Lava',
  chainId: 'lava-testnet-1',
  bech32Prefix: 'lava@',
  daemonName: 'lavad',
  nodeHome: '$HOME/.lava',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulava',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulava'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.45',
    cosmwasmEnabled: false,
    cosmwasmVersion: '0.30'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      theme: {
        primaryColorHex: '#D7001F'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/lavatestnet/images/lava-icon.png'
  },
  apis: {
    rpc: [{
        address: 'https://public-rpc-testnet2.lavanet.xyz/',
        provider: 'Lava'
      }, {
        address: 'http://lava.rpc.t.stavr.tech:198',
        provider: '🔥STAVR🔥'
      }],
    rest: [{
        address: 'https://public-rpc-testnet2.lavanet.xyz/rest/',
        provider: 'Lava'
      }, {
        address: 'https://lava.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      }]
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://lava.explorers.guru/',
      txPage: 'https://lava.explorers.guru//transaction/${txHash}',
      accountPage: 'https://lava.explorers.guru//account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Lava-Testnet',
      txPage: 'https://explorer.stavr.tech/Lava-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Lava-Testnet/account/${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/lava-testnet',
      txPage: 'https://explorer.nodestake.org/lava-testnet/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/lava-testnet/account/${accountAddress}'
    }
  ],
  keywords: ['rpc', 'api']
};
export default info;