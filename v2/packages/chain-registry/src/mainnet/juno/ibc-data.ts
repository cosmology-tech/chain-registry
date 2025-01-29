import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-84',
      connectionId: 'connection-58'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-80',
      connectionId: 'connection-47'
    },
    channels: [{
        chain1: {
          channelId: 'channel-35',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-29',
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
      chainName: 'archway',
      clientId: '07-tendermint-18',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-387',
      connectionId: 'connection-379'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-290',
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
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'assetmantle',
      clientId: '07-tendermint-22',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-167',
      connectionId: 'connection-113'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-83',
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
      chainName: 'axelar',
      clientId: '07-tendermint-25',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-150',
      connectionId: 'connection-97'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-71',
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
      chainName: 'bitcanna',
      clientId: '07-tendermint-12',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-110',
      connectionId: 'connection-70'
    },
    channels: [{
        chain1: {
          channelId: 'channel-10',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-50',
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
      chainName: 'bitsong',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-33',
      connectionId: 'connection-26'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-17',
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
      chainName: 'chihuahua',
      clientId: '07-tendermint-54',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-79',
      connectionId: 'connection-46'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-28',
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
      chainName: 'comdex',
      clientId: '07-tendermint-30',
      connectionId: 'connection-19'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-92',
      connectionId: 'connection-55'
    },
    channels: [{
        chain1: {
          channelId: 'channel-18',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-36',
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
      chainName: 'composable',
      clientId: '07-tendermint-30',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-382',
      connectionId: 'connection-376'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-280',
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
      clientId: '07-tendermint-439',
      connectionId: 'connection-372'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-207',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'crescent',
      clientId: '07-tendermint-5',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-160',
      connectionId: 'connection-107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-81',
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
      chainName: 'dig',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-100',
      connectionId: 'connection-62'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-37',
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
      chainName: 'emoney',
      clientId: '07-tendermint-51',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-24',
      connectionId: 'connection-16'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-9',
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
      chainName: 'furya',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'juno',
      clientId: '07-tendermint-501',
      connectionId: 'connection-505'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-417',
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
      chainName: 'juno',
      clientId: '07-tendermint-198',
      connectionId: 'connection-140'
    },
    chain2: {
      chainName: 'kujira',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-87',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-300',
      connectionId: 'connection-270'
    },
    chain2: {
      chainName: 'mars',
      clientId: '07-tendermint-11',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-209',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'juno',
      clientId: '07-tendermint-310',
      connectionId: 'connection-282'
    },
    chain2: {
      chainName: 'migaloo',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-210',
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
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-557',
      connectionId: 'connection-524'
    },
    chain2: {
      chainName: 'neutron',
      clientId: '07-tendermint-97',
      connectionId: 'connection-71'
    },
    channels: [{
        chain1: {
          channelId: 'channel-548',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4328',
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
      chainName: 'juno',
      clientId: '07-tendermint-334',
      connectionId: 'connection-322'
    },
    chain2: {
      chainName: 'noble',
      clientId: '07-tendermint-3',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-224',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'juno',
      clientId: '07-tendermint-335',
      connectionId: 'connection-325'
    },
    chain2: {
      chainName: 'nois',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-225',
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
          preferred: true
        }
      }, {
        chain1: {
          channelId: 'channel-243',
          portId: 'wasm.juno1qr84ktm57q5t02u04ddk5r8s79axdzglad6tfdd9g2xgt4hkh6jsgeq9x2'
        },
        chain2: {
          channelId: 'channel-2',
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
      chainName: 'juno',
      clientId: '07-tendermint-314',
      connectionId: 'connection-285'
    },
    chain2: {
      chainName: 'okexchain',
      clientId: '07-tendermint-122',
      connectionId: 'connection-92'
    },
    channels: [{
        chain1: {
          channelId: 'channel-212',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-52',
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
      chainName: 'juno',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'osmosis',
      clientId: '07-tendermint-1457',
      connectionId: 'connection-1142'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-42',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }, {
        chain1: {
          channelId: 'channel-47',
          portId: 'wasm.juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn'
        },
        chain2: {
          channelId: 'channel-169',
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
      chainName: 'juno',
      clientId: '07-tendermint-89',
      connectionId: 'connection-51'
    },
    chain2: {
      chainName: 'persistence',
      clientId: '07-tendermint-49',
      connectionId: 'connection-48'
    },
    channels: [{
        chain1: {
          channelId: 'channel-33',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-37',
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
      chainName: 'juno',
      clientId: '07-tendermint-318',
      connectionId: 'connection-309'
    },
    chain2: {
      chainName: 'quicksilver',
      clientId: '07-tendermint-17',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-215',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-22',
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
      chainName: 'juno',
      clientId: '07-tendermint-108',
      connectionId: 'connection-68'
    },
    chain2: {
      chainName: 'secretnetwork',
      clientId: '07-tendermint-23',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-48',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-8',
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
          channelId: 'channel-163',
          portId: 'transfer',
          clientId: '07-tendermint-108',
          connectionId: 'connection-68'
        },
        chain2: {
          channelId: 'channel-45',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
          clientId: '07-tendermint-23',
          connectionId: 'connection-9'
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
      chainName: 'juno',
      clientId: '07-tendermint-9',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'sifchain',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'juno',
      clientId: '07-tendermint-44',
      connectionId: 'connection-30'
    },
    chain2: {
      chainName: 'stargaze',
      clientId: '07-tendermint-13',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-20',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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
      chainName: 'juno',
      clientId: '07-tendermint-263',
      connectionId: 'connection-205'
    },
    chain2: {
      chainName: 'stride',
      clientId: '07-tendermint-31',
      connectionId: 'connection-19'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-139',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain1: {
          channelId: 'channel-202',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-48',
          portId: 'icacontroller-juno-1.DELEGATION'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-143',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'icacontroller-juno-1.FEE'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-142',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-27',
          portId: 'icacontroller-juno-1.WITHDRAWAL'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      },
      {
        chain1: {
          channelId: 'channel-140',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-28',
          portId: 'icacontroller-juno-1.REDEMPTION'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'live',
          preferred: true,
          properties: 'liquid staking'
        }
      }
    ]
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
      chainName: 'juno',
      clientId: '07-tendermint-185',
      connectionId: 'connection-128'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-86',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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