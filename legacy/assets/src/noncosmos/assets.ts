import { AssetList } from '@chain-registry/types';

import _ethereum from './ethereum';
import _picasso from './picasso';
import _solana from './solana';
import _composablepolkadot from './composablepolkadot';
import _penumbra from './penumbra'

const assets: AssetList[] = [_ethereum,_picasso,_solana,_composablepolkadot,_penumbra];

export default assets;
