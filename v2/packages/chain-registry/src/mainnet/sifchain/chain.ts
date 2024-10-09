import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sifchain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sifchain.finance/',
  prettyName: 'Sifchain',
  chainId: 'sifchain-1',
  bech32Prefix: 'sif',
  daemonName: 'sifnoded',
  nodeHome: '$HOME/.sifnoded',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'rowan',
        lowGasPrice: 1000000000000,
        averageGasPrice: 1500000000000,
        highGasPrice: 2000000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'rowan'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://sifchain-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api-sifchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://sifchain-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://sifchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://sifchain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sifchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [
      {
        address: 'sifchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'sifchain-grpc.polkachu.com:13290',
        provider: 'Polkachu'
      },
      {
        address: 'sifchain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/sifchain',
      txPage: 'https://ping.pub/sifchain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sifchain',
      txPage: 'https://atomscan.com/sifchain/transactions/${txHash}',
      accountPage: 'https://atomscan.com/sifchain/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sifchain',
      txPage: 'https://explorer.stavr.tech/Sifchain/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Sifchain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
    }]
};
export default info;