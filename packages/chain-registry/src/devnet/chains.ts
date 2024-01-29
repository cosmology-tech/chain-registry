import { Chain } from '@chain-registry/types';

import * as _bitcannadevnet2 from './bitcannadevnet2';
import * as _celestiatestnet2 from './celestiatestnet2';
import * as _impacthubdevnet from './impacthubdevnet';
import * as _kyvedevnet from './kyvedevnet';
import * as _seidevnet3 from './seidevnet3'

const chains: Chain[] = [_bitcannadevnet2.chain,_celestiatestnet2.chain,_impacthubdevnet.chain,_kyvedevnet.chain,_seidevnet3.chain];

export default chains;
