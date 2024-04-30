import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'kava',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://www.kava.io/',
  prettyName: 'Kava',
  chainId: 'kava_2222-10',
  bech32Prefix: 'kava',
  daemonName: 'kava',
  nodeHome: '$HOME/.kava',
  slip44: 459,
  alternativeSlip44s: [118],
  fees: {
    feeTokens: [{
        denom: 'ukava',
        lowGasPrice: 0.05,
        averageGasPrice: 0.1,
        highGasPrice: 0.25
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'ukava'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
  },
  description: 'Kava is a decentralized blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.data.kava.io',
        provider: 'kava'
      },
      {
        address: 'https://kava-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-kava-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kava-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://kava-rpc.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-kava-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://kava-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://api.data.kava.io/',
        provider: 'kava'
      },
      {
        address: 'https://api-kava-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://kava-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://kava-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://kava-api.ibs.team',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://api-kava-01.stakeflow.io',
        provider: 'Stakeflow'
      },
      {
        address: 'https://kava-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.data.kava.io:443',
        provider: 'kava'
      },
      {
        address: 'grpc-kava-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'kava-grpc.polkachu.com:13990',
        provider: 'Polkachu'
      },
      {
        address: 'kava-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'grpc-kava-01.stakeflow.io:1202',
        provider: 'Stakeflow'
      },
      {
        address: 'kava-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    evmHttpJsonrpc: [
      {
        address: 'https://evm.kava.io/',
        provider: 'kava'
      },
      {
        address: 'https://kava-evm.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://kava.api.onfinality.io/public',
        provider: 'OnFinality'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/kava',
      txPage: 'https://www.mintscan.io/kava/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/kava/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/kava',
      txPage: 'https://ezstaking.app/kava/txs/${txHash}',
      accountPage: 'https://ezstaking.app/kava/account/${accountAddress}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/kava',
      txPage: 'https://ping.pub/kava/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/kava',
      txPage: 'https://atomscan.com/kava/transactions/${txHash}',
      accountPage: 'https://atomscan.com/kava/accounts/${accountAddress}'
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/kava',
      accountPage: 'https://stakeflow.io/kava/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
    }]
};
export default info;