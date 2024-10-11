import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'genesisl1',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'GenesisL1',
  chainType: 'cosmos',
  chainId: 'genesis_29-2',
  bech32Prefix: 'genesis',
  daemonName: 'genesisd',
  nodeHome: '$HOME/.genesis',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'el1',
        lowGasPrice: 51000000000,
        averageGasPrice: 52000000000,
        highGasPrice: 53000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'el1'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/alpha-omega-labs/genesis-crypto',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    cosmosSdkVersion: '0.46.15',
    genesis: {
      name: 'plan_ethermint',
      genesisUrl: 'https://raw.githubusercontent.com/alpha-omega-labs/genesis-parameters/main/genesis_29-2/genesis.json'
    },
    versions: [{
        name: 'plan_ethermint',
        tag: 'v0.3.0',
        height: 0,
        recommendedVersion: 'v0.5.0',
        compatibleVersions: ['v0.3.0', 'v0.5.0'],
        cosmosSdkVersion: '0.44.5',
        nextVersionName: 'plan_crypto',
        sdk: {
          type: 'cosmos',
          version: '0.44.5'
        }
      }, {
        name: 'plan_crypto',
        tag: 'v1.0.0',
        height: 7400000,
        proposal: 92,
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        cosmosSdkVersion: '0.46.15',
        sdk: {
          type: 'cosmos',
          version: '0.46.15'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: '0.46.15'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
  },
  apis: {
    rpc: [{
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://genesisl1-rpc.zenode.app',
        provider: 'anodeofzen'
      }],
    rest: [{
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://1317.genesisl1.org',
        provider: 'GenesisL1'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      txPage: 'https://ping.pub/genesisL1/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      txPage: 'https://exp.utsa.tech/genesis/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      txPage: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      txPage: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      accountPage: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
      theme: {
        primaryColorHex: '#040404'
      }
    }]
};
export default info;