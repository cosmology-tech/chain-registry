import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cronos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cronos.org',
  prettyName: 'Cronos',
  chainType: 'cosmos',
  chainId: 'cronosmainnet_25-1',
  bech32Prefix: 'crc',
  daemonName: 'cronosd',
  nodeHome: '$HOME/.cronos',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'basecro'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/crypto-org-chain/cronos',
    recommendedVersion: 'v1.4.2',
    compatibleVersions: [
      'v1.4.0',
      'v1.4.1',
      'v1.4.2'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.4.2/cronos_1.4.2_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.4.2/cronos_1.4.2_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.4.2/cronos_1.4.2_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.4.2/cronos_1.4.2_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.4.2/cronos_1.4.2_Windows_x86_64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.cronos.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://cronos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://cronos.drpc.org',
        provider: 'dRPC'
      }
    ],
    rest: [{
        address: 'https://rest.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'grpc.cronos.org:443',
        provider: 'cronos.org'
      }, {
        address: 'cronos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'cronoscan',
      url: 'https://cronoscan.com',
      txPage: 'https://cronoscan.com/tx/${txHash}'
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      txPage: 'https://cronos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cronos',
      txPage: 'https://ping.pub/cronos/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      theme: {
        primaryColorHex: '#0c2c71'
      }
    }]
};
export default info;