import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'nolustestnet',
  status: 'live',
  website: 'https://nolus.io/',
  networkType: 'testnet',
  prettyName: 'Nolus Testnet',
  chainType: 'cosmos',
  chainId: 'rila-1',
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
    recommendedVersion: 'v0.4.0',
    compatibleVersions: [],
    cosmosSdkVersion: '0.45',
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/testnet/rila-1/genesis.json'
    },
    versions: [{
        name: 'v0.3.0',
        recommendedVersion: 'v0.3.0',
        compatibleVersions: [],
        cosmosSdkVersion: '0.45',
        sdk: {
          type: 'cosmos',
          version: '0.45'
        },
        cosmwasm: {
          version: '0.31',
          enabled: true
        },
        ibc: {
          type: 'go',
          version: '4.3.0',
          icsEnabled: ['ics20-1', 'ics27-1']
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '4.3.0',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: '0.31',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rila-cl.nolus.network:26657',
        provider: 'NolusProtocol'
      }],
    rest: [{
        address: 'https://rila-cl.nolus.network:1317',
        provider: 'NolusProtocol'
      }],
    grpc: [{
        address: 'https://rila-cl.nolus.network:9090',
        provider: 'NolusProtocol'
      }]
  },
  explorers: [{
      kind: 'Nolus Explorer',
      url: 'https://explorer-rila.nolus.io/rila-1/',
      txPage: 'https://explorer-rila.nolus.io/rila-1/tx/${txHash}',
      accountPage: 'https://explorer-rila.nolus.io/rila-1/account/${accountAddress}'
    }],
  keywords: ['testnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/nolustestnet/images/nolus.svg'
    }]
};
export default info;