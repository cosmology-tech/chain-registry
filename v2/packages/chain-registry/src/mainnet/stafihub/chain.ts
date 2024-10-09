import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'stafihub',
  chainId: 'stafihub-1',
  website: 'https://stafihub.io/',
  prettyName: 'StaFi Hub',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'stafi',
  daemonName: 'stafihubd',
  nodeHome: '$HOME/.stafihub',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ufis',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ufis'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  apis: {
    rpc: [
      {
        address: 'https://public-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'https://rpc.stafihub.nodestake.top:443',
        provider: 'NodeStake'
      }
    ],
    rest: [
      {
        address: 'https://public-rest-rpc1.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://public-rest-rpc2.stafihub.io',
        provider: 'StaFiHub'
      },
      {
        address: 'https://api.stafihub.nodestake.top',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'public-grpc-rpc1.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'public-grpc-rpc2.stafihub.io:443',
        provider: 'StaFiHub'
      },
      {
        address: 'grpc.stafihub.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'stafihub.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/stafi',
      txPage: 'https://www.mintscan.io/stafi/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/stafi/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/stafihub',
      txPage: 'https://ezstaking.app/stafihub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/stafihub/account/${accountAddress}'
    },
    {
      kind: 'ping-pub',
      url: 'https://ping.pub/stafihub',
      txPage: 'https://ping.pub/stafihub/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/stafihub',
      txPage: 'https://atomscan.com/stafihub/transactions/${txHash}',
      accountPage: 'https://atomscan.com/stafihub/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png'
  },
  keywords: ['liquid staking'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/stafihub-chain-logo.png'
    }]
};
export default info;