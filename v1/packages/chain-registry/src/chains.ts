import { Chain } from '@chain-registry/types';

import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';

const chains: Chain[] = [
  ..._mainnet.chains,
  ..._testnet.chains,
  ..._devnet.chains
];

export default chains;
