import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'xiontestnet',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-521',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-225057'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-489',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-487'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C8FD14D5DA62F9C74732082F87954EF1EAAB921A1E0F9435A8036EB0AAFB2224',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C8FD14D5DA62F9C74732082F87954EF1EAAB921A1E0F9435A8036EB0AAFB2224',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-147',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-489'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/197E0E61120F536972C6456BF2D4D2F786110EA228E31E5CE8695F7C5C96D42B',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/197E0E61120F536972C6456BF2D4D2F786110EA228E31E5CE8695F7C5C96D42B',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-147',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-489'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
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
            channel_id: 'channel-6668',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C622FF9AEDA0202E1910CF9F8D67C2BCC7AEE49E506EFE617A364875B8BFD92F',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C622FF9AEDA0202E1910CF9F8D67C2BCC7AEE49E506EFE617A364875B8BFD92F',
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
            channel_id: 'channel-6668',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/33517D439F5E545A1AAB148FAE43AAE17CF68FFB9BC97AE0048A3E3B64518C58',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-521',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-225057'
          }
        }]
    },
    {
      description: 'The INJ token is the native governance token for the Injective chain.',
      denom_units: [{
          denom: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/05314A48723E06A1B1B666066B6BEC89F3708E8854DF2E5E9193387AA9653036',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingecko_id: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-489',
            base_denom: 'inj',
            chain_name: 'injectivetestnet'
          },
          chain: {
            channel_id: 'channel-487'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C8FD14D5DA62F9C74732082F87954EF1EAAB921A1E0F9435A8036EB0AAFB2224',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C8FD14D5DA62F9C74732082F87954EF1EAAB921A1E0F9435A8036EB0AAFB2224',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-147',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-489'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/197E0E61120F536972C6456BF2D4D2F786110EA228E31E5CE8695F7C5C96D42B',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/197E0E61120F536972C6456BF2D4D2F786110EA228E31E5CE8695F7C5C96D42B',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-147',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-489'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6,
          aliases: []
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/484532EB74866F3FB8A71F909F7B1B470FE2E66313DA0A1F9EE5B7C5C046D195',
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
            channel_id: 'channel-6668',
            base_denom: 'uosmo',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }]
    },
    {
      denom_units: [{
          denom: 'ibc/C622FF9AEDA0202E1910CF9F8D67C2BCC7AEE49E506EFE617A364875B8BFD92F',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/C622FF9AEDA0202E1910CF9F8D67C2BCC7AEE49E506EFE617A364875B8BFD92F',
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
            channel_id: 'channel-6668',
            base_denom: 'uion',
            chain_name: 'osmosistestnet'
          },
          chain: {
            channel_id: 'channel-490'
          }
        }]
    }
  ]
};
export default assets;
    