import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'commercionetwork',
  chainType: 'cosmos',
  chainId: 'commercio-3',
  prettyName: 'Commercio.network',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'did:com:',
  daemonName: 'commercionetworkd',
  nodeHome: '$HOME/.commercionetwork',
  keyAlgos: ['secp256k1'],
  slip44: 701,
  fees: {
    feeTokens: [{
        denom: 'ucommercio'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/commercionetwork/commercionetwork',
    recommendedVersion: 'v5.1.0',
    compatibleVersions: ['v5.1.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/commercionetwork/chains/master/commercio-3/genesis.json'
    },
    versions: [
      {
        name: 'v4.0.0',
        recommendedVersion: 'v4.1.0',
        compatibleVersions: ['v4.0.0', 'v4.1.0']
      },
      {
        name: 'v4.2.0',
        recommendedVersion: 'v4.2.1',
        compatibleVersions: ['v4.2.0', 'v4.2.1']
      },
      {
        name: 'v5.0.0',
        recommendedVersion: 'v5.0.0',
        compatibleVersions: ['v5.0.0']
      },
      {
        name: 'v5.1.0',
        recommendedVersion: 'v5.1.0',
        compatibleVersions: ['v5.1.0']
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.commercio.network'
      }],
    rest: [{
        address: 'https://lcd-mainnet.commercio.network'
      }]
  },
  explorers: [{
      kind: 'almerico',
      url: 'https://mainnet.commercio.network',
      txPage: 'https://mainnet.commercio.network/transactions/detail/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/commercionetwork/images/com.svg',
      theme: {
        primaryColorHex: '#41a68c'
      }
    }]
};
export default info;