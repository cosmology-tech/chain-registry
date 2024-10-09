import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akashtestnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-45',
      connectionId: 'connection-39'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-70',
      connectionId: 'connection-60'
    },
    chain2: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-603',
      connectionId: 'connection-418'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-305',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-77',
      connectionId: 'connection-73'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1195',
      connectionId: 'connection-1101'
    },
    channels: [{
        chain1: {
          channelId: 'channel-58',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3938',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }
];
export default info;