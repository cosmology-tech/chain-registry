import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'archway',
      client_id: '07-tendermint-92',
      connection_id: 'connection-90'
    },
    chain_2: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-80',
      connection_id: 'connection-55'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-124',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-29',
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
      chain_name: 'axelar',
      client_id: '07-tendermint-201',
      connection_id: 'connection-182'
    },
    chain_2: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-79',
      connection_id: 'connection-54'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-140',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-28',
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
      chain_name: 'bitcanna',
      client_id: '07-tendermint-0',
      connection_id: 'connection-19'
    },
    chain_2: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-1237',
      connection_id: 'connection-1132'
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
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-1',
      connection_id: 'connection-2'
    },
    chain_2: {
      chain_name: 'cosmoshub',
      client_id: '07-tendermint-481',
      connection_id: 'connection-395'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-1',
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
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'bitsong',
      client_id: '07-tendermint-9',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'juno',
      client_id: '07-tendermint-33',
      connection_id: 'connection-26'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-5',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-17',
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
      chain_name: 'bitsong',
      client_id: '07-tendermint-0',
      connection_id: 'connection-0'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1551',
      connection_id: 'connection-1216'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-73',
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
