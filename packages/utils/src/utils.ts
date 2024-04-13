import { AssetList } from "@chain-registry/types";

export const customFind = <T>(
  array: T[],
  filterFn: (item: T) => boolean
): T | undefined => {
  const filteredItems = array.filter(filterFn);
  const filterCount = filteredItems.length;
  if (filterCount > 1) {
    throw new Error(`Ambiguity Error: ${filterCount} items found.`);
  }

  return filteredItems[0];
};


export const getNativeAssets = (
  assets: AssetList[]
): AssetList[] => {
  return assets.map(list => {
    const clone = JSON.parse(JSON.stringify(list));
    clone.assets = list.assets.filter(asset => {
      switch (true) {
        case asset.base.startsWith('factory/'):
          return false;

        case asset.base.startsWith('ft') && list.chain_name === 'bitsong':
          return false;

        case asset.base.startsWith('erc20/'):
          return true;

        case asset.base.startsWith('ibc/'):
          return false;

        case asset.base.startsWith('cw20:'):
          return true;

        default:
          if (!asset.traces || !asset.traces.length) {
            // asset.type_asset = 'sdk.coin'
            return true;
          }
          return false;
      }
    });
    return clone;
  });
};