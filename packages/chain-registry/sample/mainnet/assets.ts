import { AssetList } from '@chain-registry/types';

import * as _8ball from './8ball';
import * as _akash from './akash';

const assets: AssetList[] = [_8ball.assets, _akash.assets];

export default assets;
