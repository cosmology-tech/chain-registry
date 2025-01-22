import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'genesisl1',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'GenesisL1',
  chain_type: 'cosmos',
  chain_id: 'genesis_29-2',
  bech32_prefix: 'genesis',
  daemon_name: 'genesisd',
  node_home: '$HOME/.genesis',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'el1',
        low_gas_price: 51000000000,
        average_gas_price: 52000000000,
        high_gas_price: 53000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'el1'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/alpha-omega-labs/genesis-crypto',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      name: 'plan_ethermint',
      genesis_url: 'https://raw.githubusercontent.com/alpha-omega-labs/genesis-parameters/main/genesis_29-2/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.46.15'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
  },
  apis: {
    rpc: [{
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://genesisl1-rpc.zenode.app',
        provider: 'anodeofzen'
      }],
    rest: [{
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://1317.genesisl1.org',
        provider: 'GenesisL1'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      tx_page: 'https://ping.pub/genesisL1/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      tx_page: 'https://exp.utsa.tech/genesis/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      tx_page: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      account_page: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg',
      theme: {
        primary_color_hex: '#040404'
      }
    }]
};
export default info;