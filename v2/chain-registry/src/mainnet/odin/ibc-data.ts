import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-150',
      connectionId: 'connection-135'
    },
    chain2: {
      chainName: 'odin',
      clientId: '07-tendermint-66',
      connectionId: 'connection-151'
    },
    channels: [{
        chain1: {
          channelId: 'channel-102',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      clientId: '07-tendermint-253',
      connectionId: 'connection-245'
    },
    chain2: {
      chainName: 'odin',
      clientId: '07-tendermint-122',
      connectionId: 'connection-85'
    },
    channels: [{
        chain1: {
          channelId: 'channel-214',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
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
      clientId: '07-tendermint-166',
      connectionId: 'connection-129'
    },
    chain2: {
      chainName: 'odin',
      clientId: '07-tendermint-114',
      connectionId: 'connection-83'
    },
    channels: [{
        chain1: {
          channelId: 'channel-157',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'kujira'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'odin',
      clientId: '07-tendermint-113',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2007',
      connectionId: 'connection-1551'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-258',
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
  }
];
export default info;