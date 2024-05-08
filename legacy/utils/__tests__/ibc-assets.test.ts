import { getIbcAssets } from '../src';
import { assets, ibc } from '../test-utils';

it('getIbcAssets', () => {
  const chainName = 'osmosis';
  const list = getIbcAssets(chainName, ibc, assets);
  expect(list).toMatchSnapshot();
});
