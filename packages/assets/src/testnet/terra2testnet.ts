import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'terra2testnet',
  assets: [{
      description: 'The native staking and governance token of the Harpoon testnet version of Kujira.',
      denom_units: [{
          denom: 'ibc/18B97CE497CF0C30296C5C2396551A6E759CC0976972612468900ED2B9E6889A',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/18B97CE497CF0C30296C5C2396551A6E759CC0976972612468900ED2B9E6889A',
      name: 'Kuji',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/kuji.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'ukuji',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-541'
          }
        }]
    }, {
      description: 'The testnet token of Fuzion',
      denom_units: [{
          denom: 'ibc/0B53E9678F0A7E9965461A4AE82374AA003B8438D053A3A59CE659401B553C4B',
          exponent: 0,
          aliases: ['factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN']
        }, {
          denom: 'fuzn',
          exponent: 6
        }],
      base: 'ibc/0B53E9678F0A7E9965461A4AE82374AA003B8438D053A3A59CE659401B553C4B',
      name: 'Fuzion',
      display: 'fuzn',
      symbol: 'FUZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/kujiratestnet/images/fuzn.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-73',
            base_denom: 'factory/kujira16qpvzhmawvsm8mcj4hdvtz25dadatdhhgw79xa/FUZN',
            chain_name: 'kujiratestnet'
          },
          chain: {
            channel_id: 'channel-541'
          }
        }]
    }]
};
export default assets;
    