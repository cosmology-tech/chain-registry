import { IBCInfo } from '@chain-registry/types';
const ibc: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: '8ball',
      client_id: '07-tendermint-2',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2668',
      connection_id: 'connection-2163'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-641',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-78',
      connection_id: 'connection-65'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1002',
      connection_id: 'connection-701'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-457',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-18',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-97',
      connection_id: 'connection-55'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-201',
      connection_id: 'connection-175'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-106',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-61',
      connection_id: 'connection-41'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-12',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'oraichain',
      client_id: '07-tendermint-74',
      connection_id: 'connection-42'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2316',
      connection_id: 'connection-1814'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-490',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-3',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-222',
      connection_id: 'connection-156'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-121',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-14',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-70',
      connection_id: 'connection-48'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-13',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-172',
      connection_id: 'connection-99'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'acrechain',
      client_id: '07-tendermint-11',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-101',
      connection_id: 'connection-89'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-77',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-75',
      connection_id: 'connection-69'
    },
    chain_2: {
      chain_name: 'archway',
      client_id: '07-tendermint-23',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-11',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-69',
      connection_id: 'connection-51'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-70',
      connection_id: 'connection-64'
    },
    chain_2: {
      chain_name: 'composable',
      client_id: '07-tendermint-51',
      connection_id: 'connection-20'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-55',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-6',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-927',
      connection_id: 'connection-649'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-405',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-72',
      connection_id: 'connection-66'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-116',
      connection_id: 'connection-70'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-85',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-4',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-173',
      connection_id: 'connection-154'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-91',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-20',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-94',
      connection_id: 'connection-64'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-61',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-77',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-32',
      connection_id: 'connection-40'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2109',
      connection_id: 'connection-1649'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-320',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-17',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-111',
      connection_id: 'connection-80'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      client_id: '07-tendermint-74',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-129',
      connection_id: 'connection-118'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-59',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-148',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aioz',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1121',
      connection_id: 'connection-808'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-567',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aioz',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2785',
      connection_id: 'connection-2285'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-779',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-166',
      connection_id: 'connection-146'
    },
    chain_2: {
      chain_name: 'archway',
      client_id: '07-tendermint-26',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-109',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-53',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-385',
      connection_id: 'connection-339'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-184',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-132',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-80',
      connection_id: 'connection-71'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-70',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-48',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-65',
      connection_id: 'connection-38'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-183',
      connection_id: 'connection-171'
    },
    chain_2: {
      chain_name: 'doravota',
      client_id: '07-tendermint-17',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-125',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-44',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-16'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-84',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-80',
      connection_id: 'connection-47'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-35',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-126',
      connection_id: 'connection-103'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-103',
      connection_id: 'connection-72'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-18',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-0',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-15',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-5',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-47',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-20',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-102',
      connection_id: 'connection-69'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-47',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-43',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-45',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-42',
      connection_id: 'connection-27'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-11',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-59',
      connection_id: 'connection-35'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-29',
      connection_id: 'connection-18'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      client_id: '07-tendermint-173',
      connection_id: 'connection-159'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-387',
      connection_id: 'connection-364'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-273',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'andromeda',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'archway',
      client_id: '07-tendermint-58',
      connection_id: 'connection-68'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'andromeda',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-164',
      connection_id: 'connection-127'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-123',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'andromeda',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-176',
      connection_id: 'connection-133'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'andromeda',
      client_id: '07-tendermint-15',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-409',
      connection_id: 'connection-413'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-351',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-16',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-160',
      connection_id: 'connection-145'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-111',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-37',
      connection_id: 'connection-40'
    },
    chain_2: {
      chain_name: 'bitcanna',
      client_id: '07-tendermint-83',
      connection_id: 'connection-74'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-35',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1152',
      connection_id: 'connection-873'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-623',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-38',
      connection_id: 'connection-41'
    },
    chain_2: {
      chain_name: 'decentr',
      client_id: '07-tendermint-21',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-40',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-424',
      connection_id: 'connection-406'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-145',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-17',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'jackal',
      client_id: '07-tendermint-61',
      connection_id: 'connection-50'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ],
    operators: [
      {
        chain_1: {
          address: 'archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj'
        },
        chain_2: {
          address: 'jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8'
        },
        memo: 'by AM Solutions | https://www.theamsolutions.info',
        name: 'AM Solutions',
        discord_handle: 'AlexeyM#5409'
      },
      {
        chain_1: {
          address: 'archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm'
        },
        chain_2: {
          address: 'jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n'
        },
        memo: 'Relayed by NodeStake',
        name: 'NodeStake',
        discord_handle: 'nodestake'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-12',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-144',
      connection_id: 'connection-110'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-99',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-51',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-62',
      connection_id: 'connection-43'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-61',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-28',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-17',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-22',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-15',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id:
            'wasm.archway10f3aasgsnpv84ymjyld50jayc4ecu267sdpjamauwm8nvxlzex9qj4dkwr'
        },
        chain_2: {
          channel_id: 'channel-22',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-39',
      connection_id: 'connection-42'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-49',
      connection_id: 'connection-43'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-32',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2850',
      connection_id: 'connection-2362'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1429',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-36',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-83',
      connection_id: 'connection-58'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-55',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'qwoyn',
      client_id: '07-tendermint-8',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-88',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'astrovault'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-24',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-169',
      connection_id: 'connection-119'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-84',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-42',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-384',
      connection_id: 'connection-360'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-265',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-228',
      connection_id: 'connection-190'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-97',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'arkh',
      client_id: '07-tendermint-34',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2697',
      connection_id: 'connection-2235'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-648',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      client_id: '07-tendermint-22',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-167',
      connection_id: 'connection-113'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      client_id: '07-tendermint-50',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-104',
      connection_id: 'connection-73'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      client_id: '07-tendermint-42',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-92',
      connection_id: 'connection-35'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'assetmantle',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1923',
      connection_id: 'connection-1498'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-232',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-17',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-152',
      connection_id: 'connection-137'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-104',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-24',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1158',
      connection_id: 'connection-880'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-646',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-26',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-133',
      connection_id: 'connection-168'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-43',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-66',
      connection_id: 'connection-63'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-13',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id:
            'wasm.aura1r3zgdsn3dcze07a4r60rxxx7ppvkxfshn9np0pwtkgarrld0786s72jtjt'
        },
        chain_2: {
          channel_id: 'channel-35',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-47',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3054',
      connection_id: 'connection-2551'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11304',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-48',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-339',
      connection_id: 'connection-288'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-270',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-24',
          port_id:
            'wasm.aura1y3244guwexyvn6yx6kqkj5s0f56lzfdnuja3culygnuwxgrxyuqsaz4xvv'
        },
        chain_2: {
          channel_id: 'channel-271',
          port_id:
            'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-185',
      connection_id: 'connection-163'
    },
    chain_2: {
      chain_name: 'celestia',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-125',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-187',
      connection_id: 'connection-165'
    },
    chain_2: {
      chain_name: 'composable',
      client_id: '07-tendermint-140',
      connection_id: 'connection-58'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-127',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-179',
      connection_id: 'connection-157'
    },
    chain_2: {
      chain_name: 'coreum',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-120',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-622',
      connection_id: 'connection-481'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-293',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-31',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-158',
      connection_id: 'connection-142'
    },
    chain_2: {
      chain_name: 'empowerchain',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-109',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-50',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-69',
      connection_id: 'connection-27'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-188',
      connection_id: 'connection-166'
    },
    chain_2: {
      chain_name: 'fxcore',
      client_id: '07-tendermint-24',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-128',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-162',
      connection_id: 'connection-148'
    },
    chain_2: {
      chain_name: 'haqq',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-168',
      connection_id: 'connection-150'
    },
    chain_2: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-54',
      connection_id: 'connection-40'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-114',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-37',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-113',
      connection_id: 'connection-93'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-84',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-69',
      connection_id: 'connection-178'
    },
    chain_2: {
      chain_name: 'jackal',
      client_id: '07-tendermint-69',
      connection_id: 'connection-57'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-25',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-150',
      connection_id: 'connection-97'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-71',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-42',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-11',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-118',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'kyve',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-180',
      connection_id: 'connection-158'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-101',
      connection_id: 'connection-80'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-121',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-123',
      connection_id: 'connection-110'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-78',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-150',
      connection_id: 'connection-135'
    },
    chain_2: {
      chain_name: 'odin',
      client_id: '07-tendermint-66',
      connection_id: 'connection-151'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-102',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-23',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1862',
      connection_id: 'connection-1453'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-208',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-40',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-44',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer',
          client_id: '07-tendermint-103',
          connection_id: 'connection-89'
        },
        chain_2: {
          channel_id: 'channel-61',
          port_id: 'wasm.secret1yxjmepvyl2c25vnt53cr2dpn8amknwausxee83',
          client_id: '07-tendermint-120',
          connection_id: 'connection-93'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-151',
      connection_id: 'connection-136'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-8',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-103',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-109',
      connection_id: 'connection-96'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-13',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics-20',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-93',
      connection_id: 'connection-78'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-75',
      connection_id: 'connection-60'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-39',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-7',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-64',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-63',
      connection_id: 'connection-44'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bandchain',
      client_id: '07-tendermint-124',
      connection_id: 'connection-107'
    },
    chain_2: {
      chain_name: 'comdex',
      client_id: '07-tendermint-81',
      connection_id: 'connection-48'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-96',
          port_id: 'oracle'
        },
        chain_2: {
          channel_id: 'channel-43',
          port_id: 'bandoracleV1'
        },
        ordering: 'unordered',
        version: 'bandchain-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bandchain',
      client_id: '07-tendermint-162',
      connection_id: 'connection-141'
    },
    chain_2: {
      chain_name: 'coreum',
      client_id: '07-tendermint-33',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-159',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bandchain',
      client_id: '07-tendermint-94',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1743',
      connection_id: 'connection-1345'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-148',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'beezee',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2154',
      connection_id: 'connection-1672'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-340',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitcanna',
      client_id: '07-tendermint-0',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-1237',
      connection_id: 'connection-1132'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-42',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitcanna',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-490',
      connection_id: 'connection-399'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-232',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitcanna',
      client_id: '07-tendermint-12',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-110',
      connection_id: 'connection-70'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitcanna',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1499',
      connection_id: 'connection-1167'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-481',
      connection_id: 'connection-395'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-229',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-33',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1551',
      connection_id: 'connection-1216'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bluzelle',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2754',
      connection_id: 'connection-2273'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-763',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bostrom',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1597',
      connection_id: 'connection-1255'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-95',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'canto',
      client_id: '07-tendermint-10',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'carbon',
      client_id: '07-tendermint-40',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'canto',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'composable',
      client_id: '07-tendermint-50',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'canto',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2481',
      connection_id: 'connection-2017'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-550',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-765',
      connection_id: 'connection-554'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-342',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-73',
      connection_id: 'connection-29'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-53',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-151',
      connection_id: 'connection-114'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-28',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-68',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-16',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-60',
      connection_id: 'connection-40'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1808',
      connection_id: 'connection-1412'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-188',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-36',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-224',
      connection_id: 'connection-158'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-123',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-13',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-40',
      connection_id: 'connection-27'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'carbon',
      client_id: '07-tendermint-33',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-66',
      connection_id: 'connection-54'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id:
            'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-35',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'composable',
      client_id: '07-tendermint-138',
      connection_id: 'connection-55'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-28',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-226',
      connection_id: 'connection-210'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-152',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-49',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-158',
      connection_id: 'connection-198'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-29',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-48',
      connection_id: 'connection-36'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-35',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-10',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3012',
      connection_id: 'connection-2503'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6994',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-52',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-174',
      connection_id: 'connection-131'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-91',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-0',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-137',
      connection_id: 'connection-125'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-162',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      client_id: '07-tendermint-53',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-391',
      connection_id: 'connection-381'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-300',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cerberus',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1875',
      connection_id: 'connection-1460'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-212',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cheqd',
      client_id: '07-tendermint-13',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-64',
      connection_id: 'connection-74'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-43',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cheqd',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1615',
      connection_id: 'connection-1268'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-108',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cheqd',
      client_id: '07-tendermint-83',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-392',
      connection_id: 'connection-382'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-301',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-54',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-79',
      connection_id: 'connection-46'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-28',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-126',
      connection_id: 'connection-81'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-21',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-191',
      connection_id: 'connection-127'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-74',
      connection_id: 'connection-53'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-76',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-77',
          port_id:
            'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52'
        },
        chain_2: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-85',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-5',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-45',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1666',
      connection_id: 'connection-1278'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-73',
          port_id:
            'wasm.chihuahua1jwkag4yvhyj9fuddtkygvavya8hmdjuzmgxwg9vp3lw9twv6lrcq9mgl52'
        },
        chain_2: {
          channel_id: 'channel-11348',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-70',
      connection_id: 'connection-38'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-27',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chihuahua',
      client_id: '07-tendermint-86',
      connection_id: 'connection-55'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-108',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-32',
      connection_id: 'connection-33'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-30',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-92',
      connection_id: 'connection-55'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-52',
      connection_id: 'connection-34'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-15',
      connection_id: 'connection-20'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-139',
      connection_id: 'connection-71'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-25',
      connection_id: 'connection-24'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1587',
      connection_id: 'connection-1243'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-87',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-123',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-94',
      connection_id: 'connection-75'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-71',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-142',
      connection_id: 'connection-74'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-125',
      connection_id: 'connection-95'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-83',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-41',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-45',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'comdex',
      client_id: '07-tendermint-117',
      connection_id: 'connection-56'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-70',
      connection_id: 'connection-59'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1150',
      connection_id: 'connection-871'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-617',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-46',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-112',
      connection_id: 'connection-98'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-26',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-111',
      connection_id: 'connection-66'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-123',
      connection_id: 'connection-45'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-207',
      connection_id: 'connection-191'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-145',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-30',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-382',
      connection_id: 'connection-376'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-280',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-110',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-147',
      connection_id: 'connection-112'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-101',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-66',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-29',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2846',
      connection_id: 'connection-2358'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1279',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '08-wasm-5',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'picasso',
      client_id: '07-tendermint-32',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-31',
      connection_id: 'connection-16'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-78',
      connection_id: 'connection-53'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-52',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-166',
      connection_id: 'connection-116'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-80',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer',
          client_id: '07-tendermint-52',
          connection_id: 'connection-21'
        },
        chain_2: {
          channel_id: 'channel-83',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          client_id: '07-tendermint-166',
          connection_id: 'connection-116'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-25',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-279',
      connection_id: 'connection-207'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-184',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      client_id: '07-tendermint-14',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-126',
      connection_id: 'connection-116'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-134',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composablepolkadot',
      client_id: '10-grandpa-28',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'picasso',
      client_id: '10-grandpa-28',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1162',
      connection_id: 'connection-884'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-660',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-12',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'doravota',
      client_id: '07-tendermint-12',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-38',
      connection_id: 'connection-26'
    },
    chain_2: {
      chain_name: 'dydx',
      client_id: '07-tendermint-14',
      connection_id: 'connection-20'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-117',
      connection_id: 'connection-71'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-87',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-421',
      connection_id: 'connection-399'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-142',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-29',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-160',
      connection_id: 'connection-200'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-142',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-28',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-163',
      connection_id: 'connection-126'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-122',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-32',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-71',
      connection_id: 'connection-72'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2929',
      connection_id: 'connection-2426'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2188',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-40',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-186',
      connection_id: 'connection-138'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-101',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'coreum',
      client_id: '07-tendermint-41',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-47',
      connection_id: 'connection-79'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-724',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'crescent',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-326',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-389',
      connection_id: 'connection-342'
    },
    chain_2: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-735',
      connection_id: 'connection-220'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-187',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1191',
      connection_id: 'connection-920'
    },
    chain_2: {
      chain_name: 'doravota',
      client_id: '07-tendermint-14',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-750',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-432',
      connection_id: 'connection-365'
    },
    chain_2: {
      chain_name: 'emoney',
      client_id: '07-tendermint-8',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-202',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1151',
      connection_id: 'connection-872'
    },
    chain_2: {
      chain_name: 'empowerchain',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-621',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-620',
      connection_id: 'connection-480'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-292',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1141',
      connection_id: 'connection-829'
    },
    chain_2: {
      chain_name: 'fxcore',
      client_id: '07-tendermint-13',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-585',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1153',
      connection_id: 'connection-874'
    },
    chain_2: {
      chain_name: 'haqq',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-632',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-434',
      connection_id: 'connection-368'
    },
    chain_2: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-470',
      connection_id: 'connection-388'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-220',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-384',
      connection_id: 'connection-338'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-31',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-182',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-439',
      connection_id: 'connection-372'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-207',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-557',
      connection_id: 'connection-460'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-277',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-475',
      connection_id: 'connection-392'
    },
    chain_2: {
      chain_name: 'kichain',
      client_id: '07-tendermint-6',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-223',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-769',
      connection_id: 'connection-555'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-343',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-468',
      connection_id: 'connection-386'
    },
    chain_2: {
      chain_name: 'likecoin',
      client_id: '07-tendermint-24',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-217',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1120',
      connection_id: 'connection-807'
    },
    chain_2: {
      chain_name: 'lumnetwork',
      client_id: '07-tendermint-21',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-566',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1119',
      connection_id: 'connection-809'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-569',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1116',
      connection_id: 'connection-790'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-4',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-536',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-656',
      connection_id: 'connection-501'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-23',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-259',
      connection_id: 'connection-257'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-141',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-391',
      connection_id: 'connection-344'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-36',
      connection_id: 'connection-30'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-190',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-994',
      connection_id: 'connection-693'
    },
    chain_2: {
      chain_name: 'planq',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-446',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-926',
      connection_id: 'connection-648'
    },
    chain_2: {
      chain_name: 'point',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-404',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1018',
      connection_id: 'connection-709'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-467',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1157',
      connection_id: 'connection-879'
    },
    chain_2: {
      chain_name: 'realio',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-645',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-386',
      connection_id: 'connection-340'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-27',
      connection_id: 'connection-24'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-185',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-492',
      connection_id: 'connection-401'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-235',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1140',
      connection_id: 'connection-827'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-584',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-388',
      connection_id: 'connection-341'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-58',
      connection_id: 'connection-33'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-186',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-395',
      connection_id: 'connection-347'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-192',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-892',
      connection_id: 'connection-618'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-369',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-326',
      connection_id: 'connection-300'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-158',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-913',
      connection_id: 'connection-635'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-391',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-962',
      connection_id: 'connection-1710'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-32',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-431',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-760',
      connection_id: 'connection-551'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-611',
      connection_id: 'connection-473'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-288',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1115',
      connection_id: 'connection-788'
    },
    chain_2: {
      chain_name: 'uptick',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-535',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-77',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-1153',
      connection_id: 'connection-277'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-61',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-12',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-38',
      connection_id: 'connection-15'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-4',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-100',
      connection_id: 'connection-102'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-26',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-132',
      connection_id: 'connection-105'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-90',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-67',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-86',
      connection_id: 'connection-70'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-111',
      connection_id: 'connection-97'
    },
    chain_2: {
      chain_name: 'jackal',
      client_id: '07-tendermint-56',
      connection_id: 'connection-46'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-160',
      connection_id: 'connection-107'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-81',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-78',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-105',
      connection_id: 'connection-75'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-42',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-67',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-53',
      connection_id: 'connection-52'
    },
    chain_2: {
      chain_name: 'mars',
      client_id: '07-tendermint-14',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-35',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-68',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-44',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-116',
      connection_id: 'connection-78'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-17',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2083',
      connection_id: 'connection-1624'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-297',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-42',
      connection_id: 'connection-41'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-88',
      connection_id: 'connection-72'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-68',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-18',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-53',
      connection_id: 'connection-31'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent',
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-24',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-180',
      connection_id: 'connection-114'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-38',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-44',
      connection_id: 'connection-30'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-101',
      connection_id: 'connection-70'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-36',
      connection_id: 'connection-37'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-68',
      connection_id: 'connection-57'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      client_id: '07-tendermint-56',
      connection_id: 'connection-53'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-170',
      connection_id: 'connection-110'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cronos',
      client_id: '07-tendermint-33',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-134',
      connection_id: 'connection-169'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-125',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-1136',
      connection_id: 'connection-260'
    },
    chain_2: {
      chain_name: 'evmos',
      client_id: '07-tendermint-85',
      connection_id: 'connection-43'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-650',
      connection_id: 'connection-197'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-32',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-33',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-4',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-61',
      connection_id: 'connection-34'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-24',
      connection_id: 'connection-17'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-732',
      connection_id: 'connection-218'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-28',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-63',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-43',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-1103',
      connection_id: 'connection-239'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-20',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      client_id: '07-tendermint-66',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-16',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cudos',
      client_id: '07-tendermint-2084',
      connection_id: 'connection-1626'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-298',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'decentr',
      client_id: '07-tendermint-6',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1798',
      connection_id: 'connection-1403'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-181',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'decentr',
      client_id: '07-tendermint-26',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-395',
      connection_id: 'connection-385'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-315',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'desmos',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1726',
      connection_id: 'connection-1315'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dig',
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-100',
      connection_id: 'connection-62'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dig',
      client_id: '07-tendermint-13',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1714',
      connection_id: 'connection-1304'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-128',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      client_id: '07-tendermint-16',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'dydx',
      client_id: '07-tendermint-15',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      client_id: '07-tendermint-15',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-245',
      connection_id: 'connection-239'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-182',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      client_id: '07-tendermint-13',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'nolus',
      client_id: '07-tendermint-14',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4092',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2959',
      connection_id: 'connection-2454'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2694',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-7',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-154',
      connection_id: 'connection-195'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-5',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-158',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-118',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-11',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-72',
      connection_id: 'connection-51'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-59',
      connection_id: 'connection-57'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-3',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3009',
      connection_id: 'connection-2500'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6787',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-4',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-159',
      connection_id: 'connection-197'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-131',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-160',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      client_id: '07-tendermint-9',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-390',
      connection_id: 'connection-380'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-299',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dyson',
      client_id: '07-tendermint-2',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2407',
      connection_id: 'connection-1895'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-526',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'echelon',
      client_id: '07-tendermint-107',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2268',
      connection_id: 'connection-1760'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-403',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'emoney',
      client_id: '07-tendermint-10',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-46',
      connection_id: 'connection-34'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'emoney',
      client_id: '07-tendermint-51',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-24',
      connection_id: 'connection-16'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'emoney',
      client_id: '07-tendermint-7',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1447',
      connection_id: 'connection-1132'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowerchain',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2848',
      connection_id: 'connection-2360'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1411',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'gateway',
      client_id: '07-tendermint-119',
      connection_id: 'connection-77'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-17',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-108',
      connection_id: 'connection-106'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-19',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'injective',
      client_id: '07-tendermint-112',
      connection_id: 'connection-92'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-113',
      connection_id: 'connection-67'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-120',
      connection_id: 'connection-157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-83',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-117',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-53',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-25',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-106',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-12',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1840',
      connection_id: 'connection-1440'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-50',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-42',
      connection_id: 'connection-24'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-41',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-173',
      connection_id: 'connection-104'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-77',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-8',
      connection_id: 'connection-7'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      client_id: '07-tendermint-88',
      connection_id: 'connection-46'
    },
    chain_2: {
      chain_name: 'tgrade',
      client_id: '07-tendermint-8',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'fetchhub',
      client_id: '07-tendermint-10',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1913',
      connection_id: 'connection-1490'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-229',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'furya',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-501',
      connection_id: 'connection-505'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-417',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'furya',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-160',
      connection_id: 'connection-123'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-119',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'furya',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3029',
      connection_id: 'connection-2515'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8690',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'furya',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-385',
      connection_id: 'connection-361'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-271',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'fxcore',
      client_id: '07-tendermint-23',
      connection_id: 'connection-22'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2961',
      connection_id: 'connection-2456'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2716',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'fxcore',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'pundix',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'galaxy',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1928',
      connection_id: 'connection-1500'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-236',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-13',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-153',
      connection_id: 'connection-117'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      client_id: '07-tendermint-8',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2927',
      connection_id: 'connection-2424'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2186',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'genesisl1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1983',
      connection_id: 'connection-1539'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-253',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gitopia',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2787',
      connection_id: 'connection-2287'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-781',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-192',
      connection_id: 'connection-163'
    },
    chain_2: {
      chain_name: 'haqq',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-100',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-225',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-69',
      connection_id: 'connection-45'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-107',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-33',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'nyx',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-13',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1737',
      connection_id: 'connection-1340'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-144',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-39',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-195',
      connection_id: 'connection-165'
    },
    chain_2: {
      chain_name: 'planq',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-102',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-140',
      connection_id: 'connection-139'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-40',
      connection_id: 'connection-23'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-79',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gravitybridge',
      client_id: '07-tendermint-190',
      connection_id: 'connection-161'
    },
    chain_2: {
      chain_name: 'unification',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'haqq',
      client_id: '07-tendermint-5',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-149',
      connection_id: 'connection-193'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'haqq',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-58',
      connection_id: 'connection-56'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-32',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'haqq',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2871',
      connection_id: 'connection-2388'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1575',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-59',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-20',
      connection_id: 'connection-29'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-12',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1451',
      connection_id: 'connection-1137'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthub',
      client_id: '07-tendermint-25',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-39',
      connection_id: 'connection-18'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'imversed',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2366',
      connection_id: 'connection-1866'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-517',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-205',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-130',
      connection_id: 'connection-166'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-143',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-122',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-144',
      connection_id: 'connection-116'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-77',
      connection_id: 'connection-53'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-54',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-154',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-5',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-102',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-223',
      connection_id: 'connection-220'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-78',
      connection_id: 'connection-58'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-177',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-210',
      connection_id: 'connection-193'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-15',
      connection_id: 'connection-24'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-146',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-201',
      connection_id: 'connection-184'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-13',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'wasm.inj1w9g3sk7lk8k0pdtctygupt6f3te7x4thvzz57a'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1703',
      connection_id: 'connection-1298'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-122',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-110',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-57',
      connection_id: 'connection-53'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-97',
      connection_id: 'connection-83'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-22',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-88',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-135',
      connection_id: 'connection-108'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-4',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-93',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-131',
      connection_id: 'connection-103'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-89',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-216',
      connection_id: 'connection-202'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-369',
      connection_id: 'connection-311'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-151',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-255',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      client_id: '07-tendermint-197',
      connection_id: 'connection-182'
    },
    chain_2: {
      chain_name: 'xpla',
      client_id: '07-tendermint-6',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-5',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-5',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-34',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-31',
      connection_id: 'connection-25'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-35',
      connection_id: 'connection-26'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-25',
      connection_id: 'connection-22'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-36',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-54',
      connection_id: 'connection-30'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-42',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-19',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-63',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-44',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-41',
      connection_id: 'connection-27'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      client_id: '07-tendermint-93',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'uptick',
      client_id: '07-tendermint-8',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'jackal',
      client_id: '07-tendermint-57',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-139',
      connection_id: 'connection-105'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-94',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'jackal',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2273',
      connection_id: 'connection-1762'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-412',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'jackal',
      client_id: '07-tendermint-6',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-124',
      connection_id: 'connection-94'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-198',
      connection_id: 'connection-140'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-87',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-300',
      connection_id: 'connection-270'
    },
    chain_2: {
      chain_name: 'mars',
      client_id: '07-tendermint-11',
      connection_id: 'connection-7'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-209',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-310',
      connection_id: 'connection-282'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-210',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-334',
      connection_id: 'connection-322'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-3',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-224',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-335',
      connection_id: 'connection-325'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-225',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-243',
          port_id:
            'wasm.juno1qr84ktm57q5t02u04ddk5r8s79axdzglad6tfdd9g2xgt4hkh6jsgeq9x2'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-314',
      connection_id: 'connection-285'
    },
    chain_2: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-122',
      connection_id: 'connection-92'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-212',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1457',
      connection_id: 'connection-1142'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-42',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-47',
          port_id:
            'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn'
        },
        chain_2: {
          channel_id: 'channel-169',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-89',
      connection_id: 'connection-51'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-49',
      connection_id: 'connection-48'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-318',
      connection_id: 'connection-309'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-17',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-215',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-108',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-23',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-48',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-163',
          port_id: 'transfer',
          client_id: '07-tendermint-108',
          connection_id: 'connection-68'
        },
        chain_2: {
          channel_id: 'channel-45',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          client_id: '07-tendermint-23',
          connection_id: 'connection-9'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-9',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-37',
      connection_id: 'connection-17'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-44',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-13',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-263',
      connection_id: 'connection-205'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-31',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-139',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-202',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'icacontroller-juno-1.DELEGATION'
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
        chain_1: {
          channel_id: 'channel-143',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id: 'icacontroller-juno-1.FEE'
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
        chain_1: {
          channel_id: 'channel-142',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-27',
          port_id: 'icacontroller-juno-1.WITHDRAWAL'
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
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-28',
          port_id: 'icacontroller-juno-1.REDEMPTION'
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
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-63',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-32',
      connection_id: 'connection-34'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      client_id: '07-tendermint-185',
      connection_id: 'connection-128'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-86',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-119',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-140',
      connection_id: 'connection-106'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-95',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-125',
      connection_id: 'connection-162'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-90',
      connection_id: 'connection-73'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-120',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-151',
      connection_id: 'connection-194'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-54',
      connection_id: 'connection-37'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1735',
      connection_id: 'connection-1328'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-143',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-148',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-156',
      connection_id: 'connection-195'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-134',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-129',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-146',
      connection_id: 'connection-181'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-38',
      connection_id: 'connection-33'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-132',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-156',
      connection_id: 'connection-196'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-386',
      connection_id: 'connection-362'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-272',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-124',
      connection_id: 'connection-160'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-229',
      connection_id: 'connection-191'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-119',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kichain',
      client_id: '07-tendermint-4',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1564',
      connection_id: 'connection-1225'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-77',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id:
            'wasm.ki1hzz0s0ucrhdp6tue2lxk3c03nj6f60qy463we7lgx0wudd72ctmsd9kgha'
        },
        chain_2: {
          channel_id: 'channel-261',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'konstellation',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1778',
      connection_id: 'connection-1384'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-171',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-78',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'mars',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-55',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-82',
      connection_id: 'connection-59'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-16',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-58',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-112',
      connection_id: 'connection-82'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-95',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-2',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-156',
      connection_id: 'connection-120'
    },
    chain_2: {
      chain_name: 'nomic',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-108',
      connection_id: 'connection-78'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-43',
      connection_id: 'connection-36'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-70',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2017',
      connection_id: 'connection-1559'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-259',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-155',
      connection_id: 'connection-119'
    },
    chain_2: {
      chain_name: 'realio',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-115',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-106',
      connection_id: 'connection-76'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-115',
      connection_id: 'connection-104'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-68',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-100',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-12',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-48',
      connection_id: 'connection-29'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer',
          client_id: '07-tendermint-12',
          connection_id: 'connection-7'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          client_id: '07-tendermint-48',
          connection_id: 'connection-29'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-107',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-12',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-96',
      connection_id: 'connection-68'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-9',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-178',
      connection_id: 'connection-111'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-37',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-32',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-132',
      connection_id: 'connection-100'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-61',
      connection_id: 'connection-38'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-89',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kujira',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-11',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-28',
          port_id:
            'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kyve',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2757',
      connection_id: 'connection-2274'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-767',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lambda',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2217',
      connection_id: 'connection-1733'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-378',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'likecoin',
      client_id: '07-tendermint-16',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1507',
      connection_id: 'connection-1173'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lumenx',
      client_id: '07-tendermint-0',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2079',
      connection_id: 'connection-1620'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-286',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'lumnetwork',
      client_id: '07-tendermint-7',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1668',
      connection_id: 'connection-1280'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-115',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mars',
      client_id: '07-tendermint-64',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-21',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mars',
      client_id: '07-tendermint-4',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2602',
      connection_id: 'connection-2114'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-557',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'mars',
      client_id: '07-tendermint-10',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-104',
      connection_id: 'connection-91'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-78',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'medasdigital',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2372',
      connection_id: 'connection-1869'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-519',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'medasdigital',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-110',
      connection_id: 'connection-87'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'meme',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1931',
      connection_id: 'connection-1502'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-238',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'microtick',
      client_id: '07-tendermint-99',
      connection_id: 'connection-92'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1453',
      connection_id: 'connection-1139'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-113',
      connection_id: 'connection-89'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-19',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-60',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-3',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2669',
      connection_id: 'connection-2171'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-642',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-6',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-116',
      connection_id: 'connection-87'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-108',
      connection_id: 'connection-84'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-22',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-118',
      connection_id: 'connection-90'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-352',
      connection_id: 'connection-287'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-269',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-105',
      connection_id: 'connection-93'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-86',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-87',
          port_id:
            'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-104',
      connection_id: 'connection-83'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-234',
      connection_id: 'connection-195'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-56',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-104',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-40',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-25',
      connection_id: 'connection-34'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-71',
      connection_id: 'connection-50'
    },
    chain_2: {
      chain_name: 'nolus',
      client_id: '07-tendermint-13',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3839',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-64',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'nomic',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-42',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-19',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2823',
      connection_id: 'connection-2338'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-874',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-73',
      connection_id: 'connection-52'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-161',
      connection_id: 'connection-199'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-75',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-19',
      connection_id: 'connection-139'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-57',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-104',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-37',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-27',
      connection_id: 'connection-16'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-31',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-283',
      connection_id: 'connection-211'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-191',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-18',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-125',
      connection_id: 'connection-113'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-123',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-12',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-274',
      connection_id: 'connection-192'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-229',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-167',
          port_id:
            'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id:
            'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain_2: {
          channel_id: 'channel-168',
          port_id:
            'wasm.terra1fkuhmq52pj08qqffp0elrvmzel8zz857x0pjjuuaar54mgcpe35s9km660'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-68',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-0',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2704',
      connection_id: 'connection-2241'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-750',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-61',
      connection_id: 'connection-59'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-160',
      connection_id: 'connection-198'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-132',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-24',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-170',
      connection_id: 'connection-127'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-88',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-45',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-45',
      connection_id: 'connection-77'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-39',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-45',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-16',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-287',
      connection_id: 'connection-214'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-76',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-97',
      connection_id: 'connection-97'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-54',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-56',
      connection_id: 'connection-54'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-367',
      connection_id: 'connection-302'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-30',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-253',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nois',
      client_id: '07-tendermint-16',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3017',
      connection_id: 'connection-2507'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8277',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-11319',
          port_id:
            'wasm.osmo1tvzr8ur0ynjhqftxpkl4qwel8ly7erhy6cu6ks426xmzf92vk6eqfp9wcl'
        },
        chain_2: {
          channel_id: 'channel-41',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nois',
      client_id: '07-tendermint-19',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-106',
      connection_id: 'connection-144'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-43',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-58',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        chain_2: {
          channel_id: 'channel-59',
          port_id:
            'wasm.sei1vxlzhn6qvf95syha2tgr0ct23sk5359s2vqzylgthuyy7kd7ql5qcxa4r0'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nois',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-237',
      connection_id: 'connection-171'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-137',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-238',
          port_id:
            'wasm.stars1mw5y55f53mnara7g3pn2pylxl8dpauscyn83c68442hz9nwktzrq8tjzyf'
        },
        chain_2: {
          channel_id: 'channel-38',
          port_id:
            'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolus',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2791',
      connection_id: 'connection-2289'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-783',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nomic',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3010',
      connection_id: 'connection-2501'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6897',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nyx',
      client_id: '07-tendermint-17',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3065',
      connection_id: 'connection-2555'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15464',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'odin',
      client_id: '07-tendermint-10',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2007',
      connection_id: 'connection-1551'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-258',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'okexchain',
      client_id: '07-tendermint-100',
      connection_id: 'connection-44'
    },
    chain_2: {
      chain_name: 'vidulum',
      client_id: '07-tendermint-5',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1829',
      connection_id: 'connection-1431'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-199',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'onomy',
      client_id: '07-tendermint-0',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2405',
      connection_id: 'connection-1892'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-525',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'oraichain',
      client_id: '07-tendermint-49',
      connection_id: 'connection-21'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1882',
      connection_id: 'connection-1464'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-216',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1576',
      connection_id: 'connection-1231'
    },
    chain_2: {
      chain_name: 'panacea',
      client_id: '07-tendermint-6',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2935',
      connection_id: 'connection-2430'
    },
    chain_2: {
      chain_name: 'passage',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2494',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2318',
      connection_id: 'connection-1815'
    },
    chain_2: {
      chain_name: 'planq',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-492',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1899',
      connection_id: 'connection-1472'
    },
    chain_2: {
      chain_name: 'provenance',
      client_id: '07-tendermint-31',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-222',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3059',
      connection_id: 'connection-2554'
    },
    chain_2: {
      chain_name: 'pundix',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-12618',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2703',
      connection_id: 'connection-2240'
    },
    chain_2: {
      chain_name: 'quasar',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-688',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2400',
      connection_id: 'connection-1889'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-6',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-522',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2831',
      connection_id: 'connection-2345'
    },
    chain_2: {
      chain_name: 'qwoyn',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-880',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2849',
      connection_id: 'connection-2361'
    },
    chain_2: {
      chain_name: 'realio',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1424',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2173',
      connection_id: 'connection-1692'
    },
    chain_2: {
      chain_name: 'rebus',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-355',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-6',
      connection_id: 'connection-7'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1898',
      connection_id: 'connection-1471'
    },
    chain_2: {
      chain_name: 'rizon',
      client_id: '07-tendermint-3',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-221',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1588',
      connection_id: 'connection-1244'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-88',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-476',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-44',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis',
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2790',
      connection_id: 'connection-2288'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-2',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-782',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2972',
      connection_id: 'connection-2468'
    },
    chain_2: {
      chain_name: 'sge',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5485',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2680',
      connection_id: 'connection-2182'
    },
    chain_2: {
      chain_name: 'shareledger',
      client_id: '07-tendermint-1',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-647',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1741',
      connection_id: 'connection-1342'
    },
    chain_2: {
      chain_name: 'shentu',
      client_id: '07-tendermint-9',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-146',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1484',
      connection_id: 'connection-1159'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-41',
      connection_id: 'connection-20'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-47',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1745',
      connection_id: 'connection-1348'
    },
    chain_2: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-165',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3035',
      connection_id: 'connection-2524'
    },
    chain_2: {
      chain_name: 'source',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-8945',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2969',
      connection_id: 'connection-2465'
    },
    chain_2: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-7',
      connection_id: 'connection-6'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5413',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1562',
      connection_id: 'connection-1223'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-71',
      connection_id: 'connection-42'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2119',
      connection_id: 'connection-1657'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-326',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2192',
      connection_id: 'connection-1710'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-362',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1215',
      connection_id: 'connection-1549'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-12',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-72',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1979',
      connection_id: 'connection-1536'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-251',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-559',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-85',
          port_id:
            'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-341',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
          port_id:
            'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2025',
      connection_id: 'connection-1565'
    },
    chain_2: {
      chain_name: 'tgrade',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-263',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1805',
      connection_id: 'connection-1410'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-6',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-184',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2229',
      connection_id: 'connection-1746'
    },
    chain_2: {
      chain_name: 'unification',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-382',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1705',
      connection_id: 'connection-1300'
    },
    chain_2: {
      chain_name: 'vidulum',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2875',
      connection_id: 'connection-2389'
    },
    chain_2: {
      chain_name: 'xpla',
      client_id: '07-tendermint-11',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1634',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-96',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-15',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-73',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-33',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-30',
      connection_id: 'connection-28'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-21',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-106',
      connection_id: 'connection-146'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-126',
      connection_id: 'connection-98'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-82',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-34',
      connection_id: 'connection-28'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-39',
      connection_id: 'connection-39'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-44',
      connection_id: 'connection-30'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-83',
      connection_id: 'connection-71'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-54',
      connection_id: 'connection-33'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-67',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      client_id: '07-tendermint-105',
      connection_id: 'connection-144'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-179',
      connection_id: 'connection-119'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-81',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-51',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'planq',
      client_id: '07-tendermint-545',
      connection_id: 'connection-477'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-21',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-59',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-16',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'regen',
      client_id: '07-tendermint-113',
      connection_id: 'connection-102'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-61',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-28',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-138',
      connection_id: 'connection-99'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-225',
      connection_id: 'connection-159'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'quicksilver',
      client_id: '07-tendermint-27',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-183',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-49',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-53',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-56',
      connection_id: 'connection-32'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      client_id: '07-tendermint-73',
      connection_id: 'connection-60'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-31',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-28',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      client_id: '07-tendermint-74',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-45',
      connection_id: 'connection-31'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-14',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-96',
      connection_id: 'connection-75'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-37',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-171',
      connection_id: 'connection-98'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-43',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-177',
      connection_id: 'connection-110'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-75',
      connection_id: 'connection-40'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-37',
      connection_id: 'connection-25'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-192',
      connection_id: 'connection-185'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-99',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-111',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-63',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-28',
      connection_id: 'connection-29'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-38',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-4',
      connection_id: 'connection-7'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-16',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sei',
      client_id: '07-tendermint-18',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-130',
      connection_id: 'connection-119'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-149',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-84',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'sifchain',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sentinel',
      client_id: '07-tendermint-88',
      connection_id: 'connection-70'
    },
    chain_2: {
      chain_name: 'starname',
      client_id: '07-tendermint-46',
      connection_id: 'connection-32'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {}
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sommelier',
      client_id: '07-tendermint-60',
      connection_id: 'connection-75'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-131',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-71',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-150',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stafihub',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-317',
      connection_id: 'connection-233'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-195',
      connection_id: 'connection-128'
    },
    chain_2: {
      chain_name: 'stride',
      client_id: '07-tendermint-30',
      connection_id: 'connection-18'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-106',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-337',
      connection_id: 'connection-275'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-405',
      connection_id: 'connection-408'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-266',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-324',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stride',
      client_id: '07-tendermint-51',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-87',
      connection_id: 'connection-72'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-52',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-46',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stride',
      client_id: '07-tendermint-32',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-64',
      connection_id: 'connection-45'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-29',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'terra',
      client_id: '07-tendermint-235',
      connection_id: 'connection-142'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-394',
      connection_id: 'connection-384'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-85',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-314',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-45',
      connection_id: 'connection-39'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-34',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akashtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1271',
      connection_id: 'connection-1171'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4171',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-70',
      connection_id: 'connection-60'
    },
    chain_2: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-603',
      connection_id: 'connection-418'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-50',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-305',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archwaytestnet',
      client_id: '07-tendermint-77',
      connection_id: 'connection-73'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1195',
      connection_id: 'connection-1101'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-58',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3938',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-594',
      connection_id: 'connection-410'
    },
    chain_2: {
      chain_name: 'dydxtestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-297',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-685',
      connection_id: 'connection-538'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1270',
      connection_id: 'connection-1169'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-339',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4170',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-213',
      connection_id: 'connection-151'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-3319',
      connection_id: 'connection-2807'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-135',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1946',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-522',
      connection_id: 'connection-372'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-261',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-767',
      connection_id: 'connection-581'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-10'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-370',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelartestnet',
      client_id: '07-tendermint-585',
      connection_id: 'connection-402'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-10',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-283',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2382',
      connection_id: 'connection-2727'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3152',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-113',
      connection_id: 'connection-101'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-160',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestiatestnet3',
      client_id: '07-tendermint-118',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1445',
      connection_id: 'connection-1350'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-25',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4370',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'chain4energytestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-104',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-111',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composabletestnet',
      client_id: '07-tendermint-23',
      connection_id: 'connection-18'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-273',
      connection_id: 'connection-237'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-329',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2073',
      connection_id: 'connection-2418'
    },
    chain_2: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2765',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2528',
      connection_id: 'connection-2886'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1262',
      connection_id: 'connection-1157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4156',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshubtestnet',
      client_id: '07-tendermint-2100',
      connection_id: 'connection-2447'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2777',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravotatestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-611'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1260',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-146',
      connection_id: 'connection-157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-155',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'empowertestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-450',
      connection_id: 'connection-469'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-459',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'entrypointtestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-930',
      connection_id: 'connection-840'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1543',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthubtestnet',
      client_id: '07-tendermint-53',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1010',
      connection_id: 'connection-911'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1637',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-123',
      connection_id: 'connection-98'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-74',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-77',
          port_id: 'wasm.inj14nendtsz0c40n7xtzwkjmdc8dkuz835jdydxhn'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injectivetestnet',
      client_id: '07-tendermint-189',
      connection_id: 'connection-180'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1273',
      connection_id: 'connection-1173'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-129',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4174',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-170',
      connection_id: 'connection-178'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-16',
      connection_id: 'connection-5'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-877',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-69',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-198',
          port_id:
            'wasm.juno1pjpntyvkxeuxd709jlupuea3xzxlzsfq574kqefv77fr2kcg4mcqvwqedq'
        },
        chain_2: {
          channel_id: 'channel-17',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-682',
      connection_id: 'connection-774'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1268',
      connection_id: 'connection-1166'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-811',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4167',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'junotestnet',
      client_id: '07-tendermint-135',
      connection_id: 'connection-151'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4413',
      connection_id: 'connection-3814'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3316',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kyvetestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-11',
      connection_id: 'connection-11'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'likecointestnet',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1431',
      connection_id: 'connection-1336'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4357',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'marstestnet',
      client_id: '07-tendermint-31',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1269',
      connection_id: 'connection-1167'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-27',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4168',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'marstestnet',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-3419',
      connection_id: 'connection-2887'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2083',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-93'
    },
    chain_2: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-30',
      connection_id: 'connection-17'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-133',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-135',
          port_id:
            'wasm.neutron1tw9sg9e4l09l5rjglf4qfvcft470ljk5grdq3luagysyk83nzfusw2sxgq'
        },
        chain_2: {
          channel_id: 'channel-42',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-143',
      connection_id: 'connection-130'
    },
    chain_2: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-208',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1990',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutrontestnet',
      client_id: '07-tendermint-133',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1272',
      connection_id: 'connection-1172'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-196',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4172',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-42',
      connection_id: 'connection-31'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1374',
      connection_id: 'connection-1275'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-22',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4280',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'osmosistestnet4',
      client_id: '07-tendermint-4504',
      connection_id: 'connection-3905'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3651',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nobletestnet',
      client_id: '07-tendermint-25',
      connection_id: 'connection-24'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-17',
      connection_id: 'connection-9'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-17',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noistestnet',
      client_id: '07-tendermint-39',
      connection_id: 'connection-23'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-483',
      connection_id: 'connection-500'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-48',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-485',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-49',
          port_id:
            'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        chain_2: {
          channel_id: 'channel-486',
          port_id:
            'wasm.stars1h99p7u2tvz79jppjwdddmkplvcpnsh0pmatl7dqkmdhnkgx59y2q6s0x9s'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'nolustestnet',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-102',
      connection_id: 'connection-120'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-110',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-595',
      connection_id: 'connection-529'
    },
    chain_2: {
      chain_name: 'persistencetestnet2',
      client_id: '07-tendermint-3',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1037',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'quicksilvertestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1448',
      connection_id: 'connection-1552'
    },
    chain_2: {
      chain_name: 'sagatestnet',
      client_id: '07-tendermint-26',
      connection_id: 'connection-21'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4946',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-965',
      connection_id: 'connection-865'
    },
    chain_2: {
      chain_name: 'sgetestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1568',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1274',
      connection_id: 'connection-1175'
    },
    chain_2: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-621',
      connection_id: 'connection-633'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4175',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-638',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-1474',
      connection_id: 'connection-1380'
    },
    chain_2: {
      chain_name: 'xiontestnet',
      client_id: '07-tendermint-22',
      connection_id: 'connection-12'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4410',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  }
];
export default ibc;
