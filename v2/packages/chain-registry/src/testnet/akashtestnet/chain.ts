import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'akashtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://akash.network/',
  prettyName: 'Sandbox',
  chainType: 'cosmos',
  chainId: 'sandbox-01',
  bech32Prefix: 'akash',
  daemonName: 'akash',
  nodeHome: '$HOME/.akash',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uakt',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uakt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/akash-network/node',
    recommendedVersion: 'v0.22.0',
    compatibleVersions: ['v0.22.0'],
    binaries: {
      "linux/amd64": 'https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_amd64.zip',
      "linux/arm64": 'https://github.com/akash-network/node/releases/download/v0.22.0/akash_0.22.0_linux_arm64.zip'
    },
    versions: [{
        name: 'v0',
        recommendedVersion: 'v0.22.0',
        compatibleVersions: ['v0.22.0']
      }],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/akash-network/net/master/sandbox/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.sandbox-01.aksh.pw:443',
        provider: 'akash'
      }],
    rest: [{
        address: 'https://api.sandbox-01.aksh.pw:443',
        provider: 'akash'
      }],
    grpc: [{
        address: 'grpc.sandbox-01.aksh.pw:9090',
        provider: 'akash'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.sandbox-01.aksh.pw/akash',
      txPage: 'https://explorer.sandbox-01.aksh.pw/akash/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
    }]
};
export default info;