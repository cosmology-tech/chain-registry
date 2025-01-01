import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'aaronetwork',
      clientId: '07-tendermint-10',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3390',
      connectionId: 'connection-2844'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-91942',
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