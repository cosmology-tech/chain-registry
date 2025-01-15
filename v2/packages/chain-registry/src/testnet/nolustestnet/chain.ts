import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nolustestnet',
  status: 'live',
  website: 'https://nolus.io/',
  networkType: 'testnet',
  prettyName: 'Nolus Testnet',
  chainType: 'cosmos',
  chainId: 'rila-3',
  bech32Prefix: 'nolus',
  daemonName: 'nolusd',
  nodeHome: '$HOME/.nolusd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unls',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unls'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/nolus-protocol/nolus-core',
    recommendedVersion: '0.6.8-rc',
    compatibleVersions: [],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/testnet/rila-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50.9'
    },
    ibc: {
      type: 'go',
      version: '8.5.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.53.0',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rila-rpc.nolus.network',
        provider: 'NolusProtocol'
      }],
    rest: [{
        address: 'https://rila-lcd.nolus.network',
        provider: 'NolusProtocol'
      }],
    grpc: [{
        address: 'https://rila-grpc.nolus.network',
        provider: 'NolusProtocol'
      }]
  },
  explorers: [{
      kind: 'Nolus Explorer',
      url: 'https://testnet.ping.pub/nolus/',
      txPage: 'https://testnet.ping.pub/nolus/tx/${txHash}',
      accountPage: 'https://testnet.ping.pub/nolus/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
    }]
};
export default info;