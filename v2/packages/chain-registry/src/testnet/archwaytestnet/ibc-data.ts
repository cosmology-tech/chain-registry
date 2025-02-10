import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'akashtestnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-45',
      connectionId: 'connection-39'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-70',
      connectionId: 'connection-60'
    },
    chain2: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-603',
      connectionId: 'connection-418'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-305',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-0',
      connectionId: 'connection-119'
    },
    chain2: {
      chainName: 'jackaltestnet2',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-368',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-121',
      connectionId: 'connection-120'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3459',
      connectionId: 'connection-3027'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-225',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7779',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      },
      {
        chain1: {
          channelId: '*',
          portId: 'wasm.*'
        },
        chain2: {
          channelId: '*',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live'
        }
      },
      {
        chain1: {
          channelId: '*',
          portId: 'wasm.*'
        },
        chain2: {
          channelId: '*',
          portId: 'icqhost'
        },
        ordering: 'unordered',
        version: 'icq-1',
        tags: {
          status: 'live'
        }
      }
    ]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'archwaytestnet',
      clientId: '07-tendermint-139',
      connectionId: 'connection-144'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-25',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-495',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }
];
export default info;