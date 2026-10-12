import { IBCData } from '@chain-registry/types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      chainId: 'acre_9052-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1002',
      connectionId: 'connection-701'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-457',
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
      chainName: 'agoric',
      chainId: 'agoric-3',
      clientId: '07-tendermint-6',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-927',
      connectionId: 'connection-649'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-405',
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
      chainName: 'aioz',
      chainId: 'aioz_168-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1121',
      connectionId: 'connection-808'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-567',
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
      chainName: 'akash',
      chainId: 'akashnet-2',
      clientId: '07-tendermint-53',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-385',
      connectionId: 'connection-339'
    },
    channels: [{
        chain1: {
          channelId: 'channel-17',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-184',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'allora',
      chainId: 'allora-mainnet-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1384',
      connectionId: 'connection-1107'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1353',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1'
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      chainId: 'archway-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1152',
      connectionId: 'connection-873'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-623',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'aura',
      chainId: 'aura_6322-2',
      clientId: '07-tendermint-24',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
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
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      chainId: 'axelar-dojo-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-622',
      connectionId: 'connection-481'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-293',
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
      chainName: 'babylon',
      chainId: 'bbn-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1381',
      connectionId: 'connection-1104'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1341',
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
      chainName: 'beezee',
      chainId: 'beezee-1',
      clientId: '07-tendermint-39',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1488',
      connectionId: 'connection-1294'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1898',
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
      chainName: 'bitbadges',
      chainId: 'bitbadges-1',
      clientId: '07-tendermint-16',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1428',
      connectionId: 'connection-1147'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1420',
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
      chainName: 'bitcanna',
      chainId: 'bitcanna-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-490',
      connectionId: 'connection-399'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-232',
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
      chainName: 'bitsong',
      chainId: 'bitsong-2b',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-481',
      connectionId: 'connection-395'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-229',
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
      chainName: 'bitway',
      chainId: 'bitway-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-15'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1440',
      connectionId: 'connection-1178'
    },
    channels: [{
        chain1: {
          channelId: 'channel-14',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1556',
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
      chainName: 'bostrom',
      chainId: 'bostrom',
      clientId: '07-tendermint-15',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-764',
      connectionId: 'connection-553'
    },
    channels: [{
        chain1: {
          channelId: 'channel-8',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-341',
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
      chainName: 'canto',
      chainId: 'canto_7700-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-873',
      connectionId: 'connection-604'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-358',
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
      chainName: 'carbon',
      chainId: 'carbon-1',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-765',
      connectionId: 'connection-554'
    },
    channels: [{
        chain1: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-342',
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
      chainName: 'celestia',
      chainId: 'celestia',
      clientId: '07-tendermint-151',
      connectionId: 'connection-103'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1480',
      connectionId: 'connection-1272'
    },
    channels: [{
        chain1: {
          channelId: 'channel-278',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1879',
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
      chainName: 'cifer',
      chainId: 'cifer-2',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1301',
      connectionId: 'connection-1035'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-831',
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
      chainName: 'composable',
      chainId: 'centauri-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1150',
      connectionId: 'connection-871'
    },
    channels: [{
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-617',
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
      chainName: 'coreum',
      chainId: 'coreum-mainnet-1',
      clientId: '07-tendermint-11',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1162',
      connectionId: 'connection-884'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-660',
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
      clientId: '07-tendermint-724',
      connectionId: 'connection-538'
    },
    chain2: {
      chainName: 'crescent',
      chainId: 'crescent-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-326',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-389',
      connectionId: 'connection-342'
    },
    chain2: {
      chainName: 'cryptoorgchain',
      chainId: 'crypto-org-chain-mainnet-1',
      clientId: '07-tendermint-735',
      connectionId: 'connection-220'
    },
    channels: [{
        chain1: {
          channelId: 'channel-187',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-27',
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
      clientId: '07-tendermint-1469',
      connectionId: 'connection-1208'
    },
    chain2: {
      chainName: 'divine',
      chainId: 'divine-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1749',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1191',
      connectionId: 'connection-920'
    },
    chain2: {
      chainName: 'doravota',
      chainId: 'vota-ash',
      clientId: '07-tendermint-14',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-750',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-1441',
      connectionId: 'connection-1179'
    },
    chain2: {
      chainName: 'dungeon',
      chainId: 'dungeon-1',
      clientId: '07-tendermint-24',
      connectionId: 'connection-8631'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1560',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5308',
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
      clientId: '07-tendermint-1325',
      connectionId: 'connection-1057'
    },
    chain2: {
      chainName: 'dungeon1',
      chainId: 'dungeon-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-9'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1213',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: false,
          status: 'INACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1205',
      connectionId: 'connection-933'
    },
    chain2: {
      chainName: 'dymension',
      chainId: 'dymension_1100-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-794',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1339',
      connectionId: 'connection-1073'
    },
    chain2: {
      chainName: 'elys',
      chainId: 'elys-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1265',
          portId: 'provider'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'consumer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-1266',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-432',
      connectionId: 'connection-365'
    },
    chain2: {
      chainName: 'emoney',
      chainId: 'emoney-3',
      clientId: '07-tendermint-8',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-202',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1151',
      connectionId: 'connection-872'
    },
    chain2: {
      chainName: 'empowerchain',
      chainId: 'empowerchain-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-621',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-620',
      connectionId: 'connection-480'
    },
    chain2: {
      chainName: 'evmos',
      chainId: 'evmos_9001-2',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-292',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      clientId: '07-tendermint-1141',
      connectionId: 'connection-829'
    },
    chain2: {
      chainName: 'fxcore',
      chainId: 'fxcore',
      clientId: '07-tendermint-13',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-585',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
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
      clientId: '07-tendermint-1153',
      connectionId: 'connection-874'
    },
    chain2: {
      chainName: 'haqq',
      chainId: 'haqq_11235-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-632',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-470',
      connectionId: 'connection-388'
    },
    chain2: {
      chainName: 'injective',
      chainId: 'injective-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-220',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1436',
      connectionId: 'connection-1175'
    },
    chain2: {
      chainName: 'intento',
      chainId: 'intento-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1489',
          portId: 'provider'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'consumer'
        },
        ordering: 'ordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-1492',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-384',
      connectionId: 'connection-338'
    },
    chain2: {
      chainName: 'irisnet',
      chainId: 'irishub-1',
      clientId: '07-tendermint-31',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-182',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      clientId: '07-tendermint-1307',
      connectionId: 'connection-1041'
    },
    chain2: {
      chainName: 'joltify',
      chainId: 'joltify_1729-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-866',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      clientId: '07-tendermint-439',
      connectionId: 'connection-372'
    },
    chain2: {
      chainName: 'juno',
      chainId: 'juno-1',
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
      clientId: '07-tendermint-557',
      connectionId: 'connection-460'
    },
    chain2: {
      chainName: 'kava',
      chainId: 'kava_2222-10',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-277',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-475',
      connectionId: 'connection-392'
    },
    chain2: {
      chainName: 'kichain',
      chainId: 'kichain-2',
      clientId: '07-tendermint-6',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-223',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1382',
      connectionId: 'connection-1105'
    },
    chain2: {
      chainName: 'kopi',
      chainId: 'luwak-1',
      clientId: '07-tendermint-19',
      connectionId: 'connection-43'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1351',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-769',
      connectionId: 'connection-555'
    },
    chain2: {
      chainName: 'kujira',
      chainId: 'kaiyo-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-343',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1318',
      connectionId: 'connection-1050'
    },
    chain2: {
      chainName: 'lava',
      chainId: 'lava-mainnet-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-969',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      clientId: '07-tendermint-468',
      connectionId: 'connection-386'
    },
    chain2: {
      chainName: 'likecoin',
      chainId: 'likecoin-mainnet-2',
      clientId: '07-tendermint-24',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-217',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-5',
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
      clientId: '07-tendermint-1380',
      connectionId: 'connection-1103'
    },
    chain2: {
      chainName: 'lombardledger',
      chainId: 'ledger-mainnet-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1340',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1120',
      connectionId: 'connection-807'
    },
    chain2: {
      chainName: 'lumnetwork',
      chainId: 'lum-network-1',
      clientId: '07-tendermint-21',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-566',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      clientId: '07-tendermint-1331',
      connectionId: 'connection-1062'
    },
    chain2: {
      chainName: 'mantrachain',
      chainId: 'mantra-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1252',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-3',
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
      clientId: '07-tendermint-1351',
      connectionId: 'connection-1089'
    },
    chain2: {
      chainName: 'namada',
      chainId: 'namada.5f5de2dd1b88cba30586420',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1317',
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
      clientId: '07-tendermint-1119',
      connectionId: 'connection-809'
    },
    chain2: {
      chainName: 'neutron',
      chainId: 'neutron-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-569',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1116',
      connectionId: 'connection-790'
    },
    chain2: {
      chainName: 'noble',
      chainId: 'noble-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-12'
    },
    channels: [{
        chain1: {
          channelId: 'channel-536',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
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
      clientId: '07-tendermint-656',
      connectionId: 'connection-501'
    },
    chain2: {
      chainName: 'omniflixhub',
      chainId: 'omniflixhub-1',
      clientId: '07-tendermint-23',
      connectionId: 'connection-19'
    },
    channels: [{
        chain1: {
          channelId: 'channel-306',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
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
      clientId: '07-tendermint-651',
      connectionId: 'connection-497'
    },
    chain2: {
      chainName: 'oraichain',
      chainId: 'Oraichain',
      clientId: '07-tendermint-47',
      connectionId: 'connection-22'
    },
    channels: [{
        chain1: {
          channelId: 'channel-301',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-259',
      connectionId: 'connection-257'
    },
    chain2: {
      chainName: 'osmosis',
      chainId: 'osmosis-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-141',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1442',
      connectionId: 'connection-1182'
    },
    chain2: {
      chainName: 'paxi',
      chainId: 'paxi-mainnet',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1566',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-391',
      connectionId: 'connection-344'
    },
    chain2: {
      chainName: 'persistence',
      chainId: 'core-1',
      clientId: '07-tendermint-36',
      connectionId: 'connection-30'
    },
    channels: [{
        chain1: {
          channelId: 'channel-190',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-24',
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
      clientId: '07-tendermint-994',
      connectionId: 'connection-693'
    },
    chain2: {
      chainName: 'planq',
      chainId: 'planq_7070-2',
      clientId: '07-tendermint-5',
      connectionId: 'connection-3'
    },
    channels: [{
        chain1: {
          channelId: 'channel-446',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      clientId: '07-tendermint-926',
      connectionId: 'connection-648'
    },
    chain2: {
      chainName: 'point',
      chainId: 'point_10687-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-404',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1304',
      connectionId: 'connection-1038'
    },
    chain2: {
      chainName: 'pryzm',
      chainId: 'pryzm-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-859',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-863',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-8',
          portId: 'icacontroller-reward-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-861',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-9',
          portId: 'icacontroller-sweep-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      },
      {
        chain1: {
          channelId: 'channel-891',
          portId: 'icahost'
        },
        chain2: {
          channelId: 'channel-20',
          portId: 'icacontroller-delegation-uatom'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1018',
      connectionId: 'connection-709'
    },
    chain2: {
      chainName: 'quicksilver',
      chainId: 'quicksilver-2',
      clientId: '07-tendermint-2',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-467',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1157',
      connectionId: 'connection-879'
    },
    chain2: {
      chainName: 'realio',
      chainId: 'realionetwork_3301-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-645',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      clientId: '07-tendermint-386',
      connectionId: 'connection-340'
    },
    chain2: {
      chainName: 'regen',
      chainId: 'regen-1',
      clientId: '07-tendermint-27',
      connectionId: 'connection-24'
    },
    channels: [{
        chain1: {
          channelId: 'channel-185',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-11',
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
      clientId: '07-tendermint-492',
      connectionId: 'connection-401'
    },
    chain2: {
      chainName: 'secretnetwork',
      chainId: 'secret-4',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-235',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-1355',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-187',
          portId: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'ACTIVE'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-1372',
      connectionId: 'connection-1098'
    },
    chain2: {
      chainName: 'seda',
      chainId: 'seda-1',
      clientId: '07-tendermint-1',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1337',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1140',
      connectionId: 'connection-827'
    },
    chain2: {
      chainName: 'sei',
      chainId: 'pacific-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-584',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1310',
      connectionId: 'connection-1043'
    },
    chain2: {
      chainName: 'self',
      chainId: 'self-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-892',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-388',
      connectionId: 'connection-341'
    },
    chain2: {
      chainName: 'sentinel',
      chainId: 'sentinelhub-2',
      clientId: '07-tendermint-58',
      connectionId: 'connection-33'
    },
    channels: [{
        chain1: {
          channelId: 'channel-186',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: false,
          status: 'ACTIVE'
        }
      }, {
        chain1: {
          channelId: 'channel-1549',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-97',
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
      clientId: '07-tendermint-1383',
      connectionId: 'connection-1106'
    },
    chain2: {
      chainName: 'sidechain',
      chainId: 'sidechain-1',
      clientId: '07-tendermint-25',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1352',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-892',
      connectionId: 'connection-618'
    },
    chain2: {
      chainName: 'stafihub',
      chainId: 'stafihub-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-369',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1188',
      connectionId: 'connection-918'
    },
    chain2: {
      chainName: 'stargaze',
      chainId: 'stargaze-1',
      clientId: '07-tendermint-320',
      connectionId: 'connection-256'
    },
    channels: [{
        chain1: {
          channelId: 'channel-730',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-239',
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
      clientId: '07-tendermint-326',
      connectionId: 'connection-300'
    },
    chain2: {
      chainName: 'starname',
      chainId: 'iov-mainnet-ibc',
      clientId: '07-tendermint-6',
      connectionId: 'connection-6'
    },
    channels: [{
        chain1: {
          channelId: 'channel-158',
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
      chainName: 'cosmoshub',
      chainId: 'cosmoshub-4',
      clientId: '07-tendermint-913',
      connectionId: 'connection-635'
    },
    chain2: {
      chainName: 'stride',
      chainId: 'stride-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-391',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1430',
      connectionId: 'connection-1148'
    },
    chain2: {
      chainName: 'sunrise',
      chainId: 'sunrise-1',
      clientId: '07-tendermint-7',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1421',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-962',
      connectionId: 'connection-1710'
    },
    chain2: {
      chainName: 'teritori',
      chainId: 'teritori-1',
      clientId: '07-tendermint-32',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-431',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-10',
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
      clientId: '07-tendermint-760',
      connectionId: 'connection-551'
    },
    chain2: {
      chainName: 'terra2',
      chainId: 'phoenix-1',
      clientId: '07-tendermint-0',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-339',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-0',
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
      clientId: '07-tendermint-1476',
      connectionId: 'connection-1265'
    },
    chain2: {
      chainName: 'thejaynetwork',
      chainId: 'thejaynetwork',
      clientId: '07-tendermint-8',
      connectionId: 'connection-0'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1871',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-611',
      connectionId: 'connection-473'
    },
    chain2: {
      chainName: 'umee',
      chainId: 'umee-1',
      clientId: '07-tendermint-9',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-288',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1115',
      connectionId: 'connection-788'
    },
    chain2: {
      chainName: 'uptick',
      chainId: 'uptick_117-1',
      clientId: '07-tendermint-3',
      connectionId: 'connection-1'
    },
    channels: [{
        chain1: {
          channelId: 'channel-535',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-1',
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
      clientId: '07-tendermint-1113',
      connectionId: 'connection-786'
    },
    chain2: {
      chainName: 'xpla',
      chainId: 'dimension_37-1',
      clientId: '07-tendermint-5',
      connectionId: 'connection-11'
    },
    channels: [{
        chain1: {
          channelId: 'channel-533',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-6',
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
      clientId: '07-tendermint-1411',
      connectionId: 'connection-1134'
    },
    chain2: {
      chainName: 'xrplevm',
      chainId: 'xrplevm_1440000-1',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1377',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-2',
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
      clientId: '07-tendermint-1439',
      connectionId: 'connection-1177'
    },
    chain2: {
      chainName: 'zigchain',
      chainId: 'zigchain-1',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1555',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          preferred: true,
          status: 'ACTIVE'
        }
      }]
  }
];
export default info;