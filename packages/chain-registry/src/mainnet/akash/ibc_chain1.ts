import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "akash",
      "client_id": "07-tendermint-166",
      "connection_id": "connection-146"
    },
    "chain_2": {
      "chain_name": "archway",
      "client_id": "07-tendermint-26",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-109",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-53",
      "connection_id": "connection-29"
    },
    "chain_2": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-385",
      "connection_id": "connection-339"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-184",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-132",
      "connection_id": "connection-107"
    },
    "chain_2": {
      "chain_name": "crescent",
      "client_id": "07-tendermint-80",
      "connection_id": "connection-71"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-70",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-44",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-48",
      "connection_id": "connection-23"
    },
    "chain_2": {
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-65",
      "connection_id": "connection-38"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-21",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1"
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "akash",
      "client_id": "07-tendermint-183",
      "connection_id": "connection-171"
    },
    "chain_2": {
      "chain_name": "doravota",
      "client_id": "07-tendermint-17",
      "connection_id": "connection-11"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-125",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-7",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-44",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "irisnet",
      "client_id": "07-tendermint-23",
      "connection_id": "connection-16"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-11",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-9",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-84",
      "connection_id": "connection-58"
    },
    "chain_2": {
      "chain_name": "juno",
      "client_id": "07-tendermint-80",
      "connection_id": "connection-47"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-35",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-29",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-18",
      "connection_id": "connection-11"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-9",
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
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  },
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
      "chain_name": "akash",
      "client_id": "07-tendermint-47",
      "connection_id": "connection-22"
    },
    "chain_2": {
      "chain_name": "regen",
      "client_id": "07-tendermint-20",
      "connection_id": "connection-9"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-13",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-102",
      "connection_id": "connection-69"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-47",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-43",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-21",
          "port_id": "transfer"
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
      "chain_name": "akash",
      "client_id": "07-tendermint-45",
      "connection_id": "connection-21"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-27"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-12",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-36"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-11",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-24",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-2",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-59",
      "connection_id": "connection-35"
    },
    "chain_2": {
      "chain_name": "starname",
      "client_id": "07-tendermint-29",
      "connection_id": "connection-18"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-23",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6",
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
      "chain_name": "akash",
      "client_id": "07-tendermint-173",
      "connection_id": "connection-159"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-387",
      "connection_id": "connection-364"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-116",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-273",
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