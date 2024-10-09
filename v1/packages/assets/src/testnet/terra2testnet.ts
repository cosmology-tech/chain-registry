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
      type_asset: 'sdk.coin',
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
      type_asset: 'sdk.coin',
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
    }]
};
export default assets;
    