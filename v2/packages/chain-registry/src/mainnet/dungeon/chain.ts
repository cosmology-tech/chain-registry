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
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'udgn',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.001
      }]
  },
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
  }
};
export default info;