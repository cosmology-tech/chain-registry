import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'marstestnet',
      clientId: '07-tendermint-33',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1933',
      connectionId: 'connection-1890'
    },
    channels: [{
        chain1: {
          channelId: 'channel-28',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5499',
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
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'marstestnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-3419',
      connectionId: 'connection-2887'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2083',
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