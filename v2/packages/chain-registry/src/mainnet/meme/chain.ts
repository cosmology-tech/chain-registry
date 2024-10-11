import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'meme',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'MEME',
  chainType: 'cosmos',
  chainId: 'meme-1',
  bech32Prefix: 'meme',
  daemonName: 'memed',
  nodeHome: '$HOME/.memed',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'umeme',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.035,
        highGasPrice: 0.045
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'umeme'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/memecosmos/meme/',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/memecosmos/mainnet/raw/main/meme-1/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-meme-1.meme.sx/',
        provider: 'MEME Foundation'
      },
      {
        address: 'https://meme-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-meme.pupmos.network/',
        provider: 'PUPMØS'
      },
      {
        address: 'https://meme.rpc.m.anode.team',
        provider: 'ANODE TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-meme-1.meme.sx/',
        provider: 'MEME Foundation'
      },
      {
        address: 'https://meme-api.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://api-meme.pupmos.network/',
        provider: 'PUPMØS'
      },
      {
        address: 'https://meme.api.m.anode.team',
        provider: 'ANODE TEAM'
      },
      {
        address: 'https://meme.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }
    ],
    grpc: [{
        address: 'meme-grpc.polkachu.com:14790',
        provider: 'Polkachu'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/meme',
      txPage: 'https://ping.pub/meme/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/meme',
      txPage: 'https://atomscan.com/meme/transactions/${txHash}',
      accountPage: 'https://atomscan.com/meme/accounts/${accountAddress}'
    },
    {
      kind: 'MEME Explorer',
      url: 'https://explorer.meme.sx/meme',
      txPage: 'https://explorer.meme.sx/meme/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/meme',
      txPage: 'https://atomscan.com/meme/transactions/${txHash}',
      accountPage: 'https://atomscan.com/meme/accounts/${accountAddress}'
    },
    {
      kind: 'Brochain',
      url: 'https://explorer.brocha.in/meme',
      txPage: 'https://explorer.brocha.in/meme/tx/${txHash}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/meme',
      txPage: 'https://explorer.stake-take.com/meme/tx/${txHash}',
      accountPage: 'https://explorer.stake-take.com/meme/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Meme',
      txPage: 'https://explorer.stavr.tech/Meme/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Meme/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/meme/images/meme.svg',
      theme: {
        primaryColorHex: '#b7dcd8'
      }
    }]
};
export default info;