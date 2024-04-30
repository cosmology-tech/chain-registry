import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'fxcore',
  assets: [{
      description: 'The native staking token of the Function X',
      denomUnits: [{
          denom: 'FX',
          exponent: 0
        }, {
          denom: 'WFX',
          exponent: 18
        }],
      base: 'FX',
      name: 'Function X',
      display: 'WFX',
      symbol: 'FX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
      },
      coingeckoId: 'fx-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/fxcore/images/fx.svg'
        }]
    }, {
      description: 'The cross chain token of the Function X',
      denomUnits: [{
          denom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
          exponent: 0,
          aliases: []
        }, {
          denom: 'PUNDIX',
          exponent: 18,
          aliases: []
        }],
      base: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
      display: 'PUNDIX',
      name: 'Pundi X Token',
      symbol: 'PUNDIX',
      coingeckoId: 'pundi-x-2',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
        }]
    }]
};
export default info;