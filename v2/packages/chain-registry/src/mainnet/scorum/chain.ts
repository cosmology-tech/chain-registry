import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'scorum',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://scorum.com/',
  prettyName: 'Scorum Network',
  chainType: 'cosmos',
  chainId: 'scorum-1',
  bech32Prefix: 'scorum',
  daemonName: 'scorumd',
  nodeHome: '$HOME/.scorum',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'gas',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nscr'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/scorum/cosmos-network',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/scorum/cosmos-network/main/genesis/mainnet/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg'
  },
  apis: {
    rpc: [{
        address: 'https://scorum-blockchain-mainnet-rpc.scorum.com',
        provider: 'scorum'
      }],
    rest: [{
        address: 'https://scorum-blockchain-mainnet-api.scorum.com',
        provider: 'scorum'
      }],
    grpc: [{
        address: 'https://scorum-blockchain-mainnet-grpc.scorum.com',
        provider: 'scorum'
      }]
  },
  explorers: [{
      kind: 'ezstaking',
      url: 'https://ezstaking.app/scorum',
      txPage: 'https://ezstaking.app/scorum/txs/${txHash}',
      accountPage: 'https://ezstaking.app/scorum/account/${accountAddress}'
    }, {
      kind: 'bigdipper',
      url: 'https://cosmos.scorum.com/scorum',
      txPage: 'https://cosmos.scorum.com/scorum/transactions/${txHash}',
      accountPage: 'https://cosmos.scorum.com/scorum/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg',
      theme: {
        primaryColorHex: '#242424'
      }
    }]
};
export default info;