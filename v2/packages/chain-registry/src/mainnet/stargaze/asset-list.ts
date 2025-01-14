import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'stargaze',
  assets: [
    {
      description: 'Stargaze is a decentralized blockchain platform designed specifically for non-fungible tokens (NFTs), enabling creators to mint, trade, and interact with NFTs in a fully decentralized environment.',
      extendedDescription: 'Stargaze is an innovative platform in the Cosmos ecosystem focused on NFTs. It provides a decentralized space where creators can mint, trade, and manage their NFTs with ease. The platform\'s decentralized nature ensures that creators retain full control over their digital assets, enhancing security and ownership rights. Stargaze\'s user-friendly interface and robust infrastructure make it an ideal choice for artists and collectors looking to engage with NFTs in a decentralized manner.',
      denomUnits: [{
          denom: 'ustars',
          exponent: 0
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ustars',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingeckoId: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg',
          theme: {
            primaryColorHex: '#db2777'
          }
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native token of ohhNFT.',
      denomUnits: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
          exponent: 0
        }, {
          denom: 'strdst',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/dust',
      name: 'Stardust STRDST',
      display: 'strdst',
      symbol: 'STRDST',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/dust.svg',
          theme: {
            primaryColorHex: '#c9720c'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native meme token of stargaze.',
      denomUnits: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
          exponent: 0
        }, {
          denom: 'GAZE',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/mGAZE',
      name: 'Gaze GAZE',
      display: 'GAZE',
      symbol: 'GAZE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/gaze.svg',
          theme: {
            primaryColorHex: '#b3a584'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'ohhNFT LP token.',
      denomUnits: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
          exponent: 0
        }, {
          denom: 'BRNCH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uBRNCH',
      name: 'Branch',
      display: 'BRNCH',
      symbol: 'BRNCH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/brnch.svg',
          theme: {
            primaryColorHex: '#70372a'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Social token for the ohhVAULT.',
      denomUnits: [{
          denom: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
          exponent: 0
        }, {
          denom: 'OHH',
          exponent: 6
        }],
      base: 'factory/stars16da2uus9zrsy83h23ur42v3lglg5rmyrpqnju4/uOHH',
      name: 'ohhVAULT ohh',
      display: 'OHH',
      symbol: 'OHH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/ohh.svg',
          theme: {
            primaryColorHex: '#dcc0c2'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The native coin of Sneaky Productions.',
      denomUnits: [{
          denom: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
          exponent: 0
        }, {
          denom: 'sneaky',
          exponent: 6
        }],
      base: 'factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky',
      name: 'Sneaky Productions',
      display: 'sneaky',
      symbol: 'SNEAKY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/sneaky.svg',
          theme: {
            primaryColorHex: '#fbcaca'
          }
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'LAB - Everything is an Experiment',
      extendedDescription: 'LAB - Everything is an Experiment\n\nUse 10 $LAB tokens to mint 1 Mad Scientist NFT on Backbone Labs Osmosis Launchpad. You will then be able to trade your NFTs on the marketplace. You can also choose to hold onto your $LAB tokens as unrevealed NFTs and trade it.\n\n Fair Launch: The event was marked by the absence of whitelists (WLs), no bots and no lock, ensuring an equitable opportunity for all interested parties.\n\nPreparation for the Launch: Participants were given a 52.91-hour window to deposit $OSMO into a pool on Streamswap.\n\nThe Swap Process: After the initial deposit period, $OSMO was converted into $LAB tokens over an additional hour, allowing for a smooth transition and fair distribution.',
      denomUnits: [{
          denom: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
          exponent: 0
        }, {
          denom: 'LAB',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/93B1AE0AD5E88242745B245064A2A51DDA1319C18176A966D5F8F9E02ED5373E',
      name: 'LAB',
      display: 'LAB',
      symbol: 'LAB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/LAB.png',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo17fel472lgzs87ekt9dvk0zqyh5gl80sqp4sk4n/LAB'
          },
          theme: {
            primaryColorHex: '#bcdd76'
          }
        }]
    },
    {
      description: 'CDT - Membrane\'s solvency preserving stablecoin',
      denomUnits: [{
          denom: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
          exponent: 0
        }, {
          denom: 'CDT',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B0263C28B6F44651F4596413B41FDB749EA010BD1220816DAC0ABF9947C1E806',
      name: 'CDT',
      display: 'CDT',
      symbol: 'CDT',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/CDT.svg',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt'
          }
        }]
    },
    {
      description: 'MBRN - Membrane\'s network token',
      denomUnits: [{
          denom: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
          exponent: 0
        }, {
          denom: 'MBRN',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/E94BB144B818CB8061F43E202BEA1E9273B87D6326C8C6F4E6AE71C62FD37854',
      name: 'MBRN',
      display: 'MBRN',
      symbol: 'MBRN',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          }
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/MBRN.svg',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn'
          }
        }]
    },
    {
      description: 'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denomUnits: [{
          denom: 'ibc/C9C8D88917374F27F03CBCEAF4F1B85F45A62F9F2316CBAADAAC5FDB3675DD3F',
          exponent: 0,
          aliases: ['uastro']
        }, {
          denom: 'astro',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/C9C8D88917374F27F03CBCEAF4F1B85F45A62F9F2316CBAADAAC5FDB3675DD3F',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'neutron',
            baseDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
            channelId: 'channel-18'
          },
          chain: {
            channelId: 'channel-191',
            path: 'transfer/channel-191/factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg'
      },
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
        }]
    },
    {
      description: 'PLEB',
      denomUnits: [{
          denom: 'factory/stars1k7qsxdxh8calmt4txk75e6hdntefslegwddqnlwjjqgjkmcfqy0qa97sn8/pleb',
          exponent: 0
        }, {
          denom: 'PLEB',
          exponent: 6
        }],
      base: 'factory/stars1k7qsxdxh8calmt4txk75e6hdntefslegwddqnlwjjqgjkmcfqy0qa97sn8/pleb',
      name: 'PLEB',
      display: 'PLEB',
      symbol: 'PLEB',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/pleb.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/pleb.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'KINGSHIT',
      denomUnits: [{
          denom: 'factory/stars133a6mnkp9d3pkt48y699hy0tvq5xngpz7cwak0qr4suq0cj9zpfslvt0em/kingshit',
          exponent: 0
        }, {
          denom: 'KINGSHIT',
          exponent: 6
        }],
      base: 'factory/stars133a6mnkp9d3pkt48y699hy0tvq5xngpz7cwak0qr4suq0cj9zpfslvt0em/kingshit',
      name: 'KINGSHIT',
      display: 'KINGSHIT',
      symbol: 'KINGSHIT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/kingshit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/kingshit.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'BOTZ',
      denomUnits: [{
          denom: 'factory/stars132jrwxjps93usq3ejy7cq6qqc7j3gtx3mu8jhaj5nnk3p0ste2ssqsndvj/botz',
          exponent: 0
        }, {
          denom: 'BOTZ',
          exponent: 6
        }],
      base: 'factory/stars132jrwxjps93usq3ejy7cq6qqc7j3gtx3mu8jhaj5nnk3p0ste2ssqsndvj/botz',
      name: 'BOTZ',
      display: 'BOTZ',
      symbol: 'BOTZ',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/botz.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/botz.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'COCKS',
      denomUnits: [{
          denom: 'factory/stars14mfk0sd6rlajkvgpgrvfk9lfhjwmkrzvednekvcn32jzy3drjy5sfem9p7/cocks',
          exponent: 0
        }, {
          denom: 'COCKS',
          exponent: 6
        }],
      base: 'factory/stars14mfk0sd6rlajkvgpgrvfk9lfhjwmkrzvednekvcn32jzy3drjy5sfem9p7/cocks',
      name: 'COCKS',
      display: 'COCKS',
      symbol: 'COCKS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/cocks.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/cocks.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Representative factory token for Trump Kemistry',
      denomUnits: [{
          denom: 'ibc/4982C47384F003FCCB02490F92CE2F23DBEC9A7A0C1F440BDB12D24357E6703D',
          exponent: 0
        }, {
          denom: 'XTRUMP',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/4982C47384F003FCCB02490F92CE2F23DBEC9A7A0C1F440BDB12D24357E6703D',
      name: 'XTRUMP',
      display: 'XTRUMP',
      symbol: 'XTRUMP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1hg0zf0c9can4tvtulh5gmmxe4jpflre3yewxjl/XTRUMP'
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
      description: 'WOLFSHIT',
      denomUnits: [{
          denom: 'factory/stars167y92c2fe690l0lrqyk9tahpqvu97au0cmpayh3j9455r2f6f06s78emw4/wolfshit',
          exponent: 0
        }, {
          denom: 'WOLFSHIT',
          exponent: 6
        }],
      base: 'factory/stars167y92c2fe690l0lrqyk9tahpqvu97au0cmpayh3j9455r2f6f06s78emw4/wolfshit',
      name: 'WOLFSHIT',
      display: 'WOLFSHIT',
      symbol: 'WOLFSHIT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/wolfshit.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/wolfshit.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'Native token of the Underworld.',
      denomUnits: [{
          denom: 'factory/stars1t6fyr84hn6lyjdvk3e3c697cptfn5cwat2jxqyzuvuesaypznslshy6x9v/vlt',
          exponent: 0
        }, {
          denom: 'VLT',
          exponent: 6
        }],
      base: 'factory/stars1t6fyr84hn6lyjdvk3e3c697cptfn5cwat2jxqyzuvuesaypznslshy6x9v/vlt',
      name: 'VLT',
      display: 'VLT',
      symbol: 'VAULT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/vault.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/vault.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OLD Bonded GopLend STARS',
      extendedDescription: 'OLD | bglSTARS (Bonded GopLend STARS) is issued in exchange for STARS for the deposit period. These tokens are liquid and generate income in the amount of the set APR on the platform',
      denomUnits: [{
          denom: 'factory/stars1ur79p98rmpn456esgzjernaxy7v25mlwqsv8uhymzxahfw77427syk2h9j/bglSTARS',
          exponent: 0
        }, {
          denom: 'OLDbglSTARS',
          exponent: 6
        }],
      base: 'factory/stars1ur79p98rmpn456esgzjernaxy7v25mlwqsv8uhymzxahfw77427syk2h9j/bglSTARS',
      name: 'OLDbglSTARS',
      display: 'OLDbglSTARS',
      symbol: 'OLDbglSTARS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/bglSTARS.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/bglSTARS.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'OLD Bonded GopLend USDC',
      extendedDescription: 'OLD | bglUSDC (Bonded GopLend USDC) is issued in exchange for USDC for the deposit period. These tokens are liquid and generate income in the amount of the set APR on the platform',
      denomUnits: [{
          denom: 'factory/stars1ur79p98rmpn456esgzjernaxy7v25mlwqsv8uhymzxahfw77427syk2h9j/bglUSDC',
          exponent: 0
        }, {
          denom: 'OLDbglUSDC',
          exponent: 6
        }],
      base: 'factory/stars1ur79p98rmpn456esgzjernaxy7v25mlwqsv8uhymzxahfw77427syk2h9j/bglUSDC',
      name: 'OLDbglUSDC',
      display: 'OLDbglUSDC',
      symbol: 'OLDbglUSDC',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/bglUSDC.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/bglUSDC.png'
        }],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'The Cosmos Network\'s premier self-hatred memecoin.',
      extendedDescription: 'Shitmos is a fair launched token deployed via the start.cooking liquidity bootstrapping protocol (LBP) on the Osmosis blockchain. It is powered by the Shitmos Economic Zone (SEZ), and it has been designed with the goal of uniting the Cosmos Network and interchain-at-large ecosystems by making crypto fun. The SEZ is a federation of nft collections on Stargaze that supports Shitmos by providing at least 2% of royalties towards open market purchases of Shitmos.',
      denomUnits: [{
          denom: 'ibc/8577E98BDDD2758FD5647A53563DAAC89921326F964EBF899B945ED05A66CA5F',
          exponent: 0
        }, {
          denom: 'SHITMOS',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8577E98BDDD2758FD5647A53563DAAC89921326F964EBF899B945ED05A66CA5F',
      name: 'Shitmos',
      display: 'SHITMOS',
      symbol: 'SHITMOS',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.png',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1q77cw0mmlluxu0wr29fcdd0tdnh78gzhkvhe4n6ulal9qvrtu43qtd0nh8/shitmos'
          },
          theme: {
            primaryColorHex: '#639BFF',
            circle: true
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/shitmos.svg'
        }]
    },
    {
      description: 'GATA Yield DAO Governance Token',
      denomUnits: [{
          denom: 'ibc/2A56F95E2B74AB769816403D384E2199C7BC510BFD2F8352FAC6DF0294B83EBA',
          exponent: 0
        }, {
          denom: 'ygata',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/2A56F95E2B74AB769816403D384E2199C7BC510BFD2F8352FAC6DF0294B83EBA',
      name: 'Yield GATA',
      display: 'ygata',
      symbol: 'YGATA',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'omniflixhub',
            baseDenom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata',
            channelId: 'channel-49'
          },
          chain: {
            channelId: 'channel-398',
            path: 'transfer/channel-398/factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'omniflixhub',
            baseDenom: 'factory/omniflix1fwphj5p6qd8gtkehkzfgac38eur4uqzgz97uwvf6hsc0vjl004gqfj0xnv/ygata'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/omniflixhub/images/ygata.svg',
          theme: {
            primaryColorHex: '#7b5aff'
          }
        }],
      socials: {
        website: 'https://gatahub.zone',
        twitter: 'https://x.com/GataHubZone'
      }
    },
    {
      description: 'The token of Crowdpunk DAO',
      denomUnits: [{
          denom: 'ibc/D29FF5FFE7B9A5C6CE595FF963F7C93F2B8603586645C39B13E1D336847863C3',
          exponent: 0,
          aliases: ['erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F']
        }, {
          denom: 'crowdp',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/D29FF5FFE7B9A5C6CE595FF963F7C93F2B8603586645C39B13E1D336847863C3',
      name: 'Crowdpunk DAO',
      display: 'crowdp',
      symbol: 'CROWDP',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'evmos',
            baseDenom: 'erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F',
            channelId: 'channel-13'
          },
          chain: {
            channelId: 'channel-46',
            path: 'transfer/channel-46/erc20/0xfbF4318d24a93753F11d365A6dcF8b830e98Ab0F'
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
    },
    {
      description: 'CULT - Less Brainwashing, More Utility',
      extendedDescription: 'CULT - Less Brainwashing, More Utility\n\n$CULT is more than a token; it\'s your key to ascend within the Order of Architects. Each token empowers you to mint and upgrade Architect NFTs, navigating through rites that elevate their mystical powers. Engage directly in our unique Streamswap process, beginning with a USDC deposit, transitioning smoothly into $CULT.\n\nFair Launch: Our token launch excludes whitelists and bots, ensuring a transparent and equitable distribution for all. Streamswap Mechanics: Deposit $USDC during the 72-hour Bootstrapping Phase, followed by a 1-hour Streaming Phase to convert into $CULT, ensuring a smooth and fair token distribution.',
      denomUnits: [{
          denom: 'ibc/1CD4EED1BD74D41C165B9200AAF7A13C92DDB381DB7067EA32EEF8CC1370F764',
          exponent: 0,
          aliases: ['ucult']
        }, {
          denom: 'CULT',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1CD4EED1BD74D41C165B9200AAF7A13C92DDB381DB7067EA32EEF8CC1370F764',
      name: 'CULT',
      display: 'CULT',
      symbol: 'CULT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cult.png'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm/cult',
            channelId: 'channel-75'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/factory/osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm/cult'
          }
        }],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/cult.png',
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1qdvwftqd8ml6t9w6dmj97m03ck5ghqqmd8y7cm/cult'
          }
        }]
    }
  ]
};
export default info;