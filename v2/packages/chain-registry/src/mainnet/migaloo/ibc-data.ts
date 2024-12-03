import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-180',
      connectionId: 'connection-158'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-101',
      connectionId: 'connection-80'
    },
    channels: [{
        chain1: {
          channelId: 'channel-121',
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
      chainName: 'chihuahua',
      clientId: '07-tendermint-126',
      connectionId: 'connection-81'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-21',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
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
      chainName: 'comdex',
      clientId: '07-tendermint-139',
      connectionId: 'connection-71'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-25',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-10',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-139',
      connectionId: 'connection-109'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-142',
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
      clientId: '07-tendermint-154',
      connectionId: 'connection-123'
    },
    chain2: {
      chainName: 'migaloo',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-310',
      connectionId: 'connection-282'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-210',
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
      chainName: 'kava',
      clientId: '07-tendermint-125',
      connectionId: 'connection-162'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-90',
      connectionId: 'connection-73'
    },
    channels: [{
        chain1: {
          channelId: 'channel-120',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'kujira',
      clientId: '07-tendermint-82',
      connectionId: 'connection-59'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-16',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-58',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-3',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2669',
      connectionId: 'connection-2171'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-642',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-108',
      connectionId: 'connection-84'
    },
    chain2: {
      chainName: 'sei',
      clientId: '07-tendermint-22',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-122',
      connectionId: 'connection-92'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-244',
      connectionId: 'connection-151'
    },
    channels: [{
        chain1: {
          channelId: 'channel-114',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
          portId: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc'
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
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-105',
      connectionId: 'connection-93'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-86',
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
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
  }
];
export default info;