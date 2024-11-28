import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'neuratestnet',
  chainType: 'cosmos',
  chainId: 'neura_267-1',
  bech32Prefix: 'neura',
  prettyName: 'Neura Testnet',
  website: 'https://www.neuraprotocol.io/',
  description: 'Neura is an AI-centric, EVM-compatible Layer 1 blockchain built on the Cosmos SDK. We democratize GPU access and revolutionize AI project funding with IMO’s to advance AI development.',
  status: 'live',
  networkType: 'testnet',
  nodeHome: '$HOME/.neurad',
  daemonName: 'neurad',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 1,
  fees: {
    feeTokens: [{
        denom: 'atankr'
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'atankr'
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rpc.ankr.com/neura_testnet',
        provider: 'ankr'
      }]
  },
  explorers: [{
      kind: 'ankrscan-neura',
      url: 'https://testnet.explorer.neuraprotocol.io',
      txPage: 'https://testnet.explorer.neuraprotocol.io/tx/${txHash}'
    }, {
      kind: 'blockscout',
      url: 'https://explorer.neura-testnet.ankr.com',
      txPage: 'https://explorer.neura-testnet.ankr.com/tx/${txHash}'
    }],
  codebase: {

  },
  images: [{
      imageSync: {
        chainName: 'neura'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neura/images/neura.png',
      theme: {
        primaryColorHex: '#4e5afc'
      }
    }]
};
export default info;