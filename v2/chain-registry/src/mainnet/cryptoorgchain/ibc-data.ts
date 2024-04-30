import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-48',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-65',
      connectionId: 'connection-38'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-21',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-389',
      connectionId: 'connection-342'
    },
    chain2: {
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-735',
      connectionId: 'connection-220'
    },
    channels: [{
        chain1: {
          channelId: 'channel-187',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-27',
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
      clientId: '07-tendermint-77',
      connectionId: 'connection-65'
    },
    chain2: {
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-1153',
      connectionId: 'connection-277'
    },
    channels: [{
        chain1: {
          channelId: 'channel-40',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-61',
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
      clientId: '07-tendermint-1136',
      connectionId: 'connection-260'
    },
    chain2: {
      chainName: 'evmos',
      clientId: '07-tendermint-85',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-57',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-31',
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
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-33',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-4',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-61',
      connectionId: 'connection-34'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-24',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
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
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-732',
      connectionId: 'connection-218'
    },
    chain2: {
      chainName: 'regen',
      clientId: '07-tendermint-28',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-25',
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
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-63',
      connectionId: 'connection-36'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-43',
      connectionId: 'connection-28'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-1103',
      connectionId: 'connection-239'
    },
    chain2: {
      chainName: 'sifchain',
      clientId: '07-tendermint-20',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
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
      chainName: 'cryptoorgchain',
      clientId: '07-tendermint-66',
      connectionId: 'connection-39'
    },
    chain2: {
      chainName: 'starname',
      clientId: '07-tendermint-16',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {

        }
      }]
  }
];
export default info;