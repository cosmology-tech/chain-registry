import { AssetList } from './assetlist.schema';
import { Chain } from './chain.schema';
import { IBCData } from './ibc_data.schema';

export interface ChainRegistry {
  assetLists: AssetList[];
  chains: Chain[];
  ibcData: IBCData[];
}
