import assets from '../../../__fixtures__/assets.json';
import ibc from '../../../__fixtures__/ibc.json';
import { getIbcDenom } from '../src';

it('AKT on osmosis', () => {
  const denom = getIbcDenom(
    ibc,
    'osmosis',
    'akash',
    //
    assets,
    'AKT'
  );
  expect(denom).toEqual(
    'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
  );
});

it('JUNO on osmosis', () => {
  const denom = getIbcDenom(
    ibc,
    'osmosis',
    'juno',
    //
    assets,
    'JUNO'
  );
  expect(denom).toEqual(
    'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
  );
});

it('OSMO on juno', () => {
  const denom = getIbcDenom(
    ibc,
    'juno',
    'osmosis',
    //
    assets,
    'OSMO'
  );
  expect(denom).toEqual(
    'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518'
  );
});
