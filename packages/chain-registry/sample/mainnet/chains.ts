import { Chain } from '@chain-registry/types';

import * as _8ball from './8ball';
import * as _akash from './akash';

const chains: Chain[] = [_8ball.chain, _akash.chain];

export default chains;
