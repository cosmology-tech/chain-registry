import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'hedgetestnet',
  chainType: 'cosmos',
  chainId: 'berberis-1',
  prettyName: 'Hedge Testnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://hedgeblock.io',
  bech32Prefix: 'hedge',
  daemonName: 'hedged',
  nodeHome: '$HOME/.hedge',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uhedge',
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uhedge'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/hedgeblock/hedge'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-berberis.hedgeblock.io',
        provider: 'Hedge'
      }],
    rest: [{
        address: 'https://lcd-berberis.hedgeblock.io',
        provider: 'Hedge'
      }]
  },
  explorers: [{
      kind: 'hedgescan',
      url: 'https://berberis.hedgescan.io',
      txPage: 'https://berberis.hedgescan.io/txs/${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/hedgetestnet/images/hedge.svg'
    }]
};
export default info;