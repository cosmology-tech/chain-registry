import { AssetList } from '@chain-registry/v2-types';

import * as _ethereum from './ethereum';
import * as _picasso from './picasso';
import * as _composablepolkadot from './composablepolkadot';
import * as _aptos from './aptos';
import * as _arbitrum from './arbitrum';
import * as _avalanche from './avalanche';
import * as _binancesmartchain from './binancesmartchain';
import * as _bitcoin from './bitcoin';
import * as _fantom from './fantom';
import * as _filecoin from './filecoin';
import * as _kusama from './kusama';
import * as _moonbeam from './moonbeam';
import * as _polkadot from './polkadot';
import * as _polygon from './polygon';
import * as _solana from './solana';
import * as _statemine from './statemine';
import * as _stellar from './stellar';
import * as _sui from './sui';
import * as _tinkernet from './tinkernet';
import * as _xrpl from './xrpl';
import * as _avalanchetestnet from './avalanchetestnet';
import * as _binancesmartchaintestnet from './binancesmartchaintestnet';
import * as _ethereumtestnet from './ethereumtestnet';
import * as _fantomtestnet from './fantomtestnet';
import * as _moonbeamtestnet from './moonbeamtestnet';
import * as _polkadottestnet from './polkadottestnet';
import * as _polygontestnet from './polygontestnet';
import * as _ojotestnet from './ojotestnet';

const assetList: AssetList[] = [
  _ethereum.assetList,
  _picasso.assetList,
  _composablepolkadot.assetList,
  _aptos.assetList,
  _arbitrum.assetList,
  _avalanche.assetList,
  _binancesmartchain.assetList,
  _bitcoin.assetList,
  _fantom.assetList,
  _filecoin.assetList,
  _kusama.assetList,
  _moonbeam.assetList,
  _polkadot.assetList,
  _polygon.assetList,
  _solana.assetList,
  _statemine.assetList,
  _stellar.assetList,
  _sui.assetList,
  _tinkernet.assetList,
  _xrpl.assetList,
  _avalanchetestnet.assetList,
  _binancesmartchaintestnet.assetList,
  _ethereumtestnet.assetList,
  _fantomtestnet.assetList,
  _moonbeamtestnet.assetList,
  _polkadottestnet.assetList,
  _polygontestnet.assetList,
  _ojotestnet.assetList
];

export default assetList;
