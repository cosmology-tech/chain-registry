import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'govgen',
  chainType: 'cosmos',
  chainId: 'govgen-1',
  website: 'https://govgen.io/',
  prettyName: 'GovGen',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'govgen',
  daemonName: 'govgend',
  nodeHome: '$HOME/.govgen',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ugovgen',
        fixedMinGasPrice: 0.001,
        lowGasPrice: 0.006,
        averageGasPrice: 0.006,
        highGasPrice: 0.009
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ugovgen'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/atomone-hub/govgen',
    recommendedVersion: 'v1.0.1',
    compatibleVersions: ['v1.0.1'],
    binaries: {
      "linux/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-linux-amd64',
      "linux/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-linux-arm64',
      "darwin/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-darwin-amd64',
      "darwin/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-darwin-arm64',
      "windows/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-windows-amd64.exe',
      "windows/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-windows-arm64.exe'
    },
    genesis: {
      genesisUrl: 'https://atomone.fra1.digitaloceanspaces.com/govgen/govgen-1/genesis.json'
    },
    cosmosSdkVersion: 'v0.45.16',
    consensus: {
      type: 'cometbft',
      version: 'v0.34.29'
    },
    versions: [{
        name: 'v1.0.1',
        tag: 'v1.0.1',
        recommendedVersion: 'v1.0.1',
        compatibleVersions: ['v1.0.1'],
        cosmosSdkVersion: 'v0.45.16',
        consensus: {
          type: 'cometbft',
          version: 'v0.34.29'
        },
        height: 1,
        binaries: {
          "linux/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-linux-amd64',
          "linux/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-linux-arm64',
          "darwin/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-darwin-amd64',
          "darwin/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-darwin-arm64',
          "windows/amd64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-windows-amd64.exe',
          "windows/arm64": 'https://github.com/atomone-hub/govgen/releases/download/v1.0.1/govgend-v1.0.1-windows-arm64.exe'
        },
        sdk: {
          type: 'cosmos',
          version: 'v0.45.16'
        }
      }],
    sdk: {
      type: 'cosmos',
      version: 'v0.45.16'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg'
  },
  description: 'GovGen is a governance-only chain separate from the proposed AtomOne hub chain. GovGen aims to gauge the sentiment of those who voted “NO” or “NO_WITH_VETO” on Cosmos Hub proposal 848 regarding the potential future of AtomOne. Through the native, non-transferable GOVGEN governance-only token, this community can come together to discuss, debate, submit proposals, and help shape the future of AtomOne in a fully decentralized community-driven initiative.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.govgen.io:443',
        provider: 'AllInBits'
      },
      {
        address: 'https://rpc-govgen.sg-1.online/',
        provider: 'SG-1'
      },
      {
        address: 'https://govgen.rpc.nodeshub.online:443',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://govgen-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rpc.govgen.posthuman.digital:443',
        provider: 'posthuman'
      },
      {
        address: 'https://rpc-govgen.kewrnode.com/',
        provider: 'Kewr Node'
      }
    ],
    rest: [
      {
        address: 'https://api.govgen.io/',
        provider: 'AllInBits'
      },
      {
        address: 'https://api-govgen.sg-1.online/',
        provider: 'SG-1'
      },
      {
        address: 'https://govgen.api.nodeshub.online/',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://govgen-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://rest.govgen.posthuman.digital:443',
        provider: 'posthuman'
      },
      {
        address: 'https://rest-govgen.kewrnode.com/',
        provider: 'Kewr Node'
      }
    ],
    grpc: [
      {
        address: 'govgen-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://govgen.grpc.nodeshub.online:443',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc.govgen.posthuman.digital:443',
        provider: 'posthuman'
      }
    ]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.govgen.io/',
      txPage: 'https://explorer.govgen.io/govgen/tx/${txHash}',
      accountPage: 'https://explorer.govgen.io/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodeshub.online/govgen',
      txPage: 'https://explorer.nodeshub.online/govgen/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.equinoxdao.xyz/govgen',
      txPage: 'https://explorer.equinoxdao.xyz/govgen/tx/${txHash}',
      accountPage: 'https://explorer.equinoxdao.xyz/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://test.explorer.ist/govgen',
      txPage: 'https://test.explorer.ist/govgen/tx/${txHash}',
      accountPage: 'https://test.explorer.ist/govgen/account/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/govgen',
      txPage: 'https://explorer.posthuman.digital/govgen/tx/${txHash}',
      accountPage: 'https://explorer.posthuman.digital/govgen/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg',
      theme: {
        primaryColorHex: '#65d6d4'
      }
    }]
};
export default info;