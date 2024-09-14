import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';
import * as _noncosmos from './noncosmos/index';

const assets = [
  ..._mainnet.assets,
  ..._testnet.assets,
  ..._devnet.assets,
  ..._noncosmos.assets
];

export default assets;
