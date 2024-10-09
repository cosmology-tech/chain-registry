import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nomic',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Nomic',
  website: 'https://nomic.io/',
  chainId: 'nomic-stakenet-3',
  bech32Prefix: 'nomic',
  daemonName: 'nomic',
  nodeHome: '$HOME/.nomic-stakenet-3',
  slip44: 118,
  keyAlgos: ['secp256k1'],
  fees: {
    feeTokens: [{
        denom: 'unom',
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'unom'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg'
  },
  description: 'The superior way to use Bitcoin in Cosmos DeFi. Use IBC to securely and efficiently bridge your BTC to Osmosis and more.',
  apis: {
    rpc: [
      {
        address: 'https://stakenet-rpc.nomic.io:2096',
        provider: 'nomic-io'
      },
      {
        address: 'https://nomic-rpc.polkachu.com/',
        provider: 'Polkachu'
      },
      {
        address: 'https://rpc-nomic.whispernode.com:443',
        provider: 'WhisperNode 🤐'
      },
      {
        address: 'https://rpc.nomic.basementnodes.ca:443',
        provider: 'Basement Nodes ⚡️'
      },
      {
        address: 'https://rpc.nomic.bronbro.io:443',
        provider: 'Bro_n_Bro'
      }
    ],
    rest: [{
        address: 'https://app.nomic.io:8443',
        provider: 'nomic-io'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://bigdipper.live/nomic',
      accountPage: 'https://bigdipper.live/nomic/accounts/${accountAddress}',
      txPage: 'https://bigdipper.live/nomic/transactions/${txHash}'
    }, {
      kind: 'Zenscan.io',
      url: 'https://nomic.zenscan.io/index.php',
      accountPage: 'https://nomic.zenscan.io/address.php?address=${accountAddress}',
      txPage: 'https://nomic.zenscan.io/transaction.php?hash=${txHash}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nomic.svg'
    }],
  bech32Config: {
    bech32PrefixAccAddr: 'nomic',
    bech32PrefixAccPub: 'nomic',
    bech32PrefixConsAddr: 'nomic',
    bech32PrefixConsPub: 'nomic',
    bech32PrefixValAddr: 'nomic',
    bech32PrefixValPub: 'nomic'
  }
};
export default info;