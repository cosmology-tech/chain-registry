import asset_list from './asset_list';
import assets from './assets';
import chain from './chain';
import testnet from './testnet';
import testnet_assets from './testnet_assets';
declare const _default: {
    chain: import("@chain-registry/types").Chain;
    assets: import("@chain-registry/types").AssetList;
    asset_list: import("@chain-registry/types").AssetList;
    testnet: import("@chain-registry/types").Chain;
    testnet_assets: import("@chain-registry/types").AssetList;
};
export default _default;
export { asset_list, assets, chain, testnet, testnet_assets };
