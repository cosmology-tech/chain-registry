import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'atomonetestnet',
  chain_type: 'cosmos',
  chain_id: 'atomone-testnet-1',
  website: 'https://github.com/atomone-hub/networks/tree/master/atomone-testnet-1',
  pretty_name: 'AtomOne testnet-1',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'atone',
  daemon_name: 'atomoned',
  node_home: '$HOME/.atomone',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uatone',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.006,
        average_gas_price: 0.006,
        high_gas_price: 0.009
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uatone'
      }]
  },
  codebase: {
    git_repo: 'https://github.com/atomone-hub/atomone',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    binaries: {
      "linux/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-amd64',
      "linux/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-linux-arm64',
      "darwin/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-amd64',
      "darwin/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-darwin-arm64',
      "windows/amd64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-amd64.exe',
      "windows/arm64": 'https://github.com/atomone-hub/atomone/releases/download/v1.0.0/atomoned-v1.0.0-windows-arm64.exe'
    },
    genesis: {
      genesis_url: 'https://atomone.fra1.digitaloceanspaces.com/atomone-testnet-1/genesis.json'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.37.5'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.13'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
  },
  description: 'The Cosmos community, at a crossroads, confronts divergent views on key aspects such as mission, tokenomics, and security philosophy. AtomOne emerges as a beacon, offering an alternative fork to navigate these waters, equipped to handle contingencies and embodying a bastion for diverse political thought.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://atomone-testnet-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-test.atomone.vinjan.xyz',
        provider: 'Vinjan'
      },
      {
        address: 'https://atomone.test.rpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://rpc.atomone-testnet-1.atomone.aviaone.com:443',
        provider: 'AVIAONE.com 🟢'
      }
    ],
    rest: [
      {
        address: 'https://api-testnet-atomone.nodeist.net',
        provider: 'Nodeist'
      },
      {
        address: 'https://atomone-testnet-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-test.atomone.vinjan.xyz',
        provider: 'Vinjan'
      }
    ],
    grpc: [{
        address: 'grpc.atomone-1.atomone.aviaone.com:9102',
        provider: 'AVIAONE.com 🟢'
      }, {
        address: 'https://grpc-testnet-atomone.nodeist.net:443',
        provider: 'Nodeist'
      }]
  },
  explorers: [
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://testnet.explorer.nodeshub.online/atomone/',
      tx_page: 'https://testnet.explorer.nodeshub.online/atomone/tx/${txHash}',
      account_page: 'https://testnet.explorer.nodeshub.online/atomone/accounts/${accountAddress}'
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://explorer.ist/atomone',
      tx_page: 'https://explorer.ist/atomone/tx/${txHash}',
      account_page: 'https://explorer.ist/atomone/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/atomone-testnet/account/${accountAddress}'
    },
    {
      kind: 'AVIAONE.com 🟢',
      url: 'https://testnet.explorer.aviaone.com/atomone',
      tx_page: 'https://testnet.explorer.aviaone.com/atomone/tx/${txHash}',
      account_page: 'https://testnet.explorer.aviaone.com/atomone/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/atomone/images/atomone.svg'
    }]
};
export default info;