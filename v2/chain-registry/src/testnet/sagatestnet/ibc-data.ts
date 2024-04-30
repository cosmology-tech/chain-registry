import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-767',
      connectionId: 'connection-581'
    },
    chain2: {
      chainName: 'sagatestnet',
      clientId: '07-tendermint-11',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-370',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1448',
      connectionId: 'connection-1552'
    },
    chain2: {
      chainName: 'sagatestnet',
      clientId: '07-tendermint-26',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4946',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
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