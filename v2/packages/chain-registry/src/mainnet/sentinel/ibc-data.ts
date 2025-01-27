import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-45',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-42',
      connectionId: 'connection-27'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'axelar',
      clientId: '07-tendermint-233',
      connectionId: 'connection-224'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-213',
      connectionId: 'connection-163'
    },
    channels: [{
        chain1: {
          channelId: 'channel-165',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-96',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-388',
      connectionId: 'connection-341'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-58',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-186',
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
      chainName: 'decentr',
      clientId: '07-tendermint-13',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-103',
      connectionId: 'connection-81'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-55',
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
      chainName: 'medasdigital',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-110',
      connectionId: 'connection-87'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-60',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'persistence',
      clientId: '07-tendermint-34',
      connectionId: 'connection-28'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-61',
      connectionId: 'connection-36'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
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
      chainName: 'regen',
      clientId: '07-tendermint-31',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-56',
      connectionId: 'connection-32'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-14',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'sentinel',
      clientId: '07-tendermint-96',
      connectionId: 'connection-75'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'sentinel',
      clientId: '07-tendermint-84',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'sifchain',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'sentinel',
      clientId: '07-tendermint-88',
      connectionId: 'connection-70'
    },
    chain2: {
      chainName: 'starname',
      clientId: '07-tendermint-46',
      connectionId: 'connection-32'
    },
    channels: [{
        chain1: {
          channelId: 'channel-40',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
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