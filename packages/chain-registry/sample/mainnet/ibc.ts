import { IBCInfo } from '@chain-registry/types';

import * as _8ball from './8ball';
import * as _akash from './akash';

const ibc: IBCInfo[] = [..._8ball.ibc_chain1, ..._akash.ibc_chain1];

export default ibc;
