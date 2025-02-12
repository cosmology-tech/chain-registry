import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'atomonetestnet',
  chainType: 'cosmos',
  chainId: 'atomone-testnet-1',
  website: 'https://github.com/atomone-hub/networks/tree/master/atomone-testnet-1',
  prettyName: 'AtomOne testnet-1',
  status: 'live',
  networkType: 'testnet',
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
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.0', 'v1.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-linux-amd64',
      "linux/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-linux-arm64',
      "darwin/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-darwin-amd64',
      "darwin/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-darwin-arm64',
      "windows/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-windows-amd64.exe',
      "windows/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.1/atomoned-v1.0.1-windows-arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://atomone.fra1.digitaloceanspaces.com/atomone-testnet-1/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.15'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.13'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
  },
  description: 'The Cosmos community, at a crossroads, confronts divergent views on key aspects such as mission, tokenomics, and security philosophy. AtomOne emerges as a beacon, offering an alternative fork to navigate these waters, equipped to handle contingencies and embodying a bastion for diverse political thought.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://atomone-testnet-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-test.atomone.vinjan.xyz',
        provider: 'Vinjan'
      },
      {
        address: 'https://atomone.test.rpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://rpc.atomone-testnet-1.atomone.aviaone.com:443',
        provider: 'AVIAONE.com 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-testnet-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://atomone-testnet-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-test.atomone.vinjan.xyz',
        provider: 'Vinjan'
      }
    ],
    grpc: [{
        address: 'grpc.atomone-1.atomone.aviaone.com:9102',
        provider: 'AVIAONE.com 🟢'
      }, {
        address: 'https://grpc-testnet-atomone.nodeist.net:443',
        provider: 'Nodeist'
      }]
  },
  explorers: [
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://testnet.explorer.nodeshub.online/atomone/',
      txPage: 'https://testnet.explorer.nodeshub.online/atomone/tx/${txHash}',
      accountPage: 'https://testnet.explorer.nodeshub.online/atomone/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/atomone',
      txPage: 'https://explorer.ist/atomone/tx/${txHash}',
      accountPage: 'https://explorer.ist/atomone/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet',
      txPage: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE.com 🟢',
      url: 'https://testnet.explorer.aviaone.com/atomone',
      txPage: 'https://testnet.explorer.aviaone.com/atomone/tx/${txHash}',
      accountPage: 'https://testnet.explorer.aviaone.com/atomone/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
    }]
};
export default info;