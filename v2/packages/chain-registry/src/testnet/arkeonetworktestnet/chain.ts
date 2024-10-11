import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'arkeonetworktestnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'Arkeo Network',
  chainType: 'cosmos',
  chainId: 'arkeo',
  bech32Prefix: 'tarkeo',
  daemonName: 'arkeod',
  nodeHome: '$HOME/.arkeo',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uarkeo'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uarkeo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/arkeonetwork/arkeo'
  },
  apis: {
    rpc: [
      {
        address: 'https://arkeonetwork-testnet.nodejumper.io:26657',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://test-arkeo-rpc.kynraze.com',
        provider: 'kynraze'
      },
      {
        address: 'https://testnet-arkeo-rpc.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://arkeo-rpc.siriusnodes.uk',
        provider: 'siriusnodes'
      },
      {
        address: 'http://seed.arkeo.network:26657',
        provider: 'arkeo'
      }
    ],
    rest: [
      {
        address: 'https://arkeonetwork-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://test-arkeo-api.kynraze.com',
        provider: 'kynraze'
      },
      {
        address: 'https://testnet-arkeo-api.lavenderfive.com',
        provider: 'lavenderfive'
      },
      {
        address: 'https://arkeo-api.siriusnodes.uk',
        provider: 'siriusnodes'
      },
      {
        address: 'http://seed.arkeo.network:1317',
        provider: 'arkeo'
      }
    ],
    grpc: [{
        address: 'https://arkeonetwork-testnet.nodejumper.io:9090/',
        provider: 'NODEJUMPER'
      }]
  },
  explorers: [{
      url: 'https://explorer.nodexcapital.com/arkeo',
      txPage: 'https://explorer.nodexcapital.com/arkeo/tx/${txHash}'
    }]
};
export default info;