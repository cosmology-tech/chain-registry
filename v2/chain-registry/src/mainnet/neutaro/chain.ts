import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'neutaro',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://neutaro.com/',
  prettyName: 'Neutaro',
  chainId: 'Neutaro-1',
  bech32Prefix: 'neutaro',
  daemonName: 'neutaro',
  nodeHome: '$HOME/.Neutaro',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uneutaro',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.035
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uneutaro'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
  },
  description: 'The Blockchain that is Pioneering Ethical Standards, Values, and Transparency in cross chain Blockchain Technology to drive innovation',
  apis: {
    rpc: [{
        address: 'https://rpc2.neutaro.tech:443',
        provider: 'Neutaro'
      }, {
        address: 'https://rpc-neutaro.blockval.io',
        provider: 'Blockval'
      }],
    rest: [{
        address: 'https://api2.neutaro.tech:443',
        provider: 'Neutaro'
      }, {
        address: 'https://api-neutaro.blockval.io',
        provider: 'Blockval'
      }],
    grpc: [{
        address: 'https://grpc2.neutaro.tech:443',
        provider: 'Neutaro'
      }, {
        address: 'https://grpc-neutaro.blockval.io',
        provider: 'Blockval'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.neutaro.tech/Neutaro',
      txPage: 'https://explorer.neutaro.tech/Neutaro/tx/${txHash}',
      accountPage: 'https://explorer.neutaro.tech/Neutaro/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
    }]
};
export default info;