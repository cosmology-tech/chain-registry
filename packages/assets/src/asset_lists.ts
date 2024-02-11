import { AssetList } from '@chain-registry/types';

import _noncosmos from './noncosmos/assets';
import _mainnet from './mainnet/assets';
import _testnet from './testnet/assets';

const asset_lists: AssetList[] = [..._noncosmos, ..._mainnet, ..._testnet];

export default asset_lists;
