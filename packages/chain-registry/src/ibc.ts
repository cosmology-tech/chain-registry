import type { IBCInfo } from '@chain-registry/types';

import { mainnetIbc } from './mainnet';
import { testnetIbc } from './testnet';

const ibc: IBCInfo[] = [...mainnetIbc, ...testnetIbc];

export default ibc;
