import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nibiru',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://nibiru.fi/',
  pretty_name: 'Nibiru',
  chain_id: 'cataclysm-1',
  bech32_prefix: 'nibi',
  daemon_name: 'nibid',
  node_home: '$HOME/.nibid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'unibi',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'unibi'
      }],
    lock_duration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmos_sdk_version: 'v0.47.10',
    cosmwasm_enabled: true,
    cosmwasm_version: 'v0.44.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
  },
  description: 'A Web3 hub ushering in the next era of money',
  apis: {
    rpc: [
      {
        address: 'https://rpc.nibiru.fi',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'https://nibiru.rpc.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://rpc.nibiru.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://nibiru-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.nibiru.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://nibiru.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nibiru-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://nibiru.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://lcd.nibiru.fi',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'https://nibiru.api.kjnodes.com',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'https://api.nibiru.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://api.nibiru.silentvalidator.com',
        provider: 'silent'
      },
      {
        address: 'https://nibiru-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://nibiru.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://nibiru-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://nibiru.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://nibiru.api.staking-explorer.com',
        provider: 'Daily DROP'
      }
    ],
    grpc: [
      {
        address: 'grpc.nibiru.fi:443',
        provider: 'Nibiru Foundation'
      },
      {
        address: 'nibiru.grpc.kjnodes.com:443',
        provider: 'kjnodes.com 🦄'
      },
      {
        address: 'grpc.nibiru.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc.nibiru.silentvalidator.com:443',
        provider: 'silent'
      },
      {
        address: 'https://nibiru-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'nibiru.grpc.liveraven.net:443',
        provider: 'LiveRaveN'
      },
      {
        address: 'nibiru-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://nibiru.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'nibiru.grpc.m.stavr.tech:5023',
        provider: '🔥STAVR🔥'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nodes Guru',
      url: 'https://nibiru.explorers.guru/',
      tx_page: 'https://nibiru.explorers.guru/transaction/${txHash}',
      account_page: 'https://nibiru.explorers.guru/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/nibiru',
      tx_page: 'https://explorer.nodestake.org/nibiru/tx/${txHash}',
      account_page: 'https://explorer.nodestake.org/nibiru/account/${accountAddress}'
    },
    {
      kind: 'LiveRaveN',
      url: 'https://mainnet.explorer.liveraven.net/nibiru',
      tx_page: 'https://mainnet.explorer.liveraven.net/nibiru/tx/${txHash}',
      account_page: 'https://mainnet.explorer.liveraven.net/nibiru/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Nibiru-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Nibiru-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Nibiru-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/nibiru/',
      tx_page: 'https://explorer.nodeshub.online/nibiru/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/nibiru/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
    }]
};
export default info;