import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sentinel',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sentinel.co/',
  pretty_name: 'Sentinel',
  chain_type: 'cosmos',
  chain_id: 'sentinelhub-2',
  bech32_prefix: 'sent',
  daemon_name: 'sentinelhub',
  node_home: '$HOME/.sentinelhub',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [{
        denom: 'udvpn',
        low_gas_price: 0.1,
        average_gas_price: 0.25,
        high_gas_price: 0.4
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'udvpn'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
  },
  description: 'The Sentinel ecosystem is a global network of autonomous dVPN applications that enable private and censorship resistant internet access.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-sentinel.busurnode.com',
        provider: 'Busurnode'
      },
      {
        address: 'https://rpc-sentinel-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-sentinel.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.sentinel.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://rpc.sentinel.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://rpc.dvpn.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://sentinel-rpc.badgerbite.io/',
        provider: 'BadgerBite'
      },
      {
        address: 'https://sentinel-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sentinel-rpc.validatornode.com/',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://rpc.trinitystake.io',
        provider: 'Trinity Stake'
      },
      {
        address: 'https://rpc.sentinelgrowthdao.com',
        provider: 'Sentinel Growth DAO'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/sentinel/rpc',
        provider: 'Stakewolle'
      },
      {
        address: 'http://163.197.193.2:26657',
        provider: 'Tesla Full Node'
      },
      {
        address: 'https://sentinel.declab.pro:26628',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://sentinel.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://rpc.dvpn.me:443',
        provider: 'MathNodes China'
      },
      {
        address: 'https://rpc.ro.mathnodes.com:443',
        provider: 'MathNodes Romania'
      },
      {
        address: 'https://rpc.noncompliant.network:443',
        provider: 'Noncompliant Network'
      },
      {
        address: 'https://rpc-sentinel.chainvibes.com:443',
        provider: 'chainvibes'
      }
    ],
    rest: [
      {
        address: 'https://api-sentinel.busurnode.com',
        provider: 'Busurnode'
      },
      {
        address: 'https://api-sentinel-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://lcd-sentinel.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://api.sentinel.quokkastake.io',
        provider: '🐹 Quokka Stake'
      },
      {
        address: 'https://api.dvpn.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://sentinel-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sentinel-api.validatornode.com',
        provider: 'ValidatorNode'
      },
      {
        address: 'https://api.trinitystake.io',
        provider: 'Trinity Stake'
      },
      {
        address: 'https://api.sentinelgrowthdao.com',
        provider: 'Sentinel Growth DAO'
      },
      {
        address: 'https://public.stakewolle.com/cosmos/sentinel/rest',
        provider: 'Stakewolle'
      },
      {
        address: 'http://163.197.193.2:26657',
        provider: 'Tesla Full Node'
      },
      {
        address: 'https://sentinel.declab.pro:443',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://sentinel.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅'
      },
      {
        address: 'https://api.dvpn.me:443',
        provider: 'MathNodes China'
      },
      {
        address: 'https://api.ro.mathnodes.com:443',
        provider: 'MathNodes Romania'
      },
      {
        address: 'https://api.noncompliant.network:443',
        provider: 'Noncompliant Network'
      },
      {
        address: 'https://api-sentinel.chainvibes.com:443',
        provider: 'chainvibes'
      }
    ],
    grpc: [
      {
        address: 'grpc-sentinel-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'sentinel.grpcui.chaintools.host:443',
        provider: 'ChainTools'
      },
      {
        address: 'sentinel-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc.dvpn.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'sentinel-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://sentinel.declab.pro:9019',
        provider: 'Decloud Nodes Lab'
      },
      {
        address: 'https://sentinel.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'https://grpc.dvpn.me:443',
        provider: 'MathNodes China'
      },
      {
        address: 'https://grc.mathnodes.com:443',
        provider: 'MathNodes Romania'
      },
      {
        address: 'https://grpc.noncompliant.network:443',
        provider: 'Noncompliant Network'
      },
      {
        address: 'https://grpc.dvpn.me:9090',
        provider: 'MathNodes China (Insecure)'
      },
      {
        address: 'https://grc.mathnodes.com:9000',
        provider: 'MathNodes Romania (Insecure)'
      },
      {
        address: 'https://grpc.noncompliant.network:9090',
        provider: 'Noncompliant Network (Insecure)'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sentinel',
      tx_page: 'https://www.mintscan.io/sentinel/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/sentinel/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sentinel',
      tx_page: 'https://ezstaking.app/sentinel/txs/${txHash}',
      account_page: 'https://ezstaking.app/sentinel/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sentinel',
      tx_page: 'https://atomscan.com/sentinel/transactions/${txHash}',
      account_page: 'https://atomscan.com/sentinel/accounts/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/transactions/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/sentinel',
      tx_page: 'https://explorer.validatornode.com/sentinel/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Sentinel',
      tx_page: 'https://explorer.declab.pro/Sentinel/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/sentinel/',
      tx_page: 'https://explorer.nodeshub.online/sentinel/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/sentinel/accounts/${accountAddress}'
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/sentinel',
      tx_page: 'https://mainnet.whispernode.com/sentinel/tx/${txHash}',
      account_page: 'https://mainnet.whispernode.com/sentinel/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
      theme: {
        primary_color_hex: '#10a7ef'
      }
    }]
};
export default info;