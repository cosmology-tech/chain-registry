import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'entrypointtestnet',
  assets: [{
      description: 'The native token of EntryPoint',
      denomUnits: [{
          denom: 'uentry',
          exponent: 0,
          aliases: []
        }, {
          denom: 'entry',
          exponent: 6,
          aliases: []
        }],
      base: 'uentry',
      name: 'EntryPoint',
      display: 'entry',
      symbol: 'ENTRY',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
      },
      keywords: [
        'staking',
        'governance',
        'vaults'
      ],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/entrypointtestnet/images/entry.svg'
        }]
    }, {
      description: 'The native staking and governance token of the Theta testnet version of the Cosmos Hub, via Osmosis.',
      denomUnits: [{
          denom: 'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
          exponent: 0
        }, {
          denom: 'atom',
          exponent: 6
        }],
      base: 'ibc/8A138BC76D0FB2665F8937EC2BF01B9F6A714F6127221A0E155106A45E09BCC5',
      name: 'Cosmos',
      display: 'atom',
      symbol: 'ATOM',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'ibc/B28CFD38D84A480EF2A03AC575DCB05004D934A603A5A642888847BCDA6340C0',
            channelId: 'channel-4156'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/transfer/channel-4156/uatom'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }]
    }]
};
export default info;