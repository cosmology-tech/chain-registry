import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'bostrom',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'bostrom',
  chain_type: 'cosmos',
  chain_id: 'bostrom',
  bech32_prefix: 'bostrom',
  daemon_name: 'cyber',
  node_home: '$HOME/.cyber',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'boot',
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.01
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'boot'
      }]
  },
  codebase: {
    cosmwasm_enabled: true
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bostrom.cybernode.ai',
        provider: 'cybercongress'
      },
      {
        address: 'https://rpc-cyber-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://lcd.bostrom.cybernode.ai',
        provider: 'cybercongress'
      },
      {
        address: 'https://api-cyber-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://lcd.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [{
        address: 'grpc-cyber-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'https://grpc.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }]
  },
  explorers: [
    {
      kind: 'cyb',
      url: 'https://cyb.ai/',
      tx_page: 'https://cyb.ai/network/bostrom/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bostrom',
      tx_page: 'https://ping.pub/bostrom/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bostrom',
      tx_page: 'https://atomscan.com/bostrom/transactions/${txHash}',
      account_page: 'https://atomscan.com/bostrom/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
      theme: {
        primary_color_hex: '#4cea4e'
      }
    }]
};
export default info;