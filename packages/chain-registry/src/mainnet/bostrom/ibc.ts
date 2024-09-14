import { IBCInfo } from '@chain-registry/types';
const info = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bostrom',
      client_id: '07-tendermint-15',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-764',
      connection_id: 'connection-553'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-341',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bostrom',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1597',
      connection_id: 'connection-1255'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-95',
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
  }] as const satisfies IBCInfo[];
export default info;