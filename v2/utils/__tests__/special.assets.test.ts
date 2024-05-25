import { assetLists, ibcData } from '@chain-registry/v2'

import {
  getAssetLists,
  getIbcAssetPath,
  getIbcDenomByBase,
  ibcDenom
} from '../src';

it('getAssetLists', () => {
  const chainName = 'persistence';
  const list = getAssetLists(chainName, ibcData, assetLists);
  expect(list).toMatchSnapshot();
});

it('NETA on osmosis getIbcDenomByBaseForCw20', () => {
  const denom = getIbcDenomByBase(
    ibcData,
    'osmosis',
    'juno',
    //
    assetLists,
    'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
  );
  expect(denom).toEqual(
    'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
  );
});

it('NETA on osmosis ibcDenom', () => {
  const denom = ibcDenom(
    [
      {
        channelId: 'channel-169',
        portId: 'transfer'
      }
    ],
    'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
  );
  expect(denom).toEqual(
    'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
  );
});

xit('NETA path on osmosis', () => {
  const path = getIbcAssetPath(
    ibcData,
    'osmosis',
    'juno',
    //
    assetLists,
    // 'uneta'
    'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
  );
  expect(path).toEqual([
    {
      channelId: 'channel-169',
      portId: 'transfer'
    }
  ]);
});

it('AKASH path on osmosis', () => {
  const path = getIbcAssetPath(
    ibcData,
    'osmosis',
    'akash',
    //
    assetLists,
    'uakt'
  );
  expect(path).toEqual([
    {
      // THIS IS THE CHANNEL TO AKASH
      // ON OSMOSIS
      channelId: 'channel-1',
      portId: 'transfer'
    }
  ]);
});
