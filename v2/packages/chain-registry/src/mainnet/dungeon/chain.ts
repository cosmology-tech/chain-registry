import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dungeon',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  website: 'https://www.cryptodungeon.org',
  prettyName: 'Dungeon Chain',
  chainId: 'dungeon-1',
  bech32Prefix: 'dungeon',
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