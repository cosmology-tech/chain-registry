import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'passage1',
  chainId: 'passage-1',
  prettyName: 'Passage',
  status: 'killed',
  networkType: 'mainnet',
  website: 'https://passage3d.com/',
  bech32Prefix: 'pasg',
  daemonName: 'passage',
  nodeHome: '$HOME/.passage',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'upasg',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'upasg'
      }]
  },
  codebase: {

  },
  explorers: [
    {
      kind: 'aneka',
      url: 'https://passage.aneka.io',
      txPage: 'https://passage.aneka.io/txs/${txHash}',
      accountPage: 'https://passage.aneka.io/accounts/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/passage',
      txPage: 'https://www.mintscan.io/passage/txs/${txHash}',
      accountPage: 'https://www.mintscan.io/passage/account/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/passage',
      txPage: 'https://ezstaking.app/passage/txs/${txHash}',
      accountPage: 'https://ezstaking.app/passage/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/passage',
      txPage: 'https://atomscan.com/passage/transactions/${txHash}',
      accountPage: 'https://atomscan.com/passage/accounts/${accountAddress}'
    }
  ],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/passage/images/pasg.png'
    }]
};
export default info;