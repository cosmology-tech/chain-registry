import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'irisnet',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'IRISnet',
  chainType: 'cosmos',
  chainId: 'irishub-1',
  bech32Prefix: 'iaa',
  daemonName: 'iris',
  nodeHome: '$HOME/.iris',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uiris',
        lowGasPrice: 0.2,
        averageGasPrice: 0.3,
        highGasPrice: 0.4
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uiris'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/irisnet/irishub',
    recommendedVersion: 'v2.0.3',
    compatibleVersions: ['v2.0.3'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json'
    },
    versions: [
      {
        name: 'v1.3.0',
        nextVersionName: 'v1.4.1',
        recommendedVersion: 'v1.3.0',
        compatibleVersions: ['v1.3.0']
      },
      {
        name: 'v1.4.1',
        nextVersionName: 'v2.0.0',
        recommendedVersion: 'v1.4.1',
        compatibleVersions: ['v1.4.1']
      },
      {
        name: 'v2.0.0',
        nextVersionName: 'v2.1.0',
        recommendedVersion: 'v2.0.3',
        compatibleVersions: ['v2.0.3']
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-irisnet-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://irisnet-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://iris-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://iris-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://mainnet-iris-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    rest: [
      {
        address: 'https://api-irisnet-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api-irisnet-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://irisnet-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://iris-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://iris-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://mainnet-iris-api.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    grpc: [
      {
        address: 'grpc-irisnet-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc-irisnet-01.stakeflow.io:1902',
        provider: 'Stakeflow'
      },
      {
        address: 'irisnet-grpc.w3coins.io:22690',
        provider: 'w3coins'
      },
      {
        address: 'iris-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'iris.grpc.kjnodes.com:443',
        provider: 'kjnodes'
      },
      {
        address: 'https://grpc-irisnet.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'iris-mainnet.grpc.l0vd.com:80',
        provider: 'L0vd.com ❤️'
      },
      {
        address: 'mainnet-iris.konsortech.xyz:30090',
        provider: 'KonsorTech'
      }
    ],
    evmHttpJsonrpc: [{
        address: 'https://iris-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      }, {
        address: 'https://mainnet-iris-evm.konsortech.xyz',
        provider: 'KonsorTech'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/irisnet',
      txPage: 'https://ezstaking.app/irisnet/txs/${txHash}',
      accountPage: 'https://ezstaking.app/irisnet/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/iris',
      txPage: 'https://www.mintscan.io/iris/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/iris/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/iris-network',
      txPage: 'https://ping.pub/iris-network/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/irisnet',
      txPage: 'https://staking-explorer.com/transaction.php?chain=irisnet&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=irisnet&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/iris-network',
      txPage: 'https://atomscan.com/iris-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/iris-network/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/irisnet',
      accountPage: 'https://stakeflow.io/irisnet/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/iris',
      txPage: 'https://exp.nodeist.net/iris/tx/${txHash}'
    },
    {
      kind: 'L0vd.com ❤️',
      url: 'https://explorers.l0vd.com/iris-mainnet',
      txPage: 'https://explorers.l0vd.com/iris-mainnet/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/iris',
      txPage: 'https://explorer.konsortech.xyz/iris/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg',
      theme: {
        primaryColorHex: '#5664ad'
      }
    }]
};
export default info;