import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'carbon',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Carbon',
  chainType: 'cosmos',
  chainId: 'carbon-1',
  bech32Prefix: 'swth',
  daemonName: 'carbond',
  website: 'https://www.carbon.network/',
  nodeHome: '$HOME/.carbon',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: 'swth',
        fixedMinGasPrice: 1,
        lowGasPrice: 1,
        averageGasPrice: 1,
        highGasPrice: 1,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usc',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.0001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'bnb.1.6.773edb',
        fixedMinGasPrice: 0,
        lowGasPrice: 1000000,
        averageGasPrice: 1000000,
        highGasPrice: 1000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'bneo.1.14.e2e5f6',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0015,
        averageGasPrice: 0.0015,
        highGasPrice: 0.0015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'busd.1.6.754a80',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'cglp.1.19.1698d3',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'cgt/1',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'eth.1.19.c3b805',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000,
        averageGasPrice: 100000,
        highGasPrice: 100000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'eth.1.2.942d87',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000,
        averageGasPrice: 100000,
        highGasPrice: 100000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/07FA7831E1920D0C87C9388F86B0108677F6ED0C9DE7E4063F05ED675192405C',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0035,
        averageGasPrice: 0.0035,
        highGasPrice: 0.0035,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0000075,
        averageGasPrice: 0.0000075,
        highGasPrice: 0.0000075,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/2B58B8C147E8718EECCB3713271DF46DEE8A3A00A27242628604E31C2F370EF5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00005,
        averageGasPrice: 0.00005,
        highGasPrice: 0.00005,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00032,
        averageGasPrice: 0.00032,
        highGasPrice: 0.00032,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/35E771B8682D828173F4B795F6C307780F96DC64D6F914FAE4CC9B4666F66364',
        fixedMinGasPrice: 0,
        lowGasPrice: 300000000,
        averageGasPrice: 300000000,
        highGasPrice: 300000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/4E06CF24FEBFB3F5AF645377DCC0B70AA6183BAF6B918B8B6243FCDEB7D38118',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0006,
        averageGasPrice: 0.0006,
        highGasPrice: 0.0006,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/662914D0C1CEBCB070C68F061D035E8B10A07C79AB286E7342C85F3BE74612C5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0000075,
        averageGasPrice: 0.0000075,
        highGasPrice: 0.0000075,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/75249A18DEFBEFE55F83B1C70CAD234DF164F174C6BC51682EE92C2C81C18C93',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/92E974290AF9E2BC3AEEEC35305C8FD76AC5A22A74CF8D91270FDF5A1C41E861',
        fixedMinGasPrice: 0,
        lowGasPrice: 200000000,
        averageGasPrice: 200000000,
        highGasPrice: 200000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/A4DB47A9D3CF9A068D454513891B526702455D3EF08FB9EB558C561F9DC2B701',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00001,
        averageGasPrice: 0.00001,
        highGasPrice: 0.00001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00001,
        averageGasPrice: 0.00001,
        highGasPrice: 0.00001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.00015,
        averageGasPrice: 0.00015,
        highGasPrice: 0.00015,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usdc.1.2.343151',
        fixedMinGasPrice: 0,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.0001,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'usdc.1.6.53ff75',
        fixedMinGasPrice: 0,
        lowGasPrice: 100000000,
        averageGasPrice: 100000000,
        highGasPrice: 100000000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      },
      {
        denom: 'zil.1.18.1a4a06',
        fixedMinGasPrice: 0,
        lowGasPrice: 6000,
        averageGasPrice: 6000,
        highGasPrice: 6000,
        gasCosts: {
          cosmosSend: 10000000,
          ibcTransfer: 10000000
        }
      }
    ]
  },
  staking: {
    stakingTokens: [{
        denom: 'swth'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Switcheo/carbon-bootstrap',
    recommendedVersion: 'v2.53.1',
    compatibleVersions: ['v2.53.0', 'v2.53.1'],
    binaries: {
      "linux/amd64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.1/carbond-mainnet.linux-amd64.tar.gz',
      "linux/arm64": 'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.53.1/carbond-mainnet.linux-arm64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://tm-api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    rest: [
      {
        address: 'https://api.carbon.network',
        provider: 'switcheo-labs'
      },
      {
        address: 'https://rest.lavenderfive.com:443/carbon',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://carbon-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rest.carbon.blockhunters.org',
        provider: 'BlockHunters'
      }
    ],
    grpc: [{
        address: 'carbon.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      }, {
        address: 'carbon-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      }]
  },
  explorers: [
    {
      kind: 'carbonscan',
      url: 'https://scan.carbon.network',
      txPage: 'https://scan.carbon.network/transaction/${txHash}?net=main'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/carbon',
      txPage: 'https://ping.pub/carbon/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/carbon',
      txPage: 'https://staking-explorer.com/transaction.php?chain=carbon&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=carbon&addr=${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/carbon',
      txPage: 'https://atomscan.com/carbon/transactions/${txHash}',
      accountPage: 'https://atomscan.com/carbon/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/carbon/images/swth.svg',
      theme: {
        primaryColorHex: '#a5edf2'
      }
    }]
};
export default info;