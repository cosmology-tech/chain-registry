import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'cheqdtestnet',
  assets: [{
      description: 'Native token for the cheqd network',
      denom_units: [{
          denom: 'ncheq',
          exponent: 0
        }, {
          denom: 'cheq',
          exponent: 9
        }],
      base: 'ncheq',
      display: 'cheq',
      name: 'cheqd',
      symbol: 'CHEQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg'
      },
      coingecko_id: 'cheqd-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/cheqdtestnet/images/cheq.svg'
        }]
    }]
};
export default info;