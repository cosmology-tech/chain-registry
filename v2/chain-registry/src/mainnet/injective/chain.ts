import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'injective',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://injective.com/',
  prettyName: 'Injective',
  chainId: 'injective-1',
  bech32Prefix: 'inj',
  extraCodecs: ['injective'],
  slip44: 60,
  daemonName: 'injectived',
  nodeHome: '$HOME/.injectived',
  fees: {
    feeTokens: [{
        denom: 'inj',
        fixedMinGasPrice: 160000000,
        lowGasPrice: 500000000,
        averageGasPrice: 700000000,
        highGasPrice: 900000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'inj'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
  },
  description: 'Injective’s mission is to create a truly free and inclusive financial system through decentralization.',
  apis: {
    rpc: [
      {
        address: 'https://injective-1-public-rpc.mesa.ec1-prod.newmetric.xyz',
        provider: 'NewMetric'
      },
      {
        address: 'https://rpc-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://injective-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://injective-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://injective-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc-injective-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://injective-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://injective-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/injective/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'https://rpc.injective.bronbro.io/',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://injective-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://injective-1-public-rest.mesa.ec1-prod.newmetric.xyz',
        provider: 'NewMetric'
      },
      {
        address: 'https://api-injective-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://injective-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://injective-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://lcd-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api-injective-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://rest-injective.goldenratiostaking.net',
        provider: 'Golden Ratio Staking'
      },
      {
        address: 'https://injective-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'injective-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://injective-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/injective/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'https://lcd.injective.bronbro.io/',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://injective-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'k8s-injectiv-publicin-731c880328-0f3d7889b57e31a3.elb.eu-central-1.amazonaws.com:80',
        provider: 'NewMetric'
      },
      {
        address: 'grpc-injective-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'injective-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'injective-grpc.polkachu.com:14390',
        provider: 'Polkachu'
      },
      {
        address: 'injective-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-injective.cosmos-spaces.cloud:9900',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'grpc.injective.posthuman.digital:80',
        provider: 'POSTHUMAN ꝏ DVS'
      },
      {
        address: 'grpc-injective.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'grpc-injective-01.stakeflow.io:2102',
        provider: 'Stakeflow'
      },
      {
        address: 'injective-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'injective-grpc.w3coins.io:14390',
        provider: 'w3coins'
      },
      {
        address: 'grpc-injective.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'grpc.injective.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'injective-grpc.noders.services:33090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/injective',
      txPage: 'https://ezstaking.app/injective/txs/${txHash}',
      accountPage: 'https://ezstaking.app/injective/account/${accountAddress}'
    },
    {
      kind: 'injectiveprotocol',
      url: 'https://explorer.injective.network/',
      txPage: 'https://explorer.injective.network/transaction/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/injective',
      txPage: 'https://ping.pub/injective/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/injective',
      txPage: 'https://atomscan.com/injective/transactions/${txHash}',
      accountPage: 'https://atomscan.com/injective/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/injective',
      txPage: 'https://www.mintscan.io/injective/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/injective/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/injective',
      accountPage: 'https://stakeflow.io/injective/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
    }]
};
export default info;