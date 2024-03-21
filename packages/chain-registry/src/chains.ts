import { Chain } from '@chain-registry/types';

import { mainnetChains } from './mainnet';
import { testnetChains } from './testnet';

const chains: Chain[] = [...mainnetChains, ...testnetChains];

export default chains;
