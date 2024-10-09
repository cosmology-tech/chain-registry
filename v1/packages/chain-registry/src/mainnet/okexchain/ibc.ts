import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      client_id: '07-tendermint-42',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-92',
      connection_id: 'connection-35'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-85',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-5',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-24',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-44',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-116',
      connection_id: 'connection-78'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-314',
      connection_id: 'connection-285'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-122',
      connection_id: 'connection-92'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-212',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-100',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'vidulum',
      client_id: '07-tendermint-5',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;