import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'titannettestnet',
  chain_type: 'cosmos',
  chain_id: 'titan-test-4',
  website: 'https://titannet.io/',
  pretty_name: 'Titan Network Testnet',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'titan',
  daemon_name: 'titand',
  node_home: '$HOME/.titan',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uttnt',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uttnt'
      }]
  },
  codebase: {

  },
  logo_URIs: {
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
      tx_page: 'https://testnet.titan.explorers.guru/transaction/${txHash}',
      account_page: 'https://testnet.titan.explorers.guru/account/${accountAddress}',
      validator_page: 'https://testnet.titan.explorers.guru/validator/${validatorAddress}',
      proposal_page: 'https://testnet.titan.explorers.guru/proposal/${proposalId}',
      block_page: 'https://testnet.titan.explorers.guru/block/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/titannettestnet/images/ttnt.svg',
      theme: {
        primary_color_hex: '#272d45'
      }
    }]
};
export default info;