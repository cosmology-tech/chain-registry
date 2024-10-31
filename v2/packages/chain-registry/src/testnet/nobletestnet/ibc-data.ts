import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-9',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-28',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-19',
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
      chainName: 'mantrachaintestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-294',
      connectionId: 'connection-247'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-209',
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-42',
      connectionId: 'connection-31'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1374',
      connectionId: 'connection-1275'
    },
    channels: [{
        chain1: {
          channelId: 'channel-22',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4280',
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-4504',
      connectionId: 'connection-3905'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3651',
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-319',
      connectionId: 'connection-269'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-222',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'nobletestnet',
      clientId: '07-tendermint-44',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'seitestnet2',
      clientId: '07-tendermint-127',
      connectionId: 'connection-107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-75',
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-293',
      connectionId: 'connection-246'
    },
    chain2: {
      chainName: 'titantestnet',
      clientId: '07-tendermint-9',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-208',
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
      chainName: 'nobletestnet',
      clientId: '07-tendermint-224',
      connectionId: 'connection-176'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-120',
      connectionId: 'connection-56'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-489',
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