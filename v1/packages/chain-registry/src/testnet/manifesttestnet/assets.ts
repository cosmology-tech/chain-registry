import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'manifesttestnet',
  assets: [
    {
      description: 'Manifest testnet native token',
      denom_units: [{
          denom: 'umfx',
          exponent: 0
        }, {
          denom: 'mfx',
          exponent: 6
        }],
      base: 'umfx',
      name: 'Manifest Testnet Token',
      display: 'mfx',
      symbol: 'MFX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Proof of Authority token for the Manifest testnet',
      denom_units: [{
          denom: 'upoa',
          exponent: 0
        }, {
          denom: 'poa',
          exponent: 6
        }],
      base: 'upoa',
      name: 'Manifest Testnet Token',
      display: 'poa',
      symbol: 'POA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifest/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Osmosis token on Manifest Ledger Testnet',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'ics20',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo',
            channel_id: 'channel-10016'
          },
          chain: {
            channel_id: 'channel-0',
            path: 'transfer/channel-0/uosmo'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'osmosistestnet',
            base_denom: 'uosmo'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      }
    },
    {
      description: 'asdasdasd',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa',
          exponent: 0
        }, {
          denom: 'aaa',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uaaa',
      name: 'AAA Token',
      display: 'aaa',
      symbol: 'AAA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Arebus Gas Token',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus',
          exponent: 0
        }, {
          denom: 'abus',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uabus',
      name: 'ABUS Token',
      display: 'abus',
      symbol: 'ABUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'TheBitchToken',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch',
          exponent: 0
        }, {
          denom: 'bitch',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ubitch',
      name: 'BITCH Token',
      display: 'bitch',
      symbol: 'BITCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Blergestan National',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg',
          exponent: 0
        }, {
          denom: 'blerg',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ublerg',
      name: 'BLERG Token',
      display: 'blerg',
      symbol: 'BLERG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'CATS',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats',
          exponent: 0
        }, {
          denom: 'cats',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucats',
      name: 'CATS Token',
      display: 'cats',
      symbol: 'CATS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'CoralCreditRatings',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral',
          exponent: 0
        }, {
          denom: 'coral',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucoral',
      name: 'CORAL Token',
      display: 'coral',
      symbol: 'CORAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Cures Collective',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures',
          exponent: 0
        }, {
          denom: 'cures',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ucures',
      name: 'CURES Token',
      display: 'cures',
      symbol: 'CURES',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'DBL Treasury',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt',
          exponent: 0
        }, {
          denom: 'dblt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/udblt',
      name: 'DBLT Token',
      display: 'dblt',
      symbol: 'DBLT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'FocalDAO',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal',
          exponent: 0
        }, {
          denom: 'focal',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ufocal',
      name: 'FOCAL Token',
      display: 'focal',
      symbol: 'FOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'DeFramix Utility',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe',
          exponent: 0
        }, {
          denom: 'frame',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uframe',
      name: 'FRAME Token',
      display: 'frame',
      symbol: 'FRAME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'GCA Trust',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugcatt',
          exponent: 0
        }, {
          denom: 'gcatt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugcatt',
      name: 'GCATT Token',
      display: 'gcatt',
      symbol: 'GCATT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'The Greys',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey',
          exponent: 0
        }, {
          denom: 'grey',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugrey',
      name: 'GREY Token',
      display: 'grey',
      symbol: 'GREY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'GigaWatt Grid Logis',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt',
          exponent: 0
        }, {
          denom: 'gwatt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ugwatt',
      name: 'GWATT Token',
      display: 'gwatt',
      symbol: 'GWATT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Hive Mind Token',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive',
          exponent: 0
        }, {
          denom: 'hive',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uhive',
      name: 'HIVE Token',
      display: 'hive',
      symbol: 'HIVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'IndisputableLabsTRRX',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis',
          exponent: 0
        }, {
          denom: 'indis',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uindis',
      name: 'INDIS Token',
      display: 'indis',
      symbol: 'INDIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Lend x Protocol',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx',
          exponent: 0
        }, {
          denom: 'lendx',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/ulendx',
      name: 'LENDX Token',
      display: 'lendx',
      symbol: 'LENDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'MegaBitch',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega',
          exponent: 0
        }, {
          denom: 'mega',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/umega',
      name: 'MEGA Token',
      display: 'mega',
      symbol: 'MEGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'dPostgreSQL',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql',
          exponent: 0
        }, {
          denom: 'pgsql',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upgsql',
      name: 'PGSQL Token',
      display: 'pgsql',
      symbol: 'PGSQL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 00',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo',
          exponent: 0
        }, {
          denom: 'pwroo',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroo',
      name: 'PWROO Token',
      display: 'pwroo',
      symbol: 'PWROO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 10',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz',
          exponent: 0
        }, {
          denom: 'pwroz',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwroz',
      name: 'PWROZ Token',
      display: 'pwroz',
      symbol: 'PWROZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 08',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze',
          exponent: 0
        }, {
          denom: 'pwrze',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrze',
      name: 'PWRZE Token',
      display: 'pwrze',
      symbol: 'PWRZE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 03',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf',
          exponent: 0
        }, {
          denom: 'pwrzf',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzf',
      name: 'PWRZF Token',
      display: 'pwrzf',
      symbol: 'PWRZF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 09',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn',
          exponent: 0
        }, {
          denom: 'pwrzn',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzn',
      name: 'PWRZN Token',
      display: 'pwrzn',
      symbol: 'PWRZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 01',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzo',
          exponent: 0
        }, {
          denom: 'pwrzo',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzo',
      name: 'PWRZO Token',
      display: 'pwrzo',
      symbol: 'PWRZO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 03',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr',
          exponent: 0
        }, {
          denom: 'pwrzr',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzr',
      name: 'PWRZR Token',
      display: 'pwrzr',
      symbol: 'PWRZR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 07',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs',
          exponent: 0
        }, {
          denom: 'pwrzs',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzs',
      name: 'PWRZS Token',
      display: 'pwrzs',
      symbol: 'PWRZS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 02',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt',
          exponent: 0
        }, {
          denom: 'pwrzt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzt',
      name: 'PWRZT Token',
      display: 'pwrzt',
      symbol: 'PWRZT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 05',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv',
          exponent: 0
        }, {
          denom: 'pwrzv',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzv',
      name: 'PWRZV Token',
      display: 'pwrzv',
      symbol: 'PWRZV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 06',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx',
          exponent: 0
        }, {
          denom: 'pwrzx',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzx',
      name: 'PWRZX Token',
      display: 'pwrzx',
      symbol: 'PWRZX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Power Token 00',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz',
          exponent: 0
        }, {
          denom: 'pwrzz',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/upwrzz',
      name: 'PWRZZ Token',
      display: 'pwrzz',
      symbol: 'PWRZZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'HWE Solar Output A',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola',
          exponent: 0
        }, {
          denom: 'sola',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usola',
      name: 'SOLA Token',
      display: 'sola',
      symbol: 'SOLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'HWE Solar Output B',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb',
          exponent: 0
        }, {
          denom: 'solb',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolb',
      name: 'SOLB Token',
      display: 'solb',
      symbol: 'SOLB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'HWE Solar Output C',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolc',
          exponent: 0
        }, {
          denom: 'solc',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usolc',
      name: 'SOLC Token',
      display: 'solc',
      symbol: 'SOLC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'HWE Solar Output D',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usold',
          exponent: 0
        }, {
          denom: 'sold',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usold',
      name: 'SOLD Token',
      display: 'sold',
      symbol: 'SOLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'HWE Solar Output E',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole',
          exponent: 0
        }, {
          denom: 'sole',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usole',
      name: 'SOLE Token',
      display: 'sole',
      symbol: 'SOLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'SpaceData',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uspdt',
          exponent: 0
        }, {
          denom: 'spdt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uspdt',
      name: 'SPDT Token',
      display: 'spdt',
      symbol: 'SPDT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Sunfire Swaps',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usunsw',
          exponent: 0
        }, {
          denom: 'sunsw',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/usunsw',
      name: 'SUNSW Token',
      display: 'sunsw',
      symbol: 'SUNSW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'TF RWA AAA',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utfaaa',
          exponent: 0
        }, {
          denom: 'tfaaa',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utfaaa',
      name: 'TFAAA Token',
      display: 'tfaaa',
      symbol: 'TFAAA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'TracerRoundProtocol',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utrace',
          exponent: 0
        }, {
          denom: 'trace',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utrace',
      name: 'TRACE Token',
      display: 'trace',
      symbol: 'TRACE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Test',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utst',
          exponent: 0
        }, {
          denom: 'tst',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/utst',
      name: 'TST Token',
      display: 'tst',
      symbol: 'TST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Wind Energy Swaps',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwind',
          exponent: 0
        }, {
          denom: 'wind',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwind',
      name: 'WIND Token',
      display: 'wind',
      symbol: 'WIND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'When Moon Valley',
      denom_units: [{
          denom: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwmvt',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      base: 'factory/manifest1afk9zr2hn2jsac63h4hm60vl9z3e5u69gndzf7c99cqge3vzwjzsfmy9qj/uwmvt',
      name: 'WMVT Token',
      display: 'wmvt',
      symbol: 'WMVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'TIMMY Token',
      denom_units: [{
          denom: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy',
          exponent: 0
        }, {
          denom: 'timmy',
          exponent: 6
        }],
      base: 'factory/manifest1c799jddmlz7segvg6jrw6w2k6svwafganjdznard3tc74n7td7rqdqe6ks/utimmy',
      name: 'TIMMY Token',
      display: 'timmy',
      symbol: 'TIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'it is so small',
      denom_units: [{
          denom: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega',
          exponent: 0
        }, {
          denom: 'umega',
          exponent: 6
        }],
      base: 'factory/manifest1czvrq3ufn045q5k50tjl4qu8kcmagve9ghty3c/uumega',
      name: 'UMEGA Token',
      display: 'umega',
      symbol: 'UMEGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'asdasdasdasda',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uansonator',
          exponent: 0
        }, {
          denom: 'ansonator',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uansonator',
      name: 'ANSONATOR Token',
      display: 'ansonator',
      symbol: 'ANSONATOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'ASDASDASDASD',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd',
          exponent: 0
        }, {
          denom: 'asdasdasd',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uasdasdasd',
      name: 'ASDASDASD Token',
      display: 'asdasdasd',
      symbol: 'ASDASDASD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: '😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀😀',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute',
          exponent: 0
        }, {
          denom: 'cute',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ucute',
      name: 'CUTE Token',
      display: 'cute',
      symbol: 'CUTE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'asjhkajshdkjahsdkjhakjsdhkajhds',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin',
          exponent: 0
        }, {
          denom: 'dancingpenguin',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udancingpenguin',
      name: 'DANCINGPENGUIN Token',
      display: 'dancingpenguin',
      symbol: 'DANCINGPENGUIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Drip\'n\'drop',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy',
          exponent: 0
        }, {
          denom: 'drippy',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/udrippy',
      name: 'DRIPPY Token',
      display: 'drippy',
      symbol: 'DRIPPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'GHOSTBUSTER!',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer',
          exponent: 0
        }, {
          denom: 'gozer',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/ugozer',
      name: 'GOZER Token',
      display: 'gozer',
      symbol: 'GOZER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'A simple, simple token.',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple',
          exponent: 0
        }, {
          denom: 'simple',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/usimple',
      name: 'SIMPLE Token',
      display: 'simple',
      symbol: 'SIMPLE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'You can\'t see me.',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof',
          exponent: 0
        }, {
          denom: 'spoof',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uspoof',
      name: 'SPOOF Token',
      display: 'spoof',
      symbol: 'SPOOF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Morning tacos are the best.',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco',
          exponent: 0
        }, {
          denom: 'taco',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/utaco',
      name: 'TACO Token',
      display: 'taco',
      symbol: 'TACO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'I\'d like to move it move it!',
      denom_units: [{
          denom: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt',
          exponent: 0
        }, {
          denom: 'wmvt',
          exponent: 6
        }],
      base: 'factory/manifest1hj5fveer5cjtn4wd6wstzugjfdxzl0xp8ws9ct/uwmvt',
      name: 'WMVT Token',
      display: 'wmvt',
      symbol: 'WMVT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'A very fun token!!!',
      denom_units: [{
          denom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie',
          exponent: 0
        }, {
          denom: 'funzie',
          exponent: 6
        }],
      base: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/ufunzie',
      name: 'FUNZIE Token',
      display: 'funzie',
      symbol: 'FUNZIE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'GIN & JUICE!',
      denom_units: [{
          denom: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
          exponent: 0
        }, {
          denom: 'snoop',
          exponent: 6
        }],
      base: 'factory/manifest1rme50egv6kwxq5skm60s0n7hd6ynuf33p5g87e/usnoop',
      name: 'SNOOP Token',
      display: 'snoop',
      symbol: 'SNOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
        }],
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;