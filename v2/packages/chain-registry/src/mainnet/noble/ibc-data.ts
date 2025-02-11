import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'archway',
      clientId: '07-tendermint-28',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-17',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      chainName: 'aura',
      clientId: '07-tendermint-43',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-66',
      connectionId: 'connection-63'
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
      chainName: 'beezee',
      clientId: '07-tendermint-9',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-112',
      connectionId: 'connection-107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-95',
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
      chainName: 'coreum',
      clientId: '07-tendermint-32',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-71',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1116',
      connectionId: 'connection-790'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-4',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-536',
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
      chainName: 'crescent',
      clientId: '07-tendermint-68',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-38',
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
      chainName: 'doravota',
      clientId: '07-tendermint-23',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-111',
      connectionId: 'connection-106'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
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
      chainName: 'dydx',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-59',
      connectionId: 'connection-57'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-33',
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
      clientId: '07-tendermint-14',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-79',
      connectionId: 'connection-80'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'elys',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-133',
      connectionId: 'connection-130'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-117',
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
      clientId: '07-tendermint-106',
      connectionId: 'connection-63'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-12',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-64',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'furya',
      clientId: '07-tendermint-5',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-67',
      connectionId: 'connection-64'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'haqq',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-58',
      connectionId: 'connection-56'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-32',
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
      chainName: 'impacthub',
      clientId: '07-tendermint-59',
      connectionId: 'connection-43'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-20',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
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
      clientId: '07-tendermint-212',
      connectionId: 'connection-195'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-57',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-148',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-31',
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
      chainName: 'joltify',
      clientId: '07-tendermint-4',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-102',
      connectionId: 'connection-94'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-81',
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
      clientId: '07-tendermint-334',
      connectionId: 'connection-322'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-3',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-224',
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
      chainName: 'kava',
      clientId: '07-tendermint-172',
      connectionId: 'connection-214'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-107',
      connectionId: 'connection-102'
    },
    channels: [{
        chain1: {
          channelId: 'channel-151',
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
      chainName: 'kopi',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-124',
      connectionId: 'connection-120'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-109',
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
      clientId: '07-tendermint-95',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-2',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-62',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'lava',
      clientId: '07-tendermint-11',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-120',
      connectionId: 'connection-115'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-105',
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
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-117',
      connectionId: 'connection-111'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-113',
      connectionId: 'connection-89'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-19',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-60',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-14',
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
      clientId: '07-tendermint-40',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-25',
      connectionId: 'connection-34'
    },
    channels: [{
        chain1: {
          channelId: 'channel-30',
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
      chainName: 'nibiru',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-86',
      connectionId: 'connection-86'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-67',
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
      chainName: 'noble',
      clientId: '07-tendermint-98',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'onex',
      clientId: '07-tendermint-6',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-78',
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
      chainName: 'noble',
      clientId: '07-tendermint-60',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'oraichain',
      clientId: '07-tendermint-106',
      connectionId: 'connection-83'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-147',
          portId: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'oraidex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-0',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2704',
      connectionId: 'connection-2241'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-750',
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
      chainName: 'noble',
      clientId: '07-tendermint-61',
      connectionId: 'connection-59'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-160',
      connectionId: 'connection-198'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-132',
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
      clientId: '07-tendermint-103',
      connectionId: 'connection-95'
    },
    chain2: {
      chainName: 'planq',
      clientId: '07-tendermint-567',
      connectionId: 'connection-490'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-30',
      connectionId: 'connection-37'
    },
    chain2: {
      chainName: 'provenance',
      clientId: '07-tendermint-36',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-20',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-100',
      connectionId: 'connection-92'
    },
    chain2: {
      chainName: 'pryzm',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-79',
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
      chainName: 'noble',
      clientId: '07-tendermint-104',
      connectionId: 'connection-96'
    },
    chain2: {
      chainName: 'regen',
      clientId: '07-tendermint-177',
      connectionId: 'connection-149'
    },
    channels: [{
        chain1: {
          channelId: 'channel-83',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-165',
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
      chainName: 'noble',
      clientId: '07-tendermint-64',
      connectionId: 'connection-61'
    },
    chain2: {
      chainName: 'sei',
      clientId: '07-tendermint-45',
      connectionId: 'connection-77'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-45',
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
      chainName: 'noble',
      clientId: '07-tendermint-106',
      connectionId: 'connection-99'
    },
    chain2: {
      chainName: 'shido',
      clientId: '07-tendermint-9',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-87',
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
      chainName: 'noble',
      clientId: '07-tendermint-141',
      connectionId: 'connection-136'
    },
    chain2: {
      chainName: 'sidechain',
      clientId: '07-tendermint-7',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-123',
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
      chainName: 'noble',
      clientId: '07-tendermint-76',
      connectionId: 'connection-77'
    },
    chain2: {
      chainName: 'teritori',
      clientId: '07-tendermint-97',
      connectionId: 'connection-97'
    },
    channels: [{
        chain1: {
          channelId: 'channel-54',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-56',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-367',
      connectionId: 'connection-302'
    },
    channels: [{
        chain1: {
          channelId: 'channel-30',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-253',
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
      clientId: '07-tendermint-114',
      connectionId: 'connection-109'
    },
    chain2: {
      chainName: 'titan',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-99',
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
      chainName: 'noble',
      clientId: '07-tendermint-128',
      connectionId: 'connection-124'
    },
    chain2: {
      chainName: 'xion',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-113',
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
          preferred: true
        }
      }]
  }
];
export default info;