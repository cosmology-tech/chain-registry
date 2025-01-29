import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-185',
      connectionId: 'connection-163'
    },
    chain2: {
      chainName: 'celestia',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-125',
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
      chainName: 'celestia',
      clientId: '07-tendermint-35',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'composable',
      clientId: '07-tendermint-138',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
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
      chainName: 'celestia',
      clientId: '07-tendermint-82',
      connectionId: 'connection-52'
    },
    chain2: {
      chainName: 'dymension',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-27',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-95',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'elys',
      clientId: '07-tendermint-5',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-79',
      connectionId: 'connection-49'
    },
    chain2: {
      chainName: 'evmos',
      clientId: '07-tendermint-134',
      connectionId: 'connection-80'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-106',
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
      clientId: '07-tendermint-28',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'injective',
      clientId: '07-tendermint-226',
      connectionId: 'connection-210'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-152',
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
      clientId: '07-tendermint-49',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'kava',
      clientId: '07-tendermint-158',
      connectionId: 'connection-198'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-140',
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
      clientId: '07-tendermint-94',
      connectionId: 'connection-64'
    },
    chain2: {
      chainName: 'milkyway',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-49',
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
      chainName: 'celestia',
      clientId: '07-tendermint-29',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-48',
      connectionId: 'connection-36'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-35',
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
      clientId: '07-tendermint-10',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3012',
      connectionId: 'connection-2503'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6994',
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
      clientId: '07-tendermint-88',
      connectionId: 'connection-57'
    },
    chain2: {
      chainName: 'pryzm',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
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
      chainName: 'celestia',
      clientId: '07-tendermint-52',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-174',
      connectionId: 'connection-131'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
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
      chainName: 'celestia',
      clientId: '07-tendermint-86',
      connectionId: 'connection-56'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-359',
      connectionId: 'connection-296'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-291',
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
      clientId: '07-tendermint-0',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-137',
      connectionId: 'connection-125'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-162',
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
      clientId: '07-tendermint-53',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-391',
      connectionId: 'connection-381'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-300',
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
      clientId: '07-tendermint-58',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-245',
      connectionId: 'connection-209'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-119',
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