import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3070',
      connection_id: 'connection-2558'
    },
    chain_2: {
      chain_name: 'pylons',
      client_id: '07-tendermint-32',
      connection_id: 'connection-25'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17683',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  }
];
export default info;
