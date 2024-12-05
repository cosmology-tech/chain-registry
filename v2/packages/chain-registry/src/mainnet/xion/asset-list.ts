import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'xion',
  assets: [{
      description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
      extendedDescription: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction. Utilizing protocol-level implementations related to abstracted accounts, signatures, fees, interoperability, and more, XION empowers developers to build secure, intuitive, and seamless user experiences.',
      denomUnits: [{
          denom: 'uxion',
          exponent: 0,
          aliases: ['microxion']
        }, {
          denom: 'XION',
          exponent: 6,
          aliases: ['xion']
        }],
      base: 'uxion',
      display: 'XION',
      name: 'xion',
      symbol: 'XION',
      coingeckoId: 'xion-2',
      typeAsset: 'sdk.coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt-round.png'
        }],
      socials: {
        website: 'https://xion.burnt.com/',
        twitter: 'https://twitter.com/burnt_xion'
      }
    }]
};
export default info;