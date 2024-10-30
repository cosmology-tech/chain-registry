import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2522',
      connection_id: 'connection-2881'
    },
    chain_2: {
      chain_name: 'elystestnet',
      client_id: '07-tendermint-19',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-3302',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
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
      chain_name: 'elystestnet',
      client_id: '07-tendermint-9',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-28',
      connection_id: 'connection-26'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
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
      chain_name: 'elystestnet',
      client_id: '07-tendermint-118',
      connection_id: 'connection-80'
    },
    chain_2: {
      chain_name: 'prysmdevnet',
      client_id: '07-tendermint-21',
      connection_id: 'connection-14'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;