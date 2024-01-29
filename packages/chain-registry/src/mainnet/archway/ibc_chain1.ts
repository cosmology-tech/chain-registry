import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-16",
      "connection_id": "connection-17"
    },
    "chain_2": {
      "chain_name": "axelar",
      "client_id": "07-tendermint-160",
      "connection_id": "connection-145"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-13",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-111",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-37",
      "connection_id": "connection-40"
    },
    "chain_2": {
      "chain_name": "bitcanna",
      "client_id": "07-tendermint-83",
      "connection_id": "connection-74"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-35",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "chain_2": {
      "chain_name": "cosmoshub",
      "client_id": "07-tendermint-1152",
      "connection_id": "connection-873"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-623",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-38",
      "connection_id": "connection-41"
    },
    "chain_2": {
      "chain_name": "decentr",
      "client_id": "07-tendermint-21",
      "connection_id": "connection-8"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-36",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-7",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-40",
      "connection_id": "connection-43"
    },
    "chain_2": {
      "chain_name": "gravitybridge",
      "client_id": "07-tendermint-424",
      "connection_id": "connection-406"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-38",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-145",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-17",
      "connection_id": "connection-18"
    },
    "chain_2": {
      "chain_name": "jackal",
      "client_id": "07-tendermint-61",
      "connection_id": "connection-50"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-14",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-41",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live"
        }
      }
    ],
    "operators": [
      {
        "chain_1": {
          "address": "archway16l5ls4ajah6hethh374tpgn42r5q4sqeuw8udj"
        },
        "chain_2": {
          "address": "jkl134a4es94hjqqej732cymf0w3988zh3c4yuqtf8"
        },
        "memo": "by AM Solutions | https://www.theamsolutions.info",
        "name": "AM Solutions",
        "discord_handle": "AlexeyM#5409"
      },
      {
        "chain_1": {
          "address": "archway1nms20r7jzaa4ms9exv90ckl2xfn0rd3rmqh7zm"
        },
        "chain_2": {
          "address": "jkl1nms20r7jzaa4ms9exv90ckl2xfn0rd3rh49t3n"
        },
        "memo": "Relayed by NodeStake",
        "name": "NodeStake",
        "discord_handle": "nodestake"
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-12",
      "connection_id": "connection-12"
    },
    "chain_2": {
      "chain_name": "kujira",
      "client_id": "07-tendermint-144",
      "connection_id": "connection-110"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-11",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-99",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-51",
      "connection_id": "connection-58"
    },
    "chain_2": {
      "chain_name": "neutron",
      "client_id": "07-tendermint-62",
      "connection_id": "connection-43"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-61",
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
          "preferred": true
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-28",
      "connection_id": "connection-31"
    },
    "chain_2": {
      "chain_name": "noble",
      "client_id": "07-tendermint-17",
      "connection_id": "connection-26"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-29",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-12",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-22",
      "connection_id": "connection-20"
    },
    "chain_2": {
      "chain_name": "nois",
      "client_id": "07-tendermint-15",
      "connection_id": "connection-9"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-17",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-21",
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
          "channel_id": "channel-19",
          "port_id": "wasm.archway10f3aasgsnpv84ymjyld50jayc4ecu267sdpjamauwm8nvxlzex9qj4dkwr"
        },
        "chain_2": {
          "channel_id": "channel-22",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-39",
      "connection_id": "connection-42"
    },
    "chain_2": {
      "chain_name": "omniflixhub",
      "client_id": "07-tendermint-49",
      "connection_id": "connection-43"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-37",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-32",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-2",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "osmosis",
      "client_id": "07-tendermint-2850",
      "connection_id": "connection-2362"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-1429",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-36",
      "connection_id": "connection-39"
    },
    "chain_2": {
      "chain_name": "quicksilver",
      "client_id": "07-tendermint-83",
      "connection_id": "connection-58"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-34",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-116",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-55",
      "connection_id": "connection-65"
    },
    "chain_2": {
      "chain_name": "qwoyn",
      "client_id": "07-tendermint-8",
      "connection_id": "connection-5"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-88",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-5",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true,
          "dex": "astrovault"
        }
      }
    ]
  },
  {
    "$schema": "../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "archway",
      "client_id": "07-tendermint-24",
      "connection_id": "connection-22"
    },
    "chain_2": {
      "chain_name": "secretnetwork",
      "client_id": "07-tendermint-169",
      "connection_id": "connection-119"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-21",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-84",
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
      "chain_name": "archway",
      "client_id": "07-tendermint-42",
      "connection_id": "connection-47"
    },
    "chain_2": {
      "chain_name": "terra2",
      "client_id": "07-tendermint-384",
      "connection_id": "connection-360"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-50",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-265",
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
  }
];
export default info;