import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'kyvetestnet',
  assets: [{
      description: 'The native utility token of the Kaon testnet version of KYVE.',
      denomUnits: [{
          denom: 'tkyve',
          exponent: 0
        }, {
          denom: 'kyve',
          exponent: 6
        }],
      base: 'tkyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          },
          provider: 'Kyve'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          imageSync: {
            chainName: 'kyve',
            baseDenom: 'ukyve'
          }
        }]
    }]
};
export default info;