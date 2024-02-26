import { AssetList } from '@chain-registry/types';

import _mainnet from './mainnet/assets';
import _testnet from './testnet/assets';
import _noncosmos from './noncosmos/assets';

const asset_lists: AssetList[] = [..._mainnet, ..._testnet, ..._noncosmos];

export default asset_lists;
