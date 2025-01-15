import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'neutrontestnet',
  assets: [
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-40',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-133'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-1061'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4172',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4172',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/26139E488F510BDA8DDE5614D358A38502BDA061954B8D10ADEFC4EAA58552FF',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-40',
            base_denom: 'unois',
            chain_name: 'noistestnet'
          },
          chain: {
            channel_id: 'channel-133'
          }
        }]
    },
    {
      description: 'The native token of Nolus chain',
      denom_units: [{
          denom: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
          exponent: 0,
          aliases: ['unls']
        }, {
          denom: 'nls',
          exponent: 6
        }],
      base: 'ibc/E808FAAE7ADDA37453A8F0F67D74669F6580CBA5EF0F7889D46FB02D282098E3',
      name: 'Nolus',
      display: 'nls',
      symbol: 'NLS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unls',
            chain_name: 'nolustestnet'
          },
          chain: {
            channel_id: 'channel-1061'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/B4AD449E01839EFBA0561B18E0C2A37821DAF20EB448C7B8DAC82070A78D1B1A',
      name: 'Osmosis Testnet',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4172',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/9A4429BB4E2BBF23D7C2896EADBABEDF391B788613BBDC5265FC5452A1F56A88',
      name: 'Ion',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin'],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4172',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-196'
          }
        }]
    }
  ]
};
export default assets;
    