import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kava',
  assets: [
    {
      description: 'Kava is a decentralized finance (DeFi) platform that provides a range of financial services, including lending, borrowing, and stablecoins, leveraging the Cosmos and Ethereum ecosystems.',
      extendedDescription: 'Kava offers a suite of DeFi services, such as lending, borrowing, and stablecoin issuance, utilizing a cross-chain platform that integrates the Cosmos SDK and Ethereum interoperability. Users can collateralize their assets to borrow Kava\'s stablecoin, USDX, or participate in lending and liquidity pools to earn rewards. Kava\'s native token, KAVA, is used for staking, governance, and securing the network. The platform\'s goal is to provide a decentralized, efficient, and accessible financial ecosystem that bridges multiple blockchain networks.',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/kava.svg',
          theme: {
            primaryColorHex: '#e64942'
          }
        }],
      socials: {
        website: 'https://www.kava.io/',
        twitter: 'https://twitter.com/KAVA_CHAIN'
      },
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/hard.svg',
          theme: {
            primaryColorHex: '#7b34ac'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/swp.svg',
          theme: {
            primaryColorHex: '#544cfc'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kava/images/usdx.svg',
          theme: {
            primaryColorHex: '#04d4a3'
          }
        }],
      typeAsset: 'sdk.coin'
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;