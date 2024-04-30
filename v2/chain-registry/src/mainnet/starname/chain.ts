import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'starname',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.starname.me/',
  prettyName: 'Starname',
  chainId: 'iov-mainnet-ibc',
  bech32Prefix: 'star',
  slip44: 234,
  alternativeSlip44s: [118],
  fees: {
    feeTokens: [{
        denom: 'uiov',
        lowGasPrice: 1,
        averageGasPrice: 2,
        highGasPrice: 3
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uiov'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
  },
  description: 'Starname is the best way to claim your part of the blockchain. You can use it for decentralized identification, payments, ownership and applications. Starname can be integrated into digital wallets, dapps and exchanges.',
  apis: {
    rpc: [{
        address: 'https://rpc-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://rpc.starname.app',
        provider: 'Chainmasters'
      }],
    rest: [{
        address: 'https://api-starname-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      }, {
        address: 'https://rest.starname.app',
        provider: 'Chainmasters'
      }],
    grpc: [{
        address: 'grpc-starname-ia.cosmosia.notional.ventures:443',
        provider: 'starname'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://ping.pub/starname',
      txPage: 'https://ping.pub/starname/tx/${txHash}'
    }, {
      kind: 'atomscan',
      url: 'https://atomscan.com/starname',
      txPage: 'https://atomscan.com/starname/transactions/${txHash}',
      accountPage: 'https://atomscan.com/starname/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/starname/images/iov.svg'
    }]
};
export default info;