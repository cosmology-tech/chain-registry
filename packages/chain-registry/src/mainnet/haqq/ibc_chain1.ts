import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "haqq",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-7"
    },
    "chain_2": {
      "chain_name": "kava",
      "client_id": "07-tendermint-149",
      "connection_id": "connection-193"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-6",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-135",
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
      "chain_name": "haqq",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-4"
    },
    "chain_2": {
      "chain_name": "noble",
      "client_id": "07-tendermint-58",
      "connection_id": "connection-56"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-32",
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
      "chain_name": "haqq",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2871",
      "connection_id": "connection-2388"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1575",
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