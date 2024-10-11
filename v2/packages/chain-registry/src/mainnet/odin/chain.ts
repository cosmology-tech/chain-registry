import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'odin',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://odinprotocol.io/',
  prettyName: 'Odin Protocol',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/ODIN-PROTOCOL/odin-core',
    recommendedVersion: 'v0.6.2',
    compatibleVersions: ['v0.6.2'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json'
    },
    versions: [{
        name: 'v0.6.2',
        recommendedVersion: 'v0.6.2',
        compatibleVersions: ['v0.6.2']
      }]
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
        address: 'https://rpc.lavenderfive.com:443/odin',
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
        address: 'https://rest.lavenderfive.com:443/odin',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [{
        address: 'odin.lavenderfive.com:443',
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