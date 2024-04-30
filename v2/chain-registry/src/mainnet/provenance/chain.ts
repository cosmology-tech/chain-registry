import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'provenance',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://provenance.io/',
  prettyName: 'Provenance',
  chainId: 'pio-mainnet-1',
  bech32Prefix: 'pb',
  daemonName: 'provenanced',
  nodeHome: '$HOME/Provenance',
  keyAlgos: ['secp256k1'],
  slip44: 505,
  fees: {
    feeTokens: [{
        denom: 'nhash',
        fixedMinGasPrice: 1905,
        lowGasPrice: 1905,
        averageGasPrice: 2100,
        highGasPrice: 2500
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nhash'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46.13',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.30'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-provenance.takeshi.team/',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc.provenance.io/',
        provider: 'Figure'
      },
      {
        address: 'https://rpc-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://provenance-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-rpc.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://rpc.provenance.blockval.io/',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-rpc.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api-provenance.takeshi.team',
        provider: 'TAKESHI'
      },
      {
        address: 'https://provenance-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.provenance.io',
        provider: 'Figure'
      },
      {
        address: 'https://provenance.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-provenance-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://provenance-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://provenance-api.highstakes.ch',
        provider: 'High Stakes 🇨🇭'
      },
      {
        address: 'https://api.provenance.blockval.io',
        provider: 'Blockval'
      },
      {
        address: 'https://provenance-api.panthea.eu',
        provider: 'Panthea EU'
      },
      {
        address: 'https://provenance_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-provenance.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'provenance-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-provenance-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'grpc.provenance.blockval.io:9290',
        provider: 'Blockval'
      },
      {
        address: 'provenance-grpc.panthea.eu:16780',
        provider: 'Panthea EU'
      }
    ]
  },
  explorers: [
    {
      kind: 'Provenance',
      url: 'https://explorer.provenance.io',
      txPage: 'https://explorer.provenance.io/tx/${txHash}'
    },
    {
      kind: 'hubble',
      url: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1',
      txPage: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/provenance',
      txPage: 'https://ping.pub/provenance/tx/${txHash}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/provenance',
      txPage: 'https://www.mintscan.io/provenance/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/provenance/accounts/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Provenance',
      txPage: 'https://explorer.stavr.tech/Provenance/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Provenance/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/provenance',
      txPage: 'https://ezstaking.app/provenance/txs/${txHash}',
      accountPage: 'https://ezstaking.app/provenance/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/provenance',
      txPage: 'https://atomscan.com/provenance/transactions/${txHash}',
      accountPage: 'https://atomscan.com/provenance/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/provenance',
      txPage: 'https://explorer.whenmoonwhenlambo.money/provenance/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/provenance/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/provenance/images/prov.svg'
    }]
};
export default info;