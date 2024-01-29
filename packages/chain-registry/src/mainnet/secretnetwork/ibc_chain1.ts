import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-14",
      "connection_id": "connection-3"
    },
    "chain_2": {
      "chain_name": "sentinel",
      "client_id": "07-tendermint-96",
      "connection_id": "connection-75"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-3",
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
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-19"
    },
    "chain_2": {
      "chain_name": "sifchain",
      "client_id": "07-tendermint-171",
      "connection_id": "connection-98"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-15",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-65",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-43",
      "connection_id": "connection-25"
    },
    "chain_2": {
      "chain_name": "stargaze",
      "client_id": "07-tendermint-177",
      "connection_id": "connection-110"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-19",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-48",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-75",
      "connection_id": "connection-40"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-25"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-37",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-40",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-192",
      "connection_id": "connection-185"
    },
    "chain_2": {
      "chain_name": "teritori",
      "client_id": "07-tendermint-99",
      "connection_id": "connection-122"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-111",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-63",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-3",
      "connection_id": "connection-2"
    },
    "chain_2": {
      "chain_name": "terra",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-29"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-2",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-16",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-38",
      "connection_id": "connection-20"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-7"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-16",
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
          "preferred": true,
          "properties": "privacy"
        }
      }
    ]
  }
];
export default info;