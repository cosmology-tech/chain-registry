import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'dymension',
  assets: [{
      description: 'The native governance and staking token of the Dymension Hub',
      denom_units: [{
          denom: 'adym',
          exponent: 0
        }, {
          denom: 'dym',
          exponent: 18
        }],
      type_asset: 'sdk.coin',
      base: 'adym',
      name: 'Dymension',
      display: 'dym',
      symbol: 'DYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
      },
      coingecko_id: 'dymension',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dymension/images/dymension-logo.svg'
        }],
      socials: {
        website: 'https://portal.dymension.xyz',
        twitter: 'https://twitter.com/dymension'
      }
    }, {
      description: 'The native token of Nim Network.',
      extended_description: 'Nim Network is a highly-adoptable AI Gaming chain that will provide the ultimate ecosystem for exploration and development of games at the intersection of Web3 and AI.',
      denom_units: [{
          denom: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
          exponent: 0,
          aliases: ['anim']
        }, {
          denom: 'nim',
          exponent: 18
        }],
      type_asset: 'ics20',
      base: 'ibc/FB53D1684F155CBB86D9CE917807E42B59209EBE3AD3A92E15EF66586C073942',
      name: 'Nim Network',
      display: 'nim',
      symbol: 'NIM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chain_name: 'nim',
            base_denom: 'anim',
            channel_id: 'channel-0'
          },
          chain: {
            channel_id: 'channel-49',
            path: 'transfer/channel-49/anim'
          }
        }],
      images: [{
          image_sync: {
            chain_name: 'nim',
            base_denom: 'anim'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
        }],
      socials: {
        website: 'https://nim.network/',
        twitter: 'https://twitter.com/nim_network'
      },
      keywords: ['gaming', 'AI'],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nim/images/nim.svg'
      }
    }]
};
export default info;