import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-53',
      connectionId: 'connection-52'
    },
    chain2: {
      chainName: 'mars',
      clientId: '07-tendermint-14',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-35',
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
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-300',
      connectionId: 'connection-270'
    },
    chain2: {
      chainName: 'mars',
      clientId: '07-tendermint-11',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-209',
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
      chainName: 'kujira',
      clientId: '07-tendermint-78',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'mars',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-55',
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
      chainName: 'mars',
      clientId: '07-tendermint-64',
      connectionId: 'connection-50'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-21',
      connectionId: 'connection-21'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-16',
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
      chainName: 'mars',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2602',
      connectionId: 'connection-2114'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-557',
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
      chainName: 'mars',
      clientId: '07-tendermint-10',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-104',
      connectionId: 'connection-91'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-78',
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