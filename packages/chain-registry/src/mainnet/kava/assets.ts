import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'kava',
  assets: [
    {
      description: 'The native staking and governance token of Kava',
      extended_description: 'The native staking and governance token of Kava\n\nKava is a Layer-1 blockchain that combines the speed and interoperability of Cosmos with the developer power of Ethereum.\n\nThe Kava Network uses a developer-optimized co-chain architecture. The Ethereum Co-Chain enables support for EVM smart contracts while the Cosmos Co-Chain enables the lightning-fast Tendermint consensus engine and the Inter Blockchain Communication Protocol (IBC).\n\nThe two co-chains are connected by a translator module that enables them to interoperate seamlessly, bringing the two most used blockchain development environments together in a single, scalable network.\n\nThe Kava Network features a native governance and utility token, KAVA, that can be staked by validators or delegated to validator nodes. Stakers and delegators earn 37.5% of all KAVA emissions as a reward for securing the network. Kava stakers also have voting rights in network governance proposals.',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg'
      },
      coingecko_id: 'kava',
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
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
      },
      coingecko_id: 'kava-lend',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg'
        }]
    },
    {
      description: 'Governance token of Kava Swap Protocol',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
      },
      coingecko_id: 'kava-swap',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg'
        }]
    },
    {
      description: 'The native stablecoin of Kava',
      denom_units: [{
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
      },
      coingecko_id: 'usdx',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg'
        }]
    },
    {
      denom_units: [{
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
      coingecko_id: 'tether',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Tether'
        }],
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primary_color_hex: '#009393',
            background_color_hex: '#009393'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    }
  ]
};
export default info;