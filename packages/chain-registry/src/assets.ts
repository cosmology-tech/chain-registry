import type { AssetList } from '@chain-registry/types';

import { mainnetAssets } from './mainnet';
import { testnetAssets } from './testnet';
import { noncosmosAssets } from './noncosmos';

const assets: AssetList[] = [
  ...mainnetAssets,
  ...testnetAssets,
  ...noncosmosAssets
];

export default assets;
