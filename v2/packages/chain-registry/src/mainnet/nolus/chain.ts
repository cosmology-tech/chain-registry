import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nolus',
  status: 'live',
  website: 'https://nolus.io/',
  networkType: 'mainnet',
  prettyName: 'Nolus',
  chainType: 'cosmos',
  chainId: 'pirin-1',
  bech32Prefix: 'nolus',
  daemonName: 'nolusd',
  nodeHome: '$HOME/.nolus',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'unls',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.05
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unls'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/nolus-protocol/nolus-core',
    recommendedVersion: 'v0.6.3',
    compatibleVersions: ['v0.6.3'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.11'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/nolus-protocol/nolus-networks/main/mainnet/pirin-1/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      repo: 'https://github.com/nolus-protocol/cosmos-sdk',
      version: 'v0.50.7',
      tag: 'v0.50.7-nolus-rc1'
    },
    ibc: {
      type: 'go',
      version: '8.2.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: 'v0.51.0',
      repo: 'https://github.com/neutron-org/wasmd',
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
  },
  description: 'Elevate your game with up to 3x equity. Dive into a world of minimized risks and unlock the full potential of your assets.',
  apis: {
    rpc: [
      {
        address: 'rpc.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'https://nolus-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/nolus',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://nolus.rpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rpc-nolus.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://nolus.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nolus-rpc.enigma-validator.com/',
        provider: 'Enigma'
      },
      {
        address: 'https://nolus-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-nolus.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://nolus-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://nolus-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'lcd.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'https://nolus-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.lavenderfive.com:443/nolus',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-nolus.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://nolus.api.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'https://rest-nolus.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://nolus.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://nolus-lcd.enigma-validator.com/',
        provider: 'Enigma'
      },
      {
        address: 'https://nolus-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://nolus-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://nolus-api.ibs.team',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'grpc.nolus.network',
        provider: 'NolusProtocol'
      },
      {
        address: 'nolus-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'nolus.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://nolus.grpc.liveraven.net',
        provider: 'LiveRaveN'
      },
      {
        address: 'grpc-nolus.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'grpc-nolus.cosmos-spaces.cloud:1190',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'nolus.grpc.kjnodes.com:14390',
        provider: 'kjnodes'
      },
      {
        address: 'nolus-grpc.w3coins.io:19790',
        provider: 'w3coins'
      },
      {
        address: 'nolus-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'Nolus Explorer',
      url: 'https://explorer.nolus.io/pirin-1',
      txPage: 'https://explorer.nolus.io/pirin-1/tx/${txHash}',
      accountPage: 'https://explorer.nolus.io/pirin-1/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/nolus',
      txPage: 'https://ping.pub/nolus/tx/${txHash}',
      accountPage: 'https://ping.pub/nolus/account/${accountAddress}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/nolus',
      txPage: 'https://explorer.nodexcapital.com/nolus/tx/${txHash}',
      accountPage: 'https://explorer.nodexcapital.com/nolus/account/${accountAddress}'
    },
    {
      kind: 'Nodes Guru Explorer',
      url: 'https://nolus.explorers.guru',
      txPage: 'https://nolus.explorers.guru/transaction/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/nolus',
      txPage: 'https://staking-explorer.com/transaction.php?chain=nolus&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=nolus&addr=${accountAddress}'
    },
    {
      kind: 'KJ Nodes Explorer',
      url: 'https://explorer.kjnodes.com/nolus',
      txPage: 'https://explorer.kjnodes.com/nolus/tx/${txHash}',
      accountPage: 'https://explorer.kjnodes.com/nolus/account/${accountAddress}'
    }
  ],
  keywords: ['mainnet'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
      theme: {
        primaryColorHex: '#fc542c'
      }
    }]
};
export default info;