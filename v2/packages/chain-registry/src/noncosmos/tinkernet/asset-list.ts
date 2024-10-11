import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'tinkernet',
  assets: [{
      description: 'The native fee, governance and staking token of the Tinkernet Parachain.',
      extendedDescription: 'Tinkernet is a Kusama parachain and the sister-chain of the InvArch Network on Polkadot. Tinkernet is an experimental proving ground where omnichain account & DAO governance protocols are deployed and tested before deploying on the InvArch Network. Protocols on Tinkernet realize features such as multichain multisig accounts & DAO Staking. Unlike a testnet, Tinkernet features real value.',
      socials: {
        website: 'https://tinker.network',
        twitter: 'https://twitter.com/TinkerParachain'
      },
      denomUnits: [{
          denom: 'Planck',
          exponent: 0
        }, {
          denom: 'TNKR',
          exponent: 12
        }],
      typeAsset: 'substrate',
      base: 'Planck',
      name: 'Tinkernet',
      display: 'TNKR',
      symbol: 'TNKR',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
      },
      coingeckoId: 'tinkernet',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg'
        }]
    }]
};
export default info;