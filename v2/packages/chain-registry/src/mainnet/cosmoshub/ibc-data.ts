import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-9',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'agoric',
      clientId: '07-tendermint-6',
      connectionId: 'connection-8'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'aioz',
      clientId: '07-tendermint-1',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'akash',
      clientId: '07-tendermint-53',
      connectionId: 'connection-29'
    },
    chain2: {
      chainName: 'cosmoshub',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'archway',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'aura',
      clientId: '07-tendermint-24',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'axelar',
      clientId: '07-tendermint-3',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bitcanna',
      clientId: '07-tendermint-4',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bitsong',
      clientId: '07-tendermint-1',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'bostrom',
      clientId: '07-tendermint-15',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'canto',
      clientId: '07-tendermint-1',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'carbon',
      clientId: '07-tendermint-6',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true,
          dex: 'demex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cifer',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'composable',
      clientId: '07-tendermint-7',
      connectionId: 'connection-7'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'coreum',
      clientId: '07-tendermint-11',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'cosmoshub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-724',
      connectionId: 'connection-538'
    },
    chain2: {
      chainName: 'crescent',
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
          status: 'live',
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-389',
      connectionId: 'connection-342'
    },
    chain2: {
      chainName: 'cryptoorgchain',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1191',
      connectionId: 'connection-920'
    },
    chain2: {
      chainName: 'doravota',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1325',
      connectionId: 'connection-1057'
    },
    chain2: {
      chainName: 'dungeon',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1205',
      connectionId: 'connection-933'
    },
    chain2: {
      chainName: 'dymension',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1339',
      connectionId: 'connection-1073'
    },
    chain2: {
      chainName: 'elys',
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-432',
      connectionId: 'connection-365'
    },
    chain2: {
      chainName: 'emoney',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1151',
      connectionId: 'connection-872'
    },
    chain2: {
      chainName: 'empowerchain',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-620',
      connectionId: 'connection-480'
    },
    chain2: {
      chainName: 'evmos',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1141',
      connectionId: 'connection-829'
    },
    chain2: {
      chainName: 'fxcore',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1153',
      connectionId: 'connection-874'
    },
    chain2: {
      chainName: 'haqq',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-434',
      connectionId: 'connection-368'
    },
    chain2: {
      chainName: 'impacthub',
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

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-470',
      connectionId: 'connection-388'
    },
    chain2: {
      chainName: 'injective',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-384',
      connectionId: 'connection-338'
    },
    chain2: {
      chainName: 'irisnet',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1307',
      connectionId: 'connection-1041'
    },
    chain2: {
      chainName: 'joltify',
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
      chainName: 'cosmoshub',
      clientId: '07-tendermint-557',
      connectionId: 'connection-460'
    },
    chain2: {
      chainName: 'kava',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-475',
      connectionId: 'connection-392'
    },
    chain2: {
      chainName: 'kichain',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1332',
      connectionId: 'connection-1065'
    },
    chain2: {
      chainName: 'kopi',
      clientId: '07-tendermint-4',
      connectionId: 'connection-8'
    },
    channels: [{
        chain1: {
          channelId: 'channel-1253',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-7',
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
      clientId: '07-tendermint-769',
      connectionId: 'connection-555'
    },
    chain2: {
      chainName: 'kujira',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1318',
      connectionId: 'connection-1050'
    },
    chain2: {
      chainName: 'lava',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-468',
      connectionId: 'connection-386'
    },
    chain2: {
      chainName: 'likecoin',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1120',
      connectionId: 'connection-807'
    },
    chain2: {
      chainName: 'lumnetwork',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1331',
      connectionId: 'connection-1062'
    },
    chain2: {
      chainName: 'mantrachain',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1119',
      connectionId: 'connection-809'
    },
    chain2: {
      chainName: 'neutron',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1116',
      connectionId: 'connection-790'
    },
    chain2: {
      chainName: 'noble',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-656',
      connectionId: 'connection-501'
    },
    chain2: {
      chainName: 'omniflixhub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-651',
      connectionId: 'connection-497'
    },
    chain2: {
      chainName: 'oraichain',
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
          status: 'live',
          preferred: true,
          dex: 'oraidex'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-259',
      connectionId: 'connection-257'
    },
    chain2: {
      chainName: 'osmosis',
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
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-391',
      connectionId: 'connection-344'
    },
    chain2: {
      chainName: 'persistence',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-994',
      connectionId: 'connection-693'
    },
    chain2: {
      chainName: 'planq',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-926',
      connectionId: 'connection-648'
    },
    chain2: {
      chainName: 'point',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1304',
      connectionId: 'connection-1038'
    },
    chain2: {
      chainName: 'pryzm',
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
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
          status: 'live',
          preferred: true
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1018',
      connectionId: 'connection-709'
    },
    chain2: {
      chainName: 'quicksilver',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1157',
      connectionId: 'connection-879'
    },
    chain2: {
      chainName: 'realio',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-386',
      connectionId: 'connection-340'
    },
    chain2: {
      chainName: 'regen',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-492',
      connectionId: 'connection-401'
    },
    chain2: {
      chainName: 'secretnetwork',
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
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1140',
      connectionId: 'connection-827'
    },
    chain2: {
      chainName: 'sei',
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
          status: 'live',
          preferred: true,
          properties: 'privacy'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1310',
      connectionId: 'connection-1043'
    },
    chain2: {
      chainName: 'self',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-388',
      connectionId: 'connection-341'
    },
    chain2: {
      chainName: 'sentinel',
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

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-395',
      connectionId: 'connection-347'
    },
    chain2: {
      chainName: 'sifchain',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-892',
      connectionId: 'connection-618'
    },
    chain2: {
      chainName: 'stafihub',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1188',
      connectionId: 'connection-918'
    },
    chain2: {
      chainName: 'stargaze',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-326',
      connectionId: 'connection-300'
    },
    chain2: {
      chainName: 'starname',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-913',
      connectionId: 'connection-635'
    },
    chain2: {
      chainName: 'stride',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-962',
      connectionId: 'connection-1710'
    },
    chain2: {
      chainName: 'teritori',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-760',
      connectionId: 'connection-551'
    },
    chain2: {
      chainName: 'terra2',
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
          status: 'live',
          preferred: true
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-611',
      connectionId: 'connection-473'
    },
    chain2: {
      chainName: 'umee',
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
        version: 'ics20-1',
        tags: {

        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'cosmoshub',
      clientId: '07-tendermint-1115',
      connectionId: 'connection-788'
    },
    chain2: {
      chainName: 'uptick',
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
  }
];
export default info;