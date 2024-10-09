import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kava',
  assets: [
    {
      description: 'The native staking and governance token of Kava',
      extendedDescription: 'The native staking and governance token of Kava\n\nKava is a Layer-1 blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.\n\nThe Kava Network uses a developer-optimized co-chain architecture. The Ethereum Co-Chain enables support for EVM smart contracts while the Cosmos Co-Chain enables the lightning-fast Tendermint consensus engine and the Inter Blockchain Communication Protocol (IBC).\n\nThe two co-chains are connected by a translator module that enables them to interoperate seamlessly, bringing the two most used blockchain development environments together in a single, scalable network.\n\nThe Kava Network features a native governance and utility token, KAVA, that can be staked by validators or delegated to validator nodes. Stakers and delegators earn 37.5% of all KAVA emissions as a reward for securing the network. Kava stakers also have voting rights in network governance proposals.',
      denomUnits: [{
          denom: 'ukava',
          exponent: 0
        }, {
          denom: 'kava',
          exponent: 6
        }],
      base: 'ukava',
      name: 'Kava',
      display: 'kava',
      symbol: 'KAVA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingeckoId: 'kava',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      }
    },
    {
      description: 'Governance token of Kava Lend Protocol',
      denomUnits: [{
          denom: 'hard',
          exponent: 0
        }, {
          denom: 'HARD',
          exponent: 6
        }],
      base: 'hard',
      name: 'Kava Hard',
      display: 'HARD',
      symbol: 'HARD',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingeckoId: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denomUnits: [{
          denom: 'swp',
          exponent: 0
        }, {
          denom: 'SWP',
          exponent: 6
        }],
      base: 'swp',
      name: 'Kava Swap',
      display: 'SWP',
      symbol: 'SWP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingeckoId: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denomUnits: [{
          denom: 'usdx',
          exponent: 0
        }, {
          denom: 'USDX',
          exponent: 6
        }],
      base: 'usdx',
      name: 'Kava USDX',
      display: 'USDX',
      symbol: 'USDX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingeckoId: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }]
    },
    {
      denomUnits: [{
          denom: 'erc20/tether/usdt',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      base: 'erc20/tether/usdt',
      name: 'Tether USD',
      display: 'usdt',
      symbol: 'USDT',
      coingeckoId: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    }
  ]
};
export default info;