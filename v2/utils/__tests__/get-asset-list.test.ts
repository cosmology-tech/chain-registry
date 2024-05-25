import { assetLists,ibcData } from '@chain-registry/v2';

import { getAssetLists } from '../src';


it('getAssetLists', () => {
  const chainName = 'osmosis';
  const list = getAssetLists(chainName, ibcData, assetLists);

  expect(list).toMatchSnapshot();
});
