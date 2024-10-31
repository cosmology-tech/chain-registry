import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'impacthub',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.ixo.world/',
  prettyName: 'Impact Hub',
  chainType: 'cosmos',
  chainId: 'ixo-5',
  bech32Prefix: 'ixo',
  daemonName: 'ixod',
  nodeHome: '$HOME/.ixod',
  keyAlgos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uixo',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ixofoundation/ixo-blockchain',
    recommendedVersion: 'v3.0.0',
    compatibleVersions: ['v3.0.0'],
    cosmosSdkVersion: 'v0.45.16',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.27'
    },
    genesis: {
      genesisUrl: 'https://github.com/ixofoundation/genesis/raw/bc042e1223d551b22d55c155de06e662ca24d2f2/ixo-5/genesis.json.tar.gz'
    },
    versions: [
      {
        name: 'v0.20.0',
        proposal: 403,
        height: 1254500,
        recommendedVersion: 'v0.20.1',
        compatibleVersions: ['v0.20.0', 'v0.20.1'],
        cosmosSdkVersion: 'v0.45.12',
        consensus: {
          type: 'tendermint',
          version: 'v0.34.24'
        },
        nextVersionName: 'v2',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.12'
        },
        ibc: {
          type: 'go',
          version: 'v4.3.0'
        }
      },
      {
        name: 'v2',
        proposal: 439,
        height: 2383000,
        recommendedVersion: 'v2.0.0',
        compatibleVersions: ['v2.0.0'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        nextVersionName: 'v3',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.1'
        }
      },
      {
        name: 'v3',
        proposal: 447,
        height: 6556300,
        recommendedVersion: 'v3.0.0',
        compatibleVersions: ['v3.0.0'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.27'
        },
        nextVersionName: '',
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        },
        ibc: {
          type: 'go',
          version: 'v4.4.1'
        }
      }
    ],
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    },
    ibc: {
      type: 'go',
      version: 'v4.4.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
        provider: 'sifchain'
      },
      {
        address: 'https://impacthub.ixo.world/rpc/',
        provider: 'ixoworld'
      },
      {
        address: 'https://ixo.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://rpc-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/impacthub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ixo-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://ixo-rpc.bluestake.net:443',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://impacthub_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    rest: [
      {
        address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
        provider: 'sifchain'
      },
      {
        address: 'https://impacthub.ixo.world/rest/',
        provider: 'ixoworld'
      },
      {
        address: 'https://ixo.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api-ixo-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rest.lavenderfive.com:443/impacthub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://ixo-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://ixo-api.bluestake.net',
        provider: 'BlueStake 🚀'
      },
      {
        address: 'https://impacthub_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      }
    ],
    grpc: [
      {
        address: 'grpc-ixo-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'ixo.grpc.m.stavr.tech:2010',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'impacthub.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }
    ]
  },
  explorers: [
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/impacthub',
      txPage: 'https://staking-explorer.com/transaction.php?chain=impacthub&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=impacthub&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/ixo',
      txPage: 'https://ezstaking.app/ixo/txs/${txHash}',
      accountPage: 'https://ezstaking.app/ixo/account/${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/IXO-Mainnet',
      txPage: 'https://explorer.stavr.tech/IXO-Mainnet/txs/${txHash}',
      accountPage: 'https://explorer.stavr.tech/IXO-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'bigdipper',
      url: 'https://blockscan.ixo.world',
      txPage: 'https://blockscan.ixo.world/transactions/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/ixo',
      txPage: 'https://ping.pub/ixo/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/ixo',
      txPage: 'https://atomscan.com/ixo/transactions/${txHash}',
      accountPage: 'https://atomscan.com/ixo/accounts/${accountAddress}'
    },
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/ixo',
      txPage: 'https://www.mintscan.io/ixo/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/ixo/accounts/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/ixo',
      txPage: 'https://explorer.whenmoonwhenlambo.money/ixo/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/ixo/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
      theme: {
        primaryColorHex: '#2c4484'
      }
    }]
};
export default info;