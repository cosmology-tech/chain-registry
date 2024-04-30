import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'fetchhub',
  assets: [{
      description: 'The native staking and governance token of the Fetch Hub.',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
      },
      coingeckoId: 'fetch-ai',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/fet.svg'
        }]
    }, {
      description: 'The MOBX coin rewards the use of eco-friendly micromobility transportation.',
      denomUnits: [{
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
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fetchhub/images/mobx.svg'
        }]
    }]
};
export default info;