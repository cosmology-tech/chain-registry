import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'rizon',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://rizon.world/',
  prettyName: 'Rizon',
  chainId: 'titan-1',
  bech32Prefix: 'rizon',
  daemonName: 'rizond',
  nodeHome: '$HOME/.rizon',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatolo',
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatolo'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpcapi.rizon.world/',
        provider: 'HDAC Technology AG'
      },
      {
        address: 'https://rpc.rizon.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rizon-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rizon-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://restapi.rizon.world/',
        provider: 'HDAC Technology AG'
      },
      {
        address: 'https://api.rizon.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rizon-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rizon-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rizon.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [{
        address: 'grpc-rizon.mms.team:443',
        provider: 'MMS'
      }, {
        address: 'rizon-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/rizon',
      txPage: 'https://ezstaking.app/rizon/txs/${txHash}',
      accountPage: 'https://ezstaking.app/rizon/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/rizon',
      txPage: 'https://www.mintscan.io/rizon/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/rizon/accounts/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/rizon',
      txPage: 'https://ping.pub/rizon/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/rizon',
      txPage: 'https://atomscan.com/rizon/transactions/${txHash}',
      accountPage: 'https://atomscan.com/rizon/accounts/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/rizon',
      txPage: 'https://bigdipper.live/rizon/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/rizon/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Rizon',
      txPage: 'https://explorer.stavr.tech/Rizon/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Rizon/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rizon/images/atolo.svg'
    }]
};
export default info;