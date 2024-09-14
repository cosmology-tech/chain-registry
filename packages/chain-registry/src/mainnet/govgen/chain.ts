import { Chain } from '@chain-registry/types';
const info = {
  $schema: '../chain.schema.json',
  chain_name: 'govgen',
  chain_type: 'cosmos',
  chain_id: 'govgen-1',
  website: 'https://govgen.io/',
  pretty_name: 'GovGen',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'govgen',
  daemon_name: 'govgend',
  node_home: '$HOME/.govgen',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ugovgen',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.006,
        average_gas_price: 0.006,
        high_gas_price: 0.009
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ugovgen'
      }]
  },
  codebase: {
    cosmos_sdk_version: 'v0.45.16'
  },
  logo_URIs: {
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
      tx_page: 'https://explorer.govgen.io/govgen/tx/${txHash}',
      account_page: 'https://explorer.govgen.io/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.nodeshub.online/govgen',
      tx_page: 'https://explorer.nodeshub.online/govgen/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://explorer.equinoxdao.xyz/govgen',
      tx_page: 'https://explorer.equinoxdao.xyz/govgen/tx/${txHash}',
      account_page: 'https://explorer.equinoxdao.xyz/govgen/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://test.explorer.ist/govgen',
      tx_page: 'https://test.explorer.ist/govgen/tx/${txHash}',
      account_page: 'https://test.explorer.ist/govgen/account/${accountAddress}'
    },
    {
      kind: 'posthuman',
      url: 'https://explorer.posthuman.digital/govgen',
      tx_page: 'https://explorer.posthuman.digital/govgen/tx/${txHash}',
      account_page: 'https://explorer.posthuman.digital/govgen/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/govgen/images/govgen.svg',
      theme: {
        primary_color_hex: '#65d6d4'
      }
    }]
} as const satisfies Chain;
export default info;