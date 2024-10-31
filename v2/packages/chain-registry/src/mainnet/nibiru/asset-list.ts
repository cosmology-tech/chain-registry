import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'nibiru',
  assets: [
    {
      description: 'The native token of Nibiru network',
      extendedDescription: 'Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi',
        twitter: 'https://twitter.com/nibiruchain'
      },
      denomUnits: [
        {
          denom: 'unibi',
          exponent: 0
        },
        {
          denom: 'nibi',
          exponent: 6
        },
        {
          denom: 'attonibi',
          exponent: 18
        }
      ],
      base: 'unibi',
      name: 'Nibiru',
      display: 'nibi',
      symbol: 'NIBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg'
      },
      coingeckoId: 'nibiru',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/nibiru.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Liquid Staked Nibiru (Eris)',
      extendedDescription: 'Liquid Staked Nibiru, powered by Eris Protocol\'s amplifier contracts. Nibiru is a smart contract ecosystem with a high-performance, EVM-equivalent execution layer. Nibiru is engineered to meet the growing demand for versatile, scalable, and easy-to-use Web3 applications.',
      socials: {
        website: 'https://nibiru.fi/docs/learn/liquid-stake/',
        twitter: 'https://x.com/eris_protocol'
      },
      denomUnits: [{
          denom: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
          exponent: 0
        }, {
          denom: 'stNIBI',
          exponent: 6
        }],
      base: 'tf/nibi1udqqx30cw8nwjxtl4l28ym9hhrp933zlq8dqxfjzcdhvl8y24zcqpzmh8m/ampNIBI',
      name: 'Liquid Staked Nibiru (Eris)',
      display: 'stNIBI',
      symbol: 'stNIBI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nibiru/images/stnibi-logo-circle-500x500.svg',
          theme: {
            primaryColorHex: '#14c0ce'
          }
        }],
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'nibiru',
            baseDenom: 'unibi'
          },
          provider: 'Eris Protocol'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Noble USDC on Nibiru',
      denomUnits: [{
          denom: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-67'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          theme: {
            circle: true,
            primaryColorHex: '#a8bbfb',
            backgroundColorHex: '#ffffff'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg'
      }
    },
    {
      description: 'uoprek',
      denomUnits: [{
          denom: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
          exponent: 0
        }],
      base: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      name: 'uoprek',
      display: 'tf/nibi149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qkyhy0t/uoprek',
      symbol: 'UOPREK',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'utestate',
      denomUnits: [{
          denom: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
          exponent: 0
        }],
      base: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      name: 'utestate',
      display: 'tf/nibi1lp28kx3gz0prsztl024z730ufkg3alahaq3e7a6gae22nk0dqdvsyrrgqw/utestate',
      symbol: 'UTESTATE',
      typeAsset: 'sdk.coin'
    },
    {
      description: 'npp',
      denomUnits: [{
          denom: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
          exponent: 0
        }],
      base: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      name: 'npp',
      display: 'tf/nibi1xpp7yn0tce62ffattws3gpd6v0tah0mlevef3ej3r4pnfvsehcgqk3jvxq/NPP',
      symbol: 'NPP',
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;