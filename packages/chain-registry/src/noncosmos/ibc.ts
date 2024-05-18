import { IBCInfo } from '@chain-registry/types';

import * as _ethereum from './ethereum';
import * as _picasso from './picasso';
import * as _solana from './solana';
import * as _composablepolkadot from './composablepolkadot';

const ibc: IBCInfo[] = [
  ..._ethereum.ibc,
  ..._picasso.ibc,
  ..._solana.ibc,
  ..._composablepolkadot.ibc
];

export default ibc;
