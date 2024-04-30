import { AssetList } from '@chain-registry/v2-types';

import * as _bitcannadevnet2 from './bitcannadevnet2';
import * as _celestiatestnet2 from './celestiatestnet2';
import * as _impacthubdevnet from './impacthubdevnet';
import * as _kyvedevnet from './kyvedevnet';
import * as _seidevnet3 from './seidevnet3';

const assetList: AssetList[] = [
  _bitcannadevnet2.assetList,
  _celestiatestnet2.assetList,
  _impacthubdevnet.assetList,
  _kyvedevnet.assetList,
  _seidevnet3.assetList
];

export default assetList;
