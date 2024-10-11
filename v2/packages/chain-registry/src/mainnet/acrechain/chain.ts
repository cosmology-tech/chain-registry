import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'acrechain',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://arable.finance/',
  prettyName: 'Acrechain',
  chainType: 'cosmos',
  chainId: 'acre_9052-1',
  bech32Prefix: 'acre',
  nodeHome: '$HOME/.acred',
  daemonName: 'acred',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aacre',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 20000000000,
        averageGasPrice: 25000000000,
        highGasPrice: 40000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aacre'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ArableProtocol/acrechain',
    recommendedVersion: 'v1.1.1',
    compatibleVersions: ['v1.1.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ArableProtocol/acrechain/main/networks/mainnet/acre_9052-1/genesis.json'
    },
    versions: [{
        name: 'v1.1.1',
        recommendedVersion: 'v1.1.1',
        compatibleVersions: ['v1.1.1']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.acre.nodestake.top',
        provider: 'nodestake'
      },
      {
        address: 'https://rpc-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://acrechain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://acred-rpc.staketab.org:443',
        provider: 'Staketab'
      }
    ],
    rest: [
      {
        address: 'https://lcd-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://acrechain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://acred-rest.staketab.org',
        provider: 'Staketab'
      }
    ],
    grpc: [
      {
        address: 'grpc.acre.nodestake.top:443',
        provider: 'Nodestake'
      },
      {
        address: 'acrechain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'acre-grpc.genznodes.dev:27090',
        provider: 'genznodes'
      },
      {
        address: 'services.staketab.com:9008',
        provider: 'Staketab'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://jsonrpc-acre.d-stake.xyz',
        provider: 'D-stake'
      },
      {
        address: 'https://rpc2-acre.synergynodes.com',
        provider: 'Synergy Nodes'
      },
      {
        address: 'https://jsonrpc.acre.nodestake.top',
        provider: 'Nodestake'
      },
      {
        address: 'https://acre-rpc-evm.genznodes.dev/',
        provider: 'genznodes'
      },
      {
        address: 'https://evm-acre.sr20de.xyz/',
        provider: 'Sr20de'
      },
      {
        address: 'https://evm.acrescan.com/',
        provider: 'Anonstake'
      },
      {
        address: 'https://json-rpc.acre.tcnetwork.io',
        provider: 'TC Network'
      },
      {
        address: 'https://mainnet-acre-evm.konsortech.xyz',
        provider: 'KonsorTech'
      }
    ]
  },
  explorers: [
    {
      kind: 'blockscout',
      url: 'https://acrescout.mindheartsoul.org',
      txPage: 'https://acrescout.mindheartsoul.org/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://acrescan.com',
      txPage: 'https://acrescan.com/tx/${txHash}'
    },
    {
      kind: 'blockscout',
      url: 'https://acreblockexplorer.jet-node.com',
      txPage: 'https://acreblockexplorer.jet-node.com/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodestake.top/acre',
      txPage: 'https://explorer.nodestake.top/acre/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://cosmosrun.info/acre-mainnet',
      txPage: 'https://cosmosrun.info/acre-mainnet/tx/${txHash}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/acre',
      txPage: 'https://explorer.tcnetwork.io/acre/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg',
      theme: {
        primaryColorHex: '#4aa29e'
      }
    }]
};
export default info;