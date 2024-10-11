import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'chronicnetwork',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'Chronic Chain',
  chainType: 'cosmos',
  chainId: 'morocco-1',
  bech32Prefix: 'chronic',
  daemonName: 'chtd',
  nodeHome: '$HOME/.cht',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ucgas',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ChronicNetwork/cht',
    recommendedVersion: 'v1.1.0',
    compatibleVersions: ['v1.1.0'],
    binaries: {
      "linux/amd64": 'https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ChronicNetwork/net/main/mainnet/v1.1/genesis.json'
    },
    versions: [{
        name: 'v1.1.0',
        recommendedVersion: 'v1.1.0',
        compatibleVersions: ['v1.1.0'],
        binaries: {
          "linux/amd64": 'https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht'
        }
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc-chronic.zenchainlabs.io/',
        provider: 'ZenChainLabs'
      }],
    rest: [{
        address: 'https://api-chronic.zenchainlabs.io/',
        provider: 'ZenChainLabs'
      }]
  },
  explorers: [
    {
      kind: 'skynetexplorers',
      url: 'https://www.skynetexplorers.com/chronic-token'
    },
    {
      kind: 'Zenscan.io',
      url: 'https://www.chronic.zenscan.io'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/chronicnetwork',
      txPage: 'https://atomscan.com/chronicnetwork/transactions/${txHash}',
      accountPage: 'https://atomscan.com/chronicnetwork/accounts/${accountAddress}'
    }
  ]
};
export default info;