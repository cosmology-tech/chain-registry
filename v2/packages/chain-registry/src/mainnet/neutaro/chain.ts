import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'neutaro',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://neutaro.com/',
  prettyName: 'Neutaro',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/Neutaro/Neutaro',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'http://154.26.153.186/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg'
  },
  description: 'The Blockchain that is Pioneering Ethical Standards, Values, and Transparency in cross chain Blockchain Technology to drive innovation',
  apis: {
    rpc: [{
        address: 'https://rpc2.neutaro.io:443',
        provider: 'Neutaro'
      }, {
        address: 'https://rpc3.neutaro.io:443',
        provider: 'Neutaro'
      }],
    rest: [{
        address: 'https://api2.neutaro.io:443',
        provider: 'Neutaro'
      }, {
        address: 'https://api3.neutaro.io:443',
        provider: 'Neutaro'
      }],
    grpc: [{
        address: 'https://grpc2.neutaro.io:443',
        provider: 'Neutaro'
      }, {
        address: 'https://grpc3.neutaro.io:443',
        provider: 'Neutaro'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.neutaro.io/Neutaro',
      txPage: 'https://explorer.neutaro.io/Neutaro/tx/${txHash}',
      accountPage: 'https://explorer.neutaro.io/Neutaro/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
      theme: {
        primaryColorHex: '#cbfb06'
      }
    }]
};
export default info;