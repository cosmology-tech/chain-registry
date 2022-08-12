import assets from './assets.json';
import chains from './chains.json';
import ibc from './ibc.json';
import ibc_assets from './ibc_assets.json';
import { Chain } from './types';

interface ChainRegistryModule {
  chains: Chain[]
}

const chainRegistry: ChainRegistryModule = {
  assets,
  chains,
  ibc,
  ibc_assets
}

export default chainRegistry;
