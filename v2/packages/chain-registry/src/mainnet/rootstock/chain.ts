import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'rootstock',
  status: 'live',
  website: 'https://rootstock.io/',
  networkType: 'mainnet',
  prettyName: 'Rootstock',
  chainType: 'eip155',
  chainId: '30',
  slip44: 137,
  fees: {
    feeTokens: [{
        denom: 'sat'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'sat'
      }]
  },
  description: 'The longest running and leading Bitcoin sidechain. Deploy dApps and EVM-compatible smart contracts secured by the world’s most accessible, decentralized and secure blockchain.',
  explorers: [{
      kind: 'Rootstock Explorer',
      url: 'https://explorer.rootstock.io/',
      txPage: 'https://explorer.rootstock.io/tx/${txHash}'
    }],
  images: [{
      imageSync: {
        chainName: 'rootstock',
        baseDenom: 'sat'
      },
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
      theme: {
        circle: false,
        primaryColorHex: '#FF9931',
        backgroundColorHex: '#00000000'
      }
    }]
};
export default info;