import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'dymensiontestnet1',
  chainType: 'cosmos',
  chainId: 'dymension_1405-1',
  prettyName: 'Dymension Playground Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://playground.dymension.xyz',
  bech32Prefix: 'dym',
  daemonName: 'dymd',
  nodeHome: '$HOME/.dymension',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'adym',
        lowGasPrice: 5000000000,
        averageGasPrice: 5500000000,
        highGasPrice: 6000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'adym'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
  },
  description: 'Dymension is a network of easily deployable and lightning fast modular blockchains called RollApps.',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg',
      theme: {
        primaryColorHex: '#f4e4d4'
      }
    }],
  codebase: {
    gitRepo: 'https://github.com/dymensionxyz/dymension'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-dym-migration-test-2.mzonder.com',
        provider: 'mzonder'
      }],
    rest: [{
        address: 'https://api-dym-migration-test-2.mzonder.com',
        provider: 'mzonder'
      }]
  },
  explorers: [{
      kind: 'dymscan',
      url: 'https://pg.dym.fyi/',
      txPage: 'https://pg.dym.fyi//tx/${txHash}'
    }]
};
export default info;