import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'ton',
  assets: [{
      description: 'Toncoin ($TON) is the native cryptocurrency of the TON (The Open Network) blockchain.',
      extendedDescription: 'TON (The Open Network) is a decentralized layer-1 blockchain designed for scalability, speed, and efficiency. It was originally conceived by the creators of Telegram but was later handed over to an open-source community to maintain and expand.',
      denomUnits: [{
          denom: 'nanoton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      typeAsset: 'unknown',
      base: 'nanoton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      coingeckoId: 'the-open-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primaryColorHex: '#0088CC',
            backgroundColorHex: '#0088CC'
          }
        }],
      socials: {
        website: 'https://ton.tg/',
        twitter: 'https://x.com/ton_blockchain'
      }
    }]
};
export default info;