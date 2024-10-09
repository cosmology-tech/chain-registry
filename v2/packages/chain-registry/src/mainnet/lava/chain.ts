import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lava',
  status: 'upcoming',
  networkType: 'mainnet',
  website: 'https://lavanet.xyz/',
  updateLink: 'https://raw.githubusercontent.com/lavanet/lava/main/chain.schema.json',
  prettyName: 'Lava',
  chainId: 'lava-mainnet-1',
  bech32Prefix: 'lava@',
  daemonName: 'lavad',
  nodeHome: '$HOME/.lava',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulava',
        fixedMinGasPrice: 1e-9,
        lowGasPrice: 1e-9,
        averageGasPrice: 0.00005,
        highGasPrice: 0.0001
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulava'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'github.com/lavanet/cosmos-sdk@v0.47.x-lava',
    cosmwasmEnabled: false
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png',
      theme: {
        primaryColorHex: '#FF3900'
      },
      layout: 'logo',
      textPosition: 'right'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava.png',
      layout: 'logomark'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lava/images/lava-chain-logo.png'
  },
  description: 'Lava (LAVA) is the data access layer of the modular stack. developers and ecosystems permissionlessly add services to be served or accessed through lava. featuring a fully decentralized open source sdk integrable in frontends and a battle tested fully scalable open source server kit and can be used locally or through managed endpoints. Lava features rpc data access, indexing services, debug apis, archive access and more. Service providers can join the network, earn rewards either in the native token of the chain via token bought subscriptions on chain or through any ibc transferred token via incentive pools created and funded by ecosystems and DAOs. Developers can use the abstraction and go multi chain in seconds, not needing to choose what tools to use, having the access aggregated for them. Build whatever, wherever.',
  apis: {
    rpc: [
      {
        address: 'https://lava-rpc.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava-rpc.finteh.org:443',
        provider: 'finteh'
      },
      {
        address: 'https://lava-rpc.y2.finance:443',
        provider: 'YTWOFUND'
      },
      {
        address: 'https://lava-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://lava-api.w3coins.io:443',
        provider: 'w3coins'
      },
      {
        address: 'https://lava.api.staking-explorer.com',
        provider: 'Daily DROP'
      },
      {
        address: 'https://lava-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'w3coins',
      url: 'https://lava-explorer.w3coins.io/Lava',
      txPage: 'https://lava-explorer.w3coins.io/Lava/tx/${txHash}',
      accountPage: 'https://lava-explorer.w3coins.io/Lava/account/${accountAddress}'
    }],
  keywords: [
    'modular',
    'data',
    'data access',
    'rpc',
    'staking',
    'dual staking',
    'indexing',
    'incentivized public rpc'
  ]
};
export default info;