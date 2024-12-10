import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dhealth',
      clientId: '07-tendermint-4',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3357',
      connectionId: 'connection-2662'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-75030',
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