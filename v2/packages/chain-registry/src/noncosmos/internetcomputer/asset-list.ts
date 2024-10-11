import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chainName: 'internetcomputer',
  assets: [{
      description: 'The native token of Internet Computer',
      extendedDescription: 'The Internet Computer blockchain incorporates a radical rethink of blockchain design, powered by innovations in cryptography. It provides the first “World Computer” blockchain that can be used to build almost any Web 2.0 online system or service, and web3 services, including web3 social media services, without any need for centralized traditional IT such as cloud computing services. It also enables smart contracts it hosts to directly create transactions on other blockchains, which in turn enables the full end-to-end decentralization of online services and web3 for the first time.',
      denomUnits: [{
          denom: 'e8s',
          exponent: 0
        }, {
          denom: 'ICP',
          exponent: 8
        }],
      typeAsset: 'unknown',
      base: 'e8s',
      name: 'Internet Computer',
      display: 'ICP',
      symbol: 'ICP',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/icp.png',
          theme: {
            circle: true,
            primaryColorHex: '#29ABE2',
            backgroundColorHex: '#E3E3E3'
          }
        }],
      coingeckoId: 'internet-computer',
      socials: {
        website: 'https://internetcomputer.org/',
        twitter: 'https://x.com/dfinity'
      }
    }, {
      description: 'A multi-chain bitcoin twin, trustlessly created by chain-key cryptography and Internet Computer smart contracts that directly hold raw bitcoin.',
      extendedDescription: 'Chain-key Bitcoin (ckBTC) is an ICRC-2-compliant token that is backed 1:1 by BTC held 100% on the mainnet. ckBTC does not rely on a centralized bridge to facilitate the conversion between BTC and ckBTC, which makes it substantially more secure when compared to other traditional \'wrapped\' tokens.',
      denomUnits: [{
          denom: 'uckBTC',
          exponent: 0,
          aliases: ['sat']
        }, {
          denom: 'ckBTC',
          exponent: 8
        }],
      typeAsset: 'unknown',
      base: 'uckBTC',
      name: 'Chain-key Bitcoin',
      display: 'ckBTC',
      symbol: 'ckBTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'bitcoin',
            baseDenom: 'sat'
          },
          provider: 'Omnity Network'
        }],
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/internetcomputer/images/ckbtc.png',
          theme: {
            circle: true,
            primaryColorHex: '#3B00B9',
            backgroundColorHex: '#3B00B9'
          }
        }],
      coingeckoId: 'chain-key-bitcoin',
      socials: {
        website: 'https://internetcomputer.org/ckbtc',
        twitter: 'https://x.com/dfinity'
      }
    }]
};
export default info;