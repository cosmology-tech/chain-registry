import { AssetList } from '@chain-registry/v2-types';

import * as _bitcannadevnet2 from './bitcannadevnet2';
import * as _celestiatestnet2 from './celestiatestnet2';
import * as _impacthubdevnet from './impacthubdevnet';
import * as _kyvedevnet from './kyvedevnet';
import * as _neuradevnet from './neuradevnet';
import * as _nibirudevnet from './nibirudevnet';
import * as _nibirudevnet2 from './nibirudevnet2';
import * as _nibirudevnet3 from './nibirudevnet3';
import * as _nibirudevnet4 from './nibirudevnet4';
import * as _seidevnet3 from './seidevnet3';

const assetList: AssetList[] = [
  _bitcannadevnet2.assetList,
  _celestiatestnet2.assetList,
  _impacthubdevnet.assetList,
  _kyvedevnet.assetList,
  _neuradevnet.assetList,
  _nibirudevnet.assetList,
  _nibirudevnet2.assetList,
  _nibirudevnet3.assetList,
  _nibirudevnet4.assetList,
  _seidevnet3.assetList
];

export default assetList;
