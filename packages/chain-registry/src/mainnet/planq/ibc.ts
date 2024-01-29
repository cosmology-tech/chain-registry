import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-994",
      "connection_id": "connection-693"
    },
    "chain_2": {
      "chain_name": "planq",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-3"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-446",
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
      "chain_name": "gravitybridge",
      "client_id": "07-tendermint-195",
      "connection_id": "connection-165"
    },
    "chain_2": {
      "chain_name": "planq",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-102",
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
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2318",
      "connection_id": "connection-1815"
    },
    "chain_2": {
      "chain_name": "planq",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-492",
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
      "chain_name": "planq",
      "client_id": "07-tendermint-545",
      "connection_id": "connection-477"
    },
    "chain_2": {
      "chain_name": "sei",
      "client_id": "07-tendermint-21",
      "connection_id": "connection-12"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-59",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-13",
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