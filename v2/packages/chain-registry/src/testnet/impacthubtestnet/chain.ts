import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'impacthubtestnet',
  status: 'live',
  networkType: 'testnet',
  website: 'https://www.ixo.world/',
  prettyName: 'ixo',
  chainType: 'cosmos',
  chainId: 'pandora-8',
  bech32Prefix: 'ixo',
  daemonName: 'ixod',
  nodeHome: '$HOME/.ixod',
  keyAlgos: ['secp256k1', 'ed25519'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uixo',
        fixedMinGasPrice: 0.015,
        lowGasPrice: 0.015,
        averageGasPrice: 0.025,
        highGasPrice: 0.04
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uixo'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ixofoundation/ixo-blockchain',
    recommendedVersion: 'v2.0.0',
    compatibleVersions: ['v2.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/ixofoundation/genesis/main/pandora-8/genesis.json'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.testnet.ixo.earth/',
        provider: 'ixoworld'
      }],
    rest: [{
        address: 'https://testnet.ixo.earth/rest/',
        provider: 'ixoworld'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'ixoworld',
      url: 'https://blockscan.testnet.ixo.earth/ixo',
      txPage: 'https://blockscan.testnet.ixo.earth/ixo/transactions/${txHash}',
      accountPage: 'https://blockscan.testnet.ixo.earth/ixo/accounts/${accountAddress}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
    }]
};
export default info;