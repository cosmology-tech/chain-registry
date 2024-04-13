import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'auratestnet',
  assets: [{
      description: 'The native token of Aura Test Network',
      denom_units: [{
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
      logo_URIs: {
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