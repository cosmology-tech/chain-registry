import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kichain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://foundation.ki/',
  prettyName: 'Ki',
  chainType: 'cosmos',
  chainId: 'kichain-2',
  bech32Prefix: 'ki',
  daemonName: 'kid',
  nodeHome: '$HOME/.kid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uxki',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uxki'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KiFoundation/ki-tools',
    recommendedVersion: '5.0.1',
    compatibleVersions: ['5.0.0', '5.0.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-mainnet.blockchain.ki',
        provider: 'kifoundation'
      },
      {
        address: 'https://kichain-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.kichain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/kichain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'http://ki-chain.statesync.nodersteam.com:14657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://ki-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc.kichain-2.kichain.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-mainnet.blockchain.ki',
        provider: 'kifoundation'
      },
      {
        address: 'https://api-kichain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kichain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.kichain.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://kichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://ki-chain.api.nodersteam.com:14017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://kichain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest.lavenderfive.com:443/kichain',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ki-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api.kichain-2.kichain.aviaone.com',
        provider: 'AVIAONE 🟢'
      }
    ],
    grpc: [
      {
        address: 'grpc-kichain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'kichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'ki-chain.grpc.nodersteam.com:9410',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'kichain-grpc.polkachu.com:13590',
        provider: 'Polkachu'
      },
      {
        address: 'kichain.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc.kichain-2.kichain.aviaone.com:9230',
        provider: 'AVIAONE 🟢'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kichain',
      txPage: 'https://ezstaking.app/kichain/txs/${txHash}',
      accountPage: 'https://ezstaking.app/kichain/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/ki-chain',
      txPage: 'https://www.mintscan.io/ki-chain/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/ki-chain/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Kichain-Mainnet',
      txPage: 'https://explorer.stavr.tech/Kichain-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/kichain',
      txPage: 'https://ping.pub/kichain/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/kichain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=kichain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=kichain&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ki-chain',
      txPage: 'https://atomscan.com/ki-chain/transactions/${txHash}',
      accountPage: 'https://atomscan.com/ki-chain/accounts/${accountAddress}'
    },
    {
      kind: 'AVIAONE Explorer 🟢',
      url: 'https://mainnet.explorer.aviaone.com/kichain',
      txPage: 'https://mainnet.explorer.aviaone.com/kichain/transactions/${txHash}',
      accountPage: 'https://mainnet.explorer.aviaone.com/kichain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kichain/images/xki.svg',
      theme: {
        primaryColorHex: '#1c04fc'
      }
    }]
};
export default info;