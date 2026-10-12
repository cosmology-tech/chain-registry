import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      chain_id: 'axelar-dojo-1',
      client_id: '07-tendermint-168',
      connection_id: 'connection-150'
    },
    chain_2: {
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-54',
      connection_id: 'connection-40'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-114',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-23',
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
      chain_name: 'cosmoshub',
      chain_id: 'cosmoshub-4',
      client_id: '07-tendermint-434',
      connection_id: 'connection-368'
    },
    chain_2: {
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-204',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-1',
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
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-65',
      connection_id: 'connection-48'
    },
    chain_2: {
      chain_name: 'injective',
      chain_id: 'injective-1',
      client_id: '07-tendermint-361',
      connection_id: 'connection-382'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-31',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-502',
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
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-59',
      connection_id: 'connection-43'
    },
    chain_2: {
      chain_name: 'noble',
      chain_id: 'noble-1',
      client_id: '07-tendermint-20',
      connection_id: 'connection-29'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-26',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-15',
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
      chain_name: 'impacthub',
      chain_id: 'ixo-5',
      client_id: '07-tendermint-12',
      connection_id: 'connection-12'
    },
    chain_2: {
      chain_name: 'osmosis',
      chain_id: 'osmosis-1',
      client_id: '07-tendermint-1451',
      connection_id: 'connection-1137'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-4',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
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
  }
];
export default info;