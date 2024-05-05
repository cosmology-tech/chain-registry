import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'composablepolkadot',
  assets: [{
      description: 'The native staking and governance token of Picasso Kusama.',
      denom_units: [{
          denom: 'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: 'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ppica',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    }, {
      description: 'The native staking and governance token of Picasso Kusama.',
      denom_units: [{
          denom: 'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      type_asset: 'substrate',
      base: 'ibc/E2DB0AB92EDF979674C7835408C801FEB11D28B4EC05C3A2EE1343176E84F681',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/picasso/images/pica.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ppica',
            chain_name: 'picasso'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }]
    }]
};
export default assets;
    