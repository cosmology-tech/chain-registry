import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [{
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-468',
      connectionId: 'connection-386'
    },
    chain2: {
      chainName: 'likecoin',
      clientId: '07-tendermint-24',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-217',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'likecoin',
      clientId: '07-tendermint-16',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1507',
      connectionId: 'connection-1173'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-53',
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