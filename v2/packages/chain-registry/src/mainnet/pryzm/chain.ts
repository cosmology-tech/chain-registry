import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'pryzm',
  website: 'https://pryzm.zone',
  description: 'Trade Your Future Yield, Today',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Pryzm',
  chainType: 'cosmos',
  chainId: 'pryzm-1',
  bech32Prefix: 'pryzm',
  daemonName: 'pryzmd',
  nodeHome: '$HOME/.pryzm',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.004
      },
      {
        denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
        fixedMinGasPrice: 500000000,
        lowGasPrice: 500000000,
        averageGasPrice: 600000000,
        highGasPrice: 700000000
      },
      {
        denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      },
      {
        denom: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.002,
        averageGasPrice: 0.003,
        highGasPrice: 0.004
      },
      {
        denom: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.02,
        highGasPrice: 0.03
      },
      {
        denom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      },
      {
        denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
        fixedMinGasPrice: 0.01,
        lowGasPrice: 0.01,
        averageGasPrice: 0.015,
        highGasPrice: 0.02
      },
      {
        denom: 'ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 12000000000,
        highGasPrice: 14000000000
      },
      {
        denom: 'ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F',
        fixedMinGasPrice: 0.002,
        lowGasPrice: 0.002,
        averageGasPrice: 0.003,
        highGasPrice: 0.004
      },
      {
        denom: 'ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE',
        fixedMinGasPrice: 10000000000,
        lowGasPrice: 10000000000,
        averageGasPrice: 12000000000,
        highGasPrice: 14000000000
      },
      {
        denom: 'ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87',
        fixedMinGasPrice: 0.0025,
        lowGasPrice: 0.0025,
        averageGasPrice: 0.003,
        highGasPrice: 0.004
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'upryzm'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/pryzm-finance/pryzm-core',
    recommendedVersion: 'v0.24.0',
    compatibleVersions: ['v0.24.0'],
    binaries: {
      "darwin/amd64": 'https://storage.googleapis.com/pryzm-zone/core/0.24.0/pryzmd-0.24.0-darwin-amd64',
      "darwin/arm64": 'https://storage.googleapis.com/pryzm-zone/core/0.24.0/pryzmd-0.24.0-darwin-arm64',
      "linux/amd64": 'https://storage.googleapis.com/pryzm-zone/core/0.24.0/pryzmd-0.24.0-linux-amd64',
      "linux/arm64": 'https://storage.googleapis.com/pryzm-zone/core/0.24.0/pryzmd-0.24.0-linux-arm64'
    },
    consensus: {
      type: 'cometbft',
      version: '0.37.5'
    },
    genesis: {
      genesisUrl: 'https://storage.googleapis.com/pryzm-zone/pryzm-1/genesis.json'
    },
    language: {
      type: 'go',
      version: '1.22'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.47.15'
    },
    ibc: {
      type: 'go',
      version: '7.4.1',
      icsEnabled: ['ics20-1', 'ics27-1']
    },
    cosmwasm: {
      version: 'v0.46.0',
      enabled: true
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/pryzm',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://pryzm-rpc.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    rest: [
      {
        address: 'https://api.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'https://rest.lavenderfive.com:443/pryzm',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://pryzm-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://pryzm-api.chainroot.io',
        provider: 'Chainroot'
      }
    ],
    grpc: [
      {
        address: 'https://grpc.pryzm.zone',
        provider: 'PRYZM'
      },
      {
        address: 'pryzm.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'pryzm-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'pryzm-grpc.chainroot.io:443',
        provider: 'Chainroot'
      }
    ]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg'
  },
  explorers: [
    {
      kind: 'Chainscope',
      url: 'https://chainsco.pe/pryzm',
      txPage: 'https://chainsco.pe/pryzm/tx/${txHash}',
      accountPage: 'https://chainsco.pe/pryzm/address/${accountAddress}',
      blockPage: 'https://chainsco.pe/pryzm/block/${blockHeight}',
      proposalPage: 'https://chainsco.pe/pryzm/governance/proposal/${proposalId}',
      validatorPage: 'https://chainsco.pe/pryzm/validator/${validatorAddress}'
    },
    {
      kind: 'PingPub',
      url: 'https://cosmosrun.info/pryzm',
      txPage: 'https://cosmosrun.info/pryzm/tx/${txHash}',
      accountPage: 'https://cosmosrun.info/pryzm/account/${accountAddress}',
      blockPage: 'https://cosmosrun.info/pryzm/blocks/${blockHeight}',
      proposalPage: 'https://cosmosrun.info/pryzm/gov/${proposalId}',
      validatorPage: 'https://cosmosrun.info/pryzm/staking/${validatorAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/pryzm',
      txPage: 'https://staking-explorer.com/transaction.php?chain=pryzm&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=pryzm&addr=${accountAddress}'
    },
    {
      kind: 'Chainroot',
      url: 'https://explorer.chainroot.io/pryzm',
      txPage: 'https://explorer.chainroot.io/pryzm/transactions/${txHash}',
      accountPage: 'https://explorer.chainroot.io/pryzm/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm-logo.svg',
      theme: {
        primaryColorHex: '#141424'
      }
    }]
};
export default info;