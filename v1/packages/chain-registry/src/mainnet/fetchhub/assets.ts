import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'fetchhub',
  assets: [{
      description: 'The native staking and governance token of the Fetch Hub.',
      denom_units: [{
          denom: 'afet',
          exponent: 0
        }, {
          denom: 'fet',
          exponent: 18
        }],
      base: 'afet',
      name: 'fetch-ai',
      display: 'fet',
      symbol: 'FET',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      coingecko_id: 'fetch-ai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg',
          theme: {
            primary_color_hex: '#1c2444'
          }
        }],
      type_asset: 'sdk.coin'
    }, {
      description: 'The MOBX coin rewards the use of eco-friendly micromobility transportation.',
      denom_units: [{
          denom: 'nanomobx',
          exponent: 0
        }, {
          denom: 'mobx',
          exponent: 9
        }],
      base: 'nanomobx',
      name: 'MOBIX',
      display: 'mobx',
      symbol: 'MOBX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg',
          theme: {
            primary_color_hex: '#04ae9b'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;