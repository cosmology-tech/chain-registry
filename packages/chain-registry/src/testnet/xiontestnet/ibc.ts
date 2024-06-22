import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-970',
      connection_id: 'connection-752'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-127',
      connection_id: 'connection-64'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-521',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-225057',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-239',
      connection_id: 'connection-220'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-119',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-489',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-487',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-224',
      connection_id: 'connection-176'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-120',
      connection_id: 'connection-56'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-489',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3125',
      connection_id: 'connection-2826'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-121',
      connection_id: 'connection-57'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6668',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-490',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }
];
export default info;