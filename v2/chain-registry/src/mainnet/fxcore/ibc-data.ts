import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-188',
      connectionId: 'connection-166'
    },
    chain2: {
      chainName: 'fxcore',
      clientId: '07-tendermint-24',
      connectionId: 'connection-23'
    },
    channels: [{
        chain1: {
          channelId: 'channel-128',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-20',
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
      clientId: '07-tendermint-1141',
      connectionId: 'connection-829'
    },
    chain2: {
      chainName: 'fxcore',
      clientId: '07-tendermint-13',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-585',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'fxcore',
      clientId: '07-tendermint-23',
      connectionId: 'connection-22'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2961',
      connectionId: 'connection-2456'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2716',
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
      chainName: 'fxcore',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'pundix',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
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
  }
];
export default info;