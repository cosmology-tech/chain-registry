import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'injective',
  assets: [
    {
      description: 'Injective is a decentralized exchange protocol that enables fast, secure, and fully decentralized trading of derivatives, futures, and spot markets.',
      extendedDescription: 'Injective Protocol is a cutting-edge decentralized exchange (DEX) platform facilitating fully decentralized trading of derivatives, futures, and spot markets. Built on the Cosmos SDK, Injective leverages layer-2 scaling solutions for high-speed transactions with low fees, ensuring an efficient trading experience. The platform\'s design eliminates intermediaries, giving users complete control over their assets and trades.\n\nThe Injective ecosystem is powered by its native token, INJ, used for governance, staking, and fee reduction. By staking INJ, users can participate in network governance, influencing key decisions and protocol upgrades. Injective\'s features include cross-chain trading, allowing seamless asset trading across different blockchains, and a decentralized order book for transparency and security. Injective transforms the DeFi space with a comprehensive, decentralized solution for trading various financial instruments.',
      denomUnits: [{
          denom: 'inj',
          exponent: 0
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'inj',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      coingeckoId: 'injective-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }],
      socials: {
        website: 'https://injective.com/',
        twitter: 'https://twitter.com/Injective_'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Tether USDt on Injective',
      denomUnits: [{
          denom: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDTkv',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-122'
          },
          chain: {
            channelId: 'channel-143',
            path: 'transfer/channel-143/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
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
      }
    },
    {
      description: 'Tether USDt from Ethereum via Peggy bridge.',
      denomUnits: [{
          denom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'sdk.coin',
      base: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7'
          },
          provider: 'Peggy'
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
      }
    },
    {
      description: 'ERIS liquid staked INJ',
      denomUnits: [{
          denom: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
          exponent: 0
        }, {
          denom: 'ampINJ',
          exponent: 6
        }],
      base: 'factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ',
      name: 'ERIS Amplified INJ',
      display: 'ampINJ',
      symbol: 'ampINJ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ampinj.png',
          theme: {
            primaryColorHex: '#5480cc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: '$AUTISM exists to celebrate autism as a superior biological tech stack for a changing world',
      denomUnits: [{
          denom: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
          exponent: 0
        }, {
          denom: 'autism',
          exponent: 6
        }],
      base: 'factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism',
      name: 'Autism',
      display: 'autism',
      symbol: 'AUTISM',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png'
      },
      coingeckoId: 'autism',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/autism.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BackBone Labs Liquid Staked Injective',
      denomUnits: [{
          denom: 'factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ',
          exponent: 0
        }, {
          denom: 'bINJ',
          exponent: 18
        }],
      base: 'factory/inj1dxp690rd86xltejgfq2fa7f2nxtgmm5cer3hvu/bINJ',
      name: 'BackBone Labs Liquid Staked Injective',
      display: 'bINJ',
      symbol: 'bINJ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/binj.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/binj.png',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The first meme coin on Injective. It’s a dog, but he has nunchucks',
      extendedDescription: '$NINJA is the premier meme coin on Injective. There is no formal roadmap and no promises made, but NINJAs are builders and masters of surprise. For all intents and purposes, the coin is completely useless, until it\'s not. And the dog, he has nunchucks.',
      denomUnits: [{
          denom: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
          exponent: 0
        }, {
          denom: 'NINJA',
          exponent: 6
        }],
      base: 'factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja',
      name: 'Dog wif nunchucks',
      display: 'NINJA',
      symbol: 'NINJA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png'
      },
      coingeckoId: 'dog-wif-nuchucks',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninja.png',
          theme: {
            primaryColorHex: '#00468E',
            backgroundColorHex: '#00468E',
            circle: true
          }
        }],
      socials: {
        website: 'https://www.dogwifnunchucks.com/',
        twitter: 'https://x.com/dogwifnunchucks'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The $WGMI Token - We Gonna Make It. Are you ready?',
      denomUnits: [{
          denom: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
          exponent: 0
        }, {
          denom: 'WGMI',
          exponent: 6
        }],
      base: 'factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI',
      name: 'WGMI',
      display: 'WGMI',
      symbol: 'WGMI',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/wgmi.png',
          theme: {
            primaryColorHex: '#040404'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The first memecoin on osmosis.',
      denomUnits: [{
          denom: 'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/DD648F5D3CDA56D0D8D8820CF703D246B9FC4007725D8B38D23A21FF1A1477E3',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channelId: 'channel-122'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
          theme: {
            primaryColorHex: '#edd5ee'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'GLTO-ERC20 on injective',
      denomUnits: [{
          denom: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
          exponent: 0
        }, {
          denom: 'glto',
          exponent: 6
        }],
      base: 'peggy0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2',
      name: 'Gelotto',
      display: 'glto',
      symbol: 'GLTO',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          provider: 'Peggy'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xd73175f9eb15eee81745d367ae59309Ca2ceb5e2'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg',
          theme: {
            primaryColorHex: '#501cad'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/glto.svg'
      },
      socials: {
        website: 'https://gelotto.io/',
        twitter: 'https://twitter.com/Gelotto2'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Hava Coin is the lifeblood of the Cosmos & Injective networks, rewarding builders and welcoming supporters.',
      denomUnits: [{
          denom: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
          exponent: 0
        }, {
          denom: 'hava',
          exponent: 6
        }],
      base: 'factory/inj1h0ypsdtjfcjynqu3m75z2zwwz5mmrj8rtk2g52/uhava',
      name: 'Hava Coin',
      display: 'hava',
      symbol: 'HAVA',
      coingeckoId: 'hava-coin',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/hava.png',
          theme: {
            primaryColorHex: '#eacea5'
          }
        }],
      socials: {
        website: 'https://havacoin.xyz/',
        twitter: 'https://twitter.com/Hava_Coin'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It\'s so bad, your wallet\'s throwing a tantrum for it.',
      denomUnits: [{
          denom: 'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8',
          exponent: 0
        }, {
          denom: 'BADKID',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/A0C5AD197FECAF6636F589071338DC7ECD6B0809CD3A5AB131EAAA5395E7E5E8',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            channelId: 'channel-122'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
          theme: {
            primaryColorHex: '#57443f'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png'
      }
    },
    {
      description: 'The second meme coin on Injective.',
      denomUnits: [{
          denom: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
          exponent: 0
        }, {
          denom: 'NINPO',
          exponent: 6
        }],
      base: 'inj1sudjgsyhufqu95yp7rqad3g78ws8g6htf32h88',
      name: 'Ninpo',
      display: 'NINPO',
      symbol: 'NINPO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninpo.png',
          theme: {
            primaryColorHex: '#31292a'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'JUDO is a very futuristic meme token.',
      denomUnits: [{
          denom: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
          exponent: 0
        }, {
          denom: 'JUDO',
          exponent: 6
        }],
      base: 'inj16ukv8g2jcmml7gykxn5ws8ykhxjkugl4zhft5h',
      name: 'Judo',
      display: 'JUDO',
      symbol: 'JUDO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/judo.png',
          theme: {
            primaryColorHex: '#18120f'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BEAST-ERC20 on injective',
      denomUnits: [{
          denom: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
          exponent: 0
        }, {
          denom: 'beast',
          exponent: 6
        }],
      base: 'peggy0xA4426666addBE8c4985377d36683D17FB40c31Be',
      name: 'Gelotto BEAST',
      display: 'beast',
      symbol: 'BEAST',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          provider: 'Peggy'
        }],
      images: [{
          imageSync: {
            chainName: 'ethereum',
            baseDenom: '0xA4426666addBE8c4985377d36683D17FB40c31Be'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png',
          theme: {
            primaryColorHex: '#21172b'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/beast.png'
      },
      socials: {
        website: 'https://gelotto.io/',
        twitter: 'https://twitter.com/Gelotto2'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/063F4461F7317CFF10F50AB044E44932D22AAD84FA7107082744946E6DB7B7A8',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-60'
          },
          chain: {
            channelId: 'channel-177',
            path: 'transfer/channel-177/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
          theme: {
            primaryColorHex: '#4056e9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      }
    },
    {
      description: 'A receipt token for lent INJ issued by the Neptune Protocol.',
      denomUnits: [{
          denom: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
          exponent: 0
        }, {
          denom: 'nINJ',
          exponent: 18
        }],
      base: 'inj1rmzufd7h09sqfrre5dtvu5d09ta7c0t4jzkr2f',
      name: 'Neptune Receipt INJ',
      display: 'nINJ',
      symbol: 'nINJ',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ninj.png',
          theme: {
            primaryColorHex: '#293a6f'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A receipt token for lent ATOM issued by the Neptune Protocol.',
      denomUnits: [{
          denom: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
          exponent: 0
        }, {
          denom: 'nATOM',
          exponent: 6
        }],
      base: 'inj16jf4qkcarp3lan4wl2qkrelf4kduvvujwg0780',
      name: 'Neptune Receipt ATOM',
      display: 'nATOM',
      symbol: 'nATOM',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/natom.png',
          theme: {
            primaryColorHex: '#272f4b'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A receipt token for lent WETH issued by the Neptune Protocol.',
      denomUnits: [{
          denom: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
          exponent: 0
        }, {
          denom: 'nWETH',
          exponent: 18
        }],
      base: 'inj1kehk5nvreklhylx22p3x0yjydfsz9fv3fvg5xt',
      name: 'Neptune Receipt WETH',
      display: 'nWETH',
      symbol: 'nWETH',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nweth.png',
          theme: {
            primaryColorHex: '#2a303f'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A receipt token for lent USDT issued by the Neptune Protocol.',
      denomUnits: [{
          denom: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
          exponent: 0
        }, {
          denom: 'nUSDT',
          exponent: 6
        }],
      base: 'inj1cy9hes20vww2yr6crvs75gxy5hpycya2hmjg9s',
      name: 'Neptune Receipt USDT',
      display: 'nUSDT',
      symbol: 'nUSDT',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/nusdt.png',
          theme: {
            primaryColorHex: '#54ac94'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A receipt token for lent TIA issued by the Neptune Protocol.',
      denomUnits: [{
          denom: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
          exponent: 0
        }, {
          denom: 'nTIA',
          exponent: 6
        }],
      base: 'inj1fzquxxxam59z6fzewy2hvvreeh3m04x83zg4vv',
      name: 'Neptune Receipt TIA',
      display: 'nTIA',
      symbol: 'nTIA',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/ntia.png',
          theme: {
            primaryColorHex: '#7931f9'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Ninja Blaze Token',
      denomUnits: [{
          denom: 'ibc/1011E4D6D4800DA9B8F21D7C207C0B0C18E54E614A8576037F066B775210709D',
          exponent: 0,
          aliases: ['uNBZ']
        }, {
          denom: 'NBZ',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1011E4D6D4800DA9B8F21D7C207C0B0C18E54E614A8576037F066B775210709D',
      name: 'Ninja Blaze Token',
      display: 'NBZ',
      symbol: 'NBZ',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz',
            channelId: 'channel-60'
          },
          chain: {
            channelId: 'channel-177',
            path: 'transfer/channel-177/factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1a6ydq8urdj0gkvjw9e9e5y9r5ce2qegm9m4xufpt96kcm60kmuass0mqq4/nbz'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/NBZ.png',
          theme: {
            primaryColorHex: '#9890f9'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/NBZ.png'
      }
    },
    {
      description: 'Talis governance token',
      denomUnits: [{
          denom: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis',
          exponent: 0
        }, {
          denom: 'Talis',
          exponent: 6
        }],
      base: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/Talis',
      name: 'Talis Token',
      display: 'Talis',
      symbol: 'TALIS',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/talis.png',
          theme: {
            primaryColorHex: '#0c0f17'
          }
        }],
      socials: {
        website: 'https://talis.art/',
        twitter: 'https://twitter.com/ProtocolTalis'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Talis revenue sharing token',
      denomUnits: [{
          denom: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/xTalis',
          exponent: 0
        }, {
          denom: 'xTalis',
          exponent: 6
        }],
      base: 'factory/inj1maeyvxfamtn8lfyxpjca8kuvauuf2qeu6gtxm3/xTalis',
      name: 'xTalis Token',
      display: 'xTalis',
      symbol: 'XTALIS',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/xtalis.png',
          theme: {
            primaryColorHex: '#eaf0df'
          }
        }],
      socials: {
        website: 'https://talis.art/',
        twitter: 'https://twitter.com/ProtocolTalis'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/2CBC2EA121AE42563B08028466F37B600F2D7D4282342DE938283CC3FB2BC00E',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2CBC2EA121AE42563B08028466F37B600F2D7D4282342DE938283CC3FB2BC00E',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-31'
          },
          chain: {
            channelId: 'channel-148',
            path: 'transfer/channel-148/uusdc'
          }
        }
      ],
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
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }]
    },
    {
      description: 'The most degenerate NFT on Injective. Gravedigger collection for $bINJ. Giving power back to the community.',
      denomUnits: [{
          denom: 'factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN',
          exponent: 0
        }, {
          denom: 'SYN',
          exponent: 6
        }],
      base: 'factory/inj1a6xdezq7a94qwamec6n6cnup02nvewvjtz6h6e/SYN',
      name: 'Syndicate',
      display: 'SYN',
      symbol: 'SYN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.png',
          theme: {
            primaryColorHex: '#04a2fc'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'SYN burn Derivative; minted when SYN is burned via The Furnace',
      denomUnits: [{
          denom: 'factory/inj1ej2f3lmpxj4djsmmuxvnfuvplrut7zmwrq7zj8/syn.ash',
          exponent: 0
        }, {
          denom: 'ashSYN',
          exponent: 6
        }],
      base: 'factory/inj1ej2f3lmpxj4djsmmuxvnfuvplrut7zmwrq7zj8/syn.ash',
      name: 'ASH Syndicate',
      display: 'ashSYN',
      symbol: 'ashSYN',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.ash.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/syn.ash.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Cosmo is the best currency in the universe.',
      extendedDescription: 'We aim to build a decentralized community by leveraging cutting-edge technologies.',
      denomUnits: [{
          denom: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO',
          exponent: 0
        }, {
          denom: 'COSMO',
          exponent: 6
        }],
      base: 'factory/inj1je6n5sr4qtx2lhpldfxndntmgls9hf38ncmcez/COSMO',
      name: 'Cosmo',
      display: 'COSMO',
      symbol: 'COSMO',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cosmo.png',
          theme: {
            primaryColorHex: '#343169'
          }
        }],
      socials: {
        website: 'https://github.com/raphaellafar/Cosmo',
        twitter: 'https://x.com/CosmoClub84'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Representative factory token for Trump Kemistry',
      denomUnits: [{
          denom: 'ibc/5339B0D20986A7C20C2548ED9D6B8DE47BB64E03ABFD051B7792E713036EA20C',
          exponent: 0
        }, {
          denom: 'XTRUMP',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/5339B0D20986A7C20C2548ED9D6B8DE47BB64E03ABFD051B7792E713036EA20C',
      name: 'XTRUMP',
      display: 'XTRUMP',
      symbol: 'XTRUMP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
            channelId: 'channel-122'
          },
          chain: {
            channelId: 'channel-8',
            path: 'transfer/channel-8/factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png',
          theme: {
            primaryColorHex: '#b02b27'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/XTRUMP.png'
      }
    },
    {
      description: 'CW20 DRUGS meme coin',
      denomUnits: [{
          denom: 'cw20:inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
          exponent: 0
        }, {
          denom: 'DRUGS',
          exponent: 18
        }],
      typeAsset: 'cw20',
      address: 'inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
      base: 'cw20:inj19vy83ne9tzta2yqynj8yg7dq9ghca6yqn9hyej',
      name: 'cw20 DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      traces: [{
          type: 'legacy-mintage',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'factory/inj1sklcy2px26jj73ffs2f7fmxw77zsts66prrqxr/DRUGS'
          },
          provider: 'Drugs'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cw20drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/cw20drugs.png'
        }]
    },
    {
      description: 'Distributing happiness, is a serious business',
      denomUnits: [{
          denom: 'factory/inj1sklcy2px26jj73ffs2f7fmxw77zsts66prrqxr/DRUGS',
          exponent: 0
        }, {
          denom: 'DRUGS',
          exponent: 9
        }],
      base: 'factory/inj1sklcy2px26jj73ffs2f7fmxw77zsts66prrqxr/DRUGS',
      name: 'DRUGS',
      display: 'DRUGS',
      symbol: 'DRUGS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/drugs.png'
        }],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;