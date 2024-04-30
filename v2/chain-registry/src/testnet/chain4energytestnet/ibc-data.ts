import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'chain4energytestnet',
      clientId: '07-tendermint-18',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3393',
      connectionId: 'connection-2989'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7735',
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