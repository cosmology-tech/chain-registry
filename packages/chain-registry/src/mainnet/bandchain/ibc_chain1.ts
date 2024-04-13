import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bandchain',
      client_id: '07-tendermint-124',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'comdex',
      client_id: '07-tendermint-81',
      connection_id: 'connection-48'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-96',
          port_id: 'oracle'
        },
        chain_2: {
          channel_id: 'channel-43',
          port_id: 'bandoracleV1'
        },
        ordering: 'unordered',
        version: 'bandchain-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bandchain',
      client_id: '07-tendermint-162',
      connection_id: 'connection-141'
    },
    chain_2: {
      chain_name: 'coreum',
      client_id: '07-tendermint-33',
      connection_id: 'connection-22'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-159',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
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
      chain_name: 'bandchain',
      client_id: '07-tendermint-94',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1743',
      connection_id: 'connection-1345'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-148',
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
  }
];
export default info;