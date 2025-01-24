import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lefeef',
  chainType: 'cosmos',
  chainId: 'lefeef-mainnet',
  website: 'https://lefeef.net/',
  prettyName: 'lefeef',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'lefeef',
  daemonName: 'lefeefd',
  nodeHome: '$HOME/..lefeef',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulefeef',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulefeef'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/lefeef2024/lefeef-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    binaries: {
      "linux/amd64": 'https://github.com/lefeef2024/lefeef-chain/releases/download/v1.0.0/lefeefd'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/lefeef2024/lefeef-docs/refs/heads/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10',
      tag: 'v0.50.10-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.svg'
  },
  description: 'A secure, scalable blockchain empowering seamless dApps and efficient token transactions.',
  apis: {
    rpc: [{
        address: 'https://rpc.lefeef.network:2443/',
        provider: 'LEFEEF Chain'
      }],
    rest: [{
        address: 'https://rest.lefeef.network:3443/',
        provider: 'LEFEEF Chain'
      }],
    grpc: [{
        address: '85.209.95.59:9090',
        provider: 'LEFEEF Chain'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://mainnet.lefeef.network/lefeef',
      txPage: 'https://mainnet.lefeef.network/lefeef/transactions/${txHash}',
      accountPage: 'https://mainnet.lefeef.network/lefeef/accounts/${accountAddress}',
      validatorPage: 'https://mainnet.lefeef.network/lefeef/validators/${validatorAddress}',
      proposalPage: 'https://mainnet.lefeef.network/lefeef/proposals/${proposalId}',
      blockPage: 'https://mainnet.lefeef.network/lefeef/blocks/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.svg',
      theme: {
        primaryColorHex: '#6439ff'
      }
    }]
};
export default info;