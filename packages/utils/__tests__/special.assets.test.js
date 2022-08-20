import assets from '../../../__fixtures__/assets.json';
import ibc from '../../../__fixtures__/ibc.json';
import { getAssetLists } from '../src';

it('getAssetLists', () => {
  const chainName = 'persistence';
  const list = getAssetLists(chainName, ibc, assets);
  expect(list).toMatchSnapshot();
});
