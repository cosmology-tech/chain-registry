import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-45',
      connection_id: 'connection-39'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-34',
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
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-70',
      connection_id: 'connection-60'
    },
    chain_2: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-603',
      connection_id: 'connection-418'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-305',
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
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-77',
      connection_id: 'connection-73'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1195',
      connection_id: 'connection-1101'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-58',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3938',
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