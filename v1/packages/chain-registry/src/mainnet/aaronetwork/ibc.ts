import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aaronetwork',
      client_id: '07-tendermint-9',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-9',
      connection_id: 'connection-2842'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-91254',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }];
export default info;