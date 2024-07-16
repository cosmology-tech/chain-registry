import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-224',
      connection_id: 'connection-209'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-7',
      connection_id: 'connection-7'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-155',
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
      chain_name: 'celestia',
      client_id: '07-tendermint-88',
      connection_id: 'connection-57'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-3',
      connection_id: 'connection-3'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-34',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1304',
      connection_id: 'connection-1038'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-859',
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
      },
      {
        chain_1: {
          channel_id: 'channel-863',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'icacontroller-reward-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-861',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'icacontroller-sweep-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-891',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-20',
          port_id: 'icacontroller-delegation-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
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
      client_id: '07-tendermint-267',
      connection_id: 'connection-268'
    },
    chain_2: {
      chain_name: 'pryzm',
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
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
      client_id: '07-tendermint-98',
      connection_id: 'connection-72'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-6',
      connection_id: 'connection-6'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4329',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'noble',
      client_id: '07-tendermint-100',
      connection_id: 'connection-92'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-5',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-79',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3206',
      connection_id: 'connection-2663'
    },
    chain_2: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-2',
      connection_id: 'connection-2'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-75755',
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
      },
      {
        chain_1: {
          channel_id: 'channel-76804',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'icacontroller-reward-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-76805',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-16',
          port_id: 'icacontroller-sweep-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-79080',
          port_id: 'icahost'
        },
        chain_2: {
          channel_id: 'channel-22',
          port_id: 'icacontroller-delegation-uosmo'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'pryzm',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-410',
      connection_id: 'connection-414'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-473',
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
          channel_id: 'channel-17',
          port_id: 'icacontroller-delegation-uluna'
        },
        chain_2: {
          channel_id: 'channel-478',
          port_id: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-18',
          port_id: 'icacontroller-reward-uluna'
        },
        chain_2: {
          channel_id: 'channel-479',
          port_id: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'icacontroller-sweep-uluna'
        },
        chain_2: {
          channel_id: 'channel-480',
          port_id: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  }
];
export default info;