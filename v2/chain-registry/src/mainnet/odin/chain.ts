import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'odin',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://odinprotocol.io/',
  prettyName: 'Odin Protocol',
  chainId: 'odin-mainnet-freya',
  bech32Prefix: 'odin',
  daemonName: 'odind',
  nodeHome: '$HOME/.odin',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'loki',
        fixedMinGasPrice: 0.0125,
        lowGasPrice: 0.025,
        averageGasPrice: 0.05,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'loki'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://34.79.179.216:26657',
        provider: 'Odin Protocol'
      },
      {
        address: 'https://odin-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'http://34.79.179.216:1317/',
        provider: 'Odin Protocol'
      },
      {
        address: 'https://odin-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [{
        address: 'odin-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'odin-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [{
      kind: 'odin web',
      url: 'https://mainnet.odinprotocol.io/',
      txPage: 'https://mainnet.odinprotocol.io/transactions/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://ping.pub/odin',
      txPage: 'https://ping.pub/odin/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'odin'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
    }]
};
export default info;