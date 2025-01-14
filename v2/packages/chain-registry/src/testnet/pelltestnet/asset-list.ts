import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'pelltestnet',
  assets: [{
      description: 'The native staking and governance token of the testnet version of Pell Network.',
      denomUnits: [{
          denom: 'apell',
          exponent: 0
        }, {
          denom: 'pell',
          exponent: 18
        }],
      base: 'apell',
      name: 'PELL',
      display: 'pell',
      symbol: 'PELL',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pelltestnet/images/pell.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;