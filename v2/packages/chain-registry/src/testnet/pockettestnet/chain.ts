import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'pockettestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.pokt.network/',
  prettyName: 'Pocket Beta TestNet',
  chainType: 'cosmos',
  chainId: 'pocket-beta',
  bech32Prefix: 'pokt@',
  daemonName: 'poktrolld',
  nodeHome: '$HOME/.poktroll',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'upokt',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.0025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upokt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/pokt-network/poktroll',
    recommendedVersion: 'v0.0.11-rc',
    compatibleVersions: ['v0.0.11-rc'],
    binaries: {
      "linux/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.0.11-rc/poktroll_linux_amd64.tar.gz',
      "linux/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.0.11-rc/poktroll_linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/pokt-network/poktroll/releases/download/v0.0.11-rc/poktroll_darwin_amd64.tar.gz',
      "darwin/arm64": 'https://github.com/pokt-network/poktroll/releases/download/v0.0.11-rc/poktroll_darwin_arm64.tar.gz'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.10'
    },
    genesis: {
      name: 'v0.0.11-rc',
      genesisUrl: 'https://github.com/pokt-network/pocket-network-genesis/blob/master/shannon/testnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.9'
    },
    ibc: {
      type: 'go'
    },
    cosmwasm: {
      enabled: false
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg'
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.png'
    }],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/pocket/images/pokt-icon.svg'
  },
  apis: {
    rpc: [{
        address: 'https://shannon-testnet-grove-rpc.beta.poktroll.com',
        provider: 'Grove'
      }],
    rest: [{
        address: 'https://shannon-testnet-grove-api.beta.poktroll.com',
        provider: 'Grove'
      }]
  },
  explorers: [{
      kind: '🔍 POKTScan Explorer 🔎',
      url: 'https://shannon-beta.poktscan.com/',
      txPage: 'https://shannon-beta.poktscan.com/tx/${txHash}',
      accountPage: 'https://shannon-beta.poktscan.com/accounts/${accountAddress}'
    }, {
      kind: '🗺 Shannon Explorer (stakenodes.org) 🗺',
      url: 'https://shannon.beta.testnet.pokt.network/',
      txPage: 'https://shannon.beta.testnet.pokt.network/poktroll/tx/${txHash}',
      accountPage: 'https://shannon.beta.testnet.pokt.network/poktroll/account/${accountAddress}'
    }],
  keywords: [
    'rpc',
    'api',
    'modular',
    'data'
  ]
};
export default info;