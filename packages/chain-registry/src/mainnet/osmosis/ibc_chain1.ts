import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1576',
      connection_id: 'connection-1231'
    },
    chain_2: {
      chain_name: 'panacea',
      client_id: '07-tendermint-6',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2935',
      connection_id: 'connection-2430'
    },
    chain_2: {
      chain_name: 'passage',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2494',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2318',
      connection_id: 'connection-1815'
    },
    chain_2: {
      chain_name: 'planq',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-492',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1899',
      connection_id: 'connection-1472'
    },
    chain_2: {
      chain_name: 'provenance',
      client_id: '07-tendermint-31',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-222',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3059',
      connection_id: 'connection-2554'
    },
    chain_2: {
      chain_name: 'pundix',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12618',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3070',
      connection_id: 'connection-2558'
    },
    chain_2: {
      chain_name: 'pylons',
      client_id: '07-tendermint-32',
      connection_id: 'connection-25'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17683',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2703',
      connection_id: 'connection-2240'
    },
    chain_2: {
      chain_name: 'quasar',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-688',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2400',
      connection_id: 'connection-1889'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-6',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-522',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2831',
      connection_id: 'connection-2345'
    },
    chain_2: {
      chain_name: 'qwoyn',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-880',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2849',
      connection_id: 'connection-2361'
    },
    chain_2: {
      chain_name: 'realio',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1424',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2173',
      connection_id: 'connection-1692'
    },
    chain_2: {
      chain_name: 'rebus',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-355',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-6',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1898',
      connection_id: 'connection-1471'
    },
    chain_2: {
      chain_name: 'rizon',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-221',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3157',
      connection_id: 'connection-2626'
    },
    chain_2: {
      chain_name: 'saga',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-38946',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3098',
      connection_id: 'connection-2571'
    },
    chain_2: {
      chain_name: 'scorum',
      client_id: '07-tendermint-6',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-20100',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1588',
      connection_id: 'connection-1244'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-88',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-476',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-44',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2790',
      connection_id: 'connection-2288'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-782',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2972',
      connection_id: 'connection-2468'
    },
    chain_2: {
      chain_name: 'sge',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5485',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2680',
      connection_id: 'connection-2182'
    },
    chain_2: {
      chain_name: 'shareledger',
      client_id: '07-tendermint-1',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-647',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1741',
      connection_id: 'connection-1342'
    },
    chain_2: {
      chain_name: 'shentu',
      client_id: '07-tendermint-9',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-146',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1484',
      connection_id: 'connection-1159'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-41',
      connection_id: 'connection-20'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1745',
      connection_id: 'connection-1348'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-165',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3035',
      connection_id: 'connection-2524'
    },
    chain_2: {
      chain_name: 'source',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8945',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2969',
      connection_id: 'connection-2465'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-7',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5413',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1562',
      connection_id: 'connection-1223'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-71',
      connection_id: 'connection-42'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2119',
      connection_id: 'connection-1657'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-326',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2192',
      connection_id: 'connection-1710'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-362',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1215',
      connection_id: 'connection-1549'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-12',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1979',
      connection_id: 'connection-1536'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-251',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-559',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-85',
          port_id:
            'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-341',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id:
            'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-21671',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-392',
          port_id:
            'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2025',
      connection_id: 'connection-1565'
    },
    chain_2: {
      chain_name: 'tgrade',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-263',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1805',
      connection_id: 'connection-1410'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-6',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-184',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2229',
      connection_id: 'connection-1746'
    },
    chain_2: {
      chain_name: 'unification',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-382',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1705',
      connection_id: 'connection-1300'
    },
    chain_2: {
      chain_name: 'vidulum',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2875',
      connection_id: 'connection-2389'
    },
    chain_2: {
      chain_name: 'xpla',
      client_id: '07-tendermint-11',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1634',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  }
];
export default info;
