import { IBCInfo } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';

const ibc: IBCInfo[] = [..._mainnet.ibc, ..._testnet.ibc];

export default ibc;
