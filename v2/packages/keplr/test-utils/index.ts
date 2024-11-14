import { AssetList, Chain, IBCData } from '@chain-registry/v2-types';

import _assets from '../../../../__fixtures__/v2/assets.json';
import _chains from '../../../../__fixtures__/v2/chains.json';
import _ibc from '../../../../__fixtures__/v2/ibc.json';

export const assetLists: AssetList[] = _assets as AssetList[];
// TODO update fixtures, they may be missing properties and/or old schema
export const chains: Chain[] = _chains as any;

export const ibc: IBCData[] = _ibc as IBCData[];
