import { AssetList } from '@chain-registry/types';

import * as _bitcannadevnet2 from './bitcannadevnet2';
import * as _celestiatestnet2 from './celestiatestnet2';
import * as _impacthubdevnet from './impacthubdevnet';
import * as _kyvedevnet from './kyvedevnet';
import * as _manifestdevnet from './manifestdevnet';
import * as _neuradevnet from './neuradevnet';
import * as _nibirudevnet from './nibirudevnet';
import * as _nibirudevnet2 from './nibirudevnet2';
import * as _nibirudevnet3 from './nibirudevnet3';
import * as _prysmdevnet from './prysmdevnet';
import * as _seidevnet3 from './seidevnet3';

const assets: AssetList[] = [
  _bitcannadevnet2.assets,
  _celestiatestnet2.assets,
  _impacthubdevnet.assets,
  _kyvedevnet.assets,
  _manifestdevnet.assets,
  _neuradevnet.assets,
  _nibirudevnet.assets,
  _nibirudevnet2.assets,
  _nibirudevnet3.assets,
  _prysmdevnet.assets,
  _seidevnet3.assets
];

export default assets;
