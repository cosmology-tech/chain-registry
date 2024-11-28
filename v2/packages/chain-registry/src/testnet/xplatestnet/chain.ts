import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'xplatestnet',
  status: 'live',
  website: 'https://xpla.io',
  networkType: 'testnet',
  prettyName: 'XPLA',
  chainType: 'cosmos',
  chainId: 'cube_47-5',
  bech32Prefix: 'xpla',
  daemonName: 'xplad',
  nodeHome: '$HOME/.xpla',
  keyAlgos: ['ethsecp256k1'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'axpla',
        fixedMinGasPrice: 850000000000,
        lowGasPrice: 850000000000,
        averageGasPrice: 1147500000000,
        highGasPrice: 1487500000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'axpla'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/xpladev/xpla',
    recommendedVersion: 'v1.6.0',
    compatibleVersions: ['v1.6.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    genesis: {
      genesisUrl: 'https://github.com/xpladev/testnets/blob/main/cube_47-5/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/xpladev/cosmos-sdk',
      version: 'v0.47.13',
      tag: 'v0.47.13-xpla'
    },
    ibc: {
      type: 'go',
      version: 'v7.7.0'
    },
    cosmwasm: {
      version: 'v0.46.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg'
  },
  apis: {
    rpc: [{
        address: 'https://cube-rpc.xpla.dev',
        provider: 'Holdings'
      }],
    rest: [{
        address: 'https://cube-lcd.xpla.dev',
        provider: 'Holdings'
      }],
    evmHttpJsonrpc: [{
        address: 'https://cube-evm-rpc.xpla.dev',
        provider: 'Holdings'
      }]
  },
  explorers: [{
      kind: 'explorer.xpla',
      url: 'https://explorer.xpla.io/testnet',
      txPage: 'https://explorer.xpla.io/testnet/mainnet/tx/${txHash}'
    }, {
      kind: 'finder',
      url: 'https://finder.xpla.io/testnet',
      txPage: 'https://finder.xpla.io/testnet/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xpla/images/xpla.svg',
      theme: {
        primaryColorHex: '#04b4fc'
      }
    }]
};
export default info;