import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'genesisl1',
  status: 'live',
  networkType: 'mainnet',
  prettyName: 'GenesisL1',
  chainId: 'genesis_29-2',
  bech32Prefix: 'genesis',
  daemonName: 'genesisd',
  nodeHome: '$HOME/.genesis',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'el1',
        lowGasPrice: 51000000000,
        averageGasPrice: 52000000000,
        highGasPrice: 53000000000
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'el1'
      }]
  },
  codebase: {
    cosmosSdkVersion: '0.46.15'
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
  },
  apis: {
    rpc: [{
        address: 'https://26657.genesisl1.org',
        provider: 'GenesisL1'
      }],
    rest: [{
        address: 'https://api.genesisl1.org',
        provider: 'GenesisL1'
      }, {
        address: 'https://1317.genesisl1.org',
        provider: 'GenesisL1'
      }],
    evmHttpJsonrpc: [{
        address: 'https://rpc.genesisl1.org',
        provider: 'GenesisL1'
      }]
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/genesisL1',
      txPage: 'https://ping.pub/genesisL1/tx/${txHash}'
    },
    {
      kind: 'ping.pub',
      url: 'https://exp.utsa.tech/genesis',
      txPage: 'https://exp.utsa.tech/genesis/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Genesisl1',
      txPage: 'https://explorer.stavr.tech/Genesisl1/tx/${txHash}',
      accountPage: 'https://explorer.stavr.tech/Genesisl1/accounts/${accountAddress}'
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/genesisl1',
      txPage: 'https://atomscan.com/genesisl1/transactions/${txHash}',
      accountPage: 'https://atomscan.com/genesisl1/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/genesisl1/images/l1.svg'
    }]
};
export default info;