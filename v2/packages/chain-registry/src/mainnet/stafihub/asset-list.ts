import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stafihub',
  assets: [
    {
      description: 'The native staking and governance token of the StaFi Hub.',
      denomUnits: [{
          denom: 'ufis',
          exponent: 0
        }, {
          denom: 'fis',
          exponent: 6
        }],
      base: 'ufis',
      name: 'FIS',
      display: 'fis',
      symbol: 'FIS',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
      },
      coingeckoId: 'stafi',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/fis.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A liquid staking representation of staked ATOMs',
      denomUnits: [{
          denom: 'uratom',
          exponent: 0
        }, {
          denom: 'ratom',
          exponent: 6
        }],
      base: 'uratom',
      name: 'rATOM',
      display: 'ratom',
      symbol: 'rATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'StaFiHub'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/ratom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A liquid staking representation of staked IRISs',
      denomUnits: [{
          denom: 'uriris',
          exponent: 0
        }, {
          denom: 'riris',
          exponent: 6
        }],
      base: 'uriris',
      name: 'rIRIS',
      display: 'riris',
      symbol: 'rIRIS',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'irisnet',
            baseDenom: 'uiris'
          },
          provider: 'StaFiHub'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/riris.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A liquid staking representation of staked HUAHUAs',
      denomUnits: [{
          denom: 'urhuahua',
          exponent: 0
        }, {
          denom: 'rhuahua',
          exponent: 6
        }],
      base: 'urhuahua',
      name: 'rHUAHUA',
      display: 'rhuahua',
      symbol: 'rHUAHUA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'chihuahua',
            baseDenom: 'uhuahua'
          },
          provider: 'StaFiHub'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rhuahua.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A liquid staking representation of staked SWTHs',
      denomUnits: [{
          denom: 'urswth',
          exponent: 0
        }, {
          denom: 'rswth',
          exponent: 8
        }],
      base: 'urswth',
      name: 'rSWTH',
      display: 'rswth',
      symbol: 'rSWTH',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'carbon',
            baseDenom: 'swth'
          },
          provider: 'StaFiHub'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stafihub/images/rswth.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;