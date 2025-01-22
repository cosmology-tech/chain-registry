import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'heli',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://helichain.com/',
  prettyName: 'HeliChain',
  chainType: 'cosmos',
  chainId: 'helichain',
  bech32Prefix: 'heli',
  daemonName: 'helichaind',
  nodeHome: '$HOME/.helichain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uheli',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.001,
        averageGasPrice: 0.002,
        highGasPrice: 0.0025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uheli'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/Heli-Chain/heli',
    recommendedVersion: 'v0.0.1',
    compatibleVersions: ['v0.0.1'],
    consensus: {
      type: 'cometbft',
      version: '0.37.2'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Heli-Chain/heli/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.47.4'
    },
    ibc: {
      type: 'go',
      version: 'v7.2.0'
    },
    cosmwasm: {
      version: '0.42.0',
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.helichain.com/',
        provider: 'HeliChain'
      }],
    rest: [{
        address: 'https://lcd.helichain.com/',
        provider: 'HeliChain'
      }]
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://explorer.helichain.com/Helichain',
      txPage: 'https://explorer.helichain.com/Helichain/tx/${txHash}',
      accountPage: 'https://explorer.helichain.com/Helichain/account/${accountAddress}'
    }, {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/heli',
      txPage: 'https://staking-explorer.com/transaction.php?chain=heli&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=heli&addr=${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/heli/images/heli.svg',
      theme: {
        primaryColorHex: '#fccc24'
      }
    }]
};
export default info;