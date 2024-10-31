import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'tgrade',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://tgrade.finance/',
  prettyName: 'Tgrade',
  chainType: 'cosmos',
  chainId: 'tgrade-mainnet-1',
  bech32Prefix: 'tgrade',
  daemonName: 'tgrade',
  nodeHome: '$HOME/.tgrade',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'utgd',
        fixedMinGasPrice: 0.05,
        lowGasPrice: 0.05,
        averageGasPrice: 0.075,
        highGasPrice: 0.1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'utgd'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/confio/tgrade',
    recommendedVersion: 'v2.0.4',
    compatibleVersions: ['v2.0.4'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/confio/tgrade-networks/main/mainnet-1/config/genesis.json'
    },
    versions: [{
        name: 'v2.0.4',
        recommendedVersion: 'v2.0.4',
        compatibleVersions: ['v2.0.4'],
        cosmwasm: {
          enabled: true
        }
      }],
    cosmwasm: {
      enabled: true
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet-1.tgrade.confio.run',
        provider: 'Confio'
      }, {
        address: 'https://rpc.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS'
      }],
    rest: [{
        address: 'https://api.mainnet-1.tgrade.confio.run',
        provider: 'Confio'
      }, {
        address: 'https://lcd.tgrade.posthuman.digital',
        provider: 'POSTHUMAN ꝏ DVS'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'aneka',
      url: 'https://tgrade.aneka.io',
      txPage: 'https://tgrade.aneka.io/txs/${txHash}',
      accountPage: 'https://tgrade.aneka.io/accounts/${accountAddress}'
    }],
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg'
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-symbol-gradient.svg',
      theme: {
        primaryColorHex: '#c9167b'
      }
    }]
};
export default info;