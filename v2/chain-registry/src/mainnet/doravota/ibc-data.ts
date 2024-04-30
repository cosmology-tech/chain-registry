import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-183',
      connectionId: 'connection-171'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-17',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-125',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-66',
      connectionId: 'connection-72'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-20',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-101',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
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
      chainName: 'coreum',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-12',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1191',
      connectionId: 'connection-920'
    },
    chain2: {
      chainName: 'doravota',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-750',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'doravota',
      clientId: '07-tendermint-16',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'dydx',
      clientId: '07-tendermint-15',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
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
      chainName: 'doravota',
      clientId: '07-tendermint-15',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'injective',
      clientId: '07-tendermint-245',
      connectionId: 'connection-239'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-182',
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
      chainName: 'doravota',
      clientId: '07-tendermint-13',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'nolus',
      clientId: '07-tendermint-14',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4092',
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
      chainName: 'doravota',
      clientId: '07-tendermint-0',
      connectionId: 'connection-1'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2959',
      connectionId: 'connection-2454'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2694',
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
      chainName: 'doravota',
      clientId: '07-tendermint-21',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'sei',
      clientId: '07-tendermint-109',
      connectionId: 'connection-153'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-64',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;