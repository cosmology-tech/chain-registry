import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-44',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-23',
      connectionId: 'connection-16'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'carbon',
      clientId: '07-tendermint-53',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-151',
      connectionId: 'connection-114'
    },
    channels: [{
        chain1: {
          channelId: 'channel-28',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-68',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-384',
      connectionId: 'connection-338'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-31',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-182',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-67',
      connectionId: 'connection-61'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-86',
      connectionId: 'connection-70'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-650',
      connectionId: 'connection-197'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-32',
      connectionId: 'connection-23'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'emoney',
      clientId: '07-tendermint-10',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'irisnet',
      clientId: '07-tendermint-46',
      connectionId: 'connection-34'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-5',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-5',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'irisnet',
      clientId: '07-tendermint-34',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-31',
      connectionId: 'connection-25'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-35',
      connectionId: 'connection-26'
    },
    chain2: {
      chainName: 'regen',
      clientId: '07-tendermint-25',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-36',
      connectionId: 'connection-28'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-54',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-42',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'sifchain',
      clientId: '07-tendermint-19',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-63',
      connectionId: 'connection-44'
    },
    chain2: {
      chainName: 'stafihub',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-44',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'starname',
      clientId: '07-tendermint-41',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      clientId: '07-tendermint-93',
      connectionId: 'connection-72'
    },
    chain2: {
      chainName: 'uptick',
      clientId: '07-tendermint-8',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;