import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2703',
      connectionId: 'connection-2240'
    },
    chain2: {
      chainName: 'quasar',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-688',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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