import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chihuahua',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://chihuahua.wtf/',
  prettyName: 'Chihuahua',
  chainId: 'chihuahua-1',
  bech32Prefix: 'chihuahua',
  daemonName: 'chihuahuad',
  nodeHome: '$HOME/.chihuahuad',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhuahua',
        fixedMinGasPrice: 0,
        lowGasPrice: 500,
        averageGasPrice: 1250,
        highGasPrice: 2000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uhuahua'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.47.5',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'v0.41.0'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.chihuahua.wtf',
        provider: 'Chihuahua'
      },
      {
        address: 'https://rpc-chihuahua.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://chihua.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://chihuahua-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-chihuahua-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://chihuahua-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.huahua.bh.rocks',
        provider: 'BlockHunters 🎯'
      },
      {
        address: 'https://chihuahua-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://rpc-chihuahua.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://chihuahua-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://chihuahua-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.chihuahua.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://chihuahua-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://chihuahua.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    rest: [
      {
        address: 'https://api.chihuahua.wtf',
        provider: 'Chihuahua'
      },
      {
        address: 'https://rest-chihuahua.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://chihua.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-chihuahua-ia.cosmosia.notional.ventures',
        provider: 'Notional'
      },
      {
        address: 'https://chihuahua-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://chihuahua-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://chihuahua-api.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://api-chihuahua.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://chihuahua-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://chihuahua-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://api.chihuahua.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://chihuahua-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://chihuahua.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      }
    ],
    grpc: [
      {
        address: 'grpc-chihuahua-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'chihuahua-grpc.polkachu.com:12990',
        provider: 'Polkachu'
      },
      {
        address: 'chihuahua-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'chihua.grpc.m.stavr.tech:108',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-chihuahua.cosmos-spaces.cloud:2290',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'chihuahua-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'chihuahua-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'grpc.chihuahua.validatus.com:443',
        provider: 'Validatus'
      },
      {
        address: 'chihuahua.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/chihuahua',
      txPage: 'https://ping.pub/chihuahua/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Chihua-Mainnet',
      txPage: 'https://explorer.stavr.tech/Chihua-Mainnet/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/chihuahua',
      txPage: 'https://mintscan.io/chihuahua/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/chihuahua/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chihuahua',
      txPage: 'https://atomscan.com/chihuahua/transactions/${txHash}',
      accountPage: 'https://atomscan.com/chihuahua/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/chihuahua',
      txPage: 'https://ezstaking.app/chihuahua/txs/${txHash}',
      accountPage: 'https://ezstaking.app/chihuahua/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/chihuahua/',
      txPage: 'https://explorer.nodeshub.online/chihuahua/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/chihuahua/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
    }]
};
export default info;