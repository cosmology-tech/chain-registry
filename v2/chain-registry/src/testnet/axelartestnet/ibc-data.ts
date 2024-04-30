import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
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
    $schema: '../ibc_data.schema.json',
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
    $schema: '../ibc_data.schema.json',
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
    $schema: '../ibc_data.schema.json',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelartestnet',
      clientId: '07-tendermint-767',
      connectionId: 'connection-581'
    },
    chain2: {
      chainName: 'sagatestnet',
      clientId: '07-tendermint-11',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-370',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      clientId: '07-tendermint-858',
      connectionId: 'connection-663'
    },
    chain2: {
      chainName: 'titantestnet',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-448',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-895',
      connectionId: 'connection-685'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-118',
      connectionId: 'connection-54'
    },
    channels: [{
        chain1: {
          channelId: 'channel-462',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-486',
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