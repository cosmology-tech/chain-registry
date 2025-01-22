import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'selfchaindevnet',
  chain_type: 'cosmos',
  chain_id: 'self-dev-1',
  pretty_name: 'Devnet 1',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'self',
  daemon_name: 'selfchaind',
  node_home: '$HOME/.selfchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uself',
        fixed_min_gas_price: 0
      }]
  },
  codebase: {
    git_repo: 'https://docs.selfchain.xyz/nodes-and-validators/releases',
    recommended_version: '0.2.2',
    compatible_versions: ['0.2.2'],
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/hotcrosscom/selfchain-genesis/main/networks/devnet/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc-devnet.selfchain.xyz',
        provider: 'Selfchain'
      }],
    rest: [{
        address: 'https://api-devnet.selfchain.xyz/',
        provider: 'Selfchain'
      }]
  },
  explorers: [{
      kind: 'Selfchain',
      url: 'https://explorer-devnet.selfchain.xyz',
      tx_page: 'https://explorer-devnet.selfchain.xyz/self/transactions/${txHash}'
    }]
};
export default info;