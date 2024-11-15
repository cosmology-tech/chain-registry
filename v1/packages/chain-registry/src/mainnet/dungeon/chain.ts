import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'dungeon',
  status: 'live',
  network_type: 'mainnet',
  chain_type: 'cosmos',
  website: 'https://www.cryptodungeon.org',
  pretty_name: 'Dungeon Chain',
  chain_id: 'dungeon-1',
  bech32_prefix: 'dungeon',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'udgn',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.001
      }]
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes'
      },
      {
        address: 'https://rpc-archive-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes (Archive)'
      },
      {
        address: 'https://dungeon_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://api-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes'
      },
      {
        address: 'https://api-archive-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes (Archive)'
      },
      {
        address: 'https://dungeon_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ]
  },
  explorers: [{
      kind: 'Ping.Pub',
      url: 'https://ping.pub/Dungeonchain',
      tx_page: 'https://ping.pub/Dungeonchain/tx/${txHash}',
      account_page: 'https://ping.pub/Dungeonchain/account/${accountAddress}'
    }, {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/dungeon',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/dungeon/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/dungeon/account/${accountAddress}'
    }]
};
export default info;