import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'planq',
      client_id: '07-tendermint-545',
      connection_id: 'connection-477'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-21',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-59',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
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
      chain_name: 'planq',
      client_id: '07-tendermint-558',
      connection_id: 'connection-483'
    },
    chain_2: {
      chain_name: 'source',
      client_id: '07-tendermint-10',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-61',
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
      }
    ]
  }
];
export default info;
