import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'okexchain',
  assets: [
    {
      description: 'The native token of AssetMantle',
      denom_units: [{
          denom: 'ibc/046F0F324A413BCE45651A98FBD82400B03F332F9ABCDC4755228573C86E24A4',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      base: 'ibc/046F0F324A413BCE45651A98FBD82400B03F332F9ABCDC4755228573C86E24A4',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      coingecko_id: 'assetmantle',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
          theme: {
            primary_color_hex: '#fbab30'
          }
        }],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3AE8CD270555B979B1FC42D4C17FAB96627217AF73791C29AAFB38AD7B977EF7',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3AE8CD270555B979B1FC42D4C17FAB96627217AF73791C29AAFB38AD7B977EF7',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/F9EC9E7E4C56DFB1CC3BD05B1C6652293DDEE2F1DF07B5AF00E55D51C583E8A8',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/F9EC9E7E4C56DFB1CC3BD05B1C6652293DDEE2F1DF07B5AF00E55D51C583E8A8',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/EC801D234CDE9C0459AD36D5EF85F12F7FC61F64CFC7BECB8213AC05153EE9C5',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/EC801D234CDE9C0459AD36D5EF85F12F7FC61F64CFC7BECB8213AC05153EE9C5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-212',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    },
    {
      description: 'The native token of AssetMantle',
      denom_units: [{
          denom: 'ibc/046F0F324A413BCE45651A98FBD82400B03F332F9ABCDC4755228573C86E24A4',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      base: 'ibc/046F0F324A413BCE45651A98FBD82400B03F332F9ABCDC4755228573C86E24A4',
      name: 'AssetMantle',
      display: 'mntl',
      symbol: 'MNTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
      },
      coingecko_id: 'assetmantle',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg',
          theme: {
            primary_color_hex: '#fbab30'
          }
        }],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-30'
          }
        }]
    },
    {
      description: 'Chihuahua is a community-driven blockchain project focused on creating a fun and engaging ecosystem with an emphasis on social interactions and community building.',
      denom_units: [{
          denom: 'ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/CC12CFFD769D5E0059D98E760DD34FAB477261785B99240C97F6AABC4F566CB5',
      name: 'Chihuahua',
      display: 'huahua',
      symbol: 'HUAHUA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
      },
      coingecko_id: 'chihuahua-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg',
          theme: {
            primary_color_hex: '#343434'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/3AE8CD270555B979B1FC42D4C17FAB96627217AF73791C29AAFB38AD7B977EF7',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/3AE8CD270555B979B1FC42D4C17FAB96627217AF73791C29AAFB38AD7B977EF7',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg',
          theme: {
            primary_color_hex: '#3c2832'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/F9EC9E7E4C56DFB1CC3BD05B1C6652293DDEE2F1DF07B5AF00E55D51C583E8A8',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/F9EC9E7E4C56DFB1CC3BD05B1C6652293DDEE2F1DF07B5AF00E55D51C583E8A8',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg',
          theme: {
            primary_color_hex: '#df969f'
          }
        }],
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-31',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-46'
          }
        }]
    },
    {
      description: 'The native token of JUNO Chain',
      denom_units: [{
          denom: 'ibc/EC801D234CDE9C0459AD36D5EF85F12F7FC61F64CFC7BECB8213AC05153EE9C5',
          exponent: 0,
          aliases: ['ujuno']
        }, {
          denom: 'juno',
          exponent: 6
        }],
      base: 'ibc/EC801D234CDE9C0459AD36D5EF85F12F7FC61F64CFC7BECB8213AC05153EE9C5',
      name: 'Juno',
      display: 'juno',
      symbol: 'JUNO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg'
      },
      coingecko_id: 'juno-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/juno/images/juno.svg',
          theme: {
            primary_color_hex: '#fa7b7b'
          }
        }],
      socials: {
        website: 'https://junonetwork.io/',
        twitter: 'https://twitter.com/JunoNetwork'
      },
      type_asset: 'sdk.coin',
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-212',
            base_denom: 'ujuno',
            chain_name: 'juno'
          },
          chain: {
            channel_id: 'channel-52'
          }
        }]
    }
  ]
};
export default assets;
    