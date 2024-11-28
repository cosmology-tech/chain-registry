import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cryptoorgchain',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Cronos POS Chain',
  chainType: 'cosmos',
  chainId: 'crypto-org-chain-mainnet-1',
  bech32Prefix: 'cro',
  website: 'https://cronos-pos.org/',
  daemonName: 'chain-maind',
  nodeHome: '$HOME/.chain-maind',
  slip44: 394,
  alternativeSlip44s: [118],
  fees: {
    feeTokens: [{
        denom: 'basecro',
        lowGasPrice: 0.025,
        averageGasPrice: 0.03,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'basecro'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/crypto-org-chain/chain-main',
    recommendedVersion: 'v4.2.9',
    compatibleVersions: ['v4.2.9'],
    binaries: {
      "linux/amd64": 'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.9/chain-main_4.2.9_Linux_x86_64.tar.gz',
      "linux/arm64": 'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.9/chain-main_4.2.9_Linux_arm64.tar.gz',
      "darwin/amd64": 'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.9/chain-main_4.2.9_Darwin_x86_64.tar.gz',
      "darwin/arm64": 'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.9/chain-main_4.2.9_Darwin_arm64.tar.gz',
      "windows/amd64": 'https://github.com/crypto-org-chain/chain-main/releases/download/v4.2.9/chain-main_4.2.9_Windows_x86_64.zip'
    },
    genesis: {
      genesisUrl: 'https://github.com/crypto-org-chain/mainnet/raw/main/crypto-org-chain-mainnet-1/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png'
  },
  description: 'Cronos PoS Chain is a public, open-source and permissionless blockchain - a fully decentralized network with high speed and low fees, designed to be a public good that helps drive mass adoption of blockchain technology through use cases like Payments, DeFi and NFTs.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.crypto.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://rpc-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc-cryptoorgchain.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://cryptocom-rpc.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://cryptocom-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cro-chain-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    rest: [
      {
        address: 'https://rest.mainnet.crypto.org/',
        provider: 'cronos.org'
      },
      {
        address: 'https://api-cryptoorgchain-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://cryptocom-api.polkachu.com',
        provider: 'Polkachu'
      },
      {
        address: 'https://rest-cryptoorgchain.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://cryptocom-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-cryptoorg.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://cro-chain-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ],
    grpc: [
      {
        address: 'grpc.mainnet.crypto.org:443',
        provider: 'cronos.org'
      },
      {
        address: 'grpc-cryptoorgchain-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'cryptocom-grpc.polkachu.com:20290',
        provider: 'Polkachu'
      },
      {
        address: 'cryptocom-grpc.w3coins.io:20290',
        provider: 'w3coins'
      },
      {
        address: 'grpc-cryptoorg.cosmos-spaces.cloud:1160',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'cro-chain-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/crypto-org',
      txPage: 'https://www.mintscan.io/crypto-org/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/crypto-org/accounts/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/cryptoorgchain',
      txPage: 'https://staking-explorer.com/transaction.php?chain=cryptoorgchain&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=cryptoorgchain&addr=${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/crypto-org',
      txPage: 'https://ezstaking.app/crypto-org/txs/${txHash}',
      accountPage: 'https://ezstaking.app/crypto-org/account/${accountAddress}'
    },
    {
      kind: 'cronos.org',
      url: 'https://cronos-pos.org/explorer',
      txPage: 'https://cronos-pos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/crypto-com-chain',
      txPage: 'https://ping.pub/crypto-com-chain/tx/${txHash}'
    }
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/cronos.png',
      theme: {
        primaryColorHex: '#0c2c71'
      }
    },
    {
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cryptoorgchain/images/Cronos_POS_Chain_Colour.svg'
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg',
      theme: {
        primaryColorHex: '#0c2c71'
      }
    }
  ]
};
export default info;