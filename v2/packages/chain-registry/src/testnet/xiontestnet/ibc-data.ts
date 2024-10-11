import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-970',
      connectionId: 'connection-752'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-127',
      connectionId: 'connection-64'
    },
    channels: [{
        chain1: {
          channelId: 'channel-521',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-225057',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'injectivetestnet',
      clientId: '07-tendermint-239',
      connectionId: 'connection-220'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-119',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-489',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-487',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-224',
      connectionId: 'connection-176'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-120',
      connectionId: 'connection-56'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-489',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3125',
      connectionId: 'connection-2826'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-121',
      connectionId: 'connection-57'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6668',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-490',
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