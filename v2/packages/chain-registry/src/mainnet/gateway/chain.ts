import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'gateway',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://wormhole.com',
  prettyName: 'Wormhole Gateway',
  chainType: 'cosmos',
  chainId: 'wormchain',
  bech32Prefix: 'wormhole',
  daemonName: 'wormchaind',
  nodeHome: '$HOME/.wormchaind',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utest',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/wormhole-foundation/wormhole',
    recommendedVersion: 'v2.23.0',
    consensus: {
      type: 'tendermint',
      version: 'v0.34.24',
      repo: 'https://github.com/tendermint/tendermint'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/wormhole-foundation/wormhole/blob/main/wormchain/mainnet/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/wormhole-foundation/cosmos-sdk',
      version: 'v0.45.9',
      tag: 'v0.45.9-wormhole-2'
    },
    ibc: {
      type: 'go',
      version: '4.2.2',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      repo: 'https://github.com/wormhole-foundation/wasmd',
      version: 'v0.30.0',
      tag: 'v0.30.0-wormchain-2',
      enabled: true
    }
  },
  images: [{
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_icon.svg',
      theme: {
        backgroundColorHex: '#231b3b',
        primaryColorHex: '#231b3b',
        circle: false
      }
    }, {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_circle.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_circle.png',
      theme: {
        backgroundColorHex: '#231b3b',
        primaryColorHex: '#231b3b',
        circle: true
      }
    }],
  logoURIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_icon.svg'
  },
  apis: {
    rpc: [{
        address: 'https://tncnt-eu-wormchain-main-01.rpc.p2p.world/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-rpc.quickapi.com/',
        provider: 'ChainLayer'
      }],
    rest: [{
        address: 'https://tncnt-eu-wormchain-main-01.rpc.p2p.world/lcd/',
        provider: 'P2P'
      }, {
        address: 'https://wormchain-lcd.quickapi.com/',
        provider: 'ChainLayer'
      }],
    grpc: [{
        address: 'tncnt-eu-wormchain-main-01-grpc.rpc.p2p.world:80',
        provider: 'P2P'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://bigdipper.live/wormhole',
      txPage: 'https://bigdipper.live/wormhole/transactions/${txHash}',
      accountPage: 'https://bigdipper.live/wormhole/accounts/${accountAddress}'
    }],
  keywords: ['bridge']
};
export default info;