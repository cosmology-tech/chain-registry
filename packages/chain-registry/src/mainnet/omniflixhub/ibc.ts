import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-39',
      connection_id: 'connection-42'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-49',
      connection_id: 'connection-43'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-37',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-32',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-656',
      connection_id: 'connection-501'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-23',
      connection_id: 'connection-19'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-306',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-12',
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
      client_id: '07-tendermint-108',
      connection_id: 'connection-78'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-43',
      connection_id: 'connection-36'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-70',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-26',
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
      chain_name: 'noble',
      client_id: '07-tendermint-68',
      connection_id: 'connection-65'
    },
    chain_2: {
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-51',
      connection_id: 'connection-49'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-44',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-38',
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
      chain_name: 'omniflixhub',
      client_id: '07-tendermint-8',
      connection_id: 'connection-8'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1829',
      connection_id: 'connection-1431'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-199',
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
  }
];
export default info;
