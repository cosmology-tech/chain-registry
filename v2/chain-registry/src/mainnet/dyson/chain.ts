import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'dyson',
  website: 'https://dysonprotocol.com/',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Dyson Protocol',
  chainId: 'dyson-mainnet-01',
  bech32Prefix: 'dys',
  nodeHome: '$HOME/.dyson',
  daemonName: 'dysond',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'dys',
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0002,
        highGasPrice: 0.0003
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'dys'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg'
  },
  apis: {
    rpc: [{
        address: 'https://dys-tm.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-rpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    rest: [{
        address: 'https://dys-api.dysonprotocol.com:443',
        provider: 'dysonprotocol'
      }, {
        address: 'https://dyson-api.cogwheel.zone:443',
        provider: 'cogwheel'
      }],
    grpc: [{
        address: 'dys-grpc.dyson.lol:443',
        provider: 'lol'
      }, {
        address: 'https://dyson-grpc.cogwheel.zone:443',
        provider: 'cogwheel'
      }]
  },
  explorers: [{
      kind: 'dysonprotocol',
      url: 'https://explorer.dys.dysonprotocol.com/dyson/',
      txPage: 'https://explorer.dys.dysonprotocol.com/dyson/tx/${txHash}',
      accountPage: 'https://explorer.dys.dysonprotocol.com/dyson/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dyson/images/dyson.svg'
    }]
};
export default info;