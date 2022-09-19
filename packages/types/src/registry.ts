import { AssetList } from './assets';
import { Chain } from './chains';
import { IBCInfo } from './ibc';

export class ChainRegistry {
  assetLists: AssetList[];
  chains: Chain[];
  ibcData: IBCInfo[];
}
