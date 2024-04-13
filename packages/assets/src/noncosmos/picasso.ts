import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'picasso',
  assets: [
    {
      description: 'The native staking and governance token of Composable.',
      denom_units: [{
          denom: 'ibc/1CF1239A3068964DAF55F7300D7BE016E4E184F58EEB59096B138F6D72628BAA',
          exponent: 0,
          aliases: ['ppica']
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ibc/1CF1239A3068964DAF55F7300D7BE016E4E184F58EEB59096B138F6D72628BAA',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingecko_id: 'picasso',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ppica',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      socials: {
        website: 'https://www.composable.finance/',
        twitter: 'https://twitter.com/ComposableFin'
      }
    },
    {
      description: 'The native staking and governance token of Kusama Relay Chain.',
      denom_units: [{
          denom: 'ibc/5A027DC380009335DC96374937E7AA5D7D45FA710E9A0AE76854541441026E11',
          exponent: 0,
          aliases: ['ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/5A027DC380009335DC96374937E7AA5D7D45FA710E9A0AE76854541441026E11',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description: 'The native staking and governance token of Polkadot Relay Chain.',
      denom_units: [{
          denom: 'ibc/27F48DA7E6C8C1203C9EB2BB225C876F3A600C6C3C1DD94CE283D5D027BD91E4',
          exponent: 0,
          aliases: ['ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'ics20',
      base: 'ibc/27F48DA7E6C8C1203C9EB2BB225C876F3A600C6C3C1DD94CE283D5D027BD91E4',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description: 'The native staking and governance token of Statemine parachain.',
      denom_units: [{
          denom: 'ibc/72204FE6E8B311686E65E3AADBC89B4A9CFADB141380E45856C06859FFA075C5',
          exponent: 0,
          aliases: ['ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/72204FE6E8B311686E65E3AADBC89B4A9CFADB141380E45856C06859FFA075C5',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '130'
          }
        }]
    },
    {
      description: 'The native fee, staking and governance token of the Tinkernet Parachain.',
      denom_units: [{
          denom: 'ibc/FFEBEADE598A15CD4407A40F4F2F7DAE0391FD458CBF036521F2A1651190495F',
          exponent: 0,
          aliases: ['ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      type_asset: 'ics20',
      base: 'ibc/FFEBEADE598A15CD4407A40F4F2F7DAE0391FD458CBF036521F2A1651190495F',
      name: 'TNKR',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
            chain_name: 'composable'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'picasso',
            base_denom: '2125'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    },
    {
      denom_units: [{
          denom: 'ibc/4C6F58D844C29F8C4D0FD0AF3DD989C367330A8A76328203005C023FC1635391',
          exponent: 0,
          aliases: ['79228162514264337593543950342']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      type_asset: 'substrate',
      base: 'ibc/4C6F58D844C29F8C4D0FD0AF3DD989C367330A8A76328203005C023FC1635391',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: '79228162514264337593543950342',
            chain_name: 'composablepolkadot'
          },
          chain: {
            channel_id: 'channel-15'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'polkadot',
            base_denom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
        }],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    }
  ]
};
export default assets;
    