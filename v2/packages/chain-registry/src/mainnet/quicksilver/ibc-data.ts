import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'archway',
      clientId: '07-tendermint-36',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-83',
      connectionId: 'connection-58'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-116',
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
      chainName: 'celestia',
      clientId: '07-tendermint-92',
      connectionId: 'connection-60'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-97',
      connectionId: 'connection-65'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-207',
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
      chainName: 'composable',
      clientId: '07-tendermint-31',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-78',
      connectionId: 'connection-53'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-94',
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
      clientId: '07-tendermint-1018',
      connectionId: 'connection-709'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-467',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'dydx',
      clientId: '07-tendermint-20',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-90',
      connectionId: 'connection-62'
    },
    channels: [{
        chain1: {
          channelId: 'channel-32',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-164',
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
      chainName: 'injective',
      clientId: '07-tendermint-282',
      connectionId: 'connection-286'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-105',
      connectionId: 'connection-68'
    },
    channels: [{
        chain1: {
          channelId: 'channel-394',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-234',
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
      chainName: 'juno',
      clientId: '07-tendermint-318',
      connectionId: 'connection-309'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-215',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-22',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-2400',
      connectionId: 'connection-1889'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-6',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-522',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'persistence',
      clientId: '07-tendermint-96',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-15',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-73',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-16',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-16',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'regen',
      clientId: '07-tendermint-113',
      connectionId: 'connection-102'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-91',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'saga',
      clientId: '07-tendermint-8',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-170',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-28',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-138',
      connectionId: 'connection-99'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-79',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'sommelier',
      clientId: '07-tendermint-57',
      connectionId: 'connection-59'
    },
    channels: [{
        chain1: {
          channelId: 'channel-101',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-59',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-225',
      connectionId: 'connection-159'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-124',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-108',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-430',
      connectionId: 'connection-442'
    },
    channels: [{
        chain1: {
          channelId: 'channel-244',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-604',
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-27',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-183',
      connectionId: 'connection-122'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-102',
      connectionId: 'connection-67'
    },
    chain2: {
      chainName: 'xion',
      clientId: '07-tendermint-6',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-229',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
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