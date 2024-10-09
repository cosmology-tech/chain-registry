import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'noble',
  chainId: 'noble-1',
  website: 'https://nobleassets.xyz/',
  prettyName: 'Noble',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'noble',
  daemonName: 'nobled',
  nodeHome: '$HOME/.noble',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uusdc',
        fixedMinGasPrice: 0.1,
        lowGasPrice: 0.1,
        averageGasPrice: 0.1,
        highGasPrice: 0.2
      }, {
        denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.01,
        highGasPrice: 0.02
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustake'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    cosmosSdkVersion: 'v0.45.16',
    cosmwasmEnabled: false
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
  },
  description: 'The most reliable, secure, and frictionless way to natively issue a digital asset in Cosmos.',
  apis: {
    rpc: [{
        address: 'https://noble-rpc.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://noble-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }],
    rest: [{
        address: 'https://noble-api.polkachu.com',
        provider: 'polkachu'
      }, {
        address: 'https://noble-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }],
    grpc: [{
        address: 'noble-grpc.polkachu.com:21590',
        provider: 'polkachu'
      }, {
        address: 'https://noble-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/noble',
      txPage: 'https://www.mintscan.io/noble/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/noble/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/noble',
      txPage: 'https://ezstaking.app/noble/txs/${txHash}',
      accountPage: 'https://ezstaking.app/noble/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explore.strange.love/noble-1',
      txPage: 'https://explore.strange.love/noble-1/tx/${txHash}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/noble',
      accountPage: 'https://stakeflow.io/noble/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
    }]
};
export default info;