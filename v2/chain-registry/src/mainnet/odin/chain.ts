import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'odin',
  status: 'killed',
  network_type: 'mainnet',
  website: 'https://odinprotocol.io/',
  pretty_name: 'Odin Protocol',
  chain_id: 'odin-mainnet-freya',
  bech32_prefix: 'odin',
  daemon_name: 'odind',
  node_home: '$HOME/.odin',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'loki',
        fixed_min_gas_price: 0.0125,
        low_gas_price: 0.025,
        average_gas_price: 0.05,
        high_gas_price: 0.06
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'loki'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
  },
  apis: {
    rpc: [
      {
        address: 'http://34.79.179.216:26657',
        provider: 'Odin Protocol'
      },
      {
        address: 'https://odin-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    rest: [
      {
        address: 'http://34.79.179.216:1317/',
        provider: 'Odin Protocol'
      },
      {
        address: 'https://odin-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://odin-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }
    ],
    grpc: [{
        address: 'odin-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'odin-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [{
      kind: 'odin web',
      url: 'https://mainnet.odinprotocol.io/',
      tx_page: 'https://mainnet.odinprotocol.io/transactions/${txHash}'
    }, {
      kind: 'ping.pub',
      url: 'https://ping.pub/odin',
      tx_page: 'https://ping.pub/odin/tx/${txHash}'
    }],
  images: [{
      image_sync: {
        chain_name: 'odin'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/odin/images/odin.svg'
    }]
};
export default info;