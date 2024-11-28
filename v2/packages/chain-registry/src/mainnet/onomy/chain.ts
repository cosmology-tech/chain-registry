import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'onomy',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://onomy.io/',
  prettyName: 'Onomy',
  chainType: 'cosmos',
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
    gitRepo: 'https://github.com/onomyprotocol/onomy',
    recommendedVersion: 'v1.1.4',
    compatibleVersions: ['v1.1.4'],
    binaries: {
      "linux/amd64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd',
      "linux/arm64": 'https://github.com/onomyprotocol/onomy/releases/download/v1.1.4/onomyd-arm'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.28'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/onomyprotocol/onomy/main/genesis/mainnet/genesis-mainnet-1.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/onomyprotocol/onomy-sdk',
      version: 'v0.45.16',
      tag: 'v0.45.16-onomy-dev'
    },
    ibc: {
      type: 'go',
      version: 'v4.4.2'
    }
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
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/onomy-protocol',
      txPage: 'https://www.mintscan.io/onomy-protocol/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/onomy-protocol/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/onomy',
      txPage: 'https://staking-explorer.com/transaction.php?chain=onomy&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=onomy&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/onomy',
      txPage: 'https://ezstaking.app/onomy/txs/${txHash}',
      accountPage: 'https://ezstaking.app/onomy/account/${accountAddress}'
    }
  ],
  keywords: [
    'dex',
    'stablecoin',
    'bridge',
    'staking',
    'ics',
    'rwa'
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/onomy/images/nom.svg',
      theme: {
        primaryColorHex: '#1c1c28'
      }
    }]
};
export default info;