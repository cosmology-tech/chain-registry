import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '08-wasm-215',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'solana',
      client_id: '07-tendermint-1',
      connection_id: 'connection-108'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-71',
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
          preferred: true
        }
      }]
  }];
export default info;