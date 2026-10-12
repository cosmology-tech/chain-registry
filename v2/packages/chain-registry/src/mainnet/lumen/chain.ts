import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'lumen',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://lumen-browser.com/',
  prettyName: 'Lumen',
  description: 'Lumen is a Cosmos SDK chain focused on DNS auctions, release distribution, and gateway settlement flows.',
  chainType: 'cosmos',
  chainId: 'lumen',
  bech32Prefix: 'lmn',
  daemonName: 'lumend',
  nodeHome: '$HOME/.lumen',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ulmn',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ulmn'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/network-lumen/blockchain',
    recommendedVersion: 'v1.4.3',
    compatibleVersions: ['v1.4.3'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/network-lumen/validator-kit/master/config/genesis.json'
    },
    tag: 'v1.4.3'
  },
  apis: {
    rpc: [
      {
        address: 'https://lumen-rpc.linknode.org',
        provider: 'AstroStake'
      },
      {
        address: 'https://rpc.lumen.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://lumen.blocksync.me/rpc',
        provider: 'BlockSync'
      },
      {
        address: 'https://lumen-mainnet-rpc.mekonglabs.com',
        provider: 'MekongLabs'
      },
      {
        address: 'https://rpc-lumen.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://m-lumen.rpc.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://rpc.nodesafe-app.xyz/lumen/',
        provider: 'NodeSafe'
      },
      {
        address: 'https://lumen-rpc.tintonode.win',
        provider: 'TinTo'
      }
    ],
    rest: [
      {
        address: 'https://lumen-api.linknode.org',
        provider: 'AstroStake'
      },
      {
        address: 'https://api-lumen.onenov.xyz',
        provider: 'OneNov'
      },
      {
        address: 'https://api.lumen.chaintools.tech',
        provider: 'ChainTools'
      },
      {
        address: 'https://lumen-mainnet-api.mekonglabs.com/',
        provider: 'MekongLabs'
      },
      {
        address: 'https://m-lumen.api.utsa.tech/',
        provider: 'UTSA'
      },
      {
        address: 'https://api.nodesafe-app.xyz/lumen',
        provider: 'NodeSafe'
      },
      {
        address: 'https://lumen-api.tintonode.win',
        provider: 'TinTo'
      }
    ],
    grpc: [
      {
        address: 'lumen-grpc.linknode.org:443',
        provider: 'AstroStake'
      },
      {
        address: 'lumen-grpc.blocksync.me:443',
        provider: 'BlockSync'
      },
      {
        address: 'lumen-mainnet-grpc.mekonglabs.tech:35090',
        provider: 'MekongLabs'
      },
      {
        address: 'grpc-lumen.nodesafe-app.xyz:443',
        provider: 'NodeSafe'
      },
      {
        address: 'lumen-grpc.tintonode.win:443',
        provider: 'TinTo'
      }
    ]
  },
  explorers: [
    {
      kind: 'MekongLabs',
      url: 'https://explorer.mekonglabs.com/lumen-mainnet'
    },
    {
      kind: 'OneNov',
      url: 'https://explorer.onenov.xyz/lumen'
    },
    {
      kind: 'WinSnip',
      url: 'https://winscan.winsnip.xyz/lumen-mainnet'
    },
    {
      kind: 'AstroStake',
      url: 'https://stake.astrostake.xyz/lumen'
    },
    {
      kind: 'Gombezzz',
      url: 'https://explorer.gombezzz.xyz/lumen-mainnet'
    },
    {
      kind: 'Node9x',
      url: 'https://explorer.node9x.com/lumen'
    },
    {
      kind: 'OneNov (OV)',
      url: 'https://ov-explorer.onenov.xyz/network/lumen'
    },
    {
      kind: 'UTSA Explorer',
      url: 'https://explorer.utsa.tech/networks/lumen-mainnet'
    },
    {
      kind: 'Stavr',
      url: 'https://explorer.stavr.tech/Lumen-Mainnet/staking'
    },
    {
      kind: 'ChainTools',
      url: 'https://explorer.chaintools.tech/lumen'
    },
    {
      kind: 'Maouam',
      url: 'https://explorer.maouam.xyz/lumen-mainnet'
    },
    {
      kind: 'Blocksync',
      url: 'https://dashboard.blocksync.me/lumen'
    },
    {
      kind: 'Indonode',
      url: 'https://explorer.indonode.net/lumen'
    },
    {
      kind: 'NodeGod20',
      url: 'https://explorer.nodegod20.cloud/lumen-mainnet'
    },
    {
      kind: 'NodeSafe',
      url: 'https://explorer.nodesafe-app.xyz/lumen/staking'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lumen/images/lumen.png'
    }]
};
export default info;