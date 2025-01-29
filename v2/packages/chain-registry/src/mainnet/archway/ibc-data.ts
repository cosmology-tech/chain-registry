import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      clientId: '07-tendermint-75',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'archway',
      clientId: '07-tendermint-23',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-60',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
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
      chainName: 'akash',
      clientId: '07-tendermint-166',
      connectionId: 'connection-146'
    },
    chain2: {
      chainName: 'archway',
      clientId: '07-tendermint-26',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-109',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-26',
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
      chainName: 'andromeda',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'archway',
      clientId: '07-tendermint-58',
      connectionId: 'connection-68'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
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
      clientId: '07-tendermint-16',
      connectionId: 'connection-17'
    },
    chain2: {
      chainName: 'axelar',
      clientId: '07-tendermint-160',
      connectionId: 'connection-145'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-111',
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
      chainName: 'archway',
      clientId: '07-tendermint-114',
      connectionId: 'connection-107'
    },
    chain2: {
      chainName: 'beezee',
      clientId: '07-tendermint-8',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'archway',
      clientId: '07-tendermint-37',
      connectionId: 'connection-40'
    },
    chain2: {
      chainName: 'bitcanna',
      clientId: '07-tendermint-83',
      connectionId: 'connection-74'
    },
    channels: [{
        chain1: {
          channelId: 'channel-35',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-92',
      connectionId: 'connection-90'
    },
    chain2: {
      chainName: 'bitsong',
      clientId: '07-tendermint-80',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-124',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-29',
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
      chainName: 'archway',
      clientId: '07-tendermint-75',
      connectionId: 'connection-79'
    },
    chain2: {
      chainName: 'composable',
      clientId: '07-tendermint-143',
      connectionId: 'connection-63'
    },
    channels: [{
        chain1: {
          channelId: 'channel-108',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
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
      chainName: 'archway',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1152',
      connectionId: 'connection-873'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-623',
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
      chainName: 'archway',
      clientId: '07-tendermint-38',
      connectionId: 'connection-41'
    },
    chain2: {
      chainName: 'decentr',
      clientId: '07-tendermint-21',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      chainName: 'archway',
      clientId: '07-tendermint-113',
      connectionId: 'connection-106'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-22',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-146',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
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
      chainName: 'archway',
      clientId: '07-tendermint-91',
      connectionId: 'connection-89'
    },
    chain2: {
      chainName: 'dymension',
      clientId: '07-tendermint-39',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-123',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-40',
      connectionId: 'connection-43'
    },
    chain2: {
      chainName: 'gravitybridge',
      clientId: '07-tendermint-424',
      connectionId: 'connection-406'
    },
    channels: [{
        chain1: {
          channelId: 'channel-38',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-145',
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
      chainName: 'archway',
      clientId: '07-tendermint-17',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'jackal',
      clientId: '07-tendermint-61',
      connectionId: 'connection-50'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }],
    operators: [{
        chain1: {
          address: 'archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj'
        },
        chain2: {
          address: 'jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8'
        },
        memo: 'by AM Solutions | https://www.theamsolutions.info',
        name: 'AM Solutions',
        discordHandle: 'AlexeyM#5409'
      }, {
        chain1: {
          address: 'archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm'
        },
        chain2: {
          address: 'jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n'
        },
        memo: 'Relayed by NodeStake',
        name: 'NodeStake',
        discordHandle: 'nodestake'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-18',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-387',
      connectionId: 'connection-379'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-290',
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
      chainName: 'archway',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-144',
      connectionId: 'connection-110'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-99',
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
      chainName: 'archway',
      clientId: '07-tendermint-119',
      connectionId: 'connection-114'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-138',
      connectionId: 'connection-108'
    },
    channels: [{
        chain1: {
          channelId: 'channel-184',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-141',
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
      clientId: '07-tendermint-51',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-62',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-61',
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
      chainName: 'archway',
      clientId: '07-tendermint-22',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'nois',
      clientId: '07-tendermint-15',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
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
      }, {
        chain1: {
          channelId: 'channel-19',
          portId: 'wasm.archway10f3aasgsnpv84ymjyld50jayc4ecu267sdpjamauwm8nvxlzex9qj4dkwr'
        },
        chain2: {
          channelId: 'channel-22',
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
      chainName: 'archway',
      clientId: '07-tendermint-39',
      connectionId: 'connection-42'
    },
    chain2: {
      chainName: 'omniflixhub',
      clientId: '07-tendermint-49',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-32',
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
      chainName: 'archway',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2850',
      connectionId: 'connection-2362'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1429',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-82',
      connectionId: 'connection-83'
    },
    chain2: {
      chainName: 'planq',
      clientId: '07-tendermint-561',
      connectionId: 'connection-486'
    },
    channels: [{
        chain1: {
          channelId: 'channel-112',
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
      chainName: 'archway',
      clientId: '07-tendermint-36',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-83',
      connectionId: 'connection-58'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
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
      chainName: 'archway',
      clientId: '07-tendermint-55',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'qwoyn',
      clientId: '07-tendermint-8',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-88',
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
          dex: 'astrovault'
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
      chainName: 'archway',
      clientId: '07-tendermint-42',
      connectionId: 'connection-47'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-384',
      connectionId: 'connection-360'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-265',
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
      chainName: 'archway',
      clientId: '07-tendermint-80',
      connectionId: 'connection-81'
    },
    chain2: {
      chainName: 'vidulum',
      clientId: '07-tendermint-49',
      connectionId: 'connection-46'
    },
    channels: [{
        chain1: {
          channelId: 'channel-110',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
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