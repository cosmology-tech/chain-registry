import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sommelier',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sommelier.finance/',
  prettyName: 'Sommelier',
  chainId: 'sommelier-3',
  bech32Prefix: 'somm',
  daemonName: 'sommelier',
  nodeHome: '$HOME/.sommelier',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'usomm',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'usomm'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'v0.46.14'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
  },
  description: 'Automated vaults find best-in-class yields while mitigating risk.',
  apis: {
    rpc: [
      {
        address: 'https://sommelier-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://somm.rpc.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sommelier-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-rpc.kleomedes.network',
        provider: 'Kleomedes'
      },
      {
        address: 'https://sommelier-rpc.w3coins.io',
        provider: 'w3coins'
      }
    ],
    rest: [
      {
        address: 'https://api-sommelier.pupmos.network',
        provider: 'PUPMØS'
      },
      {
        address: 'https://sommelier-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://som.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://sommelier-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://sommelier-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://somm-api.kleomedes.network',
        provider: 'Kleomedes'
      }
    ],
    grpc: [
      {
        address: 'sommelier-grpc.polkachu.com:14190',
        provider: 'Polkachu'
      },
      {
        address: 'somm.grpc.m.stavr.tech:114',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'sommelier-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'sommelier-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.sommelier.nodexcapital.com',
        provider: '⚡NodeX Validator⚡'
      },
      {
        address: 'sommelier-grpc.w3coins.io:14190',
        provider: 'w3coins'
      },
      {
        address: 'grpc.sommelier.validatus.com',
        provider: 'Validatus'
      }
    ]
  },
  explorers: [
    {
      kind: 'sommscan',
      url: 'https://sommscan.io',
      txPage: 'https://sommscan.io'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sommelier',
      txPage: 'https://www.mintscan.io/sommelier/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/sommelier/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sommelier',
      txPage: 'https://ezstaking.app/sommelier/txs/${txHash}',
      accountPage: 'https://ezstaking.app/sommelier/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sommelier-Mainnet',
      txPage: 'https://explorer.stavr.tech/Sommelier-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Sommelier-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/sommelier',
      txPage: 'https://explorer.nodexcapital.com/sommelier/tx/${txHash}',
      accountPage: 'https://explorer.nodexcapital.com/sommelier/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sommelier',
      txPage: 'https://atomscan.com/sommelier/transactions/${txHash}',
      accountPage: 'https://atomscan.com/sommelier/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sommelier/images/somm.svg'
    }]
};
export default info;