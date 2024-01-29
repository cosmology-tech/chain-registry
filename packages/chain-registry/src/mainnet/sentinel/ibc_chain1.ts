import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-84",
      "connection_id": "connection-58"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-9",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-36",
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
      "chain_name": "sentinel",
      "client_id": "07-tendermint-88",
      "connection_id": "connection-70"
    },
    "chain_2": {
      "chain_name": "starname",
      "client_id": "07-tendermint-46",
      "connection_id": "connection-32"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-40",
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