import { getCw20Assets } from '../src';
import { assetLists, ibc as ibcData } from '../test-utils';

it('getCw20Assets', () => {
  const chainName = 'osmosis';
  const list = getCw20Assets(chainName, ibcData, assetLists);

  expect(list).toMatchSnapshot();
});
