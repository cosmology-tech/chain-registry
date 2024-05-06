import { getIbcAssets } from '../src';
import { assetLists, ibcData } from '@chain-registry/v2';

it('getIbcAssets', () => {
  const chainName = 'osmosis';
  const list = getIbcAssets(chainName, ibcData, assetLists);
  expect(list).toMatchSnapshot();
});
