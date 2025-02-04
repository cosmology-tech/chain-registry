import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'elystestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Elys Network',
  chainType: 'cosmos',
  chainId: 'elysicstestnet-1',
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
        denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }
    ]
  },
  codebase: {
    gitRepo: 'https://github.com/elys-network/elys',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.12'
    },
    genesis: {
      genesisUrl: 'https://github.com/elys-network/networks/blob/main/testnet/elysicstestnet-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
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
        address: 'https://elys-testnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-testnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/elys',
      txPage: 'https://testnet.ping.pub/elys/tx/${txHash}',
      accountPage: 'https://testnet.ping.pub/elys/account/${accountAddress}'
    }, {
      kind: 'itrocket',
      url: 'https://testnet.itrocket.net/elys',
      txPage: 'https://testnet.itrocket.net/elys/staking/tx/${txHash}',
      accountPage: 'https://testnet.itrocket.net/elys/account/${accountAddress}'
    }]
};
export default info;