import { AssetList } from './assets';
import { Chain } from './chains';
import { IBCInfo } from './ibc';
export interface ChainRegistry {
    assetLists: AssetList[];
    chains: Chain[];
    ibcData: IBCInfo[];
}
