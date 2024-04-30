import { AssetList } from '@chain-registry/v2-types';

import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';
import * as _noncosmos from './noncosmos/index';

const assetLists: AssetList[] = [
  ..._mainnet.assetLists,
  ..._testnet.assetLists,
  ..._devnet.assetLists,
  ..._noncosmos.assetLists
];

export default assetLists;
