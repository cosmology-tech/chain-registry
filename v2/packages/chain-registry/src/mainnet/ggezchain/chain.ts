import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'ggezchain',
  chainType: 'cosmos',
  chainId: 'ggezchain',
  website: 'https://ggez.one/',
  prettyName: 'GGEZ1 Chain',
  status: 'live',
  networkType: 'mainnet',
  bech32Prefix: 'ggez',
  daemonName: 'ggezchaind',
  nodeHome: '$HOME/.ggezchain',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uggez1',
        fixedMinGasPrice: 0.2,
        lowGasPrice: 0.4,
        averageGasPrice: 0.5,
        highGasPrice: 0.75
      }, {
        denom: 'uggz',
        fixedMinGasPrice: 0.25,
        lowGasPrice: 0.5,
        averageGasPrice: 0.75,
        highGasPrice: 1
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uggez1'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/GGEZLabs/ggezchain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    consensus: {
      type: 'cometbft',
      version: 'v0.38.12'
    },
    binaries: {
      "linux/amd64": 'https://github.com/GGEZLabs/ggezchain/releases/download/v1.0.0/ggezchaind'
    },
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/GGEZLabs/ggez-mainnet/refs/heads/main/genesis/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10',
      tag: 'v0.50.10-lsm'
    },
    ibc: {
      type: 'go',
      version: 'v8.2.0'
    },
    cosmwasm: {
      version: 'v0.51.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.51.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.svg'
  },
  description: 'The GGEZ1 Foundation is a non-profit organization dedicated to supporting the GGEZ1 blockchain ecosystem. The ecosystem focuses on the tokenization of Real-World Assets (RWA) and integrates the principles of Regenerative Finance (ReFi) to promote a sustainable and equitable economic future.',
  apis: {
    rpc: [{
        address: 'https://bc.ggez.one:8443',
        provider: 'GGEZ1 Chain'
      }],
    rest: [{
        address: 'https://rest.ggez.one',
        provider: 'GGEZ1 Chain'
      }],
    grpc: [{
        address: '108.163.148.96:9090',
        provider: 'GGEZ1 Chain'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://explorer.ggez.one/ggezchain',
      txPage: 'https://explorer.ggez.one/ggezchain/transactions/${txHash}',
      accountPage: 'https://explorer.ggez.one/ggezchain/accounts/${accountAddress}',
      validatorPage: 'https://explorer.ggez.one/ggezchain/validators/${validatorAddress}',
      proposalPage: 'https://explorer.ggez.one/ggezchain/proposals/${proposalId}',
      blockPage: 'https://explorer.ggez.one/ggezchain/blocks/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ggezchain/images/chain.svg',
      theme: {
        primaryColorHex: '#8400cd'
      }
    }]
};
export default info;