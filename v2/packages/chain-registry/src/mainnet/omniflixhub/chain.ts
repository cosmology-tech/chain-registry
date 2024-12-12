import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'omniflixhub',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://omniflix.network/',
  prettyName: 'OmniFlix',
  chainType: 'cosmos',
  chainId: 'omniflixhub-1',
  daemonName: 'omniflixhubd',
  nodeHome: '$HOME/.omniflixhub',
  bech32Prefix: 'omniflix',
  slip44: 118,
  codebase: {
    gitRepo: 'https://github.com/OmniFlix/omniflixhub',
    recommendedVersion: 'v4.1.1',
    compatibleVersions: ['v4.1.1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/OmniFlix/mainnet/main/omniflixhub-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.10'
    },
    ibc: {
      type: 'go',
      version: 'v7.4.0'
    },
    cosmwasm: {
      version: 'v0.45.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
  },
  fees: {
    feeTokens: [{
        denom: 'uflix',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.001,
        averageGasPrice: 0.0025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uflix'
      }]
  },
  description: 'Decentralized media and network layer for Creators & Sovereign Communities powered by NFTs and related distribution protocols.',
  apis: {
    rpc: [
      {
        address: 'https://omniflix-rpc.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://rpc.omniflix.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.omniflix.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc-omniflixhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/omniflixhub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.omniflix.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://omniflixhub-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-omniflix.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://omniflix-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-omniflixhub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://omniflix-rpc.dakshavalidator.in',
        provider: 'Daksha Validator'
      },
      {
        address: 'https://rpc-omniflix.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc.omniflix.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'https://rpc.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://omniflix-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mainnet.omniflix.rpc.srv.stakr.space',
        provider: 'STAKR.space'
      }
    ],
    rest: [
      {
        address: 'https://api.omniflix.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-omniflixhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rest.lavenderfive.com:443/omniflixhub',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-omniflixhub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api.omniflix.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://omniflix-rest.kingnodes.com',
        provider: 'kingnodes 👑'
      },
      {
        address: 'https://omniflixhub-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-omniflix.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://omniflix-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://omniflix-api.dakshavalidator.in',
        provider: 'Daksha Validator'
      },
      {
        address: 'https://omniflix.api.staking-explorer.com',
        provider: 'Daily DROP | 3% Fee'
      },
      {
        address: 'https://api.omniflix.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://lcd.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://omniflix-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mainnet.omniflix.api.srv.stakr.space',
        provider: 'STAKR.space'
      }
    ],
    grpc: [
      {
        address: 'https://omniflix-grpc.kingnodes.com:443',
        provider: 'kingnodes 👑'
      },
      {
        address: 'grpc.omniflix.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-omniflixhub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'omniflixhub.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-omniflixhub.cosmos-spaces.cloud:2230',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'omniflixhub-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-omniflix.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'services.staketab.com:9015',
        provider: 'Staketab'
      },
      {
        address: 'grpc-omniflix.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc.omniflix.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'https://grpc.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'omniflix-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mainnet.omniflix.grpc.stakr.space:39090',
        provider: 'STAKR.space'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/omniflix',
      txPage: 'https://www.mintscan.io/omniflix/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/omniflix/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/omniflixhub',
      txPage: 'https://atomscan.com/omniflixhub/transactions/${txHash}',
      accountPage: 'https://atomscan.com/omniflixhub/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/omniflixhub',
      txPage: 'https://staking-explorer.com/transaction.php?chain=omniflixhub&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=omniflixhub&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/omniflixhub',
      txPage: 'https://ezstaking.app/omniflixhub/txs/${txHash}',
      accountPage: 'https://ezstaking.app/omniflixhub/account/${accountAddress}'
    },
    {
      kind: 'STAKR.space explorer',
      url: 'https://explorer.stakr.space/omniflix/',
      txPage: 'https://explorer.stakr.space/omniflix/tx/${txHash}',
      accountPage: 'https://explorer.stakr.space/omniflix/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg',
      theme: {
        primaryColorHex: '#c33635'
      }
    }]
};
export default info;