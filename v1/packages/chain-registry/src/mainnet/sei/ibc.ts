import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
    channels: [{
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
      }]
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
    channels: [{
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'doravota',
      client_id: '07-tendermint-21',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-109',
      connection_id: 'connection-153'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-12',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-64',
          port_id: 'transfer'
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
    channels: [{
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
      }]
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
    channels: [{
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
      }]
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
    channels: [{
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
      }, {
        chain_1: {
          channel_id: 'channel-2110',
          port_id: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain_2: {
          channel_id: 'channel-71',
          port_id: 'wasm.sei12fykm2xhg5ces2vmf4q2aem8c958exv3v0wmvrspa8zucrdwjeds2e2ntx'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-64',
      connection_id: 'connection-61'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-45',
      connection_id: 'connection-77'
    },
    channels: [{
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
      }]
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
    channels: [{
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
      }, {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
        },
        chain_2: {
          channel_id: 'channel-59',
          port_id: 'wasm.sei1vxlzhn6qvf95syha2tgr0ct23sk5359s2vqzylgthuyy7kd7ql5qcxa4r0'
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
    channels: [{
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
      }]
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
    channels: [{
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
      }]
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
    channels: [{
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'sei',
      client_id: '07-tendermint-135',
      connection_id: 'connection-160'
    },
    chain_2: {
      chain_name: 'zenrock',
      client_id: '07-tendermint-5',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-78',
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
      }]
  }
];
export default info;