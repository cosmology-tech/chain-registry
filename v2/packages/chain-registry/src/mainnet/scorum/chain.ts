import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'scorum',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://scorum.com/',
  prettyName: 'Scorum Network',
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
        denom: 'nsp'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg'
  },
  apis: {
    rpc: [{
        address: 'https://scorum-blockchain-mainnet-rpc-1.scorum.com',
        provider: 'scorum'
      }, {
        address: 'https://scorum-blockchain-mainnet-rpc-2.scorum.com',
        provider: 'scorum'
      }],
    rest: [{
        address: 'https://scorum-blockchain-mainnet-api-1.scorum.com',
        provider: 'scorum'
      }, {
        address: 'https://scorum-blockchain-mainnet-api-2.scorum.com',
        provider: 'scorum'
      }],
    grpc: [{
        address: 'https://scorum-blockchain-mainnet-grpc-1.scorum.com',
        provider: 'scorum'
      }, {
        address: 'https://scorum-blockchain-mainnet-grpc-2.scorum.com',
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
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scorum.svg'
    }]
};
export default info;