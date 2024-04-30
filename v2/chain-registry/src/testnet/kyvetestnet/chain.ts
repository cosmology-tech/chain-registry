import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kyvetestnet',
  chainId: 'kaon-1',
  prettyName: 'KYVE Kaon',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'kyve',
  daemonName: 'kyved',
  nodeHome: '$HOME/.kyve',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tkyve',
        fixedMinGasPrice: 0.02,
        lowGasPrice: 0.02,
        averageGasPrice: 0.03,
        highGasPrice: 0.06
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'tkyve'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rpc-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api-eu-1.kaon.kyve.network',
        provider: 'kyve'
      },
      {
        address: 'https://rest-kyve-test.ecostake.com',
        provider: 'ecostake'
      },
      {
        address: 'https://kyve-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ]
  },
  explorers: [{
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/kyve-testnet',
      txPage: 'https://testnet.mintscan.io/kyve-testnet/txs/${txHash}',
      accountPage: 'https://testnet.mintscan.io/kyve-testnet/account/${accountAddress}'
    }]
};
export default info;