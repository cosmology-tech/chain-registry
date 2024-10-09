import { assetLists, ibcData } from '@chain-registry/v2';

import { getIbcAssets } from '../src';

it('getIbcAssets', () => {
  const chainName = 'osmosis';
  const list = getIbcAssets(chainName, ibcData, assetLists);
  expect(list).toMatchSnapshot();
});
