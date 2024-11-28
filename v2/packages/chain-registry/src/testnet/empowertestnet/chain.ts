import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'empowertestnet',
  chainType: 'cosmos',
  chainId: 'circulus-1',
  prettyName: 'Empower Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'empower',
  daemonName: 'empowerd',
  nodeHome: '$HOME/.empowerchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umpwr',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/empowerchain/empowerchain',
    recommendedVersion: 'v1.0.0-rc1',
    compatibleVersions: ['v1.0.0-rc1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/empowerchain/empowerchain/main/testnets/circulus-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://empower-testnet-rpc.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://empower.rpc.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://rpc-t.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc-empower.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://empower-testnet.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://empower-testnet-rpc.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://rpc.circulus-1.empower.aviaone.com:443',
        provider: 'AviaOne'
      }
    ],
    rest: [
      {
        address: 'https://empower-testnet-api.polkachu.com:443',
        provider: 'Polkachu'
      },
      {
        address: 'https://empower.api.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'https://empw.api.t.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-t.empower.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-empower.nodeist.net:443',
        provider: 'Nodeist'
      },
      {
        address: 'https://empower-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://empower-testnet-api.itrocket.net:443',
        provider: 'ITRocket'
      },
      {
        address: 'https://api.circulus-1.empower.aviaone.com',
        provider: 'AviaOne'
      }
    ],
    grpc: [
      {
        address: 'empower-testnet-grpc.polkachu.com:17490',
        provider: 'Polkachu'
      },
      {
        address: 'empower.grpc.cumulo.com.es:443',
        provider: 'Cumulo'
      },
      {
        address: 'grpc-t.empower.nodestake.top:9090',
        provider: 'NodeStake'
      },
      {
        address: 'empower-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      },
      {
        address: 'empower-testnet-grpc.itrocket.net:16090',
        provider: 'ITRocket'
      },
      {
        address: 'grpc.circulus-1.empower.aviaone.com:443',
        provider: 'AviaOne'
      }
    ]
  },
  explorers: [
    {
      kind: 'exploreme',
      url: 'https://empowerchain.exploreme.pro',
      txPage: 'https://empowerchain.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.nodeist.net/Empower',
      txPage: 'https://exp.nodeist.net/Empower/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Empower',
      txPage: 'https://explorer.stavr.tech/Empower/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top/empower-testnet',
      txPage: 'https://explorer.nodestake.top/empower-testnet/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.itrocket.net/empower/staking',
      txPage: 'https://testnet.itrocket.net/empower/staking/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.stavr.tech/empower',
      txPage: 'https://explorer.stavr.tech/empower/tx/${txHash}'
    }
  ]
};
export default info;