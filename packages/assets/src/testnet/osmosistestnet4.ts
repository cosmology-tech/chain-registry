import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'osmosistestnet4',
  assets: [
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
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
            channel_id: 'channel-135',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
          exponent: 0,
          aliases: ['ujunox']
        }, {
          denom: 'junox',
          exponent: 6
        }],
      base: 'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'ujunox',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-3316'
          }
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [{
          denom: 'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-2083'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/52457B1109B9E64CC855317A66580B4BC5BBF8522EE78E1F571B5BD8AB873B17',
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
            channel_id: 'channel-135',
            base_denom: 'uaxl',
            chain_name: 'axelartestnet'
          },
          chain: {
            channel_id: 'channel-1946'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
          exponent: 0,
          aliases: ['ujunox']
        }, {
          denom: 'junox',
          exponent: 6
        }],
      base: 'ibc/7E3DB8DA12B7A7E2056E2449434A6F745E3C29B50217538BE31A50375EF088C6',
      name: 'Juno Testnet',
      display: 'junox',
      symbol: 'JUNOX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/junotestnet/images/juno.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-140',
            base_denom: 'ujunox',
            chain_name: 'junotestnet'
          },
          chain: {
            channel_id: 'channel-3316'
          }
        }]
    },
    {
      description: 'The native token of Mars Protocol',
      denom_units: [{
          denom: 'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/ACA4C8A815A053CC027DB90D15915ADA31939FA331CE745862CDD00A2904FA17',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umars',
            chain_name: 'marstestnet'
          },
          chain: {
            channel_id: 'channel-2083'
          }
        }]
    },
    {
      description: 'The controlled staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/CE0C7F9A682EA4EA4F84ABC0870DD6DA04974D26ADE2840D42AFA20991E6E4EF',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ustake',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }]
    },
    {
      description: 'Love is a test tokenfactory asset controlled by the Strangelove Team',
      denom_units: [{
          denom: 'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
          exponent: 0,
          aliases: ['ulove']
        }, {
          denom: 'love',
          exponent: 6
        }],
      base: 'ibc/91FB098E4C7C5647D3FAA193F53F55ECDE35CF3454669FE5536556159F6C2920',
      display: 'love',
      name: 'Love',
      symbol: 'LOVE',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'ulove',
            chain_name: 'nobletestnet'
          },
          chain: {
            channel_id: 'channel-3651'
          }
        }]
    }
  ]
};
export default assets;
    