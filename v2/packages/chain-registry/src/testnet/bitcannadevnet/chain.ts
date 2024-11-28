import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'bitcannadevnet',
  status: 'live',
  networkType: 'testnet',
  prettyName: 'BitCanna Devnet-1',
  chainType: 'cosmos',
  chainId: 'bitcanna-dev-1',
  bech32Prefix: 'bcna',
  daemonName: 'bcnad',
  nodeHome: '$HOME/.bcna',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'ubcna',
        fixedMinGasPrice: 0.001
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/BitCannaGlobal/bcna',
    recommendedVersion: 'v2.0.3',
    compatibleVersions: [
      'v2.0.1-rc6',
      'v2.0.2-rc1',
      'v2.0.3'
    ],
    binaries: {
      "linux/amd64": 'https://github.com/BitCannaGlobal/bcna/releases/download/v2.0.3/bcna_linux_amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/devnets/bitcanna-dev-1/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-testnet.bitcanna.io',
        provider: 'bitcanna'
      },
      {
        address: 'https://bitcanna-testnet.rpc.kjnodes.com/',
        provider: 'kjnodes.com'
      },
      {
        address: 'https://testnet-bitcanna-rpc.konsortech.xyz/',
        provider: 'konsortech.xyz'
      },
      {
        address: 'https://rpc.bitcanna-dev-1.bitcanna.aviaone.com/',
        provider: 'aviaone.com'
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:443',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://bcna-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://lcd-testnet.bitcanna.io',
        provider: 'bitcanna'
      },
      {
        address: 'https://testnet-bitcanna-api.konsortech.xyz/',
        provider: 'konsortech.xyz'
      },
      {
        address: 'https://bitcanna.api.dev.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.bitcanna-dev-1.bitcanna.aviaone.com/',
        provider: 'aviaone.com'
      },
      {
        address: 'https://bitcanna-testnet.api.kjnodes.com/',
        provider: 'kjnodes.com'
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:1317',
        provider: 'NODEJUMPER'
      },
      {
        address: 'https://bcna-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'http://devnet-1.bitcanna.io:9090/',
        provider: 'bitcanna'
      },
      {
        address: 'http://bitcanna-testnet.grpc.kjnodes.com:42090/',
        provider: 'kjnodes.com'
      },
      {
        address: 'http://bitcanna.grpc.dev.stavr.tech:2901',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://bitcanna-testnet.nodejumper.io:9090',
        provider: 'NODEJUMPER'
      }
    ]
  },
  explorers: [
    {
      url: 'https://explorer.thesilverfox.pro/bitcanna',
      txPage: 'https://explorer.thesilverfox.pro/bitcanna/tx/${txHash}'
    },
    {
      url: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna',
      txPage: 'https://testnets-cosmos.mintthemoon.xyz/bitcanna/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Bitcanna-DEV',
      txPage: 'https://explorer.stavr.tech/Bitcanna-DEV/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Bitcanna-DEV/account/${accountAddress}'
    },
    {
      url: 'https://explorer.kjnodes.com/bitcanna-testnet',
      txPage: 'https://explorer.kjnodes.com/bitcanna-testnet/tx/${txHash}'
    },
    {
      url: 'https://explorer.stavr.tech/bitcanna-dev',
      txPage: 'https://explorer.stavr.tech/bitcanna-dev/tx/${txHash}'
    }
  ]
};
export default info;