import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "acrechain",
      "client_id": "07-tendermint-8",
      "connection_id": "connection-8"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-41"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-7",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-47",
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
      "chain_name": "agoric",
      "client_id": "07-tendermint-20",
      "connection_id": "connection-20"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-94",
      "connection_id": "connection-64"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-13",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-61",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-126",
      "connection_id": "connection-103"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-103",
      "connection_id": "connection-72"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-63",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-64",
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
      "chain_name": "andromeda",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-164",
      "connection_id": "connection-127"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-5",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-123",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-12"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-144",
      "connection_id": "connection-110"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-11",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-99",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "assetmantle",
      "client_id": "07-tendermint-50",
      "connection_id": "connection-31"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-104",
      "connection_id": "connection-73"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-19",
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
      "chain_name": "axelar",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-23"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-11",
      "connection_id": "connection-6"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-9",
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
      "chain_name": "carbon",
      "client_id": "07-tendermint-16",
      "connection_id": "connection-13"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-60",
      "connection_id": "connection-40"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-9",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-46",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "demex"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "comdex",
      "client_id": "07-tendermint-52",
      "connection_id": "connection-34"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-15",
      "connection_id": "connection-20"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-31",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-18",
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
      "chain_name": "composable",
      "client_id": "07-tendermint-110",
      "connection_id": "connection-43"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-147",
      "connection_id": "connection-112"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-27",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-101",
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
      "chain_name": "coreum",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-163",
      "connection_id": "connection-126"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-122",
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
      "client_id": "07-tendermint-769",
      "connection_id": "connection-555"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-343",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-0",
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
      "chain_name": "crescent",
      "client_id": "07-tendermint-78",
      "connection_id": "connection-68"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-105",
      "connection_id": "connection-75"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-42",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-67",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "crescent"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "dydx",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-9"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-158",
      "connection_id": "connection-122"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-5",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-118",
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
      "chain_name": "evmos",
      "client_id": "07-tendermint-53",
      "connection_id": "connection-21"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-25",
      "connection_id": "connection-19"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-18",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-23",
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
      "chain_name": "furya",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-160",
      "connection_id": "connection-123"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-119",
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
      "chain_name": "gateway",
      "client_id": "07-tendermint-13",
      "connection_id": "connection-9"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-153",
      "connection_id": "connection-117"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-113",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-9",
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
      "client_id": "07-tendermint-225",
      "connection_id": "connection-189"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-69",
      "connection_id": "connection-45"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-107",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-50",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-144",
      "connection_id": "connection-116"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-77",
      "connection_id": "connection-53"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-98",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-54",
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
      "chain_name": "jackal",
      "client_id": "07-tendermint-57",
      "connection_id": "connection-47"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-139",
      "connection_id": "connection-105"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-39",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-94",
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
      "chain_name": "juno",
      "client_id": "07-tendermint-198",
      "connection_id": "connection-140"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-87",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1",
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
      "client_id": "07-tendermint-119",
      "connection_id": "connection-156"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-140",
      "connection_id": "connection-106"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-116",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-95",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-78",
      "connection_id": "connection-54"
    },
    "chain_2": {
      "chain_name": "mars",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-55",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-0",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-82",
      "connection_id": "connection-59"
    },
    "chain_2": {
      "chain_name": "migaloo",
      "client_id": "07-tendermint-16",
      "connection_id": "connection-19"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-58",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-8",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-112",
      "connection_id": "connection-82"
    },
    "chain_2": {
      "chain_name": "neutron",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-75",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-3",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-95",
      "connection_id": "connection-65"
    },
    "chain_2": {
      "chain_name": "noble",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-4"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-62",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-2",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-156",
      "connection_id": "connection-120"
    },
    "chain_2": {
      "chain_name": "nomic",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-116",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-0",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-108",
      "connection_id": "connection-78"
    },
    "chain_2": {
      "chain_name": "omniflixhub",
      "client_id": "07-tendermint-43",
      "connection_id": "connection-36"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-70",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-26",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2017",
      "connection_id": "connection-1559"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-3",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-259",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-155",
      "connection_id": "connection-119"
    },
    "chain_2": {
      "chain_name": "realio",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-4"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-115",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-4",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-106",
      "connection_id": "connection-76"
    },
    "chain_2": {
      "chain_name": "regen",
      "client_id": "07-tendermint-115",
      "connection_id": "connection-104"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-68",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-100",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-7"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-48",
      "connection_id": "connection-29"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-22",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "osmosis"
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-44",
          "port_id": "transfer",
          "client_id": "07-tendermint-12",
          "connection_id": "connection-7"
        },
        "chain_2": {
          "channel_id": "channel-46",
          "port_id": "wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4",
          "client_id": "07-tendermint-48",
          "connection_id": "connection-29"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-107",
      "connection_id": "connection-77"
    },
    "chain_2": {
      "chain_name": "sommelier",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-69",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-4",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-96",
      "connection_id": "connection-68"
    },
    "chain_2": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-4"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-63",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-9",
      "connection_id": "connection-5"
    },
    "chain_2": {
      "chain_name": "stargaze",
      "client_id": "07-tendermint-178",
      "connection_id": "connection-111"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-7",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-49",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-31"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-5"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-32",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-8",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-132",
      "connection_id": "connection-100"
    },
    "chain_2": {
      "chain_name": "teritori",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-38"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-89",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-30",
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
      "chain_name": "kujira",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-3"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-11",
      "connection_id": "connection-13"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-5",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-36",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-28",
          "port_id": "wasm.terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au"
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