import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'uptick',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://uptick.network/',
  pretty_name: 'Uptick',
  chain_id: 'uptick_117-1',
  bech32_prefix: 'uptick',
  daemon_name: 'uptickd',
  node_home: '$HOME/.uptickd',
  key_algos: ['secp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'auptick',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'auptick'
      }
    ]
  },
  codebase: {
    cosmos_sdk_version: '0.46',
    cosmwasm_enabled: false,
    cosmwasm_version: ''
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://uptick-rpc.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'https://uptick.rpc.bccnodes.com:443',
        provider: 'BccNodes'
      },
      {
        address: 'https://rpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'http://uptick.rpc.nodersteam.com:21657',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://uptick.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'http://uptick.rpc.m.stavr.tech:3157',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://uptick-rpc.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rpc-uptick.cakralabs.site',
        provider: 'Cakra Labs'
      },
      {
        address: 'https://rpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    rest: [
      {
        address: 'https://uptick-rest.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'http://uptick.api.nodersteam.com:21017',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://api.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://uptick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://m-uptick.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://uptick-mainnet-api.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://uptick-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://uptick-rest.stakerhouse.com',
        provider: 'StakerHouse'
      },
      {
        address: 'https://rest-uptick.cakralabs.site',
        provider: 'Cakra Labs'
      },
      {
        address: 'https://api-uptick.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'uptick.rpc.bccnodes.com:9690',
        provider: 'BccNodes'
      },
      {
        address: 'uptick.grpc.nodersteam.com:9211',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'uptick.grpc.kjnodes.com:11590',
        provider: 'kjnodes'
      },
      {
        address: 'uptick.grpc.m.stavr.tech:1901',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'uptick-mainnet-grpc.itrocket.net:10090',
        provider: 'itrocket'
      },
      {
        address: 'https://uptick.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'services.staketab.com:9190',
        provider: 'Staketab'
      },
      {
        address: 'uptick-grpc.stakerhouse.com:443',
        provider: 'StakerHouse'
      },
      {
        address: 'grpc-uptick.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'https://grpc-uptick.sr20de.xyz',
        provider: 'Sr20de'
      }
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://jsonrpc.uptick.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.jsonrpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evm-uptick.sr20de.xyz',
        provider: 'Sr20de'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.brocha.in/uptick',
      tx_page: 'https://explorers.brocha.in/uptick/tx/${txHash}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/uptick',
      tx_page: 'https://explorer.nodestake.top/uptick/tx/${txHash}'
    },
    {
      kind: 'BccNodes Explorer',
      url: 'https://explorer.bccnodes.com/uptick-M',
      tx_page: 'https://explorer.bccnodes.com/uptick-M/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/uptick-mainnet',
      tx_page: 'https://explorer.stavr.tech/uptick-mainnet/tx/${txHash}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/uptick',
      tx_page: 'https://exp.utsa.tech/uptick/tx/${txHash}'
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/uptick',
      tx_page: 'https://cosmotracker.com/uptick/tx/${txHash}'
    },
    {
      kind: 'Upscan',
      url: 'https://upscan.xyz/',
      tx_page: 'https://upscan.xyz/uptick_117-1/tx/${txHash}'
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/uptick',
      tx_page: 'https://explorer.sr20de.xyz/uptick/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg'
    }
  ]
};
export default info;
