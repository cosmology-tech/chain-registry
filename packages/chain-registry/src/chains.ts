import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';

const chains = [
  ..._mainnet.chains,
  ..._testnet.chains,
  ..._devnet.chains
];

export default chains;
