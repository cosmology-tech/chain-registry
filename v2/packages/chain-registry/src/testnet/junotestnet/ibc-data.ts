import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
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
      chainName: 'junotestnet',
      clientId: '07-tendermint-743',
      connectionId: 'connection-827'
    },
    chain2: {
      chainName: 'osmosistestnet',
      clientId: '07-tendermint-1932',
      connectionId: 'connection-1889'
    },
    channels: [{
        chain1: {
          channelId: 'channel-889',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5498',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'junotestnet',
      clientId: '07-tendermint-135',
      connectionId: 'connection-151'
    },
    chain2: {
      chainName: 'osmosistestnet4',
      clientId: '07-tendermint-4413',
      connectionId: 'connection-3814'
    },
    channels: [{
        chain1: {
          channelId: 'channel-140',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3316',
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
    $schema: '../../ibc_data.schema.json',
    chain1: {
      chainName: 'junotestnet',
      clientId: '07-tendermint-794',
      connectionId: 'connection-872'
    },
    chain2: {
      chainName: 'symphonytestnet',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-946',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'junotestnet',
      clientId: '07-tendermint-789',
      connectionId: 'connection-868'
    },
    chain2: {
      chainName: 'symphonytestnet3',
      clientId: '07-tendermint-28',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-943',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
          portId: 'transfer'
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