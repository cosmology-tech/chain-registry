import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'seitestnet2',
  assets: [
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/8441CDD982532F04D01A7FCFA2BCC71A7452FB4B104A783807A3BD45D48C2829',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/8441CDD982532F04D01A7FCFA2BCC71A7452FB4B104A783807A3BD45D48C2829',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/B8B7519F1012740D01B7DE5B307CC927F6107E9F19382E64E55BDE061D9B29D8',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/B8B7519F1012740D01B7DE5B307CC927F6107E9F19382E64E55BDE061D9B29D8',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/51E101F17A1B096FF26F5A972BCB58771ED5DB0FADE92E62C84BD830083A1139',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/51E101F17A1B096FF26F5A972BCB58771ED5DB0FADE92E62C84BD830083A1139',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/8441CDD982532F04D01A7FCFA2BCC71A7452FB4B104A783807A3BD45D48C2829',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/8441CDD982532F04D01A7FCFA2BCC71A7452FB4B104A783807A3BD45D48C2829',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/B8B7519F1012740D01B7DE5B307CC927F6107E9F19382E64E55BDE061D9B29D8',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/B8B7519F1012740D01B7DE5B307CC927F6107E9F19382E64E55BDE061D9B29D8',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      denom_units: [{
          denom: 'ibc/51E101F17A1B096FF26F5A972BCB58771ED5DB0FADE92E62C84BD830083A1139',
          exponent: 0,
          aliases: ['ausdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ibc/51E101F17A1B096FF26F5A972BCB58771ED5DB0FADE92E62C84BD830083A1139',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nobletestnet/images/usdy.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-23',
            base_denom: 'ausdy',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-75'
          }
        }]
    }
  ]
};
export default assets;
    