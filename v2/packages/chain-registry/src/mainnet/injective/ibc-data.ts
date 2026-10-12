import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      chainId: 'agoric-3',
      clientId: '07-tendermint-126',
      connectionId: 'connection-118'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-328',
      connectionId: 'connection-333'
    },
    channels: [{
        chain1: {
          channelId: 'channel-492',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-454',
          portId: 'transfer'
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
    chain1: {
      chainName: 'andromeda',
      chainId: 'andromeda-1',
      clientId: '07-tendermint-16',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-250',
      connectionId: 'connection-244'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-213',
          portId: 'transfer'
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
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-37',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-113',
      connectionId: 'connection-93'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-84',
          portId: 'transfer'
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
    chain1: {
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-356',
      connectionId: 'connection-375'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-496',
          portId: 'transfer'
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
    chain1: {
      chainName: 'bitbadges',
      chainId: 'bitbadges-1',
      clientId: '07-tendermint-39',
      connectionId: 'connection-89'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-340',
      connectionId: 'connection-343'
    },
    channels: [{
        chain1: {
          channelId: 'channel-40',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-464',
          portId: 'transfer'
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
    chain1: {
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-28',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'composable',
      chainId: 'centauri-1',
      clientId: '07-tendermint-123',
      connectionId: 'connection-45'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-207',
      connectionId: 'connection-191'
    },
    channels: [{
        chain1: {
          channelId: 'channel-29',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-145',
          portId: 'transfer'
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
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-470',
      connectionId: 'connection-388'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-220',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
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
    chain1: {
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-26',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-132',
      connectionId: 'connection-105'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-90',
          portId: 'transfer'
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
    chain1: {
      chainName: 'doravota',
      chainId: 'vota-ash',
      clientId: '07-tendermint-15',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-245',
      connectionId: 'connection-239'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-182',
          portId: 'transfer'
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
    chain1: {
      chainName: 'dungeon',
      chainId: 'dungeon-1',
      clientId: '07-tendermint-40',
      connectionId: 'connection-8641'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-350',
      connectionId: 'connection-349'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5320',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-490',
          portId: 'transfer'
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
    chain1: {
      chainName: 'dydx',
      chainId: 'dydx-mainnet-1',
      clientId: '07-tendermint-26',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-256',
      connectionId: 'connection-249'
    },
    channels: [{
        chain1: {
          channelId: 'channel-62',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-258',
          portId: 'transfer'
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
    chain1: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-19',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-112',
      connectionId: 'connection-92'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-83',
          portId: 'transfer'
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
    chain1: {
      chainName: 'gateway',
      chainId: 'wormchain',
      clientId: '07-tendermint-18',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-248',
      connectionId: 'connection-241'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-183',
          portId: 'transfer'
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
    chain1: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-65',
      connectionId: 'connection-48'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-361',
      connectionId: 'connection-382'
    },
    channels: [{
        chain1: {
          channelId: 'channel-31',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-502',
          portId: 'transfer'
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
    chain1: {
      chainName: 'initia',
      chainId: 'interwoven-1',
      clientId: '07-tendermint-65',
      connectionId: 'connection-57'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-349',
      connectionId: 'connection-348'
    },
    channels: [{
        chain1: {
          channelId: 'channel-113',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-488',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-205',
      connectionId: 'connection-189'
    },
    chain2: {
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-130',
      connectionId: 'connection-166'
    },
    channels: [{
        chain1: {
          channelId: 'channel-143',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-122',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-278',
      connectionId: 'connection-281'
    },
    chain2: {
      chainName: 'kopi',
      chainId: 'luwak-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-376',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-144',
      connectionId: 'connection-116'
    },
    chain2: {
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-77',
      connectionId: 'connection-53'
    },
    channels: [{
        chain1: {
          channelId: 'channel-98',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-54',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-317',
      connectionId: 'connection-327'
    },
    chain2: {
      chainName: 'lumera',
      chainId: 'lumera-mainnet-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-443',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-275',
      connectionId: 'connection-277'
    },
    chain2: {
      chainName: 'mantrachain',
      chainId: 'mantra-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-363',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-154',
      connectionId: 'connection-123'
    },
    chain2: {
      chainName: 'migaloo',
      chainId: 'migaloo-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-102',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-233',
      connectionId: 'connection-220'
    },
    chain2: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-78',
      connectionId: 'connection-58'
    },
    channels: [{
        chain1: {
          channelId: 'channel-177',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-60',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-212',
      connectionId: 'connection-195'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-201',
      connectionId: 'connection-184'
    },
    chain2: {
      chainName: 'nois',
      chainId: 'nois-1',
      clientId: '07-tendermint-13',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-138',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-140',
          portId: 'wasm.inj1w9g3sk7lk8k0pdtctygupt6f3te7x4thvzz57a'
        },
        chain2: {
          channelId: 'channel-20',
          portId: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-253',
      connectionId: 'connection-245'
    },
    chain2: {
      chainName: 'odin',
      chainId: 'odin-mainnet-freya',
      clientId: '07-tendermint-122',
      connectionId: 'connection-85'
    },
    channels: [{
        chain1: {
          channelId: 'channel-214',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-211',
      connectionId: 'connection-194'
    },
    chain2: {
      chainName: 'oraichain',
      chainId: 'Oraichain',
      clientId: '07-tendermint-105',
      connectionId: 'connection-82'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-146',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-19',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1703',
      connectionId: 'connection-1298'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-122',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-353',
      connectionId: 'connection-353'
    },
    chain2: {
      chainName: 'penumbra',
      chainId: 'penumbra-1',
      clientId: '07-tendermint-26',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-494',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-18',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-110',
      connectionId: 'connection-91'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-57',
      connectionId: 'connection-53'
    },
    channels: [{
        chain1: {
          channelId: 'channel-82',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-267',
      connectionId: 'connection-268'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-284',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-285',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'icacontroller-delegation-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-286',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-11',
          portId: 'icacontroller-reward-inj'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-287',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'icacontroller-sweep-inj'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-282',
      connectionId: 'connection-286'
    },
    chain2: {
      chainName: 'quicksilver',
      chainId: 'quicksilver-2',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-354',
      connectionId: 'connection-354'
    },
    chain2: {
      chainName: 'safrochain',
      chainId: 'safrochain-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-495',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-126',
      connectionId: 'connection-101'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-298',
      connectionId: 'connection-301'
    },
    chain2: {
      chainName: 'sidechain',
      chainId: 'sidechain-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-431',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-135',
      connectionId: 'connection-108'
    },
    chain2: {
      chainName: 'sommelier',
      chainId: 'sommelier-3',
      clientId: '07-tendermint-4',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-93',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-131',
      connectionId: 'connection-103'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-357',
      connectionId: 'connection-376'
    },
    chain2: {
      chainName: 'terra',
      chainId: 'columbus-5',
      clientId: '07-tendermint-293',
      connectionId: 'connection-182'
    },
    channels: [{
        chain1: {
          channelId: 'channel-497',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-143',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-216',
      connectionId: 'connection-202'
    },
    chain2: {
      chainName: 'terra2',
      chainId: 'phoenix-1',
      clientId: '07-tendermint-369',
      connectionId: 'connection-311'
    },
    channels: [{
        chain1: {
          channelId: 'channel-151',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-255',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-322',
      connectionId: 'connection-328'
    },
    chain2: {
      chainName: 'thejaynetwork',
      chainId: 'thejaynetwork',
      clientId: '07-tendermint-10',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-450',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-229',
      connectionId: 'connection-217'
    },
    chain2: {
      chainName: 'umee',
      chainId: 'umee-1',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-279',
      connectionId: 'connection-282'
    },
    chain2: {
      chainName: 'xion',
      chainId: 'xion-mainnet-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-387',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-197',
      connectionId: 'connection-182'
    },
    chain2: {
      chainName: 'xpla',
      chainId: 'dimension_37-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-137',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-314',
      connectionId: 'connection-314'
    },
    chain2: {
      chainName: 'xrplevm',
      chainId: 'xrplevm_1440000-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-436',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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
    chain1: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-330',
      connectionId: 'connection-335'
    },
    chain2: {
      chainName: 'zigchain',
      chainId: 'zigchain-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-456',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'transfer'
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