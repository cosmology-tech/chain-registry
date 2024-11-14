import { getAssetLists } from '../src';
import { assetLists, ibc as ibcData } from '../test-utils';


it('getAssetLists', () => {
  const chainName = 'osmosis';
  const list = getAssetLists(chainName, ibcData, assetLists);

  expect(list).toMatchSnapshot();
});
