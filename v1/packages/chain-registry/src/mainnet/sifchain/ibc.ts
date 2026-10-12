import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'akash',
      chain_id: 'akashnet-2',
      client_id: '07-tendermint-61',
      connection_id: 'connection-36'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-11',
      connection_id: 'connection-2'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-24',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-395',
      connection_id: 'connection-347'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-192',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cryptoorgchain',
      chain_id: 'crypto-org-chain-mainnet-1',
      client_id: '07-tendermint-1103',
      connection_id: 'connection-239'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-10'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-33',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-9',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-25',
      connection_id: 'connection-25'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-39',
      connection_id: 'connection-18'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-11',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'irisnet',
      chain_id: 'irishub-1',
      client_id: '07-tendermint-42',
      connection_id: 'connection-30'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-19',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-19',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-8',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'juno',
      chain_id: 'juno-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-37',
      connection_id: 'connection-17'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-14',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1484',
      connection_id: 'connection-1159'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-41',
      connection_id: 'connection-20'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-47',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'persistence',
      chain_id: 'core-1',
      client_id: '07-tendermint-38',
      connection_id: 'connection-32'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-18',
      connection_id: 'connection-8'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-7',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'regen',
      chain_id: 'regen-1',
      client_id: '07-tendermint-73',
      connection_id: 'connection-60'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-31',
      connection_id: 'connection-13'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-28',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      chain_id: 'secret-4',
      client_id: '07-tendermint-37',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-171',
      connection_id: 'connection-98'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-15',
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
      chain_name: 'sentinel',
      chain_id: 'sentinelhub-2',
      client_id: '07-tendermint-84',
      connection_id: 'connection-58'
    },
    chain_2: {
      chain_name: 'sifchain',
      chain_id: 'sifchain-1',
      client_id: '07-tendermint-9',
      connection_id: 'connection-1'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-36',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;