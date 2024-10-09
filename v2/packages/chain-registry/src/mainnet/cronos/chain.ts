import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'cronos',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://cronos.org',
  prettyName: 'Cronos',
  chainId: 'cronosmainnet_25-1',
  bech32Prefix: 'crc',
  daemonName: 'cronosd',
  nodeHome: '$HOME/.cronos',
  keyAlgos: ['ethsecp256k1'],
  extraCodecs: ['ethermint'],
  slip44: 60,
  fees: {
    feeTokens: [{
        denom: 'basecro'
      }]
  },
  codebase: {

  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
  },
  apis: {
    rpc: [{
        address: 'https://rpc.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    rest: [{
        address: 'https://rest.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    grpc: [{
        address: 'grpc.cronos.org:443',
        provider: 'cronos.org'
      }, {
        address: 'cronos-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      }],
    evmHttpJsonrpc: [{
        address: 'https://evm.cronos.org/',
        provider: 'cronos.org'
      }, {
        address: 'https://cronos-evm.publicnode.com',
        provider: 'Allnodes.com ⚡️ Nodes & Staking'
      }]
  },
  explorers: [
    {
      kind: 'cronoscan',
      url: 'https://cronoscan.com',
      txPage: 'https://cronoscan.com/tx/${txHash}'
    },
    {
      kind: 'crypto.org',
      url: 'https://cronos.org/explorer',
      txPage: 'https://cronos.org/explorer/tx/${txHash}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/cronos',
      txPage: 'https://ezstaking.app/cronos/txs/${txHash}',
      accountPage: 'https://ezstaking.app/cronos/account/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cronos.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cronos/images/cro.svg'
    }]
};
export default info;