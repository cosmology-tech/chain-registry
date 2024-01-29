import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-962',
      connection_id: 'connection-1710'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-32',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-431',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-10',
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
      chain_name: 'kujira',
      client_id: '07-tendermint-132',
      connection_id: 'connection-100'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-61',
      connection_id: 'connection-38'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-89',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-30',
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
      chain_name: 'noble',
      client_id: '07-tendermint-76',
      connection_id: 'connection-77'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-97',
      connection_id: 'connection-97'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-54',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-62',
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
      chain_name: 'osmosis',
      client_id: '07-tendermint-2192',
      connection_id: 'connection-1710'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-362',
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
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'secretnetwork',
      client_id: '07-tendermint-192',
      connection_id: 'connection-185'
    },
    chain_2: {
      chain_name: 'teritori',
      client_id: '07-tendermint-99',
      connection_id: 'connection-122'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-111',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-63',
          port_id: 'transfer'
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
  }
];
export default info;
