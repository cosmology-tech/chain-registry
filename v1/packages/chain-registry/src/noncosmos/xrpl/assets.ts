import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'xrpl',
  assets: [
    {
      description: 'Native token of Ripple XRP Ledger',
      extended_description: 'The XRP Ledger: The Blockchain Built for Business\n\nThe XRP Ledger (XRPL) is a decentralized, public blockchain led by a global community of businesses and developers looking to solve problems and create value.\n\nProven reliable over more than a decade of error-free functioning, the XRPL offers streamlined development, low transaction costs, high performance, and sustainability. So you can build with confidence–and move your most critical projects forward.',
      denom_units: [{
          denom: 'drop',
          exponent: 0
        }, {
          denom: 'xrp',
          exponent: 6
        }],
      type_asset: 'unknown',
      base: 'drop',
      name: 'Ripple',
      display: 'xrp',
      symbol: 'XRP',
      coingecko_id: 'ripple',
      socials: {
        website: 'https://xrpl.org/',
        twitter: 'https://twitter.com/Ripple'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg',
          theme: {
            primary_color_hex: '#040404'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/xrp.svg'
      }
    },
    {
      description: 'Sologenic is disrupting the asset trading industry: Tokenized Securities, Crypto Assets & NFTs.',
      denom_units: [{
          denom: 'xrpl11278ecf9e',
          exponent: 0,
          aliases: ['xrpl11278ecf9e']
        }, {
          denom: 'solo',
          exponent: 15
        }],
      base: 'xrpl11278ecf9e',
      name: 'Solo',
      display: 'solo',
      symbol: 'SOLO',
      type_asset: 'unknown',
      coingecko_id: 'solo-coin',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.svg',
          theme: {
            primary_color_hex: '#ffffff'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/solo.svg'
      }
    },
    {
      description: 'RLUSD, Ripple’s official USD-backed stablecoin, offers stability and liquidity for cross-border transactions on the XRP Ledger.',
      denom_units: [{
          denom: 'xrpl570c00a604',
          exponent: 0,
          aliases: ['xrpl570c00a604']
        }, {
          denom: 'rlusd',
          exponent: 15
        }],
      base: 'xrpl570c00a604',
      name: 'RLUSD',
      display: 'rlusd',
      symbol: 'RLUSD',
      coingecko_id: 'ripple-usd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.svg',
          theme: {
            primary_color_hex: '#1b90f7'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/xrpl/images/rlusd.svg'
      },
      type_asset: 'unknown'
    }
  ]
};
export default info;