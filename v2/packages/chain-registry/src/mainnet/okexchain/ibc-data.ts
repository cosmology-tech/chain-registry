import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'assetmantle',
      clientId: '07-tendermint-42',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'okexchain',
      clientId: '07-tendermint-92',
      connectionId: 'connection-35'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-30',
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
      chainName: 'chihuahua',
      clientId: '07-tendermint-85',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'okexchain',
      clientId: '07-tendermint-5',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-24',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-44',
      connectionId: 'connection-46'
    },
    chain2: {
      chainName: 'okexchain',
      clientId: '07-tendermint-116',
      connectionId: 'connection-78'
    },
    channels: [{
        chain1: {
          channelId: 'channel-31',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-46',
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
      clientId: '07-tendermint-314',
      connectionId: 'connection-285'
    },
    chain2: {
      chainName: 'okexchain',
      clientId: '07-tendermint-122',
      connectionId: 'connection-92'
    },
    channels: [{
        chain1: {
          channelId: 'channel-212',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-52',
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
      chainName: 'okexchain',
      clientId: '07-tendermint-100',
      connectionId: 'connection-44'
    },
    chain2: {
      chainName: 'vidulum',
      clientId: '07-tendermint-5',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-37',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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