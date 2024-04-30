import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-13',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-172',
      connectionId: 'connection-99'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-69',
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
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-101',
      connectionId: 'connection-70'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-49',
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
      clientId: '07-tendermint-63',
      connectionId: 'connection-43'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-32',
      connectionId: 'connection-34'
    },
    channels: [{
        chain1: {
          channelId: 'channel-27',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-122',
      connectionId: 'connection-92'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-244',
      connectionId: 'connection-151'
    },
    channels: [{
        chain1: {
          channelId: 'channel-114',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
          portId: 'wasm.terra19pfxzj9580h7rjd6z6sn5x2se76vgrc0etltr79g9z3t82jzp4hq63qguc'
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
      chainName: 'osmosis',
      clientId: '07-tendermint-1215',
      connectionId: 'connection-1549'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-12',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-72',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'terra',
      clientId: '07-tendermint-28',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
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
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'terra',
      clientId: '07-tendermint-235',
      connectionId: 'connection-142'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-394',
      connectionId: 'connection-384'
    },
    channels: [{
        chain1: {
          channelId: 'channel-85',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-314',
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