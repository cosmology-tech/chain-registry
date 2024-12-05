import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'kyvedevnet',
  chainType: 'cosmos',
  chainId: 'korellia-2',
  prettyName: 'KYVE Korellia',
  status: 'live',
  networkType: 'devnet',
  bech32Prefix: 'kyve',
  daemonName: 'kyved',
  nodeHome: '$HOME/.kyve',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'tkyve',
        fixedMinGasPrice: 0
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/KYVENetwork/chain',
    recommendedVersion: 'v1.5.0',
    compatibleVersions: ['v1.5.0'],
    binaries: {
      "darwin/amd64": 'https://files.kyve.network/korellia-2/v1.5.0-rc0/kyved_kaon_darwin_amd64?checksum=sha256:5f0c2e02eced4af81d15fbb46ba1f5bca45b662096b8bee3e90a20ef3cb1f54c',
      "darwin/arm64": 'https://files.kyve.network/korellia-2/v1.5.0-rc0/kyved_kaon_darwin_arm64?checksum=sha256:9c3667945a3f559d6a48f03fb61ea4045f410f1207bb9c1705a1043253877bf3',
      "linux/amd64": 'https://files.kyve.network/korellia-2/v1.5.0-rc0/kyved_kaon_linux_amd64?checksum=sha256:f165f4ca6c3831ac0d789fa5b5d6a98c0a9084b767bd048d12cca3691a861e23',
      "linux/arm64": 'https://files.kyve.network/korellia-2/v1.5.0-rc0/kyved_kaon_linux_arm64?checksum=sha256:fbd042016cd6973b301184af39df3020c69b0b35ce08d4286e974bb008ebbff0'
    },
    genesis: {
      genesisUrl: 'https://files.kyve.network/korellia-2/genesis.json'
    }
  },
  apis: {
    rpc: [{
        address: 'https://rpc.korellia.kyve.network',
        provider: 'kyve'
      }],
    rest: [{
        address: 'https://api.korellia.kyve.network',
        provider: 'kyve'
      }]
  },
  explorers: [{
      kind: 'KYVE Explorer',
      url: 'https://explorer.kyve.network/korellia',
      txPage: 'https://explorer.kyve.network/korellia/tx/${txHash}',
      accountPage: 'https://explorer.kyve.network/korellia/account/${accountAddress}'
    }]
};
export default info;