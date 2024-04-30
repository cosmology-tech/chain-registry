import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'rsprovidertestnet',
  assets: [{
      description: 'The native staking and governance token of the Replicated Security Testnet.',
      denomUnits: [{
          denom: 'uatom',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'uatom',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    }]
};
export default info;