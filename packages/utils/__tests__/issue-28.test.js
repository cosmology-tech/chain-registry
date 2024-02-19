import assets from '../../../__fixtures__/assets.json';
import ibc from '../../../__fixtures__/chains.json';
import { getIbcDenomByBase } from '../src';

it('ATOM on stargaze', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'stargaze',
    'cosmoshub',
    //
    assets,
    'uatom'
  );
  expect(denom).toEqual(undefined);
});

it('JUNO on stargaze', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'stargaze',
    'juno',
    //
    assets,
    'ujuno'
  );
  expect(denom).toEqual(
    'ibc/448C1061CE97D86CC5E86374CD914870FB8EBA16C58661B5F1D3F46729A2422D'
  );
});

it('STARS on juno', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'juno',
    'stargaze',
    //
    assets,
    'ustars'
  );
  expect(denom).toEqual(
    'ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885'
  );
});
