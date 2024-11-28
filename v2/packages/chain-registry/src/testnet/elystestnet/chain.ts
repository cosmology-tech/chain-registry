import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'elystestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Elys Network',
  chainType: 'cosmos',
  chainId: 'elystestnet-1',
  bech32Prefix: 'elys',
  daemonName: 'elysd',
  nodeHome: '$HOME/.elys',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  staking: {
    stakingTokens: [{
        denom: 'uelys'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  fees: {
    feeTokens: [
      {
        denom: 'uelys',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/2180E84E20F5679FCC760D8C165B60F42065DEF7F46A72B447CFF1B7DC6C0A65',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/E2D2F6ADCC68AA3384B2F5DFACCA437923D137C14E86FB8A10207CF3BED0C8D4',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }
    ]
  },
  codebase: {
    gitRepo: 'https://github.com/elys-network/elys',
    recommendedVersion: 'v0.12.0',
    compatibleVersions: ['v0.12.0'],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    genesis: {
      genesisUrl: 'https://snapshots.polkachu.com/testnet-genesis/elys/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47'
    },
    ibc: {
      type: 'go',
      version: 'v7.3.0'
    },
    cosmwasm: {
      enabled: false
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-testnet-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://elys-testnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-rpc.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://elys-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://elys-testnet-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://elys-testnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-api.kleomedes.network:443',
        provider: 'Kleomedes'
      },
      {
        address: 'https://elys-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'services.staketab.com:9390',
        provider: 'Staketab'
      },
      {
        address: 'elys-testnet-grpc.itrocket.net:38090',
        provider: 'itrocket'
      },
      {
        address: 'elys-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Elys-Testnet',
      txPage: 'https://explorer.stavr.tech/Elys-Testnet/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Elys-Testnet/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.elys.network/elys',
      txPage: 'https://testnet.elys.network/elys/tx/${txHash}'
    },
    {
      kind: 'itrocket',
      url: 'https://testnet.itrocket.net/elys',
      txPage: 'https://testnet.itrocket.net/elys/staking/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/elys/account/${accountAddress}'
    }
  ]
};
export default info;