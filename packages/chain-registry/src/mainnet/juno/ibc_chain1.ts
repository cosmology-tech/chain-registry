import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
  }
];
export default info;
