import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lorenzo',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.lorenzo-protocol.xyz/',
  prettyName: 'Lorenzo Protocol',
  chainType: 'cosmos',
  chainId: 'lorenzo_8329-1',
  bech32Prefix: 'lrz',
  daemonName: 'lorenzod',
  nodeHome: '$HOME/.lorenzo',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'stBTC',
        fixedMinGasPrice: 2000000,
        lowGasPrice: 2000000,
        averageGasPrice: 2000000,
        highGasPrice: 8000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'alrz'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg'
  },
  description: 'Lorenzo aims to be the premier Bitcoin platform for yield-bearing token issuance, trading, and settlement.',
  codebase: {
    gitRepo: 'https://github.com/Lorenzo-Protocol/lorenzo',
    recommendedVersion: 'v3.0.0',
    compatibleVersions: ['v3.0.0'],
    genesis: {
      genesisUrl: 'https://github.com/Lorenzo-Protocol/lorenzo-genesis/blob/main/mainnet/lorenzo/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-cosmos.lorenzo-protocol.xyz/',
        provider: 'Lorenzo Protocol'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc-testnet.lorenzo-protocol.xyz/',
        provider: 'Lorenzo Protocol'
      }]
  },
  explorers: [{
      kind: 'blockscout',
      url: 'https://scan.lorenzo-protocol.xyz/',
      txPage: 'https://scan.lorenzo-protocol.xyz/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lorenzo/images/lorenzo.svg',
      theme: {
        primaryColorHex: '#133348'
      }
    }]
};
export default info;