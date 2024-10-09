import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'fantom',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      },
      coingeckoId: 'fantom',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }]
    }, {
      description: 'ERC20 wrapped version of FTM',
      typeAsset: 'erc20',
      address: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      denomUnits: [{
          denom: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
          exponent: 0
        }, {
          denom: 'wftm',
          exponent: 18
        }],
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      name: 'Wrapped Fantom',
      display: 'wftm',
      symbol: 'WFTM',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'fantom',
            baseDenom: 'wei'
          },
          chain: {
            contract: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83'
          },
          provider: 'Fantom'
        }],
      images: [{
          imageSync: {
            chainName: 'fantom',
            baseDenom: 'wei'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/fantom/images/ftm.svg'
      }
    }]
};
export default info;