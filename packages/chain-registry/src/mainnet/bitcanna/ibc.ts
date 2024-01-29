import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-40"
    },
    "chain_2": {
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-83",
      "connection_id": "connection-74"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-35",
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
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "bitsong",
      "client_id": "07-tendermint-1237",
      "connection_id": "connection-1132"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-42",
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
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-3"
    },
    "chain_2": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-490",
      "connection_id": "connection-399"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-3",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-232",
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
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-11"
    },
    "chain_2": {
      "chain_name": "juno",
      "client_id": "07-tendermint-110",
      "connection_id": "connection-70"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-10",
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
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1499",
      "connection_id": "connection-1167"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
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
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  }
];
export default info;