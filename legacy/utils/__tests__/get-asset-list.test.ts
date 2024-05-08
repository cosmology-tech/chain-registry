import { getAssetLists } from '../src';
import { assets, ibc } from '../test-utils';

it('getAssetLists', () => {
  const chainName = 'osmosis';
  const list = getAssetLists(chainName, ibc, assets);

  expect(list).toMatchSnapshot();
});
