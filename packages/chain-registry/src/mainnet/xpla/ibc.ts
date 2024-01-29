import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-197",
      "connection_id": "connection-182"
    },
    "chain_2": {
      "chain_name": "xpla",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-12"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-137",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-7",
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
      "client_id": "07-tendermint-2875",
      "connection_id": "connection-2389"
    },
    "chain_2": {
      "chain_name": "xpla",
      "client_id": "07-tendermint-11",
      "connection_id": "connection-19"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1634",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-9",
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