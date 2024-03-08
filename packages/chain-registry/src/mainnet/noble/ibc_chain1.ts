import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-68',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
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
      chain_name: 'noble',
      client_id: '07-tendermint-0',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2704',
      connection_id: 'connection-2241'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-750',
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
      chain_name: 'noble',
      client_id: '07-tendermint-61',
      connection_id: 'connection-59'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-160',
      connection_id: 'connection-198'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
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
      chain_name: 'noble',
      client_id: '07-tendermint-24',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-170',
      connection_id: 'connection-127'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-88',
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
      chain_name: 'noble',
      client_id: '07-tendermint-45',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-45',
      connection_id: 'connection-77'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-45',
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
      chain_name: 'noble',
      client_id: '07-tendermint-16',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-287',
      connection_id: 'connection-214'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-204',
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
      chain_name: 'noble',
      client_id: '07-tendermint-76',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-97',
      connection_id: 'connection-97'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-54',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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
      chain_name: 'noble',
      client_id: '07-tendermint-56',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-367',
      connection_id: 'connection-302'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-253',
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
      chain_name: 'noble',
      client_id: '07-tendermint-73',
      connection_id: 'connection-74'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-248',
      connection_id: 'connection-210'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-120',
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
