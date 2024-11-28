import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'shareledger',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.sharering.network/',
  prettyName: 'Shareledger',
  chainType: 'cosmos',
  chainId: 'ShareRing-VoyagerNet',
  bech32Prefix: 'shareledger',
  daemonName: 'shareledger',
  nodeHome: '$HOME/.shareledger',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'nshr',
        fixedMinGasPrice: 0,
        lowGasPrice: 2000,
        averageGasPrice: 3000,
        highGasPrice: 4000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'nshr'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ShareRing/Shareledger/',
    recommendedVersion: '1.4.1',
    compatibleVersions: ['1.4.1'],
    binaries: {
      "linux/amd64": 'https://github.com/ShareRing/Shareledger/releases/download/v1.4.1/shareledger'
    },
    consensus: {
      type: 'tendermint',
      version: '0.34'
    },
    genesis: {
      name: 'v1',
      genesisUrl: 'https://github.com/ShareRing/Shareledger/releases/download/v1.2.0/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.45'
    },
    ibc: {
      type: 'go',
      version: '3.0.0',
      icsEnabled: ['ics20-1']
    },
    cosmwasm: {
      version: '0.27',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.explorer.shareri.ng',
        provider: 'ShareRing'
      }],
    rest: [{
        address: 'https://lcd.explorer.shareri.ng/',
        provider: 'ShareRing'
      }],
    grpc: [{
        address: 'rpc.explorer.shareri.ng:443',
        provider: 'ShareRing'
      }]
  },
  explorers: [{
      kind: 'big dipper',
      url: 'https://explorer.shareri.ng',
      txPage: 'https://explorer.shareri.ng/transactions/${txHash}',
      accountPage: 'https://explorer.shareri.ng/accounts/${accountAddress}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/shareledger',
      txPage: 'https://staking-explorer.com/transaction.php?chain=shareledger&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=shareledger&addr=${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg'
  },
  keywords: ['id'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/chain-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/shareledger/images/token.svg',
      theme: {
        primaryColorHex: '#1c2474'
      }
    }]
};
export default info;