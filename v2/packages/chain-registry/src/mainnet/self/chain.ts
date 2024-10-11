import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'self',
  status: 'live',
  website: 'https://selfchain.xyz',
  networkType: 'mainnet',
  prettyName: 'Self Chain',
  chainType: 'cosmos',
  chainId: 'self-1',
  bech32Prefix: 'self',
  daemonName: 'selfchaind',
  nodeHome: '$HOME/.selfchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uslf',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.005,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uslf'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
  },
  description: 'Self Chain Is The First Modular Intent-Centric Access Layer L1 Blockchain And Keyless Wallet Infrastructure Service That Uses MPC-TSS/AA For Multi-Chain Web3 Access.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.selfchain.io:26657',
        provider: 'Self Chain'
      },
      {
        address: 'https://rpc.selfchain.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://selfchain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://selfchain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://selfchain-mainnet.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://selfchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'https://api.selfchain.io',
        provider: 'Self Chain'
      },
      {
        address: 'https://selfchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.selfchain.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://selfchain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://selfchain.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://selfchain-mainnet.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://selfchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [
      {
        address: 'grpc.selfchain.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'selfchain.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'selfchain-mainnet.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'selfchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ]
  },
  explorers: [
    {
      kind: 'Self Chain',
      url: 'https://explorer.selfchain.xyz/selfchain',
      txPage: 'https://explorer.selfchain.xyz/selfchain/tx/${txHash}',
      accountPage: 'https://explorer.selfchain.xyz/selfchain/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Selfchain-Mainnet',
      txPage: 'https://explorer.stavr.tech/Selfchain-Mainnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Selfchain-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet/tx/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/self',
      txPage: 'https://explorer.whenmoonwhenlambo.money/self/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/self/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/selfchain/',
      txPage: 'https://explorer.nodeshub.online/selfchain/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/selfchain/accounts/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/selfchain-mainnet',
      txPage: 'https://exp.stakevillage.net/selfchain-mainnet/tx/${txHash}',
      accountPage: 'https://exp.stakevillage.net/selfchain-mainnet/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
      theme: {
        primaryColorHex: '#9454f1'
      }
    }]
};
export default info;