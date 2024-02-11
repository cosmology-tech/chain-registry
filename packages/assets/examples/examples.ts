// backward compatibility: get asset_lists as before:
import { asset_lists } from '../src';

console.log(asset_lists);

// get mainnet asset lists only
import main_asset_lists from '../src/mainnet/assets';

console.log(main_asset_lists);

// get single assets
import assets from '../src/mainnet/akash';

console.log(assets);
