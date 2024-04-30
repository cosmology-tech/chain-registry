import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3070',
      connectionId: 'connection-2558'
    },
    chain2: {
      chainName: 'pylons',
      clientId: '07-tendermint-32',
      connectionId: 'connection-25'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17683',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }];
export default info;