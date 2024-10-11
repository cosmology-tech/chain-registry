import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'idep',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.idep.network/',
  prettyName: 'IDEP',
  chainType: 'cosmos',
  chainId: 'Antora',
  bech32Prefix: 'idep',
  daemonName: 'idep',
  nodeHome: '$HOME/.ion',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'idep',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/IDEP-network/ion',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/IDEP-network/Antora/raw/main/iond'
    },
    genesis: {
      genesisUrl: 'https://github.com/IDEP-network/Antora/raw/main/genesis.json'
    },
    versions: [{
        name: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        binaries: {
          "linux/amd64": 'https://github.com/IDEP-network/Antora/raw/main/iond'
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg'
  },
  apis: {
    rpc: [],
    rest: [],
    grpc: [{
        address: 'idep.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [
    {
      kind: 'chadscan',
      url: 'https://chadscan.com',
      txPage: 'https://chadscan.com/transactions/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/idep',
      txPage: 'https://atomscan.com/idep/transactions/${txHash}',
      accountPage: 'https://atomscan.com/idep/accounts/${accountAddress}'
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/idep',
      txPage: 'https://explorer.tcnetwork.io/idep/transaction/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/idep/images/idep.svg',
      theme: {
        primaryColorHex: '#c5b4cf'
      }
    }]
};
export default info;