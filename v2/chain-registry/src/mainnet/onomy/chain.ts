import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'onomy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://onomy.io/',
  prettyName: 'Onomy',
  chainId: 'onomy-mainnet-1',
  bech32Prefix: 'onomy',
  daemonName: 'onomyd',
  nodeHome: '$HOME/.onomyd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'anom',
        lowGasPrice: 0,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'anom'
      }]
  },
  codebase: {
    cosmosSdkVersion: 'onomyprotocol/onomy-sdk v0.45.16-onomy-dev'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png'
  },
  apis: {
    rpc: [{
        address: 'https://rpc-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    rest: [{
        address: 'https://rest-mainnet.onomy.io',
        provider: 'onomy'
      }, {
        address: 'https://onomy-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      txPage: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}'
    }, {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      txPage: 'https://ezstaking.app/onomy/txs/${txHash}',
      accountPage: 'https://ezstaking.app/onomy/account/${accountAddress}'
    }],
  keywords: [
    'dex',
    'stablecoin',
    'bridge',
    'staking',
    'ics',
    'rwa'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png'
    }]
};
export default info;