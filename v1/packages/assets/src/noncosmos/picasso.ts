import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'picasso',
  assets: [{
      description: 'Passage.io is a decentralized platform that enables users to create, distribute, and monetize immersive virtual experiences and content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/356741CDF44F53D98B536F65051D97D6159495A97776162EC25899411C954768',
          exponent: 0,
          aliases: ['upasg']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      base: 'ibc/356741CDF44F53D98B536F65051D97D6159495A97776162EC25899411C954768',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingecko_id: 'passage',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
          theme: {
            primary_color_hex: '#05050c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'upasg',
            chain_name: 'passage'
          },
          chain: {
            channel_id: 'channel-80'
          }
        }]
    }, {
      description: 'Passage.io is a decentralized platform that enables users to create, distribute, and monetize immersive virtual experiences and content using blockchain technology.',
      denom_units: [{
          denom: 'ibc/356741CDF44F53D98B536F65051D97D6159495A97776162EC25899411C954768',
          exponent: 0,
          aliases: ['upasg']
        }, {
          denom: 'pasg',
          exponent: 6
        }],
      base: 'ibc/356741CDF44F53D98B536F65051D97D6159495A97776162EC25899411C954768',
      name: 'Passage',
      display: 'pasg',
      symbol: 'PASG',
      coingecko_id: 'passage',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png',
          theme: {
            primary_color_hex: '#05050c'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-7',
            base_denom: 'upasg',
            chain_name: 'passage'
          },
          chain: {
            channel_id: 'channel-80'
          }
        }]
    }]
};
export default assets;
    