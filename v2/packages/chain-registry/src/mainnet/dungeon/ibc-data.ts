import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1325',
      connectionId: 'connection-1057'
    },
    chain2: {
      chainName: 'dungeon',
      clientId: '07-tendermint-4',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1213',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-10',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-139',
      connectionId: 'connection-109'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-142',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-8',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-146',
      connectionId: 'connection-106'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5481',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-3',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3325',
      connectionId: 'connection-2798'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-85791',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-9',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-148',
      connectionId: 'connection-149'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-287',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-11',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-424',
      connectionId: 'connection-438'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-582',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;