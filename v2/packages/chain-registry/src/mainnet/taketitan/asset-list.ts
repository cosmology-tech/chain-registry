import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'taketitan',
  assets: [{
      description: 'Taketitan the future of the asset management industry.',
      extendedDescription: 'Taketitan is seen as the future of the asset management industry. This new blockchain technology is changing how asset management works in exciting ways.\n\nTaketitan aims to make managing assets simpler, faster, and more secure. By using blockchain technology, it provides a transparent and trustworthy system where all transactions are recorded in a secure and unchangeable way. This helps reduce the risk of fraud and errors, making asset management safer for everyone.\n\nWith Taketitan, managing assets becomes more efficient. Transactions are processed quickly, and the costs are lower compared to traditional methods. This means more people can benefit from high-quality asset management services without the high fees usually involved.\n\nTaketitan also makes it easier for people to track and manage their investments. Everything is done through a digital platform that is easy to use and always available. This gives users better control and visibility over their assets.\n\nIn short, Taketitan is revolutionizing the asset management industry by making it more secure, efficient, and accessible for everyone. This blockchain technology is paving the way for a new era in how we manage and grow our financial assets.',
      denomUnits: [{
          denom: 'ttnc',
          exponent: 0
        }],
      base: 'ttnc',
      name: 'taketitan',
      display: 'ttnc',
      symbol: 'TTNC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/taketitan/images/taketitan.svg',
          theme: {
            primaryColorHex: '#41918c'
          }
        }],
      socials: {
        website: 'https://taketitan.com/'
      },
      typeAsset: 'sdk.coin'
    }]
};
export default info;