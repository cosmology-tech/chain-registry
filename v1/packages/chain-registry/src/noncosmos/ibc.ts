import { IBCInfo } from '@chain-registry/types';

import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _penumbra from './penumbra';

const ibc: IBCInfo[] = [
  ..._picasso.ibc,
  ..._composablepolkadot.ibc,
  ..._penumbra.ibc
];

export default ibc;
