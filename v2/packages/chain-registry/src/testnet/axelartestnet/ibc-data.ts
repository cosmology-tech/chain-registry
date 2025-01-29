import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'axelartestnet',
      clientId: '07-tendermint-594',
      connectionId: 'connection-410'
    },
    chain2: {
      chainName: 'dydxtestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-297',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-855',
      connectionId: 'connection-659'
    },
    chain2: {
      chainName: 'lavatestnet',
      clientId: '07-tendermint-10',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-444',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1083',
      connectionId: 'connection-843'
    },
    chain2: {
      chainName: 'manifesttestnet',
      clientId: '07-tendermint-7',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-590',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1009',
      connectionId: 'connection-783'
    },
    chain2: {
      chainName: 'mantrachaintestnet',
      clientId: '07-tendermint-7',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-540',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-685',
      connectionId: 'connection-538'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1270',
      connectionId: 'connection-1169'
    },
    channels: [{
        chain1: {
          channelId: 'channel-339',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4170',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-213',
      connectionId: 'connection-151'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-3319',
      connectionId: 'connection-2807'
    },
    channels: [{
        chain1: {
          channelId: 'channel-135',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1946',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-522',
      connectionId: 'connection-372'
    },
    chain2: {
      chainName: 'persistencetestnet2',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-261',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1045',
      connectionId: 'connection-806'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-564',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1047',
      connectionId: 'connection-808'
    },
    chain2: {
      chainName: 'sagatestnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-566',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-1001',
      connectionId: 'connection-780'
    },
    chain2: {
      chainName: 'titantestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-537',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
          portId: 'transfer'
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-970',
      connectionId: 'connection-752'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-127',
      connectionId: 'connection-64'
    },
    channels: [{
        chain1: {
          channelId: 'channel-521',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-225057',
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