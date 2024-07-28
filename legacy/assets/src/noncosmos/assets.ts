import { AssetList } from '@chain-registry/types';

import _picasso from './picasso';
import _composablepolkadot from './composablepolkadot';
import _penumbra from './penumbra'

const assets: AssetList[] = [_picasso,_composablepolkadot,_penumbra];

export default assets;
