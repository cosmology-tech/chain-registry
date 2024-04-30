import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'planqtestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Planq Network',
      denomUnits: [{
          denom: 'atplanq',
          exponent: 0
        }, {
          denom: 'tplanq',
          exponent: 18
        }],
      base: 'atplanq',
      name: 'Planq Atlas Testnet',
      display: 'tplanq',
      symbol: 'tPLQ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/planqtestnet/images/planq.svg'
        }]
    }]
};
export default info;