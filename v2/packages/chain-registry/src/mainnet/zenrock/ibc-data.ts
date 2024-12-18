import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'sei',
      clientId: '07-tendermint-135',
      connectionId: 'connection-160'
    },
    chain2: {
      chainName: 'zenrock',
      clientId: '07-tendermint-5',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-78',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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