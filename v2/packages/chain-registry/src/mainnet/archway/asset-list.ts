import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'archway',
  assets: [
    {
      description: 'Archway is a smart contract platform in the Cosmos ecosystem designed to reward developers by providing them with a share of transaction fees generated by their applications.',
      extendedDescription: 'Archway aims to incentivize developers by sharing a portion of the transaction fees generated by their decentralized applications (dApps) built on the platform. This innovative approach helps align the interests of developers with the network\'s growth and sustainability. Archway\'s native token, ARCH, is used for staking, governance, and distributing rewards to developers. By leveraging the Cosmos SDK, Archway ensures interoperability and scalability, allowing developers to build and deploy efficient and high-performance dApps.',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg'
      },
      coingeckoId: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/arch.svg',
          theme: {
            primaryColorHex: '#fc4c04'
          }
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      typeAsset: 'sdk.coin'
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
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/amparch.png',
          theme: {
            primaryColorHex: '#5c84cc'
          }
        }]
    },
    {
      description: 'The first memecoin on osmosis.',
      denomUnits: [{
          denom: 'ibc/D2BCFE34F35AF2968C8E1F84557D8A2058BB56F739EB553206EFC2AD8C6EDAF0',
          exponent: 0
        }, {
          denom: 'WOSMO',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/D2BCFE34F35AF2968C8E1F84557D8A2058BB56F739EB553206EFC2AD8C6EDAF0',
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
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg'
      },
      images: [{
          imageSync: {
            chainName: 'vidulum',
            baseDenom: 'uvdl'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/beezee/images/vdl.svg',
          theme: {
            primaryColorHex: '#3454bc'
          }
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/axv.svg',
          theme: {
            primaryColorHex: '#141434'
          }
        }],
      coingeckoId: 'astrovault'
    },
    {
      description: 'Wrapped ARCH',
      typeAsset: 'cw20',
      address: 'archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
      denomUnits: [{
          denom: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
          exponent: 0
        }, {
          denom: 'wARCH',
          exponent: 18
        }],
      base: 'cw20:archway1msc3fa4e2mh73y760qmjd3wfkzr98nl26f36xgt2xnhuw6ay3scs42zeue',
      name: 'Wrapped ARCH',
      display: 'wARCH',
      symbol: 'wARCH',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'aarch'
          },
          provider: 'Archway'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wArch.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }]
    },
    {
      description: 'Circle\'s USDC Noble on Archway ',
      denomUnits: [{
          denom: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
          exponent: 0,
          aliases: ['uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D',
      name: 'USDC (Noble)',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-12'
          },
          chain: {
            channelId: 'channel-29',
            path: 'transfer/channel-29/uusdc'
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
      description: 'Wrapped USDC (Noble)',
      typeAsset: 'cw20',
      address: 'archway1gaf9nw7n8v5lpjz9caxjpps006kxfcrzcuc8y5qp4clslhven2ns2g0ule',
      denomUnits: [{
          denom: 'cw20:archway1gaf9nw7n8v5lpjz9caxjpps006kxfcrzcuc8y5qp4clslhven2ns2g0ule',
          exponent: 0
        }, {
          denom: 'wUSDC',
          exponent: 6
        }],
      base: 'cw20:archway1gaf9nw7n8v5lpjz9caxjpps006kxfcrzcuc8y5qp4clslhven2ns2g0ule',
      name: 'Wrapped USDC',
      display: 'wUSDC',
      symbol: 'wUSDC',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'archway',
            baseDenom: 'ibc/43897B9739BD63E3A08A88191999C632E052724AB96BD4C74AE31375C991F48D'
          },
          provider: 'Archway'
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/wUsdc-noble.svg',
          theme: {
            primaryColorHex: '#000000'
          }
        }]
    }
  ]
};
export default info;