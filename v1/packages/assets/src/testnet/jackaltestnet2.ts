import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'jackaltestnet2',
  assets: [{
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/08D6E8BF0537B12635270ECF5F2B04777303C1AFC65FE41D0ED84DB42B3D264F',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/08D6E8BF0537B12635270ECF5F2B04777303C1AFC65FE41D0ED84DB42B3D264F',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    }, {
      description: 'The native token of Prysm',
      denom_units: [{
          denom: 'ibc/08D6E8BF0537B12635270ECF5F2B04777303C1AFC65FE41D0ED84DB42B3D264F',
          exponent: 0,
          aliases: ['uprysm']
        }, {
          denom: 'prysm',
          exponent: 6
        }],
      base: 'ibc/08D6E8BF0537B12635270ECF5F2B04777303C1AFC65FE41D0ED84DB42B3D264F',
      display: 'prysm',
      name: 'Prysm',
      symbol: 'PRYSM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/prysmdevnet/images/prysm.svg',
          theme: {
            circle: true,
            primary_color_hex: '#cf654f'
          }
        }],
      socials: {
        website: 'https://www.prysm.network/',
        twitter: 'https://twitter.com/PrysmNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-6',
            base_denom: 'uprysm',
            chain_name: 'prysmdevnet'
          },
          chain: {
            channel_id: 'channel-2'
          }
        }]
    }]
};
export default assets;
    