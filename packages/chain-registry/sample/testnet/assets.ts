import { AssetList } from '@chain-registry/types';

import * as _akashtestnet from './akashtestnet';
import * as _cheqdtestnet from './cheqdtestnet';

const assets: AssetList[] = [_akashtestnet.assets, _cheqdtestnet.assets];

export default assets;
