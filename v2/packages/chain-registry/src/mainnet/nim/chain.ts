import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'nim',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://ai.nim.network',
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
        address: 'https://nim-mainnet-tendermint.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    rest: [{
        address: 'https://nim-mainnet-rest.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    evmHttpJsonrpc: [{
        address: 'https://nim-mainnet.public.blastapi.io',
        provider: 'BlastAPI'
      }]
  },
  explorers: [{
      kind: 'FYI',
      url: 'https://dym.fyi/r/nim',
      txPage: 'https://dym.fyi/r/nim/tx/${txHash}',
      accountPage: 'https://dym.fyi/r/nim/address/${accountAddress}'
    }]
};
export default info;