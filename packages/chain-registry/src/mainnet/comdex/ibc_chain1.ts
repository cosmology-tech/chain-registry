import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "comdex",
      "client_id": "07-tendermint-108",
      "connection_id": "connection-54"
    },
    "chain_2": {
      "chain_name": "crescent",
      "client_id": "07-tendermint-32",
      "connection_id": "connection-33"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-49",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-26",
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
      "chain_name": "comdex",
      "client_id": "07-tendermint-30",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "juno",
      "client_id": "07-tendermint-92",
      "connection_id": "connection-55"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-18",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-36",
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
      "chain_name": "comdex",
      "client_id": "07-tendermint-139",
      "connection_id": "connection-71"
    },
    "chain_2": {
      "chain_name": "migaloo",
      "client_id": "07-tendermint-25",
      "connection_id": "connection-24"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-63",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-12",
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
      "chain_name": "comdex",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1587",
      "connection_id": "connection-1243"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-87",
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
      "chain_name": "comdex",
      "client_id": "07-tendermint-142",
      "connection_id": "connection-74"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-125",
      "connection_id": "connection-95"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-63",
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
      "chain_name": "comdex",
      "client_id": "07-tendermint-83",
      "connection_id": "connection-50"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-41",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-45",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "comdex",
      "client_id": "07-tendermint-117",
      "connection_id": "connection-56"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-70",
      "connection_id": "connection-59"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-51",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-39",
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