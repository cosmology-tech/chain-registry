import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'ton',
  chainType: 'unknown',
  status: 'live',
  website: 'https://ton.tg/',
  networkType: 'mainnet',
  prettyName: 'TON (The Open Network)',
  slip44: 607,
  fees: {
    feeTokens: [{
        denom: 'nanoton',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nanoton'
      }]
  },
  explorers: [{
      kind: 'Tonscan',
      url: 'https://tonscan.org/',
      txPage: 'https://tonscan.org/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'ton',
        baseDenom: 'nanoton'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
      theme: {
        circle: true,
        primaryColorHex: '#0088CC',
        backgroundColorHex: '#0088CC'
      }
    }]
};
export default info;