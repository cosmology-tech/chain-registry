import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'noble',
  assets: [
    {
      description: 'The permissioned staking asset for Noble Chain',
      denomUnits: [{
          denom: 'ustake',
          exponent: 0,
          aliases: ['microstake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ustake',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg',
          theme: {
            primaryColorHex: '#a8bbfb'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denomUnits: [{
          denom: 'ufrienzies',
          exponent: 0,
          aliases: ['microfrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ufrienzies',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg',
          theme: {
            primaryColorHex: '#04041c'
          }
        }]
    },
    {
      description: 'ATOM token on Noble',
      denomUnits: [{
          denom: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6,
          aliases: ['ATOM']
        }],
      typeAsset: 'ics20',
      base: 'ibc/EF48E6B1A1A19F47ECAEA62F5670C37C0580E86A9E88498B7E393EB6F49F33C0',
      name: 'Atom Staking Coin',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-536'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          imageSync: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
          theme: {
            primaryColorHex: '#272d45'
          }
        }]
    },
    {
      description: 'USD Coin',
      denomUnits: [{
          denom: 'uusdc',
          exponent: 0,
          aliases: ['microusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'uusdc',
      display: 'usdc',
      name: 'USDC',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Ondo US Dollar Yield',
      extendedDescription: 'USDY is a tokenized note secured by short-term US Treasuries and bank demand deposits. USDY is accessible to non-US individual and institutional investors and is transferable onchain 40-50 days after purchase.',
      denomUnits: [{
          denom: 'ausdy',
          exponent: 0,
          aliases: ['attousdy']
        }, {
          denom: 'usdy',
          exponent: 18
        }],
      base: 'ausdy',
      display: 'usdy',
      name: 'Ondo US Dollar Yield',
      symbol: 'USDY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/usdy.svg',
          theme: {
            primaryColorHex: '#142c5c'
          }
        }],
      coingeckoId: 'ondo-us-dollar-yield',
      socials: {
        website: 'https://ondo.finance/usdy',
        twitter: 'https://x.com/OndoFinance'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'EURe is a Euro-backed stablecoin issued by Monerium on Noble.',
      denomUnits: [{
          denom: 'ueure',
          exponent: 0
        }, {
          denom: 'eure',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'ueure',
      name: 'Monerium EUR emoney',
      display: 'eure',
      symbol: 'EURe',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          provider: 'Monerium'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eure.svg',
          theme: {
            circle: true,
            primaryColorHex: '#0095D7',
            backgroundColorHex: '#FFFFFF'
          }
        }]
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/9BE17980291443F276406CFE7368A720676FC06D5805C1A23AE52C2534E705F1',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-64'
          },
          chain: {
            channelId: 'channel-7',
            path: 'transfer/channel-7/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg'
      },
      images: [{
          imageSync: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/crowdp.svg',
          theme: {
            primaryColorHex: '#04fbfb'
          }
        }]
    }
  ]
};
export default info;