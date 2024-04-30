import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      clientId: '07-tendermint-197',
      connectionId: 'connection-182'
    },
    chain2: {
      chainName: 'xpla',
      clientId: '07-tendermint-6',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-137',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      clientId: '07-tendermint-2875',
      connectionId: 'connection-2389'
    },
    chain2: {
      chainName: 'xpla',
      clientId: '07-tendermint-11',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1634',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }];
export default info;