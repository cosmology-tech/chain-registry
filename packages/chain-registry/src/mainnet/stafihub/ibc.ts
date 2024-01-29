import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "chihuahua",
      "client_id": "07-tendermint-86",
      "connection_id": "connection-55"
    },
    "chain_2": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-25",
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
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-892",
      "connection_id": "connection-618"
    },
    "chain_2": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-369",
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
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2969",
      "connection_id": "connection-2465"
    },
    "chain_2": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-7",
      "connection_id": "connection-6"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-5413",
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
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "stafihub",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-5"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-317",
      "connection_id": "connection-233"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-9",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-204",
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