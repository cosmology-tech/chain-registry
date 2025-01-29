import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-17',
      connectionId: 'connection-18'
    },
    chain2: {
      chainName: 'jackal',
      clientId: '07-tendermint-61',
      connectionId: 'connection-50'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }],
    operators: [{
        chain1: {
          address: 'archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj'
        },
        chain2: {
          address: 'jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8'
        },
        memo: 'by AM Solutions | https://www.theamsolutions.info',
        name: 'AM Solutions',
        discordHandle: 'AlexeyM#5409'
      }, {
        chain1: {
          address: 'archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm'
        },
        chain2: {
          address: 'jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n'
        },
        memo: 'Relayed by NodeStake',
        name: 'NodeStake',
        discordHandle: 'nodestake'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-235',
      connectionId: 'connection-225'
    },
    chain2: {
      chainName: 'jackal',
      clientId: '07-tendermint-80',
      connectionId: 'connection-66'
    },
    channels: [{
        chain1: {
          channelId: 'channel-168',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-153',
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
      chainName: 'beezee',
      clientId: '07-tendermint-10',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'jackal',
      clientId: '07-tendermint-79',
      connectionId: 'connection-65'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-142',
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
      clientId: '07-tendermint-111',
      connectionId: 'connection-97'
    },
    chain2: {
      chainName: 'jackal',
      clientId: '07-tendermint-56',
      connectionId: 'connection-46'
    },
    channels: [{
        chain1: {
          channelId: 'channel-63',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-38',
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
      chainName: 'jackal',
      clientId: '07-tendermint-57',
      connectionId: 'connection-47'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-139',
      connectionId: 'connection-105'
    },
    channels: [{
        chain1: {
          channelId: 'channel-39',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-94',
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
      chainName: 'jackal',
      clientId: '07-tendermint-2',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-2273',
      connectionId: 'connection-1762'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-412',
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
      chainName: 'jackal',
      clientId: '07-tendermint-6',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-124',
      connectionId: 'connection-94'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-62',
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