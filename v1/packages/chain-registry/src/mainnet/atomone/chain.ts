import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'atomone',
  chain_type: 'cosmos',
  chain_id: 'atomone-1',
  website: 'https://atom.one',
  pretty_name: 'AtomOne',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'atone',
  daemon_name: 'atomoned',
  node_home: '$HOME/.atomone',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uatone',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.006,
        average_gas_price: 0.006,
        high_gas_price: 0.009
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uatone'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
  },
  description: 'The Cosmos community, at a crossroads, confronts divergent views on key aspects such as mission, tokenomics, and security philosophy. AtomOne emerges as a beacon, offering an alternative fork to navigate these waters, equipped to handle contingencies and embodying a bastion for diverse political thought.',
  apis: {
    rpc: [
      {
        address: 'https://atomone-rpc.allinbits.com:443',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://rpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rpc-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://atomone-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.atomone-1.atomone.aviaone.com:443',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'https://atomone.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc.atomone.citizenweb3.com:443',
        provider: 'Citizen Web3'
      }
    ],
    rest: [
      {
        address: 'https://atomone-api.allinbits.com',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://api-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rest-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://atomone-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.atomone-1.atomone.aviaone.com',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'https://atomone.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.atomone.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ],
    grpc: [
      {
        address: 'atomone-grpc.allinbits.com:9090',
        provider: 'AllInBits'
      },
      {
        address: 'atomone-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'atomone.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'atomone-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'atomone-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'http://grpc.atomone-1.atomone.aviaone.com:9102',
        provider: 'AVIAONE.com 🟢'
      },
      {
        address: 'atomone.grpc.m.stavr.tech:7201',
        provider: '🔥STAVR🔥'
      },
      {
        address: ' grpc.atomone.citizenweb3.com',
        provider: 'Citizen Web3'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.allinbits.com/atomone',
      tx_page: 'https://explorer.allinbits.com/atomone/tx/${txHash}',
      account_page: 'https://explorer.allinbits.com/atomone/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/atomone/',
      tx_page: 'https://explorer.nodeshub.online/atomone/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/atomone/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/atomone',
      tx_page: 'https://explorer.ist/atomone/tx/${txHash}',
      account_page: 'https://explorer.ist/atomone/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/Atomone-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Atomone-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Atomone-Mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/atomone',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/atomone/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/atomone/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE.com 🟢',
      url: 'https://mainnet.explorer.aviaone.com/atomone',
      tx_page: 'https://mainnet.explorer.aviaone.com/atomone/tx/${txHash}',
      account_page: 'https://mainnet.explorer.aviaone.com/atomone/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
    }]
};
export default info;