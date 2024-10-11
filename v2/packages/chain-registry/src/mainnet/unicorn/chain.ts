import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'unicorn',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://unicorn.meme/',
  prettyName: 'Unicorn',
  chainType: 'cosmos',
  chainId: 'unicorn-420',
  bech32Prefix: 'unicorn',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uwunicorn',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uwunicorn'
      }]
  }
};
export default info;