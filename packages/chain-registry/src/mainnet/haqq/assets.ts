import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'haqq',
  assets: [{
      description: 'The native EVM, governance and staking token of the Haqq Network',
      denom_units: [{
          denom: 'aISLM',
          exponent: 0
        }, {
          denom: 'ISLM',
          exponent: 18
        }],
      base: 'aISLM',
      name: 'Islamic Coin',
      display: 'ISLM',
      symbol: 'ISLM',
      coingecko_id: 'islamic-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/islm.svg',
          theme: {
            primary_color_hex: '#04cd80'
          }
        }]
    }, {
      description: 'Deenar gold-backed stablecoin',
      denom_units: [{
          denom: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
          exponent: 0
        }, {
          denom: 'DEEN',
          exponent: 6
        }],
      base: 'erc20/0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      name: 'Deenar',
      display: 'DEEN',
      address: '0x4FEBDDe47Ab9a76200e57eFcC80b212a07b3e6cE',
      symbol: 'DEEN',
      type_asset: 'erc20',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chain_name: 'comex',
            base_denom: 'XAU'
          },
          provider: 'Deenar'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/haqq/images/deen.svg',
          theme: {
            primary_color_hex: '#ffbc05',
            circle: true
          }
        }]
    }]
};
export default info;