import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-228',
      connection_id: 'connection-211'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-105',
      connection_id: 'connection-43'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-324',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-215',
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
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-25',
      connection_id: 'connection-24'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-17',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
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
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1474',
      connection_id: 'connection-1380'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-22',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4410',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
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
