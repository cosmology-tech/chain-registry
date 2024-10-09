import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'sgetestnet4',
  assets: [{
      description: 'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denomUnits: [{
          denom: 'usge',
          exponent: 0
        }, {
          denom: 'sge',
          exponent: 6
        }],
      base: 'usge',
      name: 'SGE Testnet4',
      display: 'sge',
      symbol: 'SGE',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'sgetestnet',
            baseDenom: 'usge'
          },
          provider: 'SGE'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
      },
      images: [{
          imageSync: {
            chainName: 'sge',
            baseDenom: 'usge'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sge/images/sge.svg'
        }]
    }]
};
export default info;