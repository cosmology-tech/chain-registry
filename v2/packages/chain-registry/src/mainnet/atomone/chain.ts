import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'atomone',
  chainType: 'cosmos',
  chainId: 'atomone-1',
  website: 'https://atom.one',
  prettyName: 'AtomOne',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'atone',
  daemonName: 'atomoned',
  nodeHome: '$HOME/.atomone',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uatone',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.006,
        averageGasPrice: 0.006,
        highGasPrice: 0.009
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uatone'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/atomone-hub/atomone',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-arm64',
      "darwin/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-arm64',
      "windows/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-amd64.exe',
      "windows/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://atomone.fra1.digitaloceanspaces.com/atomone-1/genesis.json'
    },
    cosmosSdkVersion: 'v0.47.13',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.13'
    },
    versions: [{
        name: 'v1.0.0',
        tag: 'v1.0.0',
        recommendedVersion: 'v1.0.0',
        compatibleVersions: ['v1.0.0'],
        cosmosSdkVersion: 'v0.47.13',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.5'
        },
        height: 1,
        binaries: {
          "linux/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-amd64',
          "linux/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-arm64',
          "darwin/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-amd64',
          "darwin/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-arm64',
          "windows/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-amd64.exe',
          "windows/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-arm64.exe'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.47.13'
        }
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
  },
  description: 'The Cosmos community, at a crossroads, confronts divergent views on key aspects such as mission, tokenomics, and security philosophy. AtomOne emerges as a beacon, offering an alternative fork to navigate these waters, equipped to handle contingencies and embodying a bastion for diverse political thought.',
  apis: {
    rpc: [
      {
        address: 'https://atomone-rpc.allinbits.com:443',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-rpc.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://rpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rpc-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/trpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://atomone-api.allinbits.com',
        provider: 'AllInBits'
      },
      {
        address: 'https://atomone-api.cogwheel.zone',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'https://atomone.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://api-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://rest-atomone-1.cros-nest.com:443',
        provider: 'crosnest'
      },
      {
        address: 'https://community.nuxian-node.ch:6797/atomone/crpc',
        provider: 'PRO Delegators'
      },
      {
        address: 'https://atomone-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://atomone_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://atomone-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'atomone-grpc.allinbits.com:9090',
        provider: 'AllInBits'
      },
      {
        address: 'atomone-grpc.cogwheel.zone:443',
        provider: 'Cogwheel ⚙️'
      },
      {
        address: 'atomone.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'atomone-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.allinbits.com/atomone',
      txPage: 'https://explorer.allinbits.com/atomone/tx/${txHash}',
      accountPage: 'https://explorer.allinbits.com/atomone/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/atomone/',
      txPage: 'https://explorer.nodeshub.online/atomone/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/atomone/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/atomone',
      txPage: 'https://explorer.ist/atomone/tx/${txHash}',
      accountPage: 'https://explorer.ist/atomone/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/atomone',
      txPage: 'https://explorer.whenmoonwhenlambo.money/atomone/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/atomone/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
    }]
};
export default info;