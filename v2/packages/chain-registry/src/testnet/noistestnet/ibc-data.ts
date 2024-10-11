import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../../ibc_data.schema.json',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'junotestnet',
      clientId: '07-tendermint-170',
      connectionId: 'connection-178'
    },
    chain2: {
      chainName: 'noistestnet',
      clientId: '07-tendermint-16',
      connectionId: 'connection-5'
    },
    channels: [{
        chain1: {
          channelId: 'channel-877',
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
      }, {
        chain1: {
          channelId: 'channel-198',
          portId: 'wasm.juno1pjpntyvkxeuxd709jlupuea3xzxlzsfq574kqefv77fr2kcg4mcqvwqedq'
        },
        chain2: {
          channelId: 'channel-17',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-102',
      connectionId: 'connection-93'
    },
    chain2: {
      chainName: 'noistestnet',
      clientId: '07-tendermint-30',
      connectionId: 'connection-17'
    },
    channels: [{
        chain1: {
          channelId: 'channel-133',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-40',
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
          channelId: 'channel-135',
          portId: 'wasm.neutron1tw9sg9e4l09l5rjglf4qfvcft470ljk5grdq3luagysyk83nzfusw2sxgq'
        },
        chain2: {
          channelId: 'channel-42',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'noistestnet',
      clientId: '07-tendermint-39',
      connectionId: 'connection-23'
    },
    chain2: {
      chainName: 'stargazetestnet',
      clientId: '07-tendermint-483',
      connectionId: 'connection-500'
    },
    channels: [{
        chain1: {
          channelId: 'channel-48',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-485',
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
          channelId: 'channel-49',
          portId: 'wasm.nois1xwde9rzqk5u36fke0r9ddmtwvh43n4fv53c5vc462wz8xlnqjhls6d90xc'
        },
        chain2: {
          channelId: 'channel-486',
          portId: 'wasm.stars1h99p7u2tvz79jppjwdddmkplvcpnsh0pmatl7dqkmdhnkgx59y2q6s0x9s'
        },
        ordering: 'unordered',
        version: 'nois-v7',
        tags: {
          status: 'live',
          preferred: true
        }
      }]
  }
];
export default info;