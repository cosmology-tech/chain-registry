import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-119',
      connection_id: 'connection-156'
    },
    chain_2: {
      chain_name: 'kujira',
      client_id: '07-tendermint-140',
      connection_id: 'connection-106'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-116',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-95',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-125',
      connection_id: 'connection-162'
    },
    chain_2: {
      chain_name: 'migaloo',
      client_id: '07-tendermint-90',
      connection_id: 'connection-73'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-120',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-48',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-151',
      connection_id: 'connection-194'
    },
    chain_2: {
      chain_name: 'neutron',
      client_id: '07-tendermint-54',
      connection_id: 'connection-37'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-136',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-36',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-2',
      connection_id: 'connection-1'
    },
    chain_2: {
      chain_name: 'osmosis',
      client_id: '07-tendermint-1735',
      connection_id: 'connection-1328'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-1',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-143',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-148',
      connection_id: 'connection-189'
    },
    chain_2: {
      chain_name: 'persistence',
      client_id: '07-tendermint-156',
      connection_id: 'connection-195'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-134',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-129',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-146',
      connection_id: 'connection-181'
    },
    chain_2: {
      chain_name: 'sei',
      client_id: '07-tendermint-38',
      connection_id: 'connection-33'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-132',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-18',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-156',
      connection_id: 'connection-196'
    },
    chain_2: {
      chain_name: 'terra2',
      client_id: '07-tendermint-386',
      connection_id: 'connection-362'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-138',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-272',
          port_id: 'transfer'
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
    chain_1: {
      chain_name: 'kava',
      client_id: '07-tendermint-124',
      connection_id: 'connection-160'
    },
    chain_2: {
      chain_name: 'umee',
      client_id: '07-tendermint-229',
      connection_id: 'connection-191'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-119',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-98',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }
];
export default info;