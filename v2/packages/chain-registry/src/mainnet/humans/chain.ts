import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'humans',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://humans.ai/',
  prettyName: 'Humans.ai',
  chainType: 'cosmos',
  chainId: 'humans_1089-1',
  bech32Prefix: 'human',
  nodeHome: '$HOME/.humansd',
  daemonName: 'humansd',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'aheart',
        fixedMinGasPrice: 250000000,
        lowGasPrice: 80000000000,
        averageGasPrice: 100000000000,
        highGasPrice: 160000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'aheart'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/humansdotai/',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: '0.34.27'
    },
    genesis: {
      genesisUrl: 'https://github.com/humansdotai/mainnets/blob/main/mainnet/1/genesis_1089-1.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46.11'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.humans.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://humans.rpc.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://humans-mainnet-rpc.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-humansai.thenop.io:443',
        provider: 'TheNOP.io'
      },
      {
        address: 'https://humans-rpc.stakeangle.com/',
        provider: 'StakeAngle'
      },
      {
        address: 'https://humans-rpc.anyvalid.com:26627',
        provider: 'AnyValid'
      },
      {
        address: 'https://mainnet-humans-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'http://65.21.46.90:5657',
        provider: 'PPNV Service'
      },
      {
        address: 'https://rpc.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take'
      },
      {
        address: 'https://rpc.humans.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://humans-rpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://humans-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://humans-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }
    ],
    rest: [
      {
        address: 'https://api.humans.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://humans.api.nodeshub.online',
        provider: 'NodesHub'
      },
      {
        address: 'https://humans-mainnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://api-humansai.thenop.io:443',
        provider: 'TheNOP.io'
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41417',
        provider: 'StakeAngle'
      },
      {
        address: 'https://mainnet-humans-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'http://65.21.46.90:5317',
        provider: 'PPNV Service'
      },
      {
        address: 'https://api.humans-mainnet.stake-take.com/',
        provider: 'Stake-Take'
      },
      {
        address: 'https://rest.humans.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://humans-api.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://humans-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://humans-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.humans.nodestake.org:443',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans.grpc.kjnodes.com/',
        provider: 'kjnodes'
      },
      {
        address: 'https://grpc-humans.nodeist.net/',
        provider: 'Nodeist'
      },
      {
        address: 'humans-mainnet-grpc.itrocket.net:17090',
        provider: 'itrocket'
      },
      {
        address: 'http://humans-rpc.stakeangle.com:41490/',
        provider: 'Staketab'
      },
      {
        address: 'humans.grpc.nodersteam.com:9221',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'http://65.21.46.90:5090',
        provider: 'PPNV Service'
      },
      {
        address: 'https://grpc-humans.cosmos-spaces.cloud:1190',
        provider: 'StakePool'
      },
      {
        address: 'humans-grpc.noders.services:21090',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'humans-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'humans-mainnet-grpc.cosmonautstakes.com:14890',
        provider: 'Cosmonaut Stakes'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://jsonrpc.humans.nodestake.org/',
        provider: 'NodeStake'
      },
      {
        address: 'https://humans-mainnet-evm.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://humans-evm-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://evm.humans.stakepool.dev.br',
        provider: 'Stakepool'
      },
      {
        address: 'https://mainnet-humans-evm.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://evm.humans.posthuman.digital',
        provider: 'posthuman'
      },
      {
        address: 'https://humans-jsonrpc.noders.services',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'https://humans-mainnet-evm.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes 🤖'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://mintscan.io/humans',
      txPage: 'https://www.mintscan.io/humans/tx/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/humans',
      txPage: 'https://ezstaking.app/humans/txs/${txHash}',
      accountPage: 'https://ezstaking.app/humans/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/humans',
      txPage: 'https://ping.pub/humans/tx/${txHash}'
    },
    {
      kind: 'explorers.guru',
      url: 'https://humans.explorers.guru',
      txPage: 'https://humans.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/humans',
      txPage: 'https://staking-explorer.com/transaction.php?chain=humans&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=humans&addr=${accountAddress}'
    },
    {
      kind: 'exploreme',
      url: 'https://humansai.exploreme.pro/',
      txPage: 'https://humans.exploreme.pro/transaction/${txHash}'
    },
    {
      kind: 'itrocket',
      url: 'https://mainnet.itrocket.net/humans/staking',
      txPage: 'https://mainnet.itrocket.net/humans/tx/${txHash}',
      accountPage: 'https://mainnet.itrocket.net/humans/account/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/humans',
      txPage: 'https://explorer.posthuman.digital/humans/tx/${txHash}',
      accountPage: 'https://explorer.posthuman.digital/humans/account/${accountAddress}'
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/humans/staking',
      txPage: 'https://explorer.nodestake.org/humans/tx/${txHash}',
      accountPage: 'https://explorer.nodestake.org/humans/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/humans/images/heart-dark-mode.svg',
      theme: {
        primaryColorHex: '#f3f3f3'
      }
    }]
};
export default info;