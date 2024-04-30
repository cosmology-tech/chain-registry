import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-12',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'oraichain',
      clientId: '07-tendermint-74',
      connectionId: 'connection-42'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
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
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-651',
      connectionId: 'connection-497'
    },
    chain2: {
      chainName: 'oraichain',
      clientId: '07-tendermint-47',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-301',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'oraidex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'injective',
      clientId: '07-tendermint-211',
      connectionId: 'connection-194'
    },
    chain2: {
      chainName: 'oraichain',
      clientId: '07-tendermint-105',
      connectionId: 'connection-82'
    },
    channels: [{
        chain1: {
          channelId: 'channel-147',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-146',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'oraidex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'noble',
      clientId: '07-tendermint-60',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'oraichain',
      clientId: '07-tendermint-106',
      connectionId: 'connection-83'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-147',
          portId: 'wasm.orai195269awwnt5m6c843q6w7hp8rt0k7syfu9de4h0wz384slshuzps8y7ccm'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'oraidex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'oraichain',
      clientId: '07-tendermint-49',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1882',
      connectionId: 'connection-1464'
    },
    channels: [{
        chain1: {
          channelId: 'channel-13',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-216',
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
      chainName: 'oraichain',
      clientId: '07-tendermint-178',
      connectionId: 'connection-142'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-195',
      connectionId: 'connection-190'
    },
    channels: [{
        chain1: {
          channelId: 'channel-135',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-217',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-140',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-222',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }]
  }
];
export default info;