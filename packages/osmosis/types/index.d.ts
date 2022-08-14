import assets from './assets';
import chain from './chain';
import ibc_assets from './ibc_assets';
declare const _default: {
  chain: import('@chain-registry/types').Chain;
  assets: import('@chain-registry/types').AssetList;
  ibc_assets: import('@chain-registry/types').IBCAsset;
};
export default _default;
export { assets, chain, ibc_assets };
