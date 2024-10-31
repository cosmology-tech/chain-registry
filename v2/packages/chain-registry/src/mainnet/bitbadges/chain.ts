import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bitbadges',
  status: 'live',
  chainType: 'cosmos',
  networkType: 'mainnet',
  website: 'https://bitbadges.io/',
  prettyName: 'BitBadges',
  chainId: 'bitbadges-1',
  daemonName: 'bitbadgeschaind',
  bech32Prefix: 'bb',
  nodeHome: '$HOME/.bitbadgeschaind',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubadge',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00025,
        averageGasPrice: 0.0025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ustake'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/bitbadges/bitbadgeschain/',
    recommendedVersion: 'v1.0-bb-mainnet',
    compatibleVersions: ['v1.0-bb-mainnet'],
    versions: [{
        name: 'v1.0-bb-mainnet',
        binaries: {
          "linux/amd64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-amd64',
          "linux/arm64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-arm64'
        },
        cosmosSdkVersion: 'v0.50.10',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.12',
          repo: 'https://github.com/cometbft/cometbft'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.50.10'
        },
        ibc: {
          type: 'go',
          version: 'v8.3.2'
        }
      }],
    binaries: {
      "linux/amd64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-amd64',
      "linux/arm64": 'https://github.com/BitBadges/bitbadgeschain/releases/download/v1.0-bb-mainnet/bitbadgeschain-linux-arm64'
    },
    cosmosSdkVersion: 'v0.50.10',
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10'
    },
    ibc: {
      type: 'go',
      version: 'v8.3.2'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12',
      repo: 'https://github.com/cometbft/cometbft'
    },
    genesis: {
      genesisUrl: 'https://github.com/BitBadges/bitbadgeschain/blob/master/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
  },
  description: 'BitBadges is the all-in-one, multi-chain platform for building your digital identity.',
  apis: {
    rpc: [{
        address: 'http://134.122.12.165:26657',
        provider: 'bitbadges'
      }],
    rest: [{
        address: 'http://134.122.12.165:1317',
        provider: 'bitbadges'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://www.mintscan.io/bitbadges',
      txPage: 'https://www.mintscan.io/bitbadges/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/bitbadges/accounts/${accountAddress}'
    }, {
      kind: 'ping.pub',
      url: 'https://explorer.bitbadges.io/BitBadges%20Mainnet',
      txPage: 'https://explorer.bitbadges.io/BitBadges%20Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.bitbadges.io/BitBadBitBadges%20Mainnetges/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitbadges/images/bitbadgeslogo.png'
    }]
};
export default info;