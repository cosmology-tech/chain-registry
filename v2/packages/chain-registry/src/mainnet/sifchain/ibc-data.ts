import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-61',
      connectionId: 'connection-36'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-395',
      connectionId: 'connection-347'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-192',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cryptoorgchain',
      chainId: 'crypto-org-chain-mainnet-1',
      clientId: '07-tendermint-1103',
      connectionId: 'connection-239'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-20',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'irisnet',
      chainId: 'irishub-1',
      clientId: '07-tendermint-42',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-19',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-19',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      chainId: 'juno-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-37',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1484',
      connectionId: 'connection-1159'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-41',
      connectionId: 'connection-20'
    },
    channels: [{
        chain1: {
          channelId: 'channel-47',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-17',
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
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-38',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-18',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-26',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'regen',
      chainId: 'regen-1',
      clientId: '07-tendermint-73',
      connectionId: 'connection-60'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-28',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-37',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-171',
      connectionId: 'connection-98'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-65',
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
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-84',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'sifchain',
      chainId: 'sifchain-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  }
];
export default info;