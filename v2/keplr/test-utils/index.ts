import { AssetList, Chain, IBCData } from '@chain-registry/v2-types';
import { getFixturesRegistry } from '@chain-registry/workflows';

const fixturesReg = getFixturesRegistry();
// @ts-ignore
export const assets: AssetList[] = fixturesReg.assetLists
// TODO update fixtures, they may be missing properties and/or old schema
// @ts-ignore
export const chains: Chain[] = fixturesReg.chains;
// @ts-ignore
export const ibc: IBCData[] = fixturesReg.ibcData;
