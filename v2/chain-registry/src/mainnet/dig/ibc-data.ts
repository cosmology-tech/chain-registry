import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dig',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-100',
      connectionId: 'connection-62'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-37',
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
      chainName: 'dig',
      clientId: '07-tendermint-13',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1714',
      connectionId: 'connection-1304'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-128',
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