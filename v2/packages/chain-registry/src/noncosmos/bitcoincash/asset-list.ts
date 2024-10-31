import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'bitcoincash',
  assets: [{
      description: 'Bitcoin Cash (BCH) is a digital coin designed for quick and cost-effective transactions.',
      extendedDescription: 'Bitcoin Cash (BCH) is a peer-to-peer cryptocurrency that was created as a fork of Bitcoin (BTC) in 2017 to address scalability issues. It increases transaction throughput by allowing larger block sizes, enabling faster and cheaper transactions compared to Bitcoin. Bitcoin Cash aims to serve as a more practical digital cash for everyday use, prioritizing efficiency and low fees in financial transactions on a global scale.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'bch',
          exponent: 8
        }],
      typeAsset: 'bitcoin-like',
      base: 'sat',
      name: 'Bitcoin Cash',
      display: 'bch',
      symbol: 'BCH',
      coingeckoId: 'bitcoin-cash',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/bitcoincash/images/bch.png',
          theme: {
            primaryColorHex: '#0AC18E',
            circle: true
          }
        }],
      socials: {
        website: 'https://bitcoincash.org/',
        twitter: 'https://x.com/bitcoincashorg'
      }
    }]
};
export default info;