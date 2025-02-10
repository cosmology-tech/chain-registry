import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshubtestnet',
      clientId: '07-tendermint-3730',
      connectionId: 'connection-3782'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-10',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4300',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      chainName: 'junotestnet',
      clientId: '07-tendermint-789',
      connectionId: 'connection-868'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-28',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-943',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-3946',
      connectionId: 'connection-3419'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8743',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'stargazetestnet',
      clientId: '07-tendermint-952',
      connectionId: 'connection-947'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-998',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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