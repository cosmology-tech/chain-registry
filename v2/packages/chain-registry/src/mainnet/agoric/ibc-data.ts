import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      clientId: '07-tendermint-75',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'archway',
      clientId: '07-tendermint-23',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-60',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
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
      chainName: 'agoric',
      clientId: '07-tendermint-11',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'axelar',
      clientId: '07-tendermint-69',
      connectionId: 'connection-51'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
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
      chainName: 'agoric',
      clientId: '07-tendermint-70',
      connectionId: 'connection-64'
    },
    chain2: {
      chainName: 'composable',
      clientId: '07-tendermint-51',
      connectionId: 'connection-20'
    },
    channels: [{
        chain1: {
          channelId: 'channel-55',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
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
      chainName: 'agoric',
      clientId: '07-tendermint-6',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-927',
      connectionId: 'connection-649'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-405',
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
      chainName: 'agoric',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'crescent',
      clientId: '07-tendermint-19',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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
      chainName: 'agoric',
      clientId: '07-tendermint-72',
      connectionId: 'connection-66'
    },
    chain2: {
      chainName: 'evmos',
      clientId: '07-tendermint-116',
      connectionId: 'connection-70'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-85',
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
      chainName: 'agoric',
      clientId: '07-tendermint-4',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'gravitybridge',
      clientId: '07-tendermint-173',
      connectionId: 'connection-154'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-91',
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
      chainName: 'agoric',
      clientId: '07-tendermint-78',
      connectionId: 'connection-73'
    },
    chain2: {
      chainName: 'kava',
      clientId: '07-tendermint-147',
      connectionId: 'connection-182'
    },
    channels: [{
        chain1: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-133',
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
      chainName: 'agoric',
      clientId: '07-tendermint-20',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-94',
      connectionId: 'connection-64'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-61',
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
      chainName: 'agoric',
      clientId: '07-tendermint-101',
      connectionId: 'connection-99'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-148',
      connectionId: 'connection-108'
    },
    channels: [{
        chain1: {
          channelId: 'channel-146',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5789',
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
      chainName: 'agoric',
      clientId: '07-tendermint-77',
      connectionId: 'connection-72'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-32',
      connectionId: 'connection-40'
    },
    channels: [{
        chain1: {
          channelId: 'channel-62',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-21',
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
      chainName: 'agoric',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2109',
      connectionId: 'connection-1649'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-320',
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
      chainName: 'agoric',
      clientId: '07-tendermint-93',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-167',
      connectionId: 'connection-210'
    },
    channels: [{
        chain1: {
          channelId: 'channel-72',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-202',
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
      chainName: 'agoric',
      clientId: '07-tendermint-85',
      connectionId: 'connection-85'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-84',
      connectionId: 'connection-60'
    },
    channels: [{
        chain1: {
          channelId: 'channel-68',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-125',
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
      chainName: 'agoric',
      clientId: '07-tendermint-17',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-111',
      connectionId: 'connection-80'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-51',
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
      chainName: 'agoric',
      clientId: '07-tendermint-74',
      connectionId: 'connection-68'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-129',
      connectionId: 'connection-118'
    },
    channels: [{
        chain1: {
          channelId: 'channel-59',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-148',
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
      chainName: 'agoric',
      clientId: '07-tendermint-18',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-152',
      connectionId: 'connection-101'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-42',
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