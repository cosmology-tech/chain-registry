import { IBCData } from '@chain-registry/v2-types';
const info: IBCData[] = [
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'acrechain',
      clientId: '07-tendermint-11',
      connectionId: 'connection-12'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-101',
      connectionId: 'connection-89'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-77',
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
      clientId: '07-tendermint-173',
      connectionId: 'connection-159'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-387',
      connectionId: 'connection-364'
    },
    channels: [{
        chain1: {
          channelId: 'channel-116',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-273',
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
      chainName: 'andromeda',
      clientId: '07-tendermint-15',
      connectionId: 'connection-11'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-409',
      connectionId: 'connection-413'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-351',
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
      clientId: '07-tendermint-42',
      connectionId: 'connection-47'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-384',
      connectionId: 'connection-360'
    },
    channels: [{
        chain1: {
          channelId: 'channel-50',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-265',
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
      chainName: 'axelar',
      clientId: '07-tendermint-39',
      connectionId: 'connection-21'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-7',
      connectionId: 'connection-10'
    },
    channels: [{
        chain1: {
          channelId: 'channel-11',
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
      chainName: 'carbon',
      clientId: '07-tendermint-33',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-66',
      connectionId: 'connection-54'
    },
    channels: [{
        chain1: {
          channelId: 'channel-12',
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
          preferred: true,
          dex: 'demex'
        }
      }, {
        chain1: {
          channelId: 'channel-16',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-41',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
      chainName: 'celestia',
      clientId: '07-tendermint-53',
      connectionId: 'connection-16'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-391',
      connectionId: 'connection-381'
    },
    channels: [{
        chain1: {
          channelId: 'channel-15',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-300',
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
      chainName: 'cheqd',
      clientId: '07-tendermint-83',
      connectionId: 'connection-61'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-392',
      connectionId: 'connection-382'
    },
    channels: [{
        chain1: {
          channelId: 'channel-34',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-301',
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
      clientId: '07-tendermint-117',
      connectionId: 'connection-56'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-70',
      connectionId: 'connection-59'
    },
    channels: [{
        chain1: {
          channelId: 'channel-51',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-39',
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
      chainName: 'crescent',
      clientId: '07-tendermint-36',
      connectionId: 'connection-37'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-68',
      connectionId: 'connection-57'
    },
    channels: [{
        chain1: {
          channelId: 'channel-27',
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
          preferred: true,
          dex: 'crescent'
        }
      }]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'decentr',
      clientId: '07-tendermint-26',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-395',
      connectionId: 'connection-385'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-315',
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
      chainName: 'dungeon',
      clientId: '07-tendermint-11',
      connectionId: 'connection-13'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-424',
      connectionId: 'connection-438'
    },
    channels: [{
        chain1: {
          channelId: 'channel-7',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-582',
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
      chainName: 'dydx',
      clientId: '07-tendermint-9',
      connectionId: 'connection-14'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-390',
      connectionId: 'connection-380'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-299',
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
      clientId: '07-tendermint-14',
      connectionId: 'connection-10'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-422',
      connectionId: 'connection-436'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-495',
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
      chainName: 'injective',
      clientId: '07-tendermint-216',
      connectionId: 'connection-202'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-369',
      connectionId: 'connection-311'
    },
    channels: [{
        chain1: {
          channelId: 'channel-151',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-255',
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
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'kava',
      clientId: '07-tendermint-156',
      connectionId: 'connection-196'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-386',
      connectionId: 'connection-362'
    },
    channels: [{
        chain1: {
          channelId: 'channel-138',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-272',
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
      chainName: 'kopi',
      clientId: '07-tendermint-2',
      connectionId: 'connection-2'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-426',
      connectionId: 'connection-440'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-586',
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
      chainName: 'kujira',
      clientId: '07-tendermint-5',
      connectionId: 'connection-3'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-11',
      connectionId: 'connection-13'
    },
    channels: [{
        chain1: {
          channelId: 'channel-5',
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
      }, {
        chain1: {
          channelId: 'channel-36',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-28',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
      chainName: 'mars',
      clientId: '07-tendermint-10',
      connectionId: 'connection-6'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-104',
      connectionId: 'connection-91'
    },
    channels: [{
        chain1: {
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-78',
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
      chainName: 'migaloo',
      clientId: '07-tendermint-0',
      connectionId: 'connection-0'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-105',
      connectionId: 'connection-93'
    },
    channels: [{
        chain1: {
          channelId: 'channel-0',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-86',
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
          channelId: 'channel-2',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-87',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
      chainName: 'neutron',
      clientId: '07-tendermint-12',
      connectionId: 'connection-9'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-274',
      connectionId: 'connection-192'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-25',
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
      },
      {
        chain1: {
          channelId: 'channel-5',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-167',
          portId: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
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
          channelId: 'channel-2112',
          portId: 'wasm.neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07'
        },
        chain2: {
          channelId: 'channel-396',
          portId: 'wasm.terra1k9j8rcyk87v5jvfla2m9wp200azegjz0eshl7n2pwv852a7ssceqsnn7pq'
        },
        ordering: 'unordered',
        version: 'astroport-ibc-v1',
        tags: {
          status: 'live',
          preferred: true
        }
      },
      {
        chain1: {
          channelId: 'channel-5389',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-554',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
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
      chainName: 'noble',
      clientId: '07-tendermint-56',
      connectionId: 'connection-54'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-367',
      connectionId: 'connection-302'
    },
    channels: [{
        chain1: {
          channelId: 'channel-30',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-253',
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
      chainName: 'osmosis',
      clientId: '07-tendermint-1979',
      connectionId: 'connection-1536'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-2',
      connectionId: 'connection-3'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-251',
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
      },
      {
        chain1: {
          channelId: 'channel-559',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-85',
          portId: 'wasm.terra1d90p5lacfxnqgjxjupu234lxnxyeu8fdeef4d0e0nqy3p30r7gss4myn9x'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain1: {
          channelId: 'channel-341',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-26',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      },
      {
        chain1: {
          channelId: 'channel-21671',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-392',
          portId: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }
    ]
  },
  {
    $schema: '../ibc_data.schema.json',
    chain1: {
      chainName: 'pryzm',
      clientId: '07-tendermint-4',
      connectionId: 'connection-4'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-410',
      connectionId: 'connection-414'
    },
    channels: [
      {
        chain1: {
          channelId: 'channel-4',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-473',
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
          channelId: 'channel-17',
          portId: 'icacontroller-delegation-uluna'
        },
        chain2: {
          channelId: 'channel-478',
          portId: 'icahost'
        },
        ordering: 'ordered',
        version: 'ics27-1',
        tags: {
          status: 'killed',
          preferred: false
        }
      },
      {
        chain1: {
          channelId: 'channel-18',
          portId: 'icacontroller-reward-uluna'
        },
        chain2: {
          channelId: 'channel-479',
          portId: 'icahost'
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
          channelId: 'channel-19',
          portId: 'icacontroller-sweep-uluna'
        },
        chain2: {
          channelId: 'channel-480',
          portId: 'icahost'
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
          channelId: 'channel-25',
          portId: 'icacontroller-delegation-uluna'
        },
        chain2: {
          channelId: 'channel-526',
          portId: 'icahost'
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
      chainName: 'quicksilver',
      clientId: '07-tendermint-108',
      connectionId: 'connection-69'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-430',
      connectionId: 'connection-442'
    },
    channels: [{
        chain1: {
          channelId: 'channel-244',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-604',
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
      chainName: 'secretnetwork',
      clientId: '07-tendermint-38',
      connectionId: 'connection-20'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-4',
      connectionId: 'connection-7'
    },
    channels: [{
        chain1: {
          channelId: 'channel-16',
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
          properties: 'privacy'
        }
      }, {
        chain1: {
          channelId: 'channel-127',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-382',
          portId: 'wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au'
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
      chainName: 'stafihub',
      clientId: '07-tendermint-5',
      connectionId: 'connection-5'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-317',
      connectionId: 'connection-233'
    },
    channels: [{
        chain1: {
          channelId: 'channel-9',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-204',
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
      chainName: 'stargaze',
      clientId: '07-tendermint-337',
      connectionId: 'connection-275'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-405',
      connectionId: 'connection-408'
    },
    channels: [{
        chain1: {
          channelId: 'channel-266',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-324',
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
      chainName: 'stride',
      clientId: '07-tendermint-51',
      connectionId: 'connection-32'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-87',
      connectionId: 'connection-72'
    },
    channels: [{
        chain1: {
          channelId: 'channel-52',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-46',
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
      chainName: 'terra',
      clientId: '07-tendermint-235',
      connectionId: 'connection-142'
    },
    chain2: {
      chainName: 'terra2',
      clientId: '07-tendermint-394',
      connectionId: 'connection-384'
    },
    channels: [{
        chain1: {
          channelId: 'channel-85',
          portId: 'transfer'
        },
        chain2: {
          channelId: 'channel-314',
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