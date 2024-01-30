import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1115',
      connection_id: 'connection-788'
    },
    chain_2: {
      chain_name: 'uptick',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-535',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-93',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'uptick',
      client_id: '07-tendermint-8',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  }
];
export default info;
