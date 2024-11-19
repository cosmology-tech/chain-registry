import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nim',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://nim.network',
  prettyName: 'Nim Network',
  chainType: 'cosmos',
  chainId: 'nim_1122-1',
  bech32Prefix: 'nim',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'anim',
        lowGasPrice: 20000000000,
        averageGasPrice: 20000000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'anim'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
  },
  description: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg',
      theme: {
        primaryColorHex: '#519cea'
      }
    }],
  codebase: {
    gitRepo: 'https://github.com/Nim-Network-Foundation/mainnet',
    genesis: {
      genesisUrl: 'https://github.com/Nim-Network-Foundation/mainnet/raw/main/genesis.json'
    },
    recommendedVersion: 'v2.1.3-rc02',
    compatibleVersions: ['v2.1.3-rc02'],
    versions: [{
        name: 'v2.1',
        recommendedVersion: 'v2.1.3-rc02',
        compatibleVersions: ['v2.1.3-rc02']
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.mainnet.nimnet.tech',
        provider: 'NIM Foundation'
      }],
    rest: [{
        address: 'https://rest.mainnet.nimnet.tech',
        provider: 'NIM Foundation'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm-rpc.mainnet.nimnet.tech',
        provider: 'NIM Foundation'
      }]
  },
  explorers: [{
      kind: 'Orbit Codes',
      url: 'https://explorer.nim.network',
      txPage: 'https://explorer.nim.network/tx/${txHash}',
      accountPage: 'https://explorer.nim.network/account/${accountAddress}'
    }]
};
export default info;