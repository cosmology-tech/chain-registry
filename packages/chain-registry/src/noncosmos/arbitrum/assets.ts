import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'arbitrum',
  assets: [
    {
      description: 'The governance token of Arbitrum',
      extended_description: 'Arbitrum is a Layer 2 scaling solution for Ethereum, enhancing transaction speed and reducing costs. Built to support smart contracts and decentralized applications (dApps), Arbitrum aims to improve scalability while maintaining compatibility with Ethereum\'s ecosystem.',
      type_asset: 'erc20',
      address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      denom_units: [{
          denom: '0x912CE59144191C1204E64559FE8253a0e49E6548',
          exponent: 0,
          aliases: ['arb-wei']
        }, {
          denom: 'arb',
          exponent: 18
        }],
      base: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      name: 'Arbitrum',
      display: 'arb',
      symbol: 'ARB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
      },
      coingecko_id: 'arbitrum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/arbitrum/images/arb.svg'
        }]
    },
    {
      type_asset: 'evm-base',
      denom_units: [{
          denom: 'wei',
          exponent: 0
        }, {
          denom: 'eth',
          exponent: 18
        }],
      base: 'wei',
      display: 'eth',
      name: 'Ether',
      symbol: 'ETH',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: 'wei'
          },
          provider: 'Arbitrum'
        }]
    },
    {
      type_asset: 'erc20',
      denom_units: [{
          denom: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
          exponent: 0
        }],
      address: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      base: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      display: '0xab19bdaeb37242fa0f30486195f45b9cf5361b78',
      name: 'cGLP',
      symbol: 'cGLP'
    }
  ]
};
export default info;