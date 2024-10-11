import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'terpnetwork',
  assets: [{
      description: 'Terp Token (TERP) is the Terp Network\'s native utility token, used as the primary means to govern & secure the blockchain.',
      denomUnits: [{
          denom: 'uterp',
          exponent: 0
        }, {
          denom: 'terp',
          exponent: 6
        }],
      base: 'uterp',
      name: 'Terp Network Native Token',
      display: 'terp',
      symbol: 'TERP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/terp.png',
          theme: {
            primaryColorHex: '#a2cd9a'
          }
        }],
      typeAsset: 'sdk.coin'
    }, {
      description: 'Thiol Gas Token (Thiols) is the Terp Network\'s native utility token, used as the primary means to govern, secure the blockchain & incentivize participants.',
      denomUnits: [{
          denom: 'uthiol',
          exponent: 0
        }, {
          denom: 'thiol',
          exponent: 6
        }],
      base: 'uthiol',
      name: 'Thiol Terp Gas Token',
      display: 'thiol',
      symbol: 'THIOL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terpnetwork/images/thiol.png',
          theme: {
            primaryColorHex: '#060607'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;