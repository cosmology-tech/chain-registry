import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-594',
      connection_id: 'connection-410'
    },
    chain_2: {
      chain_name: 'dydxtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-297',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
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
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-823',
      connection_id: 'connection-633'
    },
    chain_2: {
      chain_name: 'lavatestnet2',
      client_id: '07-tendermint-4',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-418',
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
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4170',
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
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-213',
      connection_id: 'connection-151'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-3319',
      connection_id: 'connection-2807'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1946',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-522',
      connection_id: 'connection-372'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-261',
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
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-767',
      connection_id: 'connection-581'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-370',
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
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-585',
      connection_id: 'connection-402'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-10',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-283',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  }
];
export default info;
