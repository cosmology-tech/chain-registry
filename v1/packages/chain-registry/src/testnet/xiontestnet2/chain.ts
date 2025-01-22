import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'xiontestnet2',
  chain_id: 'xion-testnet-2',
  pretty_name: 'Xion Testnet 2',
  website: 'https://xion.burnt.com',
  status: 'upcoming',
  network_type: 'testnet',
  chain_type: 'cosmos',
  bech32_prefix: 'xion',
  daemon_name: 'xiond',
  node_home: '$HOME/.xiond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uxion',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.001,
        average_gas_price: 0.001,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uxion'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/burnt-labs/xion',
    genesis: {
      genesis_url: 'https://raw.githubusercontent.com/burnt-labs/xion-testnet-2/config/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }],
    rest: [{
        address: 'https://api.xion-testnet-2.burnt.com',
        provider: '🔥BurntLabs🔥'
      }],
    grpc: [{
        address: 'grpc.xion-testnet-2.burnt.com:443',
        provider: '🔥BurntLabs🔥'
      }]
  },
  explorers: [{
      url: 'https://explorer.burnt.com/xion-testnet-2',
      tx_page: 'https://explorer.burnt.com/xion-testnet-2/tx/${txHash}',
      account_page: 'https://explorer.burnt.com/xion-testnet-2/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/xion/images/burnt.png'
  },
  description: 'XION is the first walletless L1 blockchain purpose built for consumer adoption through chain abstraction.',
  keywords: [
    'xion',
    'burnt',
    'testnet'
  ]
};
export default info;