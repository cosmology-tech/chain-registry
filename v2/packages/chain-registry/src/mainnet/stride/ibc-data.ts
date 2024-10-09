import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-14',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-70',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-57',
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
      chainName: 'axelar',
      clientId: '07-tendermint-93',
      connectionId: 'connection-78'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-75',
      connectionId: 'connection-60'
    },
    channels: [{
        chain1: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-69',
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
      chainName: 'carbon',
      clientId: '07-tendermint-13',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-40',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-47',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
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
      chainName: 'composable',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-126',
      connectionId: 'connection-116'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-134',
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
      clientId: '07-tendermint-913',
      connectionId: 'connection-635'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-391',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-38',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-44',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
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
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dydx',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-133',
      connectionId: 'connection-123'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-160',
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
      chainName: 'dymension',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-140',
      connectionId: 'connection-131'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-197',
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
      chainName: 'evmos',
      clientId: '07-tendermint-77',
      connectionId: 'connection-33'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-8',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      clientId: '07-tendermint-131',
      connectionId: 'connection-103'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-89',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      clientId: '07-tendermint-263',
      connectionId: 'connection-205'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-31',
      connectionId: 'connection-19'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-139',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain1: {
          channelId: 'channel-202',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-48',
          portId: 'icacontroller-juno-1.DELEGATION'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-143',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'icacontroller-juno-1.FEE'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-142',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-27',
          portId: 'icacontroller-juno-1.WITHDRAWAL'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-140',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-28',
          portId: 'icacontroller-juno-1.REDEMPTION'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'kujira',
      clientId: '07-tendermint-37',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-32',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'neutron',
      clientId: '07-tendermint-18',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-125',
      connectionId: 'connection-113'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-123',
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
      clientId: '07-tendermint-2119',
      connectionId: 'connection-1657'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-326',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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
      chainName: 'persistence',
      clientId: '07-tendermint-83',
      connectionId: 'connection-71'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-54',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-67',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-53',
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
      chainName: 'saga',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-142',
      connectionId: 'connection-142'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-213',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-75',
      connectionId: 'connection-40'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-37',
      connectionId: 'connection-25'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-40',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'sei',
      clientId: '07-tendermint-18',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-130',
      connectionId: 'connection-119'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-149',
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
      chainName: 'sommelier',
      clientId: '07-tendermint-60',
      connectionId: 'connection-75'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-131',
      connectionId: 'connection-122'
    },
    channels: [{
        chain1: {
          channelId: 'channel-71',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-150',
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
      chainName: 'stargaze',
      clientId: '07-tendermint-195',
      connectionId: 'connection-128'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-30',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-106',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
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
      chainName: 'stride',
      clientId: '07-tendermint-51',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-87',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-46',
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
      chainName: 'stride',
      clientId: '07-tendermint-32',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-64',
      connectionId: 'connection-45'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-34',
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