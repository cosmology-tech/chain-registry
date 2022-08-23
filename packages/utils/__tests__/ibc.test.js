import assets from '../../../__fixtures__/assets.json';
import ibc from '../../../__fixtures__/ibc.json';
import { getIbcDenomByBase, ibcDenom } from '../src';

it('AKT on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'akash',
    //
    assets,
    'uakt'
  );
  expect(denom).toEqual(
    'ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4'
  );
});

it('JUNO on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'juno',
    //
    assets,
    'ujuno'
  );
  expect(denom).toEqual(
    'ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED'
  );
});

// osmosisd q ibc-transfer denom-trace 8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961

// denom_trace:
//   base_denom: gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006
//   path: transfer/channel-4/transfer/channel-38

it('PSTAKE on osmosis', () => {
  const denom = ibcDenom(
    [
      {
        channelId: 'channel-4',
        portId: 'transfer'
      },
      {
        channelId: 'channel-38',
        portId: 'transfer'
      }
    ],
    'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
  );
  expect(denom).toEqual(
    'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
  );
});

xit('PSTAKE on osmosis', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'osmosis',
    'persistence',
    //
    assets,
    'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444'
  );
  expect(denom).toEqual(
    'ibc/8061A06D3BD4D52C4A28FFECF7150D370393AF0BA661C3776C54FF32836C3961'
  );
});

it('OSMO on juno', () => {
  const denom = getIbcDenomByBase(
    ibc,
    'juno',
    'osmosis',
    //
    assets,
    'uosmo'
  );
  expect(denom).toEqual(
    'ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518'
  );
});
