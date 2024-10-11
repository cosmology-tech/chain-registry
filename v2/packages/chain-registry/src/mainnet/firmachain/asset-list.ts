import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'firmachain',
  assets: [{
      description: 'FIRMACHAIN adds a signing and verifying e-contract function to the blockchain. Unlocking new limits of electronic contracts with blockchain technology, FIRMACHAIN seeks to resolve all the social and legal issues (contracts, notarial, etc.) with written contracts through the use of electronic contracts based on FIRMACHAIN’s data blockchain.',
      denomUnits: [{
          denom: 'ufct',
          exponent: 0
        }, {
          denom: 'fct',
          exponent: 6
        }],
      base: 'ufct',
      name: 'FIRMACHAIN',
      display: 'fct',
      symbol: 'FCT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg'
      },
      coingeckoId: 'firmachain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/firmachain/images/fct.svg',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;