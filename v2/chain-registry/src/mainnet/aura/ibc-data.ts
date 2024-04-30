import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'aura',
      clientId: '07-tendermint-17',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'axelar',
      clientId: '07-tendermint-152',
      connectionId: 'connection-137'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-104',
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
      chainName: 'aura',
      clientId: '07-tendermint-24',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1158',
      connectionId: 'connection-880'
    },
    channels: [{
        chain1: {
          channelId: 'channel-6',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-646',
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
      chainName: 'aura',
      clientId: '07-tendermint-26',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'kava',
      clientId: '07-tendermint-133',
      connectionId: 'connection-168'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-124',
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
      chainName: 'aura',
      clientId: '07-tendermint-43',
      connectionId: 'connection-27'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-66',
      connectionId: 'connection-63'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
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
      chainName: 'aura',
      clientId: '07-tendermint-13',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'nois',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
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
      }, {
        chain1: {
          channelId: 'channel-8',
          portId: 'wasm.aura1r3zgdsn3dcze07a4r60rxxx7ppvkxfshn9np0pwtkgarrld0786s72jtjt'
        },
        chain2: {
          channelId: 'channel-35',
          portId: 'wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp'
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
      chainName: 'aura',
      clientId: '07-tendermint-47',
      connectionId: 'connection-33'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-3054',
      connectionId: 'connection-2551'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11304',
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
      chainName: 'aura',
      clientId: '07-tendermint-48',
      connectionId: 'connection-47'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-339',
      connectionId: 'connection-288'
    },
    channels: [{
        chain1: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-270',
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
          channelId: 'channel-24',
          portId: 'wasm.aura1y3244guwexyvn6yx6kqkj5s0f56lzfdnuja3culygnuwxgrxyuqsaz4xvv'
        },
        chain2: {
          channelId: 'channel-271',
          portId: 'wasm.stars1r0a8ygvnjfaegy4n5z9325e0ew9uy2s7rn4vt7qf4ltv49fj4tnsk6pvtv'
        },
        ordering: 'unordered',
        version: 'ics721-1',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;