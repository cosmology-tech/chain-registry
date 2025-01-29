import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-228',
      connectionId: 'connection-190'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-97',
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
      clientId: '07-tendermint-64',
      connectionId: 'connection-43'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-63',
      connectionId: 'connection-44'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-33',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-611',
      connectionId: 'connection-473'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-288',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'crescent',
      clientId: '07-tendermint-56',
      connectionId: 'connection-53'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-170',
      connectionId: 'connection-110'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
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
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dydx',
      clientId: '07-tendermint-8',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-244',
      connectionId: 'connection-208'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-118',
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
      clientId: '07-tendermint-229',
      connectionId: 'connection-217'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-243',
      connectionId: 'connection-206'
    },
    channels: [{
        chain1: {
          channelId: 'channel-159',
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
      chainName: 'kava',
      clientId: '07-tendermint-124',
      connectionId: 'connection-160'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-229',
      connectionId: 'connection-191'
    },
    channels: [{
        chain1: {
          channelId: 'channel-119',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-98',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-104',
      connectionId: 'connection-83'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-234',
      connectionId: 'connection-195'
    },
    channels: [{
        chain1: {
          channelId: 'channel-56',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-104',
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
      clientId: '07-tendermint-73',
      connectionId: 'connection-74'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-248',
      connectionId: 'connection-210'
    },
    channels: [{
        chain1: {
          channelId: 'channel-51',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-120',
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
      clientId: '07-tendermint-1805',
      connectionId: 'connection-1410'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-6',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-184',
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
      chainName: 'persistence',
      clientId: '07-tendermint-105',
      connectionId: 'connection-144'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-179',
      connectionId: 'connection-119'
    },
    channels: [{
        chain1: {
          channelId: 'channel-81',
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
      chainName: 'regen',
      clientId: '07-tendermint-176',
      connectionId: 'connection-148'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-239',
      connectionId: 'connection-200'
    },
    channels: [{
        chain1: {
          channelId: 'channel-158',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-107',
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
      clientId: '07-tendermint-193',
      connectionId: 'connection-188'
    },
    chain2: {
      chainName: 'umee',
      clientId: '07-tendermint-249',
      connectionId: 'connection-213'
    },
    channels: [{
        chain1: {
          channelId: 'channel-126',
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
          preferred: true,
          properties: 'privacy'
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