import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "irisnet",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-6"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-3",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-35",
      "connection_id": "connection-26"
    },
    "chain_2": {
      "chain_name": "regen",
      "client_id": "07-tendermint-25",
      "connection_id": "connection-22"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-16",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-36",
      "connection_id": "connection-28"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-54",
      "connection_id": "connection-30"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-30"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-19",
      "connection_id": "connection-9"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-19",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-8",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-63",
      "connection_id": "connection-44"
    },
    "chain_2": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-33",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-44",
      "connection_id": "connection-32"
    },
    "chain_2": {
      "chain_name": "starname",
      "client_id": "07-tendermint-41",
      "connection_id": "connection-27"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-21",
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
      "chain_name": "irisnet",
      "client_id": "07-tendermint-93",
      "connection_id": "connection-72"
    },
    "chain_2": {
      "chain_name": "uptick",
      "client_id": "07-tendermint-8",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-39",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1"
      }
    ]
  }
];
export default info;