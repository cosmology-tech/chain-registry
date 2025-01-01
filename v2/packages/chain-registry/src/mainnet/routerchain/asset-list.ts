import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'routerchain',
  assets: [{
      description: 'The native token of Router Chain',
      extendedDescription: 'Router Chain is a PoS L1 that allows stateful bridging–enabling truly omnichain dapps that can abstract chains from the users and aggregate liquidity across multiple chains.',
      denomUnits: [{
          denom: 'route',
          exponent: 0
        }, {
          denom: 'ROUTE',
          exponent: 18
        }],
      base: 'route',
      name: 'Router Chain',
      display: 'ROUTE',
      symbol: 'ROUTE',
      coingeckoId: 'router-protocol-2',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/routerchain/images/router.png',
          theme: {
            primaryColorHex: '#cb0766'
          }
        }],
      socials: {
        website: 'https://www.routerprotocol.com/',
        twitter: 'https://x.com/routerprotocol'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'USDC is a fully collateralized US Dollar stablecoin developed by CENTRE, the open source project with Circle being the first of several forthcoming issuers.',
      denomUnits: [{
          denom: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
          exponent: 0,
          aliases: ['microusdc', 'uusdc']
        }, {
          denom: 'usdc',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/B9E4FD154C92D3A23BEA029906C4C5FF2FE74CB7E3A058290B77197A263CF88B',
      name: 'USDC',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Circle'
        },
        {
          type: 'additional-mintage',
          counterparty: {
            chainName: 'ethereum',
            baseDenom: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
          },
          provider: 'Circle'
        },
        {
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-119'
          },
          chain: {
            channelId: 'channel-13',
            path: 'transfer/channel-13/uusdc'
          }
        }
      ],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      }
    }]
};
export default info;