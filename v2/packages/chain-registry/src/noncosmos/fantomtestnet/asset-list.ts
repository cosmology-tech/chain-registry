import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../../assetlist.schema.json',
  chainName: 'fantomtestnet',
  assets: [{
      description: 'Fantom\'s native utility token — FTM — powers the entire Fantom blockchain ecosystem. FTM tokens are used for staking, governance, payments, and fees on the network.',
      denomUnits: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'ftm',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'wei',
      name: 'Fantom',
      display: 'ftm',
      symbol: 'FTM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }]
    }, {
      description: 'ERC20 wrapped version of FTM',
      typeAsset: 'erc20',
      address: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
      denomUnits: [{
          denom: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
          exponent: 0
        }, {
          denom: 'wftm',
          exponent: 18
        }],
      base: '0x812666209b90344Ec8e528375298ab9045c2Bd08',
      name: 'Wrapped Fantom',
      display: 'wftm',
      symbol: 'WFTM',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'fantomtestnet',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0x812666209b90344Ec8e528375298ab9045c2Bd08'
          },
          provider: 'Fantom'
        }],
      images: [{
          imageSync: {
            chainName: 'fantomtestnet',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png'
      }
    }]
};
export default info;