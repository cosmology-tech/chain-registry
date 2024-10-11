import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'aptos',
  assets: [{
      description: 'Aptos token (APT) is the Aptos blockchain native token used for paying network and transaction fees.',
      denomUnits: [{
          denom: '0x1::aptos_coin::AptosCoin',
          exponent: 0,
          aliases: ['Octa']
        }, {
          denom: 'APT',
          exponent: 8
        }],
      typeAsset: 'unknown',
      base: '0x1::aptos_coin::AptosCoin',
      name: 'Aptos Coin',
      display: 'APT',
      symbol: 'APT',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
      },
      coingeckoId: 'aptos',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/aptos.svg'
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/aptos/images/apt-dm.svg',
          theme: {
            darkMode: true
          }
        }]
    }]
};
export default info;