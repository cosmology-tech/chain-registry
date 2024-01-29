import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "assetmantle",
      "client_id": "07-tendermint-22",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "juno",
      "client_id": "07-tendermint-167",
      "connection_id": "connection-113"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-83",
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
      "chain_name": "assetmantle",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-22"
    },
    "chain_2": {
      "chain_name": "okexchain",
      "client_id": "07-tendermint-92",
      "connection_id": "connection-35"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
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
      "chain_name": "assetmantle",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1923",
      "connection_id": "connection-1498"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
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
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  }
];
export default info;