import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'ethereum',
  status: 'live',
  website: 'https://ethereum.org/',
  networkType: 'mainnet',
  prettyName: 'Ethereum Mainnet',
  chainType: 'eip155',
  chainId: '1',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'wei',
        fixedMinGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'wei'
      }]
  },
  explorers: [{
      kind: 'Etherscan',
      url: 'https://etherscan.io/',
      txPage: 'https://etherscan.io/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'ethereum',
        baseDenom: 'wei'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
      theme: {
        primaryColorHex: '#303030'
      }
    }]
};
export default info;