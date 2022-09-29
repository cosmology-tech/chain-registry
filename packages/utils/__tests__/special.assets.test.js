import { assets, ibc } from 'chain-registry';

import {
  getAssetLists,
  getIbcAssetPath,
  getIbcDenomByBase,
  ibcDenom
} from '../src';

it('getAssetLists', () => {
  const chainName = 'persistence';
  const list = getAssetLists(chainName, ibc, assets);
  expect(list).toMatchSnapshot();
});

it('NETA on osmosis getIbcDenomByBaseForCw20', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'juno',
    //
    assets,
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
        channel_id: 'channel-169',
        port_id: 'transfer'
      }
    ],
    'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
  );
  expect(denom).toEqual(
    'ibc/297C64CC42B5A8D8F82FE2EBE208A6FE8F94B86037FA28C4529A23701C228F7A'
  );
});

it('NETA path on osmosis', () => {
  const path = getIbcAssetPath(
    ibc,
    'osmosis',
    'juno',
    //
    assets,
    // 'uneta'
    'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
  );
  expect(path).toEqual([
    {
      channel_id: 'channel-169',
      port_id: 'transfer'
    }
  ]);
});

it('AKASH path on osmosis', () => {
  const path = getIbcAssetPath(
    ibc,
    'osmosis',
    'akash',
    //
    assets,
    'uakt'
  );
  expect(path).toEqual([
    {
      // THIS IS THE CHANNEL TO AKASH
      // ON OSMOSIS
      channel_id: 'channel-1',
      port_id: 'transfer'
    }
  ]);
});
