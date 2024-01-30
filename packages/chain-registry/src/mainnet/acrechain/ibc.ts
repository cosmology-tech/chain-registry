import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-78',
      connection_id: 'connection-65'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1002',
      connection_id: 'connection-701'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-457',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-18',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-97',
      connection_id: 'connection-55'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-201',
      connection_id: 'connection-175'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-106',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-61',
      connection_id: 'connection-41'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-47',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-12',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'oraichain',
      client_id: '07-tendermint-74',
      connection_id: 'connection-42'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2316',
      connection_id: 'connection-1814'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-490',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-3',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-222',
      connection_id: 'connection-156'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-121',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-14',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-70',
      connection_id: 'connection-48'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-57',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-13',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-172',
      connection_id: 'connection-99'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
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
      chain_name: 'acrechain',
      client_id: '07-tendermint-11',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-101',
      connection_id: 'connection-89'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-77',
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
  }
];
export default info;
