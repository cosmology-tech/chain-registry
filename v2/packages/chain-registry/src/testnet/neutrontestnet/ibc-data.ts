import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-338',
      connectionId: 'connection-237'
    },
    chain2: {
      chainName: 'nolustestnet',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1061',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-143',
      connectionId: 'connection-130'
    },
    chain2: {
      chainName: 'nolustestnet1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-208',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1990',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  },
  {
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'neutrontestnet',
      clientId: '07-tendermint-133',
      connectionId: 'connection-123'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1272',
      connectionId: 'connection-1172'
    },
    channels: [{
        chain1: {
          channelId: 'channel-196',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4172',
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