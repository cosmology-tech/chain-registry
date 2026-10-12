import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'agoric',
      chain_id: 'agoric-3',
      client_id: '07-tendermint-126',
      connection_id: 'connection-118'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-328',
      connection_id: 'connection-333'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-492',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-454',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'andromeda',
      chain_id: 'andromeda-1',
      client_id: '07-tendermint-16',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-250',
      connection_id: 'connection-244'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-213',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-37',
      connection_id: 'connection-20'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-113',
      connection_id: 'connection-93'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'beezee',
      chain_id: 'beezee-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-17'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-356',
      connection_id: 'connection-375'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-496',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitbadges',
      chain_id: 'bitbadges-1',
      client_id: '07-tendermint-39',
      connection_id: 'connection-89'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-340',
      connection_id: 'connection-343'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-40',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-464',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'celestia',
      chain_id: 'celestia',
      client_id: '07-tendermint-28',
      connection_id: 'connection-6'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-226',
      connection_id: 'connection-210'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'composable',
      chain_id: 'centauri-1',
      client_id: '07-tendermint-123',
      connection_id: 'connection-45'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-207',
      connection_id: 'connection-191'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-470',
      connection_id: 'connection-388'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-2'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'crescent',
      chain_id: 'crescent-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-29'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-132',
      connection_id: 'connection-105'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      chain_id: 'vota-ash',
      client_id: '07-tendermint-15',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-245',
      connection_id: 'connection-239'
    },
    channels: [{
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
          preferred: true,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dungeon',
      chain_id: 'dungeon-1',
      client_id: '07-tendermint-40',
      connection_id: 'connection-8641'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-350',
      connection_id: 'connection-349'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5320',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-490',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'dydx',
      chain_id: 'dydx-mainnet-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-256',
      connection_id: 'connection-249'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-62',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-258',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'evmos',
      chain_id: 'evmos_9001-2',
      client_id: '07-tendermint-19',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-112',
      connection_id: 'connection-92'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'gateway',
      chain_id: 'wormchain',
      client_id: '07-tendermint-18',
      connection_id: 'connection-13'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-248',
      connection_id: 'connection-241'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-13',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-183',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-65',
      connection_id: 'connection-48'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-361',
      connection_id: 'connection-382'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-502',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'initia',
      chain_id: 'interwoven-1',
      client_id: '07-tendermint-65',
      connection_id: 'connection-57'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-349',
      connection_id: 'connection-348'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-113',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-488',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-205',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'kava',
      chain_id: 'kava_2222-10',
      client_id: '07-tendermint-130',
      connection_id: 'connection-166'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-278',
      connection_id: 'connection-281'
    },
    chain_2: {
      chain_name: 'kopi',
      chain_id: 'luwak-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-376',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-144',
      connection_id: 'connection-116'
    },
    chain_2: {
      chain_name: 'kujira',
      chain_id: 'kaiyo-1',
      client_id: '07-tendermint-77',
      connection_id: 'connection-53'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-317',
      connection_id: 'connection-327'
    },
    chain_2: {
      chain_name: 'lumera',
      chain_id: 'lumera-mainnet-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-443',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-275',
      connection_id: 'connection-277'
    },
    chain_2: {
      chain_name: 'mantrachain',
      chain_id: 'mantra-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-363',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-154',
      connection_id: 'connection-123'
    },
    chain_2: {
      chain_name: 'migaloo',
      chain_id: 'migaloo-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-8'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-233',
      connection_id: 'connection-220'
    },
    chain_2: {
      chain_name: 'neutron',
      chain_id: 'neutron-1',
      client_id: '07-tendermint-78',
      connection_id: 'connection-58'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-212',
      connection_id: 'connection-195'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-55'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-148',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-201',
      connection_id: 'connection-184'
    },
    chain_2: {
      chain_name: 'nois',
      chain_id: 'nois-1',
      client_id: '07-tendermint-13',
      connection_id: 'connection-6'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'wasm.inj1w9g3sk7lk8k0pdtctygupt6f3te7x4thvzz57a'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-253',
      connection_id: 'connection-245'
    },
    chain_2: {
      chain_name: 'odin',
      chain_id: 'odin-mainnet-freya',
      client_id: '07-tendermint-122',
      connection_id: 'connection-85'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-214',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-211',
      connection_id: 'connection-194'
    },
    chain_2: {
      chain_name: 'oraichain',
      chain_id: 'Oraichain',
      client_id: '07-tendermint-105',
      connection_id: 'connection-82'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-147',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-146',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1703',
      connection_id: 'connection-1298'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-353',
      connection_id: 'connection-353'
    },
    chain_2: {
      chain_name: 'penumbra',
      chain_id: 'penumbra-1',
      client_id: '07-tendermint-26',
      connection_id: 'connection-19'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-494',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-110',
      connection_id: 'connection-91'
    },
    chain_2: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-57',
      connection_id: 'connection-53'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-267',
      connection_id: 'connection-268'
    },
    chain_2: {
      chain_name: 'pryzm',
      chain_id: 'pryzm-1',
      client_id: '07-tendermint-1',
      connection_id: 'connection-1'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-284',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-285',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'icacontroller-delegation-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-286',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-11',
          port_id: 'icacontroller-reward-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain_1: {
          channel_id: 'channel-287',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'icacontroller-sweep-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-282',
      connection_id: 'connection-286'
    },
    chain_2: {
      chain_name: 'quicksilver',
      chain_id: 'quicksilver-2',
      client_id: '07-tendermint-105',
      connection_id: 'connection-68'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-394',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-234',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-354',
      connection_id: 'connection-354'
    },
    chain_2: {
      chain_name: 'safrochain',
      chain_id: 'safrochain-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-495',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-126',
      connection_id: 'connection-101'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-49',
      connection_id: 'connection-30'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-298',
      connection_id: 'connection-301'
    },
    chain_2: {
      chain_name: 'sidechain',
      chain_id: 'sidechain-1',
      client_id: '07-tendermint-24',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-431',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-135',
      connection_id: 'connection-108'
    },
    chain_2: {
      chain_name: 'sommelier',
      chain_id: 'sommelier-3',
      client_id: '07-tendermint-4',
      connection_id: 'connection-1'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-131',
      connection_id: 'connection-103'
    },
    chain_2: {
      chain_name: 'stride',
      chain_id: 'stride-1',
      client_id: '07-tendermint-2',
      connection_id: 'connection-3'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-357',
      connection_id: 'connection-376'
    },
    chain_2: {
      chain_name: 'terra',
      chain_id: 'columbus-5',
      client_id: '07-tendermint-293',
      connection_id: 'connection-182'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-497',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-143',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-216',
      connection_id: 'connection-202'
    },
    chain_2: {
      chain_name: 'terra2',
      chain_id: 'phoenix-1',
      client_id: '07-tendermint-369',
      connection_id: 'connection-311'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-322',
      connection_id: 'connection-328'
    },
    chain_2: {
      chain_name: 'thejaynetwork',
      chain_id: 'thejaynetwork',
      client_id: '07-tendermint-10',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-450',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-229',
      connection_id: 'connection-217'
    },
    chain_2: {
      chain_name: 'umee',
      chain_id: 'umee-1',
      client_id: '07-tendermint-243',
      connection_id: 'connection-206'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-159',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-279',
      connection_id: 'connection-282'
    },
    chain_2: {
      chain_name: 'xion',
      chain_id: 'xion-mainnet-1',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-387',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-197',
      connection_id: 'connection-182'
    },
    chain_2: {
      chain_name: 'xpla',
      chain_id: 'dimension_37-1',
      client_id: '07-tendermint-6',
      connection_id: 'connection-12'
    },
    channels: [{
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-314',
      connection_id: 'connection-314'
    },
    chain_2: {
      chain_name: 'xrplevm',
      chain_id: 'xrplevm_1440000-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-436',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-330',
      connection_id: 'connection-335'
    },
    chain_2: {
      chain_name: 'zigchain',
      chain_id: 'zigchain-1',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-456',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE',
          preferred: true
        }
      }]
  }
];
export default info;