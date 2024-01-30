import { Chain } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';
import * as _devnet from './devnet/all';

const chains: Chain[] = [
  ..._mainnet.chains,
  ..._testnet.chains,
  ..._devnet.chains
];

export default chains;
