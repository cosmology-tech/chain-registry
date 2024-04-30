import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'chronicnetwork',
  assets: [{
      description: 'The CHT coin is the governance token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ucht',
          exponent: 0
        }, {
          denom: 'cht',
          exponent: 6
        }],
      base: 'ucht',
      display: 'cht',
      name: 'Chronic Token',
      symbol: 'CHT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png'
      },
      coingeckoId: 'cht',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cht.png'
        }]
    }, {
      description: 'The CGAS coin is the transactional token within the Chronic Chain network, aimed to serve the entire cannabis community through its payment network, supply chain and trust network.',
      denomUnits: [{
          denom: 'ucgas',
          exponent: 0
        }, {
          denom: 'cgas',
          exponent: 6
        }],
      base: 'ucgas',
      display: 'cgas',
      name: 'Chronic Gas',
      symbol: 'CGAS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png'
      },
      coingeckoId: 'cgas',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chronicnetwork/images/cgas.png'
        }]
    }]
};
export default info;