import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'axelar',
      client_id: '07-tendermint-150',
      connection_id: 'connection-135'
    },
    chain_2: {
      chain_name: 'odin',
      client_id: '07-tendermint-66',
      connection_id: 'connection-151'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-102',
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
      chain_name: 'injective',
      client_id: '07-tendermint-253',
      connection_id: 'connection-245'
    },
    chain_2: {
      chain_name: 'odin',
      client_id: '07-tendermint-122',
      connection_id: 'connection-85'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-214',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-65',
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
      client_id: '07-tendermint-166',
      connection_id: 'connection-129'
    },
    chain_2: {
      chain_name: 'odin',
      client_id: '07-tendermint-114',
      connection_id: 'connection-83'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-157',
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
          dex: 'kujira'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'odin',
      client_id: '07-tendermint-113',
      connection_id: 'connection-9'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-2007',
      connection_id: 'connection-1551'
    },
    channels: [
      {
        chain_1: {
          channel_id: 'channel-3',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-258',
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
