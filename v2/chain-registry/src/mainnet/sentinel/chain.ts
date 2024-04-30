import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'sentinel',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://sentinel.co/',
  prettyName: 'Sentinel',
  chainId: 'sentinelhub-2',
  bech32Prefix: 'sent',
  daemonName: 'sentinelhub',
  nodeHome: '$HOME/.sentinelhub',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'udvpn',
        lowGasPrice: 0.1,
        averageGasPrice: 0.25,
        highGasPrice: 0.4
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udvpn'
      }]
  },
  codebase: {

  },
  logoURIs: {
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
        provider: 'RoomIT'
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
        address: 'https://rpc.trinityvalidator.com',
        provider: 'Trinity Validator'
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
        provider: 'RoomIT'
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
        address: 'https://api.trinityvalidator.com',
        provider: 'Trinity Validator'
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
        provider: 'RoomIT'
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
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sentinel',
      txPage: 'https://www.mintscan.io/sentinel/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/sentinel/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sentinel',
      txPage: 'https://ezstaking.app/sentinel/txs/${txHash}',
      accountPage: 'https://ezstaking.app/sentinel/account/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sentinel',
      txPage: 'https://atomscan.com/sentinel/transactions/${txHash}',
      accountPage: 'https://atomscan.com/sentinel/accounts/${accountAddress}'
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet',
      txPage: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/transactions/${txHash}',
      accountPage: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/accounts/${accountAddress}'
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/sentinel',
      txPage: 'https://explorer.validatornode.com/sentinel/tx/${txHash}'
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Sentinel',
      txPage: 'https://explorer.declab.pro/Sentinel/tx/${txHash}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/sentinel/',
      txPage: 'https://explorer.nodeshub.online/sentinel/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/sentinel/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg'
    }]
};
export default info;