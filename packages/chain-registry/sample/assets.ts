import { AssetList } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';

const assets: AssetList[] = [..._mainnet.assets, ..._testnet.assets];

export default assets;
