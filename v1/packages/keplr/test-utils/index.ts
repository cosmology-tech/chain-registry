import { AssetList, Chain, IBCInfo } from '@chain-registry/types';

import _assets from '../../../../__fixtures__/v1/assets.json';
import _chains from '../../../../__fixtures__/v1/chains.json';
import _ibc from '../../../../__fixtures__/v1/ibc.json';

export const assets: AssetList[] = _assets as AssetList[];
// TODO update fixtures, they may be missing properties and/or old schema
export const chains: Chain[] = _chains as any;

export const ibc: IBCInfo[] = _ibc as IBCInfo[];
