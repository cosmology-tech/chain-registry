import { IBCData } from '@chain-registry/v2-types';

import * as _mainnet from './mainnet/index';
import * as _testnet from './testnet/index';
import * as _devnet from './devnet/index';
import * as _noncosmos from './noncosmos/index';

const ibcData: IBCData[] = [
  ..._mainnet.ibcData,
  ..._testnet.ibcData,
  ..._devnet.ibcData,
  ..._noncosmos.ibcData
];

export default ibcData;
