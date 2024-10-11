import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'qfs',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://qfs.com/',
  prettyName: 'Quantum Financial Systems',
  chainType: 'cosmos',
  chainId: 'qfs-1',
  bech32Prefix: 'qfs',
  daemonName: 'qfs',
  nodeHome: '$HOME/.ssc',
  keyAlgos: ['secp256k1'],
  slip44: 1179993431,
  staking: {
    stakingTokens: [{
        denom: 'qfs'
      }],
    lockDuration: {
      time: '1814400s'
    }
  },
  fees: {
    feeTokens: [{
        denom: 'qfs',
        lowGasPrice: 0.000001,
        averageGasPrice: 0.000005,
        highGasPrice: 0.0001
      }]
  },
  apis: {
    rpc: [{
        address: 'https://rcp.qfsone.com',
        provider: 'qfs'
      }],
    rest: [{
        address: 'https://lcd.qfsone.com',
        provider: 'qfs'
      }],
    grpc: [{
        address: 'https://grc.qfsone.com:9090',
        provider: 'qfs'
      }]
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg'
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://blockexplorer.qfsone.com/qfs',
      txPage: 'https://blockexplorer.qfsone.com/qfs/tx/${txHash}',
      accountPage: 'https://blockexplorer.qfsone.com/qfs/accounts/${accountAddress}'
    }],
  keywords: [],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/qfs/images/qfs.svg',
      theme: {
        primaryColorHex: '#2979dc'
      }
    }]
};
export default info;