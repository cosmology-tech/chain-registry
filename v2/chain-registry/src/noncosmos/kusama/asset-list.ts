import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kusama',
  assets: [{
      description: 'The native fee, governance, staking, and bonding token of the Polkadot platform.',
      denomUnits: [
        {
          denom: 'Planck',
          exponent: 0
        },
        {
          denom: 'Point',
          exponent: 3
        },
        {
          denom: 'uKSM',
          exponent: 3,
          aliases: ['MicroKSM']
        },
        {
          denom: 'uKSM',
          exponent: 3,
          aliases: ['MilliKSM']
        },
        {
          denom: 'KSM',
          exponent: 12
        }
      ],
      typeAsset: 'substrate',
      base: 'Planck',
      name: 'Kusama',
      display: 'KSM',
      symbol: 'KSM',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      },
      coingeckoId: 'kusama',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }]
    }]
};
export default info;