import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-213',
      connectionId: 'connection-151'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-3319',
      connectionId: 'connection-2807'
    },
    channels: [{
        chain1: {
          channelId: 'channel-135',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1946',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'junotestnet',
      clientId: '07-tendermint-135',
      connectionId: 'connection-151'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-4413',
      connectionId: 'connection-3814'
    },
    channels: [{
        chain1: {
          channelId: 'channel-140',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3316',
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'marstestnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-3419',
      connectionId: 'connection-2887'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2083',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-4504',
      connectionId: 'connection-3905'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3651',
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