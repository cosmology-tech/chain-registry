import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-59',
      connection_id: 'connection-35'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-29',
      connection_id: 'connection-18'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-326',
      connection_id: 'connection-300'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-158',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-66',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-16',
      connection_id: 'connection-11'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-44',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-41',
      connection_id: 'connection-27'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
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
    channels: [{
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
      }]
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
    channels: [{
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
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      client_id: '07-tendermint-74',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-45',
      connection_id: 'connection-31'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-88',
      connection_id: 'connection-70'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-46',
      connection_id: 'connection-32'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  }
];
export default info;