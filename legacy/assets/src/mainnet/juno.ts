import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  chain_name: 'juno',
  assets: [
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-35',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/537D8D8BF13799FBB38CACDF8090063E3C79CDCC6A70AE493F12A3F9E44DD074',
          exponent: 0,
          aliases: ['aarch']
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
      base: 'ibc/537D8D8BF13799FBB38CACDF8090063E3C79CDCC6A70AE493F12A3F9E44DD074',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-290'
          }
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [{
          denom: 'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      base: 'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-83'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [{
          denom: 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-207',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [{
          denom: 'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
          exponent: 0,
          aliases: ['udig']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      base: 'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      coingecko_id: 'dig-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'udig',
            chain_name: 'dig'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/FCCC96CC8B26932DF7D987D9FB3930CE044E23D8C712525E4EBFD2E5DCBA17CE',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/FCCC96CC8B26932DF7D987D9FB3930CE044E23D8C712525E4EBFD2E5DCBA17CE',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
          theme: {
            primary_color_hex: '#eaf143'
          }
        }],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-417'
          }
        }]
    },
    {
      description: 'Akash Token (AKT) is the Akash Network\'s native utility token, used as the primary means to govern, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
          exponent: 0,
          aliases: ['uakt']
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingecko_id: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-35',
            base_denom: 'uakt',
            chain_name: 'akash'
          },
          chain: {
            channel_id: 'channel-29'
          }
        }]
    },
    {
      description: 'The native token of Archway network',
      denom_units: [
        {
          denom: 'ibc/537D8D8BF13799FBB38CACDF8090063E3C79CDCC6A70AE493F12A3F9E44DD074',
          exponent: 0,
          aliases: ['aarch']
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
      base: 'ibc/537D8D8BF13799FBB38CACDF8090063E3C79CDCC6A70AE493F12A3F9E44DD074',
      name: 'Archway',
      display: 'arch',
      symbol: 'ARCH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
      },
      coingecko_id: 'archway',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/archway/images/archway.svg'
        }],
      socials: {
        website: 'https://archway.io/',
        twitter: 'https://twitter.com/archwayHQ'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'aarch',
            chain_name: 'archway'
          },
          chain: {
            channel_id: 'channel-290'
          }
        }]
    },
    {
      description: 'The native token of Asset Mantle',
      denom_units: [{
          denom: 'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
          exponent: 0,
          aliases: ['umntl']
        }, {
          denom: 'mntl',
          exponent: 6
        }],
      base: 'ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/assetmantle/images/mntl.svg'
        }],
      socials: {
        website: 'https://www.assetmantle.one/',
        twitter: 'https://twitter.com/AssetMantle'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'umntl',
            chain_name: 'assetmantle'
          },
          chain: {
            channel_id: 'channel-83'
          }
        }]
    },
    {
      description: 'The native token of Axelar',
      denom_units: [{
          denom: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
          exponent: 0,
          aliases: ['uaxl']
        }, {
          denom: 'axl',
          exponent: 6
        }],
      base: 'ibc/EBE900AED8FF6BB2E186B17B066138F647CDD9647EF4FBE2DE6C8D4013A2C990',
      name: 'Axelar',
      display: 'axl',
      symbol: 'AXL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
      },
      coingecko_id: 'axelar',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/axl.svg'
        }],
      socials: {
        website: 'https://axelar.network/',
        twitter: 'https://twitter.com/axelarnetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-4',
            base_denom: 'uaxl',
            chain_name: 'axelar'
          },
          chain: {
            channel_id: 'channel-71'
          }
        }]
    },
    {
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
          exponent: 0,
          aliases: ['ubcna']
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg'
        }],
      socials: {
        website: 'http://www.bitcanna.io/',
        twitter: 'https://twitter.com/BitCannaGlobal'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-10',
            base_denom: 'ubcna',
            chain_name: 'bitcanna'
          },
          chain: {
            channel_id: 'channel-50'
          }
        }]
    },
    {
      description: 'BitSong Native Token',
      denom_units: [{
          denom: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
          exponent: 0,
          aliases: ['ubtsg']
        }, {
          denom: 'btsg',
          exponent: 6
        }],
      base: 'ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B',
      name: 'BitSong',
      display: 'btsg',
      symbol: 'BTSG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
      },
      type_asset: 'sdk.coin',
      coingecko_id: 'bitsong',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/bitsong/images/btsg.svg'
        }],
      socials: {
        website: 'https://bitsong.io/',
        twitter: 'https://twitter.com/BitSongOfficial'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ubtsg',
            chain_name: 'bitsong'
          },
          chain: {
            channel_id: 'channel-17'
          }
        }]
    },
    {
      description: 'The native token of Chihuahua Chain',
      denom_units: [{
          denom: 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
          exponent: 0,
          aliases: ['uhuahua']
        }, {
          denom: 'huahua',
          exponent: 6
        }],
      base: 'ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241',
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
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/chihuahua/images/huahua.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-11',
            base_denom: 'uhuahua',
            chain_name: 'chihuahua'
          },
          chain: {
            channel_id: 'channel-28'
          }
        }]
    },
    {
      description: 'Native Token of Comdex Protocol',
      denom_units: [{
          denom: 'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
          exponent: 0,
          aliases: ['ucmdx']
        }, {
          denom: 'cmdx',
          exponent: 6
        }],
      base: 'ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0',
      name: 'Comdex',
      display: 'cmdx',
      symbol: 'CMDX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
      },
      coingecko_id: 'comdex',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ucmdx',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Governance Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
          exponent: 0,
          aliases: ['uharbor']
        }, {
          denom: 'harbor',
          exponent: 6
        }],
      base: 'ibc/2D8FA8721F44AE790D2A4D07775C16DD275B6FD83DA6FF29E76FED5BB6A92764',
      name: 'Harbor',
      display: 'harbor',
      symbol: 'HARBOR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
      },
      coingecko_id: 'harbor-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/harbor.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'uharbor',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'Stable Token of Harbor protocol on Comdex network',
      denom_units: [{
          denom: 'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
          exponent: 0,
          aliases: ['ucmst']
        }, {
          denom: 'cmst',
          exponent: 6
        }],
      base: 'ibc/DD057BB58DCBEE8F7C0CDF0B9AE4A2656B00E3C9745341180400B60833EEC9FD',
      name: 'CMST',
      display: 'cmst',
      symbol: 'CMST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
      },
      coingecko_id: 'composite',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmst.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'ucmst',
            chain_name: 'comdex'
          },
          chain: {
            channel_id: 'channel-36'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Cosmos Hub.',
      denom_units: [{
          denom: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      coingecko_id: 'cosmos',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      socials: {
        website: 'https://cosmos.network',
        twitter: 'https://twitter.com/cosmoshub'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-207',
            base_denom: 'uatom',
            chain_name: 'cosmoshub'
          },
          chain: {
            channel_id: 'channel-1'
          }
        }]
    },
    {
      description: 'The native token of Crescent',
      denom_units: [{
          denom: 'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
          exponent: 0,
          aliases: ['ucre']
        }, {
          denom: 'cre',
          exponent: 6
        }],
      base: 'ibc/B7EA961307B6915512F1204B78B6180851DD7474469EB21F16D30DF74DA22903',
      name: 'Crescent',
      display: 'cre',
      symbol: 'CRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
      },
      coingecko_id: 'crescent-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/cre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ucre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'The bonded token of Crescent',
      denom_units: [{
          denom: 'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
          exponent: 0,
          aliases: ['ubcre']
        }, {
          denom: 'bcre',
          exponent: 6
        }],
      base: 'ibc/B8EE79E4CABC454512974F71D20725BCEEDA42FB2251729EE30E528132152508',
      name: 'Bonded Crescent',
      display: 'bcre',
      symbol: 'bCRE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
      },
      coingecko_id: 'liquid-staking-crescent',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/crescent/images/bcre.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ubcre',
            chain_name: 'crescent'
          },
          chain: {
            channel_id: 'channel-81'
          }
        }]
    },
    {
      description: 'Native token of Dig Chain',
      denom_units: [{
          denom: 'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
          exponent: 0,
          aliases: ['udig']
        }, {
          denom: 'dig',
          exponent: 6
        }],
      base: 'ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A',
      name: 'Dig Chain',
      display: 'dig',
      symbol: 'DIG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
      },
      coingecko_id: 'dig-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dig/images/dig.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'udig',
            chain_name: 'dig'
          },
          chain: {
            channel_id: 'channel-37'
          }
        }]
    },
    {
      description: 'e-Money NGM staking token. In addition to earning staking rewards the token is bought back and burned based on e-Money stablecoin inflation.',
      denom_units: [{
          denom: 'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
          exponent: 0,
          aliases: ['ungm']
        }, {
          denom: 'ngm',
          exponent: 6
        }],
      base: 'ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196',
      name: 'e-Money',
      display: 'ngm',
      symbol: 'NGM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
      },
      coingecko_id: 'e-money',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/ngm.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'ungm',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money EUR stablecoin. Audited and backed by fiat EUR deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
          exponent: 0,
          aliases: ['eeur']
        }, {
          denom: 'eur',
          exponent: 6
        }],
      base: 'ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C',
      name: 'e-Money EUR',
      display: 'eur',
      symbol: 'EEUR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
      },
      coingecko_id: 'e-money-eur',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/eeur.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'eeur',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money CHF stablecoin. Audited and backed by fiat CHF deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
          exponent: 0,
          aliases: ['echf']
        }, {
          denom: 'chf',
          exponent: 6
        }],
      base: 'ibc/B70EF98FDC157B72A6C9165C61156B66D5E47B3C0F99C6B22D3A2AF692C06C90',
      name: 'e-Money CHF',
      display: 'chf',
      symbol: 'ECHF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/echf.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'echf',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money NOK stablecoin. Audited and backed by fiat NOK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
          exponent: 0,
          aliases: ['enok']
        }, {
          denom: 'nok',
          exponent: 6
        }],
      base: 'ibc/9BE96C01CFAF0AF7AF505AEF9E70C6F3DA04C79DAD4480722B1F537D6B6E04A5',
      name: 'e-Money NOK',
      display: 'nok',
      symbol: 'ENOK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/enok.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'enok',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money DKK stablecoin. Audited and backed by fiat DKK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
          exponent: 0,
          aliases: ['edkk']
        }, {
          denom: 'dkk',
          exponent: 6
        }],
      base: 'ibc/FD7935608ED5FF20F07FD029342E49B1EBD7265FCD4CC5BFC2AE17BF845B336D',
      name: 'e-Money DKK',
      display: 'dkk',
      symbol: 'EDKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/edkk.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'edkk',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'e-Money SEK stablecoin. Audited and backed by fiat SEK deposits and government bonds.',
      denom_units: [{
          denom: 'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
          exponent: 0,
          aliases: ['esek']
        }, {
          denom: 'sek',
          exponent: 6
        }],
      base: 'ibc/A62F3F3A9D4C91BA3853659411944619A456361CE78EAFC8E6F4C49E52561F08',
      name: 'e-Money SEK',
      display: 'sek',
      symbol: 'ESEK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
      },
      coingecko_id: '',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/emoney/images/esek.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-15',
            base_denom: 'esek',
            chain_name: 'emoney'
          },
          chain: {
            channel_id: 'channel-9'
          }
        }]
    },
    {
      description: 'The native token of Furya',
      denom_units: [{
          denom: 'ibc/FCCC96CC8B26932DF7D987D9FB3930CE044E23D8C712525E4EBFD2E5DCBA17CE',
          exponent: 0,
          aliases: ['ufury']
        }, {
          denom: 'fury',
          exponent: 6
        }],
      base: 'ibc/FCCC96CC8B26932DF7D987D9FB3930CE044E23D8C712525E4EBFD2E5DCBA17CE',
      name: 'Furya',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/ufury.svg',
          theme: {
            primary_color_hex: '#eaf143'
          }
        }],
      coingecko_id: 'fanfury',
      keywords: ['gaming', 'staking'],
      socials: {
        twitter: 'https://twitter.com/furyachain'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'ufury',
            chain_name: 'furya'
          },
          chain: {
            channel_id: 'channel-417'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-87'
          }
        }]
    },
    {
      description: 'Mars protocol token',
      denom_units: [{
          denom: 'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }],
      socials: {
        website: 'https://www.marsprotocol.io/',
        twitter: 'https://twitter.com/mars_protocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'umars',
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-209'
          }
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [{
          denom: 'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-225'
          }
        }]
    },
    {
      description: 'The native token of OKExChain',
      denom_units: [{
          denom: 'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'wei',
            chain_name: 'okexchain'
          },
          chain: {
            channel_id: 'channel-212'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      base: 'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
          exponent: 0,
          aliases: ['uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      base: 'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
          exponent: 0,
          aliases: ['ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      base: 'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
          exponent: 0,
          aliases: ['uaud']
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud']
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc']
        }
      ],
      base: 'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
          exponent: 0,
          aliases: ['ucad']
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad']
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc']
        }
      ],
      base: 'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
          exponent: 0,
          aliases: ['uchf']
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf']
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc']
        }
      ],
      base: 'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
          exponent: 0,
          aliases: ['ucny']
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny']
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc']
        }
      ],
      base: 'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
          exponent: 0,
          aliases: ['udkk']
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk']
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc']
        }
      ],
      base: 'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
          exponent: 0,
          aliases: ['ueur']
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur']
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc']
        }
      ],
      base: 'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
          exponent: 0,
          aliases: ['ugbp']
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp']
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc']
        }
      ],
      base: 'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
          exponent: 0,
          aliases: ['uhkd']
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd']
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc']
        }
      ],
      base: 'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
          exponent: 0,
          aliases: ['uidr']
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr']
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc']
        }
      ],
      base: 'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
          exponent: 0,
          aliases: ['uinr']
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr']
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc']
        }
      ],
      base: 'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
          exponent: 0,
          aliases: ['ujpy']
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy']
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc']
        }
      ],
      base: 'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
          exponent: 0,
          aliases: ['umnt']
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt']
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc']
        }
      ],
      base: 'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
          exponent: 0,
          aliases: ['umyr']
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr']
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc']
        }
      ],
      base: 'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
          exponent: 0,
          aliases: ['unok']
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok']
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc']
        }
      ],
      base: 'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
          exponent: 0,
          aliases: ['uphp']
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp']
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc']
        }
      ],
      base: 'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
          exponent: 0,
          aliases: ['usdr']
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr']
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc']
        }
      ],
      base: 'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
          exponent: 0,
          aliases: ['usek']
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek']
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc']
        }
      ],
      base: 'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
          exponent: 0,
          aliases: ['usgd']
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd']
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc']
        }
      ],
      base: 'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
          exponent: 0,
          aliases: ['uthb']
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb']
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc']
        }
      ],
      base: 'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
          exponent: 0,
          aliases: ['utwd']
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd']
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc']
        }
      ],
      base: 'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/107D152BB3176FAEBF4C2A84C5FFDEEA7C7CB4FE1BBDAB710F1FD25BCD055CBF',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/107D152BB3176FAEBF4C2A84C5FFDEEA7C7CB4FE1BBDAB710F1FD25BCD055CBF',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    },
    {
      description: 'The native staking and governance token of the Kujira chain.',
      denom_units: [{
          denom: 'ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3',
          exponent: 0,
          aliases: ['ukuji']
        }, {
          denom: 'kuji',
          exponent: 6
        }],
      base: 'ibc/7F7D3698E2E3484D576001608BB84D13F5C8B02B97359716ECC60A29A7523BF3',
      name: 'Kujira',
      display: 'kuji',
      symbol: 'KUJI',
      coingecko_id: 'kujira',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kujira/images/kuji.svg'
        }],
      socials: {
        website: 'https://kujira.network/',
        twitter: 'https://twitter.com/TeamKujira'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'ukuji',
            chain_name: 'kujira'
          },
          chain: {
            channel_id: 'channel-87'
          }
        }]
    },
    {
      description: 'Mars protocol token',
      denom_units: [{
          denom: 'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
          exponent: 0,
          aliases: ['umars']
        }, {
          denom: 'mars',
          exponent: 6
        }],
      base: 'ibc/281FEE887CDF71EB9C1FEFC554822DCB06BE4E8A8BFF944ED64E3D03437E9384',
      name: 'Mars',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
      },
      coingecko_id: 'mars-protocol-a7fcbcfb-fd61-4017-92f0-7ee9f9cc6da3',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/mars/images/mars-token.svg'
        }],
      socials: {
        website: 'https://www.marsprotocol.io/',
        twitter: 'https://twitter.com/mars_protocol'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'umars',
            chain_name: 'mars'
          },
          chain: {
            channel_id: 'channel-209'
          }
        }]
    },
    {
      description: 'The native token of Migaloo Chain',
      denom_units: [{
          denom: 'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
          exponent: 0,
          aliases: ['uwhale']
        }, {
          denom: 'whale',
          exponent: 6
        }],
      base: 'ibc/3A6ADE78FB8169C034C29C4F2E1A61CE596EC8235366F22381D981A98F1F5A5C',
      name: 'Whale',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
      },
      coingecko_id: 'white-whale',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/migaloo/images/white-whale.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'uwhale',
            chain_name: 'migaloo'
          },
          chain: {
            channel_id: 'channel-210'
          }
        }]
    },
    {
      description: 'The permissioned staking asset for Noble Chain',
      denom_units: [{
          denom: 'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
          exponent: 0,
          aliases: ['ustake']
        }, {
          denom: 'stake',
          exponent: 6
        }],
      base: 'ibc/C3EF76D8F7E3217A058F9A6308DF5B99A8A425FB85983D91FFE910C5FA94B1A1',
      name: 'Stake',
      display: 'stake',
      symbol: 'STAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/stake.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ustake',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }]
    },
    {
      description: 'Frienzies are an IBC token redeemable exclusively for a physical asset issued by the Noble entity.',
      denom_units: [{
          denom: 'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
          exponent: 0,
          aliases: ['ufrienzies']
        }, {
          denom: 'frienzies',
          exponent: 6
        }],
      base: 'ibc/C09F4DA2D82F7710AAE230CEFAA2AA3CA8E246AE3D9A00A3969F3D6CEB6C952B',
      display: 'frienzies',
      name: 'Frienzies',
      symbol: 'FRNZ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/frnz.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-3',
            base_denom: 'ufrienzies',
            chain_name: 'noble'
          },
          chain: {
            channel_id: 'channel-224'
          }
        }]
    },
    {
      description: 'The native token of Nois',
      denom_units: [{
          denom: 'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
          exponent: 0,
          aliases: ['unois']
        }, {
          denom: 'nois',
          exponent: 6
        }],
      base: 'ibc/1D9E14A1F00613ED39E4B8A8763A20C9BE5B5EA0198F2FE47EAE43CD91A0137B',
      name: 'Nois',
      display: 'nois',
      symbol: 'NOIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
      },
      keywords: [
        'nois',
        'randomness',
        'drand',
        'wasm'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nois/images/nois.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-1',
            base_denom: 'unois',
            chain_name: 'nois'
          },
          chain: {
            channel_id: 'channel-225'
          }
        }]
    },
    {
      description: 'The native token of OKExChain',
      denom_units: [{
          denom: 'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
          exponent: 0,
          aliases: ['wei']
        }, {
          denom: 'okt',
          exponent: 18
        }],
      base: 'ibc/F2FEE556361355D90AC9C86113A3C8A81BA90B95316FB8438F9ADCB0CC7ACA58',
      name: 'OKExChain',
      display: 'okt',
      symbol: 'OKT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
      },
      coingecko_id: 'oec-token',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/okexchain/images/okc.png'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-52',
            base_denom: 'wei',
            chain_name: 'okexchain'
          },
          chain: {
            channel_id: 'channel-212'
          }
        }]
    },
    {
      description: 'The native token of Osmosis',
      denom_units: [{
          denom: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
          exponent: 0,
          aliases: ['uosmo']
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518',
      name: 'Osmosis',
      display: 'osmo',
      symbol: 'OSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      coingecko_id: 'osmosis',
      keywords: ['dex', 'staking'],
      socials: {
        website: 'https://osmosis.zone',
        twitter: 'https://twitter.com/osmosiszone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uosmo',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'ION is the second native token of Osmosis.',
      denom_units: [{
          denom: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
          exponent: 0,
          aliases: ['uion']
        }, {
          denom: 'ion',
          exponent: 6
        }],
      type_asset: 'sdk.coin',
      base: 'ibc/F7E92EE59B5428793F3EF5C1A4CB2494F61A9D0C9A69469D02390714A1372E16',
      name: 'Ion DAO',
      display: 'ion',
      symbol: 'ION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/ion.svg'
        }],
      coingecko_id: 'ion',
      keywords: ['memecoin', 'defi'],
      socials: {
        website: 'https://ion.wtf',
        twitter: 'https://twitter.com/_IONDAO'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-42',
            base_denom: 'uion',
            chain_name: 'osmosis'
          },
          chain: {
            channel_id: 'channel-0'
          }
        }]
    },
    {
      description: 'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [{
          denom: 'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
          exponent: 0,
          aliases: ['uxprt']
        }, {
          denom: 'xprt',
          exponent: 6
        }],
      base: 'ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
      },
      coingecko_id: 'persistence',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg'
        }],
      socials: {
        website: 'https://persistence.one/',
        twitter: 'https://twitter.com/PersistenceOne'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-37',
            base_denom: 'uxprt',
            chain_name: 'persistence'
          },
          chain: {
            channel_id: 'channel-33'
          }
        }]
    },
    {
      description: 'QCK - native token of Quicksilver',
      denom_units: [{
          denom: 'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
          exponent: 0,
          aliases: ['uqck']
        }, {
          denom: 'qck',
          exponent: 6,
          aliases: []
        }],
      base: 'ibc/27718E6B6B94C2BCF9A1ABB85CBE8AC95130B07817D21D7BC2D293F9295395D9',
      name: 'Quicksilver',
      display: 'qck',
      symbol: 'QCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
      },
      coingecko_id: 'quicksilver',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png'
        }],
      socials: {
        website: 'https://quicksilver.zone/',
        twitter: 'https://twitter.com/quicksilverzone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-22',
            base_denom: 'uqck',
            chain_name: 'quicksilver'
          },
          chain: {
            channel_id: 'channel-215'
          }
        }]
    },
    {
      description: 'The native token of Secret Network',
      denom_units: [{
          denom: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
          exponent: 0,
          aliases: ['uscrt']
        }, {
          denom: 'scrt',
          exponent: 6
        }],
      base: 'ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
      },
      coingecko_id: 'secret',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg'
        }],
      socials: {
        website: 'https://scrt.network/',
        twitter: 'https://twitter.com/SecretNetwork'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-8',
            base_denom: 'uscrt',
            chain_name: 'secretnetwork'
          },
          chain: {
            channel_id: 'channel-48'
          }
        }]
    },
    {
      description: 'Rowan Token (ROWAN) is the Sifchain Network\'s native utility token, used as the primary means to govern, provide liquidity, secure the blockchain, incentivize participants, and provide a default mechanism to store and exchange value.',
      denom_units: [{
          denom: 'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
          exponent: 0,
          aliases: ['rowan']
        }, {
          denom: 'ROWAN',
          exponent: 18
        }],
      base: 'ibc/92E4AB82E3B2AF2D5181AC69C74F9F6D890442C7B7B02CC8634B9D3ED7CF936D',
      name: 'Sifchain Rowan',
      display: 'ROWAN',
      symbol: 'ROWAN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
      },
      coingecko_id: 'sifchain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sifchain/images/rowan.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-14',
            base_denom: 'rowan',
            chain_name: 'sifchain'
          },
          chain: {
            channel_id: 'channel-5'
          }
        }]
    },
    {
      description: 'The native token of Stargaze',
      denom_units: [{
          denom: 'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
          exponent: 0,
          aliases: ['ustars']
        }, {
          denom: 'stars',
          exponent: 6
        }],
      base: 'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885',
      name: 'Stargaze',
      display: 'stars',
      symbol: 'STARS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
      },
      coingecko_id: 'stargaze',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.svg'
        }],
      socials: {
        website: 'https://www.stargaze.zone/',
        twitter: 'https://twitter.com/StargazeZone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-5',
            base_denom: 'ustars',
            chain_name: 'stargaze'
          },
          chain: {
            channel_id: 'channel-20'
          }
        }]
    },
    {
      description: 'The native token of Stride',
      denom_units: [{
          denom: 'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
          exponent: 0,
          aliases: ['ustrd']
        }, {
          denom: 'strd',
          exponent: 6
        }],
      base: 'ibc/266D1A31785C3E815879EC32AB3B812F0CDFBF3514C5058275C626C9A18AF1FB',
      name: 'Stride',
      display: 'strd',
      symbol: 'STRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
      },
      coingecko_id: 'stride',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/stride/images/strd.svg'
        }],
      socials: {
        website: 'https://stride.zone/',
        twitter: 'https://twitter.com/stride_zone'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-24',
            base_denom: 'ustrd',
            chain_name: 'stride'
          },
          chain: {
            channel_id: 'channel-139'
          }
        }]
    },
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
          exponent: 0,
          aliases: ['uluna']
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna']
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc']
        }
      ],
      base: 'ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
      },
      coingecko_id: 'terra-luna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uluna',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
          exponent: 0,
          aliases: ['uusd']
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd']
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc']
        }
      ],
      base: 'ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
      },
      coingecko_id: 'terrausd',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uusd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
          exponent: 0,
          aliases: ['ukrw']
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw']
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc']
        }
      ],
      base: 'ibc/A3261799F1B8B81FEBF1615EA5034DE825B5F9608F61A2D93A5DE41A38DE53AF',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ukrw',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
          exponent: 0,
          aliases: ['uaud']
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud']
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc']
        }
      ],
      base: 'ibc/62A380754699538433254576CC3FB71A435606F23BD38DCADA38D6472217BE66',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uaud',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
          exponent: 0,
          aliases: ['ucad']
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad']
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc']
        }
      ],
      base: 'ibc/0676F47C75829EF870526B0CD767F65EB3AE6D95768DAB43F472B4F526380375',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ucad',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
          exponent: 0,
          aliases: ['uchf']
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf']
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc']
        }
      ],
      base: 'ibc/16B0A06D4463D3F287873D63B89EEC1647B22D10CFD8DC906154C6E55FE7400F',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uchf',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
          exponent: 0,
          aliases: ['ucny']
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny']
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc']
        }
      ],
      base: 'ibc/843ADFB199626AB0465F212029200EB12F8C7AF41487438D75150F275DEA5EB8',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ucny',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
          exponent: 0,
          aliases: ['udkk']
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk']
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc']
        }
      ],
      base: 'ibc/C6B5D5AE64E3054916153CDF02467638BDEE5B55777180E7FB6365F50CA4477C',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'udkk',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
          exponent: 0,
          aliases: ['ueur']
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur']
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc']
        }
      ],
      base: 'ibc/FC7C3449D9D3497373E63A57ABD417685C4E2D000D11A34EBF89F2F00780D6FE',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ueur',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
          exponent: 0,
          aliases: ['ugbp']
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp']
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc']
        }
      ],
      base: 'ibc/DD149BDA76BA04A2CB206F0BEF3B56EBE3B7DE6BB4CB833F47257D1497E7BC99',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ugbp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
          exponent: 0,
          aliases: ['uhkd']
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd']
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc']
        }
      ],
      base: 'ibc/ED8C2407BEA9646B6AB686E55BAE3C607EFA40154CED226418A331F80890F258',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uhkd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
          exponent: 0,
          aliases: ['uidr']
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr']
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc']
        }
      ],
      base: 'ibc/C8648B16B2259BE3C6EB518333D9D223DD9B493ADB867D160F85725D2B0CA051',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uidr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
          exponent: 0,
          aliases: ['uinr']
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr']
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc']
        }
      ],
      base: 'ibc/09F936980055EE26F23EB052E4D64DE147A54D69153BFAA5E419ECC3A6A1677B',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uinr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
          exponent: 0,
          aliases: ['ujpy']
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy']
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc']
        }
      ],
      base: 'ibc/AF32FDEE8F709F5E3182ADCD852ECFF463A6AE4E172F8E53E9F422548F3B999F',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'ujpy',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
          exponent: 0,
          aliases: ['umnt']
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt']
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc']
        }
      ],
      base: 'ibc/47ACFDEB3CF7A49EF0738F52C2E0EB79AAF9AC3321CA2A7A2BD5F09AB7B33D93',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'umnt',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
          exponent: 0,
          aliases: ['umyr']
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr']
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc']
        }
      ],
      base: 'ibc/FDE195C15483F903D6F18F342AB5E7651E881626E2F252162F95E5ADE27059B2',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'umyr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
          exponent: 0,
          aliases: ['unok']
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok']
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc']
        }
      ],
      base: 'ibc/4573409F701BCC5A0E81A97B35A51790397ACC8DDA538FDF0B296044C428C634',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'unok',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
          exponent: 0,
          aliases: ['uphp']
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp']
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc']
        }
      ],
      base: 'ibc/ED4DB32EC38308E0FDC5EC22732850781003B90D9269E83494962DA738308A3E',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uphp',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
          exponent: 0,
          aliases: ['usdr']
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr']
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc']
        }
      ],
      base: 'ibc/EEF9C5CF846A5CAD0D9A67310C1BC9EAFF865FD4BA34F826ECA504DDD5718F92',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usdr',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
          exponent: 0,
          aliases: ['usek']
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek']
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc']
        }
      ],
      base: 'ibc/3DB70616F2455B99EA94213515341F4F935CD3F008C88612163A1C50D6174804',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usek',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
          exponent: 0,
          aliases: ['usgd']
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd']
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc']
        }
      ],
      base: 'ibc/68200BACFD8C9ACAB562DB9BFF6DC318ABC7E01756ED14D3EF020EA334175E16',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'usgd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
          exponent: 0,
          aliases: ['uthb']
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb']
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc']
        }
      ],
      base: 'ibc/FE345E6C7FC0E31DE5288F00D0F0CFE2991FA52B8312C7C4DE76A7593E327F36',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'uthb',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
          exponent: 0,
          aliases: ['utwd']
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd']
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc']
        }
      ],
      base: 'ibc/E18DAA8C9FBF6BD73E3E73C88C9740E4D576944D4081CF53224D01C316D149B7',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg'
        }],
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-20',
            base_denom: 'utwd',
            chain_name: 'terra'
          },
          chain: {
            channel_id: 'channel-27'
          }
        }]
    },
    {
      description: 'The native staking token of Terra.',
      denom_units: [{
          denom: 'ibc/107D152BB3176FAEBF4C2A84C5FFDEEA7C7CB4FE1BBDAB710F1FD25BCD055CBF',
          exponent: 0,
          aliases: ['uluna']
        }, {
          denom: 'luna',
          exponent: 6
        }],
      base: 'ibc/107D152BB3176FAEBF4C2A84C5FFDEEA7C7CB4FE1BBDAB710F1FD25BCD055CBF',
      name: 'Luna',
      display: 'luna',
      symbol: 'LUNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      coingecko_id: 'terra-luna-2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      socials: {
        website: 'https://www.terra.money/',
        twitter: 'https://twitter.com/terra_money'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-2',
            base_denom: 'uluna',
            chain_name: 'terra2'
          },
          chain: {
            channel_id: 'channel-86'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/C1197A19D70157ABE9E7058D5494CA9317E3BA374A2720FDAAAFF6F9548FF084',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/C1197A19D70157ABE9E7058D5494CA9317E3BA374A2720FDAAAFF6F9548FF084',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/8D34BDDD6C534FEABA8BBAD7894E1793D3097E9147E94FC516FAB464AA598C23',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/8D34BDDD6C534FEABA8BBAD7894E1793D3097E9147E94FC516FAB464AA598C23',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/82822E87DFB76EDBF5FEA7AF35A5DE48F19C6C60D59F3B08B24A347A67C50383',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/82822E87DFB76EDBF5FEA7AF35A5DE48F19C6C60D59F3B08B24A347A67C50383',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/DD880CA120A69821298FA6ECD7AB10EBCB6624BABE5BD2B7B1EC4C97F75CB4F9',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/DD880CA120A69821298FA6ECD7AB10EBCB6624BABE5BD2B7B1EC4C97F75CB4F9',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/D16A9D5D85BCF482A389BA74C5B6E71B9E731CD5C97885C343DC0D64037FE688',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/D16A9D5D85BCF482A389BA74C5B6E71B9E731CD5C97885C343DC0D64037FE688',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/15996DE9D2D6B5DFB9A01C2095320D96FB5A3A2D5ACCC1E773338D748CA9C175',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/15996DE9D2D6B5DFB9A01C2095320D96FB5A3A2D5ACCC1E773338D748CA9C175',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/8301F2E358BBCBF0E44DFFCA61889BF21B086B57AC39D48BE3164E68E443CCEF',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/8301F2E358BBCBF0E44DFFCA61889BF21B086B57AC39D48BE3164E68E443CCEF',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/CA04C714C4FB122FF83BF4E5D19E4A56CDAF7F1837F66F2D722ADB22C58C7467',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/CA04C714C4FB122FF83BF4E5D19E4A56CDAF7F1837F66F2D722ADB22C58C7467',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/387BEF3BD21B53A98708ABEBB0DAA4FCD90B612CF0568983F293E6A7A4DF3DA5',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/387BEF3BD21B53A98708ABEBB0DAA4FCD90B612CF0568983F293E6A7A4DF3DA5',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for SIENNA on Secret Network',
      denom_units: [{
          denom: 'ibc/C1197A19D70157ABE9E7058D5494CA9317E3BA374A2720FDAAAFF6F9548FF084',
          exponent: 0,
          aliases: ['cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4']
        }, {
          denom: 'sienna',
          exponent: 18
        }],
      type_asset: 'snip20',
      address: 'secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
      base: 'ibc/C1197A19D70157ABE9E7058D5494CA9317E3BA374A2720FDAAAFF6F9548FF084',
      name: 'SIENNA',
      display: 'sienna',
      symbol: 'SIENNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
      },
      coingecko_id: 'sienna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/sienna.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1rgm2m5t530tdzyd99775n6vzumxa5luxcllml4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/8D34BDDD6C534FEABA8BBAD7894E1793D3097E9147E94FC516FAB464AA598C23',
          exponent: 0,
          aliases: ['cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip20',
      address: 'secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
      base: 'ibc/8D34BDDD6C534FEABA8BBAD7894E1793D3097E9147E94FC516FAB464AA598C23',
      name: 'Shade (old)',
      display: 'shd',
      symbol: 'SHD(old)',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shdold.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1qfql357amn448duf5gvp9gr48sxx9tsnhupu3d',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shade on Secret Network',
      denom_units: [{
          denom: 'ibc/82822E87DFB76EDBF5FEA7AF35A5DE48F19C6C60D59F3B08B24A347A67C50383',
          exponent: 0,
          aliases: ['cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm']
        }, {
          denom: 'shd',
          exponent: 8
        }],
      type_asset: 'snip25',
      address: 'secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      base: 'ibc/82822E87DFB76EDBF5FEA7AF35A5DE48F19C6C60D59F3B08B24A347A67C50383',
      name: 'Shade',
      display: 'shd',
      symbol: 'SHD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
      },
      coingecko_id: 'shade-protocol',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Silk on Secret Network',
      denom_units: [{
          denom: 'ibc/DD880CA120A69821298FA6ECD7AB10EBCB6624BABE5BD2B7B1EC4C97F75CB4F9',
          exponent: 0,
          aliases: ['cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd']
        }, {
          denom: 'silk',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      base: 'ibc/DD880CA120A69821298FA6ECD7AB10EBCB6624BABE5BD2B7B1EC4C97F75CB4F9',
      name: 'Silk',
      display: 'silk',
      symbol: 'SILK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
      },
      coingecko_id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/silk.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for SCRT Staking Derivatives on Secret Network',
      denom_units: [{
          denom: 'ibc/D16A9D5D85BCF482A389BA74C5B6E71B9E731CD5C97885C343DC0D64037FE688',
          exponent: 0,
          aliases: ['cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4']
        }, {
          denom: 'stkd-scrt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
      base: 'ibc/D16A9D5D85BCF482A389BA74C5B6E71B9E731CD5C97885C343DC0D64037FE688',
      name: 'SCRT Staking Derivatives',
      display: 'stkd-scrt',
      symbol: 'stkd-SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
      },
      coingecko_id: 'stkd-scrt',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/stkd-scrt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1k6u0cy4feepm6pehnz804zmwakuwdapm69tuc4',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Button on Secret Network',
      denom_units: [{
          denom: 'ibc/15996DE9D2D6B5DFB9A01C2095320D96FB5A3A2D5ACCC1E773338D748CA9C175',
          exponent: 0,
          aliases: ['cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt']
        }, {
          denom: 'butt',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
      base: 'ibc/15996DE9D2D6B5DFB9A01C2095320D96FB5A3A2D5ACCC1E773338D748CA9C175',
      name: 'Button',
      display: 'butt',
      symbol: 'BUTT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/butt.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1yxcexylwyxlq58umhgsjgstgcg2a0ytfy4d9lt',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Alter on Secret Network',
      denom_units: [{
          denom: 'ibc/8301F2E358BBCBF0E44DFFCA61889BF21B086B57AC39D48BE3164E68E443CCEF',
          exponent: 0,
          aliases: ['cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej']
        }, {
          denom: 'alter',
          exponent: 6
        }],
      base: 'ibc/8301F2E358BBCBF0E44DFFCA61889BF21B086B57AC39D48BE3164E68E443CCEF',
      name: 'Alter',
      display: 'alter',
      symbol: 'ALTER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
      },
      coingecko_id: 'alter',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/alter.svg'
        }],
      socials: {
        website: 'http://alter.network/',
        twitter: 'https://twitter.com/AlterDapp'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret12rcvz0umvk875kd6a803txhtlu7y0pnd73kcej',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Amber on Secret Network',
      denom_units: [{
          denom: 'ibc/CA04C714C4FB122FF83BF4E5D19E4A56CDAF7F1837F66F2D722ADB22C58C7467',
          exponent: 0,
          aliases: ['cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852']
        }, {
          denom: 'amber',
          exponent: 6
        }],
      type_asset: 'snip20',
      address: 'secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
      base: 'ibc/CA04C714C4FB122FF83BF4E5D19E4A56CDAF7F1837F66F2D722ADB22C58C7467',
      name: 'Amber',
      display: 'amber',
      symbol: 'AMBER',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/amber.svg'
        }],
      socials: {
        website: 'http://amber.money/',
        twitter: 'https://twitter.com/AmberDAO_'
      },
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret1s09x2xvfd2lp2skgzm29w2xtena7s8fq98v852',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    },
    {
      description: 'The native token cw20 for Shill on Secret Network',
      denom_units: [{
          denom: 'ibc/387BEF3BD21B53A98708ABEBB0DAA4FCD90B612CF0568983F293E6A7A4DF3DA5',
          exponent: 0,
          aliases: ['cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse']
        }, {
          denom: 'shill',
          exponent: 6
        }],
      type_asset: 'snip25',
      address: 'secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
      base: 'ibc/387BEF3BD21B53A98708ABEBB0DAA4FCD90B612CF0568983F293E6A7A4DF3DA5',
      name: 'Shill',
      display: 'shill',
      symbol: 'SHILL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shill.svg'
        }],
      traces: [{
          type: 'ibc-cw20',
          counterparty: {
            port: 'wasm.secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
            channel_id: 'channel-45',
            base_denom: 'cw20:secret197dvnt9yjxwn8sjdlx05f7zuk27lsdxtfnwxse',
            chain_name: 'secretnetwork'
          },
          chain: {
            port: 'transfer',
            channel_id: 'channel-163'
          }
        }]
    }
  ]
};
export default assets;
    