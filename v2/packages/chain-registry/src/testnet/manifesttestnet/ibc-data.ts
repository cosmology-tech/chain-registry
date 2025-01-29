import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1083',
      connectionId: 'connection-843'
    },
    chain2: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-7',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-590',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }, {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4314',
      connectionId: 'connection-3774'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10016',
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