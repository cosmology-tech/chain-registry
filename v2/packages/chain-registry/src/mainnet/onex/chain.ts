import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'onex',
  status: 'live',
  website: 'https://app.onomy.io/',
  networkType: 'mainnet',
  prettyName: 'ONEX',
  chainType: 'cosmos',
  chainId: 'onex-mainnet-1',
  bech32Prefix: 'onomy',
  daemonName: 'onexd',
  nodeHome: '$HOME/.onomy_onex',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'aonex',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aonex'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/onomyprotocol/onex',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    consensus: {
      type: 'cometbft',
      version: '0.34.28'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://raw.githubusercontent.com/onomyprotocol/onex/main/chain/onex-mainnet-1/genesis-with-ccv.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45.16'
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png',
      theme: {
        primaryColorHex: '#000000'
      }
    }],
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.onex.onomy.io',
        provider: 'pendulum'
      }],
    rest: [{
        address: 'https://rest.mainnet.onex.onomy.io',
        provider: 'pendulum'
      }],
    grpc: [{
        address: 'a.node.mainnet.onomy.io:19091',
        provider: 'pendulum'
      }]
  },
  explorers: [{
      kind: 'Dexplorer - must enter rpc link provided above',
      url: 'https://dexplorer.cakralabs.site',
      txPage: 'https://dexplorer.cakralabs.site/txs/${txHash}',
      accountPage: 'https://dexplorer.cakralabs.site/${accountAddress}'
    }],
  keywords: ['dex'],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onex/images/onex.png'
  }
};
export default info;