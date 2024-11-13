import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'rootstock',
  assets: [{
      description: 'Pegged 1:1 to Bitcoin, RBTC allows you to interact with DeFi protocols and dApps on the Rootstock network. Use RBTC for minting, swaps, gas fees, and more.',
      extendedDescription: 'The longest running and leading Bitcoin sidechain. Deploy dApps and EVM-compatible smart contracts secured by the world’s most accessible, decentralized and secure blockchain.',
      denomUnits: [{
          denom: 'sat',
          exponent: 0
        }, {
          denom: 'rbtc',
          exponent: 18
        }],
      typeAsset: 'evm-base',
      base: 'sat',
      display: 'rbtc',
      symbol: 'RBTC',
      name: 'Rootstock Smart Bitcoin',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Rootstock'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          theme: {
            circle: false,
            primaryColorHex: '#FF9931',
            backgroundColorHex: '#00000000'
          }
        }],
      coingeckoId: 'rootstock',
      socials: {
        website: 'https://rootstock.io/',
        twitter: 'https://twitter.com/rootstock_io'
      }
    }, {
      description: 'The wrapped version of RBTC.',
      denomUnits: [{
          denom: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
          exponent: 0
        }, {
          denom: 'wrbtc',
          exponent: 18
        }],
      typeAsset: 'erc20',
      name: 'Wrapped BTC',
      symbol: 'WRBTC',
      display: 'wrbtc',
      base: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
      address: '0x542FDA317318eBf1d3DeAF76E0B632741a7e677d',
      traces: [{
          type: 'wrapped',
          counterparty: {
            chainName: 'rootstock',
            baseDenom: 'sat'
          },
          provider: 'Rootstock'
        }],
      images: [{
          imageSync: {
            chainName: 'rootstock',
            baseDenom: 'sat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/rootstock/images/rbtc.svg',
          theme: {
            circle: false,
            primaryColorHex: '#FF9931',
            backgroundColorHex: '#00000000'
          }
        }]
    }]
};
export default info;