import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'blockxtestnet',
  chainType: 'cosmos',
  chainId: 'blockx_19077-1',
  prettyName: 'BlockX-Atlantis-Testnet',
  website: 'https://www.blockxnet.com/',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'blockx',
  slip44: 118,
  daemonName: 'blockxd',
  nodeHome: '$HOME/.blockxd',
  keyAlgos: ['ethsecp256k1'],
  staking: {
    stakingTokens: [{
        denom: 'abcx'
      }]
  }
};
export default info;