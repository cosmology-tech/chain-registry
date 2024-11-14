import { getIbcAssets } from '../src';
import { assetLists, ibc as ibcData } from '../test-utils';

it('getIbcAssets', () => {
  const chainName = 'osmosis';
  const list = getIbcAssets(chainName, ibcData, assetLists);
  expect(list).toMatchSnapshot();
});
