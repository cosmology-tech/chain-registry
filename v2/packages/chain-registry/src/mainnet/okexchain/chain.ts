import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'okexchain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'OKExChain',
  chainType: 'cosmos',
  chainId: 'exchain-66',
  bech32Prefix: 'ex',
  daemonName: 'exchaind',
  nodeHome: '$HOME/.exchaind',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'wei',
        lowGasPrice: 200000000,
        averageGasPrice: 250000000,
        highGasPrice: 400000000
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/okex/exchain',
    recommendedVersion: 'v1.6.1.1',
    compatibleVersions: ['v1.2.2', 'v1.6.1.1'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/okx/mainnet/main/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
  },
  apis: {
    rpc: [{
        address: 'https://exchaintmrpc.okex.org',
        provider: 'okx chain'
      }],
    rest: []
  },
  explorers: [{
      kind: 'OKLink',
      url: 'https://www.oklink.com/en/okc',
      txPage: 'https://www.oklink.com/en/okc/tx/${txHash}',
      accountPage: 'https://www.oklink.com/en/okc/address/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png',
      theme: {
        primaryColorHex: '#bbbbbb'
      }
    }]
};
export default info;