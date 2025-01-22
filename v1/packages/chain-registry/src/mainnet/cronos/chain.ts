import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'cronos',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://cronos.org',
  pretty_name: 'Cronos',
  chain_type: 'cosmos',
  chain_id: 'cronosmainnet_25-1',
  bech32_prefix: 'crc',
  daemon_name: 'cronosd',
  node_home: '$HOME/.cronos',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'basecro'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/crypto-org-chain/cronos',
    recommended_version: 'v1.3.0',
    compatible_versions: [
      'v1.2.0',
      'v1.2.1',
      'v1.2.2',
      'v1.3.0'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.3.0/cronos_1.3.0_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.3.0/cronos_1.3.0_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.3.0/cronos_1.3.0_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.3.0/cronos_1.3.0_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/crypto-org-chain/cronos/releases/download/v1.3.0/cronos_1.3.0_Windows_x86_64.tar.gz'
    },
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json'
    }
  },
  logo_URIs: {
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
    "evm-http-jsonrpc": [{
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
      tx_page: 'https://cronoscan.com/tx/${txHash}'
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      tx_page: 'https://cronos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/cronos',
      tx_page: 'https://ping.pub/cronos/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      theme: {
        primary_color_hex: '#0c2c71'
      }
    }]
};
export default info;