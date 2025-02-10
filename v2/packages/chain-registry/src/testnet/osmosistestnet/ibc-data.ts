import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'akashtestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1271',
      connectionId: 'connection-1171'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4171',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-121',
      connectionId: 'connection-120'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3459',
      connectionId: 'connection-3027'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-225',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7779',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      },
      {
        chain1: {
          channelId: '*',
          portId: 'wasm.*'
        },
        chain2: {
          channelId: '*',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live'
        }
      },
      {
        chain1: {
          channelId: '*',
          portId: 'wasm.*'
        },
        chain2: {
          channelId: '*',
          portId: 'icqhost'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-685',
      connectionId: 'connection-538'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1270',
      connectionId: 'connection-1169'
    },
    channels: [{
        chain1: {
          channelId: 'channel-339',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4170',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'celestiatestnet3',
      clientId: '07-tendermint-118',
      connectionId: 'connection-98'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1445',
      connectionId: 'connection-1350'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4370',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'chain4energytestnet',
      clientId: '07-tendermint-18',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3393',
      connectionId: 'connection-2989'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7735',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'composabletestnet',
      clientId: '07-tendermint-23',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-273',
      connectionId: 'connection-237'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-329',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'coreumtestnet',
      clientId: '07-tendermint-104',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3529',
      connectionId: 'connection-3094'
    },
    channels: [{
        chain1: {
          channelId: 'channel-47',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7894',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshubtestnet',
      clientId: '07-tendermint-2528',
      connectionId: 'connection-2886'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1262',
      connectionId: 'connection-1157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3306',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4156',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'doravotatestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-611'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1260',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'empowertestnet',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-146',
      connectionId: 'connection-157'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-155',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'entrypointtestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-930',
      connectionId: 'connection-840'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1543',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthubtestnet',
      clientId: '07-tendermint-53',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1010',
      connectionId: 'connection-911'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1637',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'injectivetestnet',
      clientId: '07-tendermint-189',
      connectionId: 'connection-180'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1273',
      connectionId: 'connection-1173'
    },
    channels: [{
        chain1: {
          channelId: 'channel-129',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4174',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'junotestnet',
      clientId: '07-tendermint-743',
      connectionId: 'connection-827'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1932',
      connectionId: 'connection-1889'
    },
    channels: [{
        chain1: {
          channelId: 'channel-889',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5498',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'kimanetworktestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4135',
      connectionId: 'connection-3592'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9247',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'kyvetestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-11',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'lavatestnet',
      clientId: '07-tendermint-11',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-2554',
      connectionId: 'connection-2401'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6092',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'likecointestnet',
      clientId: '07-tendermint-5',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1431',
      connectionId: 'connection-1336'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4357',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4314',
      connectionId: 'connection-3774'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10016',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'mantrachaintestnet',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3930',
      connectionId: 'connection-3411'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8734',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'marstestnet',
      clientId: '07-tendermint-33',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1933',
      connectionId: 'connection-1890'
    },
    channels: [{
        chain1: {
          channelId: 'channel-28',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5499',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-133',
      connectionId: 'connection-123'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1272',
      connectionId: 'connection-1172'
    },
    channels: [{
        chain1: {
          channelId: 'channel-196',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4172',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-42',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1374',
      connectionId: 'connection-1275'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4280',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nolustestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3711',
      connectionId: 'connection-3235'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8272',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nolustestnet1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-102',
      connectionId: 'connection-120'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-110',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-595',
      connectionId: 'connection-529'
    },
    chain2: {
      chainName: 'persistencetestnet2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1037',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-19',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'quicksilvertestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1448',
      connectionId: 'connection-1552'
    },
    chain2: {
      chainName: 'sagatestnet',
      clientId: '07-tendermint-26',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4946',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-965',
      connectionId: 'connection-865'
    },
    chain2: {
      chainName: 'sgetestnet',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1568',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1274',
      connectionId: 'connection-1175'
    },
    chain2: {
      chainName: 'stargazetestnet',
      clientId: '07-tendermint-621',
      connectionId: 'connection-633'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4175',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-638',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3714',
      connectionId: 'connection-3238'
    },
    chain2: {
      chainName: 'swisstroniktestnet',
      clientId: '07-tendermint-31',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8295',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4155',
      connectionId: 'connection-3614'
    },
    chain2: {
      chainName: 'symphonytestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9540',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3946',
      connectionId: 'connection-3419'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8743',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4093',
      connectionId: 'connection-3540'
    },
    chain2: {
      chainName: 'synternettestnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9152',
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
          preferred: false,
          dex: 'osmosis'
        }
      }, {
        chain1: {
          channelId: 'channel-85186',
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
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-4301',
      connectionId: 'connection-3765'
    },
    chain2: {
      chainName: 'titannettestnet',
      clientId: '07-tendermint-7',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9941',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-2436',
      connectionId: 'connection-2267'
    },
    chain2: {
      chainName: 'titantestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5969',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'killed',
          preferred: true
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3125',
      connectionId: 'connection-2826'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-121',
      connectionId: 'connection-57'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6668',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-490',
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