import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'akash',
      clientId: '07-tendermint-102',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-47',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-43',
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
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'andromeda',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-176',
      connectionId: 'connection-133'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-97',
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
      clientId: '07-tendermint-24',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-169',
      connectionId: 'connection-119'
    },
    channels: [{
        chain1: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-84',
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
      clientId: '07-tendermint-40',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-44',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-69',
          portId: 'transfer',
          clientId: '07-tendermint-103',
          connectionId: 'connection-89'
        },
        chain2: {
          channelId: 'channel-61',
          portId: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
          clientId: '07-tendermint-120',
          connectionId: 'connection-93'
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
      chainName: 'cheqd',
      clientId: '07-tendermint-85',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-196',
      connectionId: 'connection-191'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-141',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        feeVersion: 'ics29-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'chihuahua',
      clientId: '07-tendermint-70',
      connectionId: 'connection-38'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-27',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
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
          preferred: true,
          properties: 'privacy'
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
      chainName: 'composable',
      clientId: '07-tendermint-52',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-166',
      connectionId: 'connection-116'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-80',
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
          channelId: 'channel-26',
          portId: 'transfer',
          clientId: '07-tendermint-52',
          connectionId: 'connection-21'
        },
        chain2: {
          channelId: 'channel-83',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          clientId: '07-tendermint-166',
          connectionId: 'connection-116'
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
      chainName: 'coreum',
      clientId: '07-tendermint-40',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-186',
      connectionId: 'connection-138'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-101',
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
      clientId: '07-tendermint-492',
      connectionId: 'connection-401'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-235',
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
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-18',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-53',
      connectionId: 'connection-31'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
          preferred: true,
          dex: 'crescent',
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'dymension',
      clientId: '07-tendermint-29',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-194',
      connectionId: 'connection-189'
    },
    channels: [{
        chain1: {
          channelId: 'channel-35',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-130',
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
      clientId: '07-tendermint-50',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-42',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'gravitybridge',
      clientId: '07-tendermint-140',
      connectionId: 'connection-139'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-40',
      connectionId: 'connection-23'
    },
    channels: [{
        chain1: {
          channelId: 'channel-79',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-17',
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
          channelId: 'channel-150',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-148',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      chainName: 'injective',
      clientId: '07-tendermint-126',
      connectionId: 'connection-101'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-49',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-88',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
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
      chainName: 'jackal',
      clientId: '07-tendermint-6',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-124',
      connectionId: 'connection-94'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-108',
      connectionId: 'connection-68'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-23',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-48',
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
      }, {
        chain1: {
          channelId: 'channel-163',
          portId: 'transfer',
          clientId: '07-tendermint-108',
          connectionId: 'connection-68'
        },
        chain2: {
          channelId: 'channel-45',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          clientId: '07-tendermint-23',
          connectionId: 'connection-9'
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
      chainName: 'kujira',
      clientId: '07-tendermint-12',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-48',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
          preferred: true,
          dex: 'osmosis'
        }
      }, {
        chain1: {
          channelId: 'channel-44',
          portId: 'transfer',
          clientId: '07-tendermint-12',
          connectionId: 'connection-7'
        },
        chain2: {
          channelId: 'channel-46',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          clientId: '07-tendermint-48',
          connectionId: 'connection-29'
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
      chainName: 'migaloo',
      clientId: '07-tendermint-6',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-116',
      connectionId: 'connection-87'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
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
      }, {
        chain1: {
          channelId: 'channel-103',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-129',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      chainName: 'neutron',
      clientId: '07-tendermint-85',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-199',
      connectionId: 'connection-192'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1551',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-144',
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
          channelId: 'channel-1950',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-151',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      clientId: '07-tendermint-24',
      connectionId: 'connection-33'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-170',
      connectionId: 'connection-127'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-88',
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
      chainName: 'nolus',
      clientId: '07-tendermint-18',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-201',
      connectionId: 'connection-193'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13995',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-146',
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
      chainName: 'nyx',
      clientId: '07-tendermint-19',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-213',
      connectionId: 'connection-203'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-174',
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
      chainName: 'oraichain',
      clientId: '07-tendermint-178',
      connectionId: 'connection-142'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-195',
      connectionId: 'connection-190'
    },
    channels: [{
        chain1: {
          channelId: 'channel-135',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-217',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-140',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-222',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      chainName: 'osmosis',
      clientId: '07-tendermint-1588',
      connectionId: 'connection-1244'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-88',
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
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-476',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-44',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      clientId: '07-tendermint-106',
      connectionId: 'connection-146'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-126',
      connectionId: 'connection-98'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }, {
        chain1: {
          channelId: 'channel-159',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-132',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      chainName: 'saga',
      clientId: '07-tendermint-7',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-202',
      connectionId: 'connection-194'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-14',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-96',
      connectionId: 'connection-75'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
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
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-37',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'sifchain',
      clientId: '07-tendermint-171',
      connectionId: 'connection-98'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
          preferred: true,
          properties: 'privacy'
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-28',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-16',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-38',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-4',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
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
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-127',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-382',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
  }
];
export default info;