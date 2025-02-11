import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-141',
      connectionId: 'connection-136'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-7',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-123',
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
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3425',
      connectionId: 'connection-10585'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-5',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-98081',
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
          preferred: true
        }
      }]
  }];
export default info;