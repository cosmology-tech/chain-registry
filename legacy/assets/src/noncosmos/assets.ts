import { AssetList } from '@chain-registry/types';

import _ethereum from './ethereum';
import _picasso from './picasso';
import _solana from './solana';
import _composablepolkadot from './composablepolkadot'

const assets: AssetList[] = [_ethereum,_picasso,_solana,_composablepolkadot];

export default assets;
