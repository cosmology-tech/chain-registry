import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'dydx',
  assets: [{
      description: 'DYDX is a decentralized trading platform focused on derivatives and perpetual contracts, offering a secure and efficient trading experience without intermediaries.',
      extendedDescription: 'DYDX is a leading decentralized trading platform specializing in derivatives and perpetual contracts. It enables users to trade with leverage, providing a sophisticated and efficient trading environment without intermediaries. Built on the Ethereum blockchain, DYDX uses smart contracts to ensure transaction security and transparency, giving users full control over their funds and trades.\n\nThe DYDX platform\'s native token, DYDX, is integral to its ecosystem, used for governance, staking, and fee discounts, incentivizing active participation. DYDX offers a wide range of trading pairs and supports advanced trading features like margin trading and lending. Combining the benefits of decentralized finance with traditional trading platform functionality, DYDX is paving the way for a more open and inclusive financial system.',
      denomUnits: [{
          denom: 'adydx',
          exponent: 0
        }, {
          denom: 'dydx',
          exponent: 18
        }],
      base: 'adydx',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      },
      coingeckoId: 'dydx-chain',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
          theme: {
            primaryColorHex: '#21212f'
          }
        }, {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx-circle.svg',
          theme: {
            circle: true
          }
        }],
      socials: {
        website: 'https://dydx.trade/',
        twitter: 'https://twitter.com/dYdX'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'Noble USDC on dYdX Protocol.',
      denomUnits: [{
          denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
          exponent: 0
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
      name: 'Noble USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-33'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uusdc'
          }
        }],
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
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }]
};
export default info;