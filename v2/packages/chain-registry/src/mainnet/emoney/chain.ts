import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'emoney',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'e-Money',
  chainType: 'cosmos',
  chainId: 'emoney-3',
  bech32Prefix: 'emoney',
  daemonName: 'emd',
  nodeHome: '$HOME/.emd',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ungm',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'eeur',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'echf',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'enok',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'esek',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      },
      {
        denom: 'edkk',
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'ungm'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/e-money/em-ledger',
    recommendedVersion: 'v1.1.3',
    compatibleVersions: ['v1.1.3'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/e-money/networks/master/emoney-3/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://emoney.validator.network',
        provider: 'e-Money'
      },
      {
        address: 'https://rpc-emoney-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.emoney.bh.rocks',
        provider: 'BlockHunters 🎯'
      }
    ],
    rest: [
      {
        address: 'https://emoney.validator.network/api/',
        provider: 'e-Money'
      },
      {
        address: 'https://api-emoney-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://api.emoney.bh.rocks',
        provider: 'BlockHunters 🎯'
      }
    ],
    grpc: [{
        address: 'grpc-emoney-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'emoney-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/emoney',
      txPage: 'https://ezstaking.app/emoney/txs/${txHash}',
      accountPage: 'https://ezstaking.app/emoney/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/e-money',
      txPage: 'https://ping.pub/e-money/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/emoney',
      txPage: 'https://atomscan.com/emoney/transactions/${txHash}',
      accountPage: 'https://atomscan.com/emoney/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg',
      theme: {
        primaryColorHex: '#caf2ea'
      }
    }]
};
export default info;