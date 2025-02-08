import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'picasso',
  assets: [
    {
      description: 'The native staking and governance token of Picasso Kusama.',
      denomUnits: [{
          denom: 'ppica',
          exponent: 0
        }, {
          denom: 'pica',
          exponent: 12
        }],
      typeAsset: 'substrate',
      base: 'ppica',
      name: 'Pica',
      display: 'pica',
      symbol: 'PICA',
      coingeckoId: 'picasso',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg'
        }]
    },
    {
      denomUnits: [{
          denom: '4',
          exponent: 0
        }, {
          denom: 'ksm',
          exponent: 12
        }],
      typeAsset: 'substrate',
      base: '4',
      name: 'Kusama',
      display: 'ksm',
      symbol: 'KSM',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'kusama',
            baseDenom: 'Planck'
          },
          provider: 'Kusama Parachain'
        }],
      images: [{
          imageSync: {
            chainName: 'kusama',
            baseDenom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg'
      }
    },
    {
      denomUnits: [{
          denom: '79228162514264337593543950342',
          exponent: 0
        }, {
          denom: 'dot',
          exponent: 10
        }],
      typeAsset: 'substrate',
      base: '79228162514264337593543950342',
      name: 'Polkadot',
      display: 'dot',
      symbol: 'DOT',
      traces: [{
          type: 'ibc-bridge',
          counterparty: {
            chainName: 'composablepolkadot',
            baseDenom: '79228162514264337593543950342',
            channelId: 'channel-15'
          },
          chain: {
            channelId: 'channel-15',
            path: 'transfer/channel-15/79228162514264337593543950342'
          },
          provider: 'Picasso'
        }],
      images: [{
          imageSync: {
            chainName: 'composablepolkadot',
            baseDenom: '79228162514264337593543950342'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
          theme: {
            primaryColorHex: '#e4047c'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg'
      }
    },
    {
      denomUnits: [{
          denom: '130',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'substrate',
      base: '130',
      name: 'Statemine',
      display: 'usdt',
      symbol: 'USDT',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'statemine',
            baseDenom: '130'
          },
          provider: 'Kusama Parachain'
        }],
      images: [{
          imageSync: {
            chainName: 'statemine',
            baseDenom: '130'
          }
        }]
    },
    {
      denomUnits: [{
          denom: '2125',
          exponent: 0
        }, {
          denom: 'TNKR',
          exponent: 12
        }],
      typeAsset: 'substrate',
      base: '2125',
      name: 'Tinkernet',
      display: 'TNKR',
      symbol: 'TNKR',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'tinkernet',
            baseDenom: 'Planck'
          },
          provider: 'Tinkernet Parachain'
        }],
      images: [{
          imageSync: {
            chainName: 'tinkernet',
            baseDenom: 'Planck'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      }
    }
  ]
};
export default info;