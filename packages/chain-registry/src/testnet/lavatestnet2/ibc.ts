import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-823',
      connection_id: 'connection-633'
    },
    chain_2: {
      chain_name: 'lavatestnet2',
      client_id: '07-tendermint-4',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-418',
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
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lavatestnet2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1890',
      connection_id: 'connection-1852'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5286',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  }
];
export default info;
