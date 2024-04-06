import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
      },
      {
        chain_1: {
          channel_id: 'channel-103',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-129',
          port_id: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
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
      client_id: '07-tendermint-122',
      connection_id: 'connection-92'
    },
    chain_2: {
      chain_name: 'terra',
      client_id: '07-tendermint-244',
      connection_id: 'connection-151'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-114',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-87',
          port_id:
            'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
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
  }
];
export default info;
