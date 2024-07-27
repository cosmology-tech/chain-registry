import { IBCInfo } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _picasso from './picasso';
import * as _solana from './solana';
import * as _composablepolkadot from './composablepolkadot';
import * as _penumbra from './penumbra';

const ibc: IBCInfo[] = [
  ..._ethereum.ibc,
  ..._picasso.ibc,
  ..._solana.ibc,
  ..._composablepolkadot.ibc,
  ..._penumbra.ibc
];

export default ibc;
