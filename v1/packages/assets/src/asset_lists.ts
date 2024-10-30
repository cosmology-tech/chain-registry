import { AssetList } from '@chain-registry/types';

import _mainnet from './mainnet/assets';
import _testnet from './testnet/assets';
import _devnet from './devnet/assets';
import _noncosmos from './noncosmos/assets'

const asset_lists: AssetList[] = [..._mainnet,..._testnet,..._devnet,..._noncosmos];

export default asset_lists;
