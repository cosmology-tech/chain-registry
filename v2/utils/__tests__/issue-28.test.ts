import { assetLists, ibcData } from '@chain-registry/v2'

import { getIbcDenomByBase } from '../src';

it('ATOM on stargaze', () => {
  const denom = getIbcDenomByBase(
    ibcData,
    'stargaze',
    'cosmoshub',
    //
    assetLists,
    'uatom'
  );
  expect(denom).toEqual('ibc/9DF365E2C0EF4EA02FA771F638BB9C0C830EFCD354629BDC017F79B348B4E989');
});

it('JUNO on stargaze', () => {
  const denom = getIbcDenomByBase(
    ibcData,
    'stargaze',
    'juno',
    //
    assetLists,
    'ujuno'
  );
  expect(denom).toEqual(
    'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D'
  );
});

it('STARS on juno', () => {
  const denom = getIbcDenomByBase(
    ibcData,
    'juno',
    'stargaze',
    //
    assetLists,
    'ustars'
  );
  expect(denom).toEqual(
    'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885'
  );
});
