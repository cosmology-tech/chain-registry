import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'dymensionplaygroundtestnet',
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
  codebase: {
    gitRepo: 'https://github.com/dymensionxyz/dymension'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.svg'
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
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/dymensionplaygroundtestnet/images/dymension-logo.svg'
    }]
};
export default info;