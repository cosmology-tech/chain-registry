import { IBCInfo } from '@chain-registry/types';

import * as _akashtestnet from './akashtestnet';
import * as _cheqdtestnet from './cheqdtestnet';

const ibc: IBCInfo[] = [
  ..._akashtestnet.ibc_chain1,
  ..._cheqdtestnet.ibc_chain1
];

export default ibc;
