import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'auratestnet',
  assets: [{
      description: 'The native token of Aura Test Network',
      denomUnits: [{
          denom: 'ueaura',
          exponent: 0
        }, {
          denom: 'eaura',
          exponent: 6
        }],
      base: 'ueaura',
      name: 'EAura',
      display: 'eaura',
      symbol: 'EAURA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/aura/images/Aura-logo-2.2.svg'
        }]
    }]
};
export default info;