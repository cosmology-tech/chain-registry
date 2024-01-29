import { AssetList } from '@chain-registry/types';

import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _aptos from './aptos';
import * as _arbitrum from './arbitrum';
import * as _avalanche from './avalanche';
import * as _binancesmartchain from './binancesmartchain';
import * as _bitcoin from './bitcoin';
import * as _ethereum from './ethereum';
import * as _fantom from './fantom';
import * as _filecoin from './filecoin';
import * as _kusama from './kusama';
import * as _moonbeam from './moonbeam';
import * as _polkadot from './polkadot';
import * as _polygon from './polygon';
import * as _solana from './solana';
import * as _statemine from './statemine';
import * as _sui from './sui';
import * as _avalanchetestnet from './avalanchetestnet';
import * as _binancesmartchaintestnet from './binancesmartchaintestnet';
import * as _ethereumtestnet from './ethereumtestnet';
import * as _fantomtestnet from './fantomtestnet';
import * as _moonbeamtestnet from './moonbeamtestnet';
import * as _polkadottestnet from './polkadottestnet';
import * as _polygontestnet from './polygontestnet';
import * as _ojotestnet from './ojotestnet'

const assets: AssetList[] = [_picasso.assets,_composablepolkadot.assets,_aptos.assets,_arbitrum.assets,_avalanche.assets,_binancesmartchain.assets,_bitcoin.assets,_ethereum.assets,_fantom.assets,_filecoin.assets,_kusama.assets,_moonbeam.assets,_polkadot.assets,_polygon.assets,_solana.assets,_statemine.assets,_sui.assets,_avalanchetestnet.assets,_binancesmartchaintestnet.assets,_ethereumtestnet.assets,_fantomtestnet.assets,_moonbeamtestnet.assets,_polkadottestnet.assets,_polygontestnet.assets,_ojotestnet.assets];

export default assets;
