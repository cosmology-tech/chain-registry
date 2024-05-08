import { getCw20Assets } from '../src';
import { assetLists, ibcData } from '@chain-registry/v2';

it('getCw20Assets', () => {
  const chainName = 'osmosis';
  const list = getCw20Assets(chainName, ibcData, assetLists);

  expect(list).toMatchSnapshot();
});
