import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      clientId: '07-tendermint-73',
      connectionId: 'connection-67'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-47',
      connectionId: 'connection-40'
    },
    channels: [{
        chain1: {
          channelId: 'channel-58',
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
      chainName: 'akash',
      clientId: '07-tendermint-119',
      connectionId: 'connection-93'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-42',
      connectionId: 'connection-35'
    },
    channels: [{
        chain1: {
          channelId: 'channel-61',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-25',
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
      chainName: 'archway',
      clientId: '07-tendermint-39',
      connectionId: 'connection-42'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-49',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-32',
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
      chainName: 'axelar',
      clientId: '07-tendermint-122',
      connectionId: 'connection-109'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-44',
      connectionId: 'connection-37'
    },
    channels: [{
        chain1: {
          channelId: 'channel-77',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-27',
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
      chainName: 'beezee',
      clientId: '07-tendermint-11',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-75',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-656',
      connectionId: 'connection-501'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-23',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-306',
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
      chainName: 'kujira',
      clientId: '07-tendermint-108',
      connectionId: 'connection-78'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-43',
      connectionId: 'connection-36'
    },
    channels: [{
        chain1: {
          channelId: 'channel-70',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-68',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-51',
      connectionId: 'connection-49'
    },
    channels: [{
        chain1: {
          channelId: 'channel-44',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-38',
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
      chainName: 'omniflixhub',
      clientId: '07-tendermint-8',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1829',
      connectionId: 'connection-1431'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-199',
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
      chainName: 'omniflixhub',
      clientId: '07-tendermint-76',
      connectionId: 'connection-57'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-101',
      connectionId: 'connection-66'
    },
    channels: [{
        chain1: {
          channelId: 'channel-51',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-228',
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
      chainName: 'omniflixhub',
      clientId: '07-tendermint-74',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-370',
      connectionId: 'connection-328'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-398',
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