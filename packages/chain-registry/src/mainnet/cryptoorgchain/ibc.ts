import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-389",
      "connection_id": "connection-342"
    },
    "chain_2": {
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-735",
      "connection_id": "connection-220"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-187",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-27",
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
      "client_id": "07-tendermint-77",
      "connection_id": "connection-65"
    },
    "chain_2": {
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-1153",
      "connection_id": "connection-277"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-40",
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
          "preferred": true,
          "dex": "crescent"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-1136",
      "connection_id": "connection-260"
    },
    "chain_2": {
      "chain_name": "evmos",
      "client_id": "07-tendermint-85",
      "connection_id": "connection-43"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-57",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-31",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-650",
      "connection_id": "connection-197"
    },
    "chain_2": {
      "chain_name": "irisnet",
      "client_id": "07-tendermint-32",
      "connection_id": "connection-23"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-23",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-33",
      "connection_id": "connection-12"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-5"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-5",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-732",
      "connection_id": "connection-218"
    },
    "chain_2": {
      "chain_name": "regen",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-26"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-25",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-12",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-63",
      "connection_id": "connection-36"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-43",
      "connection_id": "connection-28"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-19",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-1103",
      "connection_id": "connection-239"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-20",
      "connection_id": "connection-10"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-33",
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
      "chain_name": "cryptoorgchain",
      "client_id": "07-tendermint-66",
      "connection_id": "connection-39"
    },
    "chain_2": {
      "chain_name": "starname",
      "client_id": "07-tendermint-16",
      "connection_id": "connection-11"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-22",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-3",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {}
      }
    ]
  }
];
export default info;