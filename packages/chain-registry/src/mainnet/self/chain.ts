import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'self',
  status: 'live',
  website: 'https://selfchain.xyz',
  network_type: 'mainnet',
  pretty_name: 'Self Chain',
  chain_id: 'self-1',
  bech32_prefix: 'self',
  daemon_name: 'selfchaind',
  node_home: '$HOME/.selfchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uslf',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.005,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uslf'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
  },
  description: 'Self Chain Is The First Modular Intent-Centric Access Layer L1 Blockchain And Keyless Wallet Infrastructure Service That Uses MPC-TSS/AA For Multi-Chain Web3 Access.',
  apis: {
    rpc: [{
        address: 'https://rpc.selfchain.io:26657',
        provider: 'Self Chain'
      }],
    rest: [{
        address: 'https://api.selfchain.io',
        provider: 'Self Chain'
      }, {
        address: 'https://selfchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Self Chain',
      url: 'https://explorer.selfchain.xyz/selfchain',
      tx_page: 'https://explorer.selfchain.xyz/selfchain/tx/${txHash}',
      account_page: 'https://explorer.selfchain.xyz/selfchain/account/${accountAddress}'
    }, {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Selfchain-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Selfchain-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Selfchain-Mainnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
    }]
};
export default info;