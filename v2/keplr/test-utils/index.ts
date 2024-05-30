// @ts-nocheck 
import { AssetList, Chain, IBCData } from '@chain-registry/v2-types';
import { getFixturesRegistry } from '@chain-registry/workflows';

const fixturesReg = getFixturesRegistry();

export const assets: AssetList[] = fixturesReg.assetLists
// TODO update fixtures, they may be missing properties and/or old schema
export const chains: Chain[] = fixturesReg.chains;

export const ibc: IBCData[] = fixturesReg.ibcData;
