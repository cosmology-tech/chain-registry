import assets from '../../../__fixtures__/assets.json';
import ibc from '../../../__fixtures__/ibc.json';
import { getCw20Assets } from '../src';

it('getCw20Assets', () => {
  const chainName = 'osmosis';
  const list = getCw20Assets(chainName, ibc, assets);

  expect(list).toMatchSnapshot();
});
