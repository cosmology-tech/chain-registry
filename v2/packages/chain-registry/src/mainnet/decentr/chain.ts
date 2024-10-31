import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'decentr',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'Decentr',
  chainType: 'cosmos',
  chainId: 'mainnet-3',
  bech32Prefix: 'decentr',
  daemonName: 'decentrd',
  nodeHome: '$HOME/.decentr',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'udec',
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.025,
        averageGasPrice: 0.025,
        highGasPrice: 0.025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'udec'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Decentr-net/decentr',
    recommendedVersion: 'v1.5.7',
    compatibleVersions: ['v1.5.7'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/Decentr-net/mainnets/master/3.0/genesis.json'
    },
    versions: [{
        name: 'v1.5.7',
        recommendedVersion: 'v1.5.7',
        compatibleVersions: ['v1.5.7']
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg'
  },
  apis: {
    rpc: [
      {
        address: 'https://poseidon.mainnet.decentr.xyz',
        provider: 'decentr'
      },
      {
        address: 'https://rpc.decentr.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://decentr.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://decentr-rpc.ibs.team/',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://rpc-dcntr.nodine.id/',
        provider: 'Nodine.ID'
      },
      {
        address: 'https://rpc-decentr.mms.team/',
        provider: 'MMS'
      }
    ],
    rest: [
      {
        address: 'https://rest.mainnet.decentr.xyz',
        provider: 'decentr'
      },
      {
        address: 'https://decentr.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.decentr.chaintools.tech/',
        provider: 'ChainTools'
      },
      {
        address: 'https://decentr-api.ibs.team/',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: [
      {
        address: 'https://grpc-decentr.sxlzptprjkt.xyz:443',
        provider: 'sxlzptprjkt | VALIDATOR'
      },
      {
        address: 'decentr.grpc.m.stavr.tech:2060',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://grpc.decentr.hexnodes.co',
        provider: 'Hexnodes'
      },
      {
        address: 'https://grpc.decentr.nodexcapital.com:443',
        provider: 'NodeX Validator'
      },
      {
        address: 'grpc-decentr.mms.team:443',
        provider: 'MMS'
      }
    ]
  },
  explorers: [
    {
      kind: 'decentr.net',
      url: 'https://explorer.decentr.net',
      txPage: 'https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet'
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/decentr/',
      txPage: 'https://ping.pub/decentr/tx/${txHash}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/decentr',
      txPage: 'https://staking-explorer.com/transaction.php?chain=decentr&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=decentr&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Decentr-Mainnet',
      txPage: 'https://explorer.stavr.tech/Decentr-Mainnet/tx/${txHash}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/decentr',
      txPage: 'https://atomscan.com/decentr/transactions/${txHash}',
      accountPage: 'https://atomscan.com/decentr/accounts/${accountAddress}'
    },
    {
      kind: 'Nodine.ID',
      url: 'https://explorer.co.id/decentr',
      txPage: 'https://explorer.co.id/decentr/tx/${txHash}'
    },
    {
      kind: 'THE EXPLORER',
      url: 'https://explorer.sxlzptprjkt.xyz/decentr',
      txPage: 'https://explorer.sxlzptprjkt.xyz/decentr/tx/${txHash}'
    },
    {
      kind: 'hexskrt EXPLORER',
      url: 'https://explorer.hexskrt.net/decentr',
      txPage: 'https://explorer.hexskrt.net/decentr/tx/${txHash}'
    },
    {
      kind: 'NODEXPLORER',
      url: 'https://explorer.nodexcapital.com/decentr',
      txPage: 'https://explorer.nodexcapital.com/decentr/tx/${txHash}'
    },
    {
      kind: 'Explorer ComunityNode',
      url: 'https://explorer.comunitynode.my.id/decentr',
      txPage: 'https://explorer.comunitynode.my.id/decentr/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/decentr/images/dec.svg',
      theme: {
        primaryColorHex: '#4678e9'
      }
    }]
};
export default info;