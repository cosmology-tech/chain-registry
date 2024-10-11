import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3714',
      connectionId: 'connection-3238'
    },
    chain2: {
      chainName: 'swisstroniktestnet',
      clientId: '07-tendermint-31',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8295',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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