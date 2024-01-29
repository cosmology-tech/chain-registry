import { Chain } from '@chain-registry/types';

import * as _akashtestnet from './akashtestnet';
import * as _cheqdtestnet from './cheqdtestnet';

const chains: Chain[] = [_akashtestnet.chain, _cheqdtestnet.chain];

export default chains;
