import { Chain } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';

const chains: Chain[] = [..._mainnet.chains, ..._testnet.chains];

export default chains;
