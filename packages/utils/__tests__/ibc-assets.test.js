import assets from '../__fixtures__/assets.json';
import ibc from '../__fixtures__/ibc.json';
import { getIbcAssets } from '../src';

// TODO
// create ibc_assets object
// superset of assets

it('getIbcAssets', () => {
  const chainName = 'osmosis';
  const list = getIbcAssets(chainName, ibc, assets);

  expect(list).toMatchSnapshot();
});
