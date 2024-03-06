import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-96',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-15',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-33',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-30',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-106',
      connection_id: 'connection-146'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-126',
      connection_id: 'connection-98'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      },
      {
        chain_1: {
          channel_id: 'channel-159',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-34',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-166',
      connection_id: 'connection-207'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-358',
      connection_id: 'connection-293'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-197',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-287',
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
      chain_name: 'persistence',
      client_id: '07-tendermint-39',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-44',
      connection_id: 'connection-30'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-83',
      connection_id: 'connection-71'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-54',
      connection_id: 'connection-33'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-67',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-105',
      connection_id: 'connection-144'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-179',
      connection_id: 'connection-119'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-81',
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
  }
];
export default info;
