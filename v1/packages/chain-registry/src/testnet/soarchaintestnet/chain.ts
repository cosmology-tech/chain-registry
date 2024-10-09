import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'soarchaintestnet',
  chain_type: 'cosmos',
  chain_id: 'soarchaintestnet',
  pretty_name: 'Soarchain Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'soar',
  daemon_name: 'soarchaind',
  node_home: '$HOME/.soarchaind',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'utsoar',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'utsoar'
      }]
  },
  codebase: {
    cosmos_sdk_version: '0.45.5',
    cosmwasm_enabled: true,
    cosmwasm_version: '0.27'
  },
  keywords: ['DePin'],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/soarchaintestnet/images/soarchain.svg'
    }],
  apis: {
    rpc: [
      {
        address: 'https://rpc1.testnet.soarchain.com',
        provider: 'soarchain'
      },
      {
        address: 'https://rpc2.testnet.soarchain.com/',
        provider: 'soarchain'
      },
      {
        address: 'https://soarchain-testnet-rpc.tienthuattoan.com',
        provider: 'tienthuattoan'
      },
      {
        address: 'https://soarchain-testnet.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-t.soarchain.nodestake.org',
        provider: 'nodeStake'
      },
      {
        address: 'https://soarchain-testnet-rpc.stakerhouse.com',
        provider: 'stakerHouse'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.soarchain.com/',
        provider: 'soarchain'
      },
      {
        address: 'https://soarchain-testnet-api.tienthuattoan.com',
        provider: 'tienthuattoan'
      },
      {
        address: 'https://soarchain-testnet-rest.stakerhouse.com',
        provider: 'stakerHouse'
      },
      {
        address: 'https://api-t.soarchain.nodestake.org',
        provider: 'nodeStake'
      }
    ],
    grpc: [
      {
        address: 'soarchain-testnet-grpc.polkachu.com:25290',
        provider: 'Polkachu'
      },
      {
        address: 'https://grpc-t.soarchain.nodestake.org:443',
        provider: 'nodeStake'
      },
      {
        address: 'soarchain-testnet-grpc.stakerhouse.com:443',
        provider: 'stakerHouse'
      }
    ]
  },
  explorers: [{
      kind: 'Soarchain Explorer',
      url: 'https://explorer.soarchain.com/soarchain',
      tx_page: 'https://explorer.soarchain.com/soarchain/tx/${txHash}'
    }, {
      kind: 'Kjnodes Explorer',
      url: 'https://explorer.kjnodes.com/soarchain-testnet',
      tx_page: 'https://explorer.kjnodes.com/soarchain-testnet/tx/${txHash}'
    }]
};
export default info;