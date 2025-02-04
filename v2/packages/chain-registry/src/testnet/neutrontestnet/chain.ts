import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'neutrontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Neutron Testnet',
  chainType: 'cosmos',
  chainId: 'pion-1',
  bech32Prefix: 'neutron',
  daemonName: 'neutrond',
  nodeHome: '$HOME/.neutrond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'untrn',
        lowGasPrice: 0.0053,
        averageGasPrice: 0.0053,
        highGasPrice: 0.0053
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/neutron-org/neutron',
    recommendedVersion: 'v4.2.2-testnet',
    compatibleVersions: ['v4.2.2-testnet'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesisUrl: 'https://github.com/cosmos/testnets/raw/master/replicated-security/pion-1/pion-1-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    ibc: {
      type: 'go',
      version: '8.2.1'
    },
    cosmwasm: {
      version: '0.51',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://neutron-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://neutron-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://rest-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://api.pion.remedy.tm.p2p.org',
        provider: 'P2P.ORG'
      },
      {
        address: 'https://rest.baryon-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://neutron-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'grpc-falcron.pion-1.ntrn.tech:80',
        provider: 'Neutron'
      }, {
        address: 'grpc.baryon.remedy.tm.p2p.org:443',
        provider: 'P2P.ORG'
      }]
  },
  explorers: [{
      kind: 'Ping.pub Explorer from Hypha',
      url: 'https://explorer.rs-testnet.polypore.xyz/pion-1',
      txPage: 'https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}',
      accountPage: 'https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}'
    }, {
      kind: 'Mintscan',
      url: 'https://mintscan.io/neutron-testnet',
      txPage: 'https://mintscan.io/neutron-testnet/txs/${txHash}',
      accountPage: 'https://mintscan.io/neutron-testnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
    }]
};
export default info;