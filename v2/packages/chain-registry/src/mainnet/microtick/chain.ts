import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'microtick',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'Microtick',
  chainId: 'microtick-1',
  bech32Prefix: 'micro',
  daemonName: 'mtm',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utick',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utick'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/microtick',
      txPage: 'https://ping.pub/microtick/tx/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg'
    }]
};
export default info;