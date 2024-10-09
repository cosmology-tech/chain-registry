import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshubtestnet',
      clientId: '7-tendermint-3407',
      connectionId: 'connection-3519'
    },
    chain2: {
      chainName: 'kujiratestnet',
      clientId: '07-tendermint-72',
      connectionId: 'connection-47'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4004',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-51',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'kujiratestnet',
      clientId: '07-tendermint-73',
      connectionId: 'connection-48'
    },
    chain2: {
      chainName: 'terra2testnet',
      clientId: '7-tendermint-568',
      connectionId: 'connection-508'
    },
    channels: [{
        chain1: {
          channelId: 'channel-73',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-541',
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