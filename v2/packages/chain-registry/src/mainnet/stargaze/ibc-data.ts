import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-3',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-222',
      connectionId: 'connection-156'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-121',
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
      chainName: 'aura',
      clientId: '07-tendermint-48',
      connectionId: 'connection-47'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-339',
      connectionId: 'connection-288'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-270',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain1: {
          channelId: 'channel-24',
          portId: 'wasm.aura1y3244guwexyvn6yx6kqkj5s0f56lzfdnuja3culygnuwxgrxyuqsaz4xvv'
        },
        chain2: {
          channelId: 'channel-271',
          portId: 'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
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
      clientId: '07-tendermint-36',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-224',
      connectionId: 'connection-158'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
          dex: 'demex'
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
      chainName: 'composable',
      clientId: '07-tendermint-25',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-279',
      connectionId: 'connection-207'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-184',
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
      clientId: '07-tendermint-1188',
      connectionId: 'connection-918'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-320',
      connectionId: 'connection-256'
    },
    channels: [{
        chain1: {
          channelId: 'channel-730',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-239',
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
      clientId: '07-tendermint-24',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-180',
      connectionId: 'connection-114'
    },
    channels: [{
        chain1: {
          channelId: 'channel-21',
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
      chainName: 'doravota',
      clientId: '07-tendermint-24',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-368',
      connectionId: 'connection-318'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-394',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain1: {
          channelId: 'channel-16',
          portId: 'wasm.dora1q09v79ar0w99av6hlut0nhkstqt6up5mv3gmnut53t7jzxu4plyqt268vu'
        },
        chain2: {
          channelId: 'channel-397',
          portId: 'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
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
      clientId: '07-tendermint-41',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-173',
      connectionId: 'connection-104'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
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
      chainName: 'gateway',
      clientId: '07-tendermint-16',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-354',
      connectionId: 'connection-290'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-278',
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
      clientId: '07-tendermint-44',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-13',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-20',
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
      chainName: 'kujira',
      clientId: '07-tendermint-9',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-178',
      connectionId: 'connection-111'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'lava',
      clientId: '07-tendermint-8',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-366',
      connectionId: 'connection-307'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-391',
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
      chainName: 'mantrachain',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-372',
      connectionId: 'connection-332'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-406',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-118',
      connectionId: 'connection-90'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-352',
      connectionId: 'connection-287'
    },
    channels: [{
        chain1: {
          channelId: 'channel-69',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-269',
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
      clientId: '07-tendermint-31',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-283',
      connectionId: 'connection-211'
    },
    channels: [{
        chain1: {
          channelId: 'channel-18',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-191',
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
      clientId: '07-tendermint-16',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-287',
      connectionId: 'connection-214'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-204',
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
      chainName: 'nois',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-237',
      connectionId: 'connection-171'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-137',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }, {
        chain1: {
          channelId: 'channel-238',
          portId: 'wasm.stars1mw5y55f53mnara7g3pn2pylxl8dpauscyn83c68442hz9nwktzrq8tjzyf'
        },
        chain2: {
          channelId: 'channel-38',
          portId: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1562',
      connectionId: 'connection-1223'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-75',
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
      }, {
        chain1: {
          channelId: 'channel-39535',
          portId: 'wasm.osmo10vzkd8pyme67z38epdr3gf027y03dxq7t8vau5fp3r28vxks7mwse02j8f'
        },
        chain2: {
          channelId: 'channel-309',
          portId: 'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
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
      clientId: '07-tendermint-166',
      connectionId: 'connection-207'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-358',
      connectionId: 'connection-293'
    },
    channels: [{
        chain1: {
          channelId: 'channel-197',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-43',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-177',
      connectionId: 'connection-110'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-48',
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
      chainName: 'stargaze',
      clientId: '07-tendermint-337',
      connectionId: 'connection-275'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-405',
      connectionId: 'connection-408'
    },
    channels: [{
        chain1: {
          channelId: 'channel-266',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-324',
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