import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'microtick',
  status: 'killed',
  networkType: 'mainnet',
  prettyName: 'Microtick',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/microtick/mtzone',
    recommendedVersion: 'mtm-v2.0.4',
    compatibleVersions: ['mtm-v2.0.4'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/microtick/stargate-genesis/master/genesis.json'
    },
    versions: [{
        name: 'mtm-v2.0.4',
        recommendedVersion: 'mtm-v2.0.4',
        compatibleVersions: ['mtm-v2.0.4']
      }]
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
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
      theme: {
        primaryColorHex: '#6bab14'
      }
    }]
};
export default info;