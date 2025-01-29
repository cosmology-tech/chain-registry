import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'milkyway',
  assets: [
    {
      description: 'The native token of MilkyWay',
      extended_description: 'MilkyWay (MILK) is the first modular staking portal, designed to redefine security and scalability within the modular ecosystem. As a pioneer of modular staking, MilkyWay integrates liquid staking and restaking solutions to address fragmented trust and enhance crypto-economic security across networks.\n\nLaunched in December 2023 as the first liquid staking solution for the Celestia ecosystem, MilkyWay empowered users to unlock staked TIA positions and engage with various DeFi protocols. This initial phase introduced milkTIA which has seen widespread adoption to become the leading LST for TIA. Building on this success, MilkyWay is now entering Phase 2: a multi-asset, multi-chain modular restaking protocol.\n\nMilkyWay’s architecture is purpose-built for modularity . Unlike traditional solutions, its modular design allows Actively Validated Services (AVSs) to fully customize, or “Plug-in” their security solutions through programmable rules, including asset delegation and slashing mechanisms. By restaking native and liquid staked assets, users can provide security to AVSs or any off-chain program and system that require its own unique validation process for verification. This approach ensures seamless integration while minimizing operational complexity.\n\nThrough programmable rules, AVSs can define asset allocation and stake distribution, offering both operator-centric and AVS-centric models for greater control. Slashing rules further enhance security through customizable mechanisms like stake slash, jail slash, and burn slash, enabling AVSs to align these features with their risk profiles. These extensible features ensure MilkyWay evolves alongside the needs of its AVS partners, redefining staking and restaking with a focus on trust, innovation, and modularity.',
      denom_units: [{
          denom: 'umilk',
          exponent: 0
        }, {
          denom: 'milk',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'umilk',
      name: 'Milk',
      display: 'milk',
      symbol: 'MILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milkyway.svg',
          theme: {
            primary_color_hex: '#760dbb'
          }
        }],
      keywords: ['liquid staking', 'restaking'],
      socials: {
        website: 'https://milkyway.zone',
        twitter: 'https://x.com/milky_way_zone'
      }
    },
    {
      description: 'The native token of the Celestia blockchain.',
      denom_units: [{
          denom: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'TIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F1183DB3D428313A6FD329DF18219F9D6B83257D07D292EA9EC1D877E89EC2B0',
      name: 'TIA',
      display: 'TIA',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-49'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/utia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'The native token of the Celestia blockchain.',
      denom_units: [{
          denom: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'TIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/6C349F0EB135C5FA99301758F35B87DB88403D690E5E314AB080401FEE4066E5',
      name: 'Celestia',
      display: 'TIA',
      symbol: 'TIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-6994',
            path: 'transfer/channel-6994/utia'
          }
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877',
            channel_id: 'channel-89298'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-6994/utia'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primary_color_hex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'MilkyWay\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
          exponent: 0,
          aliases: ['factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA']
        }, {
          denom: 'milkTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/16065EE5282C5217685C8F084FC44864C25C706AC37356B0D62811D50B96920F',
      name: 'milkTIA',
      display: 'milkTIA',
      symbol: 'milkTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'MilkyWay'
        }, {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
            channel_id: 'channel-89298'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milktia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milktia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milktia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/milkyway/images/milktia.svg',
          theme: {
            primary_color_hex: '#d18dfc'
          }
        }],
      coingecko_id: 'milkyway-staked-tia'
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/8D4FC51F696E03711B9B37A5787FB89BD2DDBAF788813478B002D552A12F9157',
      name: 'stTIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'Stride'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'stride',
            base_denom: 'stutia',
            channel_id: 'channel-5'
          },
          chain: {
            channel_id: 'channel-326',
            path: 'transfer/channel-326/stutia'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'ibc/698350B8A61D575025F3ED13E9AC9C0F45C89DEFE92F76D5838F1D3C1A7FF7C9',
            channel_id: 'channel-89298'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-326/stutia'
          }
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'stride',
            base_denom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primary_color_hex: '#e40474'
          }
        }]
    },
    {
      description: 'Drop\'s liquid staked TIA',
      denom_units: [{
          denom: 'ibc/4795C86F72EC2CB54E885A4A5B401BED9C333E008311ED9C4DE01BF546B44A21',
          exponent: 0,
          aliases: ['udtia']
        }, {
          denom: 'dTIA',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/4795C86F72EC2CB54E885A4A5B401BED9C333E008311ED9C4DE01BF546B44A21',
      name: 'dTIA',
      display: 'dTIA',
      symbol: 'dTIA',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          provider: 'Drop Protocol'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia',
            channel_id: 'channel-10'
          },
          chain: {
            channel_id: 'channel-874',
            path: 'transfer/channel-874/factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'ibc/C7A810C6ED1FC3FFC7C834A534D400EADC94FF7D3BE13DDD4C042AEF1816DFB4',
            channel_id: 'channel-89298'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-874/factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dTIA.svg'
      },
      images: [{
          image_sync: {
            chain_name: 'neutron',
            base_denom: 'factory/neutron1ut4c6pv4u6vyu97yw48y8g7mle0cat54848v6m97k977022lzxtsaqsgmq/udtia'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dTIA.svg'
        }]
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denom_units: [{
          denom: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'USDC',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/F5FABF52B54E65064B57BF6DBD8E5FAD22CEE9F4B8A57ADBB20CCD0173AA72A4',
      name: 'USDC',
      display: 'USDC',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chain_name: 'forex',
            base_denom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-1'
          },
          chain: {
            channel_id: 'channel-750',
            path: 'transfer/channel-750/uusdc'
          }
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom: 'ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4',
            channel_id: 'channel-89298'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-750/uusdc'
          }
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png'
      },
      images: [{
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primary_color_hex: '#2775CA'
          }
        }]
    }
  ]
};
export default info;