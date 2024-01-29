import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-205",
      "connection_id": "connection-189"
    },
    "chain_2": {
      "chain_name": "kava",
      "client_id": "07-tendermint-130",
      "connection_id": "connection-166"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-143",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-122",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-144",
      "connection_id": "connection-116"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-77",
      "connection_id": "connection-53"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-98",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-54",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-154",
      "connection_id": "connection-123"
    },
    "chain_2": {
      "chain_name": "migaloo",
      "client_id": "07-tendermint-5",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-102",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-223",
      "connection_id": "connection-220"
    },
    "chain_2": {
      "chain_name": "neutron",
      "client_id": "07-tendermint-78",
      "connection_id": "connection-58"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-177",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-60",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-210",
      "connection_id": "connection-193"
    },
    "chain_2": {
      "chain_name": "noble",
      "client_id": "07-tendermint-15",
      "connection_id": "connection-24"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-146",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-10",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-201",
      "connection_id": "connection-184"
    },
    "chain_2": {
      "chain_name": "nois",
      "client_id": "07-tendermint-13",
      "connection_id": "connection-6"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-138",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      },
      {
        "chain_1": {
          "channel_id": "channel-140",
          "port_id": "wasm.inj1w9g3sk7lk8k0pdtctygupt6f3te7x4thvzz57a"
        },
        "chain_2": {
          "channel_id": "channel-20",
          "port_id": "wasm.nois1acyc05v6fgcdgj88nmz2t40aex9nlnptqpwp5hf8hwg7rhce9uuqgqz5wp"
        },
        "ordering": "unordered",
        "version": "nois-v7",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-19",
      "connection_id": "connection-14"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-1703",
      "connection_id": "connection-1298"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-8",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-122",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-110",
      "connection_id": "connection-91"
    },
    "chain_2": {
      "chain_name": "persistence",
      "client_id": "07-tendermint-57",
      "connection_id": "connection-53"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-82",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-41",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-97",
      "connection_id": "connection-83"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-22",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-88",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-23",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-135",
      "connection_id": "connection-108"
    },
    "chain_2": {
      "chain_name": "sommelier",
      "client_id": "07-tendermint-4",
      "connection_id": "connection-1"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-93",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "injective",
      "client_id": "07-tendermint-131",
      "connection_id": "connection-103"
    },
    "chain_2": {
      "chain_name": "stride",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-3"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-89",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-6",
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
      "chain_name": "injective",
      "client_id": "07-tendermint-216",
      "connection_id": "connection-202"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-369",
      "connection_id": "connection-311"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-151",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-255",
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
  }
];
export default info;