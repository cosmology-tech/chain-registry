import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'archway',
  assets: [
    {
      description: 'The native token of Archway network',
      denomUnits: [
        {
          denom: 'aarch',
          exponent: 0
        },
        {
          denom: 'uarch',
          exponent: 12
        },
        {
          denom: 'arch',
          exponent: 18
        }
      ],
      base: 'aarch',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingeckoId: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      }
    },
    {
      description: 'ERIS liquid staked ARCH',
      typeAsset: 'cw20',
      address: 'archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      denomUnits: [{
          denom: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
          exponent: 0
        }, {
          denom: 'ampARCH',
          exponent: 6
        }],
      base: 'cw20:archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      name: 'ERIS Amplified ARCH',
      display: 'ampARCH',
      symbol: 'ampARCH',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png'
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denomUnits: [{
          denom: 'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/7CB33A66F90533ED1E168CB3251253C719CF4B04FF1290AFD795F14CA1D67278',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channelId: 'channel-1'
          },
          chain: {
            channelId: 'channel-1429',
            path: 'transfer/channel-1429/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'osmosis',
            baseDenom: 'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png'
      }
    },
    {
      description: 'The native token of Vidulum',
      denomUnits: [{
          denom: 'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
          exponent: 0,
          aliases: ['uvdl']
        }, {
          denom: 'vdl',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/1BCF1FCAFE3568E234787EDFDA12460BD8931B17FE6A729DCD60FAD845558DA1',
      name: 'Vidulum',
      display: 'vdl',
      symbol: 'VDL',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'vidulum',
            baseDenom: 'uvdl',
            channelId: 'channel-24'
          },
          chain: {
            channelId: 'channel-110',
            path: 'transfer/channel-110/uvdl'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'vidulum',
            baseDenom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/vidulum/images/vdl.svg'
        }]
    },
    {
      description: 'Astrovault AXV',
      typeAsset: 'cw20',
      address: 'archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      denomUnits: [{
          denom: 'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
          exponent: 0
        }, {
          denom: 'AXV',
          exponent: 6
        }],
      base: 'cw20:archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      name: 'Astrovault AXV',
      display: 'AXV',
      symbol: 'AXV',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg'
        }],
      coingeckoId: 'astrovault'
    }
  ]
};
export default info;