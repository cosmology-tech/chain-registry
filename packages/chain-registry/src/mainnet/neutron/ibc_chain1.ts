import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
      client_id: '07-tendermint-83',
      connection_id: 'connection-62'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-20',
      connection_id: 'connection-13'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-722',
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
      },
      {
        chain_1: {
          channel_id: 'channel-1559',
          port_id:
            'wasm.neutron14cwv7d4lwc69zrjrzywwh8c9327m8dpngpq52f5kgqephhgrjc2s9ry3eu'
        },
        chain_2: {
          channel_id: 'channel-48',
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
      client_id: '07-tendermint-85',
      connection_id: 'connection-63'
    },
    chain_2: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-199',
      connection_id: 'connection-192'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1551',
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
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'neutron',
      client_id: '07-tendermint-89',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-123',
      connection_id: 'connection-157'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-2016',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-66',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
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
  }
];
export default info;
