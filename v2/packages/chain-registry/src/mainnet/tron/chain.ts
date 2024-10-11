import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'tron',
  chainType: 'unknown',
  status: 'live',
  website: 'https://tron.network/',
  networkType: 'mainnet',
  prettyName: 'Tron',
  slip44: 195,
  fees: {
    feeTokens: [{
        denom: 'sun',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'sun'
      }]
  },
  explorers: [{
      kind: 'TRONSCAN',
      url: 'https://tronscan.org/',
      txPage: 'https://tronscan.org/#/transaction//${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'tron',
        baseDenom: 'sun'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tron/images/trx.png',
      theme: {
        circle: true,
        primaryColorHex: '#FF060A',
        backgroundColorHex: '#FF060A'
      }
    }]
};
export default info;