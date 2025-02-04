import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'neutrontestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Neutron Testnet',
  chain_type: 'cosmos',
  chain_id: 'pion-1',
  bech32_prefix: 'neutron',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'untrn',
        low_gas_price: 0.0053,
        average_gas_price: 0.0053,
        high_gas_price: 0.0053
      }]
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v4.2.2-testnet',
    compatible_versions: ['v4.2.2-testnet'],
    consensus: {
      type: 'cometbft',
      version: '0.38.11'
    },
    genesis: {
      genesis_url: 'https://github.com/cosmos/testnets/raw/master/replicated-security/pion-1/pion-1-genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: '0.50'
    },
    ibc: {
      type: 'go',
      version: '8.2.1'
    },
    cosmwasm: {
      version: '0.51',
      enabled: true
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://neutron-testnet-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://neutron-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://rest-falcron.pion-1.ntrn.tech',
        provider: 'Neutron'
      },
      {
        address: 'https://api.pion.remedy.tm.p2p.org',
        provider: 'P2P.ORG'
      },
      {
        address: 'https://rest.baryon-sentry-01.rs-testnet.polypore.xyz',
        provider: 'Hypha'
      },
      {
        address: 'https://neutron-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [{
        address: 'grpc-falcron.pion-1.ntrn.tech:80',
        provider: 'Neutron'
      }, {
        address: 'grpc.baryon.remedy.tm.p2p.org:443',
        provider: 'P2P.ORG'
      }]
  },
  explorers: [{
      kind: 'Ping.pub Explorer from Hypha',
      url: 'https://explorer.rs-testnet.polypore.xyz/pion-1',
      tx_page: 'https://explorer.rs-testnet.polypore.xyz/pion-1/tx/${txHash}',
      account_page: 'https://explorer.rs-testnet.polypore.xyz/baryon-1/account/${accountAddress}'
    }, {
      kind: 'Mintscan',
      url: 'https://mintscan.io/neutron-testnet',
      tx_page: 'https://mintscan.io/neutron-testnet/txs/${txHash}',
      account_page: 'https://mintscan.io/neutron-testnet/account/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/neutrontestnet/images/neutron-black-logo.svg'
    }]
};
export default info;