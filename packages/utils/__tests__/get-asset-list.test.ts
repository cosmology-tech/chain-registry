import { getAssetLists } from '../src';
import { ibcData, assetLists } from '@chain-registry/v2';


it('getAssetLists', () => {
  const chainName = 'osmosis';
  const list = getAssetLists(chainName, ibcData, assetLists);

  expect(list).toMatchSnapshot();
});
