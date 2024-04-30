import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-175',
      connectionId: 'connection-153'
    },
    chain2: {
      chainName: 'provenance',
      clientId: '07-tendermint-35',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-116',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-30',
      connectionId: 'connection-37'
    },
    chain2: {
      chainName: 'provenance',
      clientId: '07-tendermint-36',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-20',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1899',
      connectionId: 'connection-1472'
    },
    chain2: {
      chainName: 'provenance',
      clientId: '07-tendermint-31',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-222',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }
];
export default info;