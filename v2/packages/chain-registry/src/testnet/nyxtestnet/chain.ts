import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nyxtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://nymtech.net/',
  prettyName: 'Nym',
  chainType: 'cosmos',
  chainId: 'sandbox',
  bech32Prefix: 'n',
  daemonName: 'nyxd',
  nodeHome: '$HOME/.nyxd',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unym',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }, {
        denom: 'unyx',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unyx'
      }],
    lockDuration: {
      time: '432000s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/nymtech/nyxd',
    recommendedVersion: 'v0.43.0',
    compatibleVersions: ['v0.43.0'],
    binaries: {
      "linux/amd64": 'https://github.com/nymtech/nyxd/releases/tag/v0.43.0'
    },
    genesis: {
      genesisUrl: 'https://rpc.sandbox.nymtech.net/genesis'
    },
    cosmwasm: {
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sandbox.nymtech.net',
        provider: 'Nym'
      }],
    rest: [{
        address: 'https://api.sandbox.nymtech.net',
        provider: 'Nym'
      }],
    grpc: [{
        address: 'grpc.sandbox.nymtech.net:443',
        provider: 'Nym'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://sandbox-blocks.nymtech.net/sandbox',
      txPage: 'https://sandbox-blocks.nymtech.net/sandbox/tx/${txHash}'
    }],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
      theme: {
        darkMode: false,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.svg',
      theme: {
        darkMode: true,
        circle: true
      }
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png'
    }
  ]
};
export default info;