import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'omniflixhub',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://omniflix.network/',
  pretty_name: 'OmniFlix',
  chain_id: 'omniflixhub-1',
  daemon_name: 'omniflixhubd',
  node_home: '$HOME/.omniflixhub',
  bech32_prefix: 'omniflix',
  slip44: 118,
  codebase: {
    cosmos_sdk_version: 'v0.47.10',
    cosmwasm_version: 'v0.45.0'
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
  },
  fees: {
    fee_tokens: [
      {
        denom: 'uflix',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.0025,
        high_gas_price: 0.025
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uflix'
      }
    ]
  },
  description:
    'Decentralized media and network layer for Creators & Sovereign Communities powered by NFTs and related distribution protocols.',
  apis: {
    rpc: [
      {
        address: 'https://omniflix.kingnodes.com',
        provider: 'kingnodes'
      },
      {
        address: 'https://rpc.omniflix.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://rpc.omniflix.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc-omniflixhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://omniflixhub-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc.omniflix.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://omniflixhub-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc-omniflix.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://omniflix-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://rpc-omniflixhub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://omniflix-rpc.dakshavalidator.in',
        provider: 'Daksha Validator'
      },
      {
        address: 'https://rpc-omniflix.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'https://rpc.omniflix.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'https://rpc.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://omniflix-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mainnet.omniflix.rpc.srv.stakr.space',
        provider: 'STAKR.space'
      }
    ],
    rest: [
      {
        address: 'https://api.omniflix.nodestake.top',
        provider: 'NodeStake'
      },
      {
        address: 'https://api-omniflixhub-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://omniflixhub-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-omniflixhub.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://api.omniflix.silentvalidator.com/',
        provider: 'silent'
      },
      {
        address: 'https://omniflix.kingnodes.com',
        provider: 'kingnodes'
      },
      {
        address: 'https://omniflixhub-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest-omniflix.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://omniflix-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://omniflix-api.dakshavalidator.in',
        provider: 'Daksha Validator'
      },
      {
        address: 'http://omniflix.api.staking-explorer.com',
        provider: 'Daily $FLIX DROP 💰'
      },
      {
        address: 'https://api.omniflix.stakeup.tech',
        provider: 'StakeUp'
      },
      {
        address: 'https://lcd.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'https://omniflix-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://mainnet.omniflix.api.srv.stakr.space',
        provider: 'STAKR.space'
      }
    ],
    grpc: [
      {
        address: 'grpc-omniflix.kingnodes.com:443',
        provider: 'kingnodes'
      },
      {
        address: 'grpc.omniflix.nodestake.top:443',
        provider: 'NodeStake'
      },
      {
        address: 'grpc-omniflixhub-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'omniflixhub-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'grpc-omniflixhub.cosmos-spaces.cloud:2230',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'omniflixhub-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-omniflix.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'services.staketab.com:9015',
        provider: 'Staketab'
      },
      {
        address: 'grpc-omniflix.mzonder.com:443',
        provider: 'MZONDER'
      },
      {
        address: 'grpc.omniflix.stakeup.tech:443',
        provider: 'StakeUp'
      },
      {
        address: 'https://grpc.omniflix.bronbro.io:443',
        provider: 'Bro_n_Bro'
      },
      {
        address: 'omniflix-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'mainnet.omniflix.grpc.stakr.space:39090',
        provider: 'STAKR.space'
      }
    ]
  },
  explorers: [
    {
      kind: 'EZ Staking',
      url: 'https://app.ezstaking.io/omniflixhub',
      tx_page: 'https://app.ezstaking.io/omniflixhub/txs/${txHash}',
      account_page:
        'https://app.ezstaking.io/omniflixhub/account/${accountAddress}'
    },
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/omniflix',
      tx_page: 'https://www.mintscan.io/omniflix/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/omniflix/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/omniflixhub',
      tx_page: 'https://atomscan.com/omniflixhub/transactions/${txHash}',
      account_page:
        'https://atomscan.com/omniflixhub/accounts/${accountAddress}'
    },
    {
      kind: 'STAKR.space explorer',
      url: 'https://explorer.stakr.space/omniflix/',
      tx_page: 'https://explorer.stakr.space/omniflix/tx/${txHash}',
      account_page:
        'https://explorer.stakr.space/omniflix/account/${accountAddress}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/flix.svg'
    }
  ]
};
export default info;
