import { IBCInfo } from '@chain-registry/types';

import * as _akashtestnet from './akashtestnet';
import * as _archwaytestnet from './archwaytestnet';
import * as _axelartestnet from './axelartestnet';
import * as _celestiatestnet3 from './celestiatestnet3';
import * as _chain4energytestnet from './chain4energytestnet';
import * as _composabletestnet from './composabletestnet';
import * as _cosmoshubtestnet from './cosmoshubtestnet';
import * as _doravotatestnet from './doravotatestnet';
import * as _empowertestnet from './empowertestnet';
import * as _entrypointtestnet from './entrypointtestnet';
import * as _impacthubtestnet from './impacthubtestnet';
import * as _injectivetestnet from './injectivetestnet';
import * as _junotestnet from './junotestnet';
import * as _kyvetestnet from './kyvetestnet';
import * as _likecointestnet from './likecointestnet';
import * as _marstestnet from './marstestnet';
import * as _neutrontestnet from './neutrontestnet';
import * as _nobletestnet from './nobletestnet';
import * as _noistestnet from './noistestnet';
import * as _nolustestnet from './nolustestnet';
import * as _osmosistestnet from './osmosistestnet';

const ibc: IBCInfo[] = [
  ..._akashtestnet.ibc_chain1,
  ..._archwaytestnet.ibc_chain1,
  ..._axelartestnet.ibc_chain1,
  ..._celestiatestnet3.ibc_chain1,
  ..._chain4energytestnet.ibc_chain1,
  ..._composabletestnet.ibc_chain1,
  ..._cosmoshubtestnet.ibc_chain1,
  ..._doravotatestnet.ibc_chain1,
  ..._empowertestnet.ibc_chain1,
  ..._entrypointtestnet.ibc_chain1,
  ..._impacthubtestnet.ibc_chain1,
  ..._injectivetestnet.ibc_chain1,
  ..._junotestnet.ibc_chain1,
  ..._kyvetestnet.ibc_chain1,
  ..._likecointestnet.ibc_chain1,
  ..._marstestnet.ibc_chain1,
  ..._neutrontestnet.ibc_chain1,
  ..._nobletestnet.ibc_chain1,
  ..._noistestnet.ibc_chain1,
  ..._nolustestnet.ibc_chain1,
  ..._osmosistestnet.ibc_chain1
];

export default ibc;
