import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'mande',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://mande.network',
  pretty_name: 'Mande Network',
  chain_type: 'cosmos',
  chain_id: 'mande_18071918-1',
  bech32_prefix: 'mande',
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'amand',
        low_gas_price: 20000000000,
        average_gas_price: 20000000000,
        high_gas_price: 20000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'amand'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
  },
  description: 'Credibility Hub for Web3',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
      theme: {
        primary_color_hex: '#274cbf'
      }
    }],
  codebase: {
    git_repo: 'https://github.com/mande-labs',
    genesis: {
      genesis_url: 'https://github.com/mande-labs/mainnet/raw/main/genesis.json'
    },
    recommended_version: 'v2.2.0',
    compatible_versions: ['v2.2.0']
  },
  apis: {
    rpc: [{
        address: 'https://mande-mainnet-tendermint.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    rest: [{
        address: 'https://mande-mainnet-rest.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    "evm-http-jsonrpc": [{
        address: 'https://mande-mainnet.public.blastapi.io',
        provider: 'BlastAPI'
      }]
  },
  explorers: [{
      kind: 'FYI',
      url: 'https://dym.fyi/r/mande',
      tx_page: 'https://dym.fyi/r/mande/tx/${txHash}',
      account_page: 'https://dym.fyi/r/mande/address/${accountAddress}'
    }]
};
export default info;