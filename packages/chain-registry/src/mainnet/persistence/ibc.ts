import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "akash",
      "client_id": "07-tendermint-15",
      "connection_id": "connection-8"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-4"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-6",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-5",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "comdex",
      "client_id": "07-tendermint-123",
      "connection_id": "connection-65"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-94",
      "connection_id": "connection-75"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-57",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-71",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-391",
      "connection_id": "connection-344"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-36",
      "connection_id": "connection-30"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-190",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-24",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "crescent",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-41"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-88",
      "connection_id": "connection-72"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-30",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-68",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-34"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-24",
      "connection_id": "connection-17"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-11",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "dydx",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-8"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-159",
      "connection_id": "connection-197"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-131",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "gravitybridge",
      "client_id": "07-tendermint-39",
      "connection_id": "connection-50"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-51",
      "connection_id": "connection-49"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-24",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-38",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-110",
      "connection_id": "connection-91"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-57",
      "connection_id": "connection-53"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-82",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-41",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "irisnet",
      "client_id": "07-tendermint-34",
      "connection_id": "connection-25"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-31",
      "connection_id": "connection-25"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-15",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-19",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "juno",
      "client_id": "07-tendermint-89",
      "connection_id": "connection-51"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-49",
      "connection_id": "connection-48"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-33",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-37",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "kava",
      "client_id": "07-tendermint-148",
      "connection_id": "connection-189"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-156",
      "connection_id": "connection-195"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-134",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-129",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "neutron",
      "client_id": "07-tendermint-73",
      "connection_id": "connection-52"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-161",
      "connection_id": "connection-199"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-49",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-136",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "noble",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-59"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-160",
      "connection_id": "connection-198"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-36",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-132",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-5"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-96",
      "connection_id": "connection-77"
    },
    "chain_2": {
      "chain_name": "quicksilver",
      "client_id": "07-tendermint-15",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-73",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-33",
      "connection_id": "connection-27"
    },
    "chain_2": {
      "chain_name": "regen",
      "client_id": "07-tendermint-30",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-21",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-106",
      "connection_id": "connection-146"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-126",
      "connection_id": "connection-98"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-82",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-64",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-34",
      "connection_id": "connection-28"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-36"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-22",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-15",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-38",
      "connection_id": "connection-32"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-18",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-26",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-7",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-39",
      "connection_id": "connection-39"
    },
    "chain_2": {
      "chain_name": "starname",
      "client_id": "07-tendermint-44",
      "connection_id": "connection-30"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-27",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-13",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-83",
      "connection_id": "connection-71"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-54",
      "connection_id": "connection-33"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-67",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-53",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-105",
      "connection_id": "connection-144"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-179",
      "connection_id": "connection-119"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-81",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-51",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  }
];
export default info;