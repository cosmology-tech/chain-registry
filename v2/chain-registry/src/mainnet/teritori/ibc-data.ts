import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-962',
      connectionId: 'connection-1710'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-32',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-431',
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
      chainName: 'kujira',
      clientId: '07-tendermint-132',
      connectionId: 'connection-100'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-61',
      connectionId: 'connection-38'
    },
    channels: [{
        chain1: {
          channelId: 'channel-89',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-30',
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
      clientId: '07-tendermint-76',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-97',
      connectionId: 'connection-97'
    },
    channels: [{
        chain1: {
          channelId: 'channel-54',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-62',
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
      clientId: '07-tendermint-2192',
      connectionId: 'connection-1710'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-362',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-192',
      connectionId: 'connection-185'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-99',
      connectionId: 'connection-122'
    },
    channels: [{
        chain1: {
          channelId: 'channel-111',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }]
  }
];
export default info;