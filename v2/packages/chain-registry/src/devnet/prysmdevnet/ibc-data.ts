import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'celestiatestnet3',
      clientId: '07-tendermint-615',
      connectionId: 'connection-551'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-138',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'composabletestnet',
      clientId: '07-tendermint-218',
      connectionId: 'connection-127'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-6',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshubtestnet',
      clientId: '07-tendermint-3805',
      connectionId: 'connection-3845'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-18',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4366',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'elystestnet',
      clientId: '07-tendermint-118',
      connectionId: 'connection-80'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-21',
      connectionId: 'connection-14'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'jackaltestnet2',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-4060',
      connectionId: 'connection-3506'
    },
    chain2: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9018',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-16',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'quicksilvertestnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'prysmdevnet',
      clientId: '07-tendermint-29',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'stargazetestnet',
      clientId: '07-tendermint-961',
      connectionId: 'connection-954'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1005',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;