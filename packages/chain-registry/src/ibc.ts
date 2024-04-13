import { IBCInfo } from '@chain-registry/types';

import * as _mainnet from './mainnet/all';
import * as _testnet from './testnet/all';
import * as _noncosmos from './noncosmos/all';

const ibc: IBCInfo[] = [
  ..._mainnet.ibc,
  ..._testnet.ibc,
  ..._noncosmos.ibc
];

export default ibc;
