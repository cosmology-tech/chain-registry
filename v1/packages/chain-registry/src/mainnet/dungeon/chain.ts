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
  apis: {
    rpc: [{
        address: 'https://rpc-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes'
      }, {
        address: 'https://rpc-archive-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes (Archive)'
      }],
    rest: [{
        address: 'https://api-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes'
      }, {
        address: 'https://api-archive-dungeonchain.apeironnodes.com',
        provider: 'ApeironNodes (Archive)'
      }]
  },
  slip44: 118
};
export default info;