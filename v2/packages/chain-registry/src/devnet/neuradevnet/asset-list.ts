import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'neuradevnet',
  assets: [{
      description: 'ANKR: The native EVM, governance, and staking token for Neura, enabling secure transactions, and seamless GPU resourcing within the ecosystem.',
      denomUnits: [{
          denom: 'atankr',
          exponent: 0
        }, {
          denom: 'ankr',
          exponent: 18
        }],
      base: 'atankr',
      name: 'Neura Devnet',
      display: 'ankr',
      symbol: 'ANKR',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chainName: 'neura',
            baseDenom: 'atankr'
          },
          provider: 'Neura'
        }],
      images: [{
          imageSync: {
            chainName: 'neura',
            baseDenom: 'atankr'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ankr.svg'
        }],
      typeAsset: 'sdk.coin'
    }]
};
export default info;