import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'arbitrum',
  assets: [{
      description: 'The governance token of Arbitrum',
      typeAsset: 'erc20',
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      denomUnits: [{
          denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      coingeckoId: 'arbitrum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }]
    }]
};
export default info;