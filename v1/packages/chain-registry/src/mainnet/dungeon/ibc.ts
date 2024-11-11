import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-4',
      connection_id: 'connection-1057'
    },
    chain_2: {
      chain_name: 'dungeon',
      client_id: '07-tendermint-4',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1213',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
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
  }, {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dungeon',
      client_id: '07-tendermint-3',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2798'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-85791',
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
  }];
export default info;