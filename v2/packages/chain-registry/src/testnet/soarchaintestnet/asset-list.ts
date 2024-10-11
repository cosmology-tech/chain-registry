import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'soarchaintestnet',
  assets: [{
      description: 'The native staking coin of the Soarchain-core.',
      denomUnits: [{
          denom: 'utsoar',
          exponent: 0,
          aliases: ['microtsoar']
        }, {
          denom: 'tsoar',
          exponent: 6
        }],
      base: 'utsoar',
      display: 'tsoar',
      name: 'tsoar',
      symbol: 'tsoar',
      keywords: ['DePin'],
      socials: {
        website: 'https://www.soarchain.com',
        twitter: 'https://x.com/soar_chain'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;