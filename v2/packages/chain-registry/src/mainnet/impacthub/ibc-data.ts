import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-168',
      connectionId: 'connection-150'
    },
    chain2: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-54',
      connectionId: 'connection-40'
    },
    channels: [{
        chain1: {
          channelId: 'channel-114',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-23',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-434',
      connectionId: 'connection-368'
    },
    chain2: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-204',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-65',
      connectionId: 'connection-48'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-361',
      connectionId: 'connection-382'
    },
    channels: [{
        chain1: {
          channelId: 'channel-31',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-502',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-59',
      connectionId: 'connection-43'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-20',
      connectionId: 'connection-29'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-12',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1451',
      connectionId: 'connection-1137'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-38',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'impacthub',
      chainId: 'ixo-5',
      clientId: '07-tendermint-25',
      connectionId: 'connection-25'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-39',
      connectionId: 'connection-18'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'INACTIVE'
        }
      }]
  }
];
export default info;