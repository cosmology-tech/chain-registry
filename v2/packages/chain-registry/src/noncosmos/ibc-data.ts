import { IBCData } from '@chain-registry/v2-types';

import * as _ethereum from './ethereum';
import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';

const ibcData: IBCData[] = [
  ..._ethereum.ibcData,
  ..._picasso.ibcData,
  ..._composablepolkadot.ibcData
];

export default ibcData;
