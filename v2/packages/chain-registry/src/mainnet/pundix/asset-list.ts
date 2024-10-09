import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'pundix',
  assets: [{
      description: 'PUNDIX token is the native token that functions within the Pundi X ecosystem, including PundiX Chain and XPOS. PUNDIX has several core use cases, including:\n- Payment for goods and services from merchants through XPOS\n- Gas Fee on PundiX Chain\n- Listing tokens in the XPOS\n- Merchant payments for loyalty programs and ads',
      denomUnits: [{
          denom: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
          exponent: 0
        }, {
          denom: 'PUNDIX',
          exponent: 18
        }],
      typeAsset: 'ics20',
      base: 'ibc/55367B7B6572631B78A93C66EF9FDFCE87CDE372CC4ED7848DA78C1EB1DCDD78',
      name: 'Pundi X Token',
      display: 'PUNDIX',
      symbol: 'PUNDIX',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
      },
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'fxcore',
            baseDenom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38',
            channelId: 'channel-0'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'fxcore',
            baseDenom: 'eth0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/pundi-x-token-logo.svg'
        }],
      coingeckoId: 'pundi-x-2',
      socials: {
        website: 'https://pundix.com',
        twitter: 'https://twitter.com/PundiXLabs'
      }
    }, {
      description: 'Purse is the decentralised loyalty program for physical stores and merchants. PURSE token shall serve as governance token of the PURSE Merchant loyalty point platform, the gas fee as well as the transaction fee on PURSE Merchant platform. To launch any merchant loyalty tokens and do transaction on the merchant platform, users and merchants need Purse tokens.',
      denomUnits: [{
          denom: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
          exponent: 0
        }, {
          denom: 'PURSE',
          exponent: 18
        }],
      typeAsset: 'sdk.coin',
      base: 'bsc0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
      name: 'PURSE Token',
      display: 'PURSE',
      symbol: 'PURSE',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg'
      },
      traces: [{
          type: 'bridge',
          counterparty: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C',
            contract: '0x84238c00c8313920826D798e3cF6793Ef4F610ad'
          },
          provider: 'Function X'
        }],
      images: [{
          imageSync: {
            chainName: 'binancesmartchain',
            baseDenom: '0x29a63F4B209C29B4DC47f06FFA896F32667DAD2C'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pundix/images/purse-token-logo.png'
        }],
      coingeckoId: 'pundi-x-purse',
      socials: {
        website: 'https://purse.land',
        twitter: 'https://twitter.com/Purse_Land'
      }
    }]
};
export default info;