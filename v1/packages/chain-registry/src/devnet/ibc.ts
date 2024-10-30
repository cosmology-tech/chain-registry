import { IBCInfo } from '@chain-registry/types';

import * as _prysmdevnet from './prysmdevnet';

const ibc: IBCInfo[] = [
  ..._prysmdevnet.ibc
];

export default ibc;
