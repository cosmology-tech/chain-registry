import { AssetList } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';
import * as _devnet from './devnet/all';
import * as _noncosmos from './noncosmos/all';

const assets: AssetList[] = [
  ..._mainnet.assets,
  ..._testnet.assets,
  ..._devnet.assets,
  ..._noncosmos.assets
];

export default assets;
