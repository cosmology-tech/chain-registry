import { Chain } from '@chain-registry/types';
const info = {
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

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
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
} as const satisfies Chain;
export default info;