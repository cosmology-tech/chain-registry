import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'neutrontestnet',
  assets: [{
      description: 'The native token of Neutron chain',
      denomUnits: [{
          denom: 'untrn',
          exponent: 0
        }, {
          denom: 'ntrn',
          exponent: 6
        }],
      base: 'untrn',
      name: 'Neutron Testnet',
      display: 'ntrn',
      symbol: 'NTRN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/ntrn.svg'
        }]
    }]
};
export default info;