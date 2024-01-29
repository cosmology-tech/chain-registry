import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-17',
      connection_id: 'connection-11'
    },
    chain_2: {
      chain_name: 'axelar',
      client_id: '07-tendermint-152',
      connection_id: 'connection-137'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-4',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'aura',
      client_id: '07-tendermint-24',
      connection_id: 'connection-14'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-1158',
      connection_id: 'connection-880'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-6',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-646',
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
      chain_name: 'aura',
      client_id: '07-tendermint-26',
      connection_id: 'connection-15'
    },
    chain_2: {
      chain_name: 'kava',
      client_id: '07-tendermint-133',
      connection_id: 'connection-168'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-124',
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
      chain_name: 'aura',
      client_id: '07-tendermint-43',
      connection_id: 'connection-27'
    },
    chain_2: {
      chain_name: 'noble',
      client_id: '07-tendermint-66',
      connection_id: 'connection-63'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-41',
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
      chain_name: 'aura',
      client_id: '07-tendermint-13',
      connection_id: 'connection-10'
    },
    chain_2: {
      chain_name: 'nois',
      client_id: '07-tendermint-4',
      connection_id: 'connection-4'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-16',
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
          channel_id: 'channel-8',
          port_id:
            'wasm.aura1r3zgdsn3dcze07a4r60rxxx7ppvkxfshn9np0pwtkgarrld0786s72jtjt'
        },
        chain_2: {
          channel_id: 'channel-35',
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
      chain_name: 'aura',
      client_id: '07-tendermint-47',
      connection_id: 'connection-33'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-3054',
      connection_id: 'connection-2551'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-11304',
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
      chain_name: 'aura',
      client_id: '07-tendermint-48',
      connection_id: 'connection-47'
    },
    chain_2: {
      chain_name: 'stargaze',
      client_id: '07-tendermint-339',
      connection_id: 'connection-288'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-23',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-270',
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
          channel_id: 'channel-24',
          port_id:
            'wasm.aura1y3244guwexyvn6yx6kqkj5s0f56lzfdnuja3culygnuwxgrxyuqsaz4xvv'
        },
        chain_2: {
          channel_id: 'channel-271',
          port_id:
            'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }
    ]
  }
];
export default info;
