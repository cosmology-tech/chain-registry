import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bandchain',
      clientId: '07-tendermint-124',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'comdex',
      clientId: '07-tendermint-81',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-96',
          portId: 'oracle'
        },
        chain2: {
          channelId: 'channel-43',
          portId: 'bandoracleV1'
        },
        ordering: 'unordered',
        version: 'bandchain-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'comdex',
      clientId: '07-tendermint-108',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'crescent',
      clientId: '07-tendermint-32',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'comdex',
      clientId: '07-tendermint-30',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-92',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-18',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-36',
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
      chainName: 'comdex',
      clientId: '07-tendermint-52',
      connectionId: 'connection-34'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-20',
      connectionId: 'connection-15'
    },
    channels: [{
        chain1: {
          channelId: 'channel-31',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-18',
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
      chainName: 'comdex',
      clientId: '07-tendermint-139',
      connectionId: 'connection-71'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-25',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      chainName: 'comdex',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1587',
      connectionId: 'connection-1243'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
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
      chainName: 'comdex',
      clientId: '07-tendermint-123',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-94',
      connectionId: 'connection-75'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-71',
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
      chainName: 'comdex',
      clientId: '07-tendermint-142',
      connectionId: 'connection-74'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-125',
      connectionId: 'connection-95'
    },
    channels: [{
        chain1: {
          channelId: 'channel-65',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'comdex',
      clientId: '07-tendermint-83',
      connectionId: 'connection-50'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-41',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-45',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-49',
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
      chainName: 'comdex',
      clientId: '07-tendermint-117',
      connectionId: 'connection-56'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-70',
      connectionId: 'connection-59'
    },
    channels: [{
        chain1: {
          channelId: 'channel-51',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-39',
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