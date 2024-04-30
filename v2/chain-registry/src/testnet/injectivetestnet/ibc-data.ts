import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injectivetestnet',
      clientId: '07-tendermint-123',
      connectionId: 'connection-98'
    },
    chain2: {
      chainName: 'noistestnet',
      clientId: '07-tendermint-26',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-74',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-33',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }, {
        chain1: {
          channelId: 'channel-77',
          portId: 'wasm.inj14nendtsz0c40n7xtzwkjmdc8dkuz835jdydxhn'
        },
        chain2: {
          channelId: 'channel-36',
          portId: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injectivetestnet',
      clientId: '07-tendermint-189',
      connectionId: 'connection-180'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1273',
      connectionId: 'connection-1173'
    },
    channels: [{
        chain1: {
          channelId: 'channel-129',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4174',
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
      chainName: 'injectivetestnet',
      clientId: '07-tendermint-239',
      connectionId: 'connection-220'
    },
    chain2: {
      chainName: 'xiontestnet',
      clientId: '07-tendermint-119',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-489',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-487',
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