import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'int3face',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-151',
      connectionId: 'connection-111'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6455',
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
      chainName: 'int3face',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3258',
      connectionId: 'connection-2746'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-82819',
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