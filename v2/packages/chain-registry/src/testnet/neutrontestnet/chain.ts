import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'neutrontestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Neutron Testnet',
  chainId: 'pion-1',
  bech32Prefix: 'neutron',
  daemonName: 'neutrond',
  nodeHome: '$HOME/.neutrond',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'untrn',
        lowGasPrice: 0.02,
        averageGasPrice: 0.02,
        highGasPrice: 0.02
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.47',
    cosmwasmEnabled: true,
    cosmwasmVersion: '0.45'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      }, {
        address: 'https://neutron-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      }],
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
      url: 'https://testnet.mintscan.io/neutron-testnet',
      txPage: 'https://testnet.mintscan.io/neutron-testnet/txs/${txHash}',
      accountPage: 'https://testnet.mintscan.io/neutron-testnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
    }]
};
export default info;