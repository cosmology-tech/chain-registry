import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4301',
      connectionId: 'connection-3765'
    },
    chain2: {
      chainName: 'titannettestnet',
      clientId: '07-tendermint-7',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9941',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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