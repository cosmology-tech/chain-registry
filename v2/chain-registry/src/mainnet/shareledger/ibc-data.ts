import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2680',
      connectionId: 'connection-2182'
    },
    chain2: {
      chainName: 'shareledger',
      clientId: '07-tendermint-1',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-647',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }];
export default info;