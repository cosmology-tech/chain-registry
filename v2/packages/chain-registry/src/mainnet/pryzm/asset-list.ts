import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'pryzm',
  assets: [
    {
      description: 'The native token of PRYZM',
      denomUnits: [{
          denom: 'upryzm',
          exponent: 0
        }, {
          denom: 'pryzm',
          exponent: 6
        }],
      base: 'upryzm',
      name: 'Pryzm',
      display: 'pryzm',
      symbol: 'PRYZM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pryzm.svg',
          theme: {
            primaryColorHex: '#c6ddf5'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The meme token of PRYZM',
      denomUnits: [{
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
          exponent: 0,
          aliases: ['uauuu']
        }, {
          denom: 'auuu',
          exponent: 6
        }],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
      name: 'AUUU',
      display: 'auuu',
      symbol: 'AUUU',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/AUUU.svg',
          theme: {
            primaryColorHex: '#eb536c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub',
      denomUnits: [{
          denom: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2',
      name: 'Atom',
      display: 'atom',
      symbol: 'ATOM',
      coingeckoId: 'cosmos',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-859'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uatom'
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
      description: 'The native staking and governance token of the Injective chain',
      denomUnits: [{
          denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
          exponent: 0,
          aliases: ['inj']
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      coingeckoId: 'injective-protocol',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-284'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/inj'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          imageSync: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Osmosis chain',
      denomUnits: [{
          denom: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/13B2C536BB057AC79D5616B8EA1B9540EC1F2170718CAFF6F0083C966FFFED0B',
      name: 'Osmo',
      display: 'osmo',
      symbol: 'OSMO',
      coingeckoId: 'osmosis',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-75755'
          },
          chain: {
            channelId: 'channel-2',
            path: 'transfer/channel-2/uosmo'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          theme: {
            primaryColorHex: '#760dbb'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Celestia chain',
      denomUnits: [{
          denom: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
          exponent: 0,
          aliases: ['utia']
        }, {
          denom: 'tia',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BF28D9C17E0306B194D50F51C3B2590BEAD15E04E03ADD34C3A26E62D85C9676',
      name: 'Tia',
      display: 'tia',
      symbol: 'TIA',
      coingeckoId: 'celestia',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia',
            channelId: 'channel-34'
          },
          chain: {
            channelId: 'channel-3',
            path: 'transfer/channel-3/utia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          theme: {
            primaryColorHex: '#7c2cfb'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Terra chain',
      denomUnits: [{
          denom: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B8AF5D92165F35AB31F3FC7C7B444B9D240760FA5D406C49D24862BD0284E395',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      coingeckoId: 'terra-luna-2',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-473'
          },
          chain: {
            channelId: 'channel-4',
            path: 'transfer/channel-4/uluna'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          imageSync: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg',
          theme: {
            primaryColorHex: '#f4de6f'
          }
        }]
    },
    {
      description: 'Circle\'s USDC on Noble',
      denomUnits: [{
          denom: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/BFAAB7870A9AAABF64A7366DAAA0B8E5065EAA1FCE762F45677DC24BE796EF65',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      coingeckoId: 'usd-coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-79'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'noble',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg',
          theme: {
            circle: true,
            primaryColorHex: '#2775CA'
          }
        }]
    },
    {
      description: 'Circle\'s USDC on Axelar',
      denomUnits: [{
          denom: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
      name: 'USDC (Axelar)',
      display: 'usdc',
      symbol: 'USDC.axl',
      coingeckoId: 'axlusdc',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'axelar',
            baseDenom: 'uusdc',
            channelId: 'channel-155'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uusdc'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      },
      images: [{
          imageSync: {
            chainName: 'axelar',
            baseDenom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
          theme: {
            primaryColorHex: '#2474cc'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the dYdX chain',
      denomUnits: [{
          denom: 'ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858',
          exponent: 0,
          aliases: ['adydx']
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/F8CA5236869F819BC006EEF088E67889A26E4140339757878F0F4E229CDDA858',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      coingeckoId: 'dydx-chain',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'dydx',
            baseDenom: 'adydx',
            channelId: 'channel-71'
          },
          chain: {
            channelId: 'channel-24',
            path: 'transfer/channel-24/adydx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'dydx',
            baseDenom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#21212f'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked TIA',
      denomUnits: [{
          denom: 'ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F',
          exponent: 0,
          aliases: ['stutia']
        }, {
          denom: 'stTIA',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/FA78980867B7E87F382CDA00275C55DDC248CABC7DEE27AC6868CCF97DD5E02F',
      name: 'Stride Staked TIA',
      display: 'stTIA',
      symbol: 'stTIA',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stutia',
            channelId: 'channel-257'
          },
          chain: {
            channelId: 'channel-23',
            path: 'transfer/channel-23/stutia'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stutia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/sttia.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Stride\'s liquid staked DYDX',
      denomUnits: [{
          denom: 'ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE',
          exponent: 0,
          aliases: ['stadydx']
        }, {
          denom: 'stDYDX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/120DC39B61CC121E91525C1D51624E41BBE74C537D7B0BE50BBFF9A00E37B6EE',
      name: 'Stride Staked DYDX',
      display: 'stDYDX',
      symbol: 'stDYDX',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'stride',
            baseDenom: 'stadydx',
            channelId: 'channel-257'
          },
          chain: {
            channelId: 'channel-23',
            path: 'transfer/channel-23/stadydx'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg'
      },
      images: [{
          imageSync: {
            chainName: 'stride',
            baseDenom: 'stadydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/stdydx.svg',
          theme: {
            primaryColorHex: '#e40474'
          }
        }]
    },
    {
      description: 'Drop Protocol\'s liquid staked ATOM',
      denomUnits: [{
          denom: 'ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87',
          exponent: 0,
          aliases: ['udatom']
        }, {
          denom: 'dATOM',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/EA6E1E8BA2EB9F681C4BD12C8C81A46530A62934F2BD561B120A00F46946CE87',
      name: 'dATOM',
      display: 'dATOM',
      symbol: 'dATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom',
            channelId: 'channel-4329'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          }
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
      },
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1k6hr0f83e7un2wjf29cspk7j69jrnskk65k3ek2nj9dztrlzpj6q00rtsa/udatom'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/dATOM.svg'
        }]
    },
    {
      description: 'Pryzm\'s native liquid staking token for ATOM',
      denomUnits: [{
          denom: 'c:uatom',
          exponent: 0
        }, {
          denom: 'catom',
          exponent: 6
        }],
      base: 'c:uatom',
      name: 'cAtom',
      display: 'catom',
      symbol: 'cATOM',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for INJ',
      denomUnits: [{
          denom: 'c:inj',
          exponent: 0
        }, {
          denom: 'cINJ',
          exponent: 18
        }],
      base: 'c:inj',
      name: 'cInj',
      display: 'cINJ',
      symbol: 'cINJ',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for OSMO',
      denomUnits: [{
          denom: 'c:uosmo',
          exponent: 0
        }, {
          denom: 'cosmo',
          exponent: 6
        }],
      base: 'c:uosmo',
      name: 'cOsmo',
      display: 'cosmo',
      symbol: 'cOSMO',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for LUNA',
      denomUnits: [{
          denom: 'c:uluna',
          exponent: 0
        }, {
          denom: 'cluna',
          exponent: 6
        }],
      base: 'c:uluna',
      name: 'cLuna',
      display: 'cluna',
      symbol: 'cLUNA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for AUUU',
      denomUnits: [{
          denom: 'factory/pryzm1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sk0s70x/cuauuu',
          exponent: 0
        }, {
          denom: 'cauuu',
          exponent: 6
        }],
      base: 'factory/pryzm1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3sk0s70x/cuauuu',
      name: 'cAuuu',
      display: 'cauuu',
      symbol: 'cAUUU',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'pryzm',
            baseDenom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s native liquid staking token for TIA',
      denomUnits: [{
          denom: 'c:utia',
          exponent: 0
        }, {
          denom: 'ctia',
          exponent: 6
        }],
      base: 'c:utia',
      name: 'cTia',
      display: 'ctia',
      symbol: 'cTIA',
      traces: [{
          type: 'liquid-stake',
          counterparty: {
            chainName: 'celestia',
            baseDenom: 'utia'
          },
          provider: 'Pryzm'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/cTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:uatom:30Sep2024',
          exponent: 0
        }, {
          denom: 'pATOM30Sep2024',
          exponent: 6
        }],
      base: 'p:uatom:30Sep2024',
      name: 'pAtom (30Sep2024)',
      display: 'pATOM30Sep2024',
      symbol: 'pATOM-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:uatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'pATOM31Dec2024',
          exponent: 6
        }],
      base: 'p:uatom:31Dec2024',
      name: 'pAtom (31Dec2024)',
      display: 'pATOM31Dec2024',
      symbol: 'pATOM-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:uatom:31Mar2025',
          exponent: 0
        }, {
          denom: 'pATOM31Mar2025',
          exponent: 6
        }],
      base: 'p:uatom:31Mar2025',
      name: 'pAtom (31Mar2025)',
      display: 'pATOM31Mar2025',
      symbol: 'pATOM-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:uatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'pATOM31Dec2025',
          exponent: 6
        }],
      base: 'p:uatom:31Dec2025',
      name: 'pAtom (31Dec2025)',
      display: 'pATOM31Dec2025',
      symbol: 'pATOM-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for ATOM with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:uatom:31Dec2026',
          exponent: 0
        }, {
          denom: 'pATOM31Dec2026',
          exponent: 6
        }],
      base: 'p:uatom:31Dec2026',
      name: 'pAtom (31Dec2026)',
      display: 'pATOM31Dec2026',
      symbol: 'pATOM-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:uosmo:30Sep2024',
          exponent: 0
        }, {
          denom: 'pOSMO30Sep2024',
          exponent: 6
        }],
      base: 'p:uosmo:30Sep2024',
      name: 'pOsmo (30Sep2024)',
      display: 'pOSMO30Sep2024',
      symbol: 'pOSMO-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:uosmo:31Dec2024',
          exponent: 0
        }, {
          denom: 'pOSMO31Dec2024',
          exponent: 6
        }],
      base: 'p:uosmo:31Dec2024',
      name: 'pOsmo (31Dec2024)',
      display: 'pOSMO31Dec2024',
      symbol: 'pOSMO-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:uosmo:31Mar2025',
          exponent: 0
        }, {
          denom: 'pOSMO31Mar2025',
          exponent: 6
        }],
      base: 'p:uosmo:31Mar2025',
      name: 'pOsmo (31Mar2025)',
      display: 'pOSMO31Mar2025',
      symbol: 'pOSMO-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:uosmo:31Dec2025',
          exponent: 0
        }, {
          denom: 'pOSMO31Dec2025',
          exponent: 6
        }],
      base: 'p:uosmo:31Dec2025',
      name: 'pOsmo (31Dec2025)',
      display: 'pOSMO31Dec2025',
      symbol: 'pOSMO-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for OSMO with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:uosmo:31Dec2026',
          exponent: 0
        }, {
          denom: 'pOSMO31Dec2026',
          exponent: 6
        }],
      base: 'p:uosmo:31Dec2026',
      name: 'pOsmo (31Dec2026)',
      display: 'pOSMO31Dec2026',
      symbol: 'pOSMO-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:inj:30Sep2024',
          exponent: 0
        }, {
          denom: 'pINJ30Sep2024',
          exponent: 18
        }],
      base: 'p:inj:30Sep2024',
      name: 'pInj (30Sep2024)',
      display: 'pINJ30Sep2024',
      symbol: 'pINJ-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:inj:31Dec2024',
          exponent: 0
        }, {
          denom: 'pINJ31Dec2024',
          exponent: 18
        }],
      base: 'p:inj:31Dec2024',
      name: 'pInj (31Dec2024)',
      display: 'pINJ31Dec2024',
      symbol: 'pINJ-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:inj:31Mar2025',
          exponent: 0
        }, {
          denom: 'pINJ31Mar2025',
          exponent: 18
        }],
      base: 'p:inj:31Mar2025',
      name: 'pInj (31Mar2025)',
      display: 'pINJ31Mar2025',
      symbol: 'pINJ-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:inj:31Dec2025',
          exponent: 0
        }, {
          denom: 'pINJ31Dec2025',
          exponent: 18
        }],
      base: 'p:inj:31Dec2025',
      name: 'pInj (31Dec2025)',
      display: 'pINJ31Dec2025',
      symbol: 'pINJ-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for INJ with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:inj:31Dec2026',
          exponent: 0
        }, {
          denom: 'pINJ31Dec2026',
          exponent: 18
        }],
      base: 'p:inj:31Dec2026',
      name: 'pInj (31Dec2026)',
      display: 'pINJ31Dec2026',
      symbol: 'pINJ-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:uluna:30Sep2024',
          exponent: 0
        }, {
          denom: 'pLUNA30Sep2024',
          exponent: 6
        }],
      base: 'p:uluna:30Sep2024',
      name: 'pLuna (30Sep2024)',
      display: 'pLUNA30Sep2024',
      symbol: 'pLUNA-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:uluna:31Dec2024',
          exponent: 0
        }, {
          denom: 'pLUNA31Dec2024',
          exponent: 6
        }],
      base: 'p:uluna:31Dec2024',
      name: 'pLuna (31Dec2024)',
      display: 'pLUNA31Dec2024',
      symbol: 'pLUNA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:uluna:31Mar2025',
          exponent: 0
        }, {
          denom: 'pLUNA31Mar2025',
          exponent: 6
        }],
      base: 'p:uluna:31Mar2025',
      name: 'pLuna (31Mar2025)',
      display: 'pLUNA31Mar2025',
      symbol: 'pLUNA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:uluna:31Dec2025',
          exponent: 0
        }, {
          denom: 'pLUNA31Dec2025',
          exponent: 6
        }],
      base: 'p:uluna:31Dec2025',
      name: 'pLuna (31Dec2025)',
      display: 'pLUNA31Dec2025',
      symbol: 'pLUNA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for LUNA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:uluna:31Dec2026',
          exponent: 0
        }, {
          denom: 'pLUNA31Dec2026',
          exponent: 6
        }],
      base: 'p:uluna:31Dec2026',
      name: 'pLuna (31Dec2026)',
      display: 'pLUNA31Dec2026',
      symbol: 'pLUNA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:uauuu:30Sep2024',
          exponent: 0
        }, {
          denom: 'pAUUU30Sep2024',
          exponent: 6
        }],
      base: 'p:uauuu:30Sep2024',
      name: 'pAuuu (30Sep2024)',
      display: 'pAUUU30Sep2024',
      symbol: 'pAUUU-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:uauuu:31Dec2024',
          exponent: 0
        }, {
          denom: 'pAUUU31Dec2024',
          exponent: 6
        }],
      base: 'p:uauuu:31Dec2024',
      name: 'pAuuu (31Dec2024)',
      display: 'pAUUU31Dec2024',
      symbol: 'pAUUU-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:uauuu:31Dec2025',
          exponent: 0
        }, {
          denom: 'pAUUU31Dec2025',
          exponent: 6
        }],
      base: 'p:uauuu:31Dec2025',
      name: 'pAuuu (31Dec2025)',
      display: 'pAUUU31Dec2025',
      symbol: 'pAUUU-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for AUUU with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:uauuu:31Dec2026',
          exponent: 0
        }, {
          denom: 'pAUUU31Dec2026',
          exponent: 6
        }],
      base: 'p:uauuu:31Dec2026',
      name: 'pAuuu (31Dec2026)',
      display: 'pAUUU31Dec2026',
      symbol: 'pAUUU-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:stutia:30Sep2024',
          exponent: 0
        }, {
          denom: 'pstTIA30Sep2024',
          exponent: 6
        }],
      base: 'p:stutia:30Sep2024',
      name: 'pstTia (30Sep2024)',
      display: 'pstTIA30Sep2024',
      symbol: 'pstTIA-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:stutia:31Dec2024',
          exponent: 0
        }, {
          denom: 'pstTIA31Dec2024',
          exponent: 6
        }],
      base: 'p:stutia:31Dec2024',
      name: 'pstTia (31Dec2024)',
      display: 'pstTIA31Dec2024',
      symbol: 'pstTIA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:stutia:31Mar2025',
          exponent: 0
        }, {
          denom: 'pstTIA31Mar2025',
          exponent: 6
        }],
      base: 'p:stutia:31Mar2025',
      name: 'pstTia (31Mar2025)',
      display: 'pstTIA31Mar2025',
      symbol: 'pstTIA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:stutia:31Dec2025',
          exponent: 0
        }, {
          denom: 'pstTIA31Dec2025',
          exponent: 6
        }],
      base: 'p:stutia:31Dec2025',
      name: 'pstTia (31Dec2025)',
      display: 'pstTIA31Dec2025',
      symbol: 'pstTIA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stTIA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:stutia:31Dec2026',
          exponent: 0
        }, {
          denom: 'pstTIA31Dec2026',
          exponent: 6
        }],
      base: 'p:stutia:31Dec2026',
      name: 'pstTia (31Dec2026)',
      display: 'pstTIA31Dec2026',
      symbol: 'pstTIA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'p:stadydx:30Sep2024',
          exponent: 0
        }, {
          denom: 'pstDYDX30Sep2024',
          exponent: 18
        }],
      base: 'p:stadydx:30Sep2024',
      name: 'pstDydx (30Sep2024)',
      display: 'pstDYDX30Sep2024',
      symbol: 'pstDYDX-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:stadydx:31Dec2024',
          exponent: 0
        }, {
          denom: 'pstDYDX31Dec2024',
          exponent: 18
        }],
      base: 'p:stadydx:31Dec2024',
      name: 'pstDydx (31Dec2024)',
      display: 'pstDYDX31Dec2024',
      symbol: 'pstDYDX-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:stadydx:31Mar2025',
          exponent: 0
        }, {
          denom: 'pstDYDX31Mar2025',
          exponent: 18
        }],
      base: 'p:stadydx:31Mar2025',
      name: 'pstDydx (31Mar2025)',
      display: 'pstDYDX31Mar2025',
      symbol: 'pstDYDX-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:stadydx:31Dec2025',
          exponent: 0
        }, {
          denom: 'pstDYDX31Dec2025',
          exponent: 18
        }],
      base: 'p:stadydx:31Dec2025',
      name: 'pstDydx (31Dec2025)',
      display: 'pstDYDX31Dec2025',
      symbol: 'pstDYDX-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for stDYDX with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:stadydx:31Dec2026',
          exponent: 0
        }, {
          denom: 'pstDYDX31Dec2026',
          exponent: 18
        }],
      base: 'p:stadydx:31Dec2026',
      name: 'pstDydx (31Dec2026)',
      display: 'pstDYDX31Dec2026',
      symbol: 'pstDYDX-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pstDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:udatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'pdATOM31Dec2024',
          exponent: 6
        }],
      base: 'p:udatom:31Dec2024',
      name: 'pdAtom (31Dec2024)',
      display: 'pdATOM31Dec2024',
      symbol: 'pdATOM-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:udatom:31Mar2025',
          exponent: 0
        }, {
          denom: 'pdATOM31Mar2025',
          exponent: 6
        }],
      base: 'p:udatom:31Mar2025',
      name: 'pdAtom (31Mar2025)',
      display: 'pdATOM31Mar2025',
      symbol: 'pdATOM-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 30Jun2025',
      denomUnits: [{
          denom: 'p:udatom:30Jun2025',
          exponent: 0
        }, {
          denom: 'pdATOM30Jun2025',
          exponent: 6
        }],
      base: 'p:udatom:30Jun2025',
      name: 'pdAtom (30Jun2025)',
      display: 'pdATOM30Jun2025',
      symbol: 'pdATOM-30Jun2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:udatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'pdATOM31Dec2025',
          exponent: 6
        }],
      base: 'p:udatom:31Dec2025',
      name: 'pdAtom (31Dec2025)',
      display: 'pdATOM31Dec2025',
      symbol: 'pdATOM-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for dATOM with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:udatom:31Dec2026',
          exponent: 0
        }, {
          denom: 'pdATOM31Dec2026',
          exponent: 6
        }],
      base: 'p:udatom:31Dec2026',
      name: 'pdAtom (31Dec2026)',
      display: 'pdATOM31Dec2026',
      symbol: 'pdATOM-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pdAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'p:utia:31Dec2024',
          exponent: 0
        }, {
          denom: 'pTIA31Dec2024',
          exponent: 6
        }],
      base: 'p:utia:31Dec2024',
      name: 'pTia (31Dec2024)',
      display: 'pTIA31Dec2024',
      symbol: 'pTIA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'p:utia:31Mar2025',
          exponent: 0
        }, {
          denom: 'pTIA31Mar2025',
          exponent: 6
        }],
      base: 'p:utia:31Mar2025',
      name: 'pTia (31Mar2025)',
      display: 'pTIA31Mar2025',
      symbol: 'pTIA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'p:utia:31Dec2025',
          exponent: 0
        }, {
          denom: 'pTIA31Dec2025',
          exponent: 6
        }],
      base: 'p:utia:31Dec2025',
      name: 'pTia (31Dec2025)',
      display: 'pTIA31Dec2025',
      symbol: 'pTIA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted principal token for TIA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'p:utia:31Dec2026',
          exponent: 0
        }, {
          denom: 'pTIA31Dec2026',
          exponent: 6
        }],
      base: 'p:utia:31Dec2026',
      name: 'pTia (31Dec2026)',
      display: 'pTIA31Dec2026',
      symbol: 'pTIA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/pTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:uatom:30Sep2024',
          exponent: 0
        }, {
          denom: 'yATOM30Sep2024',
          exponent: 6
        }],
      base: 'y:uatom:30Sep2024',
      name: 'yAtom (30Sep2024)',
      display: 'yATOM30Sep2024',
      symbol: 'yATOM-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:uatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'yATOM31Dec2024',
          exponent: 6
        }],
      base: 'y:uatom:31Dec2024',
      name: 'yAtom (31Dec2024)',
      display: 'yATOM31Dec2024',
      symbol: 'yATOM-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:uatom:31Mar2025',
          exponent: 0
        }, {
          denom: 'yATOM31Mar2025',
          exponent: 6
        }],
      base: 'y:uatom:31Mar2025',
      name: 'yAtom (31Mar2025)',
      display: 'yATOM31Mar2025',
      symbol: 'yATOM-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:uatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'yATOM31Dec2025',
          exponent: 6
        }],
      base: 'y:uatom:31Dec2025',
      name: 'yAtom (31Dec2025)',
      display: 'yATOM31Dec2025',
      symbol: 'yATOM-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for ATOM with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:uatom:31Dec2026',
          exponent: 0
        }, {
          denom: 'yATOM31Dec2026',
          exponent: 6
        }],
      base: 'y:uatom:31Dec2026',
      name: 'yAtom (31Dec2026)',
      display: 'yATOM31Dec2026',
      symbol: 'yATOM-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:uosmo:30Sep2024',
          exponent: 0
        }, {
          denom: 'yOSMO30Sep2024',
          exponent: 6
        }],
      base: 'y:uosmo:30Sep2024',
      name: 'yOsmo (30Sep2024)',
      display: 'yOSMO30Sep2024',
      symbol: 'yOSMO-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:uosmo:31Dec2024',
          exponent: 0
        }, {
          denom: 'yOSMO31Dec2024',
          exponent: 6
        }],
      base: 'y:uosmo:31Dec2024',
      name: 'yOsmo (31Dec2024)',
      display: 'yOSMO31Dec2024',
      symbol: 'yOSMO-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:uosmo:31Mar2025',
          exponent: 0
        }, {
          denom: 'yOSMO31Mar2025',
          exponent: 6
        }],
      base: 'y:uosmo:31Mar2025',
      name: 'yOsmo (31Mar2025)',
      display: 'yOSMO31Mar2025',
      symbol: 'yOSMO-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:uosmo:31Dec2025',
          exponent: 0
        }, {
          denom: 'yOSMO31Dec2025',
          exponent: 6
        }],
      base: 'y:uosmo:31Dec2025',
      name: 'yOsmo (31Dec2025)',
      display: 'yOSMO31Dec2025',
      symbol: 'yOSMO-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for OSMO with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:uosmo:31Dec2026',
          exponent: 0
        }, {
          denom: 'yOSMO31Dec2026',
          exponent: 6
        }],
      base: 'y:uosmo:31Dec2026',
      name: 'yOsmo (31Dec2026)',
      display: 'yOSMO31Dec2026',
      symbol: 'yOSMO-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yOsmo.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:inj:30Sep2024',
          exponent: 0
        }, {
          denom: 'yINJ30Sep2024',
          exponent: 18
        }],
      base: 'y:inj:30Sep2024',
      name: 'yInj (30Sep2024)',
      display: 'yINJ30Sep2024',
      symbol: 'yINJ-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:inj:31Dec2024',
          exponent: 0
        }, {
          denom: 'yINJ31Dec2024',
          exponent: 18
        }],
      base: 'y:inj:31Dec2024',
      name: 'yInj (31Dec2024)',
      display: 'yINJ31Dec2024',
      symbol: 'yINJ-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:inj:31Mar2025',
          exponent: 0
        }, {
          denom: 'yINJ31Mar2025',
          exponent: 18
        }],
      base: 'y:inj:31Mar2025',
      name: 'yInj (31Mar2025)',
      display: 'yINJ31Mar2025',
      symbol: 'yINJ-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:inj:31Dec2025',
          exponent: 0
        }, {
          denom: 'yINJ31Dec2025',
          exponent: 18
        }],
      base: 'y:inj:31Dec2025',
      name: 'yInj (31Dec2025)',
      display: 'yINJ31Dec2025',
      symbol: 'yINJ-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for INJ with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:inj:31Dec2026',
          exponent: 0
        }, {
          denom: 'yINJ31Dec2026',
          exponent: 18
        }],
      base: 'y:inj:31Dec2026',
      name: 'yInj (31Dec2026)',
      display: 'yINJ31Dec2026',
      symbol: 'yINJ-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yInj.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:uluna:30Sep2024',
          exponent: 0
        }, {
          denom: 'yLUNA30Sep2024',
          exponent: 6
        }],
      base: 'y:uluna:30Sep2024',
      name: 'yLuna (30Sep2024)',
      display: 'yLUNA30Sep2024',
      symbol: 'yLUNA-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:uluna:31Dec2024',
          exponent: 0
        }, {
          denom: 'yLUNA31Dec2024',
          exponent: 6
        }],
      base: 'y:uluna:31Dec2024',
      name: 'yLuna (31Dec2024)',
      display: 'yLUNA31Dec2024',
      symbol: 'yLUNA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:uluna:31Mar2025',
          exponent: 0
        }, {
          denom: 'yLUNA31Mar2025',
          exponent: 6
        }],
      base: 'y:uluna:31Mar2025',
      name: 'yLuna (31Mar2025)',
      display: 'yLUNA31Mar2025',
      symbol: 'yLUNA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:uluna:31Dec2025',
          exponent: 0
        }, {
          denom: 'yLUNA31Dec2025',
          exponent: 6
        }],
      base: 'y:uluna:31Dec2025',
      name: 'yLuna (31Dec2025)',
      display: 'yLUNA31Dec2025',
      symbol: 'yLUNA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for LUNA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:uluna:31Dec2026',
          exponent: 0
        }, {
          denom: 'yLUNA31Dec2026',
          exponent: 6
        }],
      base: 'y:uluna:31Dec2026',
      name: 'yLuna (31Dec2026)',
      display: 'yLUNA31Dec2026',
      symbol: 'yLUNA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yLuna.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:uauuu:30Sep2024',
          exponent: 0
        }, {
          denom: 'yAUUU30Sep2024',
          exponent: 6
        }],
      base: 'y:uauuu:30Sep2024',
      name: 'yAuuu (30Sep2024)',
      display: 'yAUUU30Sep2024',
      symbol: 'yAUUU-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:uauuu:31Dec2024',
          exponent: 0
        }, {
          denom: 'yAUUU31Dec2024',
          exponent: 6
        }],
      base: 'y:uauuu:31Dec2024',
      name: 'yAuuu (31Dec2024)',
      display: 'yAUUU31Dec2024',
      symbol: 'yAUUU-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:uauuu:31Dec2025',
          exponent: 0
        }, {
          denom: 'yAUUU31Dec2025',
          exponent: 6
        }],
      base: 'y:uauuu:31Dec2025',
      name: 'yAuuu (31Dec2025)',
      display: 'yAUUU31Dec2025',
      symbol: 'yAUUU-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for AUUU with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:uauuu:31Dec2026',
          exponent: 0
        }, {
          denom: 'yAUUU31Dec2026',
          exponent: 6
        }],
      base: 'y:uauuu:31Dec2026',
      name: 'yAuuu (31Dec2026)',
      display: 'yAUUU31Dec2026',
      symbol: 'yAUUU-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yAuuu.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:stutia:30Sep2024',
          exponent: 0
        }, {
          denom: 'ystTIA30Sep2024',
          exponent: 6
        }],
      base: 'y:stutia:30Sep2024',
      name: 'ystTia (30Sep2024)',
      display: 'ystTIA30Sep2024',
      symbol: 'ystTIA-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:stutia:31Dec2024',
          exponent: 0
        }, {
          denom: 'ystTIA31Dec2024',
          exponent: 6
        }],
      base: 'y:stutia:31Dec2024',
      name: 'ystTia (31Dec2024)',
      display: 'ystTIA31Dec2024',
      symbol: 'ystTIA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:stutia:31Mar2025',
          exponent: 0
        }, {
          denom: 'ystTIA31Mar2025',
          exponent: 6
        }],
      base: 'y:stutia:31Mar2025',
      name: 'ystTia (31Mar2025)',
      display: 'ystTIA31Mar2025',
      symbol: 'ystTIA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:stutia:31Dec2025',
          exponent: 0
        }, {
          denom: 'ystTIA31Dec2025',
          exponent: 6
        }],
      base: 'y:stutia:31Dec2025',
      name: 'ystTia (31Dec2025)',
      display: 'ystTIA31Dec2025',
      symbol: 'ystTIA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stTIA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:stutia:31Dec2026',
          exponent: 0
        }, {
          denom: 'ystTIA31Dec2026',
          exponent: 6
        }],
      base: 'y:stutia:31Dec2026',
      name: 'ystTia (31Dec2026)',
      display: 'ystTIA31Dec2026',
      symbol: 'ystTIA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 30Sep2024',
      denomUnits: [{
          denom: 'y:stadydx:30Sep2024',
          exponent: 0
        }, {
          denom: 'ystDYDX30Sep2024',
          exponent: 18
        }],
      base: 'y:stadydx:30Sep2024',
      name: 'ystDydx (30Sep2024)',
      display: 'ystDYDX30Sep2024',
      symbol: 'ystDYDX-30Sep2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:stadydx:31Dec2024',
          exponent: 0
        }, {
          denom: 'ystDYDX31Dec2024',
          exponent: 18
        }],
      base: 'y:stadydx:31Dec2024',
      name: 'ystDydx (31Dec2024)',
      display: 'ystDYDX31Dec2024',
      symbol: 'ystDYDX-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:stadydx:31Mar2025',
          exponent: 0
        }, {
          denom: 'ystDYDX31Mar2025',
          exponent: 6
        }],
      base: 'y:stadydx:31Mar2025',
      name: 'ystDydx (31Mar2025)',
      display: 'ystDYDX31Mar2025',
      symbol: 'ystDYDX-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:stadydx:31Dec2025',
          exponent: 0
        }, {
          denom: 'ystDYDX31Dec2025',
          exponent: 18
        }],
      base: 'y:stadydx:31Dec2025',
      name: 'ystDydx (31Dec2025)',
      display: 'ystDYDX31Dec2025',
      symbol: 'ystDYDX-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for stDYDX with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:stadydx:31Dec2026',
          exponent: 0
        }, {
          denom: 'ystDYDX31Dec2026',
          exponent: 18
        }],
      base: 'y:stadydx:31Dec2026',
      name: 'ystDydx (31Dec2026)',
      display: 'ystDYDX31Dec2026',
      symbol: 'ystDYDX-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ystDydx.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:udatom:31Dec2024',
          exponent: 0
        }, {
          denom: 'ydATOM31Dec2024',
          exponent: 6
        }],
      base: 'y:udatom:31Dec2024',
      name: 'ydAtom (31Dec2024)',
      display: 'ydATOM31Dec2024',
      symbol: 'ydATOM-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:udatom:31Mar2025',
          exponent: 0
        }, {
          denom: 'ydATOM31Mar2025',
          exponent: 6
        }],
      base: 'y:udatom:31Mar2025',
      name: 'ydAtom (31Mar2025)',
      display: 'ydATOM31Mar2025',
      symbol: 'ydATOM-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 30Jun2025',
      denomUnits: [{
          denom: 'y:udatom:30Jun2025',
          exponent: 0
        }, {
          denom: 'ydATOM30Jun2025',
          exponent: 6
        }],
      base: 'y:udatom:30Jun2025',
      name: 'ydAtom (30Jun2025)',
      display: 'ydATOM30Jun2025',
      symbol: 'ydATOM-30Jun2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:udatom:31Dec2025',
          exponent: 0
        }, {
          denom: 'ydATOM31Dec2025',
          exponent: 6
        }],
      base: 'y:udatom:31Dec2025',
      name: 'ydAtom (31Dec2025)',
      display: 'ydATOM31Dec2025',
      symbol: 'ydATOM-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for dATOM with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:udatom:31Dec2026',
          exponent: 0
        }, {
          denom: 'ydATOM31Dec2026',
          exponent: 6
        }],
      base: 'y:udatom:31Dec2026',
      name: 'ydAtom (31Dec2026)',
      display: 'ydATOM31Dec2026',
      symbol: 'ydATOM-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/ydAtom.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2024',
      denomUnits: [{
          denom: 'y:utia:31Dec2024',
          exponent: 0
        }, {
          denom: 'yTIA31Dec2024',
          exponent: 6
        }],
      base: 'y:utia:31Dec2024',
      name: 'yTia (31Dec2024)',
      display: 'yTIA31Dec2024',
      symbol: 'yTIA-31Dec2024',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Mar2025',
      denomUnits: [{
          denom: 'y:utia:31Mar2025',
          exponent: 0
        }, {
          denom: 'yTIA31Mar2025',
          exponent: 6
        }],
      base: 'y:utia:31Mar2025',
      name: 'yTia (31Mar2025)',
      display: 'yTIA31Mar2025',
      symbol: 'yTIA-31Mar2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2025',
      denomUnits: [{
          denom: 'y:utia:31Dec2025',
          exponent: 0
        }, {
          denom: 'yTIA31Dec2025',
          exponent: 6
        }],
      base: 'y:utia:31Dec2025',
      name: 'yTia (31Dec2025)',
      display: 'yTIA31Dec2025',
      symbol: 'yTIA-31Dec2025',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s refracted yield token for TIA with maturity of 31Dec2026',
      denomUnits: [{
          denom: 'y:utia:31Dec2026',
          exponent: 0
        }, {
          denom: 'yTIA31Dec2026',
          exponent: 6
        }],
      base: 'y:utia:31Dec2026',
      name: 'yTia (31Dec2026)',
      display: 'yTIA31Dec2026',
      symbol: 'yTIA-31Dec2026',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/yTia.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for USDC / USDC.axl pool',
      denomUnits: [{
          denom: 'lp:6:uusdc.axl-uusdc',
          exponent: 0
        }, {
          denom: 'lp:6:usdc.axl-usdc',
          exponent: 6
        }],
      base: 'lp:6:uusdc.axl-uusdc',
      name: 'USDC / USDC.axl LP',
      display: 'lp:6:usdc.axl-usdc',
      symbol: 'USDC-USDC.axl-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM Yield pool',
      denomUnits: [{
          denom: 'lp:0:uatom',
          exponent: 0
        }, {
          denom: 'lp:0:atom',
          exponent: 6
        }],
      base: 'lp:0:uatom',
      name: 'ATOM Yield LP',
      display: 'lp:0:atom',
      symbol: 'ATOM-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM Boost pool',
      denomUnits: [{
          denom: 'lp:2:uatomypt-uatom',
          exponent: 0
        }, {
          denom: 'lp:2:atomypt-atom',
          exponent: 6
        }],
      base: 'lp:2:uatomypt-uatom',
      name: 'ATOM Boost LP',
      display: 'lp:2:atomypt-atom',
      symbol: 'ATOM-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for ATOM / USDC pool',
      denomUnits: [{
          denom: 'lp:3:uatom-uusdc',
          exponent: 0
        }, {
          denom: 'lp:3:atom-usdc',
          exponent: 6
        }],
      base: 'lp:3:uatom-uusdc',
      name: 'ATOM / USDC LP',
      display: 'lp:3:atom-usdc',
      symbol: 'ATOM-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ Yield pool',
      denomUnits: [{
          denom: 'lp:1:inj',
          exponent: 0
        }, {
          denom: 'lp:1:INJ',
          exponent: 18
        }],
      base: 'lp:1:inj',
      name: 'INJ Yield LP',
      display: 'lp:1:INJ',
      symbol: 'INJ-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ Boost pool',
      denomUnits: [{
          denom: 'lp:4:injypt-inj',
          exponent: 0
        }, {
          denom: 'lp:4:INJypt-INJ',
          exponent: 18
        }],
      base: 'lp:4:injypt-inj',
      name: 'INJ Boost LP',
      display: 'lp:4:INJypt-INJ',
      symbol: 'INJ-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for INJ / USDC pool',
      denomUnits: [{
          denom: 'lp:5:inj-uusdc',
          exponent: 0
        }, {
          denom: 'lp:5:INJ-usdc',
          exponent: 18
        }],
      base: 'lp:5:inj-uusdc',
      name: 'INJ / USDC LP',
      display: 'lp:5:INJ-usdc',
      symbol: 'INJ-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO Yield pool',
      denomUnits: [{
          denom: 'lp:8:uosmo',
          exponent: 0
        }, {
          denom: 'lp:8:osmo',
          exponent: 6
        }],
      base: 'lp:8:uosmo',
      name: 'OSMO Yield LP',
      display: 'lp:8:osmo',
      symbol: 'OSMO-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO Boost pool',
      denomUnits: [{
          denom: 'lp:10:uosmoypt-uosmo',
          exponent: 0
        }, {
          denom: 'lp:10:osmoypt-osmo',
          exponent: 6
        }],
      base: 'lp:10:uosmoypt-uosmo',
      name: 'OSMO Boost LP',
      display: 'lp:10:osmoypt-osmo',
      symbol: 'OSMO-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for OSMO / USDC pool',
      denomUnits: [{
          denom: 'lp:11:uosmo-uusdc',
          exponent: 0
        }, {
          denom: 'lp:11:osmo-usdc',
          exponent: 6
        }],
      base: 'lp:11:uosmo-uusdc',
      name: 'OSMO / USDC LP',
      display: 'lp:11:osmo-usdc',
      symbol: 'OSMO-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA Yield pool',
      denomUnits: [{
          denom: 'lp:9:uluna',
          exponent: 0
        }, {
          denom: 'lp:9:luna',
          exponent: 6
        }],
      base: 'lp:9:uluna',
      name: 'LUNA Yield LP',
      display: 'lp:9:luna',
      symbol: 'LUNA-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA Boost pool',
      denomUnits: [{
          denom: 'lp:12:ulunaypt-uluna',
          exponent: 0
        }, {
          denom: 'lp:12:lunaypt-luna',
          exponent: 6
        }],
      base: 'lp:12:ulunaypt-uluna',
      name: 'LUNA Boost LP',
      display: 'lp:12:lunaypt-luna',
      symbol: 'LUNA-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for LUNA / USDC pool',
      denomUnits: [{
          denom: 'lp:13:uluna-uusdc',
          exponent: 0
        }, {
          denom: 'lp:13:luna-usdc',
          exponent: 6
        }],
      base: 'lp:13:uluna-uusdc',
      name: 'LUNA / USDC LP',
      display: 'lp:13:luna-usdc',
      symbol: 'LUNA-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU Yield pool',
      denomUnits: [{
          denom: 'lp:14:uauuu',
          exponent: 0
        }, {
          denom: 'lp:14:auuu',
          exponent: 6
        }],
      base: 'lp:14:uauuu',
      name: 'AUUU Yield LP',
      display: 'lp:14:auuu',
      symbol: 'AUUU-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU Boost pool',
      denomUnits: [{
          denom: 'lp:17:uauuuypt-uauuu',
          exponent: 0
        }, {
          denom: 'lp:17:auuuypt-auuu',
          exponent: 6
        }],
      base: 'lp:17:uauuuypt-uauuu',
      name: 'AUUU Boost LP',
      display: 'lp:17:auuuypt-auuu',
      symbol: 'AUUU-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for AUUU / USDC pool',
      denomUnits: [{
          denom: 'lp:7:uauuu-uusdc',
          exponent: 0
        }, {
          denom: 'lp:7:auuu-usdc',
          exponent: 6
        }],
      base: 'lp:7:uauuu-uusdc',
      name: 'AUUU / USDC LP',
      display: 'lp:7:auuu-usdc',
      symbol: 'AUUU-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Yield pool',
      denomUnits: [{
          denom: 'lp:15:stadydx',
          exponent: 0
        }, {
          denom: 'lp:15:stdydx',
          exponent: 18
        }],
      base: 'lp:15:stadydx',
      name: 'stDYDX Yield LP',
      display: 'lp:15:stdydx',
      symbol: 'stDYDX-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stDYDX Boost pool',
      denomUnits: [{
          denom: 'lp:18:stadydxypt-adydx',
          exponent: 0
        }, {
          denom: 'lp:18:stdydxypt-dydx',
          exponent: 18
        }],
      base: 'lp:18:stadydxypt-adydx',
      name: 'stDYDX Boost LP',
      display: 'lp:18:stdydxypt-dydx',
      symbol: 'stDYDX-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for DYDX / USDC pool',
      denomUnits: [{
          denom: 'lp:19:adydx-uusdc',
          exponent: 0
        }, {
          denom: 'lp:19:dydx-usdc',
          exponent: 18
        }],
      base: 'lp:19:adydx-uusdc',
      name: 'DYDX / USDC LP',
      display: 'lp:19:dydx-usdc',
      symbol: 'DYDX-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stTIA Yield pool',
      denomUnits: [{
          denom: 'lp:16:stutia',
          exponent: 0
        }, {
          denom: 'lp:16:sttia',
          exponent: 6
        }],
      base: 'lp:16:stutia',
      name: 'stTIA Yield LP',
      display: 'lp:16:sttia',
      symbol: 'stTIA-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for stTIA Boost pool',
      denomUnits: [{
          denom: 'lp:20:stutiaypt-utia',
          exponent: 0
        }, {
          denom: 'lp:20:sttiaypt-tia',
          exponent: 6
        }],
      base: 'lp:20:stutiaypt-utia',
      name: 'stTIA Boost LP',
      display: 'lp:20:sttiaypt-tia',
      symbol: 'stTIA-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA Yield pool',
      denomUnits: [{
          denom: 'lp:24:utia',
          exponent: 0
        }, {
          denom: 'lp:24:tia',
          exponent: 6
        }],
      base: 'lp:24:utia',
      name: 'TIA Yield LP',
      display: 'lp:24:tia',
      symbol: 'TIA-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA Boost pool',
      denomUnits: [{
          denom: 'lp:25:utiaypt-utia',
          exponent: 0
        }, {
          denom: 'lp:25:tiaypt-tia',
          exponent: 6
        }],
      base: 'lp:25:utiaypt-utia',
      name: 'TIA Boost LP',
      display: 'lp:25:tiaypt-tia',
      symbol: 'TIA-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for TIA / USDC pool',
      denomUnits: [{
          denom: 'lp:21:utia-uusdc',
          exponent: 0
        }, {
          denom: 'lp:21:tia-usdc',
          exponent: 6
        }],
      base: 'lp:21:utia-uusdc',
      name: 'TIA / USDC LP',
      display: 'lp:21:tia-usdc',
      symbol: 'TIA-USDC-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for dATOM Yield pool',
      denomUnits: [{
          denom: 'lp:22:udatom',
          exponent: 0
        }, {
          denom: 'lp:22:datom',
          exponent: 6
        }],
      base: 'lp:22:udatom',
      name: 'dATOM Yield LP',
      display: 'lp:22:datom',
      symbol: 'dATOM-YIELD-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Pryzm\'s LP token for dATOM Boost pool',
      denomUnits: [{
          denom: 'lp:23:udatomypt-uatom',
          exponent: 0
        }, {
          denom: 'lp:23:datomypt-atom',
          exponent: 6
        }],
      base: 'lp:23:udatomypt-uatom',
      name: 'dATOM Boost LP',
      display: 'lp:23:datomypt-atom',
      symbol: 'dATOM-BOOST-LP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/lp.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The non-transferable receipt of PRYZM airdrop for StakeDrop participants',
      denomUnits: [{
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/ustakedrop',
          exponent: 0,
          aliases: ['ustakedrop']
        }, {
          denom: 'stakedrop',
          exponent: 6
        }],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/ustakedrop',
      name: 'StakeDrop',
      display: 'stakedrop',
      symbol: 'STAKEDROP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/stakedrop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/stakedrop.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/stakedrop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/stakedrop.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The non-transferable receipt of PRYZM Options airdrop',
      denomUnits: [{
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uopdrop',
          exponent: 0,
          aliases: ['uopdrop']
        }, {
          denom: 'opdrop',
          exponent: 6
        }],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uopdrop',
      name: 'OpDrop',
      display: 'opdrop',
      symbol: 'OPDROP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/opdrop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/opdrop.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/opdrop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/opdrop.svg'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The non-transferable receipt of PRYZM airdrop for Photons Campaign participants',
      denomUnits: [{
          denom: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uphotondrop',
          exponent: 0,
          aliases: ['uphotondrop']
        }, {
          denom: 'photondrop',
          exponent: 6
        }],
      base: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uphotondrop',
      name: 'PhotonDrop',
      display: 'photondrop',
      symbol: 'PHOTONDROP',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/photondrop.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/photondrop.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/photondrop.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pryzm/images/photondrop.svg'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;