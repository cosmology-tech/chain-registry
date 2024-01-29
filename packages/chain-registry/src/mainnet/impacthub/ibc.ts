import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "axelar",
      "client_id": "07-tendermint-168",
      "connection_id": "connection-150"
    },
    "chain_2": {
      "chain_name": "impacthub",
      "client_id": "07-tendermint-54",
      "connection_id": "connection-40"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-114",
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
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-434",
      "connection_id": "connection-368"
    },
    "chain_2": {
      "chain_name": "impacthub",
      "client_id": "07-tendermint-9",
      "connection_id": "connection-9"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-204",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1",
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
      "chain_name": "impacthub",
      "client_id": "07-tendermint-59",
      "connection_id": "connection-43"
    },
    "chain_2": {
      "chain_name": "noble",
      "client_id": "07-tendermint-20",
      "connection_id": "connection-29"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-26",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-15",
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
      "chain_name": "impacthub",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-12"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1451",
      "connection_id": "connection-1137"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-38",
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
      "chain_name": "impacthub",
      "client_id": "07-tendermint-25",
      "connection_id": "connection-25"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-39",
      "connection_id": "connection-18"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-11",
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
  }
];
export default info;