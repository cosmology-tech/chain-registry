import { getCw20Assets } from '../src';
import { assets, ibc } from '../test-utils';

it('getCw20Assets', () => {
  const chainName = 'osmosis';
  const list = getCw20Assets(chainName, ibc, assets);

  expect(list).toMatchSnapshot();
});
