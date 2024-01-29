import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "neutrontestnet",
      "client_id": "07-tendermint-143",
      "connection_id": "connection-130"
    },
    "chain_2": {
      "chain_name": "nolustestnet",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-208",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1990",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live"
        }
      }
    ]
  },
  {
    "$schema": "../../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "nolustestnet",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "osmosistestnet",
      "client_id": "07-tendermint-102",
      "connection_id": "connection-120"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-110",
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