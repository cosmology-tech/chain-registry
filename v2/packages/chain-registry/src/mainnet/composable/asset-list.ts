import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'composable',
  assets: [
    {
      description: 'Picasso is a blockchain project within the IBC ecosystem that focuses on providing modular and interoperable solutions for decentralized finance (DeFi) and other blockchain applications.',
      extendedDescription: 'Picasso is part of the IBC network and aims to offer modular, interoperable solutions tailored for DeFi and other blockchain applications. Picasso enables IBC-based bridging between Cosmos, Solana, Ethereum, and Polkadot. Picasso\'s commitment to innovation and interoperability makes it a significant player in the evolving blockchain landscape, providing tools and infrastructure that cater to diverse blockchain use cases.',
      denomUnits: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingeckoId: 'picasso',
      traces: [{
          type: 'additional-mintage',
          counterparty: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: 'ppica'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      socials: {
        website: 'https://picasso.network/',
        twitter: 'https://twitter.com/picasso_network'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native staking and governance token of Kusama Relay Chain.',
      denomUnits: [{
          denom: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
          exponent: 0,
          aliases: ['4']
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
      name: 'KSM',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '4',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/4'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: '4'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      description: 'The native staking and governance token of Polkadot Relay Chain.',
      denomUnits: [{
          denom: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
          exponent: 0,
          aliases: ['79228162514264337593543950342']
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'ics20',
      base: 'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
      name: 'DOT',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/transfer/channel-15/79228162514264337593543950342'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      description: 'USDT issued by the Kusama Asset Hub.',
      denomUnits: [{
          denom: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
          exponent: 0,
          aliases: ['130']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
      name: 'USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '130',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/130'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: '130'
          }
        }]
    },
    {
      description: 'The native fee, staking and governance token of the Tinkernet Parachain.',
      denomUnits: [{
          denom: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
          exponent: 0,
          aliases: ['2125']
        }, {
          denom: 'tnkr',
          exponent: 12
        }],
      typeAsset: 'ics20',
      base: 'ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8',
      name: 'TNKR',
      display: 'tnkr',
      symbol: 'TNKR',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'picasso',
            baseDenom: '2125',
            channelId: 'channel-17'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/2125'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'picasso',
            baseDenom: '2125'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    },
    {
      description: 'The native token of Ethereum, bridged via IBC.',
      extendedDescription: 'Ether is the native token of the Ethereum blockchain. It powers a wide range of decentralized applications and smart contracts on the platform. This specific version has been bridged through Picasso\'s implementation of IBC on Ethereum.',
      denomUnits: [{
          denom: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'eth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C',
      name: 'Ethereum',
      display: 'eth',
      symbol: 'ETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: 'wei',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/wei'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: 'wei'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png',
          theme: {
            primaryColorHex: '#303030'
          }
        }],
      socials: {
        website: 'https://ethereum.org/',
        twitter: 'https://twitter.com/ethereum'
      }
    },
    {
      description: 'A stablecoin issued by Maker Protocol.',
      extendedDescription: 'DAI, a stablecoin issued by the Maker Protocol, maintains a value pegged to the US dollar. This specific version has been bridged through Picasso\'s implementation of IBC on Ethereum.',
      denomUnits: [{
          denom: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
          exponent: 0,
          aliases: ['dai-wei']
        }, {
          denom: 'dai',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533',
      name: 'Dai',
      display: 'dai',
      symbol: 'DAI',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6b175474e89094c44da98b954eedeac495271d0f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg'
        }],
      socials: {
        website: 'https://makerdao.com/',
        twitter: 'https://twitter.com/MakerDAO'
      }
    },
    {
      description: 'The governance token of the Frax ecosystem.',
      extendedDescription: 'Frax Shares is the governance and utility token of the Frax Protocol. It plays a crucial role in maintaining the stability of the FRAX stablecoin. Holders of FXS can participate in governance decisions and benefit from the protocol\'s growth and revenue, as the token captures fees.',
      denomUnits: [{
          denom: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
          exponent: 0,
          aliases: ['fxs-wei']
        }, {
          denom: 'fxs',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29',
      name: 'Frax Shares',
      display: 'fxs',
      symbol: 'FXS',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance'
      }
    },
    {
      description: 'The first fractional-algorithmic stablecoin by Frax Finance.',
      extendedDescription: 'FRAX is a stablecoin designed to maintain a stable value to a peg of the US dollar. It is issued by the Frax Protocol, which employs a hybrid approach combining algorithmic mechanisms with collateral backing.',
      denomUnits: [{
          denom: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
          exponent: 0,
          aliases: ['frax-wei']
        }, {
          denom: 'frax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB',
      name: 'Frax',
      display: 'frax',
      symbol: 'FRAX',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x853d955acef822db058eb8505911ed77f175b99e'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x853d955acef822db058eb8505911ed77f175b99e'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg'
        }],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance'
      }
    },
    {
      description: 'A liquid ETH staking derivative designed to leverage the Frax ecosystem.',
      extendedDescription: 'FrxETH is a stablecoin that is loosely pegged to ETH, meaning that 1 frxETH always represents 1 ETH.',
      denomUnits: [{
          denom: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
          exponent: 0,
          aliases: ['frxeth-wei']
        }, {
          denom: 'frxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90',
      name: 'Frax Ether',
      display: 'frxeth',
      symbol: 'frxETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x5e8422345238f34275888049021821e8e08caa1f'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x5e8422345238f34275888049021821e8e08caa1f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance'
      }
    },
    {
      description: 'A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.',
      extendedDescription: 'SFRXETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. It allows users to earn staking yield on their frxETH, a type of Frax Ether.',
      denomUnits: [{
          denom: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
          exponent: 0,
          aliases: ['sfrxeth-wei']
        }, {
          denom: 'sfrxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A',
      name: 'Frax Staked Ether',
      display: 'sfrxeth',
      symbol: 'sfrxETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xac3e018457b222d93114458476f3e3416abbe38f'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg'
        }],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance'
      }
    },
    {
      description: 'An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ',
      extendedDescription: 'Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times.',
      denomUnits: [{
          denom: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
          exponent: 0,
          aliases: ['sfrax-wei']
        }, {
          denom: 'sfrax',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9',
      name: 'Staked FRAX',
      display: 'sfrax',
      symbol: 'sFRAX',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      socials: {
        website: 'https://www.frax.com/',
        twitter: 'https://twitter.com/fraxfinance'
      }
    },
    {
      description: 'A stablecoin issued by Tether that is pegged 1:1 to the USD.',
      extendedDescription: 'USDT, or Tether, is a widely used stablecoin pegged to the US dollar, designed to maintain a stable value and facilitate transactions. This specific version has been bridged through Picasso\'s implementation of IBC on Ethereum.',
      denomUnits: [{
          denom: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
          exponent: 0,
          aliases: ['uusdt']
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD',
      name: 'Tether (Ethereum)',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
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
      socials: {
        website: 'https://www.tether.to/',
        twitter: 'https://twitter.com/Tether_to'
      }
    },
    {
      description: 'CRV is the governance token for Curve Finance.',
      denomUnits: [{
          denom: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
          exponent: 0,
          aliases: ['crv-wei']
        }, {
          denom: 'crv',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED',
      name: 'Curve DAO',
      display: 'crv',
      symbol: 'CRV',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xd533a949740bb3306d119cc777fa900ba034cd52'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png',
          theme: {
            primaryColorHex: '#1fcbdb'
          }
        }]
    },
    {
      description: 'An ERC-20 token issued Ethereum that represents Bitcoin.',
      denomUnits: [{
          denom: 'ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5',
          exponent: 0,
          aliases: ['wbtc-satoshi']
        }, {
          denom: 'wbtc',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5',
      name: 'Wrapped Bitcoin',
      display: 'wbtc',
      symbol: 'wBTC',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png',
          theme: {
            primaryColorHex: '#f39444'
          }
        }]
    },
    {
      description: 'A token that represents staked ether in Lido.',
      denomUnits: [{
          denom: 'ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD',
          exponent: 0,
          aliases: ['steth-wei']
        }, {
          denom: 'steth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD',
      name: 'Lido Staked Ether',
      display: 'steth',
      symbol: 'stETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg'
        }]
    },
    {
      description: 'Rocket Pool protocol\'s liquid staking token.',
      denomUnits: [{
          denom: 'ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC',
          exponent: 0,
          aliases: ['reth-wei']
        }, {
          denom: 'reth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC',
      name: 'Rocket Pool ETH',
      display: 'reth',
      symbol: 'rETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xae78736cd615f374d3085123a210448e74fc6393'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xae78736cd615f374d3085123a210448e74fc6393'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png',
          theme: {
            primaryColorHex: '#fba487'
          }
        }]
    },
    {
      description: 'A collateralized-debt-position (CDP) stablecoin by Curve DAO.',
      denomUnits: [{
          denom: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
          exponent: 0,
          aliases: ['crvusd-wei']
        }, {
          denom: 'crvusd',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A',
      name: 'crvUSD',
      display: 'crvusd',
      symbol: 'crvUSD',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png',
          theme: {
            primaryColorHex: '#d6e3d9'
          }
        }]
    },
    {
      description: 'pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.',
      denomUnits: [{
          denom: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
          exponent: 0,
          aliases: ['pxeth-wei']
        }, {
          denom: 'pxeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821',
      name: 'Dinero Staked ETH',
      display: 'pxeth',
      symbol: 'pxETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png',
          theme: {
            primaryColorHex: '#c3cbd2'
          }
        }]
    },
    {
      description: 'eETH is a natively restaked liquid staking token on Ethereum.',
      denomUnits: [{
          denom: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
          exponent: 0,
          aliases: ['eeth-wei']
        }, {
          denom: 'eeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B',
      name: 'ether.fi Staked ETH',
      display: 'eeth',
      symbol: 'eETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          },
          provider: 'Picasso'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png'
      },
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png',
          theme: {
            primaryColorHex: '#5045b7'
          }
        }]
    },
    {
      description: 'The native governance token of Ethena.',
      denomUnits: [{
          denom: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
          exponent: 0,
          aliases: ['ena-wei']
        }, {
          denom: 'ena',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929',
      name: 'Ethena',
      display: 'ena',
      symbol: 'ENA',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x57e114b691db790c35207b2e685d4a43181e6061'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png',
          theme: {
            primaryColorHex: '#1c1c1c'
          }
        }]
    },
    {
      description: 'Ethena USDe is a synthetic dollar protocol built on Ethereum.',
      denomUnits: [{
          denom: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
          exponent: 0,
          aliases: ['usde-wei']
        }, {
          denom: 'usde',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983',
      name: 'Ethena USDe',
      display: 'usde',
      symbol: 'USDe',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }]
    },
    {
      description: 'A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.',
      denomUnits: [{
          denom: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041',
          exponent: 0,
          aliases: ['ezeth-wei']
        }, {
          denom: 'ezeth',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041',
      name: 'Renzo Restaked ETH',
      display: 'ezeth',
      symbol: 'ezETH',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png',
          theme: {
            primaryColorHex: '#9bcf2c'
          }
        }]
    },
    {
      description: 'PEPE is a deflationary memecoin launched on Ethereum. ',
      denomUnits: [{
          denom: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
          exponent: 0,
          aliases: ['pepe-wei']
        }, {
          denom: 'pepe',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05',
      name: 'Pepe',
      display: 'pepe',
      symbol: 'PEPE',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933',
            channelId: 'channel-2'
          },
          chain: {
            channelId: 'channel-52',
            path: 'transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0x6982508145454Ce325dDbE47a25d4ec3d2311933'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png',
          theme: {
            primaryColorHex: '#cc3233'
          }
        }]
    },
    {
      description: 'SOL is the native cryptocurrency of the Solana blockchain.',
      denomUnits: [{
          denom: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
          exponent: 0,
          aliases: ['Lamport']
        }, {
          denom: 'wsol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C',
      name: 'Wrapped Solana',
      display: 'wsol',
      symbol: 'wSOL',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Lamport'
          },
          provider: 'Solana'
        }, {
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/So11111111111111111111111111111111111111112'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'So11111111111111111111111111111111111111112'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png',
          theme: {
            circle: true,
            backgroundColorHex: '#000000'
          }
        }]
    },
    {
      description: 'mSOL represents staked SOL in the Marinade stake pool.',
      denomUnits: [{
          denom: 'ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D',
          exponent: 0
        }, {
          denom: 'msol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D',
      name: 'Marinade Staked SOL',
      display: 'msol',
      symbol: 'mSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
          theme: {
            primaryColorHex: '#cbebe3'
          }
        }]
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.',
      denomUnits: [{
          denom: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
          exponent: 0
        }, {
          denom: 'jitosol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2',
      name: 'Jito Staked SOL',
      display: 'jitosol',
      symbol: 'jitoSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png',
          theme: {
            primaryColorHex: '#5bb384'
          }
        }]
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the BlazeStake protocol.',
      denomUnits: [{
          denom: 'ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716',
          exponent: 0
        }, {
          denom: 'bsol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716',
      name: 'BlazeStake Staked SOL',
      display: 'bsol',
      symbol: 'bSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bsol.png',
          theme: {
            primaryColorHex: '#21c3cc'
          }
        }]
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.',
      denomUnits: [{
          denom: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
          exponent: 0
        }, {
          denom: 'lst',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D',
      name: 'Liquid Staking Token',
      display: 'lst',
      symbol: 'LST',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png',
          theme: {
            primaryColorHex: '#cbebe3'
          }
        }]
    },
    {
      description: 'A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.',
      denomUnits: [{
          denom: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
          exponent: 0
        }, {
          denom: 'edgesol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C',
      name: 'Edgevana Staked SOL',
      display: 'edgesol',
      symbol: 'edgeSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png',
          theme: {
            primaryColorHex: '#146cfc'
          }
        }]
    },
    {
      description: 'A liquid staked token that represents SOL staked to Helius\'s validator.',
      denomUnits: [{
          denom: 'ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6',
          exponent: 0
        }, {
          denom: 'hsol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6',
      name: 'Helius Staked SOL',
      display: 'hsol',
      symbol: 'hSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/hsol.png',
          theme: {
            primaryColorHex: '#e5502a'
          }
        }]
    },
    {
      description: 'A liquid staked token that represents SOL staked to Jupiter\'s validator.',
      denomUnits: [{
          denom: 'ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626',
          exponent: 0
        }, {
          denom: 'jupsol',
          exponent: 9
        }],
      typeAsset: 'ics20',
      base: 'ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626',
      name: 'Jupiter Staked SOL',
      display: 'jupsol',
      symbol: 'jupSOL',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jupsol.png',
          theme: {
            primaryColorHex: '#85d79e'
          }
        }]
    },
    {
      description: 'dogwifhat is a meme coin that operates on Solana.',
      denomUnits: [{
          denom: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
          exponent: 0
        }, {
          denom: 'wif',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071',
      name: 'dogwifhat',
      display: 'wif',
      symbol: 'WIF',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png',
          theme: {
            primaryColorHex: '#a29482'
          }
        }]
    },
    {
      description: 'Tether, issued natively on Solana.',
      denomUnits: [{
          denom: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575',
      name: 'Tether',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }]
    },
    {
      description: 'Whinecoin is an experimental memecoin by the Sommelier Finance team.',
      denomUnits: [{
          denom: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
          exponent: 0,
          aliases: ['ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump']
        }, {
          denom: 'whine',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912',
      name: 'WHINEcoin',
      display: 'whine',
      symbol: 'WHINE',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'solana',
            baseDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png',
          theme: {
            primaryColorHex: '#FFFFFF',
            backgroundColorHex: '#FFFFFF',
            circle: false
          }
        }]
    },
    {
      description: 'Unicorn from Solana via Picasso IBC',
      denomUnits: [{
          denom: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1',
          exponent: 0,
          aliases: ['UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z']
        }, {
          denom: 'unicorn',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1',
      name: 'Unicorn',
      display: 'unicorn',
      symbol: 'UWU',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'solana',
            baseDenom: 'UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-71',
            path: 'transfer/channel-71/UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'unicorn',
            baseDenom: 'uwunicorn'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png',
          theme: {
            primaryColorHex: '#D44CE6'
          }
        }]
    }
  ]
};
export default info;