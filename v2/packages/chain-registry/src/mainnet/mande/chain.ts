import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'mande',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://mande.network',
  prettyName: 'Mande Network',
  chainType: 'cosmos',
  chainId: 'mande_18071918-1',
  bech32Prefix: 'mande',
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'amand',
        lowGasPrice: 20000000000,
        averageGasPrice: 20000000000,
        highGasPrice: 20000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'amand'
      }],
    lockDuration: {
      time: '1209600s'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg'
  },
  description: 'Credibility Hub for Web3',
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mande/images/mande.svg',
      theme: {
        primaryColorHex: '#274cbf'
      }
    }],
  codebase: {
    gitRepo: 'https://github.com/mande-labs',
    genesis: {
      genesisUrl: 'https://github.com/mande-labs/mainnet/raw/main/genesis.json'
    },
    recommendedVersion: 'v2.2.0',
    compatibleVersions: ['v2.2.0']
  },
  apis: {
    rpc: [{
        address: 'https://mande-mainnet-tendermint.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    rest: [{
        address: 'https://mande-mainnet-rest.public.blastapi.io',
        provider: 'BlastAPI'
      }],
    evmHttpJsonrpc: [{
        address: 'https://mande-mainnet.public.blastapi.io',
        provider: 'BlastAPI'
      }]
  },
  explorers: [{
      kind: 'FYI',
      url: 'https://dym.fyi/r/mande',
      txPage: 'https://dym.fyi/r/mande/tx/${txHash}',
      accountPage: 'https://dym.fyi/r/mande/address/${accountAddress}'
    }]
};
export default info;