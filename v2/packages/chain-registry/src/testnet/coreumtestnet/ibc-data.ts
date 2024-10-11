import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'coreumtestnet',
      clientId: '07-tendermint-104',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3529',
      connectionId: 'connection-3094'
    },
    channels: [{
        chain1: {
          channelId: 'channel-47',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7894',
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