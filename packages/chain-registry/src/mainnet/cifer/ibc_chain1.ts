import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cifer',
      client_id: '07-tendermint-6',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1267',
      connection_id: 'connection-1012'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-822',
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
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cifer',
      client_id: '07-tendermint-9',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3141',
      connection_id: 'connection-2608'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-35741',
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
  }
];
export default info;
