import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'uptick',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://uptick.network/',
  pretty_name: 'Uptick',
  chain_type: 'cosmos',
  chain_id: 'uptick_117-1',
  bech32_prefix: 'uptick',
  daemon_name: 'uptickd',
  node_home: '$HOME/.uptickd',
  key_algos: ['secp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'auptick',
        fixed_min_gas_price: 13000000000,
        low_gas_price: 13000000000,
        average_gas_price: 16000000000,
        high_gas_price: 20000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'auptick'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/UptickNetwork/uptick',
    recommended_version: 'v0.2.19',
    compatible_versions: ['v0.2.19'],
    binaries: {
      "linux/amd64": 'https://github.com/UptickNetwork/uptick/archive/refs/tags/v0.2.19.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.3',
      tag: 'v0.37.3-0.20230920093934-46df7b597e3c'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/uptick-network/mainnet/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.5'
    },
    ibc: {
      type: 'go',
      version: '7.3.0'
    },
    cosmwasm: {
      version: 'v0.45.0',
      enabled: true
    }
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
        address: 'https://rpc.uptick.nodestake.org',
        provider: 'NodeStake'
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
      },
      {
        address: 'https://uptick-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://uptick-rest.brocha.in:443',
        provider: 'Brochain'
      },
      {
        address: 'https://api.uptick.nodestake.org',
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
      },
      {
        address: 'https://uptick-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.uptick.nodestake.org',
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
      },
      {
        address: 'uptick-grpc.noders.services:24090',
        provider: '[NODERS]TEAM'
      }
    ],
    "evm-http-jsonrpc": [
      {
        address: 'https://jsonrpc.uptick.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://uptick.jsonrpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://evm-uptick.sr20de.xyz',
        provider: 'Sr20de'
      },
      {
        address: 'https://uptick-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
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
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/uptick',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=uptick&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=uptick&addr=${accountAddress}'
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.org/uptick',
      tx_page: 'https://explorer.nodestake.org/uptick/tx/${txHash}'
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
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
      theme: {
        primary_color_hex: '#1f182f'
      }
    }]
};
export default info;