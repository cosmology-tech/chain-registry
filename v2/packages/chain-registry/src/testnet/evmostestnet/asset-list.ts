import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'evmostestnet',
  assets: [{
      description: 'The native EVM, governance and staking token of the Evmos Hub',
      denomUnits: [{
          denom: 'atevmos',
          exponent: 0
        }, {
          denom: 'tevmos',
          exponent: 18
        }],
      base: 'atevmos',
      name: 'Evmos Testnet',
      display: 'tevmos',
      symbol: 'TEVMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;