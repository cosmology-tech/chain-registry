import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'oraichain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://orai.io/',
  prettyName: 'Oraichain',
  chainId: 'Oraichain',
  bech32Prefix: 'orai',
  daemonName: 'oraid',
  nodeHome: '$WORKSPACE/.oraid',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'orai',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.003,
        averageGasPrice: 0.005,
        highGasPrice: 0.007
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'orai'
      }]
  },
  codebase: {
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30.2'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://rpc.orai.pfc.zone/',
        provider: 'PFC'
      },
      {
        address: 'https://rpc-orai.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://oraichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://rpc-orai.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://rpc.orai.mortysnode.nl',
        provider: 'Morty\'s Nodes'
      }
    ],
    rest: [
      {
        address: 'http://lcd.orai.io',
        provider: 'oraichain-team'
      },
      {
        address: 'https://oraichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api-oraichain.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://api-orai.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://mainnet-orai-api.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ],
    grpc: [
      {
        address: 'grpc-oraichain.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'grpc.orai.pfc.zone:443',
        provider: 'PFC'
      },
      {
        address: 'oraichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-orai.blockval.io:9390',
        provider: 'Blockval'
      },
      {
        address: 'mainnet-orai.konsortech.xyz:33090',
        provider: 'KonsorTech'
      }
    ]
  },
  explorers: [
    {
      kind: 'oraiscan',
      url: 'https://scan.orai.io',
      txPage: 'https://scan.orai.io/txs/${txHash}'
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/orai',
      txPage: 'https://explorer.co.id/orai/tx/${txHash}'
    },
    {
      kind: 'Blockval Explorer',
      url: 'https://explorer.blockval.io/oraichain',
      txPage: 'https://explorer.blockval.io/oraichain/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/orai',
      txPage: 'https://atomscan.com/orai/transactions/${txHash}',
      accountPage: 'https://atomscan.com/orai/accounts/${accountAddress}'
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/oraichain',
      txPage: 'https://explorer.konsortech.xyz/oraichain/transactions/${txHash}',
      accountPage: 'https://explorer.konsortech.xyz/oraichain/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg'
    }]
};
export default info;