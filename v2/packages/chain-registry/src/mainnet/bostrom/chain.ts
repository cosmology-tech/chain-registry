import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'bostrom',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'bostrom',
  chainType: 'cosmos',
  chainId: 'bostrom',
  bech32Prefix: 'bostrom',
  daemonName: 'cyber',
  nodeHome: '$HOME/.cyber',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'boot',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.01
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'boot'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/cybercongress/go-cyber',
    recommendedVersion: 'v0.3.0',
    compatibleVersions: ['v0.3.0'],
    binaries: {
      "linux/amd64": 'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz',
      "darwin/amd64": 'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz'
    },
    genesis: {
      genesisUrl: 'https://cloudflare-ipfs.com/ipfs/QmYubyVNfghD4xCrTFj26zBwrF9s5GJhi1TmxvrwmJCipr'
    },
    cosmwasmEnabled: true,
    versions: [{
        name: 'v0.3.0',
        recommendedVersion: 'v0.3.0',
        compatibleVersions: ['v0.3.0'],
        cosmwasmEnabled: true,
        binaries: {
          "linux/amd64": 'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz',
          "darwin/amd64": 'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz'
        },
        cosmwasm: {
          enabled: true
        }
      }],
    cosmwasm: {
      enabled: true
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.bostrom.cybernode.ai',
        provider: 'cybercongress'
      },
      {
        address: 'https://rpc-cyber-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [
      {
        address: 'https://lcd.bostrom.cybernode.ai',
        provider: 'cybercongress'
      },
      {
        address: 'https://api-cyber-ia.cosmosia.notional.ventures/',
        provider: 'Notional'
      },
      {
        address: 'https://lcd.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    grpc: [{
        address: 'grpc-cyber-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      }, {
        address: 'https://grpc.cyber.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }]
  },
  explorers: [
    {
      kind: 'cyb',
      url: 'https://cyb.ai/',
      txPage: 'https://cyb.ai/network/bostrom/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/bostrom',
      txPage: 'https://ping.pub/bostrom/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/bostrom',
      txPage: 'https://atomscan.com/bostrom/transactions/${txHash}',
      accountPage: 'https://atomscan.com/bostrom/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bostrom/images/boot.svg',
      theme: {
        primaryColorHex: '#4cea4e'
      }
    }]
};
export default info;