import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'regen',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.regen.network/',
  prettyName: 'Regen',
  chainId: 'regen-1',
  bech32Prefix: 'regen',
  daemonName: 'regen',
  nodeHome: '$HOME/.regen',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uregen',
        lowGasPrice: 0.015,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uregen'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46'
  },
  description: 'Regen Network, a platform to originate and invest in high-integrity carbon and biodiversity credits from ecological regeneration projects.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-regen.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'http://public-rpc.regen.vitwit.com:26657',
        provider: 'vitwit'
      },
      {
        address: 'https://regen.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://regen.stakesystems.io:2053',
        provider: 'stakesystems'
      },
      {
        address: 'http://rpc.regen.forbole.com:80',
        provider: 'forbole'
      },
      {
        address: 'https://rpc-regen-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://regen-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://regen-rpc.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://regen-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://regen-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://regen-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'http://public-rpc.regen.vitwit.com:1317',
        provider: 'vitwit'
      },
      {
        address: 'https://regen.stakesystems.io',
        provider: 'stakesystems'
      },
      {
        address: 'https://regen.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-regen-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://regen-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-regen.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://regen-lcd.easy2stake.com',
        provider: 'Easy 2 Stake'
      },
      {
        address: 'https://regen-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://regen-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://regen-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc-regen-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'regen-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'regen.grpc.m.stavr.tech:124',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'regen-grpc.w3coins.io:22790',
        provider: 'w3coins'
      },
      {
        address: 'regen-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/regen',
      txPage: 'https://www.mintscan.io/regen/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/regen/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/regen',
      txPage: 'https://ezstaking.app/regen/txs/${txHash}',
      accountPage: 'https://ezstaking.app/regen/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Regen-Mainnet',
      txPage: 'https://explorer.stavr.tech/Regen-Mainnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/regen',
      txPage: 'https://ping.pub/regen/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/regen-network',
      txPage: 'https://atomscan.com/regen-network/transactions/${txHash}',
      accountPage: 'https://atomscan.com/regen-network/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg'
    }]
};
export default info;