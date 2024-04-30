import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'gateway',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://wormhole.com',
  prettyName: 'Wormhole Gateway',
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
  staking: {
    stakingTokens: [{
        denom: 'uworm'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'github.com/wormhole-foundation/cosmos-sdk@v0.45.9-wormhole-2',
    cosmwasmEnabled: true,
    cosmwasmVersion: 'github.com/wormhole-foundation/wasmd@v0.30.0-wormchain-2'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      theme: {
        primaryColorHex: '#0F0C48'
      }
    }, {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/wormhole_logo.svg'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/gateway/images/gateway_logo.png'
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