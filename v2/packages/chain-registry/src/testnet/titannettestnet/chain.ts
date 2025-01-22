import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chainName: 'titannettestnet',
  chainType: 'cosmos',
  chainId: 'titan-test-4',
  website: 'https://titannet.io/',
  prettyName: 'Titan Network Testnet',
  status: 'live',
  networkType: 'testnet',
  bech32Prefix: 'titan',
  daemonName: 'titand',
  nodeHome: '$HOME/.titan',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uttnt',
        fixedMinGasPrice: 0.005,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uttnt'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/Titannet-dao/titan-chain',
    genesis: {
      genesisUrl: 'https://github.com/Titannet-dao/titan-chain/releases/download/v0.3.0/genesis.json'
    },
    recommendedVersion: 'v0.3.0',
    compatibleVersions: ['v0.3.0'],
    consensus: {
      type: 'cometbft',
      version: '0.38.15'
    },
    binaries: {
      "linux/amd64": 'https://github.com/Titannet-dao/titan-chain/releases/download/v0.3.0/titand_0.3.0-1_g167b7fd6.tar.gz'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.50.10',
      tag: 'v0.50.10'
    },
    ibc: {
      type: 'go',
      version: 'v8.5.1'
    },
    cosmwasm: {
      version: 'v0.53.0',
      repo: 'https://github.com/CosmWasm/wasmd',
      tag: 'v0.53.0'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg'
  },
  description: 'Titan Chain aims to solve the resource utilization challenges in the Web3 ecosystem by creating an efficient, transparent, and decentralized infrastructure marketplace. Built on Cosmos SDK, it enables seamless trading of computing, storage, and bandwidth resources while ensuring fair compensation for resource providers.\n\nThe project focuses on making decentralized infrastructure services more accessible and efficient through its modular blockchain design. Using the Inter-blockchain Communication (IBC) protocol, Titan Chain can connect with other blockchain networks, facilitating broader resource sharing and integration across the ecosystem.\n\nThe network uses TTNT tokens for governance and securing the network through a Delegated Proof-of-Stake consensus mechanism, where token holders can participate in network decisions and earn rewards for contributing to network stability.',
  apis: {
    rpc: [{
        address: 'https://rpc.titannet.io:443',
        provider: 'Titan'
      }],
    rest: [{
        address: 'https://lcd.titannet.io:443',
        provider: 'Titan'
      }],
    grpc: [{
        address: 'https://grpc.titannet.io:443',
        provider: 'Titan'
      }]
  },
  explorers: [{
      kind: 'guru',
      url: 'https://testnet.titan.explorers.guru',
      txPage: 'https://testnet.titan.explorers.guru/transaction/${txHash}',
      accountPage: 'https://testnet.titan.explorers.guru/account/${accountAddress}',
      validatorPage: 'https://testnet.titan.explorers.guru/validator/${validatorAddress}',
      proposalPage: 'https://testnet.titan.explorers.guru/proposal/${proposalId}',
      blockPage: 'https://testnet.titan.explorers.guru/block/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg',
      theme: {
        primaryColorHex: '#272d45'
      }
    }]
};
export default info;