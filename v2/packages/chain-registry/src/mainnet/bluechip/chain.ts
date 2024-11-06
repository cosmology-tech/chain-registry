import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bluechip',
  status: 'live',
  website: 'https://www.bluechip.link',
  networkType: 'mainnet',
  prettyName: 'BlueChip',
  chainType: 'cosmos',
  chainId: 'bluechip-2',
  bech32Prefix: 'bcp',
  daemonName: 'bluechipd',
  nodeHome: '$HOME/.bluechip',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'ubluechip',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ubluechip'
      }]
  },
  description: 'Stake to the BlueChip chain, interact with the creator pools, and subscribe through the creator subscription contracts.',
  codebase: {
    gitRepo: 'https://github.com/Bluechip23/bluechip/tree/main',
    recommendedVersion: 'v1',
    compatibleVersions: ['v1'],
    genesis: {
      genesisUrl: 'https://github.com/Bluechip23/bluechip/blob/main/genesis.json'
    },
    versions: [{
        name: 'v1',
        recommendedVersion: 'v1',
        compatibleVersions: ['v1'],
        sdk: {
          type: 'cosmos',
          version: '0.47.11'
        },
        cosmwasm: {
          enabled: true
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.47.11'
    },
    cosmwasm: {
      enabled: true
    }
  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bluechip/images/bluechip.png',
      theme: {
        primaryColorHex: '#0c94d3'
      }
    }]
};
export default info;