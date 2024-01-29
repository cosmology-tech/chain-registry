import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
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
      "chain_name": "neutron",
      "client_id": "07-tendermint-64",
      "connection_id": "connection-44"
    },
    "chain_2": {
      "chain_name": "nomic",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-3"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-42",
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
      "chain_name": "nomic",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-3010",
      "connection_id": "connection-2501"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6897",
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