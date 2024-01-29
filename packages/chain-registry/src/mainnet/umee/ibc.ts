import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-5"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-228",
      "connection_id": "connection-190"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-4",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-97",
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
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "axelar",
      "client_id": "07-tendermint-64",
      "connection_id": "connection-43"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-63",
      "connection_id": "connection-44"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-36",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-33",
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
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-611",
      "connection_id": "connection-473"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-9",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-288",
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
      "chain_name": "crescent",
      "client_id": "07-tendermint-56",
      "connection_id": "connection-53"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-170",
      "connection_id": "connection-110"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-36",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-49",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "crescent"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "kava",
      "client_id": "07-tendermint-124",
      "connection_id": "connection-160"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-229",
      "connection_id": "connection-191"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-119",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-98",
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
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "migaloo",
      "client_id": "07-tendermint-104",
      "connection_id": "connection-83"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-234",
      "connection_id": "connection-195"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-56",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-104",
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
      "client_id": "07-tendermint-1805",
      "connection_id": "connection-1410"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-6",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-184",
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
          "preferred": true,
          "dex": "osmosis"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-105",
      "connection_id": "connection-144"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-179",
      "connection_id": "connection-119"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-81",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "quicksilver",
      "client_id": "07-tendermint-27",
      "connection_id": "connection-13"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-183",
      "connection_id": "connection-122"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-49",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-53",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1"
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "stride",
      "client_id": "07-tendermint-32",
      "connection_id": "connection-20"
    },
    "chain_2": {
      "chain_name": "umee",
      "client_id": "07-tendermint-64",
      "connection_id": "connection-45"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-29",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-34",
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