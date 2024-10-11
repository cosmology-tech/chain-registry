import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'mantle',
  assets: [{
      description: 'Ignition introduces $FBTC, an omnichain Bitcoin asset pegged 1:1 to BTC, aimed at elevating Bitcoin�s accessibility and utility, paving the way for a low-friction and interoperable future.',
      extendedDescription: 'FBTC enhances Bitcoin utility beyond just a store of value, and elevates its power with an asset that commands ultimate liquidity across many chains and various yield enhancement options.\n\n\n\nFBTC uses reputable and trusted multisignature custody solutions, and employs Threshold Signature Scheme (TSS) Network to conduct minting and bridging.\n\nFBTC is seamlessly interoperable to enable a wide range of use cases on L1s and L2s.\n\nFBTC brings an impressive slate of prominent strategic partnerships with industry leading institutions, blockchain ecosystems and infrastructure providers. FBTC will also be supported by many DeFi applications, CEXs and wallets.',
      typeAsset: 'erc20',
      address: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
      denomUnits: [{
          denom: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
          exponent: 0
        }, {
          denom: 'fbtc',
          exponent: 8
        }],
      base: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
      name: 'Fire Bitcoin',
      display: 'fbtc',
      symbol: 'FBTC',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Ignition'
        }],
      coingeckoId: 'ignition-fbtc',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/mantle/images/fbtc.svg',
          theme: {
            circle: false,
            primaryColorHex: '#8F00FF',
            backgroundColorHex: '#00000000'
          }
        }],
      socials: {
        website: 'https://fbtc.com/',
        twitter: 'https://twitter.com/fbtc_official'
      }
    }]
};
export default info;