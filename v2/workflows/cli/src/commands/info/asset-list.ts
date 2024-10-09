import { AssetList } from '@chain-registry/interfaces';
import chalk from 'chalk';

import { displayAsset } from './asset';

export function displayAssetList(assetList: AssetList): void {
  console.log(chalk.bold.blue(`Asset List for Chain: ${assetList.chain_name}`));
  console.log(chalk.underline(`${assetList.assets.length} Assets Found:`));
  assetList.assets.forEach(asset => {
    displayAsset(asset); // Call displayAsset for each asset in the list
  });
}
