import { IBCData } from '@chain-registry/v2-types';

import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _penumbra from './penumbra';

const ibcData: IBCData[] = [
  ..._picasso.ibcData,
  ..._composablepolkadot.ibcData,
  ..._penumbra.ibcData
];

export default ibcData;
